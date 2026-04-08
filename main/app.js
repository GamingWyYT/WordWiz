/* 
{
    id: "languageFramweork",
    name: "framework",
    native: "framework",
    flag: "FW",

    vocab: [
        { foreign: "Example", english: "The English Translation", category: "Examples" },
    ],

    phrases: [
        { foreign: "Example", english: "The Same But A Sentence", context: "Examples" },
    ],

    grammar: [
        {
            title: "Example",
            text: "How Does The Grammar Of This Language Function?",
            examples: [
                { foreign: "Example", english: "The English Translation" },
                { foreign: "Example", english: "The English Translation" },
            ]
        },
    ]
},
*/

// ══════════════════════════════════════════════════════
//  STATE
// ══════════════════════════════════════════════════════
let currentLang = null;
let vocabCatFilter = 'All';
let phrasesCatFilter = 'All';
let selectedQuizCats = new Set();
let quizPool = [], quizIndex = 0, quizScore = 0, quizAnswered = false;

const LANGUAGE_REGISTRY = {
    _langs: [],
    register(lang) { this._langs.push(lang); },
    getAll() { return this._langs; }
};

let pathProgress = {};
try {
    const saved = localStorage.getItem('lingua_path_progress');
    if (saved) {
        const raw = JSON.parse(saved);
        for (const [k, v] of Object.entries(raw)) pathProgress[k] = new Set(v);
    }
} catch (e) { }

function savePathProgress() {
    try {
        const plain = {};
        for (const [k, v] of Object.entries(pathProgress)) plain[k] = [...v];
        localStorage.setItem('lingua_path_progress', JSON.stringify(plain));
    } catch (e) { }
}

function getNodeStatus(node, allNodes, completedSet) {
    if (completedSet.has(node.id)) return 'done';
    for (const n of allNodes) {
        if (!completedSet.has(n.id)) return n.id === node.id ? 'active' : 'locked';
    }
    return 'locked';
}

// ── BOOT ──────────────────────────────────────────────
function init() {
    renderLangPicker();
    renderNavLangs();
    document.querySelectorAll('.tab').forEach(t =>
        t.addEventListener('click', () => activateTab(t.dataset.tab))
    );
    initSettings();
    applySettings();
}

function renderLangPicker() {
    const el = document.getElementById('langPicker');
    el.innerHTML = '';
    LANGUAGE_REGISTRY.getAll().forEach(lang => {
        if (lang.id == "languageFramweork") return;
        const card = document.createElement('div');
        card.className = 'lang-card';
        card.id = `langCard-${lang.id}`;
        card.innerHTML = `<span class="lang-flag">${lang.flag}</span>
      <div class="lang-name">${lang.name}</div>
      <div class="lang-native">${lang.native}</div>`;
        card.addEventListener('click', () => selectLang(lang.id));
        el.appendChild(card);
    });
}

function renderNavLangs() {
    const el = document.getElementById('navLangs');
    el.innerHTML = '';
    LANGUAGE_REGISTRY.getAll().forEach(lang => {
        if (lang.id == "languageFramweork") return;
        const btn = document.createElement('button');
        btn.className = 'nav-lang-btn';
        btn.id = `navBtn-${lang.id}`;
        btn.textContent = `${lang.flag} ${lang.name}`;
        btn.addEventListener('click', () => selectLang(lang.id));
        el.appendChild(btn);
    });
}

