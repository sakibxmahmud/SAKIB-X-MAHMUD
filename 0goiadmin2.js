module.exports.config = {
  name: "goiadminv2",
  version: "1.0.0-beta-fixbyDungUwU",
  hasPermssion: 0,
  credits: "ZyrosGenZ-fixbyDungUwU",
  description: "Bot will rep ng tag admin or rep ng tagbot ",
  commandCategory: "Other",
  usages: "",
  cooldowns: 1
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "100008831052165",
     "100000564972717") {
    var aid = ["100090129177071","100090421816555"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["আমার আপুকে কেন ডাকছো কি হয়েছে আমাকে বলো🙆‍♀️", "আমার আপু  কে  আর একবার মেনশন দিলে তোমার নাকের মধ্যে ঘুষি মারমু😡", "আপু  কে আর একবার মেনশন দিলে খবর আছে তোমার, তোমাকে কিন্তু ঘুষি মারমু আমার আপুকে মেনশন দিবা না😠","আমার আপু এখন অনেক বিজি তাকে মেনশন দিয়ে ডিস্টার্ব কইরো না 🥰😍😏"," আপু  এখন আমার বস‌ সাকিব সাথে অনেক বিজি তাকে মেনশন দিবা না প্লিজ 😾😍"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
  }