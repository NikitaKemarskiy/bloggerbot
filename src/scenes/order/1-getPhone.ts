import { Markup } from 'telegraf';
import StartMessage from '../../controllers/start';
import IScene from '../../typings/scene';

const Scene = require('telegraf/scenes/base');

const scene: IScene = new Scene('order/getPhone');

scene.backScene = StartMessage;
scene.nextScene = 'order/getTopic';

const keyboard = Markup.keyboard([Markup.contactRequestButton('Отправить номер 📞'), Markup.button('⏪ Назад')])
	.oneTime()
	.resize();

// Точка входа в сцену
scene.enter(async (ctx: any) => {
	ctx.session.order = {};
	await ctx.replyWithHTML(
		'Введите ваш <b>номер телефона</b> или нажмите на кнопку "Отправить номер 📞"',
		keyboard.extra()
	);
});

scene.on('contact', async (ctx) => {
	await ctx.scene.leave();
	// @ts-ignore
	await ctx.reply('Телефон получили! 👌', Markup.removeKeyboard().extra());
	ctx.session.order.phoneNumber = ctx.message.contact.phone_number;
	await scene.next(ctx);
});

scene.on('text', async (ctx: any) => {
	await ctx.scene.leave();
	// @ts-ignore
	await ctx.reply('Телефон получили! 👌', Markup.removeKeyboard().extra());
	ctx.session.order.phoneNumber = ctx.message.text;
	await scene.next(ctx);
});

export default scene;

