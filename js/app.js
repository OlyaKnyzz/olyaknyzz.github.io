/* =========================================================================
   ПОРТФОЛИО — данные и логика сайта
   ========================================================================= */

const CASES = [
  {
    n: 1,
    title: 'Приложение «Напоминалка»',
    stack: 'Visual Studio · WPF · C#',
    photos: 3,
    desc: [
      'Приложение создано, чтобы помочь занятым людям разгрузить голову. Вместо того чтобы держать в памяти десятки мелких задач, их можно быстро записать, а дальше программа сама напомнит о каждой из них в указанное время с помощью уведомления.'
    ],
    bullets: [
      'Быстрое добавление задачи и её текста',
      'Настройка времени, даты и повторов срабатывания',
      'Период тишины и автоудаление после напоминания',
      'Список всех напоминаний с общим счётчиком'
    ],
    tags: ['C#', '.NET', 'WPF', 'Visual Studio', 'Desktop']
  },
  {
    n: 2,
    title: 'Информационная система «Салон красоты»',
    stack: 'Visual Studio · C# · база данных',
    photos: 6,
    desc: [
      'Программа для учёта работы салона красоты: мастера, услуги, клиенты и отзывы связаны в единой базе данных и доступны из понятного интерфейса.'
    ],
    bullets: [
      'База данных из 5 таблиц, созданная в Visual Studio',
      'Добавление, удаление и редактирование Мастеров',
      'Добавление, удаление и редактирование Услуг',
      'Добавление, удаление и редактирование Клиентов',
      'Добавление, удаление и редактирование Отзывов',
      '15 запросов к базе данных'
    ],
    tags: ['C#', 'Visual Studio', 'Реляционная БД', 'CRUD', 'SQL-запросы']
  },
  {
    n: 3,
    title: 'Мобильное приложение «Салон красоты»',
    stack: 'Android Studio · PostgreSQL · API на Python',
    photos: 9,
    desc: [
      'Приложение предназначено для отслеживания записи клиентов салона красоты мастерами. Два типа доступа: администратор и мастер салона.'
    ],
    bullets: [
      'Вход как администратор и как пользователь (мастер)',
      'Регистрация нового мастера',
      '5 вкладок для администратора, 3 — для мастера',
      'Создание, редактирование и удаление записи клиента',
      'Управление мастерами и их аккаунтами, клиентами и услугами',
      'База данных в PostgreSQL',
      'API на Python в Visual Studio Code'
    ],
    tags: ['Android', 'Android Studio', 'PostgreSQL', 'Python', 'REST API', 'Мобильная разработка']
  },
  {
    n: 4,
    title: 'Приложение для учёта товаров и заказов',
    stack: 'Visual Studio · C# · SQL Server Management Studio',
    photos: 6,
    desc: [
      'Программа для учёта товаров и заказов: склад, позиции и оформленные заказы в одном окне.',
      'Особенностью этого приложения является простой, компактный и понятный код для дальнейшего заучивания.'
    ],
    bullets: [],
    tags: ['C#', 'Visual Studio', 'SQL Server Management Studio', 'PostgreSQL', 'Учёт данных']
  },
  {
    n: 5,
    title: 'Библиотечная система учёта выдачи литературы',
    stack: 'Python · PyQt · PostgreSQL',
    photos: 6,
    desc: [
      'Задание: библиотечная система учёта выдачи учебной литературы для библиотеки колледжа.'
    ],
    bullets: [
      'Спроектированная БД в PostgreSQL: Книги (ISBN, название, автор, количество экз.), Читатели (студенты и преподаватели), Выдачи (книга, читатель, дата выдачи, срок сдачи, статус)',
      'Приложение для библиотекаря на PyQt',
      'Поиск книги по названию и автору',
      'Оформление выдачи и приёма книг',
      'Автоматический список должников с просроченными книгами'
    ],
    tags: ['Python', 'PyQt', 'PostgreSQL', 'Проектирование БД', 'Desktop']
  },
  {
    n: 6,
    title: 'Система управления обучением на курсах',
    stack: 'WPF (C#) · SQL Server · T-SQL',
    photos: 6,
    desc: [
      'Приложение для управления обучением на курсах: база данных, интерфейс на WPF и работа с запросами T-SQL.'
    ],
    bullets: [
      'Проектирование базы данных системы обучения',
      'Реализация БД в SQL Server Management Studio',
      'Разработка пользовательского интерфейса в WPF (C#)',
      'Добавление, изменение и удаление данных в таблицах: Курсы, Уроки, Преподаватели, Группы, Записи, Студенты, Оценки, Оплата',
      'Тестирование работоспособности приложения'
    ],
    tags: ['C#', 'WPF', 'SQL Server', 'SSMS', 'T-SQL', 'CRUD']
  },
  {
    n: 7,
    title: 'Мониторинг роста растений в марсианских условиях',
    stack: 'Учебный проект · десктопное приложение с отчётами',
    photos: 5,
    desc: [
      'Система мониторинга роста растений в марсианских условиях с возможностью сравнения с земными аналогами.'
    ],
    bullets: [
      'CRUD-функционал для таблицы «Экспериментальные культуры»: данные о растениях, их генетических модификациях, потреблении ресурсов и адаптации к среде',
      'Сравнительные отчёты по ключевым показателям',
      'Измеряемые параметры роста: высота растений (см/день) и количество листьев',
      'Факторы среды: уровень радиации (мкЗв/ч)'
    ],
    tags: ['Desktop', 'CRUD', 'Отчёты', 'Работа с данными', 'Сравнительный анализ']
  }
];

