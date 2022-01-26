/*Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data.*/

//vue.config.devtools = true; 

console.log('vue ok', Vue);
console.log('js ok');

const app = new Vue({
    el:'#root',
    data:{
        message: 'hello word',
        media:'https://www.lescienze.it/images/2018/07/09/195104163-9fbe7398-f4e4-4885-ae7b-d7179a0719eb.jpg',
    }
})