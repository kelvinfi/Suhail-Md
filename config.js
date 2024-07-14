const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_04_07_07_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE4MixcbiAgICAgICAgNzIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjIzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDI1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjE1LFxuICAgICAgICAzMyxcbiAgICAgICAgNTQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNTAsXG4gICAgICAgIDIyMixcbiAgICAgICAgNTksXG4gICAgICAgIDc1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTcwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTU3LFxuICAgICAgICAxOCxcbiAgICAgICAgODcsXG4gICAgICAgIDI0MixcbiAgICAgICAgNTksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMyxcbiAgICAgICAgMTg3LFxuICAgICAgICA3MyxcbiAgICAgICAgMTMwLFxuICAgICAgICAyNixcbiAgICAgICAgMTE0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDUyLFxuICAgICAgICA0MixcbiAgICAgICAgOTksXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICA5NixcbiAgICAgICAgMjIwLFxuICAgICAgICA0MCxcbiAgICAgICAgMTgzLFxuICAgICAgICA5NCxcbiAgICAgICAgMjU1LFxuICAgICAgICA0MSxcbiAgICAgICAgNTMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMyxcbiAgICAgICAgMjEwLFxuICAgICAgICA5MixcbiAgICAgICAgMzgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgODksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTg5LFxuICAgICAgICA4OSxcbiAgICAgICAgMTgzLFxuICAgICAgICAzNSxcbiAgICAgICAgMzMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgOTgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNDIsXG4gICAgICAgIDI0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDUyLFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNyxcbiAgICAgICAgOTMsXG4gICAgICAgIDQzLFxuICAgICAgICA1NixcbiAgICAgICAgMTcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMzgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNDMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjI0LFxuICAgICAgICA5MCxcbiAgICAgICAgMTcyLFxuICAgICAgICA4MSxcbiAgICAgICAgMzIsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDgxLFxuICAgICAgICAyOCxcbiAgICAgICAgNTEsXG4gICAgICAgIDQyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTkyLFxuICAgICAgICA1OCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjQ4LFxuICAgICAgICA2MyxcbiAgICAgICAgNjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDg1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDM4LFxuICAgICAgICA4OCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMyxcbiAgICAgICAgMTUwLFxuICAgICAgICAzMixcbiAgICAgICAgMTA2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjEsXG4gICAgICAgIDEyMixcbiAgICAgICAgODQsXG4gICAgICAgIDQ5LFxuICAgICAgICA1MCxcbiAgICAgICAgMTQzLFxuICAgICAgICA5NixcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM4LFxuICAgICAgICA0MyxcbiAgICAgICAgMTM1LFxuICAgICAgICA2MCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNixcbiAgICAgICAgMjAsXG4gICAgICAgIDE1LFxuICAgICAgICA4NSxcbiAgICAgICAgOCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDYwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMTksXG4gICAgICAgIDc5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDU5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDExNixcbiAgICAgICAgMTk5LFxuICAgICAgICAxODcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTUzLFxuICAgICAgICA2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA4OVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDExNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTU0LFxuICAgICAgICA1NixcbiAgICAgICAgMTYzLFxuICAgICAgICAyNDksXG4gICAgICAgIDM1LFxuICAgICAgICA1NixcbiAgICAgICAgNSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTI3LFxuICAgICAgICA5NSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjM2LFxuICAgICAgICAxODIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTkwLFxuICAgICAgICA5LFxuICAgICAgICA2OCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjQyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgOTQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTQsXG4gICAgICAgIDkxLFxuICAgICAgICA2MyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE0MixcbiAgICAgICAgODYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgODYsXG4gICAgICAgIDcxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMSxcbiAgICAgICAgNTgsXG4gICAgICAgIDc0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDk5LFxuICAgICAgICA2NCxcbiAgICAgICAgOCxcbiAgICAgICAgNzgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIzMixcbiAgICAgICAgNDEsXG4gICAgICAgIDEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMDMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwib0g0U2dPcTk1U201cklWMEpqMzZCdHoyaVQ0T3JXRjdhM0NHMGNUOHlNTT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiWG94bW5lYlFSV3FhME84UnRLT21nUVwiLFxuICBcInBob25lSWRcIjogXCI0MzgyMmU3My1jMmYxLTQ1OTYtYmQyYi0wMzMzMjBmZDc3N2NcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjAsXG4gICAgICAyMyxcbiAgICAgIDE2NyxcbiAgICAgIDEwNyxcbiAgICAgIDY2LFxuICAgICAgOTIsXG4gICAgICAxMCxcbiAgICAgIDI0OCxcbiAgICAgIDI4LFxuICAgICAgMTkyLFxuICAgICAgMTg4LFxuICAgICAgMjQ0LFxuICAgICAgMjI5LFxuICAgICAgMjQzLFxuICAgICAgNTQsXG4gICAgICAxODIsXG4gICAgICA4MyxcbiAgICAgIDE5MixcbiAgICAgIDExMCxcbiAgICAgIDI0MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzMSxcbiAgICAgIDEwMyxcbiAgICAgIDI0NCxcbiAgICAgIDEzLFxuICAgICAgMTE5LFxuICAgICAgNzMsXG4gICAgICA4OSxcbiAgICAgIDQ3LFxuICAgICAgMTk5LFxuICAgICAgMTIxLFxuICAgICAgNzUsXG4gICAgICAxNzMsXG4gICAgICAxMzMsXG4gICAgICAxNCxcbiAgICAgIDExLFxuICAgICAgNTMsXG4gICAgICAxMTMsXG4gICAgICAxNDMsXG4gICAgICAxMTksXG4gICAgICA1M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI0TVA0UkxUTFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjMzNTU4MTExMzg2OjYyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNjk4NzkxMDk5MDY2NTU6NjJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT1BsMmFVQ0VQbWR6YlFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJMNHJIUkE1cU51aHBleHpSbHlDNGtWdjJtaVdtOVNoU1BvS2ErS0lmQmxjPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIklQTjhxeWNoUTlpOHN1enpZREVpWkxWRVA5Tm8xSkRxTDVZU3dxY05KK2g0WXp0bk13SHpiVVpkSGNwUDB6ZXFZSzdTdW9BdnJTMVJLSDRlSTIyTkFRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkxiK1JFamNodklBTjFCY1R4dTJ1L1oxSWZ0Nlc3cTFqWjhVem00b3RkWEZPdnNoZ3NrU21TZE03d1k0TFJXeUxwYXJFaFd0WnlJZy9lNHo0SUNYRkRRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzMzU1ODExMTM4Njo2MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgODdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDkzMDA0NSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU1XOVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTVc5Lmpzb24iOiAie1wia2V5RGF0YVwiOlwieXhCcVJlakxXcjJvbUpuSHMxaTdmZHNISm5rd3Y1VUdZR1M4VDNiNzcxWT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo2MTU5MzY3MzgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDkyOTk4MDQzNFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "lawshambles",
  packname: process.env.PACK_NAME || "🐦",
  botname : process.env.BOT_NAME  || "lAWSHAMBLES",
  ownername:process.env.OWNER_NAME|| "KRLVIN",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
