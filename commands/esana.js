const { tlang, botpic, cmd, prefix, runtime, Config, formatp, fetchJson } = require('../lib')
const Esana = require('@sl-code-lords/esana-news');
var api = new Esana()

cmd({
    pattern: 'esana',
    alias: ['esananews','news'],
    desc: 'whatsapp beta infomation.',
    category: 'downloader',
    react: "📃",
    use: '<wbi>',
  },
        async(Void, citel, text) => {

       try { const latst = await api.latest_id();
            const nws = latst.results.news_id
            let nn = text || nws
            const ress = await api.news(nn);
            const res = ress.results;

            const txt2 = await Void.sendMessage(citel.chat, {image: {url: res.COVER}, caption: `\n*┣━( _📃ＥＳＥＮＡ📃ＮＥＷＳ📃_ )* \n\n*┃◉* *⇨ ᴛɪᴛᴇʟ :* ${res.TITLE}\n\n*┃◉* *⇨ ᴅᴀᴛᴇ :* ${res.PUBLISHED}\n\n*┃◉* *⇨ ᴜʀʟ :* ${res.URL}\n\n*┃◉* *⇨ Description :* ${res.DESCRIPTION}\n\n*ANGEL QUEEN HIMESH*\n\n`}, { quoted: citel });

                await Void.sendMessage(citel.chat, { react: {
        text: "📰",
        key: txt2.key,
            } } );

    } catch (e) {
    console.log(e)
    citel.reply("❗ *" + e + "*")
  }
})
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

cmd({
    pattern: "derananews",
    react: "🗞️",
    desc: "Ada derana News news",
    category: "news",
    use : ".hirunews",
    filename: __filename
},
async(MrHansamala, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

const latest_derana_data = await derana.latestDerana();
await Secktor.sendMessage(from,  { image: { url: latest_derana_data.img }, caption: `*${latest_derana_data.title}*\n\n${latest_hiru_derana.desc}\n\n${latest_hiru_derana.link}\n\n *©ꜱʜᴇɴᴜ Qᴜᴇᴇɴ ᴍᴅ*`}, { quoted: mek })
}
catch(e){
console.log(e)
}}}