function selectLang(id) {
    currentLang = LANGUAGE_REGISTRY.getAll().find(l => l.id === id);
    if (!currentLang) return;
    vocabCatFilter = phrasesCatFilter = 'All';

    document.querySelectorAll('.lang-card').forEach(c => c.classList.remove('selected'));
    document.querySelectorAll('.nav-lang-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(`langCard-${id}`)?.classList.add('selected');
    document.getElementById(`navBtn-${id}`)?.classList.add('active');

    const area = document.getElementById('lesson-area');
    area.classList.add('visible', 'animate-in');
    setTimeout(() => area.classList.remove('animate-in'), 500);

    activateTab('vocab');
    renderVocab(); renderPhrases(); renderGrammar(); renderPath();
}

// ── TABS ───────────────────────────────────────────────
function activateTab(id) {
    document.querySelectorAll('.tab').forEach(t => t.classList.toggle('active', t.dataset.tab === id));
    document.querySelectorAll('.tab-panel').forEach(p => p.classList.toggle('active', p.id === `tab-${id}`));
    if (id === 'quiz') renderQuizSetup();
    if (id === 'path') renderPath();
}

// ── VOCAB ──────────────────────────────────────────────
function renderVocab() {
    const lang = currentLang;
    document.getElementById('vocabTitle').innerHTML = `<span>${lang.flag}</span> ${lang.name} — Vocabulary`;
    renderVocabGrid();
}

function renderVocabGrid() {
    const lang = currentLang;
    const cats = ['All', ...new Set(lang.vocab.map(w => w.category))];
    const filtered = vocabCatFilter === 'All' ? lang.vocab : lang.vocab.filter(w => w.category === vocabCatFilter);

    // Filter bar
    const bar = document.getElementById('vocabCatFilter');
    bar.innerHTML = '';
    cats.forEach(cat => {
        const btn = document.createElement('button');
        btn.className = 'cat-btn' + (cat === vocabCatFilter ? ' active' : '');
        btn.textContent = cat;
        btn.addEventListener('click', () => { vocabCatFilter = cat; renderVocabGrid(); });
        bar.appendChild(btn);
    });

    document.getElementById('vocabCount').innerHTML =
        `Showing <strong>${filtered.length}</strong> of ${lang.vocab.length} words`;

    const grid = document.getElementById('vocabGrid');
    grid.innerHTML = '';
    filtered.forEach(item => {
        const card = document.createElement('div');
        card.className = 'vocab-card animate-in';
        card.innerHTML = `<div class="foreign">${item.foreign}</div>
      <div class="english">${item.english}</div>
      <div class="category-tag">${item.category}</div>`;
        card.addEventListener('click', () => card.classList.toggle('revealed'));
        grid.appendChild(card);
    });
}

// ── PHRASES ────────────────────────────────────────────
function renderPhrases() {
    const lang = currentLang;
    document.getElementById('phrasesTitle').innerHTML = `<span>${lang.flag}</span> ${lang.name} — Phrases`;
    renderPhrasesList();
}

function renderPhrasesList() {
    const lang = currentLang;
    const ctxs = ['All', ...new Set(lang.phrases.map(p => p.context))];
    const filtered = phrasesCatFilter === 'All' ? lang.phrases : lang.phrases.filter(p => p.context === phrasesCatFilter);

    const bar = document.getElementById('phrasesCatFilter');
    bar.innerHTML = '';
    ctxs.forEach(ctx => {
        const btn = document.createElement('button');
        btn.className = 'cat-btn' + (ctx === phrasesCatFilter ? ' active' : '');
        btn.textContent = ctx;
        btn.addEventListener('click', () => { phrasesCatFilter = ctx; renderPhrasesList(); });
        bar.appendChild(btn);
    });

    const list = document.getElementById('phrasesList');
    list.innerHTML = '';
    filtered.forEach(p => {
        const item = document.createElement('div');
        item.className = 'phrase-item animate-in';
        item.innerHTML = `<div class="phrase-foreign">${p.foreign}</div>
      <div class="phrase-english">${p.english}</div>
      <div class="phrase-context">${p.context}</div>`;
        list.appendChild(item);
    });
}

// ── GRAMMAR ────────────────────────────────────────────
function renderGrammar() {
    const lang = currentLang;
    document.getElementById('grammarTitle').innerHTML = `<span>${lang.flag}</span> ${lang.name} — Grammar`;
    const section = document.getElementById('grammarSection');
    section.innerHTML = '';
    lang.grammar.forEach(g => {
        const block = document.createElement('div');
        block.className = 'grammar-block animate-in';
        const examples = g.examples.map(e =>
            `<div class="grammar-example">${e.foreign}<span>→ ${e.english}</span></div>`
        ).join('');
        block.innerHTML = `<h3>${g.title}</h3><p>${g.text}</p>${examples}`;
        section.appendChild(block);
    });
}

// ── QUIZ SETUP ─────────────────────────────────────────
function renderQuizSetup() {
    const lang = currentLang;
    if (!lang) return;

    document.getElementById('quizTitle').innerHTML = `<span>${lang.flag}</span> ${lang.name} — Quiz`;
    document.getElementById('quizSetup').style.display = 'block';
    document.getElementById('quizActive').classList.remove('running');
    document.getElementById('quizResult').classList.remove('visible');

    const cats = [...new Set(lang.vocab.map(w => w.category))];
    selectedQuizCats = new Set(cats);

    const grid = document.getElementById('quizCatGrid');
    grid.innerHTML = '';

    // "All" toggle button
    const allBtn = document.createElement('button');
    allBtn.className = 'quiz-cat-btn selected';
    allBtn.id = 'quizBtnAll';
    allBtn.textContent = '★ All Categories';
    allBtn.addEventListener('click', () => {
        if (selectedQuizCats.size === cats.length) selectedQuizCats.clear();
        else cats.forEach(c => selectedQuizCats.add(c));
        syncQuizButtons(cats);
    });
    grid.appendChild(allBtn);

    cats.forEach(cat => {
        const btn = document.createElement('button');
        btn.className = 'quiz-cat-btn selected';
        btn.dataset.cat = cat;
        btn.textContent = cat;
        btn.addEventListener('click', () => {
            selectedQuizCats.has(cat) ? selectedQuizCats.delete(cat) : selectedQuizCats.add(cat);
            syncQuizButtons(cats);
        });
        grid.appendChild(btn);
    });

    syncQuizButtons(cats);
}

function syncQuizButtons(cats) {
    cats.forEach(cat => {
        const btn = document.querySelector(`.quiz-cat-btn[data-cat="${cat}"]`);
        if (btn) btn.classList.toggle('selected', selectedQuizCats.has(cat));
    });
    const allBtn = document.getElementById('quizBtnAll');
    if (allBtn) allBtn.classList.toggle('selected', selectedQuizCats.size === cats.length);
    updateQuizMeta();
}

function updateQuizMeta() {
    const lang = currentLang;
    const count = lang.vocab.filter(w => selectedQuizCats.has(w.category)).length;
    document.getElementById('quizMeta').innerHTML =
        `<strong>${count}</strong> word${count !== 1 ? 's' : ''} selected across <strong>${selectedQuizCats.size}</strong> categor${selectedQuizCats.size !== 1 ? 'ies' : 'y'}`;
    const btn = document.getElementById('btnStartQuiz');
    btn.disabled = count < 4;
    btn.textContent = count < 4 ? 'Select at least 4 words to start' : `Start Quiz (${count} words) →`;
}

// ── QUIZ ACTIVE ────────────────────────────────────────
function startQuiz() {
    quizPool = currentLang.vocab
        .filter(w => selectedQuizCats.has(w.category))
        .sort(() => Math.random() - 0.5);
    quizIndex = quizScore = 0;
    quizAnswered = false;

    document.getElementById('quizSetup').style.display = 'none';
    document.getElementById('quizResult').classList.remove('visible');
    document.getElementById('quizActive').classList.add('running');
    showQuestion();
}

function showQuestion() {
    if (quizIndex >= quizPool.length) { showResult(); return; }

    const current = quizPool[quizIndex];
    quizAnswered = false;

    const pct = Math.round((quizIndex / quizPool.length) * 100);
    document.getElementById('quizProgressText').textContent = `Question ${quizIndex + 1} of ${quizPool.length}`;
    document.getElementById('quizProgressFill').style.width = pct + '%';
    document.getElementById('quizScoreLive').textContent = `Score: ${quizScore}`;
    document.getElementById('quizWord').textContent = current.foreign;
    document.getElementById('quizCatBadge').textContent = current.category;
    document.getElementById('quizFeedback').textContent = '';
    document.getElementById('quizFeedback').className = 'quiz-feedback';
    document.getElementById('btnNext').style.display = 'none';

    // Distractors — prefer same category for harder quiz
    const rest = quizPool.filter((_, i) => i !== quizIndex);
    const sameCat = rest.filter(w => w.category === current.category).sort(() => Math.random() - 0.5);
    const diffCat = rest.filter(w => w.category !== current.category).sort(() => Math.random() - 0.5);
    const distractors = [...sameCat, ...diffCat].slice(0, 3);
    const answers = [...distractors, current].sort(() => Math.random() - 0.5);

    const opts = document.getElementById('quizOptions');
    opts.innerHTML = '';
    answers.forEach(ans => {
        const btn = document.createElement('button');
        btn.className = 'quiz-opt';
        btn.textContent = ans.english;
        btn.addEventListener('click', () => handleAnswer(btn, ans, current));
        opts.appendChild(btn);
    });
}

function handleAnswer(btn, chosen, correct) {
    if (quizAnswered) return;
    quizAnswered = true;

    const ok = chosen.english === correct.english;
    if (ok) { btn.classList.add('correct'); quizScore++; }
    else {
        btn.classList.add('wrong');
        document.querySelectorAll('.quiz-opt').forEach(b => {
            if (b.textContent === correct.english) b.classList.add('correct');
        });
    }
    document.querySelectorAll('.quiz-opt').forEach(b => b.disabled = true);
    document.getElementById('quizFeedback').textContent = ok ? '✓ Correct!' : `✗ The answer was: ${correct.english}`;
    document.getElementById('quizFeedback').className = 'quiz-feedback ' + (ok ? 'good' : 'bad');
    document.getElementById('quizScoreLive').textContent = `Score: ${quizScore}`;

    const nb = document.getElementById('btnNext');
    nb.style.display = 'block';
    nb.textContent = quizIndex + 1 >= quizPool.length ? 'See Results →' : 'Next →';
    nb.onclick = () => { quizIndex++; showQuestion(); };
}

function showResult() {
    document.getElementById('quizActive').classList.remove('running');
    const result = document.getElementById('quizResult');
    result.classList.add('visible');

    const total = quizPool.length;
    const pct = Math.round((quizScore / total) * 100);
    let emoji = '🌱', label = "Keep practising — you'll get there!";
    if (pct == 100) { emoji = '🎉🏆🎉'; label = 'Outstanding! A perfect score!'; }
    else if (pct >= 90) { emoji = '🏆'; label = 'Outstanding! Near-perfect score!'; }
    else if (pct >= 75) { emoji = '🎉'; label = "Great work! You're making real progress."; }
    else if (pct >= 50) { emoji = '👍'; label = 'Good effort — review the ones you missed.'; }

    document.getElementById('resultEmoji').textContent = emoji;
    document.getElementById('resultScore').textContent = `${quizScore} / ${total}`;
    document.getElementById('resultLabel').textContent = label;
}

function backToSetup() {
    document.getElementById('quizResult').classList.remove('visible');
    document.getElementById('quizActive').classList.remove('running');
    renderQuizSetup();
}

// ── LEARNING PATH ──────────────────────────────────────
function renderPath() {
    const lang = currentLang;
    const container = document.getElementById('pathContent');
    container.innerHTML = '';

    document.getElementById('pathTitle').innerHTML =
        `<span>${lang.flag}</span> ${lang.name} — <span>Learning Path</span>`;

    if (!lang.learningPath || lang.learningPath.length === 0) {
        container.innerHTML = `
          <div class="path-empty">
            <div class="path-empty-icon">🗺️</div>
            <h3>No Learning Path Yet</h3>
            <p>Concact a devolper of <code>Lingua</code> to get a learning path for this language.</p>
          </div>`;
        return;
    }

    const completed = pathProgress[lang.id] || new Set();
    const allNodes = lang.learningPath.flatMap(s => s.nodes);
    const doneCount = allNodes.filter(n => completed.has(n.id)).length;
    const totalCount = allNodes.length;
    const pct = Math.round((doneCount / totalCount) * 100);

    // ── Overall progress bar ──
    const overallBar = document.createElement('div');
    overallBar.style.cssText = 'display:flex;flex-direction:column;align-items:center;';
    overallBar.innerHTML = `
        <div class="path-overall-bar animate-in">
          <div class="path-overall-emoji">${lang.flag}</div>
          <div class="path-overall-info">
            <div class="path-overall-title">Overall Progress</div>
            <div class="path-overall-track">
              <div class="path-overall-fill" style="width:${pct}%"></div>
            </div>
            <div class="path-overall-pct">${doneCount} of ${totalCount} skills complete · ${pct}%</div>
          </div>
        </div>`;
    container.appendChild(overallBar);

    // ── Legend ──
    const legendWrap = document.createElement('div');
    legendWrap.style.cssText = 'display:flex;justify-content:center;margin-bottom:2rem;';
    legendWrap.innerHTML = `
        <div class="path-legend">
          <div class="path-legend-item"><div class="legend-dot done"></div> Completed</div>
          <div class="path-legend-item"><div class="legend-dot active"></div> In Progress</div>
          <div class="path-legend-item"><div class="legend-dot locked"></div> Locked</div>
        </div>`;
    container.appendChild(legendWrap);

    // ── Track ──
    const track = document.createElement('div');
    track.className = 'path-track';

    const zigzag = ['offset-center', 'offset-right', 'offset-center', 'offset-left'];
    let nodeGlobalIndex = 0;

    lang.learningPath.forEach((section, sIdx) => {
        const secDone = section.nodes.filter(n => completed.has(n.id)).length;

        const banner = document.createElement('div');
        banner.className = 'path-section-banner animate-in';
        banner.innerHTML = `
          <div class="path-section-icon">${section.icon}</div>
          <div class="path-section-info">
            <div class="path-section-title">${section.section}</div>
            <div class="path-section-subtitle">${section.description}</div>
          </div>
          <div class="path-section-progress">${secDone}/${section.nodes.length}</div>`;
        track.appendChild(banner);

        section.nodes.forEach((node, nIdx) => {
            const status = getNodeStatus(node, allNodes, completed);

            if (nIdx > 0 || sIdx > 0) {
                const prevNode = nIdx > 0
                    ? section.nodes[nIdx - 1]
                    : lang.learningPath[sIdx - 1].nodes.slice(-1)[0];
                const prevStatus = getNodeStatus(prevNode, allNodes, completed);
                const conn = document.createElement('div');
                conn.className = 'path-connector' + (prevStatus === 'done' ? ' done' : '');
                track.appendChild(conn);
            }

            const offsetClass = zigzag[nodeGlobalIndex % zigzag.length];
            nodeGlobalIndex++;

            const row = document.createElement('div');
            row.className = `path-row ${offsetClass} animate-in`;

            const statusLabel = { done: '✓ Done', active: '▶ Current', locked: '🔒 Locked' }[status];

            row.innerHTML = `
            <button class="path-node-btn ${status}" data-node-id="${node.id}">
              ${status === 'done' ? '<div class="path-node-crown">⭐</div>' : ''}
              <span>${node.icon}</span>
              <div class="path-node-xp">+${node.xp} XP</div>
            </button>
            <div class="path-node-label">
              <div class="path-node-name">${node.name}</div>
              <div class="path-node-desc">${node.description}</div>
              <span class="path-node-tag ${status}">${statusLabel}</span>
            </div>`;

            row.querySelector('.path-node-btn').addEventListener('click', () => openPathModal(node, section, status));
            track.appendChild(row);
        });
    });

    container.appendChild(track);
}

// ── PATH MODAL ─────────────────────────────────────────
let _modalNode = null;
let _modalSection = null;

function openPathModal(node, section, status) {
    _modalNode = node;
    _modalSection = section;

    document.getElementById('pmIcon').textContent = node.icon;
    document.getElementById('pmTitle').textContent = node.name;
    document.getElementById('pmSection').textContent = section.section;
    document.getElementById('pmDesc').textContent = node.description;

    document.getElementById('pmSkills').innerHTML = node.skills
        .map(s => `<span class="path-modal-skill-tag">${s}</span>`).join('');

    const cta = document.getElementById('pmCta');
    if (status === 'done') {
        cta.textContent = '↩ Practice Again';
        cta.className = 'path-modal-cta';
        console.log(section)
        cta.onclick = () => { closePathModal(); startUnitQuiz(node, section); };
    } else if (status === 'active') {
        cta.textContent = `▶ Start Unit Quiz — +${node.xp} XP`;
        cta.className = 'path-modal-cta';
        cta.onclick = () => { closePathModal(); startUnitQuiz(node, section); };
    } else {
        cta.textContent = '🔒 Complete previous skills to unlock';
        cta.className = 'path-modal-cta locked-cta';
        cta.onclick = null;
    }

    document.getElementById('pathModalOverlay').classList.add('open');
}

function markNodeComplete(nodeId) {
    const langId = currentLang.id;
    if (!pathProgress[langId]) pathProgress[langId] = new Set();
    pathProgress[langId].add(nodeId);
    savePathProgress();
    closePathModal();
    renderPath();
}

function closePathModal() {
    document.getElementById('pathModalOverlay').classList.remove('open');
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('pathModalOverlay')?.addEventListener('click', function (e) {
        if (e.target === this) closePathModal();
    });
});

