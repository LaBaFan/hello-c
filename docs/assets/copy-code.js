document.querySelectorAll('article pre > code').forEach((code) => {
  const pre = code.parentElement;
  const block = document.createElement('div');
  block.className = 'code-block';
  const status = document.createElement('span');
  status.setAttribute('role', 'status');
  status.className = 'copy-status';
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'copy-code';
  button.title = '复制代码';
  const copyIcon = '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="8" y="8" width="12" height="13" rx="2"/><path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3"/></svg>';
  button.innerHTML = copyIcon;
  button.setAttribute('aria-label', '复制代码');
  pre.before(block);
  block.append(pre, button, status);
  let resetTimer;

  button.addEventListener('click', async () => {
    clearTimeout(resetTimer);
    button.innerHTML = copyIcon;
    button.disabled = true;
    status.textContent = '正在复制…';
    try {
      await navigator.clipboard.writeText(code.textContent);
      status.textContent = '已复制';
      button.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2"><path d="m5 12 4 4L19 6"/></svg>';
    } catch {
      status.textContent = '复制失败，请手动选择代码复制';
    } finally {
      button.disabled = false;
      resetTimer = setTimeout(() => {
        button.innerHTML = copyIcon;
        status.textContent = '';
      }, 2500);
    }
  });
});
