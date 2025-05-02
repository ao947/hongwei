const images = document.querySelectorAll('.photo-carousel a');
let currentIndex = 0;

// 初始化显示第一张
images.forEach((img, idx) => {
  img.style.display = idx === 0 ? 'block' : 'none';
});

setInterval(() => {
  images[currentIndex].style.display = 'none';
  currentIndex = (currentIndex + 1) % images.length;
  images[currentIndex].style.display = 'block';
}, 3000);
