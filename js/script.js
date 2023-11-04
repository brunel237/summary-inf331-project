jQuery(document).ready(function($) {
	
	"use strict";
	
//------- Notifications Dropdowns
  $('.top-area > .setting-area > li').on("click",function(){
	$(this).siblings().children('div').removeClass('active');
	$(this).children('div').addClass('active');
	return false;
  });
//------- remove class active on body
  $("body *").not('.top-area > .setting-area > li').on("click", function() {
	$(".top-area > .setting-area > li > div").removeClass('active');		
 });
	

//--- user setting dropdown on topbar	
$('.user-img').on('click', function() {
	$('.user-setting').toggleClass("active");
	return false;
});	
	
//--- side message box	
$('.friendz-list > li, .chat-users > li').on('click', function() {
	$('.chat-box').addClass("show");
	return false;
});	
	$('.close-mesage').on('click', function() {
		$('.chat-box').removeClass("show");
		return false;
	});	
	
//------ scrollbar plugin
	if ($.isFunction($.fn.perfectScrollbar)) {
		$('.dropdowns, .twiter-feed, .invition, .followers, .chatting-area, .peoples, #people-list, .chat-list > ul, .message-list, .chat-users, .left-menu').perfectScrollbar();
	}

/*--- socials menu scritp ---*/	
	$('.trigger').on("click", function() {
	    $(this).parent(".menu").toggleClass("active");
	  });
	
/*--- emojies show on text area ---*/	
	$('.add-smiles > span').on("click", function() {
	    $(this).parent().siblings(".smiles-bunch").toggleClass("active");
	  });

// delete notifications
$('.notification-box > ul li > i.del').on("click", function(){
    $(this).parent().slideUp();
	return false;
  }); 	

/*--- socials menu scritp ---*/	
	$('.f-page > figure i').on("click", function() {
	    $(".drop").toggleClass("active");
	  });

//===== Search Filter =====//
	(function ($) {
	// custom css expression for a case-insensitive contains()
	jQuery.expr[':'].Contains = function(a,i,m){
	  return (a.textContent || a.innerText || "").toUpperCase().indexOf(m[3].toUpperCase())>=0;
	};

	function listFilter(searchDir, list) { 
	  var form = $("<form>").attr({"class":"filterform","action":"#"}),
	  input = $("<input>").attr({"class":"filterinput","type":"text","placeholder":"Search Contacts..."});
	  $(form).append(input).appendTo(searchDir);

	  $(input)
	  .change( function () {
		var filter = $(this).val();
		if(filter) {
		  $(list).find("li:not(:Contains(" + filter + "))").slideUp();
		  $(list).find("li:Contains(" + filter + ")").slideDown();
		} else {
		  $(list).find("li").slideDown();
		}
		return false;
	  })
	  .keyup( function () {
		$(this).change();
	  });
	}

//search friends widget
	$(function () {
	  listFilter($("#searchDir"), $("#people-list"));
	});
	}(jQuery));	

//progress line for page loader
	$('body').show();
	NProgress.start();
	setTimeout(function() { NProgress.done(); $('.fade').removeClass('out'); }, 2000);
	
//--- bootstrap tooltip	
	$(function () {
	  $('[data-toggle="tooltip"]').tooltip();
	});
	
// Sticky Sidebar & header
	if($(window).width() < 769) {
		jQuery(".sidebar").children().removeClass("stick-widget");
	}

	if ($.isFunction($.fn.stick_in_parent)) {
		$('.stick-widget').stick_in_parent({
			parent: '#page-contents',
			offset_top: 60,
		});

		
		$('.stick').stick_in_parent({
		    parent: 'body',
            offset_top: 0,
		});
		
	}
	
/*--- topbar setting dropdown ---*/	
	$(".we-page-setting").on("click", function() {
	    $(".wesetting-dropdown").toggleClass("active");
	  });	
	  
/*--- topbar toogle setting dropdown ---*/	
$('#nightmode').on('change', function() {
    if ($(this).is(':checked')) {
        // Show popup window
        $(".theme-layout").addClass('black');	
    }
	else {
        $(".theme-layout").removeClass("black");
    }
});

//chosen select plugin
if ($.isFunction($.fn.chosen)) {
	$("select").chosen();
}

//----- add item plus minus button
if ($.isFunction($.fn.userincr)) {
	$(".manual-adjust").userincr({
		buttonlabels:{'dec':'-','inc':'+'},
	}).data({'min':0,'max':20,'step':1});
}	
	
if ($.isFunction($.fn.loadMoreResults)) {	
	$('.loadMore').loadMoreResults({
		displayedItems: 3,
		showItems: 1,
		button: {
		  'class': 'btn-load-more',
		  'text': 'Load More'
		}
	});	
}
	//===== owl carousel  =====//
	if ($.isFunction($.fn.owlCarousel)) {
		$('.sponsor-logo').owlCarousel({
			items: 6,
			loop: true,
			margin: 30,
			autoplay: true,
			autoplayTimeout: 1500,
			smartSpeed: 1000,
			autoplayHoverPause: true,
			nav: false,
			dots: false,
			responsiveClass:true,
				responsive:{
					0:{
						items:3,
					},
					600:{
						items:3,

					},
					1000:{
						items:6,
					}
				}

		});
	}
	
// slick carousel for detail page
	if ($.isFunction($.fn.slick)) {
	$('.slider-for-gold').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		slide: 'li',
		fade: false,
		asNavFor: '.slider-nav-gold'
	});
	
	$('.slider-nav-gold').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.slider-for-gold',
		dots: false,
		arrows: true,
		slide: 'li',
		vertical: true,
		centerMode: true,
		centerPadding: '0',
		focusOnSelect: true,
		responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				infinite: true,
				vertical: false,
				centerMode: true,
				dots: false,
				arrows: false
			}
		},
		{
			breakpoint: 641,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				infinite: true,
				vertical: true,
				centerMode: true,
				dots: false,
				arrows: false
			}
		},
		{
			breakpoint: 420,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				infinite: true,
				vertical: false,
				centerMode: true,
				dots: false,
				arrows: false
			}
		}	
		]
	});
}
	
