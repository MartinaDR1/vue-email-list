/*Descrizione:
Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati.*/


const { createApp } = Vue

  createApp({
    data() {
      return {
        list_mail:[]
      }
    },
    methods:{
      generateMail(){
        for(i=1; i<=10;i++){
          axios
          .get(" https://flynn.boolean.careers/exercises/api/random/mail ")
          .then(response =>{
            console.log(response);
            this.list_mail.push(response.data.response)
                  
          })
        
        }
      }
    },
    mounted(){
      this.generateMail()
    }
  }).mount('#app')