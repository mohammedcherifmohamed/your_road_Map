// Homepage rendering logic
(function () {
  // Header / footer icons
  document.getElementById("logo-icon").innerHTML = icon("graduation-cap", "h-5 w-5");
  document.getElementById("footer-icon").innerHTML = icon("graduation-cap", "h-4 w-4");
  document.getElementById("cta-arrow").innerHTML = icon("arrow-left", "h-4 w-4");
  document.getElementById("hero-arrow").innerHTML = icon("arrow-left", "h-4 w-4");

  // Render path cards
  const grid = document.getElementById("paths-grid");
  grid.innerHTML = ROADMAP_ORDER.map((slug, i) => {
    const r = ROADMAPS[slug];
    const c = COLOR_CLASSES[r.color];
    const milestones = r.timeline.length;
    return `
      <a href="roadmaps/${slug}.html"
         class="group fade-up relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm ring-1 ring-transparent transition hover:-translate-y-1 hover:shadow-xl hover:${c.ring}"
         style="animation-delay:${i * 60}ms">
        <div class="absolute inset-x-0 top-0 -z-0 h-24 bg-gradient-to-b ${c.grad} to-transparent"></div>
        <div class="relative flex items-center justify-between">
          <span class="flex h-12 w-12 items-center justify-center rounded-xl ${c.soft} ${c.text}">
            ${icon(r.icon, "h-6 w-6")}
          </span>
          <span class="rounded-full ${c.chip} px-2.5 py-1 text-xs font-semibold ring-1 ring-inset ${c.ring}">${r.level}</span>
        </div>
        <h3 class="relative mt-5 text-xl font-bold text-slate-900">${r.title}</h3>
        <p class="relative mt-2 flex-1 text-sm leading-relaxed text-slate-600">${r.tagline}</p>
        <div class="relative mt-5 flex items-center gap-4 text-xs font-medium text-slate-500">
          <span class="inline-flex items-center gap-1.5">${icon("clock", "h-3.5 w-3.5")} ${r.duration}</span>
          <span class="inline-flex items-center gap-1.5">${icon("layers", "h-3.5 w-3.5")} ${milestones} مراحل</span>
        </div>
        <span class="relative mt-5 inline-flex items-center gap-1.5 text-sm font-semibold ${c.text}">
          عرض الخريطة
          <span class="transition-transform group-hover:-translate-x-1">${icon("arrow-left", "h-4 w-4")}</span>
        </span>
      </a>`;
  }).join("");

  // How it works
  const steps = [
    { icon: "book-open", title: "اختر مسارًا", desc: "تصفح ٧ مسارات مهنية واختر ما يثير حماسك." },
    { icon: "layers", title: "اتبع الجدول الزمني", desc: "اعمل عبر مراحل من المواضيع القابلة للتوسع والمهارات والمصادر المختارة." },
    { icon: "rocket", title: "ابنِ وانشر", desc: "أكمل المشاريع المقترحة لتحويل المعرفة إلى ملف أعمال حقيقي." },
  ];
  document.getElementById("how-grid").innerHTML = steps.map((s, i) => `
    <div class="rounded-2xl border border-slate-200 bg-slate-50 p-6">
      <div class="flex items-center gap-3">
        <span class="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white">${icon(s.icon, "h-5 w-5")}</span>
        <span class="font-display text-sm font-bold text-slate-400">الخطوة ${i + 1}</span>
      </div>
      <h3 class="mt-4 text-lg font-bold text-slate-900">${s.title}</h3>
      <p class="mt-2 text-sm leading-relaxed text-slate-600">${s.desc}</p>
    </div>`).join("");
})();
