import React from "react";
import ReactDOM from "react-dom/client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import App from "./App.jsx";

const root = ReactDOM.createRoot(document.getElementById("carousel"));

root.render(<App />);

/*root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);*/

// Función efecto maquina de escribir
function typeWriter(htmlString, element, speed, callback) {
  const parser = new DOMParser();
  const parsedHTML = parser.parseFromString(htmlString, "text/html"); // Convertimos el HTML a nodos
  const nodes = Array.from(parsedHTML.body.childNodes); // Obtenemos los nodos de la estructura HTML
  let currentNodeIndex = 0;

  function processNode() {
    if (currentNodeIndex < nodes.length) {
      const currentNode = nodes[currentNodeIndex];

      if (currentNode.nodeType === Node.TEXT_NODE) {
        // Animar un texto plano
        const text = currentNode.textContent;
        let textIndex = 0;

        function typeText() {
          if (textIndex < text.length) {
            element.innerHTML += text[textIndex];
            textIndex++;
            setTimeout(typeText, speed);
          } else {
            currentNodeIndex++;
            processNode();
          }
        }

        typeText();
      } else if (currentNode.nodeType === Node.ELEMENT_NODE) {
        // Animar un elemento HTML
        element.innerHTML += currentNode.outerHTML; // Añadimos directamente el elemento
        currentNodeIndex++;
        setTimeout(processNode, speed);
      }
    } else if (callback) {
      callback();
    }
  }

  processNode();
}

// Espera a que el DOM cargue
document.addEventListener("DOMContentLoaded", () => {
  const titulo = "HELLO WORLD \n I'M ALBERTO ZANI";
  const formattedTitle = titulo.replaceAll("\n", "<br>");

  const typewriterElement = document.getElementById("titulo");
  const restContents = document.querySelectorAll(".rest-content");

  // start animacion
  typeWriter(formattedTitle, typewriterElement, 150, () => {
    setTimeout(() => {
      restContents.forEach((content) => {
        content.style.display = "block";
      });
    }, 900);
    // retraso aparicio en milisegundos (1000 = 1segundo)
  });
});

/* Efecto box que si muovono */
import * as basicScroll from "basicscroll";

const boxes = document.querySelectorAll(".box");

// Direcciones de movimiento para cada box
const movimientos = [
  { from: "-100px", to: "100px" }, // Box 1:  de izquierda a derecha
  { from: "0px", to: "250px" }, //    Box 2:  de centro hacia la derecha
  { from: "100px", to: "-200px" }, // Box 3:  de derecha a izquierda
  { from: "50px", to: "-150px" }, //  Box 4:  de izquierda a derecha
  { from: "-100px", to: "100px" }, // Box 5:  de izquierda a derecha
  { from: "0px", to: "250px" }, //    Box 6:  de centro hacia la derecha
  { from: "100px", to: "-200px" }, // Box 7:  de derecha a izquierda
  { from: "50px", to: "-150px" }, //  Box 8:  de izquierda a derecha
];

function animateBoxes() {
  requestAnimationFrame(animateBoxes);

  boxes.forEach((box, index) => {
    const movimiento = movimientos[index];

    const instance = basicScroll.create({
      elem: box,
      from: "bottom-bottom",
      to: "top-top",
      direct: true,
      props: {
        "--r": {
          from: "0",
          to: "1turn",
        },
        "--tx": {
          from: movimiento.from,
          to: movimiento.to,
        },
      },
    });

    instance.start();
  });
}
animateBoxes();

/* aprir imagen */

