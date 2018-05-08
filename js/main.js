document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


	function showReg(){
		$('.regBtn').delay(600).fadeOut().fadeIn(200);
		$('.blogBtn').delay(1200).fadeOut().fadeIn(200);
		$('#body').attr('onscroll','').unbind('scroll');
	}
$(document).ready(function(){
	$(window).trigger('resize');
	$('#blog').load('blog.html');
});
var w;
$( window ).resize(function() {
  w = $( window ).width();
});


	$('.regBtn-global').click(function(){
		  console.log('you triggered me');
		  $('.blogBtn').fadeOut();
		  $('.regBtn').fadeOut();
		  $('.fixed-reg-btn').fadeOut();
		  $('#register').css('cursor','url(img/click-back-reg-01.png),auto');
		  $('#scroll-to-btn').attr('href','#register');
	if(w>1920){
		$('#register').css("-webkit-transform","rotate(17deg) scale(3) translateZ(0)");
		$('.cust-form').delay(600).fadeIn(500);
		$('.regBtn').fadeOut();
		$('.blogBtn').fadeOut();
		specialEffect();
	}
	else if(w>1220&&w<1930){
		$('#register').css("-webkit-transform","rotate(17deg) scale(3) translateZ(0)");
		$('.cust-form').delay(600).fadeIn(500);
		$('.regBtn').fadeOut();
		$('.blogBtn').fadeOut();
		specialEffect();
	}else if(w<1220&&w>992&&w!=1024){
		console.log(w);
		$('#register').css("-webkit-transform","rotate(17deg) scale(3) translateZ(0)");
		$('.cust-form').delay(600).fadeIn(500);
		$('.regBtn').fadeOut();
		$('.blogBtn').fadeOut();
		specialEffect();
	}else if(w==1024){
			$('#register').css("-webkit-transform","rotate(17deg) scale(3.3)");
			$('.cust-form').delay(600).css({"width":"45%","top":"146%","left":"18%"}).fadeIn(500);
		$('.regBtn').fadeOut();
		$('.blogBtn').fadeOut();
		specialEffect();
	}

});

	$('.blog-active').click(function(){
		$('.outer-div').fadeOut();
		$('#blog').fadeIn();
		$('.fixed-reg-btn').fadeIn();
		$('#scroll-to-btn').attr('href','#blog');
	});
	$('.blog-active-mobile').click(function(){
		$('.outer-div').fadeOut();
		$('#blog').fadeIn();
	});
		$('.register-active').click(function(){
		$('.outer-div').fadeIn();
		$('#blog').fadeOut();
	});
		$('.register-active-mobile').click(function(){
		$('.outer-div').fadeIn();
		$('#blog').fadeOut();
	});
		$('.fixed-reg-btn').click(function(){
		$('.outer-div').fadeIn();
		$('#blog').fadeOut();
	});
function specialEffect(){
	$('#register').click(function(){
	$('.cust-form').hide();
	$('#register').delay(1500).css("transform","scale(1)");
	$('.regBtn').fadeIn();
	$('.blogBtn').fadeIn();
	$('#thankyou').fadeOut();
	$('#subForm').trigger("reset");
	$('.fixed-reg-btn').fadeOut();
	$('#register').css('cursor','auto');
});

}

