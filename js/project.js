

$(document).ready(function(){
	$('.autoplay').slick({
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  autoplay: true,
	  autoplaySpeed: 1000,
	  arrows:true,
	  variableWidth: true,
	  dots: true,
	});

	$('.ssk-facebook').on('click',function(){
	  FB.ui({
	    method: 'share',
	    href: window.location.href,
	  }, function(response){});
	});
});

var today = new Date();
// What happens next depends on whether you want UTC or locale time...
// assuming locale time in this example...
//$('#weekday').html(today.toDateString().substring(3,3));
$('#date').html( today.toDateString().substring(4) );

$('.btn.yellow').click(function() {
	var category = $(this).attr("category");

	$(".post").hide();
	$(".post."+category).show();

} );

$('#header h2 a').click(function() {
	$(".post").show();

} );

$(".post.toread .contentcontainer div h1").after($("<h1>", {class:"category toread"}).text("to read"));
$(".post.tosee .contentcontainer div h1").after($("<h1>", {class:"category tosee"}).text("to see"));
$(".post.tomeet .contentcontainer div h1").after($("<h1>", {class:"category tomeet"}).text("to meet"));

//$shop.append($('<button>', {id:'purchase'}).text('PURCHASE')) 
//$shop.append($('<p>', {class:'message'}));


window.fbAsyncInit = function() {
      FB.init({
        appId      : '941947382529421',
        xfbml      : true,
        version    : 'v2.4'
      });
    };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));