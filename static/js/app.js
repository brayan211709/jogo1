/* Arena de Jogos - JS */

const TEMAS = {
  "Animais": ["Cachorro","Gato","Leão","Elefante","Girafa","Macaco","Tigre","Urso","Coelho","Cavalo","Pássaro","Peixe","Cobra","Jacaré","Pinguim","Lobo","Raposa","Coruja","Tubarão","Golfinho"],
  "Comidas": ["Pizza","Hambúrguer","Sushi","Lasanha","Churrasco","Açaí","Brigadeiro","Feijoada","Tapioca","Coxinha","Pastel","Sorvete","Chocolate","Batata Frita","Strogonoff","Pão de Queijo","Empada","Churros","Tacos","Ramen"],
  "Filmes": ["Titanic","Avatar","Matrix","Interestelar","Vingadores","Homem-Aranha","Batman","Senhor dos Anéis","Harry Potter","Star Wars","Jurassic Park","Frozen","Shrek","Toy Story","Pantera Negra","Coringa","Duna","Up","Divertida Mente","O Rei Leão"],
  "Profissões": ["Médico","Professor","Policial","Bombeiro","Advogado","Engenheiro","Cozinheiro","Motorista","Programador","Jornalista","Ator","Cantor","Dentista","Arquiteto","Veterinário","Piloto","Juiz","Fotógrafo","Cabeleireiro","Eletricista"],
  "Esportes": ["Futebol","Basquete","Vôlei","Tênis","Natação","Corrida","Ciclismo","Boxe","Judô","Skate","Surfe","Ginástica","Handebol","Rugby","Golfe","Hipismo","Esgrima","Badminton","Hóquei","Atletismo"],
  "Países": ["Brasil","Argentina","Estados Unidos","Japão","França","Itália","Alemanha","Portugal","Espanha","México","Canadá","Austrália","China","Índia","Rússia","Coreia do Sul","Egito","África do Sul","Suécia","Chile"],
  "Objetos": ["Celular","Computador","Cadeira","Mesa","Relógio","Óculos","Chave","Livro","Caneta","Mochila","Fone de Ouvido","Garrafa","Espelho","Travesseiro","Controle","Guarda-chuva","Tesoura","Lâmpada","Ventilador","Carteira"],
  "Lugares": ["Praia","Shopping","Escola","Hospital","Parque","Cinema","Restaurante","Aeroporto","Estádio","Igreja","Museu","Biblioteca","Padaria","Farmácia","Supermercado","Zoológico","Teatro","Estação","Hotel","Praça"]
};

const HINTS = {
  "Cachorro":"osso","Gato":"leite","Leão":"juba","Elefante":"tromba","Girafa":"pescoço",
  "Macaco":"banana","Tigre":"listras","Urso":"mel","Coelho":"cenoura","Cavalo":"ferradura",
  "Pássaro":"ninho","Peixe":"água","Cobra":"veneno","Jacaré":"pantanal","Pinguim":"gelo",
  "Lobo":"uivo","Raposa":"astúcia","Coruja":"noite","Tubarão":"dentes","Golfinho":"mar",
  "Pizza":"queijo","Hambúrguer":"pão","Sushi":"peixe cru","Lasanha":"massa","Churrasco":"carne",
  "Açaí":"tigela","Brigadeiro":"chocolate","Feijoada":"feijão","Tapioca":"goma","Coxinha":"frango",
  "Pastel":"feira","Sorvete":"casquinha","Chocolate":"cacau","Batata Frita":"óleo","Strogonoff":"creme",
  "Pão de Queijo":"minas","Empada":"recheio","Churros":"doce de leite","Tacos":"mexicano","Ramen":"macarrão",
  "Titanic":"navio","Avatar":"azul","Matrix":"pílula","Interestelar":"espaço","Vingadores":"heróis",
  "Homem-Aranha":"teia","Batman":"morcego","Senhor dos Anéis":"anel","Harry Potter":"varinha","Star Wars":"sabre",
  "Jurassic Park":"dinossauro","Frozen":"gelo","Shrek":"ogro","Toy Story":"brinquedo","Pantera Negra":"wakanda",
  "Coringa":"palhaço","Duna":"areia","Up":"balões","Divertida Mente":"emoções","O Rei Leão":"savana",
  "Médico":"hospital","Professor":"escola","Policial":"algema","Bombeiro":"fogo","Advogado":"tribunal",
  "Engenheiro":"projeto","Cozinheiro":"panela","Motorista":"volante","Programador":"código","Jornalista":"notícia",
  "Ator":"palco","Cantor":"microfone","Dentista":"dente","Arquiteto":"planta","Veterinário":"animal",
  "Piloto":"avião","Juiz":"martelo","Fotógrafo":"câmera","Cabeleireiro":"tesoura","Eletricista":"fio",
  "Futebol":"bola","Basquete":"cesta","Vôlei":"rede","Tênis":"raquete","Natação":"piscina",
  "Corrida":"tênis","Ciclismo":"bicicleta","Boxe":"luva","Judô":"kimono","Skate":"manobra",
  "Surfe":"onda","Ginástica":"salto","Handebol":"gol","Rugby":"tackle","Golfe":"taco",
  "Hipismo":"cavalo","Esgrima":"espada","Badminton":"peteca","Hóquei":"disco","Atletismo":"pista",
  "Brasil":"samba","Argentina":"tango","Estados Unidos":"dólar","Japão":"sushi","França":"torre",
  "Itália":"pizza","Alemanha":"cerveja","Portugal":"fado","Espanha":"flamenco","México":"taco",
  "Canadá":"maple","Austrália":"canguru","China":"dragão","Índia":"curry","Rússia":"vodka",
  "Coreia do Sul":"k-pop","Egito":"pirâmide","África do Sul":"safari","Suécia":"ikea","Chile":"andes",
  "Celular":"tela","Computador":"teclado","Cadeira":"assento","Mesa":"tampo","Relógio":"hora",
  "Óculos":"lente","Chave":"fechadura","Livro":"página","Caneta":"tinta","Mochila":"costas",
  "Fone de Ouvido":"música","Garrafa":"tampa","Espelho":"reflexo","Travesseiro":"sono","Controle":"botão",
  "Guarda-chuva":"chuva","Tesoura":"corte","Lâmpada":"luz","Ventilador":"vento","Carteira":"dinheiro",
  "Praia":"areia","Shopping":"lojas","Escola":"sala","Hospital":"médico","Parque":"banco",
  "Cinema":"pipoca","Restaurante":"cardápio","Aeroporto":"avião","Estádio":"torcida","Igreja":"altar",
  "Museu":"obra","Biblioteca":"livro","Padaria":"pão","Farmácia":"remédio","Supermercado":"carrinho",
  "Zoológico":"jaula","Teatro":"palco","Estação":"trem","Hotel":"quarto","Praça":"banco"
};

