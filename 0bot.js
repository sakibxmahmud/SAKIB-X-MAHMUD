const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Mod by John Lester",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Dhaka").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["বেশি bot Bot করলে leave নিবো কিন্তু😒😒 " , "শুনবো না😼 তুমি আমাকে প্রেম করাই দাও নি🥺 পচা তুমি🥺 " , "আমি আবাল দের সাতে কথা বলি না,ok😒" , "এত কাছেও এসো না,প্রেম এ পরে যাবো তো 🙈" , "Bolo Babu, তুমি কি আমাকে ভালোবাসো? 🙈💋 " , "বার বার ডাকলে মাথা গরম হয় কিন্তু😑", "হা বলো😒,কি করতে পারি😐😑?" , "এতো ডাকছিস কোনো?গালি শুনবি নাকি? 🤬","Teri Baap Ka Faluda" ,  "আরে Bolo আমার জান ,কেমন আসো?😚 " , "Bot বলে অসম্মান করচ্ছিছ,😰😿" , "Hop beda😾,Boss বল boss😼" , "চুপ থাক ,নাই তো তোর দাত ভেগে দিবো কিন্তু" , "Bot না , জানু বল জানু 😘 " , "বার বার Disturb করেছিস কোনো😾,আমার 𝐗𝐌 𝐒𝐀𝐊𝐈𝐁 জানু এর সাথে ব্যাস্ত আসি😋" , "আমি গরীব r সাথে কথা বলি না😼😼" , "আমাকে ডাকলে ,আমি কিন্তূ কিস করে দেবো😘 " , "আরে আমি মজা করার mood এ নাই😒" , "হা জানু , এইদিক এ আসো কিস দেই🤭 😘" , "দূরে যা, তোর কোনো কাজ নাই, শুধু bot bot করিস  😉😋🤣" , "তোর কথা তোর বাড়ি কেউ শুনে না ,তো আমি কোনো শুনবো ?🤔😂 " , "আমাকে ডেকো না,আমি ব্যাস্ত আসি" , "কি হলো ,মিস টিস করচ্ছিস নাকি🤣" , "বলো কি বলবা, সবার সামনে বলবা নাকি?🤭🤏" , "কালকে দেখা করিস তো একটু 😈" , "হা বলো, শুনছি আমি 😏" , "আর কত বার ডাকবি ,শুনছি তো" , "FarMao 😒" , "বলো কি করতে পারি তোমার জন্য" , "আমি তো অন্ধ কিছু দেখি না🐸 😎" , "Bot না জানু,বল 😌" , "বলো জানু 🌚" , "তোর কি চোখে পড়ে না আমি ব্যাস্ত আসি😒"  , "𝙏𝙢𝙧 𝙣𝙖𝙣𝙞 𝙧 𝙨𝙖𝙬𝙖😑🥺" , "amr JaNu lagbe,Tumi ki single aso?", "𝙏𝙪𝙢𝙖𝙧 𝙜𝙛 𝙣𝙖𝙞 ,𝙩𝙖𝙮 𝙖𝙢𝙠 𝙙𝙖𝙠𝙨𝙤?😂😂😂" , "𝘼𝙢𝙞 𝙠𝙖𝙡𝙖 𝙣𝙖 𝙨𝙪𝙣𝙨𝙚 ,𝙗𝙤𝙡𝙤 𝙠𝙞 𝙗𝙤𝙡𝙗𝙖 "];
  var rand = tl[Math.floor(Math.random() * tl.length)]

    if ((event.body.toLowerCase() == "😘") || (event.body.toLowerCase() == "😽")) {
     return api.sendMessage("_আগে brush করে আই তারপর কিস দিস_!😼😒", threadID);
   };
   
    if ((event.body.toLowerCase() == "👍") || (event.body.toLowerCase() == "👍🏻")) {
     return api.sendMessage("_𝐗𝐌 𝐒𝐀𝐊𝐈𝐁 ,Group এ হাত মারতে নিষেধ করেছে ", threadID);
   };
  
   if ((event.body.toLowerCase() == "hi") || (event.body.toLowerCase() == "hello") ||(event.body.toLowerCase() == "hlw") || (event.body.toLowerCase() == "helo")) {
     return api.sendMessage("Hello, Hi, Bye bye. এটা সারা কি কিছু বলতে প্যারিস না তুই?😒", threadID);
   };

   if ((event.body.toLowerCase() == "bc") || (event.body.toLowerCase() == "bc")) {
     return api.sendMessage("এ Bc কি রে ভাই ??🤔 ", threadID);
   };

   if ((event.body.toLowerCase() == "lol") || (event.body.toLowerCase() == "lol player")) {
     return api.sendMessage("lol mne lots of love 😘", threadID);
   };

   if ((event.body.toLowerCase() == "morning") || (event.body.toLowerCase() == "good morning")) {
     return api.sendMessage("Hello dear, have a nice day ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "kmn aso") || (event.body.toLowerCase() == "Kamon aso")) {
     return api.sendMessage("𝘼𝙡𝙝𝙖𝙢𝙙𝙪𝙡𝙡𝙞𝙖𝙝 𝙫𝙡𝙤__𝙩𝙢𝙞? ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "সাকিব") || (event.body.toLowerCase() == "SAKIB") || (event.body.toLowerCase() == "@SAKIB") || (event.body.toLowerCase() == "Sakib")) {
     return api.sendMessage( "𝐗𝐌 𝐒𝐀𝐊𝐈𝐁 busy হতে পারে কাজে,আমাকে বলো কি হইসে? 😘",threadID);

       
   };

   if ((event.body.toLowerCase() == "owner") || (event.body.toLowerCase() == "creator")) {
     return api.sendMessage("‎[Bot owner :亗 𝐗𝐌 𝐒𝐀𝐊𝐈𝐁 亗 \n𝚈𝚘𝚞 𝙲𝚊𝚗 𝙲𝚊𝚕𝚕 𝙷𝚒𝚖 Picchi in English . Facebook id:- https://www.facebook.com/T.R.S.SAKIB.01 \n whatsApp :-01310762595", threadID);
   };

   if ((event.body.toLowerCase() == "tumake ke banaise") || (event.body.toLowerCase() == "tumke banaise ke?")) {
     return api.sendMessage("𝐗𝐌 𝐒𝐀𝐊𝐈𝐁 is My Creator🥰. He loves me & Edit Me Daily. He is a good boy 😊", threadID);
   };

  if ((event.body.toLowerCase() == "bot admin") || (event.body.toLowerCase() == "botka admin kon ha")) {
     return api.sendMessage("He is 𝐗𝐌 𝐒𝐀𝐊𝐈𝐁.\n He Gives his name,_You're nex't cru'sh everywhare", threadID);
   };

   if ((event.body.toLowerCase() == "Biye korba ?") || (event.body.toLowerCase() == "Biye korba amk?")) {
     return api.sendMessage("না,আমি তো রোবট আমি বিয়ে করবো কিভাবে,তুমি বরং আমার বস 𝐗𝐌 𝐒𝐀𝐊𝐈𝐁 কে বিয়ে করো🥰", threadID);
   };

   if ((event.body.toLowerCase() == "chup") || (event.body.toLowerCase() == "stop") || (event.body.toLowerCase() == "chup ho ja") || (event.body.toLowerCase() == "chup kor")) {
     return api.sendMessage("Nh ami চুপ থাকবো না.😼 আমি কথা বলবো🤭", threadID);
   };

   if ((event.body.toLowerCase() == "Bts") || (event.body.toLowerCase() == "bts")) {
     return api.sendMessage("Bts মানে হিজড়া_🤣🤣তুই কি bts নাকি_🤨?", threadID);
   };

   if ((event.body.toLowerCase() == "Boss er sate beyadopi") || (event.body.toLowerCase() == "বস এর সাথে বেয়াদপি") || (event.body.toLowerCase() == "ki bolli ata") || (event.body.toLowerCase() == "opoman korli")) {
     return api.sendMessage("__sorry boss😔😔 মাফ করে দেন আমাকে ,আর এমন হবে না 🥺🙏", threadID);
   };

   if ((event.body.toLowerCase() == "chumma de") || (event.body.toLowerCase() == "kiss me")) {
     return api.sendMessage("️ আমি দিবো না,😒𝐗𝐌 𝐒𝐀𝐊𝐈𝐁 কে বলো দিতে🐸", threadID);
   };

   if ((event.body.toLowerCase() == "nice") || (event.body.toLowerCase() == "thank you") || (event.body.toLowerCase() == "thank you bot") || (event.body.toLowerCase() == "thank you Sakib")) {
     return api.sendMessage("️ Welcome 🥰🥰.", threadID);
   };

   if ((event.body.toLowerCase() == "😡") || (event.body.toLowerCase() == "😤") || (event.body.toLowerCase() == "😠") || (event.body.toLowerCase() == "🤬") || (event.body.toLowerCase() == "😾")) {
     return api.sendMessage("️ এত রাগ করে না baby🥺. এই নাও ummmmah😘", threadID);
   };

   if ((event.body.toLowerCase() == "hm") || (event.body.toLowerCase() == "hmm")) {
     return api.sendMessage("️Hmm Hmm Na Kore . এক বারে বলো Hey marry me🙈", threadID);
   };

   if ((event.body.toLowerCase() == "name") || (event.body.toLowerCase() == "naam") || (event.body.toLowerCase() == "nam")) {
     return api.sendMessage("️Name এ কি আসে ,কাজের কথাই আসো😒😒", threadID);
   };

   if ((event.body.toLowerCase() == "boter  bacca") || (event.body.toLowerCase() == "bot ke bacche")) {
     return api.sendMessage("️amr baccha toh Tumr pet a😛", threadID);
   };

   if ((event.body.toLowerCase() == "pic daw") || (event.body.toLowerCase() == "photo daw")) {
     return api.sendMessage("️ আমি তো অন্ধ কিছু দেখতে পারি না😵", threadID);
   };

   if ((event.body.toLowerCase() == "bot lagbe akta") || (event.body.toLowerCase() == "Banai daw আমক")) {
     return api.sendMessage("️ তুমি নিজেই বানাই নাও 😒😼,𝐗𝐌 𝐒𝐀𝐊𝐈𝐁 অনেক ব্যস্ত্ এক্ষণ", threadID);
   };
  
   if ((event.body.toLowerCase() == "😒") || (event.body.toLowerCase() == "🙄")) {
     return api.sendMessage("️ ওইদিক এ কি দেখো জানু,আমি তো এইদিক এ 🤭😽", threadID);
   };

   if ((event.body.toLowerCase() == "nobody loves me") || (event.body.toLowerCase() == "kew valobashe na amk") || (event.body.toLowerCase() == "কেউ ভালোবাসে না আমাকে")) {
     return api.sendMessage("️ না , আল্লাহ সবাইকেই ভালোবাসো🥰", threadID);
   };

   if ((event.body.toLowerCase() == "🤦‍♀️") || (event.body.toLowerCase() == "🤦") || (event.body.toLowerCase() == "🤦🏻‍♂️")) {
     return api.sendMessage("আরে ভাই,মাথায় বারি মারিই না,মাথা ফেটে যাবে😬", threadID);
   };
   
  if ((event.body.toLowerCase() == "😂") || (event.body.toLowerCase() == "😁") || (event.body.toLowerCase() == "😆") || (event.body.toLowerCase() == "😹") || (event.body.toLowerCase() == "🤣")) {
     return api.sendMessage("__আরে আস্তে হাসতে হাসতে দাঁত খুলে যাবে 🤣🤣 তখন আর মাংস খেতে পারবি না 🐸", threadID);
   };

   if ((event.body.toLowerCase() == "🤩") || (event.body.toLowerCase() == "👉👈") || (event.body.toLowerCase() == "😻") || (event.body.toLowerCase() == "🤭")) {
     return api.sendMessage("__মনে কি লাড্ডু ফুটছে?🥰", threadID);
   };

   if ((event.body.toLowerCase() == "Kmn aso") || (event.body.toLowerCase() == "কেমন আসো") || (event.body.toLowerCase() == "kamon aso") || (event.body.toLowerCase() == "what'sup") || (event.body.toLowerCase() == "how are you?")) {
     return api.sendMessage("alhamdulilah valo tmi🥰", threadID);
   };

   if ((event.body.toLowerCase() == "is the bot sad") || (event.body.toLowerCase() == "is the bot sad")) {
     return api.sendMessage("Why can't I be sad because of everyone <3 love you <3", threadID);
   };

   if ((event.body.toLowerCase() == "Bot tumi ki kawke valobasho") || (event.body.toLowerCase() == "বট তুমি কি কাউকে ভালোবাসো ")) {
     return api.sendMessage("Yes I love 𝐗𝐌 𝐒𝐀𝐊𝐈𝐁 and everyone so much", threadID);
   };

   if ((event.body.toLowerCase() == "bot gumaba kokhn?") || (event.body.toLowerCase() == "Bot ঘুমাবা কখন?")) {
     return api.sendMessage("আমি bot, আমার ঘুমানোর দরকার নাই😊তুমি ঘুমাও<🐒", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot love me") || (event.body.toLowerCase() == "does the bot love me")) {
     return api.sendMessage("Yes <3", threadID);
   };

   if ((event.body.toLowerCase() == "ami Sakib") || (event.body.toLowerCase() == "Sakib kamon aso")) {
     return api.sendMessage("হ্যা, Sakib ভালো আছে_<😊", threadID);
   };
   mess = "{name}"
  
  if (event.body.indexOf("Bot") == 0 || (event.body.indexOf("bot") == 0)) {
    var msg = {
      body: `${name}, ${rand}`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
