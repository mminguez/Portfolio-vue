export const VITE_APP_CONFIG = {

  SiteName: 'MM - Web Developper',

  logoName: 'MM _ Web .',

  banner: {
    Home: {
      line1Desc: 'Bienvenue',
      line2Desc: 'Je m\'appelle Mathieu',
      textLink: 'Mes projets',
      link: '/projects',
      color: '#DED0C5', // shared complementary from #BAC6DE
      isExternal: false,
    },
    About: {
      line1Desc: 'Pour en savoir plus sur moi',
      line2Desc: 'Voici quelques travaux que j\'ai réalisé',
      textLink: 'À propos de moi',
      link: '/me',
      color: '#DEBEA4', // shared complementary double from #BAC6DE
      isExternal: false,
    },
    CaseStudies: {
      1: {
        line1Desc: 'Projet front-end ReactJS',
        textLink: 'Lien Github',
        link: 'https://github.com/mminguez/P6',
        color: '#DEBEA4',
        isExternal: true,
      },
      2: {
        line1Desc: 'Euroyacht',
        textLink: 'Lien vers le site',
        link: 'https://euroyacht.corsica/',
        color: '#AFD7DE',
        isExternal: true,
      },
      3: {
        line1Desc: 'Projet back-end Rest API',
        textLink: 'Lien Github',
        link: 'https://github.com/mminguez/P7',
        color: '#DED8A4',
        isExternal: true,
      },
    },
    Me: {
      line1Desc: 'À propos de moi',
      line2Desc: 'Mon parcours, mes compétences, etc...',
      textLink: 'Mon CV',
      link: 'https://github.com/mminguez/Portfolio-vue/blob/main/src/assets/cv_mathieu_minguez.pdf',
      color: '#DEBEA4', // shared complementary double from #BAC6DE
      isExternal: true,
    },
  },

  projectDesc: {
    Home: [
      {
        id: 1,
        subtitle: 'Ma page GitHub',
        title: 'Vous y trouverez tous mes projets publics et ceux auxquels j\'ai contribué',
        img: 'img2',
        url: 'https://github.com/mminguez/',
        isExternal: true,
      },
      {
        id: 2,
        subtitle: 'Euroyacht',
        title: 'Mon premier projet d\'ampleur',
        img: 'img1',
        url: 'https://euroyacht.corsica',
        isExternal: true,
      },
      {
        id: 3,
        subtitle: 'Mon cv',
        title: 'Cliquez pour télécharger',
        img: 'img3',
        url: 'https://github.com/mminguez/Portfolio-vue/blob/main/src/assets/cv_mathieu_minguez.pdf',
        isExternal: true,
      },
    ],
    About: [
      {
        id: 1,
        subtitle: 'Projet Front-end ReactJS',
        title: 'Un projet de formation fait pour Openclassrooms',
        img: 'react-javascript',
        url: '/case-studies/1',
        isExternal: false,
      },
      {
        id: 2,
        subtitle: 'Euroyacht',
        title: 'Mon premier projet fullstack',
        img: 'euroyacht',
        url: '/case-studies/2',
        isExternal: false,
      },
      {
        id: 3,
        subtitle: 'Projet Back-end',
        title: 'Rest API avec NodeJS, Express et MongoDB',
        img: 'backend',
        url: '/case-studies/3',
        isExternal: false,
      },
    ],
  },
  caseStudies: [
    {
      id: '1',
      title: 'Un projet de la formation Web Développeur OpenClassrooms ',
      description: [
        ' Kasa est un site développé en ReactJS où nous j\'ai uniquement travaillé sur le frontend en récupérant les données à partir d\'un fichier JSON. Le site suit une maquette et des spécifications techniques fournies. Il s\'agit d\'une plateforme permettant aux utilisateurs de rechercher des hébergements disponibles et de consulter les détails de chaque hébergement.',
        'L\'un des défis était d\'afficher correctement les données provenant du fichier JSON et de les rendre facilement accessibles pour les utilisateurs. J\'ai résolu ce problème en utilisant des composants React et en structurant les données pour les rendre adaptées à l\'affichage.',
        'Ce projet m\'a permis de renforcer mes compétences en développement frontend avec ReactJS. J\'ai appris à manipuler les composants React, à gérer les états et à afficher des données dynamiques à partir d\'un fichier JSON.',
      ],
      img: ['kasa', 'kasa2', 'kasa3'],
    },
    {
      id: '2',
      title: 'Un site vitrine et une web app de gestion de réservations',
      description: [
        'Euroyacht est un site vitrine dont le plus gros du travail a été la conception d\'une webapp de planning permettant au propriétaire de gérer les réservations d\'une flotte de bateaux à louer. J\'ai développé ce projet en utilisant la pile MEVN (MongoDB, Express, Vue.js, Node.js). La webapp permet aux utilisateurs de consulter les disponibilités des bateaux. Le système utilise une base de données MongoDB pour stocker les informations des bateaux et des réservations.',
        'L\'une des principales problématiques était la gestion des différentes données et l\'affichage croisé dans le planning. Certaines données dépendent d\'autres et la récupération dynamique a été un vrai challenge. De plus de nombreuses contraintes ont été données par le client. Aussi, la sécurisation des données sensibles a été un point important et sur lequel j\'ai beaucoup travaillé. ',
        'Ce projet m\'a permis de développer mes compétences en développement fullstack en utilisant la pile MEVN. J\'ai acquis une meilleure compréhension de la gestion des bases de données MongoDB, de la création d\'API avec Express et de la création d\'interfaces utilisateur réactives avec Vue.js, tout comme la création de composants complexes et avec une architecture précise. Le tout en respectant les bonnes pratiques de développement et en m\'assurant que le site soit responsive',
      ],
      img: ['euroyacht1', 'euroyacht2', 'euroyacht3'],
    },
    {
      id: '3',
      title: 'Un projet de la formation Web Développeur OpenClassrooms',
      description: [
        'Mon Vieux grimoire est un serveur RESTful API développé en utilisant Node.js, Express et MongoDB. Il s\'agit d\'un site de notation de livres où les utilisateurs peuvent consulter, ajouter et noter des livres. J\'ai également mis en place un système d\'authentification pour sécuriser l\'accès aux fonctionnalités réservées aux utilisateurs connectés.',
        'L\'une des problématiques principales était la gestion de l\'authentification des utilisateurs et la sécurisation des routes nécessitant une authentification. J\'ai résolu ce problème en mettant en place des middleware d\'authentification pour vérifier les jetons d\'accès (JWT). La deuxième problématique a été la gestion des notatations des livres. En effet je devais m\'assurer qu\'un utilisateur ne puisse pas noter plusieurs fois le même livre et puis d\'actualiser dynamiquement la moyenne des notes',
        'Ce projet m\'a permis de renforcer mes compétences en développement d\'API avec Node.js et Express. J\'ai appris à mettre en place un système d\'authentification robuste avec hashage des mots de passes, à gérer les routes et à intéragir avec une base de données MongoDB.',
      ],
      img: ['vieux_grimoire'],
    },
  ],

  // Email
  email: 'web-mm@pm.me',

  // phone
  phone: '+33 (0)6 51 77 92 33'
};
