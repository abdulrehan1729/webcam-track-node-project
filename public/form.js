function validationForm()                                   
{
    var name = document.forms["form"]["name"];              
    var age = document.forms["form"]["age"];   
    var phone = document.forms["form"]["phone"]; 
    var email =  document.forms["form"]["email"];  
    var age_str = age.value;
    var phone_str = phone.value;

    if (name.value == "")                                 
    {
        window.alert("Please enter your name.");
        name.focus();
        return false;
    }
    if (age_str == "")
    {
        window.alert("Please enter your age");
        age.focus();
        return false;
    }

    if (age_str.length > 2 )
    {
        window.alert("Please enter a valid age");
        age.focus();
        return false;
    }
      
    if (email.value == "")                                  
    {
        window.alert("Please enter a valid e-mail address.");
        email.focus();
        return false;
    }
  
    if (email.value.indexOf("@", 0) < 0)                
    {
        window.alert("Please enter a valid e-mail address.");
        email.focus();
        return false;
    }
  
    if (email.value.indexOf(".", 0) < 0)                
    {
        window.alert("Please enter a valid e-mail address.");
        email.focus();
        return false;
    }
  
    if (phone_str == "")                          
    {
        window.alert("Please enter your phone number.");
        phone.focus();
        return false;
    }
    
    if (isNaN(phone_str))
    {
        window.alert("Please enter a number ");
        phone.focus();
        return false;
    }

    if (phone_str.length != 10)
    {
        windows.alert("Please insert a valid number");
        phone.focus();
        return false;
    }
      
    return true;
        alert("Thank you!!!!");
}