//! Language Changaes 
let currentLang = "cs";
const translations = {
  cs: {
    "nav-location": "Praha · 7 dní v týdnu",
    "float-btn": "Napsat na WhatsApp",
    "hero-h1": "Opravíme vše, co se<br>pokazilo doma i na chatě",
    "hero-sub": "Instalatérství · Elektrika · Malování · Drobné opravy",
    "hero-location": "Pracujeme 7 dní v týdnu po celé Praze",
    "hero-btn": "Napište nám na WhatsApp",
    "hero-reply": "Obvykle odpovídáme do 15 minut",
    "hero-price": "🔧 Drobné opravy již od 500 Kč",
    "hero-langs": "Mluvíme česky, rusky a ukrajinsky",
    "trust-1": "Bezplatná kalkulace",
    "trust-2": "Vysoká kvalita",
    "trust-3": "Rychlý výjezd",
    "services-label": "Co děláme",
    "services-title": "Naše služby",
    "services-sub":
      "Postaráme se o jakýkoli úkol v domě — v bytě i na chatě či chalupě",
    "svc1-name": "Čištění odpadů a kanalizace",
    "svc1-desc":
      "Odstraňujeme ucpávky v umyvadlech, vanách, záchodech a potrubí. Rychle a bez nepořádku.",
    "svc2-name": "Drobné opravy",
    "svc2-desc":
      "Jakékoli drobné závady, které dlouho čekají na opravu — uděláme rychle a pečlivě.",
    "svc3-name": "Výměna vodovodních baterií",
    "svc3-desc":
      "Namontujeme novou baterii rychle a bez protékání. Jakýkoli model, jakákoli složitost.",
    "svc4-name": "Údržba pozemku",
    "svc4-desc":
      "Sekání trávy, hrabání listí, péče o zahradu a pozemek. Dům i chata.",
    "svc5-name": "Připojení myčky a pračky",
    "svc5-desc":
      "Připojíme pračku a myčku nádobí. Zkontrolujeme všechna spojení a funkčnost.",
    "svc6-name": "Montáž nábytku",
    "svc6-desc":
      "Sestavíme nábytek z jakéhokoli obchodu — IKEA, Jysk, Möbelix a dalších. Rychle a rovně.",
    "svc7-name": "Instalace svítidel",
    "svc7-desc":
      "Namontujeme lustry, nástěnné lampy, bodová světla a další svítidla. Pečlivě, se zárukou.",
    "svc8-name": "Malířské a natěračské práce",
    "svc8-desc":
      "Malování stěn, stropů, dveří a dalších povrchů. Čistě a bez kapek.",
    "any-name": "Nenašli jste svůj problém?",
    "any-desc":
      "Postaráme se o jakékoli opravy — v domě, bytě nebo na chatě. Napište nám, co potřebujete.",
    "any-link": "Napsat nám",
    "portfolio-label": "Naše práce",
    "portfolio-title": "Příklady dokončených zakázek",
    "portfolio-sub": "Skutečné práce našich mistrů v Praze a okolí",
    "photo-label": "VAŠE FOTO",
    "port1-title": "Montáž nábytku",
    "port2-title": "Čištění odpadů a kanalizace",
    "port3-title": "Výměna vodovodních baterií",
    "port4-title": "Připojení myčky a pračky",
    "reviews-label": "Reference zákazníků",
    "reviews-title": "Co říkají naši zákazníci",
    "rating-text": "na Google Maps",
    "read-more": "Zobrazit více",
    "show-less": "Zobrazit méně",
    // "review1-text":
    //   '„Opravili únik ve stejný den. Rychle, pečlivě, cena férová. Určitě se obrátím znovu."',
    // "review2-text":
    //   '„Na WhatsApp odpověděli hned. Přijeli ráno, vyměnili zásuvku. Profesionálně a bez zbytečných řečí."',
    // "review3-text":
    //   '„Vymalovali celý byt — čistě, včas, výsledek skvělý. Velmi doporučuji!"',
    // "rev1-name": "Martin N.",
    // "rev1-loc": "Praha 3",
    // "rev2-name": "Lucie K.",
    // "rev2-loc": "Praha 6",
    // "rev3-name": "Jana P.",
    // "rev3-loc": "Praha 10",
    "cta-eyebrow": "Kontakt",
    "cta-title": "Napište nám na WhatsApp",
    "cta-sub":
      "Pošlete fotku nebo popište problém — okamžitě sdělíme cenu a přijedeme ve stejný den.",
    "cta-btn": "Napište nám na WhatsApp",
    "cta-reassure": "Obvykle odpovídáme do 15 minut · Bezplatná kalkulace",
    "footer-copy": "© 2026 OpravyPraha.cz — Všechna práva vyhrazena",
  },
  ru: {
    "nav-location": "Прага · 7 дней в неделю",
    "float-btn": "Написать в WhatsApp",
    "hero-h1": "Починим всё, что<br>сломалось дома и на даче",
    "hero-sub": "Сантехника · Электрика · Стены · Мелкий ремонт",
    "hero-location": "Работаем 7 дней в неделю по всей Праге",
    "hero-btn": "Напишите нам на WhatsApp",
    "hero-reply": "Обычно отвечаем в течение 15 минут",
    "hero-price": "🔧 Мелкий ремонт от 500 крон",
    "hero-langs": "Говорим на чешском, русском и украинском",
    "trust-1": "Бесплатная оценка",
    "trust-2": "Высокое качество",
    "trust-3": "Быстрый выезд",
    "services-label": "Что мы делаем",
    "services-title": "Наши услуги",
    "services-sub":
      "Беремся за любую задачу по дому — и в квартире, и на даче.",
    "svc1-name": "Прочистка канализации",
    "svc1-desc":
      "Устраняем засоры в раковинах, ваннах, туалетах и трубах. Быстро и без грязи.",
    "svc2-name": "Мелкий ремонт",
    "svc2-desc":
      "Любые мелкие поломки, которые давно просят внимания — сделаем быстро и аккуратно.",
    "svc3-name": "Замена смесителя",
    "svc3-desc":
      "Установим новый смеситель быстро и без протечек. Любая модель, любая сложность.",
    "svc4-name": "Обслуживание участка",
    "svc4-desc":
      "Покос травы, уборка листьев, уход за садом и территорией. Дом и дача.",
    "svc5-name": "Подключение техники",
    "svc5-desc":
      "Подключим стиральную машину и посудомойку. Проверим все соединения и работу.",
    "svc6-name": "Сборка мебели",
    "svc6-desc":
      "Соберём мебель из любого магазина — IKEA, Jysk, Möbelix и других. Быстро и ровно.",
    "svc7-name": "Монтаж светильников",
    "svc7-desc":
      "Установим люстры, бра, споты и другие светильники. Аккуратно, с гарантией.",
    "svc8-name": "Малярные работы",
    "svc8-desc":
      "Покраска стен, потолков, дверей и других поверхностей. Чисто и без потёков.",
    "any-name": "Не нашли свою задачу?",
    "any-desc":
      "Мы беремся за любой ремонт — дома, в квартире или на даче. Просто напишите нам, что нужно сделать.",
    "any-link": "Написать нам",
    "portfolio-label": "Наши работы",
    "portfolio-title": "Примеры выполненных заказов",
    "portfolio-sub": "Реальные работы наших мастеров в Праге и пригороде",
    "photo-label": "ВАШЕ ФОТО",
    "port1-title": "Сборка мебели",
    "port2-title": "Прочистка канализации",
    "port3-title": "Замена смесителя",
    "port4-title": "Подключение техники",
    "reviews-label": "Отзывы клиентов",
    "reviews-title": "Что говорят наши клиенты",
    "rating-text": "на Google Maps",
    "read-more": "Показать больше",
    "show-less": "Свернуть",
    "cta-eyebrow": "Контакт",
    "cta-title": "Напишите нам на WhatsApp",
    "cta-sub":
      "Пришлите фото или опишите проблему — сразу скажем цену и приедем в тот же день.",
    "cta-btn": "Напишите нам на WhatsApp",
    "cta-reassure": "Обычно отвечаем в течение 15 минут · Бесплатная оценка",
    "footer-copy": "© 2026 OpravyPraha.cz — Все права защищены",
  },
  uk: {
    "nav-location": "Прага · 7 днів на тиждень",
    "float-btn": "Написати у WhatsApp",
    "hero-h1": "Полагодимо все, що<br>зламалось вдома і на дачі",
    "hero-sub": "Сантехніка · Електрика · Стіни · Дрібний ремонт",
    "hero-location": "Працюємо 7 днів на тиждень по всій Празі",
    "hero-btn": "Напишить нам на WhatsApp",
    "hero-reply": "Зазвичай відповідаємо протягом 15 хвилин",
    "hero-price": "🔧 Дрібний ремонт від 500 крон",
    "hero-langs": "Розмовляємо чеською, російською та українською",
    "trust-1": "Безкоштовна оцінка",
    "trust-2": "Висока якість",
    "trust-3": "Швидкий виїзд",
    "services-label": "Що ми робимо",
    "services-title": "Наші послуги",
    "services-sub":
      "Беремось за будь-яке завдання вдома — і в квартирі, і на дачі.",
    "svc1-name": "Прочищення каналізації",
    "svc1-desc":
      "Усуваємо засори в раковинах, ваннах, туалетах і трубах. Швидко і без бруду.",
    "svc2-name": "Дрібний ремонт",
    "svc2-desc":
      "Будь-які дрібні несправності, що давно чекають на увагу — зробимо швидко і акуратно.",
    "svc3-name": "Заміна змішувача",
    "svc3-desc":
      "Встановимо новий змішувач швидко і без протікань. Будь-яка модель, будь-яка складність.",
    "svc4-name": "Обслуговування ділянки",
    "svc4-desc":
      "Косіння трави, прибирання листя, догляд за садом і ділянкою. Будинок і дача.",
    "svc5-name": "Підключення техніки",
    "svc5-desc":
      "Підключимо пральну машину та посудомийну машину. Перевіримо всі з'єднання і роботу.",
    "svc6-name": "Складання меблів",
    "svc6-desc":
      "Зберемо меблі з будь-якого магазину — IKEA, Jysk, Möbelix та інших. Швидко і рівно.",
    "svc7-name": "Монтаж світильників",
    "svc7-desc":
      "Встановимо люстри, бра, споти та інші світильники. Акуратно, з гарантією.",
    "svc8-name": "Малярні роботи",
    "svc8-desc":
      "Фарбування стін, стель, дверей та інших поверхонь. Чисто і без крапель.",
    "any-name": "Не знайшли своє завдання?",
    "any-desc":
      "Ми беремось за будь-який ремонт — вдома, в квартирі або на дачі. Просто напишіть нам, що потрібно зробити.",
    "any-link": "Написати нам",
    "portfolio-label": "Наші роботи",
    "portfolio-title": "Приклади виконаних замовлень",
    "portfolio-sub": "Реальні роботи наших майстрів у Празі та передмісті",
    "photo-label": "ВАШЕ ФОТО",
    "port1-title": "Складання меблів",
    "port2-title": "Прочищення каналізації",
    "port3-title": "Заміна змішувача",
    "port4-title": "Підключення техніки",
    "reviews-label": "Відгуки клієнтів",
    "reviews-title": "Що кажуть наші клієнти",
    "rating-text": "на Google Maps",
    "read-more": "Показати більше",
    "show-less": "Свернуть",
    "cta-eyebrow": "Контакт",
    "cta-title": "Напишіть нам у WhatsApp",
    "cta-sub":
      "Надішліть фото або опишіть проблему — одразу скажемо ціну і приїдемо того ж дня.",
    "cta-btn": "Напишіть нам у WhatsApp",
    "cta-reassure":
      "Зазвичай відповідаємо протягом 15 хвилин · Безкоштовна оцінка",
    "footer-copy": "© 2026 OpravyPraha.cz — Усі права захищені",
  },
};
function setLanguage(lang) {
  const t = translations[lang];
  if (!t) return;

  currentLang = lang;

  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (t[key] === undefined) return;
    if (key === "hero-h1") {
      el.innerHTML = t[key];
    } else {
      el.textContent = t[key];
    }
  });

  document.querySelectorAll(".read-more").forEach((btn) => {
  const expanded = btn.classList.contains("expanded");

  btn.textContent = expanded
    ? t["read-less"]
    : t["read-more"];
  });
  
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });
  try {
    localStorage.setItem("lang", lang);
  } catch (e) {}
}

