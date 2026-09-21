// Content and navigation remain usable without JavaScript.
const article = document.querySelector('.prose');
const toc = document.querySelector('.page-toc');

if (article && toc) {
  const headings = article.querySelectorAll('h2, h3, h4, h5, h6');
  const list = document.createElement('ol');
  headings.forEach((heading, index) => {
    if (!heading.id) heading.id = `section-${index + 1}`;
    const item = document.createElement('li');
    const link = document.createElement('a');
    link.href = `#${heading.id}`;
    link.textContent = heading.textContent;
    item.style.paddingLeft = `${(Number(heading.tagName[1]) - 2) * 14}px`;
    item.append(link);
    list.append(item);
  });
  if (headings.length) {
    toc.querySelector('nav').append(list);
    toc.hidden = false;
    const desktop = window.matchMedia('(min-width: 761px)');
    const syncToc = () => { toc.open = desktop.matches; };
    syncToc();
    desktop.addEventListener('change', syncToc);
  }
}
