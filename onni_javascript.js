function setCookie( name, value, expiredays ) { 
 var todayDate = new Date(); 
  todayDate.setDate( todayDate.getDate() + expiredays ); 
  document.cookie = name + "=" + escape( value ) + "; path=/; expires=" + todayDate.toGMTString() + ";" 
 }
<br />
function closeWin() { 
 if ( document.notice_form.chkbox.checked ){ 
  setCookie( "maindiv", "done" , 1 ); 
 } 
 document.all['divpop'].style.display = "none";
}


