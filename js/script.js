//スクロールアニメーション
let targets = document.querySelectorAll('.scrollIn');
let offset = 100;

window.addEventListener('scroll',function(){
  let scroll = window.scrollY;
  let height = window.innerHeight;

  for(let target of targets){
    let pos = target.getBoundingClientRect().top+scroll;
    if(scroll > pos - height + offset){
      target.classList.add('scrollOff');
    }
  }
});