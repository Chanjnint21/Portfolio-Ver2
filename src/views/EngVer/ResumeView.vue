<template>
    <v-main class="Resume">
        <main-title :titles="resumeTitle" />
        <!-- <info-box ClassProps="resumePhoto" cols="12" img-source="resume.png" :details="resumedetails"/> -->
        <v-row id="resumeinfo">
            <v-col cols="12" class="resumePhoto">
                <div class="ResumeImg"><image-solo img-src="resume.png" /></div>
            </v-col>
            <v-col class="resumefooter" cols="12">
                <div cols="9">Up to Date file:: <a
                        href="https://www.canva.com/design/DAFIosW-Xfw/f0l7YUVN4BqNNmJHmd09HQ/view?utm_content=DAFIosW-Xfw&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">link
                        to main source</a></div>
                <div cols="3"><v-btn color="pink" x-small>Download</v-btn></div>
            </v-col>
        </v-row>
    </v-main>
</template>

<script>
export default {
    name: "ResumeView",
    props: {
        version: Boolean,
    },
    data() {
        return {
            resumedetails: "<v-btn>Download</v-btn>",
            resumeTitle: 'Resume'
        };
    }
};
</script>

<style>
#resumeinfo {
    margin-top: 1rem;
    /* margin-top: 1rem;
    margin-bottom: 1rem;
    border-radius: 1rem; */
    height: auto;
    /* width: 100%; */
    display: flex;
    justify-content: center;
}

.resumePhoto {
    /* margin-top: 1rem;
    margin-bottom: 1rem;
    border-radius: 1rem;
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%; */
    display: flex;
    justify-content: center;
}

.resumefooter {
    border-radius: 1rem 1rem 0 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: space-evenly;
}

.ResumeImg {
    width: 75%;
}

@media(max-width : 500px) {
    .ResumeImg {
        width: 100%;
    }
}
</style>