const VOD = {
  verdade: {
    familia: [
      "Qual é a sua comida caseira favorita?","Qual viagem em família você mais gostou?",
      "Qual era o seu brinquedo favorito na infância?","Quem é a pessoa mais engraçada da família?",
      "Qual tradição de família você mais gosta?","Qual é o seu apelido de infância?",
      "Quem cozinha melhor na família?","Qual festa de família foi a mais memorável?",
      "Você prefere praia ou sítio em família?","Qual matéria da escola você mais gostava?",
      "Qual animal de estimação você teve ou queria ter?","Quem conta as melhores histórias na família?",
      "Qual é a sua sobremesa favorita feita em casa?","Você é mais parecido com o pai ou com a mãe?",
      "Qual música não pode faltar em uma festa da família?","Qual foi o melhor presente que já ganhou de um parente?",
      "Qual é a sua memória favorita de natal ou aniversário?","Quem da família tem o sono mais pesado?",
      "Qual prato você pediria todo domingo?","Qual filme a família assiste junto sempre?",
      "Quem da família chega sempre atrasado nas reuniões?",
      "Qual prato de família você tentaria cozinhar sozinho?",
      "Qual viagem familiar deu mais risada?",
      "Quem conta a mesma história em toda festa?",
      "Qual foto antiga da família você mais gosta?",
      "Você prefere almoço de domingo ou ceia de natal?",
      "Qual apelido de parente ninguém consegue explicar?",
      "Quem é o mais competitivo nos jogos de tabuleiro?"
    ],
    leve: [
      "Qual foi a última série que você assistiu?","Qual é a sua comida favorita?",
      "Você prefere praia ou montanha?","Qual é o seu maior medo bobinho?",
      "Qual música você mais ouviu esse mês?","Você acredita em horóscopo?",
      "Qual foi o último presente que você ganhou?","Você prefere doce ou salgado?",
      "Qual é o seu animal favorito?","Você já chorou assistindo um filme? Qual?",
      "Qual é o seu talento secreto?","Qual app você mais usa no celular?",
      "Você prefere café ou chá?","Se pudesse ter um superpoder, qual seria?",
      "Qual é a sua estação do ano favorita?","Você é mais de ficar em casa ou sair?",
      "Qual desenho animado você mais gostava quando criança?","Qual é a sua pizza favorita?",
      "Você canta no chuveiro?","Qual cidade você gostaria de conhecer?",
      "Você prefere gato ou cachorro?","Qual emoji você mais usa?",
      "Qual é a sua playlist do momento?","Você dança quando está sozinho em casa?",
      "Qual foi a última coisa que te fez rir sozinho?",
      "Você prefere chuva ou sol forte?",
      "Qual série você recomenda para todo mundo?",
      "Qual é a sua desculpa clássica para cancelar planos?",
      "Você prefere mensagem de texto ou ligação?",
      "Qual habilidade inútil você tem?",
      "Qual é o seu lanche favorito de madrugada?",
      "Se pudesse só ouvir um gênero musical, qual seria?"
    ],
    medio: [
      "Qual foi a mentira mais elaborada que você já contou?",
      "Você já gostou de alguém do grupo e nunca contou?",
      "Qual é a coisa mais constrangedora que já aconteceu com você em público?",
      "Você já stalkou alguém nas redes sociais por dias?",
      "Qual é o seu maior arrependimento dos últimos 2 anos?",
      "Você já fingiu estar doente para faltar em algo?",
      "Qual é a sua maior insegurança?",
      "Você já mandou mensagem para a pessoa errada? O que era?",
      "Você já traiu a confiança de um amigo?",
      "Qual é a pior decisão que você já tomou por impulso?",
      "Você já se arrependeu de uma amizade?",
      "Você já inventou uma desculpa elaborada para sair de um compromisso?",
      "Você já se apaixonou por alguém em menos de uma semana?",
      "Você já deu ghosting em alguém? Por quê?",
      "Qual hábito seu você sabe que incomoda os outros?",
      "Qual é a sua maior red flag (que você admite ter)?",
      "Você já fingiu entender um assunto só para não parecer burro?",
      "Qual foi a pior cantada que já recebeu ou deu?",
      "Você já fingiu que a internet caiu para sair de uma call?",
      "Qual foi o pior match de app que você já teve?",
      "Você já ensaiou uma conversa difícil no espelho?",
      "Qual pessoa do grupo seria a pior em manter um segredo?",
      "Você já se arrependeu de mandar um texto longo demais?",
      "Qual é a maior bobagem que já comprou por impulso?",
      "Você já chorou escondido de alguém?",
      "Qual fofoca você ouviu e nunca esqueceu?"
    ],
    pesado: [
      "Qual é o segredo que você nunca contou para ninguém do grupo?",
      "Qual foi a maior decepção amorosa da sua vida?",
      "Você já se apaixonou por alguém comprometido?",
      "Qual é a coisa mais cruel que você já fez com alguém?",
      "Você já pensou em terminar uma amizade importante? Por quê?",
      "Qual é a mentira que você mantém até hoje?",
      "Você já se sentiu inferior a alguém do grupo? Por quê?",
      "Você já desejou o mal para alguém de verdade?",
      "Você já fingiu estar bem quando estava destruído por dentro?",
      "Qual pessoa você gostaria de pedir desculpas e ainda não pediu?",
      "Você já se sentiu completamente sozinho mesmo rodeado de gente?",
      "Qual é a maior insegurança que afeta seus relacionamentos?",
      "Você já perdoou alguém que não merecia?",
      "Você já pensou em sumir por um tempo sem avisar ninguém?",
      "Qual é a ferida emocional que ainda não cicatrizou?",
      "Qual é a verdade sobre você que pouca gente sabe?",
      "Qual foi a pior fase da sua vida e o que te tirou dela?",
      "Qual é o medo que você tem vergonha de admitir?",
      "Você já sacrificou um sonho por outra pessoa?",
      "Qual foi a maior decepção que alguém da família te causou?",
      "Você já se sentiu uma fraude na vida profissional ou pessoal?",
      "Qual verdade você sabe que precisa falar e ainda não falou?",
      "Você já se sentiu demais ou de menos em um relacionamento?",
      "Qual é o maior 'e se' que ainda te assombra?",
      "Você já fingiu perdoar alguém só para encerrar o assunto?",
      "Qual parte da sua personalidade você mais tenta esconder?"
    ],
    plus18: [
      "Qual foi a experiência sexual mais estranha que você já teve?",
      "Você já fez algo sexual em um lugar público?",
      "Qual é a sua maior fantasia que nunca contou para ninguém?",
      "Você já se arrependeu de ter ficado com alguém no dia seguinte?",
      "Qual é a posição sexual que você mais gosta?",
      "Você já mandou nudes? Se arrependeu?",
      "Você já fingiu um orgasmo?",
      "Qual é a coisa mais ousada que você já fez na cama?",
      "Você já ficou com mais de uma pessoa no mesmo dia?",
      "Você já teve um sonho erótico com alguém do grupo?",
      "Qual é o local mais inusitado onde você já fez sexo?",
      "Qual é a coisa que mais te excita em alguém?",
      "Qual é a sua maior insegurança na hora do sexo?",
      "Qual é a fantasia que você tem vergonha de pedir?",
      "Você já foi pego no flagra?",
      "Qual é o seu maior fetiche assumido?",
      "Você já mentiu sobre gostar de algo na cama?",
      "Qual foi a situação mais constrangedora envolvendo sexo?",
      "Você já se apaixonou só pela aparência física?",
      "Qual parte do corpo você acha mais atraente em alguém?",
      "Você já ficou com alguém só por solidão?",
      "Qual foi o melhor e o pior sexo da sua vida?",
      "Você já fez sexo por pena ou obrigação?",
      "Qual é a mensagem mais safada que já mandou?",
      "Você já teve um encontro de uma noite que virou algo a mais?",
      "Qual experiência você queria repetir e qual nunca mais?"
    ],
    extremo: [
      "Qual é a pior coisa que você já fez e ainda dorme tranquilo?",
      "Você já destruiu um relacionamento de alguém de propósito?",
      "Qual segredo seu, se vazasse agora, mudaria como este grupo te vê?",
      "Você já usou o sentimento de alguém só para não ficar sozinho?",
      "Qual foi a coisa mais baixa que você já fez por dinheiro ou status?",
      "Você já expôs intimidade de alguém por vingança?",
      "Você já se envolveu com alguém comprometido e continuou?",
      "Qual mentira você mantém há anos e não pretende confessar?",
      "Qual é o desejo que você considera errado demais para pedir?",
      "Conte o momento em que você mais se odiou pelo que fez.",
      "Você já sabotou oportunidade de outra pessoa em silêncio?",
      "Você já usou chantagem emocional e conseguiu o que queria?",
      "Você já ficou com alguém só para ferir outra pessoa?",
      "Qual é o limite moral que você já cruzou e depois normalizou?",
      "Você já fingiu ser vítima numa história em que era o problema?",
      "Se tivesse que soltar uma verdade agora para limpar a consciência, qual seria?"
    ]
  },
  desafio: {
    familia: [
      "Imite um parente por 30 segundos","Conte uma história engraçada da família",
      "Fale 3 coisas que você admira em alguém da família","Faça uma cara engraçada e tire foto com o grupo",
      "Cante uma música que a família sempre canta","Faça 10 polichinelos",
      "Conte uma piada limpa","Dance uma música infantil por 15 segundos",
      "Fale um elogio sincero para cada pessoa do grupo","Conte uma memória boa de uma festa em família",
      "Você já torceu para alguém próximo se dar mal de verdade?",
      "Qual ato seu você considera imperdoável?",
      "Você já manteve contato com alguém só por interesse?",
      "Conte a situação em que você foi deliberadamente cruel.",
      "Você já distorceu uma história para parecer vítima?",
      "Qual confissão destruiria a imagem boa que têm de você?",
      "Você já usou intimidade como moeda de troca?",
      "Qual é a coisa antiética que você normalizou com o tempo?",
      "Imite a voz de alguém da família até o grupo acertar",
      "Fale 5 comidas típicas de festa em família",
      "Conte a melhor travessura que já fez em casa",
      "Faça uma pose de foto antiga de família",
      "Desenhe um animal de olhos fechados"
    ],
    leve: [
      "Imite um animal por 30 segundos","Fale com sotaque de outro estado por 1 minuto",
      "Dance sem música por 20 segundos","Conte uma piada ruim","Faça 10 polichinelos",
      "Fale 5 elogios para a pessoa à sua direita","Cante o refrão da última música que você ouviu",
      "Faça uma cara engraçada e mantenha por 15 segundos","Fale o alfabeto de trás para frente",
      "Fale como um robô por 1 minuto","Cante o parabéns como se fosse uma ópera",
      "Fique de um pé só por 30 segundos","Faça uma pose de super-herói por 20 segundos",
      "Imite um apresentador de TV por 30 segundos",
      "Conte até 20 com voz de velhinho",
      "Faça uma dublagem exagerada de uma cena famosa",
      "Ande como modelo até a outra ponta da sala",
      "Descreva sua manhã de forma épica"
    ],
    medio: [
      "Deixe o grupo escolher uma foto sua para postar nos stories",
      "Mande uma mensagem para o 5º contato da sua lista",
      "Fale um segredo seu em voz alta",
      "Imite alguém do grupo até alguém acertar",
      "Conte a história mais constrangedora da sua vida",
      "Fale com voz de criança por 1 minuto",
      "Dance a música que o grupo escolher",
      "Mostre a última foto que você tirou",
      "Conte uma mentira e uma verdade — o grupo adivinha",
      "Fale o nome dos seus crushes atuais ou antigos",
      "Cante uma música infantil com voz séria",
      "Mostre seus últimos 3 emojis mais usados",
      "Deixe o grupo ler o nome dos seus últimos 5 chats",
      "Imite a pessoa à sua esquerda por 1 minuto",
      "Conte a história do seu pior date",
      "Mande um áudio engraçado para alguém da lista",
      "Faça uma performance dramática de novela"
    ],
    pesado: [
      "Conte a verdade sobre o que você pensa de alguém do grupo (com respeito)",
      "Mostre a última conversa do WhatsApp",
      "Fale a coisa mais sincera e difícil sobre você mesmo",
      "Revele algo que você nunca contou para a maioria aqui",
      "Fique 2 minutos sem falar, só olhando para o grupo",
      "Conte qual pessoa do grupo você acha mais interessante e por quê",
      "Mostre a foto mais antiga do celular",
      "Admita algo que você finge não se importar, mas se importa",
      "Revele uma opinião impopular que você tem",
      "Conte um medo real que quase ninguém sabe",
      "Deixe o grupo fazer uma pergunta obrigatória com sinceridade total",
      "Admita a última vez que mentiu para alguém daqui",
      "Fale quem você acha que vai mudar mais nos próximos 5 anos",
      "Conte a maior mentira que já contou para a família",
      "Revele se já se arrependeu de estar neste grupo"
    ],
    plus18: [
      "Conte a experiência sexual mais engraçada ou constrangedora",
      "Revele quantas pessoas você já ficou (número aproximado)",
      "Descreva o tipo de pessoa que mais te atrai fisicamente",
      "Fale sobre a fantasia que você tem vergonha de admitir",
      "Revele se já teve um quase com alguém do grupo",
      "Conte a coisa mais ousada que já fez por tesão",
      "Revele se já fez algo sexual em lugar público ou arriscado",
      "Fale qual é a sua maior insegurança na cama",
      "Conte a história do seu primeiro beijo com detalhes",
      "Revele a mensagem mais ousada que já mandou ou recebeu",
      "Descreva seu encontro ideal em detalhes",
      "Fale se já teve sonho erótico com alguém presente",
      "Revele se já ficou com alguém só por validação",
      "Conte se já inventou desculpa para sair da cama de alguém",
      "Fale a regra sua na cama que quase ninguém sabe"
    ],
    extremo: [
      "Revele o segredo mais pesado que você carrega sobre alguém deste círculo",
      "Conte a coisa mais antiética que já fez por prazer ego ou vantagem",
      "Admita uma traição sua e como lidou com a culpa",
      "Fale a verdade mais dura que pensa sobre alguém deste grupo",
      "Mostre uma conversa ou print que você jurou que ninguém veria",
      "Admita se já usou alguém emocionalmente até o fim",
      "Revele a mentira atual mais importante da sua vida",
      "Fale quem neste grupo você menos respeita e por quê",
      "Revele um desejo que considera extremo demais para pedir",
      "Conte a verdade que você mais teme que alguém daqui descubra"
    ]
  }
};

