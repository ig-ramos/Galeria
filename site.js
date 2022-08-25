let imagens = document.querySelectorAll('.small_img');
let modal = document.querySelector('.modal');
let modalImg = document.querySelector('#modal-img');
let btnClose = document.querySelector('#btn-close');
let srcVal = "";


function eventoModal(imagens){
    for(let i = 0; i<imagens.length; i++){
        imagens[i].addEventListener('click', function(){
            srcVal = imagens[i].getAttribute('src');
            modalImg.setAttribute('src', srcVal);
            modal.classList.toggle('modal-active');
        })
    }

}

function eventoBtn(btnClose){
    btnClose.addEventListener('click', function(){
        modal.classList.toggle('modal-active');
    });
}

console.log(eventoModal(imagens));
console.log(eventoBtn(btnClose));
