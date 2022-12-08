const partnersArr=[
    {
        name:'/Creator IT Academy',
        img:'./img/creator.png'
    },
    {
        name:'Defilyada',
        img:'./img/defilyada.png'
    },
    {
        name:'Rodynnui',
        img:'./img/rodynnyi.png'
    }
];
for(let i=0; i<partnersArr.length; i++){
    partnersArr.map((partner)=>{
    $('.partners__main__row').append('<div class="partners__main__row__item" id="item"><div class="partners__main__row__img" style="background-image:url('+partner.img+')"><div/><div/>');
    });
}