// ══════════════════════════════════════════════════════
//  UNIT QUIZ
// ══════════════════════════════════════════════════════
let uqNode = null, uqSection = null;
let uqPool = [], uqIndex = 0, uqScore = 0, uqAnswered = false;
const UQ_PASS_THRESHOLD = 0.75; // 75% to pass

function buildUnitQuizPool(node) {
    const lang = currentLang;

    const skillKeywords = node.skills.map(s =>
        normalize(s)
    );

    const pool = lang.vocab.filter(w =>
        skillKeywords.includes(normalize(w.foreign))
    );

    console.log("keywords:", skillKeywords);
    console.log("pool:", pool);

    return shuffleAndLimit(pool);
}

function normalize(str) {
    return str
        .toLowerCase()
        .trim()
        .normalize("NFD") // remove accents (ü → u)
        .replace(/[\u0300-\u036f]/g, "");
}

function shuffleAndLimit(arr) {
    const shuffled = [...arr].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, Math.min(10, shuffled.length));
}

function startUnitQuiz(node, section) {
    uqNode = node;
    uqSection = section;
    uqPool = buildUnitQuizPool(node);
    uqIndex = 0; uqScore = 0; uqAnswered = false;

    document.getElementById('uqIcon').textContent = node.icon;
    document.getElementById('uqTitle').textContent = node.name + ' — Unit Quiz';
    document.getElementById('uqSubtitle').textContent = `${uqPool.length} questions · Pass with ${Math.round(UQ_PASS_THRESHOLD * 100)}% or higher`;

    document.getElementById('uqResult').classList.remove('visible');
    document.getElementById('uqQuestionArea').style.display = 'block';

    document.getElementById('unitQuizOverlay').classList.add('open');
    showUQQuestion();
}

