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
function checkAll(frm)
{
    var rs = (frm.check_all.checked)?true:false;
	for(i=0;i<frm.elements.length;i++)
	{
	  	if(frm.elements[i].id == 'iId')
  		{
			frm.elements[i].checked = rs;
		}

	}  
}


function Action(frm,val) {
	//alert('akaka');
	document.getElementById('action_val').value=val;
	//alert(document.getElementById('action_val').value);
	frm.action_val.value=val;
  y = getCheckCount(frm);
  if(y > 0) {
    //document.getElementById('action_val').value=val;
    frm.submit();
    return true;
  }else{
   alert("Please Select a Record.");
   return false; 
  }
  
}

function getCheckCount(frm)
{
	var x=0;
	for(i=0;i < frm.elements.length;i++)
	{	if (frm.elements[i].id == 'iId' && frm.elements[i].checked == true) 
			{x++;}
	}
	return x;
}



