const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const reveals = document.querySelectorAll('.reveal');
if (reduceMotion) reveals.forEach((item) => item.classList.add('visible'));
else {
  const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
    if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
  }), { threshold: 0.12 });
  reveals.forEach((item) => observer.observe(item));
}

const progress = document.querySelector('.scroll-progress');
const updateProgress = () => {
  const range = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = `${range > 0 ? (window.scrollY / range) * 100 : 0}%`;
};
window.addEventListener('scroll', updateProgress, { passive: true });
updateProgress();

const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.primary-nav');
menuButton.addEventListener('click', () => {
  const open = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});
navigation.addEventListener('click', () => { navigation.classList.remove('open'); menuButton.setAttribute('aria-expanded', 'false'); });

const faqData = [
  ['What types of residential glass do you service?', 'We work with window glass, shower enclosures, patio doors, mirrors, shelves, tabletops, cabinet glass, and other custom applications.'],
  ['Do you provide commercial glass service?', 'Yes. We support offices, storefronts, property owners, and other commercial spaces with repair, replacement, interior glass, and film.'],
  ['Can you make glass to a custom size?', 'Yes. Final recommendations depend on the measurements, thickness, edge treatment, hardware, and how the piece will be used.'],
  ['Do you install 3M window film?', 'Ken Caryl Glass is shown in this design as a 3M Authorized Window Film Dealer with Certified 3M Installers.'],
  ['Where are your offices?', 'The mockup lists physical offices in Littleton and Colorado Springs, Colorado.'],
  ['Do you offer emergency board-up?', 'The mockup highlights 24-hour emergency board-up service. Call the nearest office for availability.'],
  ['How do I request an estimate?', 'Use either quote form in this study or contact the Littleton or Colorado Springs office by phone.'],
  ['What information should I provide?', 'Share the project location, approximate dimensions, glass type if known, photos, and what you want the finished result to do.'],
  ['Is this page connected to a live form?', 'No. This is a front-end design study; the form interaction is demonstrated locally and does not transmit data.']
];
const faqGrid = document.querySelector('.faq-grid');
faqGrid.innerHTML = faqData.map(([question, answer], index) => `<article class="faq-item"><button class="faq-question" type="button" aria-expanded="false" aria-controls="faq-${index}"><span class="faq-icon">?</span><span>${question}</span><span aria-hidden="true">+</span></button><div class="faq-answer" id="faq-${index}"><p>${answer}</p></div></article>`).join('');
faqGrid.addEventListener('click', (event) => {
  const button = event.target.closest('.faq-question'); if (!button) return;
  const item = button.closest('.faq-item'); const open = item.classList.toggle('open');
  button.setAttribute('aria-expanded', String(open)); button.lastElementChild.textContent = open ? '−' : '+';
});

const gallerySets = [
  ['a79d7.png','e9d1b.png','30ac9.png'],['c5424.png','115ae.png','9ee1c.png'],['c69a8.png','945b8.png','2924f.png'],['4195e.png','e345e.png','980c0.png'],['b83e6.png','76044.png','380e0.png']
];
document.querySelector('.gallery-controls').addEventListener('click', (event) => {
  const dots = [...document.querySelectorAll('.gallery-dot')]; const index = dots.indexOf(event.target); if (index < 0) return;
  document.querySelectorAll('.gallery img').forEach((image, imageIndex) => { image.src = `../assets/${gallerySets[index][imageIndex]}`; });
  dots.forEach((dot, dotIndex) => dot.classList.toggle('active', dotIndex === index));
});

document.querySelectorAll('.quote-form').forEach((form) => form.addEventListener('submit', (event) => {
  event.preventDefault(); form.querySelector('.form-status').textContent = 'Design study only — no information was sent.';
}));
