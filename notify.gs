function myFunction(numandgateway) {
  var email = Session.getActiveUser().getEmail();
  

  if (GmailApp.getInboxUnreadCount() > 0){
    
    var threads = GmailApp.getInboxThreads(0, GmailApp.getInboxUnreadCount());
    for (var i = 0; i < threads.length; i++) {
      Logger.log(threads[i].getFirstMessageSubject());
    }
    
     var vss = Logger.log("# you have " + GmailApp.getInboxUnreadCount() + " unread emails");
     vss.getLog()
     MailApp.sendEmail(numandgateway, "Test Subject", vss.getLog());
  
  }
  
}

function myMain() {
  var mobilegateway = "@mms.dialog.lk"; //set your mobile providers SMS / MMS gateway address.
  var yourphnumber = "0771454512" // set your mobile phone number.
  
  var concat = yourphnumber+mobilegateway
  
  
  myFunction(concat);


}