function showUQQuestion() {
    if (uqIndex >= uqPool.length) { showUQResult(); return; }

    const current = uqPool[uqIndex];
    uqAnswered = false;
    const pct = Math.round((uqIndex / uqPool.length) * 100);
    document.getElementById('uqProgressFill').style.width = pct + '%';
    document.getElementById('uqQLabel').textContent = `Question ${uqIndex + 1} of ${uqPool.length}`;
    document.getElementById('uqWord').textContent = current.foreign;
    document.getElementById('uqFeedback').textContent = '';
    document.getElementById('uqFeedback').className = 'uq-feedback';
    document.getElementById('uqNext').style.display = 'none';

    // Build distractors from full vocab pool
    const allVocab = currentLang.vocab;
    const others = allVocab.filter((_, i) => allVocab[i].foreign !== current.foreign);
    const sameCat = others.filter(w => w.category === current.category).sort(() => Math.random() - 0.5);
    const diffCat = others.filter(w => w.category !== current.category).sort(() => Math.random() - 0.5);
    const distractors = [...sameCat, ...diffCat].slice(0, 3);
    const answers = [...distractors, current].sort(() => Math.random() - 0.5);

    const opts = document.getElementById('uqOptions');
    opts.innerHTML = '';
    answers.forEach(ans => {
        const btn = document.createElement('button');
        btn.className = 'uq-opt';
        btn.textContent = ans.english;
        btn.addEventListener('click', () => handleUQAnswer(btn, ans, current));
        opts.appendChild(btn);
    });
}

