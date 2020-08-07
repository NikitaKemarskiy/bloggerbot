import { Markup } from 'telegraf';
import StartMessage from '../../controllers/start';
import IScene from '../../typings/scene';

const Scene = require('telegraf/scenes/base');

const scene: IScene = new Scene('order/getTopic');

scene.backScene = 'order/getPhone';
scene.nextScene = StartMessage;

// Точка входа в сцену
scene.enter(async (ctx: any) => {
	const keyboard = scene.backInlineKeyboard;
	await ctx.replyWithHTML(
		'<b>Подробно опишите</b>, что и как будем рекламировать',
		keyboard.extra()
	);
});

scene.on('text', async (ctx: any) => {
	await ctx.scene.leave();
	ctx.session.order.topic = ctx.message.text;
	await scene.next(ctx, 'Заказ на рекламу успешно отправлен! 🎉');
});

export default scene;
