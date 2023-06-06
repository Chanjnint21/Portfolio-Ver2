<template>
  <v-main class="portfolio">
    <div>
      <v-row class="Greeting">
        <v-col cols="12" md="6" sm="6" xs="12">
          <div id="greet">
            {{ greetMsg }} -<main-title :titles="IntroName" />
          </div>
          <div id="Intro">
            <p class="text-right" v-html="Intro"></p>
          </div>
        </v-col>
        <v-col id="MyPic" cols="12" md="6" sm="6" xs="12">
          <image-solo img-src="hill.jpg"
        /></v-col>
      </v-row>
    </div>
    <div id="about">
      <main-title titles="About" />
      <v-col cols="12">
        <p v-html="aboutme"></p>
      </v-col>
    </div>

    <div id="experience&tranning">
      <main-title titles="Experience & Trainning" />
      <info-box
        cols="12"
        md="4"
        sm="4"
        xs="12"
        img-source="stem-festival.jpg"
        :details="stemfestival2018"
      />
      <info-box-rev
        cols="12"
        md="5"
        sm="5"
        xs="12"
        img-source="codingcat.jpeg"
        :details="codingcat"
      />
      <info-box
        cols="12"
        md="5"
        sm="5"
        xs="12"
        img-source="EWB.jpg"
        :details="ewb"
      />
      <info-box-rev
        cols="12"
        md="5"
        sm="5"
        xs="12"
        img-source="hill.jpg"
        :details="stemfestival2019"
      />
      <info-box
        cols="12"
        md="5"
        sm="5"
        xs="12"
        img-source="yearbook.png"
        :details="yearbook"
      />
      <info-box-rev
        cols="12"
        md="5"
        sm="5"
        xs="12"
        img-source="internship.jpg"
        :details="e2Intern"
      />
      <info-box
        cols="12"
        md="5"
        sm="5"
        xs="12"
        img-source="internship.jpg"
        :details="soraIntern"
      />
      <info-box-rev
        cols="12"
        md="5"
        sm="5"
        xs="12"
        img-source="internship.jpg"
        :details="webcourse"
      />
    </div>
    <div class="contact">
      <main-title titles="Contact" />
      <info-box
        class-props="logo"
        cols="12"
        :max-width="300"
        img-source="MyLogo.png"
        :details="contactinfo"
      />
    </div>
    <v-footer dark padless>
      <v-col cols="6">@2023 - portfolio</v-col>
      <v-col cols="6">
        <a class="text-decoration-none" href="#app"
          >go top <v-icon>mdi-chevron-up</v-icon>
        </a></v-col
      >
    </v-footer>
  </v-main>
</template>

<script>
import InfoBox from "@/components/InfoBox.vue";
import InfoBoxRev from "@/components/InfoBoxRev.vue";
// import ImageSolo from '@/components/ImageSolo.vue';
export default {
  name: "portfolioView",
  props: {
    version:Boolean,
  },
  components: {
    InfoBox,
    InfoBoxRev,
    // ImageSolo
  },
  data() {
    return {
      Intro:
        "A university student who study in Software Devlopment and Information Technology Engineering.<br/>Do I have future goal ? Yes, I'm interest in ... ",
      stemfestival2018:
        "On late 2018, Participated in <b>Stem Festival</b> alongside my another 5 members and one mentor. Project showcase: <b>IQ Test</b>",
      codingcat:
        "April - June 2019, participated in <b>Coding Cat Program</b> at Raintree.",
      ewb: "October - November 2019, participated in <b>Engineering Without Borders (EWB)</b> Workshop at Factory.",
      stemfestival2019:
        "On December 2019, Participated in <b>Stem Festival</b> alongside my another 4 members. Project showcase: <b>Prototype of Machine to create natural fertilizer (Compost)</b>",
      yearbook:
        "Participated in <b>E2stem YearBook</b> Team to build the Yearbook of 2019-2020 using Canva. Role: Designer",
      e2Intern:
        "January - March 2022, <b>DigitaLL Lap Intern</b> at <b>E2stem Education Preah Yukunthor</b> for total 25 hours. Internship in role organize the lab, electronic items, digital, and lab, Test Device, set up Electric device, and Manage school System within the website Snipe-IT and Gibbon V24.",
      soraIntern:
        "Intern as a <b>Frontend Developer</b> at <b>Soramitsu Khmer</b>.<br/><b>First round :</b> 12th September - 12th December 2022 <br/><b>Second round :</b> 16th May - 16th August 2023  ",
      aboutme:
        "Currently, I am a second-year student of Royal University of PhnomPenh (RUPP) and E2Stem Higer Diploma in Software Development(HDSD).<br/> In RUPP, I have choosen an Information Technology Engineering as my major which I will learn in the morning.<br/> On other hand, in HDSD I'm studying Software Development which will take place in the afternoon.",
      contactinfo:
        "Street No. #128A, Sangkat Teuk Thla,<br/ >Khan Sen Sok, Phnom Penh <br/>Tel : +855-81808091<br/>Email : limchanjnint@gmail.com <br/>",
      IntroName: "I am &lt; Lim &gt; Chanjnint !",
      greetMsg: "Hey, there",
      webcourse: "Earlier in 2023 from January - April 22, I have completed the online course from udemy call 'The Wen Developer Bootcamp 2023', that's teach by Mr. Cotl Steele. click to see the certificate"
    };
  },
  watch: {
    version(newVal) {
      if (newVal) {
        this.greetMsg = "សួរស្ដី";
        this.IntroName = "ខ្ញុំឈ្មោះ &lt; លឹម &gt; ច័ន្ទជនិន្ទ !";
        this.aboutme = "បច្ចុប្បន្ន, ខ្ញុំជានិស្សិតឆ្នាំទី 2 នៃសាកលវិទ្យាល័យភូមិន្ទភ្នំពេញ(RUPP) និង E2Stem Higer Diploma in Software Development (HDSD)។<br/> នៅ RUPP ខ្ញុំបានជ្រើសរើសវិស្វកម្មបច្ចេកវិទ្យាព័ត៌មានជាមុខវិជ្ជាគោល ដែលខ្ញុំនឹងរៀននៅ វេនព្រឹក។<br/>ចំណែកនៅក្នុង HDSD ខ្ញុំកំពុងសិក្សា ការអភិវឌ្ឍន៍កម្មវិធី ដែលខ្ញុំរៀននៅ វេនរសៀល។";
        return;
      }
      this.greetMsg = "Hey, there";
      this.IntroName = "I am &lt; Lim &gt; Chanjnint !";
      this.aboutme=
        "Currently, I am a second-year student of Royal University of PhnomPenh (RUPP) and E2Stem Higer Diploma in Software Development(HDSD).<br/> In RUPP, I have choosen an Information Technology Engineering as my major which I will learn in the morning.<br/> On other hand, in HDSD I'm studying Software Development which will take place in the afternoon.";
      return;
    },
  },
};
</script>

<style>
.Greeting {
  margin: 1rem 0;
  border-radius: 1rem;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
}

#MyPic {
  display: flex;
  justify-content: end;
  align-items: center;
}

#greet,
#Intro {
  text-align: start;
}

.logo {
  display: flex;
  justify-content: center;
}
</style>
