function myFunction() {
  var email = Session.getActiveUser().getEmail();
  
  if (GmailApp.getInboxUnreadCount() > 0){
    
     var vss = Logger.log("# unread and starred: " + GmailApp.getInboxUnreadCount());
     vss.getLog()
     MailApp.sendEmail("0771454512@mms.dialog.lk", "Test Subject", vss.getLog());
  
  }
  
}