//---- responsive header
	
$(function() {

	//	create the menus
	$('#menu').mmenu();
	$('#shoppingbag').mmenu({
		navbar: {
			title: 'General Setting'
		},
		offCanvas: {
			position: 'right'
		}
	});

	//	fire the plugin
	$('.mh-head.first').mhead({
		scroll: {
			hide: 200
		}
		
	});
	$('.mh-head.second').mhead({
		scroll: false
	});

	
});		

//**** Slide Panel Toggle ***//
	  $("span.main-menu").on("click", function(){
	     $(".side-panel").addClass('active');
		  $(".theme-layout").addClass('active');
		  return false;
	  });

	  $('.theme-layout').on("click",function(){
		  $(this).removeClass('active');
	     $(".side-panel").removeClass('active');
		  
	     
	  });

	  
// login & register form
	$('button.signup').on("click", function(){
		$('.login-reg-bg').addClass('show');
		return false;
	  });
	  
	  $('.already-have').on("click", function(){
		$('.login-reg-bg').removeClass('show');
		return false;
	  });
	
//----- count down timer		
	if ($.isFunction($.fn.downCount)) {
		$('.countdown').downCount({
			date: '11/12/2018 12:00:00',
			offset: +10
		});
	}
	
/** Post a Comment **/
jQuery(".post-comt-box textarea").on("keydown", function(event) {

	if (event.keyCode == 13) {
		var comment = jQuery(this).val();
		var parent = jQuery(".showmore").parent("li");
		var comment_HTML = '	<li><div class="comet-avatar"><img src="images/resources/comet-1.jpg" alt=""></div><div class="we-comment"><div class="coment-head"><h5><a href="time-line.html" title="">Jason borne</a></h5><span>1 year ago</span><a class="we-reply" href="#" title="Reply"><i class="fa fa-reply"></i></a></div><p>'+comment+'</p></div></li>';
		$(comment_HTML).insertBefore(parent);
		jQuery(this).val('');
	}
}); 
/** Post a publication **/	

//inbox page 	
//***** Message Star *****//  
    $('.message-list > li > span.star-this').on("click", function(){
    	$(this).toggleClass('starred');
    });


//***** Message Important *****//
    $('.message-list > li > span.make-important').on("click", function(){
    	$(this).toggleClass('important-done');
    });

    

// Listen for click on toggle checkbox
	$('#select_all').on("click", function(event) {
	  if(this.checked) {
	      // Iterate each checkbox
	      $('input:checkbox.select-message').each(function() {
	          this.checked = true;
	      });
	  }
	  else {
	    $('input:checkbox.select-message').each(function() {
	          this.checked = false;
	      });
	  }
	});


	$(".delete-email").on("click",function(){
		$(".message-list .select-message").each(function(){
			  if(this.checked) {
			  	$(this).parent().slideUp();
			  }
		});
	});

// change background color on hover
	$('.category-box').hover(function () {
		$(this).addClass('selected');
		$(this).parent().siblings().children('.category-box').removeClass('selected');
	});
	
	
//------- offcanvas menu 

	const menu = document.querySelector('#toggle');  
	const menuItems = document.querySelector('#overlay');  
	const menuContainer = document.querySelector('.menu-container');  
	const menuIcon = document.querySelector('.canvas-menu i');  

	function toggleMenu(e) {
		menuItems.classList.toggle('open');
		menuContainer.classList.toggle('full-menu');
		menuIcon.classList.toggle('fa-bars');
		menuIcon.classList.add('fa-times');
		e.preventDefault();
	}

	if( menu ) {
		menu.addEventListener('click', toggleMenu, false);	
	}
	
// Responsive nav dropdowns
	$('.offcanvas-menu li.menu-item-has-children > a').on('click', function () {
		$(this).parent().siblings().children('ul').slideUp();
		$(this).parent().siblings().removeClass('active');
		$(this).parent().children('ul').slideToggle();
		$(this).parent().toggleClass('active');
		return false;
	});	
	


});//document ready end



