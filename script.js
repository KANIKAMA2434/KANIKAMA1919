// =====================
// スクロール表示
// =====================


const cards = document.querySelectorAll(".card");


function showCards(){

    cards.forEach(card => {

        const position =
        card.getBoundingClientRect().top;


        const screen =
        window.innerHeight;


        if(position < screen - 100){

            card.classList.add("show");

        }

    });

}



window.addEventListener(
"scroll",
showCards
);



showCards();






// =====================
// TOPボタン
// =====================


const topButton =
document.getElementById("top");



topButton.addEventListener(
"click",
()=>{


window.scrollTo({

top:0,

behavior:"smooth"

});


});






// =====================
// ページ読み込み演出
// =====================


window.addEventListener(
"load",
()=>{


document.body.style.opacity="0";


setTimeout(()=>{


document.body.style.transition="1s";


document.body.style.opacity="1";


},100);



});
