document.getElementById('add').addEventListener('click', function () {
    let divCard = document.createElement('div');
    divCard.classList.add('card');
    divCard.innerText = document.querySelectorAll('.card').length + 1;
    document.getElementById('cards').appendChild(divCard);
});

document.getElementById('sub').addEventListener('click', function () {
    let vetorCard = document.querySelectorAll('.card');
    if (vetorCard.length > 0) {
        vetorCard[vetorCard.length - 1].remove();
    }else{
        console.log('Não há mais card para remover');
    }
});