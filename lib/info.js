exports.info = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2, grupch3) => {
	return `*MENU ${BotName}*
  
Hi, *${id.split("@s.whatsapp.net")[0]}* 👋️
Berikut adalah info pada bot ini!✨

         ───
📆 *${tampilTanggal}*
⏱️ *${tampilWaktu}*
         ───


╭───「 *INFO BOT!* 」
   
├≽️⚜ *GITHUB*: https://github.com/Wawansugionoasmokin/wawan-bot
├≽️⚜ *AUTHOR*: _Wawan ID_
├≽️⚜ *DESIGNER*: _Wawan ID_
├≽️⚜ *YOUTUBE*: _Mhmmd Ridwan_
├≽️⚜ *SCRIPT ORIGINAL BY*: ABDUL MUTTAQIN / FDCIABDUL

♻️ *JANGAN  LUPA DONASI AGAR BOT AKTIF TERUS!*
♻️ *MAU DONASI? SILAHKAN KETIK #donate*

├───≽️「 *ABOUT* 」
 
 
├≽️Follow akun instagram admin ${instagramlu}
 
├───≽️「 *INFORMASI COVID-19 TERBARU!* 」
 
├≽️📊 POSITIF: *${corohelp.confirmed.value}*
├≽️📉 SEMBUH: *${corohelp.recovered.value}*
├≽️📈 MENINGGAL: *${corohelp.deaths.value}*
├≽️🗂️ UPDATE: *${corohelp.lastUpdate}*
 
├≽️💫 _TETAP JAGA KESEHATAN DAN SELALU PAKAI MASKER!_
 
├≽️☎️ WA : *${whatsapplu}*
 
├≽️📌 *Gunakan dengan bijak* ‼️
├≽️📌 *Bot ini berjalan ${kapanbotaktif}* ‼️


├≽️💥 *Group WhatsApp* ; ${grupch2}
├≽️💥 *YouTube* : ${grupch2}
├≽️💥 *Instagram* : ${grupch3}
 
 
├≽️   📍*MADE BY ${BotName}*📍
╰ ───`
}
