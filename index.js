const writtenContent = document.body.querySelector('#contentElement');

const hero = document.createElement('img');
hero.src = "https://www.artonicweb.com/learn/wp-content/uploads/2018/05/move-hero-image-2017.png"

const banner = document.createElement('div');
banner.classList.add('banner');

const content = document.body.querySelector('.content');

setTimeout(() => {
  writtenContent.parentNode.insertBefore(hero, writtenContent);
  content.parentNode.insertBefore(banner, content);
}, 100);
