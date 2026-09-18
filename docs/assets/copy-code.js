document.querySelectorAll('article pre > code').forEach((code) => {
  const pre = code.parentElement;
  const block = document.createElement('div');
  block.className = 'code-block';
  const languageClass = Array.from(code.closest('[class*="language-"]')?.classList || [])
    .find((name) => name.startsWith('language-'));
  const language = languageClass?.slice('language-'.length).toLowerCase() || 'text';
  const labels = {
    bash: 'Bash', sh: 'Shell', shell: 'Shell', zsh: 'Zsh',
    console: 'Terminal', shell_session: 'Terminal',
    bat: 'CMD', batch: 'CMD', cmd: 'CMD', powershell: 'PowerShell',
    c: 'C', cpp: 'C++', text: 'Text', plaintext: 'Text',
  };
  const shellLanguages = ['bash', 'sh', 'shell', 'zsh', 'console', 'shell_session', 'bat', 'batch', 'cmd', 'powershell'];
  const toolbar = document.createElement('div');
  toolbar.className = 'code-toolbar';
  const dots = document.createElement('span');
  dots.className = 'terminal-dots';
  dots.setAttribute('aria-hidden', 'true');
  dots.innerHTML = '<span></span><span></span><span></span>';
  const caption = document.createElement('span');
  caption.className = 'code-caption';
  const icon = shellLanguages.includes(language) ? 'terminal' : 'file-lines';
  caption.innerHTML = `<svg class="fa-icon" aria-hidden="true" focusable="false"><use href="#fa-${icon}"></use></svg>`;
  const label = document.createElement('span');
  label.textContent = labels[language] || language;
  caption.append(label);
  // Keyboard users can scroll long commands without leaving the code window.
  pre.setAttribute('tabindex', '0');
  pre.setAttribute('aria-label', `${label.textContent} 代码`);
  const status = document.createElement('span');
  status.setAttribute('role', 'status');
  status.className = 'copy-status';
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'copy-code';
  button.title = '复制代码';
  const copyIcon = '<svg class="fa-icon" aria-hidden="true" focusable="false"><use href="#fa-copy"></use></svg>';
  button.innerHTML = copyIcon;
  button.setAttribute('aria-label', '复制代码');
  pre.before(block);
  toolbar.append(dots, caption, button);
  block.append(toolbar, pre, status);
  let resetTimer;

  button.addEventListener('click', async () => {
    clearTimeout(resetTimer);
    button.innerHTML = copyIcon;
    button.disabled = true;
    status.textContent = '正在复制…';
    try {
      await navigator.clipboard.writeText(code.textContent);
      status.textContent = '已复制';
      button.innerHTML = '<svg class="fa-icon" aria-hidden="true" focusable="false"><use href="#fa-check"></use></svg>';
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
