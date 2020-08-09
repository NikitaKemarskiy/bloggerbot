import StartMessage from '../controllers/start';

const AdminHandlers = {
	init: (bot) => {
		bot.action('stats', async (ctx) => {
			ctx.answerCbQuery();
			await ctx.replyWithMediaGroup([
				{ type: 'photo', media: 'https://lh3.googleusercontent.com/oaGyycLY6jlHYiDjxnK85obhnSujB6svxHhKGlAYN98eOBXCdeyulFuRM7sUHsbilKOmr-gOuyMmGGVU3j32ukqOHvctRO1MgNAJZ4GgGYT-lwWnpjEr3UeQ66CIWfF6cy1YY33FlbOv7Mr_UK1nfLtJE_5cqsrmf8sr_OJAfN3FfNTMptiMb7zoDgvrSL2-LOE2OblSA0xiAsRXUlzvM3wiEIZX6gPlAwfBGx4-_4gEU0yhnjv_PdcyUU5cOI6wjGs_vWsw0E7lW285WtGtpJtin3k9F9WwEQrihs2f-8auD0n6kaw7uo5o0Sft1l186_ZnHPGxQ0uNy8l_pXpKuQgyhN-GvZ9bLm0fp65btUJvtXXwsgFWp3hCIsigRaPUpUzvMMmI-3ya1ralS9sAY2iRylh01Nk_Z5BzuE80c3htn7zOR4Q4HocztcM--AEUcjogaRPR4uPRbJtmyU3F4nlJNB9SeJ2iprE6PZLK76LUd3SK57bCiCpseIKlGmYGoF9QKxzPC6Y-aFnY5PKzTZDdl168AO9dBhSLcc6aghyDYaFgKEWODTRLb_AdPqc9S-RhZqnEWYe9X2yS1sLgrLjwPNtsHg1U817fAxagBnOf5V_lSYPMjTKFvmSlbM8b1GyoWCWXF2wxyPMYWjv6XlSyLDq4s7imIXn2ESR5px46xZUEE8BqHf9vKvZP=w623-h1280-no?authuser=1' },
				{ type: 'photo', media: 'https://lh3.googleusercontent.com/g0AinaQ8WRTpnZr79469bnKoU6ekuQrVv9SRriBLnKFWvisc4Y-yv4Nzb_-8R5l8NeoD5IdQgS6ln5E8Z3YBlCppomNdrDdPCkFkL4HmMxT2-dsikLQN9RXi-KkX9Ln07GOOQo0-NMO9Yi7RYZFxNa3F78rnFXfB9RYO2SvfhurdAfOyGsexEQY7k4TtQD_04ZM7OBL7aP7UY4DbAyEi243Qw8x6sRqt--t4Xp2BOZbIdLB2-f_1ipKx-m65E5wNO9UKADaZDhAPmAsYP950tyVGCnjxd7HzimaBP64yPO6OxNw4sFEFMDBdlC0BPNbAu6DonI4zL89hTyMkHz4cB7fxLiZOfrfq0fLJASKDJS-xleaQTCA3Hkz9XJ0ad5Cx0-1vkfEk4gbK6xH-vHQdd_bcXO9Uc34gt62lK9eEYxQ5egaprRhwcuri0VXkrmVSHI4JHz8z8b9gNcPICo17CGaoYtbVRGd3V9cpJInsPUrZup0c3AHMXJqUFU5BxxcMgYFDvX-LNcpzBxe4XrVVNpD15OcVcJ7sYv-lR8hsTNIxGgN1kmCHVsw9Inhmm88X44cqKKXUY1_QzTWcZu4qwYGbieP4-X67JoSBL-XBBuChbpNHSSju9E1LHvrx2_dNb3ORUvODQaHpHB7boeEBdJu9HnmH1D5Tc6NGXWvHn8A4Gtxa4-7ARLurb9MY=w623-h1280-no?authuser=1' },
				{ type: 'photo', media: 'https://lh3.googleusercontent.com/s8tvwQPoUUwBNResX0mmWvBGiZViv37Hg2kcV4LvAgwtzhbyKbmAY0Q0UmOKcOTKd1vtpJdVfD2mTEC3Rg1cZKA8bGZgzA_OITeD7m7gacyweJUcl3V7kv_oP0Z14919DvFgQAd5ZqMjr4xQgNLEt7XYE8UZsxwf13UkQVXWvsfbNvgSUPzx35e7YTSGEsoR63Tsa3rLdDBM8KAwvFMGh2Otw9WU14Z6u1GiuJAOnrJmS5fKt1eYT0c5qscjXV7KkViZchu2hrDoc35gcTSVH-KdpZSTUwJCXGG0-fizf4WOA6eklEygyzSvT0dsaRrlpeBbdddv_hFepWW4T_oZwcT7lABkoLNLUwKBjCf6bg5ZtndVwI5QlKbEHm5xtZYu4GCQx-kB4aJMpi1VsdB1yD2dp-ZT2pdVDAXhBbKojEif2m2BgbliR6-2_46UG_Y-ZUMTGPHT0vNWg5uDUD-cwimf2uIFh8D-Uy0l8PdgEBj8D2Ny_nNGE-338bzl_9ZIqblWur61XWHI1op31YuBW-US_3HsDvKqUMCZOfVG_DNREbcvP5CH4Brza4CwD20KF3bUHu63PoG9d6ZKWIUi8MXIKQorxk29p1MadGLhc1_inUFeHmiZax31hiO5_PiK_LxPHTcsa6uCWTb3_wM7FgDS40LKeOzci0tJz7Ln165q6dAkuLt1G4OKMTJ1=w623-h1280-no?authuser=1' },
				{ type: 'photo', media: 'https://lh3.googleusercontent.com/aq4yVSOOlzg62AajpM7Els7P3zMLLA0RInYcPTf-oYtdOmBDR1rOB6D9w54Leb2LIwP55eQfuiwnnVf9idv_MkoQpd_UhRv05ygbKwg2bJUVCFv2pjIbRhSm5IM2E2bjYDXMZ2t_S93p0DqLkV5yTJ7Blg8Yh3P0KKaWQWLHonduMYdwBEOR6b2bKUjd7T6FzcGqHKwe84wJtEWtYoM1bYY4uLYlWrDu-MN0e5U6GwvtJ02xT3lqSg_C5BiuLEsPHtiy7doHtX7_T4Kr6Al1RmlOO1qso_p0uKIJ9gPlwRuV570HJh3-IKfC0EHrx-WyI3OADlNiO9KgGLarsnmBc31K4erdeeVwbYvwC4Qj15DudvGuAUvEuFWry3WnPZfvHj9VRSW69fb3IzdRx_wvBw9_HS9TGEOyMXN6TvUfPorkFMXXVi25vB8SpPh05pW-EyUHRu3SODyX7oJYKinjau-pNP1J1C9uzkk58EWw4hKclszgYq4DYqCr8wHXleZBIlfENCKIb-_EkG8Ouowr_b3qIv8g3bSzpF-GIid96qb9XonIPcyyqX1kCCMev9aYdEWS_c3AtvcXBlPPulFct1BOmRxkp71NBTTHosj1zoXrmInmVFkVMSsWdQUiyEnlmrUwO4qV9xEZW2KA-d0N41AvaOhBFIeVcBm5TfsjBkCtgc2s09YE_m7VYoup=w623-h1280-no?authuser=1' }
			]);
			await StartMessage.send(ctx, '☝️ <b>Статистика</b> ☝️');
		});

		bot.action('prices', async (ctx) => 
			ctx.answerCbQuery();{
			await StartMessage.send(
				ctx,
				'💰 <b>Стоимость услуг</b> 💰\n\n➡️ Обзор в стори - 7000 грн\n➡️ Пост - 12000 грн\n➡️ Если брать стори + пост даём скидку 20%\n➡️ Стори без товара/ с возвратом товара/ разговорные об услуге - 9000 грн\n➡️ Реклама личного аккаунта 2 Стори - 9000 грн\n\nСтори выходят в течении 1-2 недель после оплаты и получения, пост 1-3 недели, из-за очереди и создания поста'
			);
		});

		bot.action('rules', async (ctx) => {
			ctx.answerCbQuery();
			await StartMessage.send(
				ctx,
				'❗<b>Мы не рекламируем</b>❗\n\n1. Подделки\n2. Низкокачественные товары\n3. Финансовые пирамиды\n4. Марафоны\n5. Сетевой бизнес\n6. Заработки\n7. Ставки'
			);
		});

		bot.action('order', async (ctx) => {
			ctx.answerCbQuery();
			await ctx.scene.enter('order/getPhone');
		});
	}
};

export default AdminHandlers;
