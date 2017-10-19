$( document ).ready(function() {
    alert( "ready!" );
    
    function updateDisplay() {
	$("#launched").text("Application launched: " + launched_count);

}
  var key = "Phone";
    var value = "Iphone";
    window.localStorage.setItem(key,value);
    window.localStorage.getItem(key);
    alert("my"+key+"is a"+ value);
    
    var key2 = "drink";
    var value2 ="cola";
    window.localStorage.setItem(key2,value2);
    
    
    var key3 = "bag";
    var value3 = "Addidas";
     window.localStorage.setItem(key3,value3);
    
    
    var key4 = "pen";
    var value4 = "black";
    window.localStorage.setItem(key4,value4);
     
    var key5 = "phone_2";
    var value5 = "HTCONE";
    window.localStorage.setItem(key4,value4);
    
    
});
    
 alert("hello");   
//event listner defined for device ready event
document.addEventListener("deviceready", onDeviceReady, false);


// device APIs are available
//Event handlers for the resume and pause events
    function onDeviceReady() {
	//Event lisntners defined
	
	
	
	updateDisplay();
	    
	alert("device ready");
    }


