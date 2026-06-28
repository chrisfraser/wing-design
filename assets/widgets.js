/* ============================================================================
   Wing Design course — shared widget behaviour
   Auto-wires any markup that follows the conventions below. Load with `defer`.
   Pairs with the .quiz / .calc styles in assets/styles.css.
   ============================================================================ */
(function () {
  'use strict';

  /* ---- Quizzes ----------------------------------------------------------
     <div class="quiz" data-explain-right="..." data-explain-wrong="...">
       <div class="q-text">Question?</div>
       <div class="q-options">
         <button class="opt" data-correct>Right answer</button>
         <button class="opt">Distractor</button>
       </div>
       <div class="q-feedback"></div>
     </div>
     Per-option override: add data-feedback="..." to a button.
  ------------------------------------------------------------------------- */
  function wireQuiz(quiz) {
    var options = Array.prototype.slice.call(quiz.querySelectorAll('button.opt'));
    var feedback = quiz.querySelector('.q-feedback');
    var answered = false;

    options.forEach(function (btn) {
      btn.addEventListener('click', function () {
        if (answered) return;
        answered = true;
        var isRight = btn.hasAttribute('data-correct');

        options.forEach(function (o) {
          o.disabled = true;
          if (o.hasAttribute('data-correct')) o.classList.add('correct');
        });
        if (!isRight) btn.classList.add('wrong');

        if (feedback) {
          var msg = btn.getAttribute('data-feedback');
          if (!msg) {
            msg = isRight
              ? (quiz.getAttribute('data-explain-right') || 'Correct.')
              : (quiz.getAttribute('data-explain-wrong') || 'Not quite — see the highlighted answer.');
          }
          feedback.innerHTML = (isRight ? '✓ ' : '✗ ') + msg;
          feedback.classList.add('show', isRight ? 'right' : 'nope');
        }
      });
    });
  }

  /* ---- Range helper -----------------------------------------------------
     <input type="range" data-output="#myOutput" data-suffix=" kHz">
     Mirrors the live value into the element matched by data-output.
     Lessons add their own 'input' listeners for the real computation.
  ------------------------------------------------------------------------- */
  function wireRange(input) {
    var sel = input.getAttribute('data-output');
    if (!sel) return;
    var out = document.querySelector(sel);
    if (!out) return;
    var suffix = input.getAttribute('data-suffix') || '';
    var sync = function () { out.textContent = input.value + suffix; };
    input.addEventListener('input', sync);
    sync();
  }

  /* ---- Checklist with live tally ----------------------------------------
     <div class="checklist-widget">
       <ul class="checklist">
         <li data-check>An airfoil chosen for low Re</li>
       </ul>
       <div class="checklist-bar"><span data-checklist-progress></span></div>
     </div>
  ------------------------------------------------------------------------- */
  function wireChecklist(widget) {
    var items = Array.prototype.slice.call(widget.querySelectorAll('[data-check]'));
    var progressEl = widget.querySelector('[data-checklist-progress]');

    function update() {
      var done = 0, total = items.length;
      items.forEach(function (it) { if (it.classList.contains('done')) done++; });
      if (progressEl) progressEl.textContent = done + ' / ' + total + ' done';
    }

    items.forEach(function (it) {
      it.setAttribute('role', 'button');
      it.setAttribute('tabindex', '0');
      var toggle = function () { it.classList.toggle('done'); update(); };
      it.addEventListener('click', toggle);
      it.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); }
      });
    });
    update();
  }

  /* ---- init -------------------------------------------------------------- */
  function init() {
    document.querySelectorAll('.quiz').forEach(wireQuiz);
    document.querySelectorAll('input[type=range][data-output]').forEach(wireRange);
    document.querySelectorAll('.checklist-widget').forEach(wireChecklist);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  /* Expose helpers for lesson-specific scripts that want them. */
  window.WingCourse = { wireQuiz: wireQuiz, wireRange: wireRange, wireChecklist: wireChecklist };
})();
