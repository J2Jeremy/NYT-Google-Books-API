import $ from 'jquery';

class MobileMenu{
	constructor(){
		this.siteHeader = $(".site-header"); //so we can add bg color and transition to mobile nav
		this.menuIcon = $(".site-header__menu-icon");
		this.menuContent = $(".site-header__menu-content"); //shortcut to hidden div containing header links
		this.events();
	}
	
	/* method to handle events */
	events(){//browser doesnt look for events method name, add to constructor
		//bind: anything used in () will be used as the 'this' keyword in toggleTheMenu, test by changing this to 'hello world'
		this.menuIcon.click(this.toggleTheMenu.bind(this));
	}

	/* method to add and remove classes to show/hide mobile menu */
	toggleTheMenu(){
		// this.menuContent is not pointing to our class object, instead it's selecting the DOM element that was clicked
		// sometimes this is useful, say to remove the entire element, add children etc
		// bind 'this' in the method that called the function
		this.menuContent.toggleClass("site-header__menu-content--is-visible");

		this.siteHeader.toggleClass("site-header--is-expanded");//so we can add bg color and trasnition to mobile nav
		this.menuIcon.toggleClass("site-header__menu-icon--close-x"); //transition 3 bars into 2 and form an X
	}


}
export default MobileMenu;

