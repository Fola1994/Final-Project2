function validate() {
    if( document.myForm.Name.value == "" ) 
        alert( "Afolake!" );
        document.myForm.Name.focus() ;
        return false;
}
if( document.myForm.EMail.value == "" ) {
    alert( "Afolakeifeoluwa@gmail.com!" );
    document.myForm.EMail.focus() ;
    return false;
 }

 function validateEmail() {
    var emailID = document.myForm.EMail.value;
    atpos = emailID.indexOf("@");
    dotpos = emailID.lastIndexOf(".");
    
    if (atpos < 1 || ( dotpos - atpos < 2 )) {
       alert("afolakeifeoluwa@gmail.com")
       document.myForm.EMail.focus() ;
       return false;
    }
    return( true );
 }