const saved = (() => {
  try {
    return localStorage.getItem("lang");
  } catch (e) {
    return null;
  }
})();
setLanguage(saved && translations[saved] ? saved : "cs");
// ! Reviews manually by JSON

document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector(".reviews-grid");
  const nextBtn = document.querySelector(".reviews-next");
  const prevBtn = document.querySelector(".reviews-prev");

  if (!grid) return;

  const reviews = [
    {
      name: "Brittney Trefford",
      location: "Praha",
      text: "We highly recommend! This is the second time we've called on him for various tasks at home. He understands the job and does everything well. Today he installed these metal laundry drying racks from NaturalGoodsBerlin above our bath. It was hard work drilling into a concrete ceiling but all was done in 3 hours! Very efficient and professional!",
      rating: 5,
      avatar: "B",
      color: "blue",
    },
    {
      name: "Volodymyr",
      location: "Praha",
      text: "Velká spokojenost. Potřeboval jsem sestavit nábytek z IKEA a všechno proběhlo rychle a bez problémů. Hodinový manžel přijel včas, měl vlastní nářadí a práce byla hotová velmi profesionálně. Určitě doporučuji každému, kdo hledá řemeslníka v Praze.",
      rating: 5,
      avatar: "V",
      color: "orange",
    },
    {
      name: "Anastasiya Kr",
      location: "Praha",
      text: "Potřeboval jsem pomoc s montáží nábytku . Domluva byla rychlá, přijel přesně na čas a práce byla hotová pečlivě. Velmi ochotný a spolehlivý hodinový manžel. Doporučuji.",
      rating: 5,
      avatar: "AK",
      color: "green",
    },
    {
      name: "Antonin",
      location: " ",
      text: "Objednali jsme si službu Muž na hodinu na opravu postele a byli jsme moc spokojení. Pan přijel včas, rychle našel problém a opravil vše profesionálně. Postel je teď pevná a stabilní, práce byla odvedena pečlivě a za férovou cenu. Určitě doporučujeme a rádi se na něj znovu obrátíme.",
      rating: 5,
      avatar: "A",
      color: "blue",
    },
    {
      name: "Kenny Vladi",
      location: "Praha",
      text: "Jevgenij je vynikající hodinový manžel! Plánovala jsem vyhodit svou rozbitou postel, na které se nedalo ležet na jedné straně, protože mé pokusy o opravu rámu byly neúspěšné. Jevgenij navrhl, abych postel nevynášela, a nabídl pomoc s opravou. Nakonec odvedl perfektní práci, naslouchal mým potřebám. Práce byla rychlá a cena byla docela rozumná. Znovu ho využiji a vřele ho doporučuji! Postel už měsíc vypadá jako nová a konečně můžu používat obě strany.",
      rating: 5,
      avatar: "KV",
      color: "orange",
    },
    {
      name: "Eva",
      location: "Praha",
      text: "Obrátili jsme se na ně s žádostí o sestavení skříně a postele. Vše bylo provedeno rychle a kvalitně. Určitě se obrátíme znovu!",
      rating: 5,
      avatar: "E",
      color: "green",
    },
  ];

  function stars(n) {
    return "★★★★★".slice(0, n);
  }

  let currentPage = 0;
  const perPage = 3;

  function getPerPage() {
    if (window.innerWidth <= 600) return 1; // mobile
    if (window.innerWidth <= 1024) return 4; // tablet
    return 3; // desktop
  }
  // function isMobile() {
  //   return window.innerWidth <= 600;
  // }

  //  function isTablet() {
  //    return window.innerWidth <= 1024;
  //  }

  function renderReviews() {
    grid.innerHTML = "";

    const visible = isMobile()
      ? [reviews[currentPage]]
      : reviews.slice(currentPage * perPage, currentPage * perPage + perPage); // 💻 3 карточки

    visible.forEach((r) => {
      const card = document.createElement("div");
      card.className = "review-card";

      const t = translations[currentLang];

      card.innerHTML = `
  <div class="review-stars">${stars(r.rating)}</div>

  <p class="review-text">${r.text}</p>
  <button class="read-more">${t["read-more"]}</button>

  <div class="reviewer">
    <div class="avatar ${r.color}">${r.avatar}</div>
    <div>
      <div class="reviewer-name">${r.name}</div>
      <div class="reviewer-location">${r.location}</div>
    </div>
  </div>
`;
      grid.appendChild(card);
    });

  }
  function renderReviews() {
    grid.innerHTML = "";

    const perPage = getPerPage();

    const t = translations[currentLang];

    const start = currentPage * perPage;
    const visible = reviews.slice(start, start + perPage);

    visible.forEach((r) => {
      const card = document.createElement("div");
      card.className = "review-card";

      card.innerHTML = `
      <div class="review-stars">${stars(r.rating)}</div>

      <p class="review-text">${r.text}</p>
      <button class="read-more">${t["read-more"]}</button>

      <div class="reviewer">
        <div class="avatar ${r.color}">${r.avatar}</div>
        <div>
          <div class="reviewer-name">${r.name}</div>
          <div class="reviewer-location">${r.location}</div>
        </div>
      </div>
    `;

      grid.appendChild(card);
    });
  }

  // --- NEXT / PREV ---
  // function nextPage() {
  //   if (isMobile()) {
  //     currentPage = (currentPage + 1) % reviews.length;
  //   } else {
  //     const maxPage = Math.ceil(reviews.length / perPage);
  //     currentPage = (currentPage + 1) % maxPage;
  //   }
  //   renderReviews();
  // }

  function nextPage() {
    const perPage = getPerPage();
    const maxPage = Math.ceil(reviews.length / perPage);

    currentPage = (currentPage + 1) % maxPage;
    renderReviews();
  }

  // function prevPage() {
  //   if (isMobile()) {
  //     currentPage = (currentPage - 1 + reviews.length) % reviews.length;
  //   } else {
  //     const maxPage = Math.ceil(reviews.length / perPage);
  //     currentPage = (currentPage - 1 + maxPage) % maxPage;
  //   }
  //   renderReviews();
  // }

  function prevPage() {
    const perPage = getPerPage();
    const maxPage = Math.ceil(reviews.length / perPage);

    currentPage = (currentPage - 1 + maxPage) % maxPage;
    renderReviews();
  }
  nextBtn?.addEventListener("click", nextPage);
  prevBtn?.addEventListener("click", prevPage);

  // --- SWIPE (mobile) ---
  // let startX = 0;

  // grid.addEventListener("touchstart", (e) => {
  //   startX = e.touches[0].clientX;
  // });

  // grid.addEventListener("touchend", (e) => {
  //   if (!isMobile()) return;

  //   let diff = startX - e.changedTouches[0].clientX;

  //   if (Math.abs(diff) > 40) {
  //     if (diff > 0) nextPage();
  //     else prevPage();
  //   }
  // });

  // --- READ MORE ---
  grid.addEventListener("click", (e) => {
     const t = translations[currentLang];
    const btn = e.target.closest(".read-more");
    if (!btn) return;

    const text = btn.parentElement.querySelector(".review-text");
    if (!text) return;

    text.classList.toggle("expanded");

    btn.textContent = text.classList.contains("expanded")
      ? `${t["show-less"]}`
      : `${t["read-more"]}`;
  });

  renderReviews();

  // window.addEventListener("resize", renderReviews);
  window.addEventListener("resize", () => {
    currentPage = 0;
    renderReviews();
  });
});

