const { tlang, botpic, cmd, prefix, runtime, Config, formatp, fetchJson } = require('../lib')
const Esana = require('@sl-code-lords/esana-news');
var api = new Esana()

cmd({
    pattern: 'esana',
    alias: ['esananews','news'],
    desc: 'whatsapp beta infomation.',
    category: '🗞️NEWS',
    react: "📃",
    use: '<wbi>',
  },
        async(Void, citel, text) => {

       try { const latst = await api.latest_id();
            const nws = latst.results.news_id
            let nn = text || nws
            const ress = await api.news(nn);
            const res = ress.results;

            const txt2 = await Void.sendMessage(citel.chat, {image: {url: res.COVER}, caption: `\n*┠─❲ 👩🏻‍🎨 𝚫𝚴𝐆𝚵𝐋 𝐐𝐔𝚵𝚵𝚴 𝚴𝚵𝐖𝐒 🗞️❳* \n\n*┃◉* *⇨ ᴛɪᴛᴇʟ :* ${res.TITLE}\n\n*┃◉* *⇨ ᴅᴀᴛᴇ :* ${res.PUBLISHED}\n\n*┃◉* *⇨ ᴜʀʟ :* ${res.URL}\n\n*┃◉* *⇨ Description :* ${res.DESCRIPTION}\n\n*𝙿𝙾𝚆𝙴𝚁𝙳 𝙱𝚈 𝙷𝙸𝙼𝙴𝚂𝙷 ®*\n\n`}, { quoted: citel });

                await Void.sendMessage(citel.chat, { react: {
        text: "📰",
        key: txt2.key,
            } } );

    } catch (e) {
    console.log(e)
    citel.reply("❗ *" + e + "*")
  }
})
