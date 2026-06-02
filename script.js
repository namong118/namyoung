/* ===== TYPING EFFECT ===== */
const phrases = [
  'Frontend Developer',
  'Problem Solver',
  '사용자 경험을 만드는 개발자',
  'Creative Coder',
];

let phraseIdx = 0, charIdx = 0, deleting = false;
const el = document.getElementById('typingText');

function type() {
  const current = phrases[phraseIdx];
  el.textContent = deleting
    ? current.slice(0, --charIdx)
    : current.slice(0, ++charIdx);

  if (!deleting && charIdx === current.length) {
    setTimeout(() => { deleting = true; type(); }, 1800);
    return;
  }
  if (deleting && charIdx === 0) {
    deleting = false;
    phraseIdx = (phraseIdx + 1) % phrases.length;
  }
  setTimeout(type, deleting ? 50 : 90);
}
type();

/* ===== NAV SCROLL ===== */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('nav--scrolled', window.scrollY > 40);
});

/* ===== MOBILE MENU ===== */
const toggle = document.getElementById('navToggle');
const mobileNav = document.getElementById('navMobile');

toggle.addEventListener('click', () => {
  mobileNav.classList.toggle('open');
});

mobileNav.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => mobileNav.classList.remove('open'));
});

/* ===== SCROLL REVEAL ===== */
const revealEls = document.querySelectorAll(
  '.about__grid, .skills__card, .project__card, .contact__grid'
);
revealEls.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => observer.observe(el));

/* ===== CONTACT FORM ===== */
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const btn = this.querySelector('button[type=submit]');
  btn.textContent = '전송 중...';
  btn.disabled = true;
  setTimeout(() => {
    btn.textContent = '메시지가 전송되었습니다 ✅';
    btn.style.background = '#22c55e';
    setTimeout(() => {
      btn.textContent = '메시지 보내기 ✉️';
      btn.style.background = '';
      btn.disabled = false;
      this.reset();
    }, 3000);
  }, 1200);
});
