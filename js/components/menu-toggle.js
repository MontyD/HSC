export default class MenuToggle {

    constructor() {
        this.menuActive = false;
        this.clickTarget = document.getElementsByClassName('navbar-burger')[0];
        this.menuTarget = document.getElementsByClassName('navbar-menu')[0];

        if (!this.clickTarget || !this.menuTarget) {
            throw new ('Unable to attach menu toggle to elements');
        }

        this.clickTarget.addEventListener('click', this.toggleMenu.bind(this));
        window.addEventListener('click', this.closeMenu.bind(this));
    }

    toggleMenu(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        if (this.menuActive) {
            this.closeMenu();
        } else {
            this.openMenu();
        }
    }

    openMenu() {
        this.menuActive = true;
        this.menuTarget.classList.add('is-active');
        this.clickTarget.classList.add('is-active');
    }

    closeMenu() {
        this.menuActive = false;
        this.menuTarget.classList.remove('is-active');
        this.clickTarget.classList.remove('is-active');
    }

}