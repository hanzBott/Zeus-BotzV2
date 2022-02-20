let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('_Proses...,proses nya lama?,berarti lu kaga donasi_')
  let res = `https://api.zeks.xyz/api/logobp?text=${response}&apikey=apivinz`
  conn.sendFile(m.chat, res, 'logobp.jpg', `Done`, m, false)
}
handler.help = ['logobp'].map(v => v + ' <teks>')
handler.tags = ['sticker']
handler.command = /^(logobp)$/i

module.exports = handler

