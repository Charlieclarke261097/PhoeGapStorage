$( document ).ready(function() {
    alert( "ready!" );
    
    function updateDisplay() {
	$("#launched").text("Application launched: " + launched_count);

}
  var key = "Phone";
    var value = "Iphone";
    window.localStorage.setItem(key,value);
    window.localStorage.getItem(key);
    alert(" my " + key + " is a " + value);
    
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
    
    alert(window.localStorage.length);
    
   var oreobar =  {
       "nutrion":{
        "calories" : "84",
       "fat" : "5.3g",
       "saturates" : "3g",
       "sugars" : "7.3g",
       "salt" : "0.006g"
       }
    }
    var oreobarString = JSON.stringify(oreobar);
    window.localStorage.setItem("nutrion",oreobarString);
    var getoreobar = window.localStorage.getItem("nutrion");
    var oreobarJSON = JSON.parse(getoreobar);
    alert("An oreo bar has " + oreobar.nutrion.calories + " calories");
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