function createLightbox(selectors) {
  selectors.forEach((selector) => {
    document.querySelectorAll(selector).forEach((img) => {
      img.addEventListener("click", () => {
        const modal = document.createElement("div");
        modal.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,0.8);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1000;
    `;
        const modalImg = document.createElement("img");
        modalImg.src = img.getAttribute("src");
        modalImg.style.maxWidth = "90%";
        modalImg.style.maxHeight = "90%";
        modal.appendChild(modalImg);
        document.body.appendChild(modal);

        modal.addEventListener("click", () => {
          document.body.removeChild(modal);
        });
      });
    });
  });
}

// Uso
createLightbox([".game-image img", ".fella img", ".porfolio img"]); // añadir, y entre "" poner .nomeClasseCSS img

// Cambio de idioma

const languageSelection = document.querySelectorAll(".language-nav a");

function CambioIdioma(language) {
  document.getElementById("idioma").innerHTML = {
    es: "Soy desarrollador web autodidacta apasionado de la programación.<br>Actualmente me encuentro profundizando mis conocimientos dia tras dias lo que me permite descubrir este mundo lleno de nuevas tecnologías y disfutar afrontando nuevos retos.<br> Busco un <b>entorno desafiante</b> donde aplicar mis habilidades y <b>continuar creciendo</b> como desarrollador.<br> Tengo habilidades en <b>Python</b> , <b>JavaScript</b> , <b>React</b> , <b>HTML</b> , <b>CSS</b>.",
    en: "I am a self-taught web developer with a passion for programming.<br>I am constantly expanding my knowledge, discovering new technologies, and enjoying tackling new challenges.<br>I am seeking a <b>challenging environment</b> where I can apply my skills and <b>continue to grow</b> as a developer.<br> My skills include <b>Python</b>, <b>JavaScript</b>, <b>React</b>, <b>HTML</b>, and <b>CSS</b>.",
  }[language];

  document.getElementById("idioma-proy").innerHTML = {
    es: "MIS PROYECTOS",
    en: "MY PROJECTS",
  }[language];

  document.getElementById("idioma-contacta").innerHTML = {
    es: "CONTACTA CONMIGO",
    en: "CONTACT ME",
  }[language];

  document.getElementById("idioma-skill").innerHTML = {
    es: '<li class="left">Capacidad de Aprender</li><li class="right">Capacidades Analíticas</li><li class="left">Resolución de Problemas</li><li class="right">Habilidades de Organización</li><li class="left">Comunicación Efectiva</li><li class="right">Gestión del Tiempo</li><li class="left">Servicio al Cliente</li>',
    en: '<li class="left">Learning Ability</li><li class="right">Analytical Skills</li><li class="left">Problem Solving</li><li class="right">Organizational Skills</li><li class="left">Effective Communication</li><li class="right">Time Management</li><li class="left">Customer Service</li>',
  }[language];

  const fellaButton = document.querySelectorAll(".fella-button");
  fellaButton.forEach(
    (button) =>
      (button.innerHTML = {
        es: "Visitar",
        en: "Visit",
      }[language])
  );

  const gameButton = document.querySelectorAll(".game-button");
  gameButton.forEach(
    (button) =>
      (button.innerHTML = {
        es: "Jugar",
        en: "Play",
      }[language])
  );

  const imgPorfolio = document.querySelectorAll(".img-porfolio");
  imgPorfolio.forEach(
    (button) =>
      (button.innerHTML = {
        es: "Mi Porfolio",
        en: "My Porfolio",
      }[language])
  );

  // Actualizar el texto del tooltip del ícono de teléfono
  const phoneTooltip = document.querySelector(".phone .tooltiptext");
  phoneTooltip.innerHTML = {
    es: "Llamame al +34 600299584",
    en: "Call me at +34 600299584",
  }[language];

  // Actualizar el texto del tooltip del ícono de Github
  const githubTooltip = document.querySelector(".github .tooltiptext-github");
  githubTooltip.innerHTML = {
    es: "También puede encontrarme en Github",
    en: "You can also find me on Github",
  }[language];
}

languageSelection.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const language = link.getAttribute("data-lang");
    CambioIdioma(language);
  });
});

CambioIdioma("es");

/* SCROLL Skill */
/*
const skillLeft = document.querySelectorAll(".left");
const skillRight = document.querySelectorAll(".right");

function revelaSkill() {
  const windowHeight = window.innerHeight;
  const scrollTop = window.scrollY;

  skillLeft.forEach((left) => {
    const skillTopL = left.offsetTop;
    if (scrollTop > skillTopL - windowHeight) {
      left.classList.add(
        "animate__animated",
        "animate__fadeInLeft",
        "delayed-animation"
      );
    }
  });

  skillRight.forEach((right) => {
    const skillTopR = right.offsetTop;
    if (scrollTop > skillTopR - windowHeight) {
      right.classList.add(
        "animate__animated",
        "animate__fadeInRight",
        "delayed-animation"
      );
    }
  });
}
window.addEventListener("scroll", revelaSkill);
revelaSkill();*/

const skillLeft = document.querySelectorAll(".left");
const skillRight = document.querySelectorAll(".right");
const skillContainer = document.querySelector(".portada-h"); // Suponiendo que tus habilidades están dentro de un div con clase 'skill-container'

function revelaSkill() {
  const windowHeight = window.innerHeight;
  const scrollTop = window.scrollY;
  const containerTop = skillContainer.offsetTop; // Obtener la posición superior del contenedor

  skillLeft.forEach((left) => {
    const skillTopL = left.offsetTop;
    if (scrollTop > skillTopL - windowHeight + 1 && scrollTop > containerTop) {
      // Verificar el tope de 50px y la posición del contenedor
      left.classList.add(
        "animate__animated",
        "animate__fadeInLeft",
        "delayed-animation"
      );
    }
  });

  skillRight.forEach((right) => {
    const skillTopR = right.offsetTop;
    if (scrollTop > skillTopR - windowHeight + 1 && scrollTop > containerTop) {
      // Verificar el tope de 50px y la posición del contenedor
      right.classList.add(
        "animate__animated",
        "animate__fadeInRight",
        "delayed-animation"
      );
    }
  });
}

window.addEventListener("scroll", revelaSkill);
revelaSkill();
