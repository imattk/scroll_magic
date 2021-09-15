const intro = document.querySelector('.intro');
const video = intro.querySelector('video');
const text = intro.querySelector('h1');
const text2 = intro.querySelector('h2');
const section = document.querySelector('section');
const end = section.querySelector('h1');

const controller = new ScrollMagic.Controller();
//scene
let scene = new ScrollMagic.Scene({
    duration: 17000,
    triggerElement: intro,
    triggerHook: 0
})
// .addIndicators()
.setPin(intro)
.addTo(controller);

const textAnim = TweenMax.fromTo(text,3,{opacity:1},{opacity:0});

let scene2 = new ScrollMagic.Scene({
    duration: 15000,
    triggerElement: intro,
    triggerHook: 0
})
.setTween(textAnim)
.addTo(controller);

const textAnim2 = TweenMax.fromTo(text2,3,{opacity:-1},{opacity:1});

let scene3 = new ScrollMagic.Scene({
    duration: 15000,
    triggerElement: intro,
    triggerHook: 2
})
.setTween(textAnim2)
.addTo(controller);

// video animation
let accelamount = 1;
let scrollpos = 0
let delay = 0;

scene.on('update', e =>{
    scrollpos = e.scrollPos / 700;
    
});

setInterval(() => {
    delay += (scrollpos - delay) * accelamount;
    video.currentTime = delay;
},325);
