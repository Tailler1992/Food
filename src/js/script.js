import tabs from './modules/tabs';
import modal from './modules/modal';
import cards from './modules/cards';
import slider from './modules/slider';
import timer from './modules/timer';

window.addEventListener('DOMContentLoaded', function () {
    tabs();    
    modal();
    slider();
    cards();    
    timer();
});