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
<script src="http://connect.facebook.net/en_US/all.js"></script>
function canvas() {

  var img1 = document.getElementById('my_img')

  var pixelOpts = [ { resolution: 2 } ]
  var pixelimg1 = img1.closePixelate( pixelOpts )

  var range = document.getElementById('range')
  var output = document.getElementById('output')
//$("#fbshare").
  $("#v-slider").slider({

    range: "min",
    min: 0,
    max: 100,
    value: 2,
    slide: function (event, ui) {
        $("#output").html(ui.value);
        
    var res = ui.value ;
    res = Math.floor( res / 2 ) * 2
    res = Math.max( 2, Math.min( 100, res ) )
    output.textContent = res
    // console.log( res );
    pixelOpts = [ { resolution: res } ]
    pixelimg1.render( pixelOpts )
        
        
    }
});
}
$(document).ready(function(){
	$("#image_image").on('change',function(){
	  $("#new_image").submit();
	});
	
	$("#image_image").on('change',function(){
		 $("#new_image").submit();
	});
	
	$("#save").click(function(){
		var canvas = document.getElementById('my_img');
		var ctx = canvas.getContext("2d");
		var t=setTimeout(function(){ctx.drawImage(document.getElementById('textimage'),canvas.width-100,canvas.height-75)
		var src = canvas.toDataURL();
		var canvasrc = src.replace(/^data:image\/(png|jpg);base64,/, "");
		var ts = Math.round((new Date()).getTime() / 1000);
		$("#final-image").val(canvasrc);
		$("#time").val(ts);
		$("#dwn").submit();
		},1000);
	});

	
	$('#fbshare').click(function() {
	  
	  
		var canvas = document.getElementById('my_img');
		var ctx = canvas.getContext("2d");
		var t=setTimeout(function(){
			ctx.drawImage(document.getElementById('textimage'),canvas.width-100,canvas.height-75);
				var src = canvas.toDataURL();
				var canvasrc = src.replace(/^data:image\/(png|jpg);base64,/, "");
				var ts = Math.round((new Date()).getTime() / 1000);
		
				$.ajax({
					beforeSend: function(xhr) {xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))},
					url: "/image_save",
					type: "POST",
					data: { 'src': canvasrc,'img_url': "<%=@image.image_url%>",'id':ts},
					cache: false,
					success: function (response) {
					  $("#final-img").val(response);
				
						return true;
					}
				});
				
					var filename =$("#final-img").val();
					FB.init({appId: "342990409138730", status: true, cookie: true});
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
				
		  
			},3000);
	

	});
	
	
});