const HISTORIAS = [
  {
    texto: "Uma mulher tem dois filhos que nasceram no mesmo dia, no mesmo ano, da mesma mãe e do mesmo pai. Porém, eles não são gêmeos.",
    pergunta: "Como isso é possível?",
    dicas: ["Pense em partos com mais de dois bebês.", "Gêmeos são só dois. E se fossem três?", "Eles fazem parte de um parto múltiplo maior.",
      "Aceite uma pergunta livre de cada pessoa e responda com honestidade total",
      "Revele contexto de alguém com quem nunca deveria ter ficado",
      "Admita se já espalhou rumor falso de propósito",
      "Descreva a pior coisa que já fez por ciúme",
      "Conte o momento em que escolheu o caminho mais sujo"
    ],
    resposta: "Ela tem trigêmeos (ou mais). Os dois fazem parte de um parto múltiplo."
  },
  {
    texto: "Um homem mora no 10º andar. Todo dia desce de elevador. Quando volta, sobe até o 7º e sobe o resto a pé. Nos dias de chuva vai até o 10º.",
    pergunta: "Por que ele faz isso?",
    dicas: ["Observe o que muda nos dias de chuva.", "Tem a ver com a altura dele.", "Nos dias de chuva ele carrega algo que o ajuda a alcançar um botão."],
    resposta: "Ele é baixo e só alcança o botão do 7º. Quando chove, usa o guarda-chuva para apertar o 10º."
  },
  {
    texto: "Um homem entra em um bar e pede um copo d'água. O barman puxa uma arma e aponta para ele. O homem agradece e vai embora.",
    pergunta: "O que aconteceu?",
    dicas: ["O homem não queria beber necessariamente.", "A arma não foi uma ameaça real.", "Ele tinha um problema físico passageiro."],
    resposta: "O homem estava com soluços. O barman o assustou para curar os soluços."
  },
  {
    texto: "Um pai e um filho sofrem um acidente. O pai morre. No hospital, o cirurgião diz: 'Não posso operar, este é meu filho.'",
    pergunta: "Como isso é possível?",
    dicas: ["O pai biológico já morreu no acidente.", "Quem fala pode não ser homem.", "Pense em quem mais pode ser pai ou mãe do menino."],
    resposta: "O cirurgião é a mãe do menino."
  },
  {
    texto: "Há uma cabana na floresta com 52 pessoas mortas. Sem sinais de violência.",
    pergunta: "O que aconteceu?",
    dicas: ["A 'cabana' pode não ser uma casa.", "Pense em transporte.", "Havia muitas pessoas juntas em um acidente."],
    resposta: "A cabana é a cabine de um avião que caiu."
  },
  {
    texto: "Um homem está morto no campo com um pacote fechado ao lado.",
    pergunta: "Como ele morreu?",
    dicas: ["O pacote era essencial para a sobrevivência dele.", "Ele veio de cima.", "Era um equipamento de emergência."],
    resposta: "O paraquedas não abriu. O pacote é o paraquedas."
  },
  {
    texto: "Um homem olha uma foto e diz: 'Irmãos e irmãs eu não tenho, mas o pai deste homem é filho do meu pai.'",
    pergunta: "De quem é a foto?",
    dicas: ["'Filho do meu pai' é o próprio homem ou um irmão — e ele não tem irmãos.", "Então o pai do homem da foto é ele mesmo.", "A foto é de alguém da família direta."],
    resposta: "Do filho dele."
  },
  {
    texto: "Uma mulher anda na chuva sem guarda-chuva nem chapéu, mas nenhum fio de cabelo se molha.",
    pergunta: "Como?",
    dicas: ["Não há truque com teto ou carro.", "Pense no cabelo dela.", "Ela pode não ter o que molhar."],
    resposta: "Ela é careca."
  },
  {
    texto: "Um fazendeiro tem 17 ovelhas. Todas menos 9 morrem.",
    pergunta: "Quantas sobraram?",
    dicas: ["Leia a frase com calma.", "'Todas menos 9' não é uma conta complicada.", "As que sobraram são exatamente as que não morreram."],
    resposta: "9 ovelhas."
  },
  {
    texto: "Um homem empurra o carro até um hotel e diz que está falido. O recepcionista entende e o deixa ficar.",
    pergunta: "O que está acontecendo?",
    dicas: ["Não é um hotel de verdade no sentido literal da vida real.", "Pense em jogos de tabuleiro.", "Carro, hotel e falência aparecem juntos nesse jogo."],
    resposta: "Estão jogando Banco Imobiliário (Monopoly)."
  },
  {
    texto: "Um homem é encontrado morto em uma sala trancada por dentro. No chão há uma poça de água e um pedaço de madeira.",
    pergunta: "Como ele morreu?",
    dicas: ["A madeira e a água estão ligadas.", "Algo derreteu.", "Ele usou o gelo para alcançar algo."],
    resposta: "Ele se enforcou em pé sobre um bloco de gelo. O gelo derreteu (poça de água); a madeira era apoio ou resto do cenário clássico da charada."
  },
  {
    texto: "Dois guardas estão em um posto. Um aponta para um caminho e diz que o outro sempre mente. Cada um diz que o caminho seguro é o seu. Você pode fazer só uma pergunta a um deles.",
    pergunta: "O que perguntar para achar o caminho seguro?",
    dicas: ["Um mente e um fala a verdade, ou a lógica clássica dos dois portões.", "Pergunte o que o outro diria.", "Faça o contrário da resposta."],
    resposta: "Pergunte: 'Qual caminho o outro guarda diria que é o seguro?' e escolha o caminho oposto."
  },
  {
    texto: "Uma mulher chega em casa, veste um vestido novo e logo em seguida morre.",
    pergunta: "O que aconteceu?",
    dicas: ["Não foi o vestido que a matou sozinho.", "Havia um problema no apartamento.", "Ela fez algo comum ao chegar em casa."],
    resposta: "Havia vazamento de gás no apartamento. Ao chegar, ela acendeu a luz (ou um fósforo) e a explosão a matou."
  },
  {
    texto: "Sem abrir o barril, um homem descobre que o vinho dentro está impróprio só olhando.",
    pergunta: "Como ele soube?",
    dicas: ["Ele não provou nada.", "Observou o estado do conteúdo.", "O vinho não se comportava como líquido."],
    resposta: "O vinho estava congelado (sólido). Por isso deu para perceber sem abrir de fato para beber."
  },
  {
    texto: "Um homem corre de um prédio em chamas carregando uma mala. A polícia o prende.",
    pergunta: "Por quê?",
    dicas: ["O fogo pode não ser acidente.", "A mala é a chave.", "Ele não era uma vítima comum."],
    resposta: "Ele era o ladrão (ou incendiário) e a mala tinha o dinheiro/produto do crime; o incêndio foi para cobrir o roubo."
  },
  {
    texto: "Numa casa há um quarto com uma lâmpada. Fora há três interruptores. Só um acende a lâmpada. Você pode mexer nos interruptores, mas só pode entrar no quarto uma vez.",
    pergunta: "Como descobrir qual interruptor é o certo?",
    dicas: ["Calor importa.", "Deixe um ligado por um tempo.", "Use o toque na lâmpada."],
    resposta: "Ligue o primeiro por alguns minutos, desligue, ligue o segundo e entre. Lâmpada acesa = segundo; apagada e quente = primeiro; apagada e fria = terceiro."
  },
  {
    texto: "Um relógio atrasa 5 minutos por hora. Foi acertado às 12h. Que horas o relógio marcará quando a hora real for 14h?",
    pergunta: "Que horas o relógio mostra às 14h reais?",
    dicas: ["Em 1 hora real ele atrasa 5 minutos.", "Em 2 horas reais atrasa 10 minutos.", "12h + 2h - atraso."],
    resposta: "13h50 (atrasou 10 minutos em 2 horas)."
  },
  {
    texto: "Três caixas: uma só com maçãs, uma só com laranjas e uma com as duas. Os rótulos estão todos errados. Você tira uma fruta da caixa 'Maçãs e Laranjas'.",
    pergunta: "Como identificar todas as caixas?",
    dicas: ["Todos os rótulos mentem.", "A caixa 'Maçãs e Laranjas' não tem mistura.", "O que você tirou define essa caixa e o resto por eliminação."],
    resposta: "Se tirou maçã, a caixa 'Maçãs e Laranjas' é só maçãs. A caixa 'Laranjas' não pode ser laranjas (rótulo errado), logo é mista; a restante é só laranjas."
  },
  {
    texto: "Um homem caminha sem parar em linha reta por vários quilômetros e volta ao ponto de partida sem mudar de direção.",
    pergunta: "Como?",
    dicas: ["Não precisa virar.", "Pense no planeta.", "Ele completou um circuito fechado natural."],
    resposta: "Ele deu a volta na Terra (ou andou ao redor do polo em um círculo fechado)."
  },
  {
    texto: "Duas pessoas nascem no mesmo momento, no mesmo hospital, da mesma mãe, mas não são irmãs.",
    pergunta: "Como?",
    dicas: ["Podem não ser do mesmo gênero da palavra 'irmãs'.", "Ou não serem só duas.", "Ou serem gêmeos de sexos diferentes — a charada clássica: não são irmãs porque são irmão e irmã."],
    resposta: "São irmão e irmã (não são 'irmãs')."
  }
];