function handleUQAnswer(btn, chosen, correct) {
    if (uqAnswered) return;
    uqAnswered = true;
    const ok = chosen.english === correct.english;
    if (ok) { btn.classList.add('correct'); uqScore++; }
    else {
        btn.classList.add('wrong');
        document.querySelectorAll('.uq-opt').forEach(b => {
            if (b.textContent === correct.english) b.classList.add('correct');
        });
    }
    document.querySelectorAll('.uq-opt').forEach(b => b.disabled = true);
    const fb = document.getElementById('uqFeedback');
    fb.textContent = ok ? '✓ Correct!' : `✗ Answer: ${correct.english}`;
    fb.className = 'uq-feedback ' + (ok ? 'good' : 'bad');

    const nb = document.getElementById('uqNext');
    nb.style.display = 'block';
    nb.textContent = uqIndex + 1 >= uqPool.length ? 'See Results →' : 'Next →';
    nb.onclick = () => { uqIndex++; showUQQuestion(); };
}

function showUQResult() {
    document.getElementById('uqQuestionArea').style.display = 'none';
    document.getElementById('uqProgressFill').style.width = '100%';
    const result = document.getElementById('uqResult');
    result.classList.add('visible');

    const total = uqPool.length;
    const pct = uqScore / total;
    const passed = pct >= UQ_PASS_THRESHOLD;

    let emoji = pct === 1 ? '🎉🏆🎉' : pct >= 0.9 ? '🏆' : pct >= UQ_PASS_THRESHOLD ? '🎉' : '📚';
    let msg = pct === 1 ? 'Perfect score! This skill is yours.' :
        pct >= 0.9 ? 'Outstanding — you nailed it!' :
            passed ? "Great job! You've passed this unit." :
                `You need ${Math.round(UQ_PASS_THRESHOLD * 100)}% to pass. Review and try again!`;

    document.getElementById('uqResultEmoji').textContent = emoji;
    document.getElementById('uqResultScore').textContent = `${uqScore} / ${total}`;
    document.getElementById('uqResultMsg').textContent = msg;

    const passBtn = document.getElementById('uqBtnPass');
    const allNodes = currentLang.learningPath.flatMap(s => s.nodes);
    const completed = pathProgress[currentLang.id] || new Set();
    const status = getNodeStatus(uqNode, allNodes, completed);

    if (passed && status !== 'done') {
        passBtn.style.display = 'inline-block';
        passBtn.onclick = () => { markNodeCompleteFromQuiz(uqNode.id); };
    } else if (passed && status === 'done') {
        passBtn.style.display = 'none';
    } else {
        passBtn.style.display = 'none';
    }
}

