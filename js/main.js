window.onscroll = () => {
  //navbar, on scroll add class / remove
	   var navbar = $("#navbar");
	   if (this.scrollY <= window.innerHeight) {
		   navbar.removeClass('scroll');
	   } else {
		   navbar.addClass('scroll');
	   }
};

jQuery(document).ready(function(){
   // Do something with the DOM
   jQuery('#head_wrap .playgate').click(function(){
     jQuery('.main_play').addClass('active');
    jQuery('body').css('overflow','hidden');
       jQuery('#main_vid').attr('src', 'https://www.youtube.com/embed/feA64wXhbjo?rel=0&amp;showinfo=0;autoplay=1');
   });
    jQuery('.main_play .closex').click(function(){
     jQuery('.main_play').removeClass('active');
        jQuery('body').css('overflow','visible');
        jQuery('#main_vid').attr('src', '');
   });
});
jQuery( document ).ready(function() {
	
	// Cache selectors
	var lastId;
	var topMenu = $(".sidemenu");
    var winH = $( window ).height();
	// All list items
	var menuItems = topMenu.find(".ap");
    var bmenuItems = topMenu.find(".ap2");
	// Anchors corresponding to menu items
	scrollItems = menuItems.map(function(){
	  var item = $($(this).attr("href"));
	  if (item.length) { return item; }
	});

	// Bind click handler to menu items
	// so we can get a fancy scroll animation
	menuItems.click(function(e){
	  var href = $(this).attr("href");
	  var offsetTop = href === "#" ? 0 : $(href).offset().top - winH/2.8;
	  $('html, body').stop().animate({ 
		  scrollTop: offsetTop
	  }, 300);
	  e.preventDefault();
	});
    bmenuItems.click(function(e){
	  var href = $(this).attr("href");
	  var offsetTop = href === "#" ? 0 : $(href).offset().top - winH/2.8;
	  $('html, body').stop().animate({ 
		  scrollTop: offsetTop
	  }, 300);
	  e.preventDefault();
	});
	// Bind to scroll
	$(window).scroll(function(){
	   // Get container scroll position
	   var fromTop = $(this).scrollTop() + winH/2;
	   
	   // Get id of current scroll item
	   var cur = scrollItems.map(function(){
		 if ($(this).offset().top < fromTop)
		   return this;
	   });
	   // Get the id of the current element
	   cur = cur[cur.length-1];
	   var id = cur && cur.length ? cur[0].id : "";
	   
	   if (lastId !== id) {
		   lastId = id;
		   // Set/remove active class
		   menuItems.removeClass("active");
		   $("a[href='#"+id+"']").addClass("active");
	   }                
	});
});
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}


/*jQuery( document ).ready(function() {
	
	jQuery(".sidemenu .ap").click(function() {
		jQuery(".sidemenu .ap").removeClass('active');
		jQuery(this).addClass('active');
	});

});
window.addEventListener("hashchange", function () {
    window.scrollTo(window.scrollX, window.scrollY - (screen.height)/3);
});
*/