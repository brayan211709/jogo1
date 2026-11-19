#!/usr/bin/env python3
"""
Arena de Jogos
Rode no VS Code ou terminal: python server.py
Abra: http://127.0.0.1:5000
"""

import http.server
import socketserver
import json
import sqlite3
import random
import os
from pathlib import Path

PORT = 5000
BASE = Path(__file__).parent
DB_PATH = BASE / "jogadores.bd"

# ---------- BANCO (jogadores.bd) ----------
def get_db():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn

def init_db():
    conn = get_db()
    c = conn.cursor()
    c.execute("""
        CREATE TABLE IF NOT EXISTS jogadores (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT UNIQUE NOT NULL,
            criado_em TEXT DEFAULT (datetime('now','localtime'))
        )
    """)
    conn.commit()
    conn.close()
    print(f"Banco pronto: {DB_PATH}")

# ---------- API ----------
class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(BASE), **kwargs)

    def _json(self, data, status=200):
        body = json.dumps(data, ensure_ascii=False).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.send_header("Access-Control-Allow-Origin", "*")
        self.end_headers()
        self.wfile.write(body)

    def _html_file(self, name):
        path = BASE / name
        if not path.exists():
            self.send_error(404)
            return
        data = path.read_bytes()
        self.send_response(200)
        self.send_header("Content-Type", "text/html; charset=utf-8")
        self.send_header("Content-Length", str(len(data)))
        self.end_headers()
        self.wfile.write(data)

    def do_OPTIONS(self):
        self.send_response(204)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, DELETE, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.end_headers()

    def do_GET(self):
        path = self.path.split("?")[0]
        if path in ("/", "/index.html"):
            self._html_file("index.html")
        elif path == "/api/jogadores":
            conn = get_db()
            rows = conn.execute(
                "SELECT id, nome, criado_em FROM jogadores ORDER BY nome COLLATE NOCASE"
            ).fetchall()
            conn.close()
            lista = [{"id": r["id"], "nome": r["nome"], "criado_em": r["criado_em"]} for r in rows]
            self._json({"jogadores": lista})
        elif path.startswith("/static/"):
            super().do_GET()
        else:
            self.send_error(404)

    def do_POST(self):
        path = self.path.split("?")[0]
        length = int(self.headers.get("Content-Length", 0))
        raw = self.rfile.read(length).decode("utf-8") if length else "{}"
        try:
            data = json.loads(raw) if raw else {}
        except Exception:
            data = {}

        if path == "/api/jogadores":
            nome = (data.get("nome") or "").strip()
            if not nome:
                return self._json({"erro": "Nome obrigatório"}, 400)
            if len(nome) < 2:
                return self._json({"erro": "Mínimo 2 letras"}, 400)
            if len(nome) > 20:
                return self._json({"erro": "Máximo 20 letras"}, 400)
            conn = get_db()
            try:
                cur = conn.execute("INSERT INTO jogadores (nome) VALUES (?)", (nome,))
                conn.commit()
                jid = cur.lastrowid
                row = conn.execute(
                    "SELECT id, nome, criado_em FROM jogadores WHERE id = ?", (jid,)
                ).fetchone()
                conn.close()
                self._json({
                    "ok": True,
                    "jogador": {"id": row["id"], "nome": row["nome"], "criado_em": row["criado_em"]}
                })
            except sqlite3.IntegrityError:
                conn.close()
                self._json({"erro": "Nome já cadastrado"}, 409)
        else:
            self.send_error(404)

    def do_DELETE(self):
        path = self.path.split("?")[0]
        if path.startswith("/api/jogadores/"):
            try:
                jid = int(path.rstrip("/").split("/")[-1])
            except ValueError:
                return self._json({"erro": "ID inválido"}, 400)
            conn = get_db()
            cur = conn.execute("DELETE FROM jogadores WHERE id = ?", (jid,))
            conn.commit()
            conn.close()
            if cur.rowcount == 0:
                return self._json({"erro": "Não encontrado"}, 404)
            self._json({"ok": True, "id": jid})
        else:
            self.send_error(404)

    def log_message(self, fmt, *args):
        print(f"[{self.log_date_time_string()}] {args[0]}")


if __name__ == "__main__":
    init_db()
    print("")
    print("Arena de Jogos")
    print(f"Abra no navegador: http://127.0.0.1:{PORT}")
    print("No VS Code: rode este arquivo e abra o link")
    print("Ctrl+C para parar")
    print("")
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nServidor parado.")
