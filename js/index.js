import '../style/index.scss';

import raf from './DOM/statics/request-animation-frame';
import ImageSlider from './components/image-slider';

import MenuToggle from './components/menu-toggle';

(() => {
    const menuToggle = new MenuToggle();

    const imageSlider = new ImageSlider('#homepage-image-slider');

    raf(() => {
        const google = window.google;
        const element = document.getElementById('map');
        if (!element || !google) {
            return;
        }
        const point = new google.maps.LatLng(52.375156, 0.928897);
        const mapConfig = {
                center: point,
                zoom: 14,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                scrollwheel: false
        };
        const map = new google.maps.Map(element, mapConfig);
        const marker = new google.maps.Marker({
            position: point,
            map: map,
            title: 'High Street Chapel Hopton'
        });
    });

})();
