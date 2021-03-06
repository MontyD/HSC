import ImageSlider from './components/image-slider';

window.setTimeout(() => {
    const imageSlider = new ImageSlider('#homepage-image-slider');

    const google: any = (window as any).google;
    const element = document.getElementById('map');
    if (!element || !google) {
        return;
    }
    const point: any = new google.maps.LatLng(52.375156, 0.928897);
    const mapConfig = {
            center: point,
            zoom: 14,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollwheel: false
    };
    const map: any = new google.maps.Map(element, mapConfig);
    const marker: any = new google.maps.Marker({
        position: point,
        map: map,
        title: 'High Street Chapel Hopton'
    });
}, 10);