/* ---------- JOGADORES (API + jogadores.bd) ---------- */
let JOGADORES = [];

async function loadJogadores() {
  try {
    const r = await fetch("/api/jogadores");
    const data = await r.json();
    JOGADORES = data.jogadores || [];
  } catch (e) {
    JOGADORES = [];
    console.warn("Não foi possível carregar jogadores. Rode: python server.py");
  }
  regRender();
}

function regRender() {
  const lista = document.getElementById("reg-lista");
  const vazio = document.getElementById("reg-vazio");
  if (!lista) return;
  lista.querySelectorAll(".reg-chip").forEach((c) => c.remove());
  if (JOGADORES.length === 0) {
    if (vazio) {
      vazio.style.display = "";
      vazio.textContent = "Nenhum jogador no arquivo jogadores.bd ainda";
    }
    return;
  }
  if (vazio) vazio.style.display = "none";
  JOGADORES.forEach((j) => {
    const chip = document.createElement("div");
    chip.className = "reg-chip";
    chip.innerHTML = `<span>${j.nome}</span><button type="button" onclick="regRemove(${j.id})">×</button>`;
    lista.appendChild(chip);
  });
}

async function regAdd() {
  const input = document.getElementById("reg-input");
  const nome = (input.value || "").trim();
  if (!nome) { alert("Digite um nome."); return; }
  if (nome.length < 2) { alert("Mínimo 2 letras."); return; }
  try {
    const r = await fetch("/api/jogadores", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nome })
    });
    const data = await r.json();
    if (!r.ok) { alert(data.erro || "Erro ao salvar"); return; }
    input.value = "";
    await loadJogadores();
  } catch (e) {
    alert("Erro de conexão. Rode: python server.py");
  }
}