document.querySelectorAll(".carousel").forEach((carousel) => {
  const slides = carousel.querySelectorAll(".slides img");
  const nextBtn = carousel.querySelector(".next");
  const prevBtn = carousel.querySelector(".prev");

  let index = 0;
  let timer = null;

  // --- LAZY LOAD ---
  function loadImage(img) {
    if (img.dataset.src && !img.src) {
      img.src = img.dataset.src;
    }
  }

  function show(i) {
    slides.forEach((img, idx) => {
      img.classList.remove("active");
    });

    index = (i + slides.length) % slides.length;

    loadImage(slides[index]);
    slides[index].classList.add("active");
  }

  function next() {
    show((index + 1) % slides.length);
  }

  function prev() {
    show((index - 1 + slides.length) % slides.length);
  }
  nextBtn?.addEventListener("click", () => {
    next();
    resetAutoplay();
  });

  prevBtn?.addEventListener("click", () => {
    prev();
    resetAutoplay();
  });

  // --- AUTOPLAY ---
  // function startAutoplay() {
  //   timer = setInterval(next, 4000);
  // }

  // function resetAutoplay() {
  //   clearInterval(timer);
  //   startAutoplay();
  // }

  // startAutoplay();

  // --- SWIPE ---
  // let startX = 0;
  // let endX = 0;

  // carousel.addEventListener("touchstart", (e) => {
  //   startX = e.touches[0].clientX;
  // });

  // carousel.addEventListener("touchend", (e) => {
  //   endX = e.changedTouches[0].clientX;

  //   const diff = startX - endX;

  //   if (Math.abs(diff) > 40) {
  //     if (diff > 0) next();
  //     else prev();

  //     resetAutoplay();
  //   }
  // });

  // init
  show(0);
});