function load_auth_container(id, id2){
	let container = document.getElementById(id);
	let container2 = document.getElementById(id2);
	var temp = container2.innerHTML
	container2.innerHTML = container.innerHTML
	container.innerHTML = temp
}


//--------------------------------------------------------------------------------------------------

//Form Login Control
var form = document.querySelector("div#login_container form");
var usernameInput = document.getElementById("username");
var passwordInput = document.getElementById("password");

// usernameInput.addEventListener("input", function(){
// 	validateUsername();
// });
// usernameInput.addEventListener("input", function(){
// 	validatePassword();
// });

function validateUsername() {
	var username = usernameInput.value;
	var usernameLength = username.length;
  
	if (usernameLength < 3 || usernameLength > 20) {
	  usernameInput.setCustomValidity("Username must be between 3 and 20 characters.");
	} else {
	  usernameInput.setCustomValidity("");
	}
}

function validatePassword() {
	var password = passwordInput.value;
	var passwordLength = password.length;
  
	if (passwordLength < 6 || passwordLength > 12) {
	  passwordInput.setCustomValidity("Password must be between 6 and 12 characters.");
	} else {
	  passwordInput.setCustomValidity("");
	}
}


function isValidEmail(email) {
	var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
}

// ---------------------------------------------------------------------------------------------------------------------

var loginForm = document.querySelector("div#login_container form");

loginForm.addEventListener("submit", function(event) {
  event.preventDefault();

  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  var formData = {
    username: username,
    password: password
  };

  sendLoginRequest(formData);
});


function sendLoginRequest(formData) {
	var xhr = new XMLHttpRequest();
	xhr.open("POST", "http://127.0.0.1:8000/api/auth/login/", true);
	xhr.setRequestHeader("Content-Type", "application/json");

	xhr.onreadystatechange = function() {
		if (xhr.readyState === XMLHttpRequest.DONE) {
			if (xhr.status === 200 || xhr.status === 201) {
			var response = JSON.parse(xhr.responseText);
			var authToken = response.token;
			var userData = response.user;

			localStorage.setItem("authToken", authToken);
			localStorage.setItem("userData", JSON.stringify(userData));

			window.location.href = "index.html";
			} else {
				var response = JSON.parse(xhr.responseText);
				var errorMessage = document.getElementById("errorMessage");
				errorMessage.innerHTML = response.message;
			}
		}
	}
	xhr.send(JSON.stringify(formData));
}

function getData(invoker, url, choice_name){
	var xhr = new XMLHttpRequest();
	xhr.open("GET", url, true);
	xhr.setRequestHeader("Content-Type", "application/json");
	xhr.setRequestHeader("Authorization", "Token "+ localStorage.getItem("authToken") );


	xhr.onreadystatechange = function() {
		if (xhr.readyState === XMLHttpRequest.DONE) {
			if (xhr.status === 200 || xhr.status === 201) {
			var response = JSON.parse(xhr.responseText);
			
			response.forEach(element => {
				var new_div = `<div class="d-flex"  style="font-size: 0.75em; padding: 0.5em 0em">
					<div style="width: 70%;">
						${element.course.course_code} - 
						${element.course.course_name} - 
						${element.level.level} -
						department of : ${element.department.department_of}
					</div>
					<i class="mtrl-select"></i>
					<input type="checkbox" id="${choice_name}-${element.id}" name=${choice_name} required="required" style="width: 20%;"/>
				</div>`

				invoker.innerHTML += new_div
			}); 

			} else {
				var response = JSON.parse(xhr.responseText);
				invoker.innerHTML = response.message
			}
		}
	}
	xhr.send();
}

function displayChoiceContent(id){
	if (id == "student-regis-radio"){
		document.getElementById("student-regis").style.display = "block"
		var stud_div = document.getElementById("courses-list-1")
		stud_div.innerHTML = ""
		document.getElementById("se-regis").style.display = "none"
		document.getElementById("lecturer-regis").style.display = "none"

		getData(stud_div, "http://127.0.0.1:8000/api/courses/details/", "courses_attending")
	}
	else if (id == "se-regis-radio"){
		document.getElementById("se-regis").style.display = "block"
		var stud_div = document.getElementById("courses-list-2")
		stud_div.innerHTML = ""
		document.getElementById("student-regis").style.display = "none"
		document.getElementById("lecturer-regis").style.display = "none"

		getData(stud_div, "http://127.0.0.1:8000/api/courses/details/", "courses_attending")
	}
	else{
		document.getElementById("lecturer-regis").style.display = "block"
		var stud_div = document.getElementById("courses-list-3")
		stud_div.innerHTML = ""
		document.getElementById("student-regis").style.display = "none"
		document.getElementById("se-regis").style.display = "none"

		getData(stud_div, "http://127.0.0.1:8000/api/courses/details/", "lectures")
	}
}
var image = document.getElementById('profile_picture')

image.addEventListener('onchange', ()=>{
	var display_div = document.getElementById("profile_display");
	var img = document.querySelector("#profile_display img");
	display_div.style.display = "block";
	img.scr = image.files[0]
});