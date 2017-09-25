window.onscroll = () => {
  //navbar, on scroll add class / remove
	   var navbar = $("#navbar");
	   if (this.scrollY <= window.innerHeight) {
		   navbar.removeClass('scroll');
	   } else {
		   navbar.addClass('scroll');
	   }
};
$('a').on('click touchend', function(e) {
    var el = $(this);
    var link = el.attr('href');
    window.location = link;
});
jQuery(document).ready(function(){
   // Do something with the DOM
   jQuery('#head_wrap .playgate').on('click touchend', function(e){
     jQuery('.main_play').addClass('active');
    jQuery('body').css('overflow','hidden');
       jQuery('#main_vid').attr('src', 'https://www.youtube.com/embed/feA64wXhbjo?rel=0&amp;showinfo=0;autoplay=1');
   });
    jQuery('.main_play .closex').on('click touchend', function(e){
     jQuery('.main_play').removeClass('active');
        jQuery('body').css('overflow','visible');
        jQuery('#main_vid').attr('src', '');
   });
});
jQuery(document).ready(function(){
   // Do something with the DOM
   jQuery('#head_wrap .playgate').on('click touchend', function(e){
     jQuery('.main_play').addClass('active');
    jQuery('body').css('overflow','hidden');
       jQuery('#main_vid2').attr('src', 'https://www.youtube.com/embed/bR-s4ReIxJo?rel=0&amp;showinfo=0;autoplay=1');
   });
    jQuery('.main_play .closex').on('click touchend', function(e){
     jQuery('.main_play').removeClass('active');
        jQuery('body').css('overflow','visible');
        jQuery('#main_vid2').attr('src', '');
   });
});
jQuery(document).ready(function(){
   // Do something with the DOM
   jQuery('#navbar .navburger').on('click touchend', function(e){
     jQuery('.nav_page').addClass('active');
    jQuery('body').css('overflow','hidden');
   });
    jQuery('.nav_page .np_close').on('click touchend', function(e){
     jQuery('.nav_page').removeClass('active');
        jQuery('body').css('overflow','visible');
   });
});
jQuery(document).ready(function(){
    $('.np_back').on('click touchend', function(e){
        parent.history.back();
        return false;
    });
});
jQuery(document).ready(function(){
   jQuery('.age_locals1').on('click touchend', function(e){
       jQuery('.age_locals1').addClass('active');
       jQuery('.age_locals2').removeClass('active');
       jQuery('.age_localv').fadeOut('fast',function(){
       jQuery(this).attr('src', 'age_fbaul.html').fadeIn('fast');
    });
   });
    jQuery('.age_locals1').trigger('click');
   jQuery('.age_locals2').on('click touchend', function(e){
       jQuery('.age_locals2').addClass('active');
       jQuery('.age_locals1').removeClass('active');
       jQuery('.age_localv').fadeOut('fast',function(){
       jQuery(this).attr('src', 'age_lxfac.html').fadeIn('fast');
    });
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
	menuItems.on('click touchend', function(e){
	  var href = $(this).attr("href");
	  var offsetTop = href === "#" ? 0 : $(href).offset().top - winH/2.8;
	  $('html, body').stop().animate({ 
		  scrollTop: offsetTop
	  }, 300);
	  e.preventDefault();
	});
    bmenuItems.on('click touchend', function(e){
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
      dots[i].className = dots[i].className.replace("active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += "active";
};
var slideIndex2 = 1;
showSlides2(slideIndex2);

function plusSlides2(n) {
  showSlides2(slideIndex2 += n);
}

function currentSlide2(n) {
  showSlides2(slideIndex2 = n);
}

function showSlides2(n) {
  var ib;
  var slides2 = document.getElementsByClassName("mySlides2");
  var dots2 = document.getElementsByClassName("dot2");
  if (n > slides2.length) {slideIndex2 = 1}    
  if (n < 1) {slideIndex2 = slides2.length}
  for (i = 0; i < slides2.length; i++) {
      slides2[i].style.display = "none";  
  }
  for (i = 0; i < dots2.length; i++) {
      dots2[i].className = dots2[i].className.replace("active", "");
  }
  slides2[slideIndex2-1].style.display = "block";  
  dots2[slideIndex2-1].className += "active";
};
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