export default class MenuToggle {

    private menuActive = false;

    constructor(
        private clickTarget: Element = document.getElementsByClassName('navbar-burger')[0],
        private menuTarget: Element = document.getElementsByClassName('navbar-menu')[0]
    ) {

        if (!this.clickTarget || !this.menuTarget) {
            throw new Error('Unable to attach menu toggle to elements');
        }

        this.clickTarget.addEventListener('click', this.toggleMenu.bind(this));
        window.addEventListener('click', this.closeMenu.bind(this));
    }

    public toggleMenu(evt: MouseEvent): void {
        evt.preventDefault();
        evt.stopPropagation();
        if (this.menuActive) {
            this.closeMenu();
        } else {
            this.openMenu();
        }
    }

    public openMenu() {
        this.menuActive = true;
        this.menuTarget.classList.add('is-active');
        this.clickTarget.classList.add('is-active');
    }

    public closeMenu() {
        this.menuActive = false;
        this.menuTarget.classList.remove('is-active');
        this.clickTarget.classList.remove('is-active');
    }

}