async function regRemove(id) {
  try {
    const r = await fetch("/api/jogadores/" + id, { method: "DELETE" });
    const data = await r.json();
    if (!r.ok) { alert(data.erro || "Erro ao remover"); return; }
    await loadJogadores();
  } catch (e) {
    alert("Erro de conexão.");
  }
}

function renderSelecao(containerId, countId) {
  const box = document.getElementById(containerId);
  const countEl = document.getElementById(countId);
  box.innerHTML = "";
  if (JOGADORES.length === 0) {
    box.innerHTML = '<p class="reg-vazio">Cadastre jogadores na tela inicial (salvos em jogadores.bd).</p>';
    if (countEl) countEl.textContent = "0 selecionados";
    return;
  }
  JOGADORES.forEach((j, i) => {
    const label = document.createElement("label");
    label.className = "sel-item";
    label.innerHTML = `<input type="checkbox" value="${i}" onchange="updateSelCount('${containerId}','${countId}');this.parentElement.classList.toggle('on',this.checked)"> <span>${j.nome}</span>`;
    box.appendChild(label);
  });
  if (countEl) countEl.textContent = "0 selecionados";
}

function updateSelCount(containerId, countId) {
  const box = document.getElementById(containerId);
  const n = box.querySelectorAll("input:checked").length;
  document.getElementById(countId).textContent = n + (n === 1 ? " selecionado" : " selecionados");
}

