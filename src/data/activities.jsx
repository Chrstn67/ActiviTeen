export const activities = [
  {
    id: 1,
    shortDescription: "Une aventure en ville avec énigmes et défis",
    description:
      "La chasse au trésor urbaine est une activité parfaite pour les adolescents qui aiment l'aventure et la résolution d'énigmes. Elle permet de découvrir la ville tout en s'amusant.",
    preparation: `
      <p>Avant l'activité, l'animateur doit :</p>
      <ul>
        <li>Repérer des lieux intéressants dans la ville</li>
        <li>Préparer des énigmes adaptées à l'âge des participants</li>
        <li>Créer un parcours logique et sécurisé</li>
        <li>Prévoir un trésor à découvrir (petits cadeaux, goûter spécial, etc.)</li>
      </ul>
    `,
    deroulement: `
      <p>Divisez les adolescents en équipes de 4-5 personnes. Chaque équipe reçoit la première énigme qui les mènera à un lieu. À chaque lieu, ils devront résoudre une énigme ou relever un défi pour obtenir l'indice suivant.</p>
    `,
    conseils: `
      <p>Assurez-vous que les adolescents restent en groupe et respectent les règles de sécurité en ville. Prévoyez des animateurs à des points stratégiques pour surveiller discrètement le bon déroulement de l'activité.</p>
    `,
    duration: "2-3 heures",
    ageRange: "12-17 ans",
    materials: [
      "Énigmes imprimées",
      "Petit matériel pour les défis",
      "Trésor à découvrir",
      "Plan de la ville",
    ],
    images: [
      {
        src: "/images/chasse-tresor-1.jpg",
        alt: "Adolescents résolvant une énigme pendant une chasse au trésor",
      },
      {
        src: "/images/chasse-tresor-2.jpg",
        alt: "Carte avec indices pour chasse au trésor",
      },
    ],
    tags: ["extérieur", "ville", "équipe", "réflexion"],
    title: "Chasse au trésor urbaine",
    type: "Grand jeu",
  },
  {
    id: 2,
    shortDescription: "Création d'émissions audio par et pour les ados",
    description:
      "L'atelier podcast permet aux adolescents de s'exprimer sur des sujets qui les intéressent tout en découvrant les techniques d'enregistrement et de montage audio.",
    preparation: `
      <p>L'animateur doit prévoir :</p>
      <ul>
        <li>Du matériel d'enregistrement (smartphones avec application dédiée ou enregistreurs)</li>
        <li>Un ordinateur pour le montage</li>
        <li>Un espace calme pour les enregistrements</li>
        <li>Des exemples de podcasts adaptés aux adolescents</li>
      </ul>
    `,
    deroulement: `
      <p>Commencez par une introduction au format podcast et une écoute collective d'exemples. Aidez ensuite les adolescents à choisir des thématiques qui les passionnent et à structurer leur émission. Accompagnez-les dans l'écriture, l'enregistrement puis le montage de leur podcast.</p>
    `,
    conseils: `
      <p>Organisez une séance d'écoute collective des podcasts créés. Si possible, mettez-les en ligne sur une plateforme dédiée pour que les adolescents puissent les partager avec leurs proches.</p>
    `,
    duration: "Plusieurs séances de 1h30",
    ageRange: "13-17 ans",
    materials: [
      "Smartphones ou enregistreurs",
      "Ordinateur avec logiciel de montage",
      "Casques audio",
      "Espace calme",
    ],
    images: [
      {
        src: "/images/podcast-1.jpg",
        alt: "Adolescents enregistrant un podcast avec un micro",
      },
      {
        src: "/images/podcast-2.jpg",
        alt: "Session de montage audio sur ordinateur",
      },
    ],
    tags: ["intérieur", "créatif", "technologie", "expression"],
    title: "Atelier podcast",
    type: "Atelier créatif",
  },
  {
    id: 3,
    shortDescription: "Compétitions loufoques et défis originaux",
    description:
      "Les olympiades décalées proposent des épreuves sportives amusantes et originales qui sortent des compétitions classiques. Elles permettent à tous les adolescents de participer, quel que soit leur niveau sportif.",
    preparation: `
      <p>Prévoyez :</p>
      <ul>
        <li>Un espace extérieur suffisamment grand</li>
        <li>Du matériel pour chaque épreuve</li>
        <li>Un système de points et des récompenses symboliques</li>
        <li>Des équipes équilibrées</li>
      </ul>
    `,
    deroulement: `
      <p>Exemples d'épreuves :</p>
      <ul>
        <li>Course en sac à deux</li>
        <li>Lancer de tongs</li>
        <li>Parcours à l'aveugle guidé par un coéquipier</li>
        <li>Relais avec un verre d'eau sur la tête</li>
        <li>Quizz sportif avec gages</li>
      </ul>
    `,
    conseils: `
      <p>Créez une ambiance festive avec de la musique. Valorisez l'esprit d'équipe plutôt que la performance individuelle. Prévoyez des épreuves qui mettent en valeur différentes compétences pour que chacun puisse briller.</p>
    `,
    duration: "Une demi-journée",
    ageRange: "11-17 ans",
    materials: [
      "Matériel sportif varié",
      "Chronomètre",
      "Système de sonorisation",
      "Accessoires loufoques",
    ],
    images: [
      {
        src: "/images/olympiades-1.jpg",
        alt: "Adolescents participant à une course en sac",
      },
      {
        src: "/images/olympiades-2.jpg",
        alt: "Podium des olympiades décalées avec équipes déguisées",
      },
    ],
    tags: ["extérieur", "sport", "équipe", "amusement"],
    title: "Olympiades décalées",
    type: "Jeu sportif",
  },
  {
    id: 4,
    shortDescription: "Jeu d'évasion créé et animé par les ados",
    description:
      "Cette activité se déroule en deux temps : d'abord la création d'un escape game par un groupe d'adolescents, puis son animation pour les autres groupes.",
    preparation: `
      <p>Accompagnez un groupe d'adolescents dans la conception d'un escape game :</p>
      <ul>
        <li>Choix d'un thème et d'un scénario</li>
        <li>Création d'énigmes variées (logique, observation, manipulation...)</li>
        <li>Fabrication des éléments nécessaires</li>
        <li>Test du parcours pour vérifier sa faisabilité</li>
      </ul>
    `,
    deroulement: `
      <p>Les créateurs deviennent maîtres du jeu et accueillent les autres adolescents qui tentent de résoudre l'escape game. Prévoyez plusieurs sessions pour que tous puissent participer.</p>
    `,
    conseils: `
      <p>Si vous avez plusieurs groupes, chacun peut créer son propre escape game dans une salle différente, puis les groupes tournent pour tester les créations des autres.</p>
    `,
    duration: "Création : 2-3 séances de 2h / Jeu : 1h par session",
    ageRange: "13-17 ans",
    materials: [
      "Matériel de bricolage",
      "Cadenas et boîtes",
      "Papier et stylos",
      "Objets divers selon le scénario",
    ],
    images: [
      {
        src: "/images/escape-1.jpg",
        alt: "Adolescents créant des énigmes pour un escape game",
      },
      {
        src: "/images/escape-2.jpg",
        alt: "Salle préparée pour un escape game avec indices et objets",
      },
    ],
    tags: ["intérieur", "créatif", "réflexion", "coopération"],
    title: "Escape game fait maison",
    type: "Jeu d'énigmes",
  },
  {
    id: 5,
    shortDescription: "Projection suivie d'une discussion animée",
    description:
      "Le ciné-débat permet d'aborder des sujets de société à travers le cinéma et de développer l'esprit critique des adolescents.",
    preparation: `
      <p>L'animateur doit :</p>
      <ul>
        <li>Sélectionner un film adapté à l'âge des participants et porteur de thématiques intéressantes</li>
        <li>Visionner le film au préalable et préparer des questions pour animer le débat</li>
        <li>Aménager une salle confortable pour la projection</li>
        <li>Prévoir éventuellement des intervenants extérieurs spécialistes du sujet abordé</li>
      </ul>
    `,
    deroulement: `
      <p>Présentez brièvement le film sans dévoiler l'intrigue. Après la projection, laissez un temps de réaction libre puis lancez le débat avec des questions ouvertes. Veillez à ce que chacun puisse s'exprimer et à maintenir un cadre bienveillant.</p>
    `,
    conseils: `
      <p>Le débat peut déboucher sur un projet créatif : création d'affiches, écriture d'une suite, tournage d'une scène alternative, etc.</p>
    `,
    duration: "3-4 heures",
    ageRange: "12-17 ans",
    materials: [
      "Équipement de projection",
      "Film",
      "Chaises confortables",
      "Papier et stylos pour les notes",
    ],
    images: [
      {
        src: "/images/cine-1.jpg",
        alt: "Adolescents regardant un film dans une salle aménagée",
      },
      {
        src: "/images/cine-2.jpg",
        alt: "Groupe d'adolescents en cercle pendant un débat",
      },
    ],
    tags: ["intérieur", "discussion", "réflexion", "culture"],
    title: "Ciné-débat",
    type: "Activité culturelle",
  },
];
