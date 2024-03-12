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
          <image-solo img-src="myPic.jpg"
        /></v-col>
      </v-row>
    </div>
    <div id="about">
      <main-title titles="About" />
      <v-col cols="12">
        <p v-html="aboutme"></p>
      </v-col>
    </div>

    <v-col id="experience&tranning"  class="">
      <main-title titles="Experience & Trainning" />
      <v-row class="pa-5">
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
        img-source="StemFestival2019.jpg"
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
        img-source="SoraIntern.png"
        :details="soraIntern"
      />
      <info-box-rev
        cols="12"
        md="5"
        sm="5"
        xs="12"
        img-source="Web_developer_certification.jpg"
        :details="webCourse"
      />
      <info-box
        cols="12"
        md="5"
        sm="5"
        xs="12"
        img-source="Flutter_certification.jpg"
        :details="appCourse"
      />
      <info-box-rev
        cols="12"
        md="5"
        sm="5"
        xs="12"
        img-source="graduated.jpg"
        :details="graduated"
      />
      </v-row>
      
    </v-col>
    <div class="contact">
      <main-title titles="Contact" />
      <contact-box
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
          style="color: #ffffff;">go top <v-icon>mdi-chevron-up</v-icon>
        </a></v-col
      >
    </v-footer>
  </v-main>
</template>

<script>
import InfoBox from "@/components/InfoBox.vue";
import InfoBoxRev from "@/components/InfoBoxRev.vue";
import ContactBox from '@/components/contactBox.vue';
// import ImageSolo from '@/components/ImageSolo.vue';
export default {
  name: "portfolioView",
  props: {
    version:Boolean,
  },
  components: {
    InfoBox,
    InfoBoxRev,
    ContactBox,
    // ImageSolo
  },
  data() {
    return {
      Intro:
        "A university student who study in Software Devlopment and Information Technology Engineering.<br/>Do I have future goal ? Yes, I'm interest in Front-end Developer. ",
      stemfestival2018:
        "On late 2018, Participated in <b>Stem Festival</b> alongside my another 5 members and one mentor. Project showcase: <b>IQ Test</b>",
      codingcat:
        "April - June 2019, participated in <b>Coding Cat Program</b> at Raintree.<a class='text-decoration-none' target='_blank' href='https://www.raintreecambodia.com/news/2019/7/1/first-clowder-of-coding-cats-graduation?fbclid=IwAR0ZVb4lG46EVO-YHK5EiSFcwrAvTzMJNtNAEIbuMY2CJivxLHDJpzrQCDA'>More Information</a>",
      ewb: "October - November 2019, participated in <b>Engineering Without Borders (EWB)</b> Workshop at Factory. <a class='text-decoration-none' target='_blank' href='https://www.youtube.com/watch?v=i_wiMf4xZT0'>See Video</a>",
      stemfestival2019:
        "On December 2019, Participated in <b>Stem Festival</b> alongside my another 4 members. Project showcase: <b>Prototype of Machine to create natural fertilizer (Compost)</b>",
      yearbook:
        "Participated in <b>E2stem YearBook</b> Team to build the Yearbook of 2019-2020 using Canva. Role: Designer",
      e2Intern:
        "January - March 2022, <b>DigitaLL Lap Intern</b> at <b>E2stem Education Preah Yukunthor</b> for total 25 hours. Internship in role organize the lab, electronic items, digital, and lab, Test Device, set up Electric device, and Manage school System within the website Snipe-IT and Gibbon V24.",
      soraIntern:
        "Intern as a <b>Frontend Developer</b> at <b>Soramitsu Khmer</b>.<br/><b>First round :</b> 12th September - 12th December 2022 <br/><b>Second round :</b> 16th May - 16th August 2023  ",
      aboutme:
        "I am a Graduated student from E2Stem Higher Diploma in Software Development(HDSD), and currently a third-year student of Royal University of PhnomPenh (RUPP).<br/> In RUPP, I have chosen an Information Technology Engineering as my major.<br/> On other hand, in HDSD I'm studying Software Development which I took me two years to graduate in 9 December 2023.",
      contactinfo:
        "Street No. #128A, Sangkat Teuk Thla,<br/ >Khan Sen Sok, Phnom Penh <br/>Tel : +855-81808091<br/>Email : limchanjnint@gmail.com <br/>",
      IntroName: "I am &lt; Lim &gt; Chanjnint !",
      greetMsg: "Hey, there",
      webCourse: "Earlier in 2023 from January - April 22, I have completed the online course from Udemy call 'The Web Developer Bootcamp 2023', that's teach by Mr. Cotl Steele.",
      appCourse : 'From September 2023 to November 20 2023, I have completed another the online course from Udemy Call "Flutter and Dart - The Complete Guide[2023 Edition]. Academind by Maximilian Schwarzmuller."',
      graduated: 'on 9 December 2023, graduated from E2stem higher Diploma. Major: Software Development, which the academic years started from january 2022 to December 2023 [ 2years ].'
    };
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
