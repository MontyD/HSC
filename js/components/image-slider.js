import resizeEvent from '../DOM/resize-event';

export default class ImageSlider {

    constructor(selector, options = {}) {
        this.images = [];
        this.baseElement = document.querySelector(selector);
        this.interval = options.interval || 4000;
        this.sizes = options.sizes || {
            large: '1100',
            medium: '800',
            small: '550'
        };
        this.classNames = {
            active: 'active-image',
            next: 'next-image'
        };
        this.index = 0;

        if (!this.baseElement) {
            throw new Error('Unable to attach ImageSlider to base element');
        }

        resizeEvent.addListener(this.setWidth.bind(this));
        this.setWidth(resizeEvent.getWidth());
        this.getImages();
        this.createImageHolders();
        this.loop();
    }

    loop() {
        let image = new Image();
        let imageSource = '';
        this.index++;
        if (this.index >= this.images.length) {
            this.index = 0;
        }
        imageSource = this.images[this.index][this.width];
        image.src = imageSource;
        image.addEventListener('load', this.imageLoad.bind(this, imageSource));
    }

    imageLoad(imageSource) {
        this.nextImage.style.backgroundImage = `url("${imageSource}")`;
        this.nextImage.className = this.classNames.active;
        this.activeImage.className = this.classNames.next;
        this.getImagesFromDOM();
        window.setTimeout(this.loop.bind(this), this.interval);
    }

    getImages() {
        const childNodes = [].slice.apply(this.baseElement.children);
        this.images = childNodes.map(node => {
            return {
                large: node.dataset['imgLarge'],
                medium: node.dataset['imgMedium'],
                small: node.dataset['imgSmall']
            };
        });
    }

    getImagesFromDOM() {
        this.activeImage = this.baseElement.querySelector('.' + this.classNames.active);
        this.nextImage = this.baseElement.querySelector('.' + this.classNames.next);
    }

    setWidth(width) {
        if (width < this.sizes.small) {
            this.width = 'small';
        } else if (width < this.sizes.medium) {
            this.width = 'medium';
        } else {
            this.width = 'large';
        }
    }

    createImageHolders() {
        this.activeImage = document.createElement('div');
        this.nextImage = document.createElement('div');
        this.activeImage.className = 'active-image';
        this.nextImage.className = 'next-image';
        this.baseElement.innerHTML = '';
        this.baseElement.appendChild(this.activeImage);
        this.baseElement.appendChild(this.nextImage);
    }

}