function markNodeCompleteFromQuiz(nodeId) {
    const langId = currentLang.id;
    if (!pathProgress[langId]) pathProgress[langId] = new Set();
    pathProgress[langId].add(nodeId);
    savePathProgress();
    closeUnitQuiz();
    renderPath();
}

function retryUnitQuiz() {
    document.getElementById('uqResult').classList.remove('visible');
    document.getElementById('uqQuestionArea').style.display = 'block';
    uqPool = uqPool.sort(() => Math.random() - 0.5);
    uqIndex = 0; uqScore = 0; uqAnswered = false;
    showUQQuestion();
}

function closeUnitQuiz() {
    document.getElementById('unitQuizOverlay').classList.remove('open');
}

document.getElementById('unitQuizOverlay').addEventListener('click', function (e) {
    if (e.target === this) closeUnitQuiz();
});

// ══════════════════════════════════════════════════════
//  SETTINGS
// ══════════════════════════════════════════════════════
const DEFAULTS = {
    fontSize: 1,
    font: "'Jetbrains Mono', monospace",
    highlightColor: '#1dd269',
    accentColor: '#1dd269',
};
let appSettings = { ...DEFAULTS };

try {
    const saved = localStorage.getItem('lingua_settings');
    if (saved) {
        const raw = JSON.parse(saved);
        if (raw.logoColor && !raw.highlightColor) raw.highlightColor = raw.logoColor;
        appSettings = { ...DEFAULTS, ...raw };
    }
} catch (e) { }

