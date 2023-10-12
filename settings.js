//base by DGXeon (Xeon Bot Inc.)
//YouTube: @DGXeon
//Instagram: unicorn_xeon13
//Telegram: t.me/xeonbotinc
//GitHub: @DGXeon
//WhatsApp: +916909137213
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@DGXeon

const fs = require('fs')
const chalk = require('chalk')

//contact details
global.ownernomer = "6283146993017"
global.ownername = "Ikhsan"
global.ytname = "IG: malasnulisnamapengguna"
global.socialm = "FB: X Shan"
global.location = "Indonesia, JaTim, Tuban"

global.ownernumber = '6283146993017'  //creator number
global.ownername = 'Ikhsan' //owner name
global.botname = 'ShanBot' //name of the bot

//sticker details
global.packname = 'Sticker By'
global.author = 'ShanBot\n\nContact: +6283122390511'

//console view/theme
global.themeemoji = '🚩'
global.wm = "©2023 ShanBot All Right Reserved."

//theme link
global.link = 'https://chat.whatsapp.com/IpWP0AiNMLTAFKoVGaiMKg'

//custom prefix
global.prefa = ['','!','.','#','&']

//false=disable and true=enable
global.autoRecording = false //auto recording
global.autoTyping = false //auto typing
global.autorecordtype = true //auto typing + recording
global.autoread = true //auto read messages
global.autobio = true //auto update bio
global.anti92 = false //auto block +92 
global.autoread_status = true //auto view status/story

//menu type 
//v1 is image menu, 
//v2 is link + image menu,
//v3 is video menu,
//v4 is call end menu
global.typemenu = 'v1'

//reply messages
global.mess = {
    done: 'Done kak !',
    prem: 'Khusus member premium!!',
    admin: 'Khusus afmin group!',
    botAdmin: 'ShanBot harus jadi admin untuk memakai fitur ini!',
    owner: 'Khusus owner ShanBot!',
    group: 'Fitur hanya bisa digunakan didalam group!, Jika kamu tidak punya group yang ada Saya bisa langsung gabung ke group resmi kami di link berikut!\nhttps://chat.whatsapp.com/IpWP0AiNMLTAFKoVGaiMKg',
    private: 'Fitur khusus private message!',
    wait: 'Proses kak!',    
    error: 'Error!',
}

global.thumb = fs.readFileSync('./XeonMedia/thumb.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})