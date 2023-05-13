<template>
  <Banner />
  <div class="page">
    <div class="container">
      <h1>C'est moi!</h1>
      <p>Je m'appelle Mathieu Minguez, je suis un étudiant développeur web et logiciel. 
        J'ai obtenu mon baccalauréat S spécialité mathématiques au Lycée Maillol en 2018. 
        Passionné par l'informatique, j'ai décidé de poursuivre mes études dans ce domaine. 
        J'ai récemment suivi une formation de Développeur Web à OpenClassrooms, où j'ai obtenu un diplôme de niveau Bac +2. </p>
      <br/>
      <br/>
      <h1>Mes compétences</h1>
      <p>En ce qui concerne mes compétences, je maîtrise l'environnement Unix ainsi que les langages de programmation tels que C, 
        C++, C#, JavaScript, TypeScript et Python. J'ai également des connaissances en DevOps, notamment en CI/CD, ainsi qu'en sécurité informatique. 
        Je parle couramment l'anglais, j'ai des notions d'espagnol et je suis débutant en russe. 
      </p>
      <p>J'ai réalisé plusieurs projets, dont la création d'un site web complet pour Euroyacht en 2022-2023. 
        J'ai également effectué un stage en tant que Junior Engineer chez Dolittle AS, où j'ai travaillé sur le développement web et 
        CLI en TypeScript et C#, en mettant en œuvre des concepts de DDD et EDA. J'ai également acquis de l'expérience en DevOps avec 
        Azure et GitHub Action, ainsi qu'en création de scripts et d'outils en bash.</p>
      <p>Je maîtrise aussi les framework ReactJS et VueJS pour le front-end web, et je suis capable de créer des serveurs back-end avec NodeJS.</p>
      <br/>
      <br/>
      <p>Je suis actuellement en recherche de nouvelles opportunités dans le domaine du développement web et logiciel, où je pourrai 
        mettre à profit mes compétences et ma passion pour l'informatique. N'hésitez pas à me contacter par e-mail à mathieu.minguez@gmail.com 
        ou par téléphone au 06 51 77 92 33.</p>
      <img src="../assets/moi.jpeg" alt="moi" />
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { VITE_APP_CONFIG } from '../config';
import Banner from '../components/Banner.vue';


export default {
  name: 'CaseStudies',
  components: {
    Banner,
  },
  setup() {
    const route = useRoute();
    return {
    };
  },
};
</script>

<style lang="scss" scoped>
.page {
  padding: 2rem 0;
  background-color: #DED0C5;
  color: $black;
  height: auto;

  .container {
    max-width: 800px;
    margin: 0 auto;
  }
}
</style>
