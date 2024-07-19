iconst fs = require('fs-extra')
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_51_07_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNTIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTE1LFxuICAgICAgICA0MSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNDQsXG4gICAgICAgIDIzLFxuICAgICAgICAxNzksXG4gICAgICAgIDg1LFxuICAgICAgICAyNCxcbiAgICAgICAgMTg4LFxuICAgICAgICA1OCxcbiAgICAgICAgMTExLFxuICAgICAgICAxMyxcbiAgICAgICAgNjgsXG4gICAgICAgIDgzLFxuICAgICAgICA2NCxcbiAgICAgICAgODksXG4gICAgICAgIDMsXG4gICAgICAgIDUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1LFxuICAgICAgICA2OSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDI5LFxuICAgICAgICA1NCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDkxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNDksXG4gICAgICAgIDU1LFxuICAgICAgICA5LFxuICAgICAgICA5NCxcbiAgICAgICAgNCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxOSxcbiAgICAgICAgMTk5LFxuICAgICAgICA1MCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyOSxcbiAgICAgICAgMzUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgOTQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjMyLFxuICAgICAgICA0MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMzcsXG4gICAgICAgIDU0LFxuICAgICAgICA1OCxcbiAgICAgICAgNzAsXG4gICAgICAgIDgyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNTMsXG4gICAgICAgIDIsXG4gICAgICAgIDk0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgODksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDExNixcbiAgICAgICAgMjcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAyLFxuICAgICAgICAxODcsXG4gICAgICAgIDY0LFxuICAgICAgICA4OCxcbiAgICAgICAgODEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTE4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTk0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDkzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDk1LFxuICAgICAgICA0MCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNyxcbiAgICAgICAgMTAwLFxuICAgICAgICA4NyxcbiAgICAgICAgNzEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTE1LFxuICAgICAgICA3MyxcbiAgICAgICAgNDcsXG4gICAgICAgIDg1LFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDMyLFxuICAgICAgICAxNCxcbiAgICAgICAgMjExLFxuICAgICAgICAxMzIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTgzLFxuICAgICAgICA4MCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTkzLFxuICAgICAgICA0NCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDk0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjA5LFxuICAgICAgICAzOCxcbiAgICAgICAgMTEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ1LFxuICAgICAgICA1NSxcbiAgICAgICAgOCxcbiAgICAgICAgNzksXG4gICAgICAgIDE5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTMxLFxuICAgICAgICA4MixcbiAgICAgICAgMTk4LFxuICAgICAgICA5MCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDExMSxcbiAgICAgICAgNzgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjI1LFxuICAgICAgICA4NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAzMCxcbiAgICAgICAgMTI2LFxuICAgICAgICA1MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDExNlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTI3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMTksXG4gICAgICAgIDcwLFxuICAgICAgICA2NCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEwMixcbiAgICAgICAgNTcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxOCxcbiAgICAgICAgNTEsXG4gICAgICAgIDc2LFxuICAgICAgICA5NCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMzksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTM3LFxuICAgICAgICA4NCxcbiAgICAgICAgNDksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTc1LFxuICAgICAgICA3NixcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNSxcbiAgICAgICAgMjQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjAxLFxuICAgICAgICAzMCxcbiAgICAgICAgNTksXG4gICAgICAgIDE1LFxuICAgICAgICA3MixcbiAgICAgICAgNDksXG4gICAgICAgIDk5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTcwLFxuICAgICAgICA3NyxcbiAgICAgICAgNTEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE0NixcbiAgICAgICAgOTksXG4gICAgICAgIDE2NixcbiAgICAgICAgMjA0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDcyLFxuICAgICAgICAzMCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE0MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTY5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIldjbkx4dzFNcUtzbkV6YTNYYVo0NTYvUUxESFdvdlo0cVZTMVJKUVYzTlk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImhPOUpwYkM3U0ZxUWVnS3dQOGVwSXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiZTQ3YzczNDctZmE3ZS00NDZjLWFkNzctMDBjZDg4ZmJmYzQ0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0NixcbiAgICAgIDExMSxcbiAgICAgIDE2MCxcbiAgICAgIDg2LFxuICAgICAgMzgsXG4gICAgICAxMTEsXG4gICAgICAxODEsXG4gICAgICA1LFxuICAgICAgMTAsXG4gICAgICA4NyxcbiAgICAgIDE1NSxcbiAgICAgIDE4LFxuICAgICAgMjQsXG4gICAgICAxNjMsXG4gICAgICAxNjYsXG4gICAgICAyMjksXG4gICAgICAxNzIsXG4gICAgICAxNjcsXG4gICAgICAxMzUsXG4gICAgICA3NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2LFxuICAgICAgNTMsXG4gICAgICAxNDEsXG4gICAgICAzMixcbiAgICAgIDEyMCxcbiAgICAgIDEsXG4gICAgICA5OSxcbiAgICAgIDE0NSxcbiAgICAgIDE1MixcbiAgICAgIDE2MSxcbiAgICAgIDE3MSxcbiAgICAgIDQ4LFxuICAgICAgMjA5LFxuICAgICAgMjM1LFxuICAgICAgMTg3LFxuICAgICAgMzUsXG4gICAgICAxNDcsXG4gICAgICAyMzAsXG4gICAgICA5NCxcbiAgICAgIDkzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjRSOUg4SDZXXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzM1NTgxMTEzODY6NjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE2OTg3OTEwOTkwNjY1NTo2NEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQQ1R2T1lERU9PMTZMUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkVqdkFXdGZ6OGJQWVBIRXJHd0ZNVVJJc1JRb1JuOEtSK0h3b05hSG1GeEk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiRllaS1J6R0VoSzlLdmI5Rm1BY0NGODNJMW9LTyszenJmaFdoVUJKQW1DT0VEWGZ5bFVLbFY3YTBpRE5TRklFM3gyMTNGQ0thUnIxRXBIaWRyRDY0Qmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwieWJmWWNuOVcwRUpoeWxibFdTN1N0RU1wK2ZjeXowRy9yRmVkanUyR1BEbVBVamZtaEIxZE44R2tHZ2lTZThHRGw2WllGb1BmdEt1WEpaWDZpWk1zalE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjMzNTU4MTExMzg2OjY0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjEzNzU0NjMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFPdU9cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU91Ty5qc29uIjogIntcImtleURhdGFcIjpcIk5RMk1tTjFacWppWmZVdlFuWERUOTZGTmMzUEd2MjFlS3hVMmM0UFBScTg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTAyMDIwMTQ1NixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIxMzc1NDY4NzE4XCJ9Igp9"  // PUT your SESSION_ID 


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
