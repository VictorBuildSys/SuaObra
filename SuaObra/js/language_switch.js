document.addEventListener('DOMContentLoaded', function() {
  const languageSwitch = document.getElementById('language-switch')

  languageSwitch.addEventListener('change', function() {
    const ptTexts = document.querySelectorAll('.pt');
    const enTexts = document.querySelectorAll('.en');

    if (this.checked) {
      ptTexts.forEach(el => el.style.display = 'none');
      enTexts.forEach(el => el.style.display = 'inline');
    } else {
      ptTexts.forEach(el => el.style.display = 'inline');
      enTexts.forEach(el => el.style.display = 'none');
    }
  });
});