const photoSrc = (c, idx) => `assets/case${c.n}/${String(idx + 1).padStart(2, '0')}.jpg`;
const photoName = (c, idx) => `${c.title} — ${idx === 0 ? 'главный экран' : 'скриншот ' + (idx + 1)}`;

function buildCard(c, i) {
  const slides = [];
  const dots = [];
  for (let p = 0; p < c.photos; p++) {
    const src = photoSrc(c, p);
    const alt = `${photoName(c, p)} — работа ${i + 1} из ${CASES.length}`;
    slides.push(`
      <div class="slide">
        <img class="slide-img" src="${src}" alt="${alt}" loading="${p === 0 ? 'eager' : 'lazy'}"
             decoding="async" width="1200" height="800">
      </div>`);
    dots.push(`<button class="dot" type="button" data-goto="${p}" aria-label="Фото ${p + 1} из ${c.photos}"><span class="dot-fill"></span></button>`);
  }

  const list = c.bullets && c.bullets.length
    ? `<ul class="case-list">${c.bullets.map(b => `<li>${b}</li>`).join('')}</ul>` : '';
  const tags = c.tags.map(t => `<li class="tag">${t}</li>`).join('');

  return `
  <article class="case" id="case-${c.n}" style="--i:${i}">
    <div class="case-media">
      <div class="carousel" data-case="${c.n}" tabindex="0" role="group"
           aria-roledescription="карусель" aria-label="Скриншоты работы: ${c.title}. Стрелки влево и вправо листают.">
        <div class="track">${slides.join('')}</div>
        <button class="car-nav car-prev" type="button" aria-label="Предыдущий скриншот">‹</button>
        <button class="car-nav car-next" type="button" aria-label="Следующий скриншот">›</button>
        <span class="car-count"><b class="car-cur">1</b>/${c.photos}</span>
      </div>
      <div class="dots" role="tablist" aria-label="Выбор скриншота">${dots.join('')}</div>
    </div>

    <div class="case-info">
      <h3 class="case-title">${c.title}</h3>
      <p class="case-stack">${c.stack}</p>
      ${c.desc.map(p => `<p class="case-desc">${p}</p>`).join('')}
      ${list}
      <ul class="tags">${tags}</ul>
    </div>
  </article>`;
}

const projectsEl = document.getElementById('projects');
projectsEl.innerHTML = CASES.map(buildCard).join('');
document.getElementById('year').textContent = new Date().getFullYear();

class Carousel {
  constructor(root) {
    this.root = root;
    this.track = root.querySelector('.track');
    this.total = this.track.children.length;
    this.dots = [...root.parentElement.querySelectorAll('.dot')];
    this.cur = root.querySelector('.car-cur');
    this.i = 0;
    this.x0 = null; this.dx = 0; this.moved = false;

    root.querySelector('.car-prev').addEventListener('click', () => this.go(-1));
    root.querySelector('.car-next').addEventListener('click', () => this.go(1));
    
    root.querySelectorAll('.slide-img').forEach(img =>
      img.addEventListener('click', (e) => {
        if (this.moved) return;
        Lightbox.open(+root.dataset.case - 1, this.i);
      }));
      
    this.dots.forEach(d => d.addEventListener('click', () => this.to(+d.dataset.goto)));

    root.addEventListener('keydown', e => {
      if (e.key === 'ArrowLeft')  { e.preventDefault(); this.go(-1); root.focus(); }
      if (e.key === 'ArrowRight') { e.preventDefault(); this.go(1);  root.focus(); }
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); Lightbox.open(+root.dataset.case - 1, this.i); }
    });

    root.addEventListener('pointerdown', e => { if (e.target.closest('.car-nav')) return; this.x0 = e.clientX; this.dx = 0; this.moved = false; });
    root.addEventListener('pointermove', e => {
      if (this.x0 === null) return;
      this.dx = e.clientX - this.x0;
      if (Math.abs(this.dx) > 8) this.moved = true;
    });
    const end = () => {
      if (this.x0 === null) return;
      if (this.moved && Math.abs(this.dx) > 45) this.go(this.dx < 0 ? 1 : -1);
      this.x0 = null;
    };
    root.addEventListener('pointerup', end);
    root.addEventListener('pointercancel', end);
    root.addEventListener('pointerleave', end);

    this.to(0);
  }
  to(i) {
    this.i = (i + this.total) % this.total;
    this.track.style.transform = `translateX(-${this.i * 100}%)`;
    this.dots.forEach((d, k) => {
      const on = k === this.i;
      d.classList.toggle('is-on', on);
      d.setAttribute('aria-selected', on ? 'true' : 'false');
    });
    this.cur.textContent = this.i + 1;
  }
  go(step) { this.to(this.i + step); }
}

