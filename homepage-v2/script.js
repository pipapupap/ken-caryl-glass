const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.primary-nav');
menuButton.addEventListener('click', () => {
  const open = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});
navigation.addEventListener('click', (event) => {
  if (!event.target.closest('a')) return;
  navigation.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
});

// The Figma reviews use five individual four-point star assets in a vertical rail.
const starAssets = ['222c7.svg', '90bed.svg', '95920.svg', '227e9.svg', '7fa51.svg'];
document.querySelectorAll('.vertical-stars').forEach((rail) => {
  starAssets.forEach((asset) => {
    const star = document.createElement('img');
    star.src = `../assets/${asset}`;
    star.alt = '';
    rail.append(star);
  });
});

// Preserve the placeholder FAQ wording and two open answers shown in the mockup.
const faqColumns = document.querySelector('.faq-columns');
for (let column = 0; column < 2; column += 1) {
  const wrapper = document.createElement('div');
  wrapper.className = 'faq-column';
  for (let index = 0; index < 3; index += 1) {
    const item = document.createElement('details');
    item.className = 'faq-item';
    item.open = index === 0;
    const summary = document.createElement('summary');
    const question = document.createElement('span');
    question.textContent = index === 0
      ? 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do'
      : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod?';
    const arrow = document.createElement('img');
    arrow.src = '../assets/ca10c.svg';
    arrow.alt = '';
    summary.append(question, arrow);
    const answer = document.createElement('p');
    answer.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
    item.append(summary, answer);
    wrapper.append(item);
  }
  faqColumns.append(wrapper);
}

document.querySelectorAll('.quote-form').forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    form.querySelector('.form-status').textContent = 'Design study only — no information was sent.';
  });
});
