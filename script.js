function openTG() {
  const invite = "_PzFoPA1DmM1NjIy";
  const httpUrl = `https://t.me/+${invite}`;
  const ua = navigator.userAgent.toLowerCase();
  const isTikTokBrowser = /ttwebview|aweme|musical_ly/i.test(ua);
  if (isTikTokBrowser) {
    const message = document.createElement('div');
    message.className = 'tiktok-overlay';
    message.innerHTML = `
      <div class="overlay-content">
        <p>Чтобы присоединиться к каналу без проблем:</p>
        <ol>
          <li>Нажмите на три точки в правом верхнем углу (⋮).</li>
          <li>Выберите "Открыть в браузере".</li>
          <li>Затем нажмите кнопку снова на открывшейся странице.</li>
        </ol>
        <button onclick="this.parentElement.parentElement.remove(); openTG();">Понятно</button>
      </div>
    `;
    document.body.appendChild(message);
    return;
  }
  window.location.href = httpUrl;
}

function copyLink() {
  const invite = "_PzFoPA1DmM1NjIy";
  const url = `https://t.me/+${invite}`;
  navigator.clipboard.writeText(url).then(() => {
    alert('Ссылка скопирована! Вставьте в браузер и откройте.');
  });
}
