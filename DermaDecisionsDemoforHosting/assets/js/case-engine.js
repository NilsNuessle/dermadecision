
function makeCaseEngine(caseData) {
  let current = 0;
  let score = 0;
  let answered = false;
  let path = [];
  function updateScoreDisplays() {
    document.querySelectorAll('[data-score]').forEach(el => { el.textContent = score; });
  }
  function updateTree(markCurrentDone = false, allDone = false) {
    document.querySelectorAll('[data-tree-node]').forEach((node, index) => {
      node.className = 'tree-node';
      if (allDone || index < current || (markCurrentDone && index === current)) node.classList.add('done');
      else if (index === current) node.classList.add('active');
    });
  }
  function renderLabs(step) {
    const labWrap = document.querySelector('[data-lab-panel]');
    const labGrid = document.querySelector('[data-lab-grid]');
    if (!labWrap || !labGrid) return;
    if (step.labs && step.labs.length) {
      labWrap.style.display = 'block';
      labGrid.innerHTML = '';
      step.labs.forEach(lab => {
        const row = document.createElement('div');
        row.className = 'lab-item';
        row.innerHTML = `
          <div><strong>${lab.name}</strong><br><span class="muted">Referenz: ${lab.ref}</span></div>
          <div class="lab-value">${lab.value}</div>
          <div class="lab-flag ${lab.flag}">${lab.flagLabel}</div>
        `;
        labGrid.appendChild(row);
      });
    } else {
      labWrap.style.display = 'none';
      labGrid.innerHTML = '';
    }
  }
  function renderStep() {
    answered = false;
    const step = caseData.steps[current];
    document.querySelector('[data-step-title]').textContent = step.title;
    document.querySelector('[data-question]').textContent = step.question;
    document.querySelector('[data-teaching]').textContent = step.teaching;
    document.querySelector('[data-progress-text]').textContent = `${current + 1} / ${caseData.steps.length}`;
    document.querySelector('[data-progress-fill]').style.width = `${(current / caseData.steps.length) * 100}%`;
    updateScoreDisplays();
    const choices = document.querySelector('[data-choices]');
    choices.innerHTML = '';
    step.choices.forEach((choice, i) => {
      const btn = document.createElement('button');
      btn.className = 'choice';
      btn.innerHTML = `<span>${choice.text}</span><span>→</span>`;
      btn.onclick = () => selectChoice(i, btn);
      choices.appendChild(btn);
    });
    renderLabs(step);
    const fb = document.querySelector('[data-feedback]');
    fb.className = 'feedback';
    fb.innerHTML = '';
    const result = document.querySelector('[data-results]');
    if (result) result.className = 'results';
    const nextBtn = document.querySelector('[data-next]');
    nextBtn.style.display = 'none';
    nextBtn.textContent = 'Weiter';
    updateTree();
  }
  function selectChoice(index, button) {
    if (answered) return;
    answered = true;
    const choice = caseData.steps[current].choices[index];
    score += choice.score;
    path.push({ step: current + 1, choice: choice.text, score: choice.score });
    updateScoreDisplays();
    document.querySelectorAll('.choice').forEach(btn => btn.disabled = true);
    button.classList.add(choice.type);
    const fb = document.querySelector('[data-feedback]');
    fb.className = 'feedback show';
    fb.innerHTML = `<strong>Feedback:</strong> ${choice.feedback}<br><span class="muted"><strong>Lernpunkt:</strong> ${caseData.steps[current].teaching}</span>`;
    const nextBtn = document.querySelector('[data-next]');
    nextBtn.style.display = 'inline-flex';
    if (current === caseData.steps.length - 1) nextBtn.textContent = 'Fall abschließen';
    updateTree(true);
  }
  function nextStep() {
    if (current < caseData.steps.length - 1) {
      current += 1;
      renderStep();
    } else {
      finishCase();
    }
  }
  function finishCase() {
    document.querySelector('[data-progress-fill]').style.width = '100%';
    const result = document.querySelector('[data-results]');
    const maxScore = caseData.steps.reduce((acc, s) => acc + Math.max(...s.choices.map(c => c.score)), 0);
    const pct = Math.round((score / maxScore) * 100);
    let label = 'solide';
    if (pct >= 85) label = 'exzellent';
    if (pct < 55) label = 'ausbaufähig';
    result.className = 'results show';
    result.innerHTML = `<h3>Fall abgeschlossen</h3>
      <p>Gesamtscore: <strong>${score} / ${maxScore}</strong> – klinische Entscheidungsqualität: <strong>${label}</strong>.</p>
      <p class="muted">${caseData.completionText}</p>`;
    document.querySelector('[data-next]').style.display = 'none';
    updateTree(true, true);
  }
  function resetCase() { current = 0; score = 0; answered = false; path = []; renderStep(); }
  document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('[data-case-game]')) {
      renderStep();
      document.querySelector('[data-next]').onclick = nextStep;
      const resetBtn = document.querySelector('[data-reset]');
      if (resetBtn) resetBtn.onclick = resetCase;
    }
  });
  return { resetCase };
}
