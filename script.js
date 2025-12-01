function openTG() {
  window.location.href = "https://plbtt.github.io/tg";
}

function copyLink() {
  const url = "https://plbtt.github.io/tg";
  navigator.clipboard.writeText(url).then(() => {
    alert('Ссылка скопирована! Вставьте в браузер и откройте.');
  });
}
