import raf from './statics/request-animation-frame';

class ScrollEvents {

    constructor() {


        this._doc = document.documentElement;
        this._previousScrollPosition = 0;

        window.addEventListener('scroll', () => raf(this.onScroll.bind(this)));

    }

    onScroll() {
        let top = this.getTop();
        if (this.monitorListeners) {
            this.monitors.forEach(item => item(top));
        }
        if (top > this._previousScrollPosition && this.downListeners) {
            this.onScrollDown.forEach(item => item(top));
        } else if (top < this._previousScrollPosition && this.upListeners) {
            this.onScrollUp.forEach(item => item(top));
        }
        this._previousScrollPosition = top;
    }

    getTop() {
        return (window.pageYOffset || this._doc.scrollTop) - (this._doc.clientTop || 0);
    }

}

export default ScrollEvents;
