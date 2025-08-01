const teamMembers = {
  1: {
    name: "Ali Raza",
    role: "Frontend Developer",
    bio: "Ali creates beautiful user interfaces and ensures responsive design across all devices.",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    links: [
      { icon: "fab fa-linkedin", url: "#" },
      { icon: "fab fa-github", url: "#" },
    ],
  },
  2: {
    name: "Ayesha Khan",
    role: "UI/UX Designer",
    bio: "Ayesha is passionate about designing intuitive and user-centered interfaces.",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
    links: [
      { icon: "fab fa-linkedin", url: "#" },
      { icon: "fab fa-behance", url: "#" },
    ],
  },
  3: {
    name: "Usman Tariq",
    role: "Backend Developer",
    bio: "Usman handles server-side logic, APIs, and databases for scalable apps.",
    img: "https://randomuser.me/api/portraits/men/77.jpg",
    links: [
      { icon: "fab fa-linkedin", url: "#" },
      { icon: "fab fa-github", url: "#" },
    ],
  },
  4: {
    name: "Sana Malik",
    role: "Project Manager",
    bio: "Sana ensures projects run smoothly from planning to delivery with clear communication.",
    img: "https://randomuser.me/api/portraits/women/45.jpg",
    links: [
      { icon: "fab fa-linkedin", url: "#" },
      { icon: "fab fa-twitter", url: "#" },
    ],
  },
};

const cards = document.querySelectorAll('.team-card');
const modal = document.getElementById('modal');
const closeModal = document.getElementById('closeModal');
const modalImg = document.getElementById('modalImg');
const modalName = document.getElementById('modalName');
const modalRole = document.getElementById('modalRole');
const modalBio = document.getElementById('modalBio');
const modalLinks = document.getElementById('modalLinks');

cards.forEach(card => {
  card.addEventListener('click', () => {
    const memberId = card.getAttribute('data-member');
    const member = teamMembers[memberId];

    modalImg.src = member.img;
    modalName.textContent = member.name;
    modalRole.textContent = member.role;
    modalBio.textContent = member.bio;
    
    modalLinks.innerHTML = '';
    member.links.forEach(link => {
      const a = document.createElement('a');
      a.href = link.url;
      a.innerHTML = <i class="${link.icon}"></i>;
      a.target = '_blank';
      modalLinks.appendChild(a);
    });

    modal.style.display = 'flex';
  });
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', e => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});