const carousels = new Map();
projectsEl.querySelectorAll('.carousel').forEach(c => carousels.set(+c.dataset.case, new Carousel(c)));

const Lightbox = (() => {
  const box = document.getElementById('lightbox');
  const img = document.getElementById('lb-img');
  const cap = document.getElementById('lb-caption');
  const cnt = document.getElementById('lb-count');
  const thumbs = document.getElementById('lb-thumbs');
  let caseIdx = 0, photoIdx = 0, list = [], lastFocus = null;

  function renderThumbs() {
    thumbs.innerHTML = list.map((_, k) =>
      `<button class="lb-thumb${k === photoIdx ? ' is-on' : ''}" type="button" data-k="${k}" aria-label="Фото ${k + 1} из ${list.length}">
         <img src="${list[k]}" alt="" loading="lazy"></button>`).join('');
    thumbs.querySelectorAll('.lb-thumb').forEach(b =>
      b.addEventListener('click', () => show(+b.dataset.k)));
  }

  function show(k) {
    photoIdx = (k + list.length) % list.length;
    img.src = list[photoIdx];
    img.alt = `${photoName(CASES[caseIdx], photoIdx)} — просмотр на весь экран`;
    cap.textContent = `${CASES[caseIdx].title} · фото ${photoIdx + 1} из ${list.length}`;
    cnt.textContent = `${photoIdx + 1} / ${list.length}`;
    thumbs.querySelectorAll('.lb-thumb').forEach((b, j) => {
      b.classList.toggle('is-on', j === photoIdx);
      if (j === photoIdx) b.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });
    });
    const car = carousels.get(CASES[caseIdx].n);
    if (car) car.to(photoIdx);
  }

  function open(n, k) {
    const c = CASES[n]; if (!c) return;
    caseIdx = n;
    lastFocus = document.activeElement;
    list = Array.from({ length: c.photos }, (_, p) => photoSrc(c, p));
    box.hidden = false;
    document.body.classList.add('no-scroll');
    renderThumbs();
    show(k || 0);
    box.querySelector('.lb-close').focus();
  }

  function close() {
    box.hidden = true;
    img.removeAttribute('src');
    document.body.classList.remove('no-scroll');
    if (lastFocus) lastFocus.focus();
  }

  box.addEventListener('click', e => { if (e.target === box) close(); });
  box.querySelector('.lb-close').addEventListener('click', close);
  box.querySelector('.lb-prev').addEventListener('click', () => show(photoIdx - 1));
  box.querySelector('.lb-next').addEventListener('click', () => show(photoIdx + 1));

  document.addEventListener('keydown', e => {
    if (box.hidden) return;
    if (e.key === 'Escape')     close();
    if (e.key === 'ArrowLeft')  show(photoIdx - 1);
    if (e.key === 'ArrowRight') show(photoIdx + 1);
  }, { passive: false });

  let x = null;
  box.addEventListener('touchstart', e => { x = e.touches[0].clientX; }, { passive: true });
  box.addEventListener('touchend', e => {
    if (x === null) return;
    const dx = e.changedTouches[0].clientX - x;
    if (Math.abs(dx) > 55) show(photoIdx + (dx < 0 ? 1 : -1));
    x = null;
  }, { passive: true });

  return { open, close };
})();

if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.documentElement.classList.add('js-anim');
  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach(en => {
      if (en.isIntersecting) { en.target.classList.add('is-in'); obs.unobserve(en.target); }
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
  projectsEl.querySelectorAll('.case').forEach(el => io.observe(el));
} else {
  projectsEl.querySelectorAll('.case').forEach(el => el.classList.add('is-in'));
}

document.querySelectorAll('[data-tip]').forEach(el => {
  el.addEventListener('touchstart', () => {
    document.querySelectorAll('.is-tipped').forEach(o => o !== el && o.classList.remove('is-tipped'));
    el.classList.add('is-tipped');
  }, { passive: true });
  el.addEventListener('blur', () => el.classList.remove('is-tipped'));
});
document.addEventListener('click', e => {
  if (!e.target.closest('[data-tip]'))
    document.querySelectorAll('.is-tipped').forEach(o => o.classList.remove('is-tipped'));
});

document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const t = document.querySelector(a.getAttribute('href'));
    if (!t) return;
    e.preventDefault();
    t.scrollIntoView({ behavior: 'smooth', block: 'start' });
    history.replaceState(null, '', a.getAttribute('href'));
  });
});