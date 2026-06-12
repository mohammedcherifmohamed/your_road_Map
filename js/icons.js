// Minimal inline SVG icon set (stroke-based, 24x24). Returns SVG markup string.
const ICONS = {
  "code-2":
    '<polyline points="18 16 22 12 18 8"/><polyline points="6 8 2 12 6 16"/><line x1="14.5" y1="4" x2="9.5" y2="20"/>',
  "smartphone":
    '<rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/>',
  "brain-circuit":
    '<path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M9 13a4.5 4.5 0 0 0 3-4"/><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"/><path d="M3.477 10.896a4 4 0 0 1 .585-.396"/><path d="M6 18a4 4 0 0 1-1.967-.516"/><path d="M12 13h4"/><path d="M12 18h6a2 2 0 0 1 2 2v1"/><path d="M12 8h8"/><path d="M16 8V5a2 2 0 0 1 2-2"/><circle cx="16" cy="13" r=".5"/><circle cx="18" cy="3" r=".5"/><circle cx="20" cy="21" r=".5"/><circle cx="20" cy="8" r=".5"/>',
  "shield-check":
    '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
  "infinity":
    '<path d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.33-6 4Z"/>',
  "bar-chart-3":
    '<path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/>',
  "gamepad-2":
    '<line x1="6" y1="12" x2="10" y2="12"/><line x1="8" y1="10" x2="8" y2="14"/><line x1="15" y1="13" x2="15.01" y2="13"/><line x1="18" y1="11" x2="18.01" y2="11"/><rect width="20" height="12" x="2" y="6" rx="2"/>',
  "arrow-right": '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
  "arrow-left": '<path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>',
  "chevron-down": '<path d="m6 9 6 6 6-6"/>',
  "clock": '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
  "layers": '<path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/>',
  "book-open": '<path d="M12 7v14"/><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"/>',
  "rocket": '<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>',
  "graduation-cap": '<path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/>',
  "check": '<path d="M20 6 9 17l-5-5"/>',
  "external-link": '<path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>',
};

function icon(name, classes = "h-6 w-6") {
  const body = ICONS[name] || "";
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${classes}" aria-hidden="true">${body}</svg>`;
}

// Tailwind color classes per path accent. Static strings so Tailwind CDN picks them up.
const COLOR_CLASSES = {
  sky:     { text: "text-sky-600",     bg: "bg-sky-50",     ring: "ring-sky-200",     dot: "bg-sky-500",     soft: "bg-sky-100",     chip: "bg-sky-50 text-sky-700",     btn: "bg-sky-600 hover:bg-sky-700",     grad: "from-sky-500/10" },
  emerald: { text: "text-emerald-600", bg: "bg-emerald-50", ring: "ring-emerald-200", dot: "bg-emerald-500", soft: "bg-emerald-100", chip: "bg-emerald-50 text-emerald-700", btn: "bg-emerald-600 hover:bg-emerald-700", grad: "from-emerald-500/10" },
  violet:  { text: "text-violet-600",  bg: "bg-violet-50",  ring: "ring-violet-200",  dot: "bg-violet-500",  soft: "bg-violet-100",  chip: "bg-violet-50 text-violet-700",  btn: "bg-violet-600 hover:bg-violet-700",  grad: "from-violet-500/10" },
  rose:    { text: "text-rose-600",    bg: "bg-rose-50",    ring: "ring-rose-200",    dot: "bg-rose-500",    soft: "bg-rose-100",    chip: "bg-rose-50 text-rose-700",    btn: "bg-rose-600 hover:bg-rose-700",    grad: "from-rose-500/10" },
  amber:   { text: "text-amber-600",   bg: "bg-amber-50",   ring: "ring-amber-200",   dot: "bg-amber-500",   soft: "bg-amber-100",   chip: "bg-amber-50 text-amber-700",   btn: "bg-amber-600 hover:bg-amber-700",   grad: "from-amber-500/10" },
  teal:    { text: "text-teal-600",    bg: "bg-teal-50",    ring: "ring-teal-200",    dot: "bg-teal-500",    soft: "bg-teal-100",    chip: "bg-teal-50 text-teal-700",    btn: "bg-teal-600 hover:bg-teal-700",    grad: "from-teal-500/10" },
  indigo:  { text: "text-indigo-600",  bg: "bg-indigo-50",  ring: "ring-indigo-200",  dot: "bg-indigo-500",  soft: "bg-indigo-100",  chip: "bg-indigo-50 text-indigo-700",  btn: "bg-indigo-600 hover:bg-indigo-700",  grad: "from-indigo-500/10" },
};

const LEVEL_CHIP = {
  Beginner: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  Intermediate: "bg-amber-50 text-amber-700 ring-amber-200",
  Advanced: "bg-rose-50 text-rose-700 ring-rose-200",
};
