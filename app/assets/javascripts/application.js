// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap
//= require_tree .


$(document).ready(function(){

	
	$("#image_image").on('change',function(){
		 $("form#new_image").submit();
	});
	
	$("#save").click(function(){
		var canvas = document.getElementById('my_img');
		var ctx = canvas.getContext("2d");
		var t=setTimeout(function(){
			ctx.drawImage(document.getElementById('textimage'),canvas.width-120,canvas.height-90);
			ctx.drawImage(document.getElementById('otextimage'),0,canvas.height-80);
		var src = canvas.toDataURL();
		var canvasrc = src.replace(/^data:image\/(png|jpg);base64,/, "");
		var ts = Math.round((new Date()).getTime() / 1000);
		$("#final-image").val(canvasrc);
		$("#time").val(ts);
		$("#dwn").submit();
		},1000);
	});

	
	$('#fbshare').click(function() {
		$("#fbshare").html('<img src="/assets/progress.gif">');
	  
		var canvas = document.getElementById('my_img');
		var ctx = canvas.getContext("2d");
		var t=setTimeout(function(){
			ctx.drawImage(document.getElementById('textimage'),canvas.width-120,canvas.height-90);
			ctx.drawImage(document.getElementById('otextimage'),0,canvas.height-80);
				var src = canvas.toDataURL();
				var canvasrc = src.replace(/^data:image\/(png|jpg);base64,/, "");
				var ts = Math.round((new Date()).getTime() / 1000);
				var imgurl = $("#imurl").val();
				$.ajax({
					beforeSend: function(xhr) {xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))},
					url: "/image_save",
					type: "POST",
					data: { 'src': canvasrc,'img_url': imgurl,'id':ts},
					cache: false,
					success: function (response) {
					 $("#fbshare").html('<img src="/assets/MegaPixel_Button_Facebook.png">');
					  $("#final-img").val(response);
						var filename =$("#final-img").val();
						FB.init({appId: "157299074435054", status: true, cookie: true});
						FB.ui(
							{
							  method: 'feed',
							  name: 'ORLY MegaPIxelFX ? Pixelate Yourself!',
							  link: filename,
							  picture: filename,
							  caption: '',
							  description: 'In honor of our new collection, MegaPixel FX, we are giving our fans the opportunity to pixelate themselves!'
							},
							function(response) {
							  if (response && response.post_id) {
							  } else {
							  }
							});

					}
				});
				

				
		  
			},3000);
	

	});
	
	
});


