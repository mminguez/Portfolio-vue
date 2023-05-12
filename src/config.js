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
    },
    About: {
      line1Desc: 'Pour en savoir plus sur moi',
      line2Desc: 'Voici quelques travaux que j\'ai réalisé',
      textLink: 'Retour à l\'accueil',
      link: '/',
      color: '#DEBEA4', // shared complementary double from #BAC6DE
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
        url: 'https://github.com/mminguez/P6',
        isExternal: true,
      },
      {
        id: 2,
        subtitle: 'Euroyacht',
        title: 'Mon premier projet fullstack',
        img: 'euroyacht',
        url: '/case-studies',
        isExternal: false,
      },
      {
        id: 3,
        subtitle: 'Projet Back-end',
        title: 'Rest API avec NodeJS, Express et MongoDB',
        img: 'backend',
        url: 'https://github.com/mminguez/P7',
        isExternal: true,
      },
    ],
  },

  // Email
  email: 'mathieu.minguez@gmail.com',

  // phone
  phone: '+33 (0)6 51 77 92 33'
};
