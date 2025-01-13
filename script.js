var clickableSpan = document.querySelector('.explore');
var mainPage = document.querySelector('.mainPage');
var animationMain = 'animationMain 0.9s ease';

clickableSpan.addEventListener('click', function() {
    document.body.style.overflow = 'hidden';
    mainPage.style.display = 'inline-flex';
    mainPage.style.animation = animationMain;
});

mainPage.addEventListener('animationend', function() {
    mainPage.style['border-radius'] = '0%';
    mainPage.style.width = '100%';
    mainPage.style.height = '100vh';
    mainPage.style.top = '0';
    mainPage.style.left = '0';
})