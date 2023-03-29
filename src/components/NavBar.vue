<template>
    <v-app-bar app color="white" dark flat class="px-12">
        <v-avatar>
            <v-btn router-link to="/" color="blue" class="mr-1">AD</v-btn>
        </v-avatar>
        <v-spacer></v-spacer>
        <v-btn text class="black--text" >Projects</v-btn>
        <v-btn text class="black--text" href="mailto:tkb_sats@gmail.com?subject=Inquiry%20about%20services" target="_blank">Contact</v-btn>
        <v-btn text class="black--text" href="https://github.com/Rarigit" target="_blank">Github</v-btn>
        <v-btn text class="black--text" href="https://drive.google.com/file/d/1HVH4T8N7_km1xSZlTE2d8h0m-OEWENvT/view" target="_blank">Resume</v-btn>
    </v-app-bar>
</template>

<script>
    export default {
        methods: {
            scroll(refName) {
                const element = document.getElementById(refName);
                element.scrollIntoView({behavior: "smooth"}); 
            }
        },
    }
</script>

<style scoped>

</style>