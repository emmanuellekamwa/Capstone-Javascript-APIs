const displayToggle = (element) => {
  // eslint-disable-next-line no-unused-expressions
  element.style.display === 'none' ? element.style.display = 'block' : element.style.display = 'none';
  const title = document.getElementById('main-nav');
  const nav = document.getElementById('main-title');
  const section = document.getElementById('main-section');
  const footer = document.getElementById('footer');
  title.classList.toggle('blurred');
  section.classList.toggle('blurred');
  nav.classList.toggle('blurred');
  footer.classList.toggle('blurred');
};

export default displayToggle;