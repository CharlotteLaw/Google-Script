function star_important() {

  var threads1 = GmailApp.search("from: donotreply@studentaid.gov");
   for (var i = 0; i < threads1.length; i++) {
      Logger.log(threads1[i]);
      GmailApp.markThreadImportant(threads1[i]);
      for (var i = 0; i < threads1.length; i++) {
        var messages = threads1[i].getMessages();
        var label = GmailApp.getUserLabelByName("FAFSA");
        threads1[i].addLabel(label);
        for (var j = 0; j < messages.length; j++) {
          var message = messages[j];
          GmailApp.starMessage(message);
        }
      }
   }

   var threads4 = GmailApp.search("noreply@ucop.edu");
   for (var i = 0; i < threads4.length; i++) {
      Logger.log(threads4[i]);
      GmailApp.markThreadImportant(threads4[i]);
      for (var i = 0; i < threads4.length; i++) {
        var messages = threads4[i].getMessages();
        var label = GmailApp.getUserLabelByName("UC App");
        threads4[i].addLabel(label);
        
        for (var j = 0; j < messages.length; j++) {
          var message = messages[j];
          GmailApp.starMessage(message);
        }
      }
   }

   var threads5 = GmailApp.search("from: uaoffice@princeton.edu");
   for (var i = 0; i < threads5.length; i++) {
      Logger.log(threads5[i]);
      GmailApp.markThreadImportant(threads5[i]);
      for (var i = 0; i < threads5.length; i++) {
        var messages = threads5[i].getMessages();
        var label = GmailApp.getUserLabelByName("Princeton");
        threads5[i].addLabel(label);
        
        for (var j = 0; j < messages.length; j++) {
          var message = messages[j];
          GmailApp.starMessage(message);
        }
      }
   }

   var threads5 = GmailApp.search("admissionsreply@ucsd.edu");
   for (var i = 0; i < threads5.length; i++) {
      Logger.log(threads5[i]);
      GmailApp.markThreadImportant(threads5[i]);
      for (var i = 0; i < threads5.length; i++) {
        var messages = threads5[i].getMessages();
        var label = GmailApp.getUserLabelByName("UCSD");
        threads5[i].addLabel(label);
      }
   }

}

