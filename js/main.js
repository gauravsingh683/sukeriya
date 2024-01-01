function loginoption(){
    document.getElementById("mycoupon").style.visibility = 'visible';
    document.getElementById("loginblur").style.opacity = "0.1";
    document.getElementById("blur").style.opacity = "0.1";
    document.getElementById("footerarea").style.opacity = "0.1";
}
function closeCoupon (){
    document.getElementById("mycoupon").style.visibility = 'hidden';
    document.getElementById("loginblur").style.opacity = "1";
    document.getElementById("blur").style.opacity = "1";
    document.getElementById("footerarea").style.opacity = "1";
}
