export const activities = [
  {
    id: 1,
    tags: ["extérieur", "nature", "artistique", "créatif"],
    title: "LandArt",
    type: "Activité créative",
    shortDescription:
      "Créer des œuvres éphémères avec ce que la nature te donne",
    description:
      "Le LandArt est une activité artistique en plein air où tu utilises des éléments naturels (feuilles, cailloux, branches, etc.) pour créer des œuvres éphémères. Elle stimule ta créativité, ton sens de l’observation et le respect de la nature.",
    preparation: `
    <p>Avant l'activité, tu dois :</p>
    <ul>
      <li>Choisir un lieu naturel adapté (forêt, parc, plage...)</li>
      <li>Faire une reconnaissance du site pour repérer les zones intéressantes</li>
      <li>Prévoir des inspirations ou exemples d’œuvres simples</li>
      <li>Préparer un appareil photo ou un téléphone pour immortaliser les créations</li>
    </ul>
  `,
    deroulement: `
    <p>Commence par une courte présentation du LandArt et montre quelques exemples. Ensuite, laisse les jeunes explorer l’environnement et collecter des éléments naturels. Seuls ou par petits groupes, ils réalisent une œuvre de leur choix. En fin d'activité, chaque groupe présente sa création et son intention artistique.</p>
  `,
    variantes: ``,
    conseils: `
    <p>Encourage les participants à ne pas abîmer la nature et à n’utiliser que ce qu’ils trouvent déjà au sol. Privilégie la récupération d’éléments tombés naturellement. Veille également à ce que tout reste sur place à la fin de l'activité, sauf les déchets éventuels à ramasser.</p>
    <p>Précise bien qu'il ne faut <i>jamais arracher</i> des éléments. On préférera couper si un élément est ZE pièce coup de coeur du (des) jeune(s).</p>
    <p>Dans une forêt, le respect de la nature passe aussi par le fait de ne pas crier.</p>
  `,
    duration: "Prévoir une journée",
    ageRange: "11-17 ans",
    materials: [
      "Exemples d’œuvres en LandArt (photos)",
      "Appareil photo ou téléphone",
      "Sac ou panier pour ramasser les éléments naturels (optionnel)",
      "Coupe-branche, couteaux, ficelle ou laine biodégradable",
    ],
    images: [
      {
        src: "./images/LandArt-Arbre-sur-un-talus.jpg",
        alt: "Œuvre de LandArt faite avec des feuilles et des branches",
      },
      {
        src: "./images/Tipi.jpg",
        alt: "Main formée avec des pierres et des fleurs sur le sol",
      },
    ],
  },
  {
    id: 2,
    tags: ["recherche", "stratégie", "réflexion", "numérique"],
    title: "Wiki'Game",
    type: "Jeu numérique",
    shortDescription:
      "Un défi de navigation sur Wikipédia : d’un mot à un autre en quelques clics !",
    description: `
      Wiki'Game est un jeu de réflexion et de stratégie où tu dois relier deux mots donnés en naviguant uniquement via les liens hypertextes de Wikipédia. L’objectif : partir d’un mot de départ (ex : “fourmi”) et atteindre un mot cible (ex : “Australie”) en un minimum de clics et sans jamais revenir en arrière.
      Ce jeu peut se faire sur téléphone ou ordinateur, seul ou en petits groupes. Il développe l'esprit d’analyse, la logique, la culture générale… et parfois, une bonne dose de chance !
    `,
    preparation: `
      <p>Avant l'activité, tu dois :</p>
      <ul>
        <li>Préparer une liste de paires de mots (point de départ et point d’arrivée)</li>
        <li>Tester quelques chemins pour t'assurer qu’ils sont réalisables</li>
        <li>Prévoir une connexion internet ou vérifier l’accès aux appareils des participants</li>
        <li>Prévoir un tableau pour noter les meilleurs temps ou les chemins les plus courts</li>
      </ul>
    `,
    deroulement: `
      <p>1. Divise les participants en petits groupes ou laisse-les jouer individuellement.</p>
      <p>2. Donne à chaque groupe un mot de départ et un mot d’arrivée.</p>
      <p>3. À partir de la page Wikipédia du mot de départ, ils doivent cliquer uniquement sur les liens bleus dans le contenu de l'article (pas les menus, ni la barre de recherche), jusqu’à atteindre la page cible.</p>
      <p>4. L’équipe qui atteint le mot final en le moins de clics (ou dans le meilleur temps) remporte la manche.</p>
      <p>5. Organise plusieurs manches avec des paires de mots plus ou moins complexes.</p>
    `,
    variantes: `
      <ul>
        <li><strong>Mode chronométré :</strong> atteindre la cible le plus rapidement possible.</li>
        <li><strong>Mode libre :</strong> chaque groupe choisit ses propres paires de mots pour les faire deviner aux autres.</li>
        <li><strong>Défi thématique :</strong> tous les mots sont autour d’un thème donné (nature, sciences, pays, etc.).</li>
      </ul>
    `,
    conseils: `
      <p>Encourage les discussions au sein des groupes pour favoriser la stratégie collective.</p>
      <p>Rappelle les règles : interdiction d’utiliser la barre de recherche ou d’ouvrir des pages en parallèle.</p>
      <p>Favorise l’aspect ludique et culturel plus que la compétition pure.</p>
    `,
    duration: "45 min à 1h30 (à adapter)",
    ageRange: "11-17 ans",
    materials: [
      "Ordinateurs, tablettes ou téléphones avec accès à Wikipédia",
      "Liste de mots de départ et d’arrivée",
      "Chronomètre ou minuteur (optionnel)",
      "Tableau pour noter les résultats",
    ],
    images: [
      {
        src: "./images/wikipedia-logo.jpg",
        alt: "Logo Wikipedia",
      },
    ],
  },

  {
    id: 3,
    tags: ["médiéval", "équipe", "aventure", "roleplay"],
    title: "Kaamelott",
    type: "Grand Jeu",
    shortDescription:
      "Un grand jeu d'aventure médiévale inspiré de la série Kaamelott",
    description:
      "Plonge dans l'univers décalé de Kaamelott avec ce grand jeu où tu devras relever des défis auprès de personnages emblématiques de la série. Entre énigmes, épreuves physiques, défis créatifs et joutes verbales, tu devras faire preuve d'ingéniosité, d'humour et de courage pour conquérir le Graal.",
    preparation: `
    <p>Avant l'activité, tu dois :</p>
    <ul>
      <li>Préparer les costumes et accessoires pour chaque personnage</li>
      <li>Aménager les différents lieux/stands pour chaque épreuve</li>
      <li>Imprimer les énigmes, indices et matériel nécessaire</li>
      <li>Briefer les animateurs sur leur rôle et leurs répliques</li>
      <li>Prévoir un système de points ou de validation des épreuves</li>
    </ul>
  `,
    deroulement: `
    <p>Les participants sont divisés en équipes de 4-6 personnes. Les jeunes sont divisés en équipes avec des noms loufoques inventés par Yvain et Gauvain (ex : <i>Les Petits Pédestres</i>, <i>Les Chèvres Sauvages</i>, <i>Les Brutes Inutiles</i>, etc.) Chaque équipe doit passer par les différentes épreuves proposées par les personnages de Kaamelott. À chaque épreuve réussie, ils obtiennent un indice ou un élément qui les rapproche du Graal.</p>

    <h4>🧙‍♂️ <em>FICHES PERSONNAGES / ANIMATEURS</em></h4>

    <h4>👑 Arthur – Le Conseil du Roi</h4>
    <p><strong>Lieu :</strong> point de départ (place centrale)</p>
    <p><strong>But :</strong> lancer le jeu avec autorité</p>
    <p><strong>Matériel :</strong> trône (chaise), sceptre ou bâton, parchemin avec énigme</p>
    <p><strong>Règle du jeu :</strong> Invités à la Table Ronde et en compagnie de Léodagan, Arthur donne une énigme sérieuse, que l'équipe doit résoudre avant d'aller plus loin. Il ne donne pas d'aide, il soupire, il râle.</p>
    <p><strong>Énigme (exemple) :</strong> "Je suis recherché par tous, sans que l'on sache ce que je suis. On m'imagine doré, parfois vide, souvent sacré. Qui suis-je ?" (Réponse : Le Graal)</p>
    <p><strong>Réplique-type :</strong> <i>"Bon ! J’vais pas vous faire un dessin, on cherche le Graal. Et comme j’ai pas que ça à foutre de ma journée, vous allez devoir vous bouger les miches. J’veux du sérieux. Pas des clowns qui rigolent toutes les trois secondes. Sinon, j’vous colle Perceval dans les pattes et là, gare à vos guitares !"</i></p>

    <h4>⚔️ Lancelot – Le Pisteur Rebelle</h4>
    <p><strong>Lieu :</strong> ruelle</p>
    <p><strong>But :</strong> déduction inversée</p>
    <p><strong>Matériel :</strong> fausse carte, objets bidons</p>
    <p><strong>Règle du jeu :</strong> Lancelot donne plusieurs indications fausses volontairement. Les équipes doivent comprendre que c'est en faisant le contraire qu'ils avancent.</p>
    <p>Ex : "Allez à gauche à la fontaine" → il faut aller à droite, "Suivez la lumière" → il faut suivre l'ombre</p>
    <p><strong>Indice à donner :</strong> "Plus tu me suis, plus tu t'éloignes."</p>
    <p><strong>Réplique-type :</strong> <i>"Le vrai courage, c’est de ne pas obéir aveuglément. Vous pensez que le Graal est un objet ? Quelle illusion. Allez à l’Est... ou peut-être pas. Enfin bref, faites comme vous voulez, mais c’est pas en suivant les règles qu’on le trouvera."</i></p>

    <h4>🌸 Guenièvre – La Poésie du Cerveau Brumeux</h4>
    <p><strong>Lieu :</strong> petit jardin</p>
    <p><strong>But :</strong> créer un poème absurde</p>
    <p><strong>Matériel :</strong> plumes, mots en papier, fleurs, parchemins</p>
    <p><strong>Règle du jeu :</strong> Les équipes tirent 5 mots aléatoires (ex : canard, brume, mouflette, chaussette, trompette) et doivent faire un poème en 4 vers. Bonus s'ils le récitent avec "l'émotion poétique" digne de Guenièvre.</p>
    <p><strong>Réplique-type :</strong> <i>"Mon poème préféré, c'est celui sur la grenouille qui joue du triangle. Tu le connais ? Non ? Ben moi non plus. Mais y'a tellement de ferveur dans le texte..."</p></i>

   <h4>🌈 Arc-en-ciel de Merlin</h4> 
   <p><strong>Lieu :</strong> table "laboratoire"</p> 
   <p><strong>But :</strong> créer une colonne de liquides de différentes densités pour observer les couches colorées</p> 
   <p><strong>Matériel :</strong> sirop de maïs, eau, huile végétale, alcool à 90°, colorant alimentaire, verre transparent ou bécher</p> 
   <p><strong>Règle du jeu :</strong> Les équipes doivent créer une colonne de liquides en utilisant des liquides de différentes densités. Ils doivent verser délicatement chaque liquide dans le verre dans l'ordre suivant : sirop de maïs (le plus dense), eau, huile végétale, et alcool (le moins dense). Chaque liquide doit être coloré avec un colorant alimentaire différent pour créer un effet arc-en-ciel. L'équipe qui réussit à créer les couches les plus nettes et distinctes gagne.</p>
    <p><strong>Formule cachée :</strong> vinaigre + bicarbonate + colorant vert</p>
    <p><strong>Réplique-type :</strong> <i>"Alors attention, je vais vous présenter une potion de... euh... télépathie digestive. Bon. J’suis pas certain du dosage, mais faut oser hein ! Allez, mélangez-moi ça, et pis on verra bien..."</i></p>

    <h4>🥖 Perceval & Karadoc – Le Combat et la Bouffe</h4>
    <p><strong>Lieu :</strong> cour extérieure</p>
    <p><strong>But :</strong> créer une technique de combat farfelue + une recette imaginaire</p>
    <p><strong>Matériel :</strong> baguettes, chaises mousse, torchons</p>
    <p><strong>Règle du jeu :</strong> </br> Étape 1 – Inventer une technique de baston (ex: "La rotation de la saucisse agressive") et la démontrer. </br> Étape 2 – Proposer une recette "de chevalier affamé" avec 3 ingrédients minimum. L'animateur te donne l'indice si c'est bien absurde.</p>
    <p><strong>Réplique-type :<br/> </strong> Karadoc : <i>"C’est pas qu’du gras, c’est du savoir ancestral. La bouffe, c’est la base du combat."</i>
</br>
Perceval : <i>"Technique de la crevette sucrée : tu t’allonges et tu cries très fort. Boum. Surpris l’adversaire."</i></p>

    <h4>🛋️ Yvain & Gauvain – Le Challenge du Glandu</h4>
    <p><strong>Lieu :</strong> pelouse ou autre endroit cosi</p>
    <p><strong>But :</strong> concours de blagues</p>
    <p><strong>Matériel :</strong> coussins, minuteur</p>
    <p><strong>Règle du jeu :</strong> Concours de celui qui raconte les blagues les plus drôles en utilisant des mots pris pour un autre (Ex : garnison <=> garniture)</p>
    <p><strong>Réplique-type : <br/></strong> Yvain : <i>"Franchement, bouger c’est vrai-ment trop nul, quoi ! J’vous jure, on peut très bien trouver le Graal en s'racontant des blagues."</i> </br>

Gauvain : <i>"Ouais ou alors, ne devrions-nous pas ajouter quelques autres artifices pour pimenter nos quêtes ? Un concours de bâillements ? C’est plus stylé !"</i></p>

    <h4>🎭 Séli – La Joute Verbale</h4>
    <p><strong>Lieu :</strong> mini-scène</p>
    <p><strong>But :</strong> duel d'impro clean</p>
    <p><strong>Matériel :</strong> cartes "sujets de conflits" (ex: "T'as volé mon Graal", "T'as écrasé mon âne")</p>
    <p><strong>Règle du jeu :</strong> Chaque équipe tire un thème et doit jouer un clash de 30 secondes avec répartie "royale mais polie". Séli juge et remet l'indice.</p>
    <p><strong>Réplique-type :</strong> <i>"Quand on vous cherche, faut pas fuir, faut répondre. Mais proprement, hein, parce que sinon c’est l’estrade et la punition."</i></p>

    <h4>🛡️ Léodagan – Le Parcours du Courage</h4>
    <p><strong>Lieu :</strong> terrain ou forêt</p>
    <p><strong>But :</strong> parcours sportif</p>
    <p><strong>Matériel :</strong> corde, sacs, épées mousse, obstacles</p>
    <p><strong>Règle du jeu :</strong> Course en relais avec passage sous filet, saut d'obstacles, lancer d'épée mousse.</p>
    <p><strong>Réplique-type :</strong> <i>"La diplomatie, c’est pour les lâches ! Le Graal, faut le gagner à la sueur de son pif ! Allez hop, course, baston, et pas de chichi ! 'Faut qu'se soit festif !"</i></p>

    <h4>🐐 Roparzh & Guethenoc – Les Chèvres Disparues</h4>
    <p><strong>Lieu :</strong> "champ" fictif</p>
    <p><strong>But :</strong> retrouver 3 objets cachés</p>
    <p><strong>Matériel :</strong> bottes de paille, peluches chèvres, indices papiers</p>
    <p><strong>Règle du jeu :</strong> Roparzh donne des infos absurdes. Guethenoc contredit tout. Tu dois retrouver les 3 chèvres et les remettre dans "l'enclos sacré".</p>
    <p><strong>Réplique-type :</strong> </br> Guethenoc : <i>"L’a pas vu l’Graal, mais j’ai vu l’pâturage, c’est pas loin."</i> </br>

 Roparzh :<i>"De quôi ? M’enfin c’est-il pas vrai, vous dites que des bourriqueries, vous !"</i></p>

    <h4>🛍️ Venec – Le Marché de l'Arnaque</h4>
    <p><strong>Lieu :</strong> table étalage</p>
    <p><strong>But :</strong> troc</p>
    <p><strong>Matériel :</strong> 10 objets pourris, 1 vrai indice, fausse monnaie</p>
    <p><strong>Règle du jeu :</strong> Les équipes ont 5 pièces. Ils doivent acheter "le bon objet" (un vieux calice doré par exemple). Venec tente de les arnaquer avec des objets inutiles.</p>
    <p><strong>Réplique-type :</strong> <i>"C’est pas l’objet qu’est important, c’est l’histoire qu’j’raconte avec. Vous achetez ça, c’est p’têt le Graal, qui sait ?"</i></p>

    <h4>🌲 Bohort – L'Épreuve de la Trouille</h4>
    <p><strong>Lieu :</strong> forêt sombre</p>
    <p><strong>But :</strong> récupérer un parchemin la nuit</p>
    <p><strong>Matériel :</strong> sons flippants, lampe torche, décor sombre</p>
    <p><strong>Règle du jeu :</strong> Bohort est en panique. Il t'accompagne sur un mini-parcours nocturne où tu dois trouver un indice caché dans des arbres. Des bruits et lumières lui font peur (légèrement).</p>
    <p><strong>Réplique-type :</strong> <i>"Je... je crois que le Graal est par là, mais il y a des bruits... horribles... des... LAPINS ADULTES !! Mon Dieu !!"</i></p>
  `,
    variantes: `
    <ul>
      <li><strong>Version courte :</strong> Sélectionne seulement 5-6 personnages pour une version plus rapide du jeu.</li>
      <li><strong>Version nocturne :</strong> Organise le jeu en soirée avec des lampes torches pour une ambiance plus immersive.</li>
      <li><strong>Version tournoi :</strong> Les équipes s'affrontent directement dans chaque épreuve pour gagner des points.</li>
      <li><strong>Version quête :</strong> Les épreuves doivent être réalisées dans un ordre précis pour former une histoire cohérente.</li>
    </ul>
  `,
    conseils: `
    <p>Privilégie l'humour et l'absurde dans l'esprit de la série. Les animateurs doivent rester dans leur personnage et utiliser des répliques fidèles à la série.</p>
    <p>Prévois des accessoires simples mais efficaces pour identifier chaque personnage (couronne pour Arthur, cape pour Lancelot, chapeau pointu pour Merlin...).</p>
    <p>Adapte la difficulté des épreuves à l'âge des participants. Pour les plus jeunes, simplifie les énigmes et donne plus d'indices.</p>
    <p>Prévois une récompense finale (médailles "Chevaliers de Kaamelott", faux Graal en chocolat, etc.).</p>
  `,
    duration: "5-7h (selon le nombre d'épreuves)",
    ageRange: "11-17 ans",
    materials: [
      "Costumes et accessoires pour chaque personnage",
      "Matériel spécifique pour chaque épreuve (voir fiches)",
      "Système de points ou cartes de validation",
      "Indices et énigmes imprimés",
      "Récompenses finales (médailles, certificats, etc.)",
      "Décoration médiévale pour les différents stands",
      "⚠️Voir le matériel pour chaque personnage",
    ],
    images: [
      {
        src: "./images/casting-kaamelott.jpg",
        alt: "Casting de Kaamelott",
      },
      // {
      //   src: "./images/casting-kaamelott.jpg",
      //   alt: "Grand jeu Kaamelott avec différentes épreuves",
      // },
      // {
      //   src: "./images/medieval-quest.jpg",
      //   alt: "Participants en pleine quête médiévale",
      // },
    ],
  },

  {
    id: 4,
    tags: ["jeu de société", "récits", "mystère", "interaction"],
    title: "The Impostor",
    type: "Jeu de déduction",
    shortDescription:
      "Un jeu où les participants doivent deviner quelle anecdote est fausse parmi celles racontées.",
    description:
      "Le jeu 'The Impostor' est un jeu de déduction où chaque participant raconte une anecdote, soit vraie, soit fausse. Les autres doivent deviner laquelle est l'imposture. Ce jeu peut se jouer de différentes manières, en ajoutant des éléments créatifs et des variantes pour enrichir l'expérience.",
    preparation: `
      <p>Avant l'activité, l'animateur doit :</p>
      <ul>
        <li>Choisir un lieu adapté à l'activité (espace calme et propice à l'écoute, comme une salle ou un coin tranquille en extérieur)</li>
        <li>Préparer une liste d'exemples d'anecdotes pour aider les participants au démarrage</li>
        <li>Décider si l’activité se déroule sous forme de groupes ou de jeu individuel</li>
      </ul>
    `,
    deroulement: `
      <p>Chaque participant (ou un petit groupe selon la variante choisie) raconte une anecdote de leur choix. Les autres doivent deviner si l'anecdote est vraie ou fausse. Un tour se compose de chaque joueur racontant son histoire, puis les autres doivent voter. Le joueur qui a raconté l'histoire révèle ensuite si elle était vraie ou fausse.</p>
     
    `,
    variantes: `
      <ul>
        <li><strong>Variante 1 :</strong> <i>"Le grand imposteur"</i> <br/> Une personne désignée à l'avance raconte une histoire inventée, tandis que les autres partagent des anecdotes vraies. À la fin, les autres doivent deviner qui est l'imposteur.</li>
        <li><strong>Variante 2 :</strong> <i>"Tous les imposteurs"</i> <br/> Chaque personne doit raconter une histoire et, au moment du vote, personne ne sait qui est l'imposteur, créant une ambiance de méfiance générale.</li>
        <li><strong>Variante 3 :</strong> <i>"L'impôt du faux"</i> <br/> Les anecdotes fausses doivent comporter un détail absurde ou incohérent pour rendre la déduction plus difficile. Les participants doivent repérer ce détail précis.</li>
        <li><strong>Variante 4 :</strong> <i>"L’imposteur célèbre"</i> <br/> L’un des participants doit incarner un personnage historique ou fictif et raconter une anecdote de ce personnage, tandis que les autres racontent leurs propres anecdotes vraies.</li>
      </ul>
    `,
    conseils: `
      <p>Encourage les participants à faire preuve d'imagination et à raconter des anecdotes crédibles mais marrantes. L'objectif est de rendre les devinettes difficiles sans trop dévoiler d'indications évidentes. Encourage également l’écoute active et la participation de tous.</p>
    `,
    duration: "30 minutes à 1h",
    ageRange: "11-17 ans",
    materials: [
      "Anecdotes préparées ou exemples pour démarrer",
      "Papiers et stylos pour noter les votes",
      "Une minuterie (optionnel) pour chronométrer les tours",
    ],
    images: [
      // {
      //   src: "./images/casting-kaamelott.jpg",
      //   alt: "Grand jeu Kaamelott avec différentes épreuves",
      // },
      // {
      //   src: "./images/medieval-quest.jpg",
      //   alt: "Participants en pleine quête médiévale",
      // },
    ],
  },

  // {
  //   id: 2,
  //   tags: ["", "", "", ""],
  //   title: "aaaa",
  //   type: "",
  //   shortDescription: "",
  //   description: "",
  //   preparation: `
  //   <p>Avant l'activité, l'animateur doit :</p>
  //   <ul>
  //     <li>Choisir un lieu naturel adapté (forêt, parc, plage...)</li>
  //     <li>Faire une reconnaissance du site pour repérer les zones intéressantes</li>
  //     <li>Prévoir des inspirations ou exemples d’œuvres simples</li>
  //     <li>Préparer un appareil photo ou un téléphone pour immortaliser les créations</li>
  //   </ul>
  // `,
  //   deroulement: `
  //   <p>Commencez par une courte présentation du LandArt et montrez quelques exemples. Ensuite, laissez les adolescents explorer l’environnement et collecter des éléments naturels. Par petits groupes, ils réalisent une œuvre de leur choix. En fin d'activité, chaque groupe présente sa création et son intention artistique.</p>
  // `,
  //   variantes: ``,
  //   conseils: `
  //   <p>Encouragez les participants à ne pas abîmer la nature et à n’utiliser que ce qu’ils trouvent déjà au sol. Privilégiez la récupération d’éléments tombés naturellement. Veillez également à ce que tout reste sur place à la fin de l'activité, sauf les déchets éventuels à ramasser.</p>
  // `,
  //   duration: "1h30 à 2h",
  //   ageRange: "10-17 ans",
  //   materials: [
  //     "Exemples d’œuvres en LandArt",
  //     "Appareil photo ou téléphone",
  //     "Sac ou panier pour ramasser les éléments naturels (optionnel)",
  //   ],
  // images: [
  //   {
  //     src: "./images/LandArt-Arbre-sur-un-talus.jpg",
  //     alt: "Œuvre de LandArt faite avec des feuilles et des branches",
  //   },
  //   {
  //     src: "./images/Tipi.jpg",
  //     alt: "Main formée avec des pierres et des fleurs sur le sol",
  //   },
  // ],
  //},
  // {
  //   id: 2,
  //   tags: ["", "", "", ""],
  //   title: "aaaa",
  //   type: "",
  //   shortDescription: "",
  //   description: "",
  //   preparation: `
  //   <p>Avant l'activité, l'animateur doit :</p>
  //   <ul>
  //     <li>Choisir un lieu naturel adapté (forêt, parc, plage...)</li>
  //     <li>Faire une reconnaissance du site pour repérer les zones intéressantes</li>
  //     <li>Prévoir des inspirations ou exemples d’œuvres simples</li>
  //     <li>Préparer un appareil photo ou un téléphone pour immortaliser les créations</li>
  //   </ul>
  // `,
  //   deroulement: `
  //   <p>Commencez par une courte présentation du LandArt et montrez quelques exemples. Ensuite, laissez les adolescents explorer l’environnement et collecter des éléments naturels. Par petits groupes, ils réalisent une œuvre de leur choix. En fin d'activité, chaque groupe présente sa création et son intention artistique.</p>
  // `,
  //   variantes: ``,
  //   conseils: `
  //   <p>Encouragez les participants à ne pas abîmer la nature et à n’utiliser que ce qu’ils trouvent déjà au sol. Privilégiez la récupération d’éléments tombés naturellement. Veillez également à ce que tout reste sur place à la fin de l'activité, sauf les déchets éventuels à ramasser.</p>
  // `,
  //   duration: "1h30 à 2h",
  //   ageRange: "10-17 ans",
  //   materials: [
  //     "Exemples d’œuvres en LandArt",
  //     "Appareil photo ou téléphone",
  //     "Sac ou panier pour ramasser les éléments naturels (optionnel)",
  //   ],
  // images: [
  //   {
  //     src: "./images/LandArt-Arbre-sur-un-talus.jpg",
  //     alt: "Œuvre de LandArt faite avec des feuilles et des branches",
  //   },
  //   {
  //     src: "./images/Tipi.jpg",
  //     alt: "Main formée avec des pierres et des fleurs sur le sol",
  //   },
  // ],
  //},
  // {
  //   id: 2,
  //   tags: ["", "", "", ""],
  //   title: "aaaa",
  //   type: "",
  //   shortDescription: "",
  //   description: "",
  //   preparation: `
  //   <p>Avant l'activité, l'animateur doit :</p>
  //   <ul>
  //     <li>Choisir un lieu naturel adapté (forêt, parc, plage...)</li>
  //     <li>Faire une reconnaissance du site pour repérer les zones intéressantes</li>
  //     <li>Prévoir des inspirations ou exemples d’œuvres simples</li>
  //     <li>Préparer un appareil photo ou un téléphone pour immortaliser les créations</li>
  //   </ul>
  // `,
  //   deroulement: `
  //   <p>Commencez par une courte présentation du LandArt et montrez quelques exemples. Ensuite, laissez les adolescents explorer l’environnement et collecter des éléments naturels. Par petits groupes, ils réalisent une œuvre de leur choix. En fin d'activité, chaque groupe présente sa création et son intention artistique.</p>
  // `,
  //   variantes: ``,
  //   conseils: `
  //   <p>Encouragez les participants à ne pas abîmer la nature et à n’utiliser que ce qu’ils trouvent déjà au sol. Privilégiez la récupération d’éléments tombés naturellement. Veillez également à ce que tout reste sur place à la fin de l'activité, sauf les déchets éventuels à ramasser.</p>
  // `,
  //   duration: "1h30 à 2h",
  //   ageRange: "10-17 ans",
  //   materials: [
  //     "Exemples d’œuvres en LandArt",
  //     "Appareil photo ou téléphone",
  //     "Sac ou panier pour ramasser les éléments naturels (optionnel)",
  //   ],
  // images: [
  //   {
  //     src: "./images/LandArt-Arbre-sur-un-talus.jpg",
  //     alt: "Œuvre de LandArt faite avec des feuilles et des branches",
  //   },
  //   {
  //     src: "./images/Tipi.jpg",
  //     alt: "Main formée avec des pierres et des fleurs sur le sol",
  //   },
  // ],
  //},
  // {
  //   id: 2,
  //   tags: ["", "", "", ""],
  //   title: "aaaa",
  //   type: "",
  //   shortDescription: "",
  //   description: "",
  //   preparation: `
  //   <p>Avant l'activité, l'animateur doit :</p>
  //   <ul>
  //     <li>Choisir un lieu naturel adapté (forêt, parc, plage...)</li>
  //     <li>Faire une reconnaissance du site pour repérer les zones intéressantes</li>
  //     <li>Prévoir des inspirations ou exemples d’œuvres simples</li>
  //     <li>Préparer un appareil photo ou un téléphone pour immortaliser les créations</li>
  //   </ul>
  // `,
  //   deroulement: `
  //   <p>Commencez par une courte présentation du LandArt et montrez quelques exemples. Ensuite, laissez les adolescents explorer l’environnement et collecter des éléments naturels. Par petits groupes, ils réalisent une œuvre de leur choix. En fin d'activité, chaque groupe présente sa création et son intention artistique.</p>
  // `,
  //   variantes: ``,
  //   conseils: `
  //   <p>Encouragez les participants à ne pas abîmer la nature et à n’utiliser que ce qu’ils trouvent déjà au sol. Privilégiez la récupération d’éléments tombés naturellement. Veillez également à ce que tout reste sur place à la fin de l'activité, sauf les déchets éventuels à ramasser.</p>
  // `,
  //   duration: "1h30 à 2h",
  //   ageRange: "10-17 ans",
  //   materials: [
  //     "Exemples d’œuvres en LandArt",
  //     "Appareil photo ou téléphone",
  //     "Sac ou panier pour ramasser les éléments naturels (optionnel)",
  //   ],
  // images: [
  //   {
  //     src: "./images/LandArt-Arbre-sur-un-talus.jpg",
  //     alt: "Œuvre de LandArt faite avec des feuilles et des branches",
  //   },
  //   {
  //     src: "./images/Tipi.jpg",
  //     alt: "Main formée avec des pierres et des fleurs sur le sol",
  //   },
  // ],
  //},
  // {
  //   id: 2,
  //   tags: ["", "", "", ""],
  //   title: "aaaa",
  //   type: "",
  //   shortDescription: "",
  //   description: "",
  //   preparation: `
  //   <p>Avant l'activité, l'animateur doit :</p>
  //   <ul>
  //     <li>Choisir un lieu naturel adapté (forêt, parc, plage...)</li>
  //     <li>Faire une reconnaissance du site pour repérer les zones intéressantes</li>
  //     <li>Prévoir des inspirations ou exemples d’œuvres simples</li>
  //     <li>Préparer un appareil photo ou un téléphone pour immortaliser les créations</li>
  //   </ul>
  // `,
  //   deroulement: `
  //   <p>Commencez par une courte présentation du LandArt et montrez quelques exemples. Ensuite, laissez les adolescents explorer l’environnement et collecter des éléments naturels. Par petits groupes, ils réalisent une œuvre de leur choix. En fin d'activité, chaque groupe présente sa création et son intention artistique.</p>
  // `,
  //   variantes: ``,
  //   conseils: `
  //   <p>Encouragez les participants à ne pas abîmer la nature et à n’utiliser que ce qu’ils trouvent déjà au sol. Privilégiez la récupération d’éléments tombés naturellement. Veillez également à ce que tout reste sur place à la fin de l'activité, sauf les déchets éventuels à ramasser.</p>
  // `,
  //   duration: "1h30 à 2h",
  //   ageRange: "10-17 ans",
  //   materials: [
  //     "Exemples d’œuvres en LandArt",
  //     "Appareil photo ou téléphone",
  //     "Sac ou panier pour ramasser les éléments naturels (optionnel)",
  //   ],
  // images: [
  //   {
  //     src: "./images/LandArt-Arbre-sur-un-talus.jpg",
  //     alt: "Œuvre de LandArt faite avec des feuilles et des branches",
  //   },
  //   {
  //     src: "./images/Tipi.jpg",
  //     alt: "Main formée avec des pierres et des fleurs sur le sol",
  //   },
  // ],
  //},
  // {
  //   id: 2,
  //   tags: ["", "", "", ""],
  //   title: "aaaa",
  //   type: "",
  //   shortDescription: "",
  //   description: "",
  //   preparation: `
  //   <p>Avant l'activité, l'animateur doit :</p>
  //   <ul>
  //     <li>Choisir un lieu naturel adapté (forêt, parc, plage...)</li>
  //     <li>Faire une reconnaissance du site pour repérer les zones intéressantes</li>
  //     <li>Prévoir des inspirations ou exemples d’œuvres simples</li>
  //     <li>Préparer un appareil photo ou un téléphone pour immortaliser les créations</li>
  //   </ul>
  // `,
  //   deroulement: `
  //   <p>Commencez par une courte présentation du LandArt et montrez quelques exemples. Ensuite, laissez les adolescents explorer l’environnement et collecter des éléments naturels. Par petits groupes, ils réalisent une œuvre de leur choix. En fin d'activité, chaque groupe présente sa création et son intention artistique.</p>
  // `,
  //   variantes: ``,
  //   conseils: `
  //   <p>Encouragez les participants à ne pas abîmer la nature et à n’utiliser que ce qu’ils trouvent déjà au sol. Privilégiez la récupération d’éléments tombés naturellement. Veillez également à ce que tout reste sur place à la fin de l'activité, sauf les déchets éventuels à ramasser.</p>
  // `,
  //   duration: "1h30 à 2h",
  //   ageRange: "10-17 ans",
  //   materials: [
  //     "Exemples d’œuvres en LandArt",
  //     "Appareil photo ou téléphone",
  //     "Sac ou panier pour ramasser les éléments naturels (optionnel)",
  //   ],
  // images: [
  //   {
  //     src: "./images/LandArt-Arbre-sur-un-talus.jpg",
  //     alt: "Œuvre de LandArt faite avec des feuilles et des branches",
  //   },
  //   {
  //     src: "./images/Tipi.jpg",
  //     alt: "Main formée avec des pierres et des fleurs sur le sol",
  //   },
  // ],
  //},
];
