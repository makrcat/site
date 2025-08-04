const target = document.querySelector('.hover-target');
const tooltip = document.getElementById('tooltip');

target.addEventListener('mouseenter', () => {
  tooltip.style.display = 'block';
});

target.addEventListener('mouseleave', () => {
  tooltip.style.display = 'none';
});

target.addEventListener('mousemove', (e) => {
  tooltip.style.left = `${e.clientX + 10}px`;
  tooltip.style.top = `${e.clientY + 10}px`;
});
