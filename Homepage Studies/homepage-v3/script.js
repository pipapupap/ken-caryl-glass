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

document.querySelectorAll('.five-stars, .four-stars').forEach((row) => {
  const assets = row.classList.contains('five-stars')
    ? Array(5).fill('6da6b.svg')
    : ['222c7.svg','90bed.svg','95920.svg','227e9.svg','7fa51.svg'];
  assets.forEach((asset) => {
    const image = document.createElement('img');
    image.src = `../../assets/${asset}`;
    image.alt = '';
    row.append(image);
  });
});

const faqList = document.querySelector('.faq-list');
for (let index = 0; index < 6; index += 1) {
  const item = document.createElement('details');
  item.className = 'faq-item';
  item.open = index === 0;
  const summary = document.createElement('summary');
  const question = document.createElement('span');
  question.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod?';
  const arrow = document.createElement('img');
  arrow.src = '../../assets/06414.svg';
  arrow.alt = '';
  summary.append(question, arrow);
  const answer = document.createElement('p');
  answer.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod sdasdas';
  item.append(summary, answer);
  faqList.append(item);
}

document.querySelectorAll('.quote-form').forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    form.querySelector('.form-status').textContent = 'Design study only — no information was sent.';
  });
});

// Repeat the same three reviews on either side of the original set. Rebase only
// after scrolling settles, so touch momentum and mouse dragging stay natural.
const reviewTrack = document.querySelector('.review-track');
const originalReviews = [...reviewTrack.children];
const duplicateReview = (review) => {
  const copy = review.cloneNode(true);
  copy.setAttribute('aria-hidden', 'true');
  copy.querySelectorAll('a').forEach((link) => { link.tabIndex = -1; });
  return copy;
};
reviewTrack.prepend(...originalReviews.map(duplicateReview));
reviewTrack.append(...originalReviews.map(duplicateReview));
reviewTrack.tabIndex = 0;
reviewTrack.setAttribute('role', 'region');
reviewTrack.setAttribute('aria-roledescription', 'carousel');
reviewTrack.setAttribute('aria-label', 'Customer reviews. Swipe, drag, or use the left and right arrow keys.');
let reviewCycle = 0;
let reviewStep = 0;
let dragging = false;
let dragged = false;
let dragStartX = 0;
let dragStartScroll = 0;
let settleTimer;
const measureReviews = () => {
  const cards = reviewTrack.children;
  reviewStep = cards[1].offsetLeft - cards[0].offsetLeft;
  reviewCycle = cards[3].offsetLeft - cards[0].offsetLeft;
  const offset = Math.max(0, (reviewCycle - reviewTrack.clientWidth - 20) / 2);
  reviewTrack.scrollLeft = reviewCycle + offset;
};
const normalizeReviews = () => {
  if (dragging || !reviewCycle) return;
  let position = reviewTrack.scrollLeft;
  while (position < reviewCycle) position += reviewCycle;
  while (position >= reviewCycle * 2) position -= reviewCycle;
  if (Math.abs(position - reviewTrack.scrollLeft) > 1) reviewTrack.scrollLeft = position;
};
reviewTrack.addEventListener('scroll', () => {
  clearTimeout(settleTimer);
  settleTimer = setTimeout(normalizeReviews, 160);
}, { passive: true });
const controls = document.createElement('div');
controls.className = 'review-slider-controls';
const moveReviews = (direction) => {
  normalizeReviews();
  reviewTrack.scrollBy({ left: direction * reviewStep, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
};
[['Previous reviews', '‹', -1], ['Next reviews', '›', 1]].forEach(([label, symbol, direction]) => {
  const button = document.createElement('button');
  button.type = 'button';
  button.setAttribute('aria-label', label);
  button.textContent = symbol;
  button.addEventListener('click', () => moveReviews(direction));
  controls.append(button);
});
reviewTrack.after(controls);
reviewTrack.addEventListener('keydown', (event) => {
  if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
  event.preventDefault();
  moveReviews(event.key === 'ArrowRight' ? 1 : -1);
});
reviewTrack.addEventListener('pointerdown', (event) => {
  if (event.pointerType !== 'mouse' || event.button !== 0) return;
  dragging = true;
  dragged = false;
  dragStartX = event.clientX;
  dragStartScroll = reviewTrack.scrollLeft;
});
window.addEventListener('pointermove', (event) => {
  if (!dragging) return;
  const distance = event.clientX - dragStartX;
  if (Math.abs(distance) > 5) {
    dragged = true;
    reviewTrack.classList.add('dragging');
    reviewTrack.scrollLeft = dragStartScroll - distance;
    event.preventDefault();
  }
});
const finishReviewDrag = () => {
  if (!dragging) return;
  dragging = false;
  reviewTrack.classList.remove('dragging');
  normalizeReviews();
};
window.addEventListener('pointerup', finishReviewDrag);
window.addEventListener('pointercancel', finishReviewDrag);
reviewTrack.addEventListener('dragstart', (event) => event.preventDefault());
reviewTrack.addEventListener('click', (event) => {
  if (dragged) { event.preventDefault(); dragged = false; }
}, true);
new ResizeObserver(measureReviews).observe(reviewTrack);
measureReviews();
