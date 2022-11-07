function label() {

   var threads = GmailApp.search("from: gatech.edu");
   for (var i = 0; i < threads.length; i++) {
      var messages = threads[i].getMessages();
      for (var j = 0; j < messages.length; j++) {
        var message = messages[j];
        var body = message.getRawContent();
        if (body.indexOf("Undergraduate") > -1) {
          var label = GmailApp.getUserLabelByName("GeorgiaTech");
          threads[i].addLabel(label);
        }
      }
   }

  var threads1 = GmailApp.search("from:email@washingtonpost.com");
   for (var i = 0; i < threads1.length; i++) {
          var label = GmailApp.getUserLabelByName("News");
          threads1[i].addLabel(label);
        }

  var threads2 = GmailApp.search("https://french.kwiziq.com");
   for (var i = 0; i < threads2.length; i++) {
          var label = GmailApp.getUserLabelByName("- FRENCH");
          threads2[i].addLabel(label);
          GmailApp.moveThreadToArchive(threads2[i]);
        }

}
