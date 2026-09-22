// =============================================================================
// HỌC PHẦN: TƯ TƯỞNG HỒ CHÍ MINH (HCM202) — NHÓM THỰC HIỆN: GROUP7
// TẬP LỆNH TƯƠNG TÁC (APP.JS): CÂY KHÁI NIỆM, ĐƯỜNG NỐI SVG,
// BỐN CHUYÊN ĐỀ, BÌNH CHỌN ĐỊNH LƯỢNG & KHẢO SÁT THU THẬP Ý KIẾN NHIỀU NGƯỜI
// =============================================================================

(() => {
const root = document.getElementById('ncl-demo');
const data = window.CONCEPT_DATA;
const q = s => root.querySelector(s);
const qa = s => root.querySelectorAll(s);

function el(tag, text, cls) {
  const e = document.createElement(tag);
  if (text) e.textContent = text;
  if (cls) e.className = cls;
  return e;
}

function fillReading(node, target) {
  node.body.forEach(t => {
    const p = el('p', t);
    if (t.startsWith('Phân tích của nhóm (GROUP7):') || t.startsWith('Phân tích của nhóm:')) {
      p.className = 'group-analysis-paragraph';
    }
    target.appendChild(p);
  });
  if (node.quote) {
    target.appendChild(el('blockquote', node.quote));
  }
}

// -----------------------------------------------------------------------------
// 1. RENDER CONCEPT MAP & SVG CONNECTOR
// -----------------------------------------------------------------------------
let activeNodeButton = null;

function read(node) {
  q('#ncl-read-title').textContent = node.title;
  q('#ncl-read-body').replaceChildren();
  fillReading(node, q('#ncl-read-body'));
  q('#ncl-read-source').textContent = 'Nguồn tra cứu: ' + node.source;
  q('.reader').hidden = false;
  q('.map-shell').classList.add('is-reading');
  scheduleConnector();
}

const main = q('#ncl-main-branches');
main.replaceChildren();
const buttons = [];

function renderTree(nodes, parent, level, path) {
  nodes.forEach((node, i) => {
    const item = el('div', null, 'tree-item');
    const relations = level === 0 ? 'Phần chính' : (node.relation || (level === 1 ? 'Làm rõ qua' : 'Cụ thể hóa'));
    item.appendChild(el('div', relations, 'tree-relation'));

    const b = el('button', null, 'cursor-interaction tree-button');
    b.type = 'button';
    b.appendChild(el('span', level === 0 ? '0' + (i + 1) : '•', 'tree-number'));
    b.appendChild(el('span', node.title, 'tree-title'));

    const sign = el('span', node.children ? '+' : '↗', 'tree-sign');
    sign.setAttribute('aria-hidden', 'true');
    b.appendChild(sign);
    item.appendChild(b);
    buttons.push(b);

    if (node.children) {
      const child = el('div', null, 'tree-children');
      child.id = 'tree-' + path + '-' + i;
      const initial = (level === 0 && i === 0) || (level === 1 && path === '0' && i === 0);
      child.hidden = !initial;
      b.setAttribute('aria-expanded', String(initial));
      b.setAttribute('aria-controls', child.id);
      sign.textContent = initial ? '−' : '+';

      renderTree(node.children, child, level + 1, level === 0 ? String(i) : path + '-' + i);
      item.appendChild(child);

      b.addEventListener('click', () => {
        child.hidden = !child.hidden;
        b.setAttribute('aria-expanded', String(!child.hidden));
        sign.textContent = child.hidden ? '+' : '−';
        if (child.hidden && activeNodeButton && child.contains(activeNodeButton)) {
          closeReading();
        } else {
          scheduleConnector();
        }
      });
    } else {
      b.setAttribute('aria-pressed', 'false');
      b.addEventListener('click', () => {
        buttons.forEach(x => {
          if (x.getAttribute('aria-pressed') !== null) {
            x.setAttribute('aria-pressed', String(x === b));
          }
        });
        activeNodeButton = b;
        read(node);
      });
    }
    parent.appendChild(item);
  });
}

renderTree(data, main, 0, 'root');
q('.reader').hidden = true;

const closeButton = el('button', 'Đóng nội dung ×', 'close-reading cursor-interaction');
closeButton.type = 'button';
closeButton.addEventListener('click', closeReading);
q('.reader').prepend(closeButton);

const svgNS = 'http://www.w3.org/2000/svg';
const connector = document.createElementNS(svgNS, 'svg');
connector.classList.add('reading-connector');
connector.setAttribute('aria-hidden', 'true');
const wire = document.createElementNS(svgNS, 'path');
connector.appendChild(wire);
q('.map-shell').appendChild(connector);

function closeReading() {
  const reader = q('.reader');
  reader.hidden = true;
  reader.style.marginTop = '';
  q('.map-shell').appendChild(reader);
  q('.map-shell').classList.remove('is-reading');
  wire.setAttribute('d', '');
  buttons.forEach(x => {
    if (x.getAttribute('aria-pressed') !== null) {
      x.setAttribute('aria-pressed', 'false');
    }
  });
  if (activeNodeButton) {
    activeNodeButton.focus({ preventScroll: true });
  }
  activeNodeButton = null;
}

let connectorFrame = 0, connectorUntil = 0;
function scheduleConnector() {
  connectorUntil = performance.now() + 500;
  if (!connectorFrame) connectorFrame = requestAnimationFrame(connectorTick);
}

function connectorTick() {
  drawConnector();
  if (performance.now() < connectorUntil) {
    connectorFrame = requestAnimationFrame(connectorTick);
  } else {
    connectorFrame = 0;
  }
}

function drawConnector() {
  if (!activeNodeButton || q('.reader').hidden) return;
  const reader = q('.reader'), shellEl = q('.map-shell');
  if (matchMedia('(max-width:720px)').matches) {
    if (reader.previousElementSibling !== activeNodeButton) {
      activeNodeButton.after(reader);
    }
    reader.style.marginTop = '16px';
    wire.setAttribute('d', '');
    return;
  }
  if (reader.parentElement !== shellEl) {
    shellEl.appendChild(reader);
  }
  const before = shellEl.getBoundingClientRect(), selected = activeNodeButton.getBoundingClientRect();
  const targetOffset = (selected.top + selected.height / 2) - before.top - reader.offsetHeight / 2;
  const offset = Math.max(0, targetOffset);
  const next = Math.round(offset) + 'px';
  if (reader.style.marginTop !== next) reader.style.marginTop = next;

  const shell = shellEl.getBoundingClientRect(), a = activeNodeButton.getBoundingClientRect(), b = reader.getBoundingClientRect();
  connector.setAttribute('viewBox', '0 0 ' + shell.width + ' ' + shell.height);
  const x1 = a.right - shell.left, y1 = a.top + a.height / 2 - shell.top;
  const x2 = b.left - shell.left, y2 = b.top + b.height / 2 - shell.top;
  const m = (x1 + x2) / 2;
  wire.setAttribute('d', `M ${x1} ${y1} H ${m} V ${y2} H ${x2}`);
}

new ResizeObserver(scheduleConnector).observe(q('.map-shell'));
window.addEventListener('resize', scheduleConnector);

// -----------------------------------------------------------------------------
// 2. HỎI ĐÁP & THẢO LUẬN TƯƠNG TÁC CÙNG NGƯỜI NGHE (CHẶNG 3: TRẮC NGHIỆM ABCD)
// -----------------------------------------------------------------------------
qa('.qa-card').forEach(card => {
  const optBtns = card.querySelectorAll('.qa-opt-btn');
  const feedbackEl = card.querySelector('.qa-feedback');
  const bannerEl = card.querySelector('.qa-result-banner');

  optBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const isCorrect = btn.dataset.correct === 'true';
      const selectedLetter = btn.dataset.opt;

      // Reset previous classes in this card
      optBtns.forEach(b => {
        b.classList.remove('is-correct', 'is-wrong', 'is-selected');
        b.setAttribute('aria-pressed', 'false');
      });

      // Set active
      btn.setAttribute('aria-pressed', 'true');
      btn.classList.add('is-selected');

      if (isCorrect) {
        btn.classList.add('is-correct');
        if (bannerEl) {
          bannerEl.className = 'qa-result-banner correct';
          bannerEl.innerHTML = `<span>✓</span> <span><strong>Chính xác!</strong> Đáp án <strong>${selectedLetter}</strong> là nhận định đúng.</span>`;
        }
      } else {
        btn.classList.add('is-wrong');
        const correctBtn = card.querySelector('.qa-opt-btn[data-correct="true"]');
        if (correctBtn) {
          correctBtn.classList.add('is-correct');
        }
        const correctLetter = correctBtn ? correctBtn.dataset.opt : '';
        if (bannerEl) {
          bannerEl.className = 'qa-result-banner wrong';
          bannerEl.innerHTML = `<span>✗</span> <span><strong>Chưa chính xác.</strong> Bạn đã chọn ${selectedLetter}. Đáp án đúng là <strong>${correctLetter}</strong>.</span>`;
        }
      }

      if (feedbackEl) {
        feedbackEl.hidden = false;
      }
      card.classList.add('is-open');
    });
  });
});

