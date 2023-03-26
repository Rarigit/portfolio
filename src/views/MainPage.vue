<template>
  <v-app class="bodyWrap">  
    <NavBar/>
    <br>
    <br>
    <v-row align="center" justify="center">
        <v-col cols="12" sm="10">
            <v-card class="elevation-6 mt-10">
                <v-window v-model="step">
                    <v-window-item :value="1">
                        <v-row>
                            <v-col cols="12" sm="6" class="black rounded-bl-xl">
                                <div style="text-align:center; padding: 180px 0;">
                                    <v-card-text class="white--text">
                                        <h2 class="text-center">Hi. My name is <strong class="strong">Top G</strong></h2>
                                        <br>
                                        <br>
                                        <h2 class="text-center white--text pFont">
                                            As a Full-stack developer, I am driven by a passion for coding and enjoy tacking complex problems though programming. With a keen eye for design,
                                            I take pride in crafting visually stunning and intuitive websites that enhance the user experience. My ability to effectively strategize and prioritize 
                                            tasks enable me to efficiently complete multiple projects within tight deadlines, while maintaining a meticulous attention to detail. 
                                        </h2>
                                        <br>
                                        <br>
                                      </v-card-text>
                                      <br>
                                </div>
                            </v-col>
                            <v-col cols="12" sm="6" class="black rounded-bl-xl">
                                <div style="text-align:center; padding: 180px 0;">
                                    <v-card-text class="white--text">
                                        <h2 class="pFont"> Top G is Proficient In:
                                          <br>
                                          <br>
                                          <br>
                                          <br>
                                          <br>
                                            <span class="typed-text">{{ typeValue }}</span>
                                            <span class="cursor" :class="{'typing': typeStatus}">&nbsp;</span>
                                        </h2>
                                        <br>
                                        <br>
                                      </v-card-text>
                                      <br>
                                </div>
                            </v-col>
                        </v-row>
                    </v-window-item>
                </v-window>
            </v-card>
        </v-col>
    </v-row>
    <v-card>
        <v-card align="center" justify="center" class="rounded-lg bodyWrap" flat height="70vh">
          <br>
          <h2 class="pFont white--text" id="section2">Projects I have Built</h2>
        <v-row>
            <v-col cols="12" sm="4">
                <v-card align="center" justify="center" color="transparent" class="rounded-lg mx-2" flat>
                    <v-app-bar align="center" justify="center" flat color="blue" class="mt-7" height="500vh" width="30vw">
                        <v-list-item class="mb-12 white--text">
                            <v-list-item-content>
                                <h1 class="white--text mx-auto pFont">Foodie</h1>
                                <v-text-field class="mb-2" large prepend-icon="mdi-car"></v-text-field>
                                <h3 class="pFont black--text">A mock delivery food ordering application that allows both restaurants and users to sign up. 
                                Users can choose from a multitude of restaurants, view menus and place an order. Restaurants can sign up to the site, 
                                create menu items and confirm orders. Clients can also modify/delete their orders, while restaurants can cancel pending orders.</h3>
                            </v-list-item-content>
                        </v-list-item>
                    </v-app-bar>
                    <br>
                </v-card>
            </v-col>
            <v-spacer></v-spacer>
            <v-col cols="12" sm="4">
                <v-card color="transparent" class="rounded-lg mx-2" flat>
                    <v-app-bar flat color="blue" class="mt-7" height="500vh" width="30vw">
                        <v-list-item class="mb-12 white--text">
                            <v-list-item-content>
                                <h1 class="white--text mx-auto pFont">Bettoken</h1>
                                <v-text-field class="mb-2" large prepend-icon="mdi-chart-line"></v-text-field>
                                <h3 class="pFont black--text">A Full-stack project that implemented a custom-made bot that parsed real-time data from ConGecko. 
                                This data was then used to set up portfolios and predictions for clients of the site. The predictions feature allows for the 
                                client to estimate the future price of a coin at any future arbitrary amount of time whether its 5 minutes or 24 hours. Once the 
                                elapsed time-duration is over, the client can then see if their prediction was below or above the actual current price of the token in real-time.</h3>
                            </v-list-item-content>
                        </v-list-item>
                    </v-app-bar>
                </v-card>
            </v-col>
        </v-row>
        </v-card>
    </v-card>
    <v-card align="center" justify="center" class="rounded-lg bodyWrap" flat height="65vh">
      <v-app-bar flat color="blue" class="mt-7" height="500vh" width="30vw">
          <v-list-item class="mb-12 white--text">
              <v-list-item-content>
                  <h1 class="white--text mx-auto pFont">Get In Touch</h1>
                      <v-text-field class="mb-2" large prepend-icon="mdi-email"></v-text-field>
                          <h3 class="pFont black--text">Actively seeking new professional opportunities and welcome any inquiries regarding my services. 
                          Please do not hesitate to email me if you are interested in any of my services.</h3>
                          <br>
                  <form id="section3">
                    <br>
                    <v-btn color="black white--text" href="mailto:tkb_sats@gmail.com?subject=Inquiry%20about%20services">Send Email</v-btn>
                  </form>
              </v-list-item-content>
          </v-list-item>
      </v-app-bar>
    </v-card>
    <FooterFolio/>
  </v-app>
