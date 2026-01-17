const front = document.querySelector('.front')
const dev = document.querySelector('.dev')
const teksBaru = document.querySelector('.teksBaru')

const teksAwal = front.textContent;

dev.addEventListener('click', function(){

  front.classList.add('hidden');

  setTimeout(function(){
    front.textContent = teksBaru.textContent;
    front.classList.remove('hidden');

  }, 500)
})

dev.addEventListener('dblclick', function(){

  front.classList.add('hidden');

  setTimeout(function(){
    front.textContent = teksAwal;
    front.classList.remove('hidden');
  }, 500)
})

// page skill
const boxes = document.querySelectorAll('.box')
const teksHtml = 'HTML ';

const teksCSS = 'CSS';
const teksJS = 'JS'
const hoverHTML = document.querySelector('.hoverHTML');
const hoverCSS = document.querySelector('.hoverCSS');
const hoverJS = document.querySelector('.hoverJS');
const hoverme = 'hover me!';

boxes.forEach((box, index) => {

  box.addEventListener('mouseenter', () => {
    if(index === 0){
      hoverHTML.textContent = teksHtml;
      hoverHTML.style.color = 'white'
      hoverHTML.style.fontSize = 'clamp(0.8rem,2.5vw,2rem';
      hoverHTML.style.fontFamily = 'acorn'
    
    }if(index === 1){
      hoverCSS.textContent = teksCSS;
      hoverCSS.style.color = 'white'
      hoverCSS.style.fontSize = 'clamp(0.8rem,2.5vw,2rem';
      hoverCSS.style.fontFamily = 'acorn'
    }if(index === 2){
      hoverJS.textContent = teksJS;
        hoverJS.style.color = 'white'
      hoverJS.style.fontSize = 'clamp(0.8rem,2.5vw,2rem';
      hoverJS.style.fontFamily = 'acorn'
    }
  })

    box.addEventListener('mouseleave', () => {
    if(index === 0){
      hoverHTML.textContent = hoverme;
       hoverHTML.style.color = 'black'
            hoverHTML.style.fontSize = 'clamp(0.8rem,2.5vw,1.5rem';
    } if(index === 1){
      hoverCSS.textContent = hoverme;
        hoverCSS.style.color = 'black'
            hoverCSS.style.fontSize = 'clamp(0.8rem,2.5vw,1.5rem';
    } if(index === 2){
      hoverJS.textContent = hoverme;
        hoverJS.style.color = 'black'
            hoverJS.style.fontSize = 'clamp(0.8rem,2.5vw,1.5rem';
    }
  })
 
});

// page bg

const bg = document.getElementById('bg');
const page1 = document.querySelector('.page1');
const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  const start = page1.offsetTop;
  const end = start + page1.offsetHeight / 1.2;
 
  if (scrollY >= start && scrollY <= end) {
    // progress hanya di page1
    let progress = (scrollY - start) / page1.offsetTop * 15;
    progress = Math.min(Math.max(progress, 0), 1  );

    page1.style.background = `rgba(0, 0, 0, ${progress})`;
    

  } else if (scrollY >= end) {
    // keluar page1 → balik ke default
page1.style.background = `rgba(0, 0, 0, 0)`  ;

  } else if (scrollY > 50){
    nav.classList.add('scrolled')
  } else {
    nav.classList.remove('scrolled')
  }
 
});
 window.addEventListener("scroll", function () {
    

  
  });
// marquee 
const track = document.querySelector('.marquee-track')
const itemWidth = track.children[0].offsetWidth

let x = 0
const speed = 5 // kecil = super smooth

function loop() {
  x -= speed

  // ⬇️ BUKAN reset ke 0
  if (Math.abs(x) >= itemWidth) {
    x += itemWidth
  }

  track.style.transform = `translateX(${x}px)`
  requestAnimationFrame(loop)
}

loop()

// navbar




