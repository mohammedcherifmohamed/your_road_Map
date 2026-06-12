// Roadmap detail page rendering
(function () {
  // Static chrome icons
  document.getElementById("logo-icon").innerHTML = icon("graduation-cap", "h-5 w-5");
  document.getElementById("footer-icon").innerHTML = icon("graduation-cap", "h-4 w-4");
  document.getElementById("back-top-icon").innerHTML = icon("arrow-right", "h-4 w-4");

  // Slug resolution order:
  // 1. window.ROADMAP_SLUG set by a dedicated per-path page
  // 2. ?path= query string (fallback for single-file usage)
  // 3. URL hash (#web-development)
  const params = new URLSearchParams(window.location.search);
  const slug =
    window.ROADMAP_SLUG ||
    params.get("path") ||
    (window.location.hash ? window.location.hash.slice(1) : "");
  const r = ROADMAPS[slug];
  const content = document.getElementById("content");

  // Unknown / missing path → friendly fallback
  if (!r) {
    content.innerHTML = `
      <section class="mx-auto max-w-2xl px-4 py-24 text-center sm:px-6">
        <h1 class="text-3xl font-extrabold text-slate-900">الخريطة غير موجودة</h1>
        <p class="mt-3 text-slate-600">لم نتمكن من العثور على هذا المسار المهني. تصفح جميع الخرائط المتاحة بدلاً من ذلك.</p>
        <a href="/index.html" class="mt-8 inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700">
          ${icon("arrow-right", "h-4 w-4")} العودة إلى جميع الخرائط
        </a>
      </section>`;
    return;
  }

  const c = COLOR_CLASSES[r.color];
  document.title = `خريطة ${r.title} — CareerPaths`;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute("content", `خريطة تعلم ${r.title}: ${r.summary}`);

  // ---- Hero ----
  const hero = `
    <section class="relative overflow-hidden border-b border-slate-200">
      <div class="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b ${c.grad} to-transparent"></div>
      <div class="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
        <nav class="mb-6 flex items-center gap-1.5 text-sm text-slate-500">
          <a href="/index.html" class="transition hover:text-slate-800">خرائط الطريق</a>
          <span>/</span>
          <span class="font-medium text-slate-700">${r.title}</span>
        </nav>
        <div class="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div class="max-w-2xl">
            <div class="flex items-center gap-3">
              <span class="flex h-14 w-14 items-center justify-center rounded-2xl ${c.soft} ${c.text}">${icon(r.icon, "h-7 w-7")}</span>
              <span class="rounded-full ${c.chip} px-3 py-1 text-xs font-semibold ring-1 ring-inset ${c.ring}">${r.level}</span>
            </div>
            <h1 class="mt-5 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">${r.title}</h1>
            <p class="mt-3 text-pretty text-lg text-slate-600">${r.tagline}</p>
            <p class="mt-4 max-w-xl text-pretty leading-relaxed text-slate-600">${r.summary}</p>
            <div class="mt-6 flex flex-wrap items-center gap-3 text-sm font-medium text-slate-600">
              <span class="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5">${icon("clock", "h-4 w-4 " + c.text)} ${r.duration}</span>
              <span class="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5">${icon("layers", "h-4 w-4 " + c.text)} ${r.timeline.length} مراحل</span>
              <span class="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5">${icon("rocket", "h-4 w-4 " + c.text)} ${r.projects.length} مشاريع</span>
            </div>
          </div>
        </div>
      </div>
    </section>`;

  // ---- Timeline ----
  let nodeId = 0;
  const stages = r.timeline.map((stage, si) => {
    const nodes = stage.nodes.map((n) => {
      const id = `node-${nodeId++}`;
      const skills = n.skills.map((s) => `<span class="rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600">${s}</span>`).join("");
      const resources = n.resources.map((res) => `
        <li>
          <a href="${res.url}" target="_blank" rel="noopener noreferrer"
             class="group inline-flex items-center gap-1.5 text-sm font-medium ${c.text} hover:underline">
            ${icon("external-link", "h-3.5 w-3.5")} ${res.label}
          </a>
        </li>`).join("");
      return `
        <div class="overflow-hidden rounded-xl border border-slate-200 bg-white">
          <button type="button" data-target="${id}"
            class="node-toggle flex w-full items-center justify-between gap-3 px-4 py-3.5 text-right transition hover:bg-slate-50"
            aria-expanded="false" aria-controls="${id}">
            <span class="flex items-center gap-3">
              <span class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${c.soft} ${c.text}">${icon("book-open", "h-4 w-4")}</span>
              <span class="font-semibold text-slate-900">${n.title}</span>
            </span>
            <span class="chevron shrink-0 text-slate-400 transition-transform">${icon("chevron-down", "h-5 w-5")}</span>
          </button>
          <div id="${id}" class="node-panel">
            <div>
              <div class="border-t border-slate-100 px-4 py-4">
                <p class="text-sm leading-relaxed text-slate-600">${n.detail}</p>
                <div class="mt-4">
                  <p class="text-xs font-semibold uppercase tracking-wide text-slate-400">المهارات الأساسية</p>
                  <div class="mt-2 flex flex-wrap gap-1.5">${skills}</div>
                </div>
                <div class="mt-4">
                  <p class="text-xs font-semibold uppercase tracking-wide text-slate-400">المصادر</p>
                  <ul class="mt-2 space-y-1.5">${resources}</ul>
                </div>
              </div>
            </div>
          </div>
        </div>`;
    }).join("");

    return `
      <div class="relative pr-12 fade-up" style="animation-delay:${si * 80}ms">
        <span class="absolute right-2 top-1.5 flex h-7 w-7 translate-x-1/2 items-center justify-center rounded-full ${c.dot} text-xs font-bold text-white ring-4 ring-slate-50">${si + 1}</span>
        <div class="flex flex-wrap items-center gap-x-3 gap-y-1">
          <h3 class="text-xl font-bold text-slate-900">${stage.title}</h3>
          <span class="rounded-full ${c.chip} px-2.5 py-0.5 text-xs font-semibold">${stage.period}</span>
        </div>
        <p class="mt-1 text-sm text-slate-600">${stage.desc}</p>
        <div class="mt-4 space-y-3">${nodes}</div>
      </div>`;
  }).join("");

  const timeline = `
    <section class="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
      <div class="mb-10">
        <h2 class="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">التقدم التعليمي</h2>
        <p class="mt-2 text-slate-600">اتبع المراحل بالترتيب. انقر على أي موضوع لتوسيع مهاراته ومصادره.</p>
      </div>
      <div class="relative">
        <span class="absolute right-2 top-2 h-[calc(100%-1rem)] w-px bg-slate-200" aria-hidden="true"></span>
        <div class="space-y-10">${stages}</div>
      </div>
    </section>`;

  // ---- Projects ----
  const projects = `
    <section class="border-t border-slate-200 bg-white">
      <div class="mx-auto max-w-5xl px-4 py-14 sm:px-6">
        <div class="mb-8 flex items-center gap-3">
          <span class="flex h-10 w-10 items-center justify-center rounded-xl ${c.soft} ${c.text}">${icon("rocket", "h-5 w-5")}</span>
          <div>
            <h2 class="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">المشاريع المقترحة</h2>
            <p class="mt-1 text-sm text-slate-600">ابنِ هذه المشاريع لتطبق ما تتعلمه وتنمي ملف أعمالك.</p>
          </div>
        </div>
        <div class="grid gap-5 sm:grid-cols-3">
          ${r.projects.map((p) => `
            <div class="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <span class="inline-flex rounded-full px-2.5 py-0.5 text-xs font-semibold ring-1 ring-inset ${LEVEL_CHIP[p.level] || "bg-slate-100 text-slate-600 ring-slate-200"}">${p.level}</span>
              <h3 class="mt-3 text-lg font-bold text-slate-900">${p.title}</h3>
              <p class="mt-2 text-sm leading-relaxed text-slate-600">${p.desc}</p>
            </div>`).join("")}
        </div>
      </div>
    </section>`;

  // ---- Resources ----
  const resources = `
    <section class="border-t border-slate-200">
      <div class="mx-auto max-w-5xl px-4 py-14 sm:px-6">
        <div class="mb-8 flex items-center gap-3">
          <span class="flex h-10 w-10 items-center justify-center rounded-xl ${c.soft} ${c.text}">${icon("book-open", "h-5 w-5")}</span>
          <div>
            <h2 class="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">أفضل المصادر</h2>
            <p class="mt-1 text-sm text-slate-600">مراجع منتقاة بعناية لدعم المسار بأكمله.</p>
          </div>
        </div>
        <div class="grid gap-4 sm:grid-cols-2">
          ${r.resources.map((res) => `
            <a href="${res.url}" target="_blank" rel="noopener noreferrer"
               class="group flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white px-4 py-4 transition hover:border-slate-300 hover:shadow-sm">
              <span class="flex items-center gap-3">
                <span class="flex h-9 w-9 items-center justify-center rounded-lg ${c.soft} ${c.text}">${icon("book-open", "h-4 w-4")}</span>
                <span class="font-semibold text-slate-800">${res.label}</span>
              </span>
              <span class="text-slate-400 transition group-hover:${c.text.replace("text-", "text-")}">${icon("external-link", "h-4 w-4")}</span>
            </a>`).join("")}
        </div>
      </div>
    </section>`;

  // ---- Back navigation (bottom) ----
  const backNav = `
    <section class="border-t border-slate-200 bg-white">
      <div class="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-4 py-10 sm:flex-row sm:px-6">
        <a href="/index.html" class="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100">
          ${icon("arrow-right", "h-4 w-4")} العودة إلى جميع الخرائط
        </a>
        ${(() => {
          const idx = ROADMAP_ORDER.indexOf(slug);
          const nextSlug = ROADMAP_ORDER[(idx + 1) % ROADMAP_ORDER.length];
          const next = ROADMAPS[nextSlug];
          return `<a href="/roadmaps/${nextSlug}.html" class="inline-flex items-center gap-2 rounded-full ${c.btn} px-5 py-2.5 text-sm font-semibold text-white transition">
            التالي: ${icon("arrow-left", "h-4 w-4")} ${next.title}
          </a>`;
        })()}
      </div>
    </section>`;

  content.innerHTML = hero + timeline + projects + resources + backNav;

  // ---- Expand / collapse behavior ----
  content.querySelectorAll(".node-toggle").forEach((btn) => {
    btn.addEventListener("click", () => {
      const panel = document.getElementById(btn.dataset.target);
      const isOpen = panel.classList.toggle("open");
      btn.setAttribute("aria-expanded", String(isOpen));
      const chev = btn.querySelector(".chevron");
      if (chev) chev.style.transform = isOpen ? "rotate(180deg)" : "rotate(0deg)";
    });
  });

  // Open the first node of the first stage by default for guidance
  const firstPanel = content.querySelector(".node-panel");
  if (firstPanel) {
    firstPanel.classList.add("open");
    const firstBtn = content.querySelector(".node-toggle");
    if (firstBtn) {
      firstBtn.setAttribute("aria-expanded", "true");
      const chev = firstBtn.querySelector(".chevron");
      if (chev) chev.style.transform = "rotate(180deg)";
    }
  }
})();
