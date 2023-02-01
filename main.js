// let inputValue = document.querySelector(".input");
// let Btn = document.querySelector(".button");
// let Wrapper = document.querySelector(".wrapper__2");

// let value = +inputValue.value;

// Btn.addEventListener("click", function () {
//   if (value >= 10) {
//     Wrapper.classList = "wrap"
//   }else{
//     Wrapper.classList = ''
//   };
// });
// document.addEventListener('keydown', function(){
//    console.log('Hello World')
// })
// document.addEventListener("keydown", function (e) {
//   if (e.key == "m" && e.ctrlKey) {
//     alert("Siz CTRL + L tugmasini bosdingiz ");
//   }
// });
// document.addEventListener('keydown', (e)=>{
//     if(e.key == 'p' && e.ctrlKey){
//         alert('Siz  eni bi tugmalar orqali pechat  qila olmaysiz')
//     }
// })

const insert = document.querySelector(".insert");
window.addEventListener("keydown", function (e) {
  insert.innerHTML = `
    <div class= 'key' >
      ${e.key == ' ' ? 'Space'  : e.key}
        <small>event.key</small>
    </div>
    <div class= 'key' >
      ${e.keyCode}
        <small>event.keyCode</small>
    </div>
    <div class= 'key' >
      ${e.code}    
        <small>event.code</small>
    </div>
    `;
});
