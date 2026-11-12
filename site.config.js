// Client : Lasissi El Hana Dental Clinic (@lasissi.elhana.dental.clinic). Source : profil Instagram public, 12 nov 2026.
// "A CONFIRMER" = ma3louma ma l9inahach f profil, lazem tji men 3andhom.
globalThis.CLINIC = {
  demo: true,
  accessKey: "led-f4b760e4",
  style: "atelier",
  lang: "fr",
  name: "Lasissi El Hana Dental Clinic",
  short: "LE",
  specialty: { fr: "Dentisterie & esthétique", ar: "طب وتجميل الأسنان" },
  city: { fr: "Val d'Hydra, Alger", ar: "فال حيدرة، الجزائر" },
  tagline: {
    fr: "Derrière chaque sourire, une personne.",
    ar: "وراء كل ابتسامة، إنسان.",
  },
  intro: {
    fr: "Hollywood Smile, implants, facettes, orthodontie. Choisissez votre soin et votre heure, nous nous occupons du reste.",
    ar: "ابتسامة هوليوود، زراعة، فينير، تقويم. اختر علاجك وساعتك، ونحن نتكفل بالباقي.",
  },
  doctor: {
    name: "Dr. Lasissi · Dr. El Hana",
    title: { fr: "Chirurgiens-dentistes", ar: "جراحتا أسنان" },
    bio: {
      fr: "À Val d'Hydra, le cabinet prend le temps d'expliquer : dents de sagesse, bruxisme, esthétique. Les épisodes du Dr El Hana sur Instagram répondent aux questions que les patients n'osent pas poser.",
      ar: "في فال حيدرة، العيادة تأخذ وقتها للشرح: أضراس العقل، صرير الأسنان، التجميل. حلقات د. الهناء على إنستغرام تجيب عن الأسئلة التي لا يجرؤ المرضى على طرحها.",
    },
    photo: "", // A AJOUTER : leur photo, avec leur accord
  },
  phone: "0558320975",
  whatsapp: "213558320975", // A CONFIRMER : même numéro sur WhatsApp ?
  instagram: "lasissi.elhana.dental.clinic",
  address: { fr: "Val d'Hydra, Alger", ar: "فال حيدرة، الجزائر" },
  mapsUrl: "https://maps.app.goo.gl/ANodr9KtK5movLJG9", // lien Maps men bio ta3hom
  theme: { primary: "#5f6f52", dark: "#2c3527", accent: "#c9b58a" },

  // A CONFIRMER : horaires réels. 0 = dimanche ... 6 = samedi. [] = fermé.
  hours: {
    0: [["09:00", "12:30"], ["14:00", "17:30"]],
    1: [["09:00", "12:30"], ["14:00", "17:30"]],
    2: [["09:00", "12:30"], ["14:00", "17:30"]],
    3: [["09:00", "12:30"], ["14:00", "17:30"]],
    4: [["09:00", "12:30"], ["14:00", "17:30"]],
    5: [],
    6: [["09:00", "13:00"]],
  },
  slotMinutes: 45, // rendez-vous twal, bla zerba
  daysAhead: 21,

  services: [
    { id: "hollywood", img: "assets/sourire.jpg", name: { fr: "Hollywood Smile", ar: "ابتسامة هوليوود" }, desc: { fr: "Un sourire pensé pour votre visage.", ar: "ابتسامة مصممة لوجهك." } },
    { id: "implant", img: "assets/dent.jpg", name: { fr: "Implant dentaire", ar: "زراعة الأسنان" }, desc: { fr: "Remplacer durablement une dent.", ar: "تعويض دائم للسن." } },
    { id: "veneers", name: { fr: "Facettes", ar: "فينير" }, desc: { fr: "Corriger forme et teinte, finement.", ar: "تصحيح الشكل واللون بدقة." } },
    { id: "ortho", img: "assets/aligneur.jpg", name: { fr: "Orthodontie", ar: "تقويم الأسنان" }, desc: { fr: "Aligner, à tout âge.", ar: "تقويم في كل الأعمار." } },
    { id: "filler", name: { fr: "Filler / Botox", ar: "فيلر / بوتوكس" }, desc: { fr: "L'harmonie du sourire et du visage.", ar: "انسجام الابتسامة والوجه." } },
    { id: "consult", name: { fr: "Consultation", ar: "استشارة" }, desc: { fr: "Un examen, des explications claires.", ar: "فحص وشرح واضح." } },
  ],

  points: [
    { fr: "Sans attente", ar: "بدون انتظار" },
    { fr: "Confirmation WhatsApp", ar: "تأكيد واتساب" },
    { fr: "Paiement au cabinet", ar: "الدفع في العيادة" },
  ],
  proof: [],
  // Men post ta3hom : "Behind every consultation, every treatment, and every smile, there is a person with a story..."
  method: {
    title: { fr: "Notre manière de soigner", ar: "طريقتنا في العلاج" },
    quote: {
      fr: "« Derrière chaque consultation, chaque soin et chaque sourire, il y a une personne, avec son histoire, ses attentes et ses peurs. »",
      ar: "« وراء كل استشارة، كل علاج وكل ابتسامة، هناك إنسان بقصته، توقعاته ومخاوفه. »",
    },
    steps: [
      { t: { fr: "Écouter", ar: "الاستماع" }, d: { fr: "Votre histoire avant vos dents.", ar: "قصتك قبل أسنانك." } },
      { t: { fr: "Expliquer", ar: "الشرح" }, d: { fr: "Chaque option, clairement, sans pression.", ar: "كل خيار بوضوح، بدون ضغط." } },
      { t: { fr: "Soigner", ar: "العلاج" }, d: { fr: "Avec le temps qu'il faut.", ar: "بالوقت اللازم." } },
    ],
  },
  gallery: [],
  faq: [
    {
      q: { fr: "Faut-il payer pour réserver ?", ar: "هل يجب الدفع للحجز؟" },
      a: { fr: "Non. La réservation est gratuite, le règlement se fait au cabinet.", ar: "لا. الحجز مجاني، والدفع في العيادة." },
    },
    {
      q: { fr: "Je ne sais pas quel soin il me faut", ar: "لا أعرف أي علاج أحتاج" },
      a: { fr: "Réservez une consultation : nous vous expliquons les options.", ar: "احجز استشارة: نشرح لك الخيارات." },
    },
    {
      q: { fr: "Comment annuler ou changer l'heure ?", ar: "كيف ألغي أو أغيّر الموعد؟" },
      a: { fr: "Écrivez-nous sur WhatsApp ou appelez, au moins 24 heures avant.", ar: "راسلنا على واتساب أو اتصل، 24 ساعة على الأقل قبل الموعد." },
    },
  ],
};
