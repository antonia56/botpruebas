import { sticker } from '../lib/sticker.js'
let handler = m => m

handler.all = async function (m, {conn}) {
let chat = global.db.data.chats[m.chat]
    
if (m.mentionedJid.includes(this.user.jid) && m.isGroup && !chat.isBanned) {
let stiker = await sticker(imagen1, false, global.packname, global.author)  
this.sendFile(m.chat, stiker, 'sticker.webp', null, m, false, { 
contextInfo: { externalAdReply: { title: 'πππ©ππ½π€π©-ππΏ π', body: 'πππ©π πΏππ€π¨', sourceUrl: `https://github.com/GataNina-Li/GataBot-MD`, thumbnail: imagen2}}})}
    
return !0 }
export default handler
