function spam() {

   var threads = GmailApp.search("admission@linfield.edu");
   for (var i = 0; i < threads.length; i++) {
      Logger.log(threads[i]);
      GmailApp.moveThreadToSpam(threads[i]);
   }

   var threads1 = GmailApp.search("admissions@longisland.university");
   for (var i = 0; i < threads1.length; i++) {
      Logger.log(threads1[i]);
      GmailApp.moveThreadToSpam(threads1[i]);
   }

   var threads2 = GmailApp.search("Copyright © 2022 Honey Science LLC");
   for (var i = 0; i < threads2.length; i++) {
      Logger.log(threads2[i]);
      GmailApp.moveThreadToSpam(threads2[i]);
   }

   var threads4 = GmailApp.search("fetch@e.fetch.com");
   for (var i = 0; i < threads4.length; i++) {
      Logger.log(threads4[i]);
      GmailApp.moveThreadToSpam(threads4[i]);
   }

   var threads5 = GmailApp.search("Admissions@ucdenver.edu");
   for (var i = 0; i < threads5.length; i++) {
      Logger.log(threads5[i]);
      GmailApp.moveThreadToSpam(threads5[i]);
   }
}
