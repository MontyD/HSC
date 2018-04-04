import resizeEvent from '../DOM/resize-event';

export default class ImageSlider {

    constructor(selector, options = {}) {
        this.baseElement = document.querySelector(selector);
        this.interval = options.interval || 4000;
        this.classNames = {
            active: 'active-image',
        };
        this.index = -1;

        if (!this.baseElement) {
            throw new Error('Unable to attach ImageSlider to base element');
        }

        this.images = [].slice.apply(this.baseElement.querySelectorAll('img'));

        this.assertImages();
        this.loop();
        window.setTimeout(() => this.baseElement.className += ' image-slider--active', 50);
    }

    get currentImage() { 
        return this.images[this.index];
    }

    get lastImage() {
        const lastIndex = this.index === 0 ? this.images.length - 1 : this.index - 1;
        return this.images && this.images.length ? this.images[lastIndex] : null;
    }

    loop() {
        this.incrementCounter();

        this.currentImage.className = this.classNames.active;
        if (this.lastImage) {
            this.lastImage.className = '';
        }
        
        window.setTimeout(this.loop.bind(this), this.interval);
    }

    incrementCounter() {
        this.index = this.index === this.images.length - 1 ? 0 : this.index + 1;
    }

    assertImages() {
        if (this.images.length === 0) {
            throw new Error('No image elements inside ImageSlider base element');
        }
        if (this.images.length === 1) {
            this.images[0].className = this.classNames.active;
            throw new Error('Only one image element inside ImageSlider base element, exiting');
        }
    }
}