</template>

<script>
import FooterFolio from "@/components/FooterFolio.vue";
import NavBar from '@/components/NavBar.vue';

/*The js and css code for the typewriter animation that i made was influenced by a youtube tutorial. This typewriter animation is very cool imo.*/
  export default {
    name: "MainPage",
    components: {
        FooterFolio,
        NavBar,
    },
    data() {
      return {
        typeValue: '',
        typeStatus: false,
        typeArray: ['GitLab', 'Apache', 'JavaScript', 'REST APIs', 'VueJS', 'Vuetify', 'Relational Databases', 'MariaDB & SQL', 'Python', 'Flask', 'Postman', 'Bash Scripting', 'NodeJS', 'CSS', 'Pinia'],
        typingSpeed: 200,
        erasingSpeed: 100,
        newTextDelay: 2000,
        typeArrayIndex: 0,
        charIndex: 0,
      }
    },
    methods: {
      typeText() {
        if(this.charIndex < this.typeArray[this.typeArrayIndex].length){
            if(!this.typeStatus)
              this.typeStatus = true;

            this.typeValue += this.typeArray[this.typeArrayIndex].charAt(this.charIndex);
            this.charIndex += 1;

            setTimeout(this.typeText, this.typingSpeed);
        }
        else {
          this.typeStatus = false;
          setTimeout(this.eraseText, this.newTextDelay);
        }
      },
      eraseText() {
        if(this.charIndex > 0) {
          if(!this.typeStatus)
              this.typeStatus = true;

          this.typeValue = this.typeArray[this.typeArrayIndex].substring(0, this.charIndex -1);
          this.charIndex -= 1;
          setTimeout(this.eraseText, this.erasingSpeed);
        }
        else {
          this.typeStatus = false;
          this.typeArrayIndex +=1;
          if(this.typeArrayIndex >= this.typeArray.length)
            this.typeArrayIndex = 0;

          setTimeout(this.typeText, this.typingSpeed + 1000);
        }
      }
    },
    mounted () {
      setTimeout(this.typeText, this.newTextDelay + 200);
    },



    }
</script>

<style scoped>

.bodyWrap{
        background-image: url("https://imgs.search.brave.com/tZdm6M7x0rJ5n_uTK0nfjV-GekG1P9gTYvQ_pKg1mHs/rs:fit:675:380:1/g:ce/aHR0cHM6Ly93aS53/YWxscGFwZXJ0aXAu/Y29tL3dzaW1ncy84/My04MzgzNjJfd2Vi/LWRldmVsb3Blci5q/cGc");
        background-repeat: no-repeat;
        background-size: cover;
    }


h1 {
  font-size: 4rem;
  font-weight: normal;

}
  span.typed-text {
    color: green;
  }

  span.cursor {
    display: inline-block;
    margin-left: 3px;
    width: 4px;
    background-color: white;
    animation: cursorBlink 1s infinite;
  }

  span.cursor.typing {
    animation: none;
  }


@keyframes cursorBlink {
  49% { background-color: white; }
  50% { background-color: transparent; }
  99% { background-color: transparent; } 
}

@import url('https://fonts.googleapis.com/css2?family=Lato:wght@700&display=swap');
.pFont {
    font-family: 'Lato', sans-serif;
}

.strong {
  font-size: 50px;
}


</style>