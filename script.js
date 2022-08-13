const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

const navbar = document.querySelector(".navbar");
const sectionOne = document.querySelector(".firstSection");

const sectionOneOptions = {
	rootMargin: "0px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver ( function( entries, sectionOneObserver ) {
	entries.forEach( entry => {
		if ( !entry.isIntersecting ) {
			navbar.classList.add( "nav-scrolled" );
		} else {
			navbar.classList.remove("nav-scrolled" );
		}
	});
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));