// -----------------------------------------------------------------------------
// 5. CÂU HỎI TƯƠNG TÁC DẪN NHẬP (CHẶNG 1 - 2 PHÚT MỞ ĐẦU)
// -----------------------------------------------------------------------------
const introFeedbacks = [
  '<strong>Gợi mở lý luận:</strong> Quần chúng nhân dân là người sáng tạo ra lịch sử, có sức mạnh dời non lấp biển. Tuy nhiên, nếu không có một chính đảng vô sản dẫn đường với lý luận khoa học và cương lĩnh đúng đắn, các phong trào đấu tranh dù anh dũng cũng sẽ dừng lại ở mức tự phát và bế tắc.',
  '<strong>Gợi mở lý luận:</strong> Đảng giữ sứ mệnh định hướng và tổ chức như người cầm lái con thuyền. Nhưng nếu Đảng xa rời quần chúng, không gắn bó máu thịt với nhân dân thì tổ chức dù có đường lối cũng sẽ không có lực lượng cách mạng hiện thực.',
  '<strong>Chính xác — Luận điểm cốt lõi của Hồ Chí Minh:</strong> Quần chúng nhân dân là nguồn lực lượng vô địch, nhưng sức mạnh ấy chỉ chuyển hóa thành thắng lợi khi có Đảng cách mạng kiên trung làm "Người cầm lái". Bấm vào <em>Khám phá Concept Map</em> ngay dưới đây để cùng phân tích!'
];

qa('[data-intro]').forEach(btn => {
  btn.addEventListener('click', () => {
    const idx = Number(btn.dataset.intro);
    qa('[data-intro]').forEach(b => {
      b.classList.toggle('active', b === btn);
      b.setAttribute('aria-pressed', String(b === btn));
    });
    const fb = q('#intro-poll-feedback');
    if (fb) {
      fb.hidden = false;
      fb.innerHTML = introFeedbacks[idx];
    }
  });
});

// -----------------------------------------------------------------------------
// 6. CUỘN MƯỢT LIÊN KẾT NỘI BỘ
// -----------------------------------------------------------------------------
root.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = q(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
        block: 'start'
      });
    }
  });
});

})();
