// Run: node scripts/check_toc.mjs
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';

const source = readFileSync(new URL('../docs/assets/site.js', import.meta.url), 'utf8');
const element = () => ({ children: [], append(child) { this.children.push(child); } });
for (const count of [0, 2]) {
  const headings = [
    { tagName: 'H2', id: '语法', textContent: '语法' },
    { tagName: 'H3', id: '', textContent: '分号' },
  ].slice(0, count);
  const nav = element();
  const toc = { hidden: true, querySelector: () => nav };
  const media = { matches: true, addEventListener(event, callback) { this.change = callback; } };
  runInNewContext(source, {
    document: {
      querySelector: selector => selector === '.prose' ? { querySelectorAll: () => headings } : toc,
      createElement: element,
    },
    window: { matchMedia: () => media },
  });
  assert.equal(toc.hidden, count === 0);
  if (!count) continue;
  const items = nav.children[0].children;
  assert.equal(items.length, 2);
  assert.equal(items[0].children[0].href, '#语法');
  assert.equal(items[1].children[0].href, '#section-2');
  assert.equal(items[1].className, 'toc-subheading');
  assert.equal(toc.open, true);
  media.matches = false;
  media.change();
  assert.equal(toc.open, false);
  media.matches = true;
  media.change();
  assert.equal(toc.open, true);
}
console.log('OK: heading links, empty TOC and responsive expansion');