function getSelecionados(containerId) {
  const box = document.getElementById(containerId);
  const nomes = [];
  box.querySelectorAll("input:checked").forEach((cb) => {
    const idx = parseInt(cb.value, 10);
    if (JOGADORES[idx]) nomes.push(JOGADORES[idx].nome);
  });
  return nomes;
}

/* ---------- NAV ---------- */
function show(id) {
  ["home", "impostor", "vod", "hist"].forEach((s) => {
    document.getElementById(s).classList.add("hidden");
  });
  document.getElementById(id).classList.remove("hidden");
  if (id === "home") loadJogadores();
}

/* ---------- IMPOSTOR ---------- */
let impNomes = [], impPapeis = [], impPalavra = "", impCur = 0, impModo = "dica", impImps = [];

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function goImpostor() {
  show("impostor");
  renderSelecao("imp-sel", "imp-sel-count");
  document.getElementById("imp-setup").classList.remove("hidden");
  document.getElementById("imp-config").classList.add("hidden");
  document.getElementById("imp-dist").classList.add("hidden");
  document.getElementById("imp-jogo").classList.add("hidden");
}

function impGoConfig() {
  const nomes = getSelecionados("imp-sel");
  if (nomes.length < 3) { alert("Selecione pelo menos 3 jogadores."); return; }
  impNomes = nomes;
  const sel = document.getElementById("imp-tema");
  sel.innerHTML = Object.keys(TEMAS).map((t) => `<option value="${t}">${t}</option>`).join("");
  const maxImp = Math.max(1, Math.floor(nomes.length / 2));
  const ni = document.getElementById("imp-ni");
  ni.max = maxImp;
  if (+ni.value > maxImp) { ni.value = 1; document.getElementById("imp-ni-val").textContent = "1"; }
  document.getElementById("imp-setup").classList.add("hidden");
  document.getElementById("imp-config").classList.remove("hidden");
}

