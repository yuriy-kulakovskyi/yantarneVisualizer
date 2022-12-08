let arrTeam = [
    {
        name: 'Тарас Федунь',
        position: 'Радіоведучий',
        imageUrl: './img/fedun.png',
        facebook: 'https://www.facebook.com/fedun.tarasss'
    },
    {
        name: 'Діма Дзіковський',
        position: 'Ведучий ранкового шоу',
        imageUrl: './img/name.png',
        facebook: 'https://facebook.com'
    },
    {
        name: 'Соломія Василець',
        position: 'Ведуча',
        imageUrl: './img/vasilec.png',
        facebook: 'https://www.facebook.com/solomiya.vasuletz'
    },
    {
        name: 'Софія Таруш',
        position: 'Ведуча ранкового шоу',
        imageUrl: './img/tarush.png',
        facebook: 'https://facebook.com'
    },
    {
        name: 'Вікторія Дребот',
        position: 'Ведуча ранкового шоу',
        imageUrl: './img/drebot.png',
        facebook: 'https://www.facebook.com/drebot.vicky'
    },
    {
        name: "I'мя",
        position: 'Радіоведуча',
        imageUrl: './img/name.png',
        facebook: 'https://facebook.com'
    },
    {
        name: "I'мя2",
        position: 'Радіоведуча',
        imageUrl: './img/name.png',
        facebook: 'https://facebook.com'
    }
];

let numb = 0

for (let i = 0; i <= arrTeam.length; i++) {
    if (i % 2 == 0) {
        if (i >= numb) {
            numb = i
        }
    }
}

numb = numb / 2;

for (let i = 0; i < arrTeam.length; i++) {
  $('.row').append('<div class="box"  data-aos="zoom-in-up"  style="width: 340px; height: 480px;" id="box' + i + '"><div class="mig" style="background-image: url(' + arrTeam[i].imageUrl + ')" alt=""><div class="trygle"></div></div><b><p class="positionPlayer">' + arrTeam[i].position + '</p><p class="namePlayer">' + arrTeam[i].name + '</p><a href="' + arrTeam[i].facebook + '" class="fasebookPlayer" style="text-decoration: none; transition: 1s;"><span id="blue">Fase</span><span id="basa">book</span></a></b></div>')
}
