function openTG() {
    const ua = navigator.userAgent.toLowerCase();
    const isTikTokBrowser = /ttwebview|aweme|musical_ly/i.test(ua);

    if (isTikTokBrowser) {
        // проверяем, нет ли уже оверлея
        if (!document.querySelector('.tiktok-overlay')) {
            const overlay = document.createElement('div');
            overlay.className = 'tiktok-overlay';
            overlay.innerHTML = `
                <div class="overlay-content">
                    <p>Чтобы открыть канал Telegram:</p>
                    <ol style="text-align: left; padding-left: 18px; margin: 10px 0;">
                        <li>Нажмите ⋮ (три точки) в правом верхнем углу.</li>
                        <li>Выберите "Открыть в браузере".</li>
                        <li>После этого снова нажмите на кнопку ниже.</li>
                    </ol>
                    <button onclick="this.closest('.tiktok-overlay').remove();">Понятно</button>
                </div>
            `;
            document.body.appendChild(overlay);
        }
        return;
    }

    // обычный браузер — редирект на Telegram
    window.location.href = "https://t.me/+_PzFoPA1DmM1NjIy";
}

function copyLink() {
    const url = "https://t.me/+_PzFoPA1DmM1NjIy";
    navigator.clipboard.writeText(url)
    .then(() => { alert('Ссылка скопирована! Вставьте в браузер и откройте.'); })
    .catch(() => { alert('Не удалось скопировать ссылку. Попробуйте вручную.'); });
}
