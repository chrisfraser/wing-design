/* Shared retrieval-quiz widget. Reused across lessons.
 *
 * Markup contract:
 *   <div class="quiz" data-answer="1">
 *     <p class="q">Question text…</p>
 *     <button data-i="0">First option</button>
 *     <button data-i="1">Correct option</button>
 *     <button data-i="2">Third option</button>
 *     <p class="explain">Shown after answering. Explains WHY.</p>
 *   </div>
 *
 * Answers should be equal-length so formatting leaks no clues.
 */
(function () {
  function styleInject() {
    if (document.getElementById('quiz-css')) return;
    var s = document.createElement('style');
    s.id = 'quiz-css';
    s.textContent = [
      '.quiz{border:1px solid var(--rule);border-radius:4px;padding:1rem 1.2rem;margin:1.6rem 0;background:#fff}',
      '.quiz .q{font-weight:600;margin:0 0 0.8rem}',
      '.quiz button{display:block;width:100%;text-align:left;margin:0.35rem 0;padding:0.55rem 0.8rem;',
      'font:inherit;font-size:0.95rem;background:var(--paper);border:1px solid var(--rule);border-radius:3px;cursor:pointer;transition:background .15s}',
      '.quiz button:hover{background:var(--accent-soft)}',
      '.quiz button.correct{background:#e6f0e8;border-color:var(--good);color:var(--good);font-weight:600}',
      '.quiz button.wrong{background:#f6e4e1;border-color:var(--bad);color:var(--bad)}',
      '.quiz button:disabled{cursor:default}',
      '.quiz .explain{display:none;margin:0.8rem 0 0;padding-top:0.7rem;border-top:1px solid var(--rule);color:var(--muted);font-size:0.93rem}',
      '.quiz .explain.show{display:block}'
    ].join('');
    document.head.appendChild(s);
  }

  function init() {
    styleInject();
    document.querySelectorAll('.quiz').forEach(function (q) {
      var answer = parseInt(q.getAttribute('data-answer'), 10);
      var explain = q.querySelector('.explain');
      q.querySelectorAll('button').forEach(function (btn) {
        btn.addEventListener('click', function () {
          var i = parseInt(btn.getAttribute('data-i'), 10);
          q.querySelectorAll('button').forEach(function (b) {
            b.disabled = true;
            var bi = parseInt(b.getAttribute('data-i'), 10);
            if (bi === answer) b.classList.add('correct');
          });
          if (i !== answer) btn.classList.add('wrong');
          if (explain) explain.classList.add('show');
        });
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else { init(); }
})();
