// Run: node scripts/check_copy_code.mjs
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';

const source = readFileSync(new URL('../docs/assets/copy-code.js', import.meta.url), 'utf8');
for (const outcome of ['success', 'denied', 'unavailable']) {
  const elements = [];
  const pre = { before(block) { this.wrapper = block; } };
  const code = { parentElement: pre, textContent: '  printf("<你好> & test\\n");\nreturn 0;\n' };
  let copied;
  runInNewContext(source, {
    document: {
      querySelectorAll(selector) {
        assert.equal(selector, 'article pre > code');
        return [code];
      },
      createElement(tag) {
        const element = {
          tag,
          setAttribute(key, value) { this[key] = value; },
          append(...children) { this.children = children; },
          addEventListener(event, handler) { this[event] = handler; },
        };
        elements.push(element);
        return element;
      },
    },
    navigator: outcome === 'unavailable' ? {} : {
      clipboard: { async writeText(text) {
        if (outcome === 'denied') throw new Error('Permission denied');
        copied = text;
      } },
    },
  });
  const button = elements.find(element => element.tag === 'button');
  const status = elements.find(element => element.role === 'status');
  const pending = button.click();
  if (outcome !== 'unavailable') assert.equal(button.disabled, true);
  await pending;
  assert.equal(button.disabled, false);
  assert.equal(status.textContent, outcome === 'success' ? '已复制' : '复制失败，请手动选择代码复制');
  if (outcome === 'success') assert.equal(copied, code.textContent);
  assert.equal(pre.wrapper.children[1], pre);
}
console.log('OK: exact code copied, denied/unavailable clipboard handled');
