<template>
  <v-app id="home">  
    <NavBar/>
    <v-container fluid>
        <div class="head">
            <v-row>
              <v-col cols="5">
                <div style="position: relative" class="mt-16">
                <h1 class="text-grey">Hello</h1>
                <h1 class="text-white">Ser</h1>
                <span class ="text-grey">Top Developer, Top Designer</span><br />
                <v-btn tile dark class="text-yellow mt-8" variant="outlined">Contact me</v-btn>
                </div>
              </v-col>
              <v-col cols="2">
                <div style="position: absolute;z-index: 9999;bottom:0;margin-left:auto;margin-right: auto;left: 0;right: 0;text-align: center;">
                    <v-icon></v-icon>
                </div>
              </v-col>
              <v-col cols="5">
                <div style="position: absolute;z-index: 9999;" class="mt-16">
                  <v-img src="https://imgs.search.brave.com/M6adMj0L8ChZHKPrn0Qv8iHSsbFKqR1i7bV0Qs7z73E/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5p/WjZzVHZGYy12Y25j/ZGpieHM0WE1BSGFF/byZwaWQ9QXBp" contain max-height="300"></v-img>
                </div>
              </v-col>
            </v-row>
        </div>
    </v-container>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <FooterFolio/>
  </v-app>
</template>

<script>
// import axios from "axios";
// import cookies from "vue-cookies";
// import router from '@/router';
import FooterFolio from "@/components/FooterFolio.vue";
import NavBar from '@/components/NavBar.vue';
// import anime from 'animejs';

  export default {
    name: "MainPage",
    components: {
        FooterFolio,
        NavBar,
    },
  }
</script>

<style scoped>

.v-container{
  padding: 16px 0;
}
.head{
  position: relative;
  text-align: center;
  padding: 12px;
  margin-bottom: 6px;
  height: 400px;
  width: 100%;
  color: white;
}
.head:before{
  content: " ";
  position: absolute;
  top:0;
  left: 0;
  height: 100%;
  width: 50%;
  background: black;
  transform: skew(0deg, 6deg);
}
.head:after{
  content: " ";
  position: absolute;
  top:0;
  right: 0;
  height: 100%;
  width: 50%;
  background: black;
  transform: skew(0deg, -6deg);
}
/* .bodyWrap{
        background-image: url(https://imgs.search.brave.com/HLeqRVTtcQlw4vwIJr8tkCJawN5obKK30DKXmuxJ1LA/rs:fit:920:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5h/VWpPUENZSE5ZV2Qx/Z3NJRmU3bldRSGFE/MCZwaWQ9QXBp);
        background-repeat: no-repeat;
        background-size: cover;
    } */
</style>