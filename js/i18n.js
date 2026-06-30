/* ════════════════════════════════════════════════════════════════
   i18n dictionary — UZ / RU / ZH / EN
   Keys are referenced from index.html via data-i18n="dot.path"
   and rendered from arrays by main.js (lists, cats, steps, reviews).
   ════════════════════════════════════════════════════════════════ */
window.I18N = {

  /* ─────────────────────────── РУССКИЙ ─────────────────────────── */
  ru: {
    meta: { title: "Центр Закупок Сетей: Текстиль — TextileExpo Uzbekistan 2026, Ташкент" },
    langName: "Русский",
    nav: { about: "О мероприятии", audience: "Для кого", cats: "Категории", how: "Как проходит", reviews: "Отзывы", contacts: "Контакты", cta: "Участвовать" },
    hero: {
      badge1: "TextileExpo Uzbekistan 2026", badge2: "B2B Meetings",
      title: "Центр Закупок Сетей:", titleAccent: "Текстиль",
      slogan: "Один день прямых переговоров поставщиков и закупщиков текстиля — лицом к лицу, на международной выставке TextileExpo Uzbekistan.",
      dateLabel: "Дата", dateVal: "9 сентября 2026",
      placeLabel: "Место", placeVal: "Узэкспоцентр, Ташкент",
      formatLabel: "Формат", formatVal: "Деловые B2B-встречи",
      roleLabel: "Я участвую как:", roleSupplier: "Поставщик", roleBuyer: "Закупщик",
      hintSupplier: "Покажите продукцию вживую закупщикам фабрик, госструктур, HoReCa и ритейла — и выйдите на прямые переговоры за один день.",
      hintBuyer: "За один день получите концентрированный обзор поставщиков текстиля: увидите продукт вживую и проведёте прямые переговоры.",
      cta: "Стать участником", cta2: "Подробнее о событии"
    },
    facts: { items: [
      { num: "09.09.2026", label: "TextileExpo Uzbekistan · Ташкент" },
      { num: "1 день", label: "Формат прямых B2B-встреч" },
      { num: "2 стороны", label: "Поставщики и закупщики" },
      { num: "Личный кабинет", label: "У каждого участника на B2B-платформе" }
    ]},
    about: {
      eyebrow: "О мероприятии",
      title: "Площадка, где текстильный рынок встречается лицом к лицу",
      p1: "<strong>Центр Закупок Сетей: Текстиль</strong> — это деловой формат прямых переговоров (B2B meetings), который проходит в рамках международной выставки <strong>TextileExpo Uzbekistan 2026</strong> в Узэкспоцентре (Ташкент).",
      p2: "За один день поставщики текстильной продукции, оборудования и фурнитуры встречаются лицом к лицу с закупщиками: фабриками по производству одежды, государственными структурами, сетями HoReCa, ритейлерами и профильными магазинами.",
      p3: "<strong>Цель события</strong> — за один день перевести интерес к продукту в прямой разговор с закупщиком и конкретные коммерческие договорённости.",
      platform: {
        tag: "Платформа мероприятия", title: "B2B-платформа Центра Закупок Сетей",
        desc: "Все поставщики и закупщики зарегистрированы на специальной B2B-платформе, которая была разработана под Центр Закупок Сетей и имеет аккредитацию в Сколково (Москва). У каждого участника мероприятия — свой личный кабинет, итоги всех переговоров и предварительные контракты.",
        li1: "Поставщик загружает презентацию товара с ценами, которую хочет показать закупщику.",
        li2: "Закупщик на мероприятии видит все презентации поставщиков за персональным компьютером (предоставляется каждому закупщику).",
        li3: "Переговоры идут в реальном времени: закупщик фиксирует комментарии и итоги на платформе во время диалога с поставщиком."
      }
    },
    aud: {
      eyebrow: "Для кого", title: "Две стороны одной сделки",
      lead: "Мероприятие объединяет тех, кто производит и поставляет текстиль, и тех, кто закупает его для бизнеса.",
      supplier: {
        title: "Поставщикам", sub: "Текстиль · оборудование · фурнитура",
        items: [
          "Прямой доступ к закупщикам фабрик, госзаказа, HoReCa и ритейла.",
          "Возможность показать продукцию вживую — образцы, фактуру, качество.",
          "Личный кабинет на платформе с презентацией продукта и ценами.",
          "Обратная связь по цене, упаковке, условиям и логистике.",
          "Переход от холодного контакта к предметным переговорам за один день."
        ]
      },
      buyer: {
        title: "Закупщикам", sub: "Фабрики · госструктуры · HoReCa · ритейл",
        items: [
          "Концентрированный обзор поставщиков текстиля за один день.",
          "Возможность увидеть и пощупать продукцию вживую.",
          "Доступ ко всем презентациям поставщиков в личном кабинете онлайн.",
          "Сравнение нескольких поставщиков в одной категории.",
          "Прямые переговоры вместо потока холодных писем."
        ]
      }
    },
    cats: {
      eyebrow: "Ассортимент",
      title: "Категории, которые будут закупать и поставлять",
      lead: "Текстильный рынок — от сырья до готовой продукции и оборудования.",
      items: [
        "Сырьё и волокна",
        "Пряжа, нити и швейные нитки",
        "Ткани и трикотажные полотна",
        "Домашний текстиль",
        "Фурнитура и комплектующие",
        "Отделочные и химические материалы",
        "Специальная, защитная и медицинская одежда (СИЗ + мед)",
        "Оборудование, машины и принадлежности",
        "Готовая одежда",
        "Чулочно-носочные изделия"
      ]
    },
    how: {
      eyebrow: "Как проходит", title: "Один день — от презентации до договорённостей",
      steps: [
        { n: "01", title: "Регистрация на платформе", text: "Поставщики и закупщики получают личный кабинет на B2B-платформе." },
        { n: "02", title: "Загрузка продукции", text: "Поставщик размещает презентацию, образцы и цены в кабинете." },
        { n: "03", title: "Прямые переговоры", text: "В день события — встречи за переговорными столами в Узэкспоцентре." },
        { n: "04", title: "Договорённости", text: "Закупщик видит предложения онлайн и фиксирует итоги и предварительные контракты." }
      ],
      hall: {
        title: "Как устроен зал",
        desc: "В центре зала — ядро из переговорных столов с закупщиками. Вокруг — промо-стенды поставщиков: вешала, образцы продукции, оборудование. Закупщик переходит от стенда к стенду и оценивает продукт вживую."
      },
      gallery: {
        eyebrow: "Как это выглядит", title: "Атмосфера переговоров",
        note: "Фотографии с предыдущих Центров Закупок Сетей.",
        phLabel: "Фото переговоров"
      }
    },
    reviews: {
      eyebrow: "Отзывы", title: "Что говорят участники прошлых встреч",
      note: "На основе отзывов о Центре Закупок Сетей.",
      cta: "Смотреть отзывы на Яндексе",
      items: [
        { text: "Отличное место встретиться с торговыми сетями и переговорить. Очень приятные организаторы. И в целом организация на высшем уровне! Рады были поучаствовать в ЦЗС 2026.", name: "Валерия Соковикова", company: "Яндекс Отзывы · ★★★★★", initials: "ВС" },
        { text: "Участвовал два раза в Центре Закупок Сетей и оба раза пребывал под впечатлением от масштаба и организации мероприятия. Наши стенды всегда посещает огромное количество закупщиков, что даёт нам возможность презентовать свои товары максимально широкой аудитории.", name: "Aleksey Astafiev", company: "Яндекс Отзывы · ★★★★★", initials: "AA" },
        { text: "Эффективное мероприятие для продвижения своих продуктов в сети.", name: "Михаил Я.", company: "Яндекс Отзывы · ★★★★★", initials: "МЯ" }
      ]
    },
    contacts: {
      eyebrow: "Участие", title: "К кому обратиться по участию",
      lead: "Свяжитесь с организаторами, чтобы забронировать участие как поставщик или закупщик.",
      people: [
        { name: "Азиза Алимова", role: "Директор выставки", org: "TextileExpo Uzbekistan", phone: "+998 97 333 71 31", telegram: "@aziza0106" },
        { name: "Марина Савельева", role: "Ивент-директор", org: "Центр Закупок Сетей · Империя Форум", phone: "+7 911 000 8974", telegram: "@MarinaImperia" },
        { name: "Сергей Боровских", role: "Генеральный директор", org: "Платформа SaleTracker", email: "info@saletracker.online", telegram: "@boroffskikh" }
      ],
      cta: "Оставить заявку на участие"
    },
    footer: {
      tagline: "Деловой формат прямых переговоров текстильного рынка в рамках выставки TextileExpo Uzbekistan.",
      col1: "Организатор выставки", col1items: ["Iteca Group"],
      col2: "Организатор Центра Закупок Сетей", col2items: ["Империя Форум"],
      col3: "Лицензия платформы", col3items: ["ООО «Сейл Трекер»"],
      rights: "© 2026 Центр Закупок Сетей: Текстиль. Все права защищены.",
      place: "Ташкент · Узбекистан"
    }
  },

  /* ─────────────────────────── OʻZBEKCHA ─────────────────────────── */
  uz: {
    meta: { title: "Tarmoqlar Xarid Markazi: Toʻqimachilik — TextileExpo Uzbekistan 2026, Toshkent" },
    langName: "Oʻzbekcha",
    nav: { about: "Tadbir haqida", audience: "Kim uchun", cats: "Kategoriyalar", how: "Qanday oʻtadi", reviews: "Fikrlar", contacts: "Aloqa", cta: "Ishtirok etish" },
    hero: {
      badge1: "TextileExpo Uzbekistan 2026", badge2: "B2B uchrashuvlar",
      title: "Tarmoqlar Xarid Markazi:", titleAccent: "Toʻqimachilik",
      slogan: "Toʻqimachilik yetkazib beruvchilar va xaridorlarning bir kunlik toʻgʻridan-toʻgʻri muzokaralari — TextileExpo Uzbekistan xalqaro koʻrgazmasida yuzma-yuz.",
      dateLabel: "Sana", dateVal: "2026-yil 9-sentyabr",
      placeLabel: "Manzil", placeVal: "Uzexpocentre, Toshkent",
      formatLabel: "Format", formatVal: "B2B ishbilarmonlik uchrashuvlari",
      roleLabel: "Men ishtirok etaman:", roleSupplier: "Yetkazib beruvchi", roleBuyer: "Xaridor",
      hintSupplier: "Mahsulotingizni fabrikalar, davlat tashkilotlari, HoReCa va riteyl xaridorlariga jonli koʻrsating — va bir kunda toʻgʻridan-toʻgʻri muzokaralarga chiqing.",
      hintBuyer: "Bir kunda toʻqimachilik yetkazib beruvchilarining toʻliq sharhini oling: mahsulotni jonli koʻring va toʻgʻridan-toʻgʻri muzokaralar oʻtkazing.",
      cta: "Ishtirokchi boʻlish", cta2: "Tadbir haqida batafsil"
    },
    facts: { items: [
      { num: "09.09.2026", label: "TextileExpo Uzbekistan · Toshkent" },
      { num: "1 kun", label: "Toʻgʻridan-toʻgʻri B2B uchrashuvlar" },
      { num: "2 taraf", label: "Yetkazib beruvchilar va xaridorlar" },
      { num: "Shaxsiy kabinet", label: "Har bir ishtirokchida B2B-platformada" }
    ]},
    about: {
      eyebrow: "Tadbir haqida",
      title: "Toʻqimachilik bozori yuzma-yuz uchrashadigan maydon",
      p1: "<strong>Tarmoqlar Xarid Markazi: Toʻqimachilik</strong> — bu <strong>TextileExpo Uzbekistan 2026</strong> xalqaro koʻrgazmasi doirasida Uzexpocentre (Toshkent)da oʻtadigan toʻgʻridan-toʻgʻri muzokaralar (B2B meetings) formati.",
      p2: "Bir kun davomida toʻqimachilik mahsulotlari, jihozlar va furnitura yetkazib beruvchilar xaridorlar bilan yuzma-yuz uchrashadi: kiyim ishlab chiqaruvchi fabrikalar, davlat tashkilotlari, HoReCa tarmoqlari, riteylerlar va ixtisoslashgan doʻkonlar.",
      p3: "<strong>Tadbir maqsadi</strong> — bir kun ichida mahsulotga boʻlgan qiziqishni xaridor bilan toʻgʻridan-toʻgʻri suhbatga va aniq tijoriy kelishuvlarga aylantirish.",
      platform: {
        tag: "Tadbir platformasi", title: "Tarmoqlar Xarid Markazi B2B-platformasi",
        desc: "Barcha yetkazib beruvchilar va xaridorlar Tarmoqlar Xarid Markazi uchun maxsus ishlab chiqilgan va Skolkovo (Moskva) akkreditatsiyasiga ega B2B-platformada roʻyxatdan oʻtgan. Har bir ishtirokchining shaxsiy kabineti, barcha muzokaralar yakunlari va dastlabki shartnomalari boʻladi.",
        li1: "Yetkazib beruvchi narxlari bilan mahsulot taqdimotini yuklaydi va uni xaridorga koʻrsatadi.",
        li2: "Xaridor tadbirda barcha yetkazib beruvchilar taqdimotlarini shaxsiy kompyuterda koʻradi (har bir xaridorga beriladi).",
        li3: "Muzokaralar real vaqtda boradi: xaridor suhbat davomida platformada izoh va yakunlarni qayd etadi."
      }
    },
    aud: {
      eyebrow: "Kim uchun", title: "Bir bitimning ikki tarafi",
      lead: "Tadbir toʻqimachilik ishlab chiqaruvchi va yetkazib beruvchilar hamda uni biznes uchun sotib oluvchilarni birlashtiradi.",
      supplier: {
        title: "Yetkazib beruvchilarga", sub: "Toʻqimachilik · jihozlar · furnitura",
        items: [
          "Fabrikalar, davlat buyurtmasi, HoReCa va riteyl xaridorlariga toʻgʻridan-toʻgʻri kirish.",
          "Mahsulotni jonli koʻrsatish imkoniyati — namunalar, tuzilma, sifat.",
          "Platformada mahsulot taqdimoti va narxlari bilan shaxsiy kabinet.",
          "Narx, qadoqlash, shartlar va logistika boʻyicha fikr-mulohaza.",
          "Bir kunda sovuq aloqadan aniq muzokaralarga oʻtish."
        ]
      },
      buyer: {
        title: "Xaridorlarga", sub: "Fabrikalar · davlat · HoReCa · riteyl",
        items: [
          "Bir kunda toʻqimachilik yetkazib beruvchilarining jamlangan sharhi.",
          "Mahsulotni jonli koʻrish va ushlab koʻrish imkoniyati.",
          "Shaxsiy kabinetda barcha yetkazib beruvchilar taqdimotlariga onlayn kirish.",
          "Bir toifadagi bir nechta yetkazib beruvchini solishtirish.",
          "Sovuq xatlar oqimi oʻrniga toʻgʻridan-toʻgʻri muzokaralar."
        ]
      }
    },
    cats: {
      eyebrow: "Assortiment",
      title: "Xaridor va yetkazib beruvchilar uchun kategoriyalar",
      lead: "Toʻqimachilik bozori — xom ashyodan tayyor mahsulot va jihozlargacha.",
      items: [
        "Xom ashyo va tolalar",
        "Ip, kalava va tikuv iplari",
        "Matolar va trikotaj polotnolar",
        "Uy toʻqimachiligi",
        "Furnitura va butlovchi qismlar",
        "Pardozlash va kimyoviy materiallar",
        "Maxsus, himoya va tibbiy kiyim (SIZ + tibbiyot)",
        "Jihozlar, mashinalar va aksessuarlar",
        "Tayyor kiyim",
        "Paypoq-trikotaj mahsulotlari"
      ]
    },
    how: {
      eyebrow: "Qanday oʻtadi", title: "Bir kun — taqdimotdan kelishuvgacha",
      steps: [
        { n: "01", title: "Platformada roʻyxatdan oʻtish", text: "Yetkazib beruvchilar va xaridorlar B2B-platformada shaxsiy kabinet oladi." },
        { n: "02", title: "Mahsulotni yuklash", text: "Yetkazib beruvchi taqdimot, namuna va narxlarni kabinetga joylaydi." },
        { n: "03", title: "Toʻgʻridan-toʻgʻri muzokaralar", text: "Tadbir kuni — Uzexpocentredagi muzokara stollarida uchrashuvlar." },
        { n: "04", title: "Kelishuvlar", text: "Xaridor takliflarni onlayn koʻradi, yakun va dastlabki shartnomalarni qayd etadi." }
      ],
      hall: {
        title: "Zal qanday tashkil etilgan",
        desc: "Zal markazida — xaridorlar bilan muzokara stollari yadrosi. Atrofida — yetkazib beruvchilarning promo-stendlari: ilgichlar, mahsulot namunalari, jihozlar. Xaridor stenddan stendga oʻtib, mahsulotni jonli baholaydi."
      },
      gallery: {
        eyebrow: "Bu qanday koʻrinadi", title: "Muzokaralar muhiti",
        note: "Oldingi Tarmoqlar Xarid Markazlaridan fotosuratlar.",
        phLabel: "Muzokaralar fotosi"
      }
    },
    reviews: {
      eyebrow: "Fikrlar", title: "Oldingi uchrashuv ishtirokchilari nima deydi",
      note: "Tarmoqlar Xarid Markazi haqidagi fikrlar asosida.",
      cta: "Yandexda fikrlarni koʻrish",
      items: [
        { text: "Savdo tarmoqlari bilan uchrashish va muzokara qilish uchun ajoyib joy. Tashkilotchilar juda yoqimli. Umuman, tashkilot eng yuqori darajada! Tarmoqlar Xarid Markazi 2026da ishtirok etganimizdan xursandmiz.", name: "Валерия Соковикова", company: "Yandex sharhlari · ★★★★★", initials: "ВС" },
        { text: "Tarmoqlar Xarid Markazida ikki marta ishtirok etdim va har ikkalasida ham tadbir koʻlami va tashkilotidan taassurot oldim. Bizning stendlarimizga doimo koʻplab xaridorlar tashrif buyuradi, bu bizga mahsulotlarimizni keng auditoriyaga taqdim etish imkonini beradi.", name: "Aleksey Astafiev", company: "Yandex sharhlari · ★★★★★", initials: "AA" },
        { text: "Mahsulotlaringizni tarmoqlarda ilgari surish uchun samarali tadbir.", name: "Михаил Я.", company: "Yandex sharhlari · ★★★★★", initials: "МЯ" }
      ]
    },
    contacts: {
      eyebrow: "Ishtirok", title: "Ishtirok boʻyicha kimga murojaat qilish",
      lead: "Yetkazib beruvchi yoki xaridor sifatida ishtirokni band qilish uchun tashkilotchilar bilan bogʻlaning.",
      people: [
        { name: "Aziza Alimova", role: "Koʻrgazma direktori", org: "TextileExpo Uzbekistan", phone: "+998 97 333 71 31", telegram: "@aziza0106" },
        { name: "Marina Saveleva", role: "Ivent-direktor", org: "Tarmoqlar Xarid Markazi · Imperia Forum", phone: "+7 911 000 8974", telegram: "@MarinaImperia" },
        { name: "Sergey Borovskix", role: "Bosh direktor", org: "SaleTracker platformasi", email: "info@saletracker.online", telegram: "@boroffskikh" }
      ],
      cta: "Ishtirok uchun ariza qoldirish"
    },
    footer: {
      tagline: "TextileExpo Uzbekistan koʻrgazmasi doirasida toʻqimachilik bozorining toʻgʻridan-toʻgʻri muzokaralari formati.",
      col1: "Koʻrgazma tashkilotchisi", col1items: ["Iteca Group"],
      col2: "Tarmoqlar Xarid Markazi tashkilotchisi", col2items: ["Imperia Forum"],
      col3: "Platforma litsenziyasi", col3items: ["«Sale Tracker» MChJ"],
      rights: "© 2026 Tarmoqlar Xarid Markazi: Toʻqimachilik. Barcha huquqlar himoyalangan.",
      place: "Toshkent · Oʻzbekiston"
    }
  },

  /* ─────────────────────────── 中文 ─────────────────────────── */
  zh: {
    meta: { title: "连锁采购中心：纺织 — TextileExpo Uzbekistan 2026，塔什干" },
    langName: "中文",
    nav: { about: "关于活动", audience: "面向人群", cats: "品类", how: "活动流程", reviews: "评价", contacts: "联系方式", cta: "报名参加" },
    hero: {
      badge1: "TextileExpo Uzbekistan 2026", badge2: "B2B 商务洽谈",
      title: "连锁采购中心：", titleAccent: "纺织",
      slogan: "纺织供应商与采购商面对面的一日直接洽谈 —— 在 TextileExpo Uzbekistan 国际展会现场。",
      dateLabel: "日期", dateVal: "2026年9月9日",
      placeLabel: "地点", placeVal: "乌兹别克斯坦展览中心，塔什干",
      formatLabel: "形式", formatVal: "B2B 商务洽谈",
      roleLabel: "我的参与身份：", roleSupplier: "供应商", roleBuyer: "采购商",
      hintSupplier: "向工厂、政府机构、HoReCa 及零售采购商现场展示产品 —— 一天之内进入直接洽谈。",
      hintBuyer: "一天之内获得纺织供应商的集中概览：现场查看产品并进行直接洽谈。",
      cta: "成为参与者", cta2: "了解活动详情"
    },
    facts: { items: [
      { num: "2026.09.09", label: "TextileExpo Uzbekistan · 塔什干" },
      { num: "1 天", label: "直接 B2B 洽谈形式" },
      { num: "2 方", label: "供应商与采购商" },
      { num: "个人后台", label: "每位参与者均在 B2B 平台" }
    ]},
    about: {
      eyebrow: "关于活动",
      title: "纺织市场面对面相遇的平台",
      p1: "<strong>连锁采购中心：纺织</strong> 是一种直接洽谈（B2B meetings）形式，在 <strong>TextileExpo Uzbekistan 2026</strong> 国际展会期间于乌兹别克斯坦展览中心（塔什干）举办。",
      p2: "在一天之内，纺织产品、设备及辅料供应商与采购商面对面会面：服装制造工厂、政府机构、HoReCa 连锁、零售商及专业门店。",
      p3: "<strong>活动目标</strong> —— 在一天之内，将对产品的兴趣转化为与采购商的直接对话和具体的商务约定。",
      platform: {
        tag: "活动平台", title: "连锁采购中心 B2B 平台",
        desc: "所有供应商和采购商均在一个专为连锁采购中心开发、并获得斯科尔科沃（莫斯科）认证的 B2B 平台上注册。每位参与者都拥有个人后台，可查看所有洽谈结果及初步合同。",
        li1: "供应商上传带价格的产品演示，以展示给采购商。",
        li2: "采购商在活动现场通过个人电脑查看所有供应商的演示（为每位采购商提供电脑）。",
        li3: "洽谈实时进行：采购商在与供应商对话时，在平台上记录评论和结果。"
      }
    },
    aud: {
      eyebrow: "面向人群", title: "一笔交易的两方",
      lead: "活动汇集了生产和供应纺织品的一方，以及为业务采购纺织品的一方。",
      supplier: {
        title: "致供应商", sub: "纺织 · 设备 · 辅料",
        items: [
          "直接接触工厂、政府订单、HoReCa 及零售采购商。",
          "现场展示产品的机会 —— 样品、质地、品质。",
          "在平台拥有含产品演示及价格的个人后台。",
          "获得关于价格、包装、条款及物流的反馈。",
          "一天之内从冷接触转为实质性洽谈。"
        ]
      },
      buyer: {
        title: "致采购商", sub: "工厂 · 政府 · HoReCa · 零售",
        items: [
          "一天之内获得纺织供应商的集中概览。",
          "现场查看并触摸产品的机会。",
          "在个人后台在线查看所有供应商的演示。",
          "在同一品类中比较多家供应商。",
          "以直接洽谈取代大量冷邮件。"
        ]
      }
    },
    cats: {
      eyebrow: "品类范围",
      title: "采购与供应的品类",
      lead: "纺织市场 —— 从原料到成品和设备。",
      items: [
        "原料与纤维",
        "纱线、丝线与缝纫线",
        "面料与针织坯布",
        "家用纺织品",
        "辅料与配件",
        "整理与化学材料",
        "特种、防护与医用服装（劳保+医用）",
        "设备、机械与配件",
        "成衣",
        "袜类针织品"
      ]
    },
    how: {
      eyebrow: "活动流程", title: "一天 —— 从演示到达成约定",
      steps: [
        { n: "01", title: "平台注册", text: "供应商与采购商在 B2B 平台获得个人后台。" },
        { n: "02", title: "上传产品", text: "供应商在后台上传演示、样品和价格。" },
        { n: "03", title: "直接洽谈", text: "活动当天 —— 在乌兹别克斯坦展览中心的洽谈桌前会面。" },
        { n: "04", title: "达成约定", text: "采购商在线查看报价，记录结果和初步合同。" }
      ],
      hall: {
        title: "展厅布局",
        desc: "展厅中央 —— 由采购商洽谈桌组成的核心区。四周 —— 供应商的展示台：挂架、产品样品、设备。采购商在各展台之间穿行，现场评估产品。"
      },
      gallery: {
        eyebrow: "现场一览", title: "洽谈氛围",
        note: "往届连锁采购中心的照片。",
        phLabel: "洽谈照片"
      }
    },
    reviews: {
      eyebrow: "评价", title: "往届参与者的评价",
      note: "基于对连锁采购中心的评价。",
      cta: "在 Yandex 查看评价",
      items: [
        { text: "与零售连锁见面洽谈的绝佳场所。组织者非常友善，整体组织水平很高！很高兴参加了 2026 年连锁采购中心。", name: "Валерия Соковикова", company: "Yandex 评价 · ★★★★★", initials: "ВС" },
        { text: "我两次参加连锁采购中心，每次都对活动的规模和组织印象深刻。我们的展台总是吸引大量采购商，让我们能够向最广泛的受众展示产品。", name: "Aleksey Astafiev", company: "Yandex 评价 · ★★★★★", initials: "AA" },
        { text: "推广产品进入连锁渠道的高效活动。", name: "Михаил Я.", company: "Yandex 评价 · ★★★★★", initials: "МЯ" }
      ]
    },
    contacts: {
      eyebrow: "参与", title: "参与事宜联系人",
      lead: "如需以供应商或采购商身份预订参与，请联系组织方。",
      people: [
        { name: "Aziza Alimova（阿齐扎·阿利莫娃）", role: "展会总监", org: "TextileExpo Uzbekistan", phone: "+998 97 333 71 31", telegram: "@aziza0106" },
        { name: "Marina Saveleva（玛丽娜·萨韦利耶娃）", role: "活动总监", org: "连锁采购中心 · Imperia Forum", phone: "+7 911 000 8974", telegram: "@MarinaImperia" },
        { name: "Sergey Borovskikh（谢尔盖·博罗夫斯基赫）", role: "总经理", org: "SaleTracker 平台", email: "info@saletracker.online", telegram: "@boroffskikh" }
      ],
      cta: "提交参与申请"
    },
    footer: {
      tagline: "TextileExpo Uzbekistan 展会期间纺织市场的直接洽谈形式。",
      col1: "展会主办方", col1items: ["Iteca Group"],
      col2: "连锁采购中心主办方", col2items: ["Imperia Forum"],
      col3: "平台授权方", col3items: ["Sale Tracker 有限责任公司"],
      rights: "© 2026 连锁采购中心：纺织。版权所有。",
      place: "塔什干 · 乌兹别克斯坦"
    }
  },

  /* ─────────────────────────── ENGLISH ─────────────────────────── */
  en: {
    meta: { title: "Networks Purchasing Center: Textile — TextileExpo Uzbekistan 2026, Tashkent" },
    langName: "English",
    nav: { about: "About", audience: "Who it's for", cats: "Categories", how: "How it works", reviews: "Reviews", contacts: "Contacts", cta: "Take part" },
    hero: {
      badge1: "TextileExpo Uzbekistan 2026", badge2: "B2B Meetings",
      title: "Networks Purchasing Center:", titleAccent: "Textile",
      slogan: "One day of direct, face-to-face negotiations between textile suppliers and buyers — at the TextileExpo Uzbekistan international exhibition.",
      dateLabel: "Date", dateVal: "September 9, 2026",
      placeLabel: "Venue", placeVal: "Uzexpocentre, Tashkent",
      formatLabel: "Format", formatVal: "B2B business meetings",
      roleLabel: "I'm taking part as:", roleSupplier: "Supplier", roleBuyer: "Buyer",
      hintSupplier: "Show your products live to buyers from factories, government bodies, HoReCa and retail — and move into direct negotiations in a single day.",
      hintBuyer: "In one day, get a concentrated overview of textile suppliers: see the product live and hold direct negotiations.",
      cta: "Become a participant", cta2: "Learn more"
    },
    facts: { items: [
      { num: "09.09.2026", label: "TextileExpo Uzbekistan · Tashkent" },
      { num: "1 day", label: "Direct B2B meeting format" },
      { num: "2 sides", label: "Suppliers and buyers" },
      { num: "Personal account", label: "For every participant on the B2B platform" }
    ]},
    about: {
      eyebrow: "About the event",
      title: "Where the textile market meets face to face",
      p1: "<strong>Networks Purchasing Center: Textile</strong> is a direct-negotiation format (B2B meetings) held within the <strong>TextileExpo Uzbekistan 2026</strong> international exhibition at the Uzexpocentre (Tashkent).",
      p2: "In a single day, suppliers of textile products, equipment and fittings meet buyers face to face: garment factories, government bodies, HoReCa chains, retailers and specialized stores.",
      p3: "<strong>The goal</strong> is to turn interest in a product into a direct conversation with a buyer — and concrete commercial agreements — within one day.",
      platform: {
        tag: "Event platform", title: "Networks Purchasing Center B2B platform",
        desc: "All suppliers and buyers are registered on a dedicated B2B platform built for the Networks Purchasing Center and accredited by Skolkovo (Moscow). Every participant has a personal account with the results of all negotiations and preliminary contracts.",
        li1: "The supplier uploads a product presentation with prices to show to the buyer.",
        li2: "At the event, the buyer views every supplier's presentation on a personal computer (provided to each buyer).",
        li3: "Negotiations run in real time: the buyer records comments and outcomes on the platform during the conversation."
      }
    },
    aud: {
      eyebrow: "Who it's for", title: "Two sides of one deal",
      lead: "The event brings together those who produce and supply textiles and those who buy them for their business.",
      supplier: {
        title: "For suppliers", sub: "Textiles · equipment · fittings",
        items: [
          "Direct access to buyers from factories, government procurement, HoReCa and retail.",
          "The chance to show products live — samples, texture, quality.",
          "A personal account on the platform with your product presentation and prices.",
          "Feedback on price, packaging, terms and logistics.",
          "Move from a cold contact to substantive negotiations in one day."
        ]
      },
      buyer: {
        title: "For buyers", sub: "Factories · government · HoReCa · retail",
        items: [
          "A concentrated overview of textile suppliers in a single day.",
          "The chance to see and touch products live.",
          "Online access to every supplier's presentation in your account.",
          "Compare several suppliers within one category.",
          "Direct negotiations instead of a stream of cold emails."
        ]
      }
    },
    cats: {
      eyebrow: "Product scope",
      title: "Categories to be bought and supplied",
      lead: "The textile market — from raw materials to finished goods and equipment.",
      items: [
        "Raw materials and fibers",
        "Yarn, threads and sewing threads",
        "Fabrics and knitted textiles",
        "Home textiles",
        "Fittings and components",
        "Finishing and chemical materials",
        "Special, protective and medical clothing (PPE + medical)",
        "Equipment, machines and accessories",
        "Ready-made garments",
        "Hosiery and knitwear"
      ]
    },
    how: {
      eyebrow: "How it works", title: "One day — from presentation to agreements",
      steps: [
        { n: "01", title: "Register on the platform", text: "Suppliers and buyers receive a personal account on the B2B platform." },
        { n: "02", title: "Upload your products", text: "The supplier posts a presentation, samples and prices in the account." },
        { n: "03", title: "Direct negotiations", text: "On event day — meetings at the negotiation tables in the Uzexpocentre." },
        { n: "04", title: "Agreements", text: "The buyer sees offers online and records outcomes and preliminary contracts." }
      ],
      hall: {
        title: "How the hall is arranged",
        desc: "At the center of the hall — a core of negotiation tables with buyers. Around it — suppliers' promo stands: racks, product samples, equipment. The buyer moves from stand to stand and evaluates the product live."
      },
      gallery: {
        eyebrow: "What it looks like", title: "The atmosphere of negotiations",
        note: "Photos from previous Networks Purchasing Centers.",
        phLabel: "Negotiation photo"
      }
    },
    reviews: {
      eyebrow: "Reviews", title: "What past participants say",
      note: "Based on reviews of the Networks Purchasing Center.",
      cta: "See reviews on Yandex",
      items: [
        { text: "A great place to meet retail chains and talk things through. Very pleasant organizers, and the organization overall is top-notch! We were glad to take part in the Networks Purchasing Center 2026.", name: "Валерия Соковикова", company: "Yandex reviews · ★★★★★", initials: "ВС" },
        { text: "I took part in the Networks Purchasing Center twice and both times was impressed by the scale and organization. Our stands are always visited by a huge number of buyers, which lets us present our products to the widest possible audience.", name: "Aleksey Astafiev", company: "Yandex reviews · ★★★★★", initials: "AA" },
        { text: "An effective event for promoting your products into retail chains.", name: "Михаил Я.", company: "Yandex reviews · ★★★★★", initials: "МЯ" }
      ]
    },
    contacts: {
      eyebrow: "Participation", title: "Who to contact about taking part",
      lead: "Get in touch with the organizers to book your participation as a supplier or a buyer.",
      people: [
        { name: "Aziza Alimova", role: "Exhibition Director", org: "TextileExpo Uzbekistan", phone: "+998 97 333 71 31", telegram: "@aziza0106" },
        { name: "Marina Savelieva", role: "Event Director", org: "Networks Purchasing Center · Imperia Forum", phone: "+7 911 000 8974", telegram: "@MarinaImperia" },
        { name: "Sergey Borovskikh", role: "CEO", org: "SaleTracker platform", email: "info@saletracker.online", telegram: "@boroffskikh" }
      ],
      cta: "Submit a participation request"
    },
    footer: {
      tagline: "A direct-negotiation format for the textile market, held within the TextileExpo Uzbekistan exhibition.",
      col1: "Exhibition organizer", col1items: ["Iteca Group"],
      col2: "Networks Purchasing Center organizer", col2items: ["Imperia Forum"],
      col3: "Platform license", col3items: ["Sale Tracker LLC"],
      rights: "© 2026 Networks Purchasing Center: Textile. All rights reserved.",
      place: "Tashkent · Uzbekistan"
    }
  }
};
