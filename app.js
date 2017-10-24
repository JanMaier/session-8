var app = new Vue({
  el: '#app',
  data: {
    firstName: "Jan",
    lastName: "Maier",
    description: "Je viens journaliste en presse écrite et numérique à l'Ecole de Journalisme de Sciences Po.",
    photo: "URL",
    twitter: "JanH_Maier",
    github: "JanMaier",
    mail: "janhendrik.maier@sciencespo.fr",
    experiences: [{
      dateBegin: "2017",
      dateEnd: "2017",
      name: "Die Zeit Paris",
      title: "Journaliste stagiaire",
      description: "Lorem...."
    }, {
      dateBegin: "2016",
      dateEnd: "2017",
      name: "Süddeutsche Zeitung",
      title: "Journaliste local",
      description: "Lorem...."
    }, {
      dateBegin: "2015",
      dateEnd: "2016",
      name: "Mittelbayerische Zeitung",
      title: "Journalisme stagiare",
      description: "Lorem"
    }],
    formations: [{
      dateBegin: "2016",
      dateEnd: "Today",
      name: "Master Journalisme",
      university: "Sciences Po Paris"
    }, {
      dateBegin: "2011",
      dateEnd: "2014",
      name: "Bachelor Deutsch-Französische Studien",
      university: "Universität Regensburg"
    }, {
      dateBegin: "2011",
      dateEnd: "2014",
      name: "Licence d'Etudes Franco-Allemandes",
      university: "Université Blaise Pascal Clermont-Ferrand II"
    }],
    languages: ["Français", "Allemand", "Anglais"],
    skills: ["HTM 5", "Adobe Audition", "Adobe Premiere", "Atex/Hermes"]
  },
  computed: {
    fullName() {
      return this.firstName + " " + this.lastName
    }
  }
})