module.exports.config = {
	name: "info",
	version: "1.0.1", 
	hasPermssion: 0,
	credits: "Joshua Sy", //don't change the credits please
	description: "Admin and Bot info.",
	commandCategory: "info",
	cooldocommandCategorywns: 1,
	dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【hh:mm:ss】");
var link = ["https://i.postimg.cc/HW8Xm3tb/1669945381354.jpg", 
            
            "https://i.postimg.cc/mrZppKCY/1679672762812.jpg", 
            
            "https://i.postimg.cc/NG8JYgD6/1678020926604.jpg",

"https://i.postimg.cc/k5rKBSXB/1679672831474.jpg",
            
            "https://i.postimg.cc/7hbfBPYF/1669945367239.jpg"];
  
var callback = () => api.sendMessage({body:`ADMIN AND BOT INFORMATION 
________________________________________

❇️𝗕𝗢𝗧 𝗡𝗔𝗠𝗘 : ${global.config.BOTNAME}

❇️𝗕𝗢𝗧 𝗔𝗗𝗠𝗜𝗡 : 𝐒𝐀𝐊𝐈𝐁 𝐌𝐀𝐇𝐌𝐔𝐃

❇️𝗔𝗗𝗗𝗥𝗘𝗦𝗦: 𝐊𝐨𝐥𝐤𝐚𝐭𝐚, 𝐈𝐧𝐝𝐢𝐚 

_____________CONTACT_____________

❇️𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞: https://www.facebook.com/T.R.S.SAKIB.01

❇️𝗪𝗛𝗔𝗧𝗦,𝗔𝗣𝗣: 01310762595

❇️𝗕𝗢𝗧 𝗣𝗥𝗘𝗙𝗜𝗫 : ${global.config.PREFIX}

❇️𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥 :  𝐒𝐀𝐊𝐈𝐁 𝐌𝐀𝐇𝐌𝐔𝐃

OTHER NFORMATION____________________

TYPE /admin 

➟ UPTIME

TODAY IS TIME : ${juswa} 

BOT IS RUNNING ${hours}:${minutes}:${seconds}.

THANKS FOR USING ${global.config.BOTNAME} 『🤖🖤』`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };