from telegram import Update, InlineKeyboardButton, InlineKeyboardMarkup, WebAppInfo
from telegram.ext import ApplicationBuilder, CommandHandler, ContextTypes

TOKEN = "8105645467:AAFpjSSbylWxSAJOZycyMIStvo3-nKkBPZg"
WEBAPP_URL = "https://ahuenniy205.github.io/miniapp/index.html"

async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    keyboard = [
        [InlineKeyboardButton("Открыть MiniApp", web_app=WebAppInfo(url=WEBAPP_URL))]
    ]
    reply_markup = InlineKeyboardMarkup(keyboard)
    await update.message.reply_text("Нажми кнопку, чтобы открыть MiniApp:", reply_markup=reply_markup)

app = ApplicationBuilder().token(TOKEN).build()
app.add_handler(CommandHandler("start", start))
app.run_polling()
