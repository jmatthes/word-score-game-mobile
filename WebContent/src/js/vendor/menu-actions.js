var CLASS_TO_TOGGLE = "is-active";

function toggleMenu(event, toggle) {
	event.preventDefault();
	toggle.toggleClass(CLASS_TO_TOGGLE);
};	



function menuItemClickedOn(menuItemThatWasClickedOn) {
	handlePreHook(menuItemThatWasClickedOn);
	var idOfDivToShow = menuItemThatWasClickedOn.data("page-to-show");
	console.log('attempt to show page:' + idOfDivToShow);

	$(".menu-page").fadeOut(function(){ $("#" + idOfDivToShow).fadeIn(); });
	if(menuItemThatWasClickedOn.hasClass("left-nav-menu-item")){
		$("#menuLink").click();
	}

};	

function handlePreHook(menuItemThatWasClickedOn) {
	var preHook = menuItemThatWasClickedOn.data("page-pre-hook");
	if(preHook != undefined){
		console.log("Pre hook found:" + preHook);
	//	window[preHook](menuItemThatWasClickedOn);
		window [preHook](menuItemThatWasClickedOn);
		//category="' + categoryIndex + '" data-type="' + typeIndex + '" data-category-type
	}

};	
function fillInWorkoutPageMenu(menuItemThatWasClickedOn) {
	var category = menuItemThatWasClickedOn.data("category");
	var type = menuItemThatWasClickedOn.data("type");
	var categoryType = menuItemThatWasClickedOn.data("category-type");
//	fillInWorkoutPage(workout.categories[category].types[type].category[categoryType]);
	console.log("Loading workout from:" + category + ", " + type +", " + categoryType);
};	





$( document ).ready(function() {

	$('#layout').on("click", "#menuLink", function(event) {
		toggleMenu(event, $(this));
	});
	
	$('#layout').on("click", ".pure-menu-item", function(event) {
		var menuItemThatWasClickedOn = $(this);

		menuItemClickedOn(menuItemThatWasClickedOn);
	});
});



(function (window, document) {

    var layout   = document.getElementById('layout'),
        menu     = document.getElementById('menu'),
        menuLink = document.getElementById('menuLink');

    function toggleClass(element, className) {
        var classes = element.className.split(/\s+/),
            length = classes.length,
            i = 0;

        for(; i < length; i++) {
          if (classes[i] === className) {
            classes.splice(i, 1);
            break;
          }
        }
        // The className is not found
        if (length === classes.length) {
            classes.push(className);
        }

        element.className = classes.join(' ');
    }

    menuLink.onclick = function (e) {
        var active = 'active';

        e.preventDefault();
        toggleClass(layout, active);
        toggleClass(menu, active);
        toggleClass(menuLink, active);
    };

}(this, this.document));