interface ImageSliderOptions {
    interval: number
}

export default class ImageSlider {

    private baseElement: Element;
    private interval: number;
    private images: Element[];

    private classNames = {
        active: 'active-image'
    };
    private index = -1;

    constructor(selector: string, options: ImageSliderOptions = {interval: 4000}) {
        const element = document.querySelector(selector);
        if (element === null) {
            throw new Error(`Selector ${selector} returned no elements`);
        }

        this.baseElement = element;
        this.interval = options.interval;


        if (this.baseElement === null) {
            throw new Error('Unable to attach ImageSlider to base element');
        }

        this.images = [].slice.apply(this.baseElement.querySelectorAll('img'));

        this.assertImages();
        this.loop();
        window.setTimeout(() => this.baseElement.className += ' image-slider--active', 50);
    }

    private get currentImage(): Element | null {
        return this.images[this.index];
    }

    private get lastImage(): Element | null {
        const lastIndex = this.index === 0 ? this.images.length - 1 : this.index - 1;
        return this.images && this.images.length ? this.images[lastIndex] : null;
    }

    private loop(): void {
        this.incrementCounter();

        if (this.currentImage) {
            this.currentImage.className = this.classNames.active;
        }
        if (this.lastImage) {
            this.lastImage.className = '';
        }

        window.setTimeout(this.loop.bind(this), this.interval);
    }

    private incrementCounter(): void {
        this.index = this.index === this.images.length - 1 ? 0 : this.index + 1;
    }

    private assertImages(): void {
        if (this.images.length === 0) {
            throw new Error('No image elements inside ImageSlider base element');
        }
        if (this.images.length === 1) {
            this.images[0].className = this.classNames.active;
            throw new Error('Only one image element inside ImageSlider base element, exiting');
        }
    }
}