function hexToRgb(hex) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return { r, g, b };
}

function applySettings() {
    const root = document.documentElement;
    root.style.setProperty('--font-scale', appSettings.fontSize);
    root.style.setProperty('--body-font', appSettings.font);
    // Highlight color drives logo, hero em, AND the glow
    root.style.setProperty('--logo-color', appSettings.highlightColor);
    root.style.setProperty('--hero-em-color', appSettings.highlightColor);
    const { r, g, b } = hexToRgb(appSettings.highlightColor);
    root.style.setProperty('--hero-glow', `rgba(${r}, ${g}, ${b}, 0.12)`);
    root.style.setProperty('--accent', appSettings.accentColor);
    root.style.setProperty('--accent2', shadeColor(appSettings.accentColor, -20));

    // sync UI controls
    document.getElementById('fontSizeSlider').value = appSettings.fontSize;
    document.getElementById('highlightColorPicker').value = appSettings.highlightColor;
    document.getElementById('accentColorPicker').value = appSettings.accentColor;

    document.querySelectorAll('#fontChips .settings-chip').forEach(c =>
        c.classList.toggle('active', c.dataset.font === appSettings.font));
    syncSwatchActive('highlightSwatches', appSettings.highlightColor);
    syncSwatchActive('accentSwatches', appSettings.accentColor);
}

