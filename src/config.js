export const VITE_APP_CONFIG = {

  SiteName: 'Mathieu Minguez',

  logoName: 'Mathieu _ Minguez .',

  banner: {
    Home: {
      line1Desc: 'Bienvenue',
      line2Desc: 'Je m\'appelle Mathieu',
      textLink: 'En savoir plus',
      link: '/about-us',
      color: '#DED0C5', // shared complementary from #BAC6DE
      isExternal: false,
    },
    About: {
      line1Desc: 'Pour en savoir plus sur moi',
      line2Desc: 'Voici quelques travaux que j\'ai réalisé',
      textLink: 'Retour à l\'accueil',
      link: '/',
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
        color: '#DEBEA4',
        isExternal: true,
      },
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
        url: './src/assets/cv_mathieu_minguez.pdf',
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
      description: 'Description for Case Study 1',
    },
    {
      id: '2',
      title: 'Un site vitrine et une web app de gestion de réservations',
      description: 'Description for Case Study 2',
    },
    {
      id: '3',
      title: 'Un projet de la formation Web Développeur OpenClassrooms',
      description: 'Description for Case Study 3',
    },
  ],

  // Email
  email: 'mathieu.minguez@gmail.com',

  // phone
  phone: '+33 (0)6 51 77 92 33'
};
