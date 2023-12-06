/*

Ricreiamo un feed social aggiungendo al layout di base fornito

*/



//SVOLGIMENTO

//creo l'array di oggetti che saranno inseriti nel mio carosello
const posts = [

    {
        "id": 1,
        "content": "Provident alias sint. Officiis hic magnam veritatis et similique magnam. Amet earum saepe deleniti quam expedita assumenda omnis necessitatibus.",
        "media":"https://unsplash.it/600/300?image=171",
        "author" : {
            "name" : "Pinco Panco",
            "image" : "https://unsplash.it/300/300?image=15"

        },
        "links": 80,
        "created": "2021-06-05"
    },

    {
        "id": 2,
        "content": "Provident alias sint. Officiis hic magnam veritatis et similique magnam. Amet earum saepe deleniti quam expedita assumenda omnis necessitatibus.",
        "media":"https://unsplash.it/600/300?image=2",
        "author" : {
            "name" : "Panco Pinco",
            "image" : "https://unsplash.it/300/300?image=24"

        },
        "links": 113,
        "created": "2019-08-01"
    },

    {
        "id": 3,
        "content": "Provident alias sint. Officiis hic magnam veritatis et similique magnam. Amet earum saepe deleniti quam expedita assumenda omnis necessitatibus.",
        "media":"https://unsplash.it/600/300?image=131",
        "author" : {
            "name" : "MArio Rossi",
            "image" : "https://unsplash.it/300/300?image=132"

        },
        "links": 32,
        "created": "2016-12-17"
    },

    {
        "id": 4,
        "content": "Provident alias sint. Officiis hic magnam veritatis et similique magnam. Amet earum saepe deleniti quam expedita assumenda omnis necessitatibus.",
        "media":"https://unsplash.it/600/300?image=81",
        "author" : {
            "name" : "Luca Neri",
            "image" : "https://unsplash.it/300/300?image=103"

        },
        "links": 41,
        "created": "1956-02-14"
    },

    {
        "id": 5,
        "content": "Provident alias sint. Officiis hic magnam veritatis et similique magnam. Amet earum saepe deleniti quam expedita assumenda omnis necessitatibus.",
        "media":"https://unsplash.it/600/300?image=234",
        "author" : {
            "name" : "Mirco Grigio",
            "image" : "https://unsplash.it/300/300?image=233"

        },
        "links": 59,
        "created": "2002-05-04"
    }

];

//chiamo funzione per il popolamento
function Population(){

    //imposto un filtro sul mio array di oggetti
    posts.forEach ((index) => {
        
        /*
        const minute = 1000 * 60;
        const hour = minute * 60;
        const day = hour * 24;
        const year = day * 365;

        const d = new Date(index.created);
        let years = Math.round(d.getYear()/ year);
        console.log(years);*/
        
            data = `
            <div class="post">
                <div class="post__header">
                    <div class="post-meta">
                        <div class="post-meta__icon">
                            <img class="profile-pic" src="${index.author.image}" alt="Phil Mangione">   
                        </div>
                        <div class="post-meta__data">
                            <div class="post-meta__author">${index.author.name}</div>
                            <div class="post-meta__time">${index.created}</div>
                        </div>
                    </div>
                </div>
                <div class="post__text">${index.content}</div>
                <div class="post__image">
                <img src="${index.media}" alt="">
                </div>
                <div class="post__footer">
                    <div class="likes js-likes">
                        <div class="likes__cta">

                            <a class="like-button  js-like-button" data-postid="${index.id}">

                                <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>

                                <span class="like-button__label">Mi Piace</span>
                            </a>

                        </div>

                        <div class="likes__counter">

                            Piace a <b id="like-counter-1" class="js-likes-counter">${index.links}</b> persone

                        </div>

                    </div>
                    </div>
                </div>
            </div>`;
            
            
            document.getElementById ('container').innerHTML += data;

        });
      
}


//chiamo funzione popolamento
Population();


//acquisisco tutti i tasti mi piace in pagina all'interno di un array
const like = document.querySelectorAll(".js-like-button");

//acquisisco il numero per ogni tasto mi piace in pagina all'interno di un array
const count = document.querySelectorAll(".likes__counter");

//inizializzo un array
const val = [];

//imposto un ciclo for sul numero dei tasti mi piace
for (let i = 0; i < like.length; i++) {

    //per ogni tasto mi piace associo un eventListner al click
    like[i].addEventListener("click", 

        function() {

            //acquisisco i valore in posizione i nella pagina
            let number =  count[i].querySelector('.js-likes-counter').innerHTML;

            //lo incremento di uno
            number++;

            //se il numero non è presente nel mio array di valori
            if(!val.includes(i)){

                //aggiungo al tasto mi piace la classe onclick che lo colora di blu
                like[i].classList.add("onclick");

                // copio tale valore nel mio array
                val[i]= i;

                //modifico in pagina il numero in corrispondenza del tasto mi piace 
                count[i].querySelector('.js-likes-counter').innerHTML = number ;

               

            }

            //altrimenti
            else {

                //rimuovo la classe onclick
                like[i].classList.remove("onclick");

                //elimino l'elemento dal mio array
                val.splice(i, 1);

                //acquisisco il valore dalla mia pagina html
                let number =  count[i].querySelector('.js-likes-counter').innerHTML;

                //decremento tale valore
                number--;

                //rinserisco in pagina nuovo valore
                count[i].querySelector('.js-likes-counter').innerHTML = number ;

               
            }
                
          
            
        });
}

//


