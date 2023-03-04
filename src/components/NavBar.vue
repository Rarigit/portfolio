<template>
    <v-app-bar app color="black" dark flat class="px-12">
        <v-btn>
            <v-icon color="yellow" left class="mr-2"></v-icon>Top Dev
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn text @click="scroll('home')" class="text-yellow">Home</v-btn>
        <v-btn text @click="scroll('about')" class="text-yellow">About</v-btn>
        <v-btn text @click="scroll('portfolio')" class="text-yellow">Projects</v-btn>
        <v-btn text @click="scroll('services')" class="text-yellow">Services</v-btn>
        <v-btn text @click="scroll('contact')" class="text-yellow">Contact</v-btn>
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