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



