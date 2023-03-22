const episodes = [
  {
    img: "./episode1.png",
    title: "When You're Lost in the Darkness",
    description:
      " In 2003, a mass fungal infection of mutated Cordyceps sparks a global pandemic. Joel flees with his daughter, Sarah, and brother, Tommy, from their Texas home; Sarah is killed by asoldier.",
  },

  {
    img: "./episode2.png",
    title: "Infected",
    description:
      " Two days before the worldwide outbreak, in Jakarta, Indonesia, the government shows an infected corpse to a mycologist, who tells them there is no cure or vaccine.",
  },
  {
    img: "./episode3.png",
    title: "Long, Long Time",
    description:
      " Joel and Ellie begin the hike to meet with Bill and Frank. Ellie sees evidence of the government's execution of innocents during the early days of the pandemic.",
  },
  {
    img: "./episode4.png",
    title: "Please Hold to My Hand",
    description:
      " Traveling through Missouri, Joel and Ellie are forced to take a detour through Kansas City, where they are ambushed.",
  },
];

//1. acessar a lista de produtos através do DOM
const list = document.querySelector(".episodes-list");

//2. Criar uma função para percorrer todo os meus episódios que estão listadas na variável episodes

function addCard(episodes) {
  for (let i = 0; i < episodes.length; i++) {
    //3. Criar uma função que renderize epidio a episodia

    renderCard(episodes[i]);
  }
}

addCard(episodes);

function renderCard(episodio) {
  const listItem = document.createElement("li");
  listItem.classList.add("card");

  listItem.innerHTML = `
  <img
  src=${episodio.img}
  alt=${episodio.title}
/>
<div class="card-text">
  <h4>${episodio.title}</h4>
  <p>
  ${episodio.description}
  </p>
</div>
  `;

  list.appendChild(listItem);
}

const botaoHome = document.getElementById('buttonHome')
const botaoEpisodes = document.getElementById('buttonEpisodes')
const botaoStory = document.getElementById('buttonStory')
const botaoGallery = document.getElementById('buttonGallery')

const secaoHome = document.getElementById('inicio')
const secaoEpisodes = document.getElementById('episodios')
const secaoStory = document.getElementById('historia')
const secaoGallery = document.getElementById('galeria')

botaoHome.addEventListener('click', function() {
  secaoHome.scrollIntoView({behavior: 'smooth'});
  secaoHome.classList.add('blink');
  setTimeout(() => secaoHome.classList.remove('blink'), 300);
});

botaoEpisodes.addEventListener('click', function() {
  secaoEpisodes.scrollIntoView({behavior: 'smooth'});
  secaoStory.classList.add('blink');
  setTimeout(() => secaoStory.classList.remove('blink'), 300);
});

botaoStory.addEventListener('click', function() {
  secaoStory.scrollIntoView({behavior: 'smooth'});
  secaoStory.classList.add('blink');
  setTimeout(() => secaoStory.classList.remove('blink'), 300);
});

botaoGallery.addEventListener('click', function() {
  secaoGallery.scrollIntoView({behavior: 'smooth'});
  secaoHome.classList.add('blink');
  setTimeout(() => secaoHome.classList.remove('blink'), 300);
});


