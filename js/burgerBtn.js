const burgerLines = document.querySelectorAll(".wrap__home__header__burger-btn__line");
const burgerBtn = document.querySelector("#burgerBtn");
const burgerMenu = document.querySelector("#burgerMenu");
const home = document.querySelector("#home");
const swiperBlur = document.querySelector("#swiperBlur");
const burgerHeader = document.querySelector("#burgerHeader");
const homeHeader = document.querySelector("#homeHeader");
const homeMain = document.querySelector("#homeMain");
const homeFooter = document.querySelector("#homeFooter");

function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

let supportsPassive = false;
try {
  window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
    get: function () { supportsPassive = true; } 
  }));
} catch(e) {}


const wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';
const wheelOpt = supportsPassive ? { passive: false } : false;

let clicked = false;
burgerBtn.onclick = () => {
  if (!clicked) {
    burgerBtn.style.justifyContent = 'center';
    burgerLines[0].style.transform = 'rotate(-40deg)';
    burgerLines[0].style.width = '90px';
    burgerLines[1].style.display = 'none';
    burgerLines[2].style.transform = 'rotate(40deg)';
    burgerLines[2].style.width = '90px';

    window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
    window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
    window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
    window.addEventListener('keydown', preventDefaultForScrollKeys, false);
  
    setTimeout(() => {
      burgerMenu.style.transform = 'scale(1)';
      home.style.filter = 'blur(30px)';
      swiperBlur.style.filter = 'blur(30px)';
      burgerHeader.append(homeHeader);
      document.querySelector(".wrap__home__header__logo").style.opacity = '0';
      document.querySelectorAll(".burgerLink")[0].style.left = "0";
      document.querySelectorAll(".burgerLink")[1].style.left = "0";
      document.querySelectorAll(".burgerLink")[2].style.left = "0";
      document.querySelectorAll(".burgerLink")[3].style.left = "0";
    }, 50);

    clicked = true;

  } else {
    burgerBtn.style.justifyContent = 'space-between';
    burgerLines[0].style.transform = 'rotate(0)';
    burgerLines[0].style.width = '47px';
    burgerLines[1].style.display = 'block';
    burgerLines[2].style.transform = 'rotate(0)';
    burgerLines[2].style.width = '47px';

    window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.removeEventListener(wheelEvent, preventDefault, wheelOpt); 
    window.removeEventListener('touchmove', preventDefault, wheelOpt);
    window.removeEventListener('keydown', preventDefaultForScrollKeys, false);

    setTimeout(() => {
      burgerMenu.style.transform = 'scale(0)';
      home.style.filter = 'blur(0)';
      swiperBlur.style.filter = 'blur(0)';
      home.append(homeHeader);
      home.append(homeMain);
      home.append(homeFooter);
      document.querySelector(".wrap__home__header__logo").style.opacity = '1';
      document.querySelectorAll(".burgerLink")[0].style.left = "100%";
      document.querySelectorAll(".burgerLink")[1].style.left = "100%";
      document.querySelectorAll(".burgerLink")[2].style.left = "100%";
      document.querySelectorAll(".burgerLink")[3].style.left = "100%";
    }, 50);

    clicked = false;
  }
}