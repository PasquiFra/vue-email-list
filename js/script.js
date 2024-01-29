console.log("VUE OK", Vue);

// Creo la variabile endpoint da inserire in fase di richiesta al server
const endpoint = "https://flynn.boolean.careers/exercises/api/random/mail"

const { createApp } = Vue;
const app = createApp ({
    name: "Email List",
    data(){
        return {
            emails: [],

        } 
    },
    methods: {
        //Creo la funzione di richiesta delle informazioni all'endpoint, push del risultato nell'array
       getEmail(){
        axios.get(endpoint).then(res => {this.emails.push(res.data.response)})
       }
    },
    // In fase di creazione ripeto l'operazione 10 volte ottenendo l'array 
    // di lunghezza desiderata
    created() {
        for (let i=0; i < 10 ; i++){
            this.getEmail();
        } 
        console.log(this.emails)
    }
})

app.mount("#root");
