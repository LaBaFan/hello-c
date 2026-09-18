// Content and navigation remain usable without JavaScript.
const article = document.querySelector('.prose');
const toc = document.querySelector('.page-toc');

if (article && toc) {
  const headings = article.querySelectorAll('h2, h3');
  const list = document.createElement('ol');
  headings.forEach((heading, index) => {
    if (!heading.id) heading.id = `section-${index + 1}`;
    const item = document.createElement('li');
    const link = document.createElement('a');
    link.href = `#${heading.id}`;
    link.textContent = heading.textContent;
    if (heading.tagName === 'H3') item.className = 'toc-subheading';
    item.append(link);
    list.append(item);
  });
  if (headings.length) {
    toc.querySelector('nav').append(list);
    toc.hidden = false;
  }
}
