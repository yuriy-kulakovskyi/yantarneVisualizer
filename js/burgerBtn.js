const burgerLines = document.querySelectorAll(".wrap__home__header__burger-btn__line");
const burgerBtn = document.querySelector("#burgerBtn");
const burgerMenu = document.querySelector("#burgerMenu");
const home = document.querySelector("#home");
const swiperBlur = document.querySelector("#swiperBlur");
const burgerHeader = document.querySelector("#burgerHeader");
const homeHeader = document.querySelector("#homeHeader");
const homeMain = document.querySelector("#homeMain");
const homeFooter = document.querySelector("#homeFooter");

let clicked = false;
burgerBtn.onclick = () => {
  if (!clicked) {
    burgerBtn.style.justifyContent = 'center';
    burgerLines[0].style.transform = 'rotate(-40deg)';
    burgerLines[0].style.width = '90px';
    burgerLines[1].style.display = 'none';
    burgerLines[2].style.transform = 'rotate(40deg)';
    burgerLines[2].style.width = '90px';
  
    setTimeout(() => {
      burgerMenu.style.transform = 'scale(1)';
      home.style.filter = 'blur(30px)';
      swiperBlur.style.filter = 'blur(30px)';
      burgerHeader.append(homeHeader);
      document.querySelector(".wrap__home__header__logo").style.display = 'none';
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

    setTimeout(() => {
      burgerMenu.style.transform = 'scale(0)';
      home.style.filter = 'blur(0)';
      swiperBlur.style.filter = 'blur(0)';
      home.append(homeHeader);
      home.append(homeMain);
      home.append(homeFooter);
      document.querySelector(".wrap__home__header__logo").style.display = 'block';
      document.querySelectorAll(".burgerLink")[0].style.left = "100%";
      document.querySelectorAll(".burgerLink")[1].style.left = "100%";
      document.querySelectorAll(".burgerLink")[2].style.left = "100%";
      document.querySelectorAll(".burgerLink")[3].style.left = "100%";
    }, 50);

    clicked = false;
  }
}