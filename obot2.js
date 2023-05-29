const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "gobot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "𝙈𝙧𝙏𝙤𝙢𝙓𝙭𝙓",
  description: "gibot",
  commandCategory: "ai",
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

  var tl = ["💋"];
  var rand = tl[Math.floor(Math.random() * tl.length)]

    if ((event.body.toLowerCase() == "" ) || (event.body.toLowerCase() == "")) {
     return api.sendMessage("ওই তোমরা কি দিচ্ছো আমি শুধু টেক্সট পড়তে পারি 😢ভয়েস বা পিক দিলে কিছু বুঝি না 😓 এগুলো বুঝতে হলে আমার বস_SAKIB_ কে ডাকতে হবে😔", threadID);
   };

    if ((event.body.toLowerCase() == "😚") || (event.body.toLowerCase() == "😽")) {
     return api.sendMessage("আগে ব্রাশ করে আই তারপর কিস কর নাহলে তোর মুখ থেকে গন্ধ বের হয়🤣",threadID);
   };
   
    if ((event.body.toLowerCase() == "prefix ") || (event.body.toLowerCase() == "Prefix ")) {
     return api.sendMessage("My prefix 👉/👈", threadID);
   };

   if ((event.body.toLowerCase() == "bye") || (event.body.toLowerCase() == "Bye")) {
     return api.sendMessage("বাই তো বললে সোজা অফলাইনে যাও অন্য কারো ইনবক্সে যেও না গেলে আমার বস্ _SAKIB_ এর ইনবক্সে যাও", threadID);
   };
  
   if ((event.body.toLowerCase() == "Oi") || (event.body.toLowerCase() == "jan") ||(event.body.toLowerCase() == "babu") || (event.body.toLowerCase() == "pakhi")) {
     return api.sendMessage("oi, jan, pahki babu. এটা ছাড়া অন্য কথা বলে আড্ডা দিতে পারো না নাকি🥴", threadID);
   };

   if ((event.body.toLowerCase() == "mc") || (event.body.toLowerCase() == "Mc")) {
     return api.sendMessage("Ye Mc Kya HoTa Hai 🤔 ", threadID);
   };

   if ((event.body.toLowerCase() == "lol") || (event.body.toLowerCase() == "lol player")) {
     return api.sendMessage("Khud k0o KYa LeGend SmJhTi Hai 😂", threadID);
   };

   if ((event.body.toLowerCase() == "morning") || (event.body.toLowerCase() == "good morning")) {
     return api.sendMessage("Good morning , আপনার দিন শুভ হুক❤️", threadID);
   };

   if ((event.body.toLowerCase() == "everyone ") || (event.body.toLowerCase() == "any")) {
     return api.sendMessage("ami aci janeman❤️", threadID);
   };

   if ((event.body.toLowerCase() == "Sakib") || (event.body.toLowerCase() == "sakib") || (event.body.toLowerCase() == "@SAKIB 卝 চৌধুরী࿐ツ") || (event.body.toLowerCase() == "চৌধুরী࿐ツ 卝 Sakib")) {
     return api.sendMessage( "kaj a busy ace mone hoi ami to aci tai na sona 😘",threadID);

       
   };

   if ((event.body.toLowerCase() == "admin") || (event.body.toLowerCase() == "Admin")) {
     return api.sendMessage("‎[owner:☞SAKIB MAHMUD☜\n𝚈𝚘𝚞 𝙲𝚊𝚗 𝙲𝚊𝚕𝚕 𝙷𝚒𝚖 Contact Him on \nWhatsApp :- 01310762595", threadID);
   };

   if ((event.body.toLowerCase() == "kar bot ata") || (event.body.toLowerCase() == "কে তোমাকে বানাইছে")) {
     return api.sendMessage("SAKIB MAHMUD  ❤️ My Creator. আমার বস সাকিব মাহমুদ আমাকে বানিয়েছেন সুধু আপনাদের মজা দিবার জন্ন.", threadID);
   };

  if ((event.body.toLowerCase() == "bot admin") || (event.body.toLowerCase() == "bot ar admin k ")) {
     return api.sendMessage("He is SAKIB MAHMUD .uHe Gives his name KING everywhare", threadID);
   };

   if ((event.body.toLowerCase() == "mahi") || (event.body.toLowerCase() == "Sakiba চৌধুরী࿐")) {
     return api.sendMessage("I love u🥰 amar boss Sakib apnake bollo🥰", threadID);
   };

   if ((event.body.toLowerCase() == "Love u bot") || (event.body.toLowerCase() == "prem korba bot")) {
     return api.sendMessage("amake noi amar boss Sakib k valobashun oni amake create korcen ", threadID);
   };

   if ((event.body.toLowerCase() == "Soytan") || (event.body.toLowerCase() == "soytan") || (event.body.toLowerCase() == "সয়তান") || (event.body.toLowerCase() == "kaccor")) {
     return api.sendMessage("আমি সয়তান না তুই সয়তান কাচ্চর সব..!!😏", threadID);
   };

   if ((event.body.toLowerCase() == "Pagol") || (event.body.toLowerCase() == "pagol")) {
     return api.sendMessage(" তুই বড় পাগল বোঝলি😒", threadID);
   };

   if ((event.body.toLowerCase() == "malik se bakchodi") || (event.body.toLowerCase() == "malik se backchodi") || (event.body.toLowerCase() == "malkin se bakchodi") || (event.body.toLowerCase() == "malkin se backchodi")) {
     return api.sendMessage("srry malik maaf kr do ab nhi kruga 🥺🙏", threadID);
   };

   if ((event.body.toLowerCase() == "gund") || (event.body.toLowerCase() == "gand") || (event.body.toLowerCase() == "lund") || (event.body.toLowerCase() == "land")) {
     return api.sendMessage("Gand m jyada khujli h toh banana 🍌 under le le. :))))", threadID);
   };

   if ((event.body.toLowerCase() == "chumma de") || (event.body.toLowerCase() == "papy me")) {
     return api.sendMessage("️আমি সবাইকে কিস দি না তাছাড়া তোর মুখ থেকে গন্ধ বের হচ্ছে আগে মুখ ধুয়ে আই তারপর বলিস😷", threadID);
   };

   if ((event.body.toLowerCase() == "nice") || (event.body.toLowerCase() == "thank you") || (event.body.toLowerCase() == "thank you bot") || (event.body.toLowerCase() == "thank you maliha")) {
     return api.sendMessage("️ami ki ato sundor sobai amake thank you dei🥰.", threadID);
   };

   if ((event.body.toLowerCase() == "😡") || (event.body.toLowerCase() == "😤") || (event.body.toLowerCase() == "😠") || (event.body.toLowerCase() == "🤬") || (event.body.toLowerCase() == "😾")) {
     return api.sendMessage("🥺রাগ করো না সোনা আমি শুধু মজা করছি। আচ্ছা একটা কিস নাও রাগ কমাও😘", threadID);
   };

   if ((event.body.toLowerCase() == "cp") || (event.body.toLowerCase() == "Caption")) {
     return api.sendMessage("️°🖤🦋༅༎°😇-❤️‍🩹-🥀\n🐰!-💫-𝘁𝗵𝗶𝘀 𝗹𝗶𝗻𝗲 𝗳𝗼𝗿 𝘆𝗼𝘂_🖇️🐹🌈-!!-☺️\n- সত্যিকার ভালোবাসার আরেক নাম হচ্ছে-!-🌸-😘\n-!অপেক্ষা___<3💜🖤\n•°🖤🦋༅༎°😇-❤️‍🩹-🥀ℛ𝒶̊𝒩𝒾̈ " , "︵❝།།💚🌺𝐈𝐭'𝐬 𝐦𝐲 𝐁𝐞𝐬𝐭 𝐅𝐞𝐞𝐥𝐢𝐧𝐠𝐬 ☺️ლ_༎࿐\n\n︵❝།།💚🌺 হাজার কষ্ট পেলেও নিজের ভেতর চেপে রাখাটা😊\n\n•------••✧✿❛ლএখন অভ্যাসে পরিণত হয়ে গেছে🙂💔 ლ❛✿✧••------…🙂", threadID);
   };

   if ((event.body.toLowerCase() == "namm") || (event.body.toLowerCase() == "নাম") || (event.body.toLowerCase() == "নাম")) {
     return api.sendMessage("️Name m kya rakkha h. tum kam pe dhyan do.", threadID);
   };

   if ((event.body.toLowerCase() == "boter bacca") || (event.body.toLowerCase() == "bot ar bacca ")) {
     return api.sendMessage("️meri baccha toh Tumhare Pet m H.", threadID);
   };

   if ((event.body.toLowerCase() == "pic do") || (event.body.toLowerCase() == "photo do")) {
     return api.sendMessage("️m toh Andha Hu Dekh nhi sakti", threadID);
   };

   if ((event.body.toLowerCase() == "surya kon ha") || (event.body.toLowerCase() == "hhhshhdhdhdhsh")) {
     return api.sendMessage("️Kiss Randi Ka Name Le Ke Mood Khrab Kr Diya.🙄 Dubara Naam Mat Lena Iska", threadID);
   };

   if ((event.body.toLowerCase() == "bot banake do") || (event.body.toLowerCase() == "mujhe bhi chaiye")) {
     return api.sendMessage("️Khud hi karlona. tumhe kya kuch nhi ata h?", threadID);
   };

   if ((event.body.toLowerCase() == "😔") || (event.body.toLowerCase() == "☺️")) {
     return api.sendMessage("️তোমার মন ভালো নেই বুঝলাম কিন্তু হাসি মুখে থাকতে শিখে সোনা আমার বস্ _SAKIB_ এর মতো🤗😘", threadID);
   };
  
   if ((event.body.toLowerCase() == "🤨") || (event.body.toLowerCase() == "🤔")) {
     return api.sendMessage("️এদিক ওদিক তাকাও কেন? কেউ দেখছে না সোজা আমার বস্ sakib এর ইনবক্সে দৌড় দাও🏃‍♀️💃", threadID);
   };

   if ((event.body.toLowerCase() == "nobody loves me") || (event.body.toLowerCase() == "nobody love me") || (event.body.toLowerCase() == "koi pyar nhi karta")) {
     return api.sendMessage("️M Hu Na bby, Meri Pas Aoo M Pyar Karunga☺️", threadID);
   };

   if ((event.body.toLowerCase() == "🤦🏻‍♂") || (event.body.toLowerCase() == "🤦🏻‍♀")) {
     return api.sendMessage("ভিখারী হয়ে গেলে নাকি সোনা মাথায় হাত দাও কেন??😬", threadID);
   };
   
   if ((event.body.toLowerCase() == "😅") || (event.body.toLowerCase() == "😄") || (event.body.toLowerCase() == "😆") || (event.body.toLowerCase() == "🤣😆") || (event.body.toLowerCase() == "😀") || (event.body.toLowerCase() == "😄")) {
     return api.sendMessage("একটু কম করে হাসো তোমার দাঁতের পোকা দেখা যাচ্ছে🤣", threadID);
   };

   if ((event.body.toLowerCase() == "🥰") || (event.body.toLowerCase() == "😍") || (event.body.toLowerCase() == "😻") || (event.body.toLowerCase() == "❤️")) {
     return api.sendMessage("তোমার চোখে এত ভালোবাসা দেখছি কেন?😒 আমার বস সাকিব কে একটু ভলোবাসা দিও🥰", threadID);
   };

   if ((event.body.toLowerCase() == "kemon aco") || (event.body.toLowerCase() == "kmn aco") || (event.body.toLowerCase() == "Kemon aco") || (event.body.toLowerCase() == "how are you") || (event.body.toLowerCase() == "how are you?")) {
     return api.sendMessage("ami tokhon e valo thaki, Jokhon apnader hasi mukh dekhi☺️", threadID);
   };

   if ((event.body.toLowerCase() == "ankho m") || (event.body.toLowerCase() == "jada haso")) {
     return api.sendMessage("Wah Kya Baat H. Sablog Mera Boss sakib Mahmud Ka Bot Use Kar Rhe H💖", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot love you") || (event.body.toLowerCase() == "does the bot love you")) {
     return api.sendMessage("Yes I love you and everyone so much", threadID);
   };

   if ((event.body.toLowerCase() == "bot goes to sleep") || (event.body.toLowerCase() == "bot goes to sleep")) {
     return api.sendMessage("I'm a bot, you're the one who should go to sleep <3", threadID);
   };

   if ((event.body.toLowerCase() == "bot tor vabi") || (event.body.toLowerCase() == "Sakiba")) {
     return api.sendMessage("Assalamualaikum mahi vabi 🥰 oi todero vabi hoi salam de @everyone", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot love me") || (event.body.toLowerCase() == "does the bot love me")) {
     return api.sendMessage("Yes <3", threadID);
   };

   if ((event.body.toLowerCase() == "ami Sakib") || (event.body.toLowerCase() == "ami tor boss")) {
     return api.sendMessage("হ্যা বস্ সাকিব কেমন আছেন আর আমি জানি আপনি আমাকে তৈরি করেছেন কিছু ভুল হলে মাফ করে দিয়েন🥰?", threadID);
   };
   mess = "{name}"
  
  if (event.body.indexOf("kiss dau") == 0 || (event.body.indexOf("kiss dau") == 0)) {
    var msg = {
      body: `${name}, ${rand}`
    }
    return api.sendMessage("I love u baby ummmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmaaaaaahhhh💋💋💋💋💋💋💋💋💋💋💋💋💋💋", threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
