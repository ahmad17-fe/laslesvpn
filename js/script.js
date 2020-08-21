//  Sidebar
const toggleMenu = document.querySelector("#toggle_menu");
const closeSidebar = document.querySelector("#close_sidebar");
const sidebar = document.querySelector("#sidebar");

const toggleSidebar = (el, action) => {
	el.addEventListener("click", () => {
		sidebar.classList[action]("active");
	});
};

toggleSidebar(toggleMenu, "add"); // Add class active
toggleSidebar(closeSidebar, "remove"); // Remove class active

/**
 * Testimonial Slider
 */

$('.rev__cus__item__wrap').slick({
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 3,
	nextArrow: '.rev__cus__actb__next',
	prevArrow: '.rev__cus__actb__prev',
	responsive: [{
			breakpoint: 1024,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				infinite: true,
			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
		// You can unslick at a given breakpoint now by adding:
		// settings: "unslick"
		// instead of a settings object
	]
});