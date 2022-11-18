const hamburger = document.querySelector('.hamburger');

const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');

  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}));

const projects = [
  {
    id: 1,
    name: 'Tonic',
    description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it 1960s ',
    image: '../images/work-img1.png',
    imageDesktop: '../images/Snapshoot Portfolio(6).png',
    technologies: ['html', 'css', 'JavaScript'],
    link: 'https://github.com/wajahatalli/Portfolio/',
    source: 'https://github.com/wajahatalli/Portfolio',
  },
  {
    id: 2,
    name: 'Multi-Post Stories',
    description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the1500, when an unknown printer took a galley of type and scrambled it 1960s.',
    image: '../images/work-img2.png',
    technologies: ['html', 'css', 'JavaScript', 'github'],
    link: 'https://github.com/wajahatalli/Portfolio/',
    source: 'https://github.com/wajahatalli/Portfolio/',
  },
  {
    id: 3,
    name: 'Facebook 360',
    description:
            ' Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. scrambled it 1960s with the relea',
    image: '../images/work-img3.png',
    technologies: ['html', 'css', 'JavaScript'],
    link: 'https://github.com/wajahatalli/Portfolio/',
    source: 'https://github.com/wajahatalli/Portfolio/',
  },
  {
    id: 4,
    name: 'Uber Navigation',
    description:
            'Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley.',
    image: '../images/work-img4.png',
    technologies: ['html', 'css', 'JavaScript'],
    link: 'https://github.com/wajahatalli/Portfolio/',
    source: 'https://github.com/wajahatalli/Portfolio/',
  },
];

const onModalOpen = async (id) => {
  const getData = await projects.find((project) => project.id === id);

  const modal = document.querySelector('.modal-container');
  modal.style.display = 'block';
  document.getElementById('modal-title').innerHTML = getData.name;
  document.getElementById('modal-desc').innerHTML = getData.description;
  document.getElementById('modal-img').src = getData.image;
  document.getElementById('modal-seelive').src = getData.link;
  document.getElementById('modal-seesource').src = getData.source;

  document.getElementById('group-list').innerHTML = getData.technologies
    .map((tech) => `<li class="stack">${tech}</li>`)
    .join('');
};