function impModoBtn(btn) {
  document.querySelectorAll(".modo").forEach((b) => b.classList.remove("on"));
  btn.classList.add("on");
  impModo = btn.dataset.m;
}

function impStart() {
  const tema = document.getElementById("imp-tema").value;
  const nImp = +document.getElementById("imp-ni").value;
  const palavras = TEMAS[tema];
  impPalavra = palavras[Math.floor(Math.random() * palavras.length)];
  const indices = shuffle([...Array(impNomes.length).keys()]).slice(0, nImp);
  impPapeis = impNomes.map((nome, i) =>
    indices.includes(i) ? { nome, tipo: "impostor" } : { nome, tipo: "palavra", palavra: impPalavra }
  );
  impPapeis = shuffle(impPapeis);
  impImps = impPapeis.filter((p) => p.tipo === "impostor").map((p) => p.nome);
  impCur = 0;
  document.getElementById("imp-config").classList.add("hidden");
  document.getElementById("imp-dist").classList.remove("hidden");
  document.getElementById("imp-jogo").classList.add("hidden");
  document.getElementById("imp-pw").classList.add("hidden");
  impShowPlayer();
}

function impShowPlayer() {
  document.getElementById("imp-nome-atual").textContent = impPapeis[impCur].nome;
  document.getElementById("imp-ja").classList.remove("hidden");
  document.getElementById("imp-pr").classList.add("hidden");
}

function impReveal() {
  const p = impPapeis[impCur];
  const el = document.getElementById("imp-pt");
  if (p.tipo === "impostor") {
    if (impModo === "dica") {
      const dica = HINTS[impPalavra] || ("tema " + document.getElementById("imp-tema").value);
      el.innerHTML = `🕵️ VOCÊ É O IMPOSTOR<span class="dica-imp">Dica relacionada: <strong>${dica}</strong></span>`;
    } else {
      el.innerHTML = `🕵️ VOCÊ É O IMPOSTOR<span class="dica-imp">Você não recebeu a palavra nem dica</span>`;
    }
    el.className = "papel imp";
  } else {
    el.textContent = p.palavra;
    el.className = "papel pal";
  }
  document.getElementById("imp-ja").classList.add("hidden");
  document.getElementById("imp-pr").classList.remove("hidden");
}

function impNext() {
  impCur++;
  if (impCur >= impPapeis.length) {
    document.getElementById("imp-dist").classList.add("hidden");
    document.getElementById("imp-jogo").classList.remove("hidden");
    document.getElementById("imp-ordem").innerHTML = impNomes.map((n) => `<span class="oj">${n}</span>`).join("");
  } else {
    impShowPlayer();
  }
}

function impShowWord() {
  document.getElementById("imp-pwt").textContent = impPalavra;
  document.getElementById("imp-imps").textContent = impImps.join(", ");
  document.getElementById("imp-pw").classList.remove("hidden");
}

function impRestart() {
  document.getElementById("imp-jogo").classList.add("hidden");
  document.getElementById("imp-pw").classList.add("hidden");
  document.getElementById("imp-config").classList.remove("hidden");
}

function impBackSetup() {
  document.getElementById("imp-config").classList.add("hidden");
  document.getElementById("imp-setup").classList.remove("hidden");
  renderSelecao("imp-sel", "imp-sel-count");
}

/* ---------- VOD ---------- */
let vodNomes = [], vodIdx = 0, vodCat = "familia";

function goVod() {
  show("vod");
  renderSelecao("vod-sel", "vod-sel-count");
  document.getElementById("vod-setup").classList.remove("hidden");
  document.getElementById("vod-jogo").classList.add("hidden");
}

function vodStart() {
  const nomes = getSelecionados("vod-sel");
  if (nomes.length < 2) { alert("Selecione pelo menos 2 jogadores."); return; }
  vodNomes = nomes;
  vodIdx = 0;
  document.getElementById("vod-setup").classList.add("hidden");
  document.getElementById("vod-jogo").classList.remove("hidden");
  document.getElementById("vod-res").classList.add("hidden");
  vodUpdateVez();
}

