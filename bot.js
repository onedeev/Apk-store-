from telegram import Update
from telegram.ext import Application, CommandHandler, ContextTypes
import random
import string
import requests
import json

# TOKEN & ADMIN ID LU
TOKEN = "8557655529:AAHTOcGb1Pf7uVNXlPx4fxcdddFy7jTSPpU"
ADMIN_ID = 8460744156

# GANTI DENGAN LINK GITHUB PAGES LU
WEBHOOK_URL = "https://github.com/onedeev/Apk-store-/blob/main/webhook.json"  # Ganti nanti

def generate_voucher(length=12):
    return ''.join(random.choices(string.ascii_uppercase + string.digits, k=length))

async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text(
        "FIANZ MOD STORE - VOUCHER BOT\n\n"
        "Perintah:\n"
        "/buat <jumlah> - Buat voucher (admin only)\n"
        "/cek - Cek status"
    )

async def buat(update: Update, context: ContextTypes.DEFAULT_TYPE):
    if update.message.from_user.id != ADMIN_ID:
        await update.message.reply_text("Lu bukan admin!")
        return
    
    if not context.args:
        await update.message.reply_text("Gunakan: /buat 10")
        return
    
    try:
        jumlah = int(context.args[0])
        if jumlah <= 0 or jumlah > 100:
            raise ValueError
    except:
        await update.message.reply_text("Jumlah harus 1-100!")
        return
    
    voucher = generate_voucher()
    
    # Kirim ke web
    try:
        requests.post(WEBHOOK_URL, json={"code": voucher, "coins": jumlah}, timeout=5)
        await update.message.reply_text(
            f"VOUCHER BERHASIL DIBUAT!\n\n"
            f"Kode: `{voucher}`\n"
            f"Nilai: +{jumlah} Coin\n\n"
            f"Masukkan di web untuk aktifkan!",
            parse_mode='Markdown'
        )
    except:
        await update.message.reply_text("Gagal kirim ke web! Cek webhook.")

async def cek(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text("Bot aktif. Gunakan /buat untuk bikin voucher.")

def main():
    app = Application.builder().token(TOKEN).build()
    app.add_handler(CommandHandler("start", start))
    app.add_handler(CommandHandler("buat", buat))
    app.add_handler(CommandHandler("cek", cek))
    print("Bot Fianz Mod Store aktif...")
    app.run_polling()

if __name__ == '__main__':
    main()