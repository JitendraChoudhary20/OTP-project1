function onKeyup(event, ele){

    var code = event.which;
    
    console.log("Code : "+code);
    
    if(code > 47 && code < 58){
    
    document.getElementById(ele).focus();
    
    }
    
    }