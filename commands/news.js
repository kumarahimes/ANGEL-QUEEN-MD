//====================================================================
cmd({
    pattern: "hirunews",
    react: "🗞️",
    desc: "hirutv news",
    category: "news",
    use : ".hirunews",
    filename: __filename
},
async(MrHansamala, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

const latest_hiru_data = await hiru.latestHiru();
await Secktor.sendMessage(from,  { image: { url: latest_hiru_data.img }, caption: `*${latest_hiru_data.title}*\n\n${latest_hiru_data.desc}\n\n${latest_hiru_data.link}\n\n *©ꜱʜᴇɴᴜ Qᴜᴇᴇɴ ᴍᴅ*`}, { quoted: mek })
}
catch(e){
console.log(e)
}})