function syncSwatchActive(containerId, color) {
    document.querySelectorAll(`#${containerId} .settings-swatch`).forEach(s =>
        s.classList.toggle('active', s.dataset.color === color));
}

function saveSettings() {
    try { localStorage.setItem('lingua_settings', JSON.stringify(appSettings)); } catch (e) { }
}

function resetSettings() {
    appSettings = { ...DEFAULTS };
    applySettings();
    saveSettings();
}

function shadeColor(hex, percent) {
    const num = parseInt(hex.replace('#', ''), 16);
    const amt = Math.round(2.55 * percent);
    const R = Math.min(255, Math.max(0, (num >> 16) + amt));
    const G = Math.min(255, Math.max(0, (num >> 8 & 0xff) + amt));
    const B = Math.min(255, Math.max(0, (num & 0xff) + amt));
    return '#' + ((1 << 24) | (R << 16) | (G << 8) | B).toString(16).slice(1);
}

function openSettings() { document.getElementById('settingsOverlay').classList.add('open'); }
function closeSettings() { document.getElementById('settingsOverlay').classList.remove('open'); }

document.getElementById('settingsOverlay').addEventListener('click', function (e) {
    if (e.target === this) closeSettings();
});

function initSettings() {
    document.getElementById('settingsBtn').addEventListener('click', openSettings);

    document.getElementById('fontSizeSlider').addEventListener('input', e => {
        appSettings.fontSize = parseFloat(e.target.value);
        applySettings(); saveSettings();
    });

    document.querySelectorAll('#fontChips .settings-chip').forEach(btn => {
        btn.addEventListener('click', () => {
            appSettings.font = btn.dataset.font;
            applySettings(); saveSettings();
        });
    });

    // Swatch clicks
    document.querySelectorAll('.settings-swatch').forEach(sw => {
        sw.addEventListener('click', () => {
            const target = sw.dataset.target;
            const color = sw.dataset.color;
            if (target === 'highlight') appSettings.highlightColor = color;
            if (target === 'accent') appSettings.accentColor = color;
            applySettings(); saveSettings();
        });
    });

    // Custom color pickers
    document.getElementById('highlightColorPicker').addEventListener('input', e => {
        appSettings.highlightColor = e.target.value;
        syncSwatchActive('highlightSwatches', e.target.value);
        applySettings(); saveSettings();
    });
    document.getElementById('accentColorPicker').addEventListener('input', e => {
        appSettings.accentColor = e.target.value;
        syncSwatchActive('accentSwatches', e.target.value);
        applySettings(); saveSettings();
    });
}