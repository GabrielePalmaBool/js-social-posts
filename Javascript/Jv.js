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
            "name" : "Peppino di Capri",
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
            "name" : "Nino d'angelo",
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
            "name" : "Gigi",
            "image" : "https://unsplash.it/300/300?image=132"

        },
        "links": 32,
        "created": "20161-12-17"
    },

    {
        "id": 4,
        "content": "Provident alias sint. Officiis hic magnam veritatis et similique magnam. Amet earum saepe deleniti quam expedita assumenda omnis necessitatibus.",
        "media":"https://unsplash.it/600/300?image=81",
        "author" : {
            "name" : "Pippo Baudo",
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
            "name" : "Celentano",
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

                            <a class="like-button  js-like-button" href="#" data-postid="1">

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

const like = document.querySelector(".js-like-button");

// Se clicco la freccia di destra, scorrerrà in avanti
like.addEventListener('click',  

            function () {

            console.log("ok");



});