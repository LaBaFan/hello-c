document.querySelectorAll('article pre > code').forEach((code) => {
  const pre = code.parentElement;
  const block = document.createElement('div');
  block.className = 'code-block';
  const toolbar = document.createElement('div');
  toolbar.className = 'code-toolbar';
  const status = document.createElement('span');
  status.setAttribute('role', 'status');
  const button = document.createElement('button');
  button.type = 'button';
  button.textContent = '复制';
  button.setAttribute('aria-label', '复制代码');
  toolbar.append(status, button);
  pre.before(block);
  block.append(toolbar, pre);

  button.addEventListener('click', async () => {
    button.disabled = true;
    status.textContent = '正在复制…';
    try {
      await navigator.clipboard.writeText(code.textContent);
      status.textContent = '已复制';
    } catch {
      status.textContent = '复制失败，请手动选择代码复制';
    } finally {
      button.disabled = false;
    }
  });
});
