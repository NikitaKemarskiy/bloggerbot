import { Markup } from 'telegraf';

const DEFAULT_MESSAGE = 'Здравствуйте! Вас приветствует бот по рекламе у &#60;<b>ИМЯ БЛОГГЕРА</b>&#62;\nЗдесь вы можете ознакомиться с правилами, ценами и статистикой\nДля заказа рекламы жмите кнопку "Заказать" ниже👇';

const StartMessage = {
	keyboard: Markup.inlineKeyboard(
		[
			Markup.callbackButton('Статистика 📊', 'stats'),
			Markup.callbackButton('Цены 💰', 'prices'),
			Markup.callbackButton('Правила❓', 'rules'),
			Markup.callbackButton('Заказать ✅', 'order')
		],
		{ columns: 2 }
	),
	send: async (ctx, message: string = DEFAULT_MESSAGE) => {
		await ctx.replyWithHTML(message, StartMessage.keyboard.extra());
	}
};

export default StartMessage;
