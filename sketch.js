//prompt: faça um projeto de p5js com o tema campo cidade.

//referências: google gemini, google chome.
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}
let campo = [];
        let cidade = [];
        let numArvores = 20;
        let numPredios = 15;

        function setup() {
          createCanvas(800, 600);
          // Inicializa o campo
          for (let i = 0; i < numArvores; i++) {
            campo.push({
              x: random(0, width / 2),
              y: random(height / 2, height),
              tamanho: random(20, 50),
              cor: color(random(0, 100), random(150, 200), random(0, 100)),
            });
          }
          // Inicializa a cidade
          for (let i = 0; i < numPredios; i++) {
            cidade.push({
              x: random(width / 2, width),
              y: random(height / 2, height),
              largura: random(20, 50),
              altura: random(50, 200),
              cor: color(random(100, 150)),
            });
          }
        }

        function draw() {
          background(220);

          // Desenha o campo
          drawCampo();

          // Desenha a cidade
          drawCidade();

          // Interação: Desenha um círculo onde o mouse está
          fill(255, 0, 0, 100); // Vermelho transparente
          ellipse(mouseX, mouseY, 30, 30);
        }

        function drawCampo() {
          // Céu
          background(135, 206, 235);

          // Sol
          fill(255, 255, 0);
          ellipse(width / 4, height / 4, 80, 80);

          // Grama
          fill(0, 150, 0);
          rect(0, height / 2, width / 2, height / 2);

          // Árvores
          for (let arvore of campo) {
            fill(arvore.cor);
            ellipse(arvore.x, arvore.y, arvore.tamanho, arvore.tamanho);
            // Tronco
            fill(101, 67, 33);
            rect(arvore.x - 5, arvore.y + arvore.tamanho / 2, 10, 20);
          }
        }

        function drawCidade() {
          // Fundo da cidade
          fill(100);
          rect(width / 2, height / 2, width / 2, height / 2);

          // Prédios
          for (let predio of cidade) {
            fill(predio.cor);
            rect(predio.x, predio.y - predio.altura, predio.largura, predio.altura);
            // Janelas (simples)
            fill(255);
            for (let j = 0; j < predio.altura / 30; j++) {
              for (let i = 0; i < predio.largura / 20; i++) {
                rect(predio.x + i * 20 + 5, predio.y - predio.altura + j * 30 + 5, 10, 20);
              }
            }
          }
        }
        
