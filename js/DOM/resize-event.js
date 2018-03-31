import raf from './statics/request-animation-frame';

class ResizeEvent {

    constructor() {
        this.listeners = [];
        window.addEventListener('resize', () => raf(this.onResize.bind(this)));
    }

    getWidth() {
        return window.innerWidth || document.body.clientWidth;
    }

    onResize(e) {
        this.listeners.forEach(listener => listener(this.getWidth(), e));
    }

    addListener(cb) {
        return this.listeners.push(cb);
    }

    removeListener(index) {
        this.listeners.splice(index, 1);
    }

}

export default new ResizeEvent();