function vodUpdateVez() {
  document.getElementById("vod-vez").textContent = "Vez de: " + vodNomes[vodIdx];
  document.getElementById("vod-ordem").innerHTML = vodNomes.map((n, i) =>
    `<span class="oj${i === vodIdx ? " vez" : ""}">${n}</span>`
  ).join("");
}

function vodCatBtn(btn) {
  document.querySelectorAll("#vod .cat").forEach((b) => b.classList.remove("on"));
  btn.classList.add("on");
  vodCat = btn.dataset.c;
}

function vodAsk(tipo) {
  const lista = VOD[tipo][vodCat];
  const txt = lista[Math.floor(Math.random() * lista.length)];
  document.getElementById("vod-tipo").textContent =
    (tipo === "verdade" ? "💬 VERDADE" : "🎯 DESAFIO") + " — " + vodNomes[vodIdx];
  document.getElementById("vod-txt").textContent = txt;
  document.getElementById("vod-res").classList.remove("hidden");
}

function vodNext() {
  vodIdx = (vodIdx + 1) % vodNomes.length;
  document.getElementById("vod-res").classList.add("hidden");
  vodUpdateVez();
}

function vodBackSetup() {
  document.getElementById("vod-jogo").classList.add("hidden");
  document.getElementById("vod-setup").classList.remove("hidden");
  renderSelecao("vod-sel", "vod-sel-count");
}

/* ---------- HISTÓRIA ---------- */
let histNomes = [], histIdx = 0, histAtual = null, histUsadas = [], histDicasUsadas = 0;

function goHist() {
  show("hist");
  renderSelecao("hist-sel", "hist-sel-count");
  document.getElementById("hist-setup").classList.remove("hidden");
  document.getElementById("hist-jogo").classList.add("hidden");
}

function histStart() {
  const nomes = getSelecionados("hist-sel");
  if (nomes.length < 1) { alert("Selecione pelo menos 1 jogador."); return; }
  histNomes = nomes;
  histIdx = 0;
  histUsadas = [];
  document.getElementById("hist-setup").classList.add("hidden");
  document.getElementById("hist-jogo").classList.remove("hidden");
  histNew();
}

function histNew() {
  let disp = HISTORIAS.filter((_, i) => !histUsadas.includes(i));
  if (!disp.length) { histUsadas = []; disp = HISTORIAS; }
  const h = disp[Math.floor(Math.random() * disp.length)];
  histUsadas.push(HISTORIAS.indexOf(h));
  histAtual = h;
  histDicasUsadas = 0;
  document.getElementById("hist-texto").textContent = h.texto;
  document.getElementById("hist-perg").textContent = h.pergunta;
  document.getElementById("hist-pal").value = "";
  document.getElementById("hist-res").classList.add("hidden");
  document.getElementById("hist-dica-box").classList.add("hidden");
  document.getElementById("hist-dica-txt").textContent = "";
  document.getElementById("hist-dica-btn").disabled = false;
  document.getElementById("hist-dica-btn").textContent = "💡 Dica (3 restantes)";
  document.getElementById("hist-vez").textContent =
    histNomes.length > 1 ? "Vez de: " + histNomes[histIdx] : "";
}

function histDica() {
  if (!histAtual || histDicasUsadas >= 3) return;
  const dicas = histAtual.dicas || [];
  if (!dicas.length) {
    alert("Esta história não tem dicas.");
    return;
  }
  const txt = dicas[histDicasUsadas] || dicas[dicas.length - 1];
  histDicasUsadas++;
  const resto = 3 - histDicasUsadas;
  const box = document.getElementById("hist-dica-box");
  const el = document.getElementById("hist-dica-txt");
  box.classList.remove("hidden");
  el.textContent = (el.textContent ? el.textContent + "\n\n" : "") + "Dica " + histDicasUsadas + ": " + txt;
  const btn = document.getElementById("hist-dica-btn");
  if (resto <= 0) {
    btn.disabled = true;
    btn.textContent = "💡 Sem dicas restantes";
  } else {
    btn.textContent = "💡 Dica (" + resto + " restante" + (resto > 1 ? "s" : "") + ")";
  }
}

function histCheck() {
  const pal = document.getElementById("hist-pal").value.trim();
  if (!pal) { alert("Digite um palpite!"); return; }
  document.getElementById("hist-res").classList.remove("hidden");
  document.getElementById("hist-rc").innerHTML =
    `<div><h2 style="color:var(--success);margin-bottom:8px">💡 Resposta</h2>
     <div class="resposta-final"><strong>Seu palpite:</strong> ${pal}<br><br><strong>Resposta:</strong> ${histAtual.resposta}</div>
     <p style="margin-top:12px;color:var(--muted)">O grupo decide se valeu!</p></div>`;
  if (histNomes.length > 1) histIdx = (histIdx + 1) % histNomes.length;
}

function histReveal() {
  document.getElementById("hist-res").classList.remove("hidden");
  document.getElementById("hist-rc").innerHTML =
    `<div><h2 style="color:var(--danger);margin-bottom:8px">💡 Resposta</h2>
     <div class="resposta-final">${histAtual.resposta}</div></div>`;
  if (histNomes.length > 1) histIdx = (histIdx + 1) % histNomes.length;
}

function histBackSetup() {
  document.getElementById("hist-jogo").classList.add("hidden");
  document.getElementById("hist-setup").classList.remove("hidden");
  renderSelecao("hist-sel", "hist-sel-count");
}

/* init */
document.addEventListener("DOMContentLoaded", loadJogadores);
