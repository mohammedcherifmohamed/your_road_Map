// ===========================================================================
// Career Roadmaps — shared data for all paths (Arabic)
// ===========================================================================

const ROADMAPS = {
  "web-development": {
    title: "تطوير الويب",
    tagline: "ابنِ للويب الحديث — من أول وسم HTML إلى تطبيقات Full-Stack.",
    icon: "code-2",
    color: "sky",
    duration: "6–9 أشهر",
    level: "مبتدئ → متقدم",
    summary:
      "أتقن لغات المتصفح، وتعلم بناء واجهات مستخدم تفاعلية، وانشر تطبيقات كاملة الخلفية مدعومة بقواعد البيانات و APIs.",
    timeline: [
      {
        title: "أساسيات الويب",
        period: "الشهر 1",
        desc: "افهم كيف يعمل الويب، اكتب HTML دلالي، ونسق باستخدام CSS.",
        nodes: [
          {
            title: "HTML و الدلاليات",
            detail:
              "بنية المستند، الوسوم الدلالية، النماذج، أساسيات الوصولية، وسوم تحسين محركات البحث.",
            skills: ["Semantic HTML", "Forms", "Accessibility", "Meta tags"],
            resources: [
              { label: "MDN — HTML Basics", url: "https://developer.mozilla.org/en-US/docs/Learn/HTML" },
              { label: "web.dev — Learn HTML", url: "https://web.dev/learn/html/" },
            ],
          },
          {
            title: "CSS و التخطيط",
            detail:
              "Box model، Flexbox، Grid، التصميم المتجاوب، وميزات CSS الحديثة.",
            skills: ["Flexbox", "Grid", "Responsive design", "Transitions"],
            resources: [
              { label: "MDN — CSS", url: "https://developer.mozilla.org/en-US/docs/Learn/CSS" },
              { label: "CSS Tricks — Flexbox Guide", url: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/" },
            ],
          },
        ],
      },
      {
        title: "برمجة JavaScript",
        period: "الشهر 2–3",
        desc: "تعلم اللغة التي تشغل التفاعل على كل موقع ويب.",
        nodes: [
          {
            title: "JavaScript الأساسي",
            detail:
              "المتغيرات، الأنواع، الدوال، النطاق، الإغلاقات، DOM، والأحداث.",
            skills: ["ES6+", "DOM", "Events", "Closures", "Promises"],
            resources: [
              { label: "javascript.info", url: "https://javascript.info/" },
              { label: "MDN — JavaScript Guide", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide" },
            ],
          },
          {
            title: "غير المتزامن و APIs",
            detail:
              "جلب البيانات، العمل مع JSON، التعامل مع Promises و Async/Await، واستهلاك REST APIs.",
            skills: ["fetch", "async/await", "REST", "JSON"],
            resources: [
              { label: "MDN — Fetch API", url: "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API" },
            ],
          },
        ],
      },
      {
        title: "أطر العمل الأمامية",
        period: "الشهر 4–5",
        desc: "ابنِ واجهات مستخدم تفاعلية قائمة على المكونات.",
        nodes: [
          {
            title: "أساسيات React",
            detail:
              "المكونات، الخصائص، الحالة، hooks، والتوجيه في المتصفح.",
            skills: ["React", "Hooks", "State", "Routing"],
            resources: [
              { label: "React Docs", url: "https://react.dev/learn" },
            ],
          },
          {
            title: "الأدوات و البناء",
            detail:
              "مديري الحزم، أدوات البناء، وأدوات التطوير الحديثة.",
            skills: ["npm/pnpm", "Vite", "Git", "ESLint"],
            resources: [
              { label: "Vite Guide", url: "https://vitejs.dev/guide/" },
            ],
          },
        ],
      },
      {
        title: "الخلفية و Full-Stack",
        period: "الشهر 6–9",
        desc: "ابنِ خوادم، صمم APIs، واتصل بقواعد البيانات.",
        nodes: [
          {
            title: "Node.js و APIs",
            detail:
              "ابنِ REST APIs باستخدام Node.js، تعامل مع المصادقة، ونظم هيكلة الخلفية.",
            skills: ["Node.js", "Express", "Auth", "REST"],
            resources: [
              { label: "Node.js Docs", url: "https://nodejs.org/en/learn" },
            ],
          },
          {
            title: "قواعد البيانات",
            detail:
              "نمذجة البيانات، كتابة الاستعلامات، ودمج SQL و NoSQL.",
            skills: ["PostgreSQL", "SQL", "ORMs", "Schema design"],
            resources: [
              { label: "PostgreSQL Tutorial", url: "https://www.postgresqltutorial.com/" },
            ],
          },
        ],
      },
    ],
    projects: [
      { title: "معرض أعمال شخصي", level: "مبتدئ", desc: "موقع معرض متعدد الصفحات يعرض أعمالك." },
      { title: "لوحة الطقس", level: "متوسط", desc: "استهلك API عام واعرض حالة الطقس المباشرة مع رسوم بيانية." },
      { title: "مدونة Full-Stack", level: "متقدم", desc: "مصادقة، قاعدة بيانات، ولوحة تحكم على غرار CMS." },
    ],
    resources: [
      { label: "MDN Web Docs", url: "https://developer.mozilla.org/" },
      { label: "freeCodeCamp", url: "https://www.freecodecamp.org/" },
      { label: "The Odin Project", url: "https://www.theodinproject.com/" },
      { label: "web.dev", url: "https://web.dev/" },
    ],
  },

  "mobile-development": {
    title: "تطوير التطبيقات",
    tagline: "اصنع تطبيقات أصلية ومتعددة المنصات لنظامي iOS و Android.",
    icon: "smartphone",
    color: "emerald",
    duration: "6–10 أشهر",
    level: "مبتدئ → متقدم",
    summary:
      "تعلم أساسيات البرمجة، ثم ابنِ تطبيقات جوال متقنة باستخدام أطر العمل الأصلية أو متعددة المنصات، مع التخزين المحلي والنشر في المتاجر.",
    timeline: [
      {
        title: "أساسيات البرمجة",
        period: "الشهر 1–2",
        desc: "اختر لغة وتعلم مفاهيم البرمجة الأساسية.",
        nodes: [
          {
            title: "أساسيات اللغة",
            detail: "تعلم Dart (Flutter) أو Kotlin/Swift للتطوير الأصلي.",
            skills: ["Dart", "Kotlin", "Swift", "OOP"],
            resources: [
              { label: "Dart Language Tour", url: "https://dart.dev/language" },
              { label: "Kotlin Docs", url: "https://kotlinlang.org/docs/home.html" },
            ],
          },
          {
            title: "مفاهيم واجهات الجوال",
            detail: "افهم التخطيطات، أنماط التنقل، وإرشادات المنصات.",
            skills: ["Layouts", "Navigation", "Material Design", "Human Interface"],
            resources: [
              { label: "Material Design", url: "https://m3.material.io/" },
            ],
          },
        ],
      },
      {
        title: "متعدد المنصات مع Flutter",
        period: "الشهر 3–5",
        desc: "ابنِ تطبيقات تعمل على iOS و Android من قاعدة بيانات واحدة.",
        nodes: [
          {
            title: "Flutter Widgets",
            detail: "Widgets عديمة الحالة وذات الحالة، التخطيط، والسمات.",
            skills: ["Widgets", "State", "Theming", "Animations"],
            resources: [
              { label: "Flutter Docs", url: "https://docs.flutter.dev/" },
            ],
          },
          {
            title: "إدارة الحالة",
            detail: "إدارة حالة التطبيق باستخدام Provider أو Riverpod أو Bloc.",
            skills: ["Provider", "Riverpod", "Bloc"],
            resources: [
              { label: "Flutter State Management", url: "https://docs.flutter.dev/data-and-backend/state-mgmt/intro" },
            ],
          },
        ],
      },
      {
        title: "البيانات و الأجهزة",
        period: "الشهر 6–7",
        desc: "خزن البيانات وصولاً إلى ميزات الجهاز.",
        nodes: [
          {
            title: "التخزين المحلي و APIs",
            detail: "استخدم SQLite، مخازن المفتاح-القيمة، واستهلك APIs عن بعد.",
            skills: ["SQLite", "REST", "Caching", "JSON"],
            resources: [
              { label: "sqflite package", url: "https://pub.dev/packages/sqflite" },
            ],
          },
          {
            title: "ميزات الجهاز",
            detail: "الكاميرا، الموقع، الإشعارات، والأذونات.",
            skills: ["Camera", "Geolocation", "Push notifications"],
            resources: [
              { label: "Flutter Packages", url: "https://pub.dev/" },
            ],
          },
        ],
      },
      {
        title: "النشر في المتاجر",
        period: "الشهر 8–10",
        desc: "تهذيب، اختبار، ونشر إلى متاجر التطبيقات.",
        nodes: [
          {
            title: "الاختبار و الإصدار",
            detail: "اكتب اختبارات، حسّن الأداء، وجهز قوائم المتجر.",
            skills: ["Unit tests", "CI/CD", "App Store", "Play Store"],
            resources: [
              { label: "Flutter Deployment", url: "https://docs.flutter.dev/deployment" },
            ],
          },
        ],
      },
    ],
    projects: [
      { title: "تطبيق مهام", level: "مبتدئ", desc: "مدير مهام بتخزين محلي مع تذكيرات." },
      { title: "قارئ أخبار", level: "متوسط", desc: "جلب مقالات من API مع تخزين مؤقت دون اتصال." },
      { title: "تطبيق لياقة اجتماعي", level: "متقدم", desc: "مصادقة، مزامنة سحابية، رسوم بيانية، وإشعارات." },
    ],
    resources: [
      { label: "Flutter", url: "https://flutter.dev/" },
      { label: "Android Developers", url: "https://developer.android.com/" },
      { label: "Apple Developer", url: "https://developer.apple.com/" },
      { label: "pub.dev", url: "https://pub.dev/" },
    ],
  },

  "ai-engineering": {
    title: "هندسة الذكاء الاصطناعي",
    tagline: "ابنِ تطبيقات ذكية مدعومة بالتعلم الآلي و LLMs.",
    icon: "brain-circuit",
    color: "violet",
    duration: "8–12 أشهر",
    level: "متوسط → متقدم",
    summary:
      "اجمع بين Python والرياضيات وأساسيات التعلم الآلي مع أحدث أدوات التعلم العميق و LLMs لبناء ونشر منتجات مدعومة بالذكاء الاصطناعي.",
    timeline: [
      {
        title: "أساسيات Python و الرياضيات",
        period: "الشهر 1–2",
        desc: "ابنِ قاعدة البرمجة والرياضيات التي يعتمد عليها الذكاء الاصطناعي.",
        nodes: [
          {
            title: "Python للبيانات",
            detail: "Python، NumPy، Pandas، ومعالجة البيانات.",
            skills: ["Python", "NumPy", "Pandas", "Jupyter"],
            resources: [
              { label: "Python Docs", url: "https://docs.python.org/3/tutorial/" },
              { label: "Pandas Docs", url: "https://pandas.pydata.org/docs/" },
            ],
          },
          {
            title: "الرياضيات للتعلم الآلي",
            detail: "الجبر الخطي، التفاضل والتكامل، الاحتمالات، والإحصاء.",
            skills: ["Linear algebra", "Calculus", "Probability", "Statistics"],
            resources: [
              { label: "3Blue1Brown — Linear Algebra", url: "https://www.3blue1brown.com/topics/linear-algebra" },
            ],
          },
        ],
      },
      {
        title: "التعلم الآلي",
        period: "الشهر 3–5",
        desc: "تعلم خوارزميات التعلم الآلي الكلاسيكية وسير العمل.",
        nodes: [
          {
            title: "أساسيات التعلم الآلي",
            detail: "الانحدار، التصنيف، التجميع، وتقييم النماذج.",
            skills: ["scikit-learn", "Regression", "Classification", "Evaluation"],
            resources: [
              { label: "scikit-learn", url: "https://scikit-learn.org/stable/" },
              { label: "Andrew Ng — ML Specialization", url: "https://www.coursera.org/specializations/machine-learning-introduction" },
            ],
          },
          {
            title: "هندسة الميزات",
            detail: "المعالجة المسبقة، اختيار الميزات، وخطوط الأنابيب.",
            skills: ["Preprocessing", "Pipelines", "Cross-validation"],
            resources: [
              { label: "Kaggle Learn", url: "https://www.kaggle.com/learn" },
            ],
          },
        ],
      },
      {
        title: "التعلم العميق",
        period: "الشهر 6–8",
        desc: "الشبكات العصبية للرؤية واللغة وما بعدها.",
        nodes: [
          {
            title: "الشبكات العصبية",
            detail: "ابنِ ودرب الشبكات باستخدام PyTorch.",
            skills: ["PyTorch", "CNNs", "RNNs", "Training loops"],
            resources: [
              { label: "PyTorch Tutorials", url: "https://pytorch.org/tutorials/" },
            ],
          },
          {
            title: "Transformers و NLP",
            detail: "آلية الانتباه، المحولات، ونماذج اللغة الحديثة.",
            skills: ["Transformers", "Embeddings", "Fine-tuning"],
            resources: [
              { label: "Hugging Face Course", url: "https://huggingface.co/learn" },
            ],
          },
        ],
      },
      {
        title: "تطبيقات LLMs و النشر",
        period: "الشهر 9–12",
        desc: "ابنِ وانشر تطبيقات ذكاء اصطناعي إنتاجية.",
        nodes: [
          {
            title: "البناء مع LLMs",
            detail: "هندسة الاستفسار، RAG، الوكلاء، و AI SDK.",
            skills: ["Prompt engineering", "RAG", "Vector DBs", "Agents"],
            resources: [
              { label: "AI SDK Docs", url: "https://sdk.vercel.ai/" },
            ],
          },
          {
            title: "MLOps",
            detail: "خدمة، مراقبة، وتوسيع النماذج في الإنتاج.",
            skills: ["Deployment", "Monitoring", "APIs", "Docker"],
            resources: [
              { label: "Made With ML", url: "https://madewithml.com/" },
            ],
          },
        ],
      },
    ],
    projects: [
      { title: "توقع أسعار المنازل", level: "مبتدئ", desc: "درّب نموذج انحدار على بيانات جدولية." },
      { title: "مصنف الصور", level: "متوسط", desc: "ابنِ CNN للتعرف على فئات الصور." },
      { title: "Chatbot RAG", level: "متقدم", desc: "مساعد LLM يستند إلى مستنداتك الخاصة." },
    ],
    resources: [
      { label: "Hugging Face", url: "https://huggingface.co/" },
      { label: "fast.ai", url: "https://www.fast.ai/" },
      { label: "Kaggle", url: "https://www.kaggle.com/" },
      { label: "Papers with Code", url: "https://paperswithcode.com/" },
    ],
  },

  "cybersecurity": {
    title: "الأمن السيبراني",
    tagline: "احمِ الأنظمة، اكتشف الثغرات، وفكر كمهاجم.",
    icon: "shield-check",
    color: "rose",
    duration: "8–12 أشهر",
    level: "مبتدئ → متقدم",
    summary:
      "ابنِ أساسًا قويًا في الشبكات وأنظمة التشغيل، ثم تخصص في الأمن الهجومي أو الدفاعي من خلال مختبرات عملية وشهادات احترافية.",
    timeline: [
      {
        title: "أساسيات تقنية المعلومات و الشبكات",
        period: "الشهر 1–2",
        desc: "افهم الأنظمة التي ستقوم بحمايتها.",
        nodes: [
          {
            title: "الشبكات",
            detail: "TCP/IP، DNS، HTTP، المنافذ، ونموذج OSI.",
            skills: ["TCP/IP", "DNS", "Routing", "OSI model"],
            resources: [
              { label: "Professor Messer — Network+", url: "https://www.professormesser.com/" },
            ],
          },
          {
            title: "أنظمة التشغيل",
            detail: "سطر أوامر Linux، داخلية Windows، والأذونات.",
            skills: ["Linux", "Bash", "Windows", "Permissions"],
            resources: [
              { label: "Linux Journey", url: "https://linuxjourney.com/" },
            ],
          },
        ],
      },
      {
        title: "أساسيات الأمن",
        period: "الشهر 3–4",
        desc: "تعلم مفاهيم الأمن الأساسية و CIA triad.",
        nodes: [
          {
            title: "المفاهيم الأساسية",
            detail: "التشفير، المصادقة، التهديدات، والمخاطر.",
            skills: ["Cryptography", "Authentication", "Risk", "Threat models"],
            resources: [
              { label: "CompTIA Security+", url: "https://www.comptia.org/certifications/security" },
            ],
          },
          {
            title: "أدوات المهنة",
            detail: "Wireshark، Nmap، Burp Suite، ومجموعة Kali.",
            skills: ["Wireshark", "Nmap", "Burp Suite", "Kali"],
            resources: [
              { label: "TryHackMe", url: "https://tryhackme.com/" },
            ],
          },
        ],
      },
      {
        title: "الأمن الهجومي",
        period: "الشهر 5–8",
        desc: "تعلم الاختراق الأخلاقي واختبار الاختراق.",
        nodes: [
          {
            title: "استغلال الويب",
            detail: "OWASP Top 10، الحقن، XSS، وثغرات المصادقة.",
            skills: ["OWASP", "SQLi", "XSS", "CSRF"],
            resources: [
              { label: "OWASP Top 10", url: "https://owasp.org/www-project-top-ten/" },
              { label: "PortSwigger Academy", url: "https://portswigger.net/web-security" },
            ],
          },
          {
            title: "اختبار الاختراق",
            detail: "الاستطلاع، الاستغلال، تصعيد الصلاحيات، وإعداد التقارير.",
            skills: ["Recon", "Exploitation", "Privilege escalation"],
            resources: [
              { label: "Hack The Box", url: "https://www.hackthebox.com/" },
            ],
          },
        ],
      },
      {
        title: "الدفاع و التخصص",
        period: "الشهر 9–12",
        desc: "الفريق الأزرق، الاستجابة للحوادث، والشهادات.",
        nodes: [
          {
            title: "الفريق الأزرق و SOC",
            detail: "SIEM، التسجيل، الاكتشاف، والاستجابة للحوادث.",
            skills: ["SIEM", "Incident response", "Forensics", "Detection"],
            resources: [
              { label: "Blue Team Labs", url: "https://blueteamlabs.online/" },
            ],
          },
        ],
      },
    ],
    projects: [
      { title: "مختبر أمن منزلي", level: "مبتدئ", desc: "أنشئ مختبرًا افتراضيًا بأجهزة قابلة للاختراق." },
      { title: "Capture The Flag", level: "متوسط", desc: "حل تحديات CTF عبر فئات متعددة." },
      { title: "تقرير اختبار اختراق كامل", level: "متقدم", desc: "قيّم مختبرًا هدفًا واكتب تقريرًا احترافيًا." },
    ],
    resources: [
      { label: "TryHackMe", url: "https://tryhackme.com/" },
      { label: "Hack The Box", url: "https://www.hackthebox.com/" },
      { label: "OWASP", url: "https://owasp.org/" },
      { label: "PortSwigger Academy", url: "https://portswigger.net/web-security" },
    ],
  },

  "devops": {
    title: "DevOps",
    tagline: "أتمتة، نشر، وتوسيع البرامج بثقة.",
    icon: "infinity",
    color: "amber",
    duration: "6–10 أشهر",
    level: "متوسط → متقدم",
    summary:
      "اجسر الفجوة بين التطوير والتشغيل: أتقن Linux، الحاويات، CI/CD، البنية التحتية كرمز، ومنصات السحابة لنشر برامج موثوقة على نطاق واسع.",
    timeline: [
      {
        title: "Linux و البرمجة النصية",
        period: "الشهر 1–2",
        desc: "الأساس التشغيلي لـ DevOps.",
        nodes: [
          {
            title: "إدارة Linux",
            detail: "سطر الأوامر، العمليات، الشبكات، والخدمات.",
            skills: ["Linux", "Bash", "systemd", "Networking"],
            resources: [
              { label: "Linux Journey", url: "https://linuxjourney.com/" },
            ],
          },
          {
            title: "البرمجة النصية و التحكم بالإصدارات",
            detail: "Bash scripting، أتمتة Python، وسير عمل Git.",
            skills: ["Bash", "Python", "Git", "Automation"],
            resources: [
              { label: "Pro Git Book", url: "https://git-scm.com/book/en/v2" },
            ],
          },
        ],
      },
      {
        title: "الحاويات",
        period: "الشهر 3–4",
        desc: "احزم وشغل التطبيقات بشكل متسق في أي مكان.",
        nodes: [
          {
            title: "Docker",
            detail: "الصور، الحاويات، وحدات التخزين، و Compose.",
            skills: ["Docker", "Dockerfile", "Compose", "Registries"],
            resources: [
              { label: "Docker Docs", url: "https://docs.docker.com/get-started/" },
            ],
          },
          {
            title: "Kubernetes",
            detail: "Pods، النشر، الخدمات، والتنسيق.",
            skills: ["Kubernetes", "Pods", "Helm", "Scaling"],
            resources: [
              { label: "Kubernetes Docs", url: "https://kubernetes.io/docs/tutorials/" },
            ],
          },
        ],
      },
      {
        title: "CI/CD و IaC",
        period: "الشهر 5–7",
        desc: "أتمتة البناء، الاختبارات، والبنية التحتية.",
        nodes: [
          {
            title: "خطوط CI/CD",
            detail: "الاختبار الآلي والنشر باستخدام GitHub Actions.",
            skills: ["GitHub Actions", "Pipelines", "Testing", "Deployment"],
            resources: [
              { label: "GitHub Actions Docs", url: "https://docs.github.com/en/actions" },
            ],
          },
          {
            title: "البنية التحتية كرمز",
            detail: "توفير البنية التحتية بشكل تعريفي باستخدام Terraform.",
            skills: ["Terraform", "Ansible", "IaC", "Provisioning"],
            resources: [
              { label: "Terraform Docs", url: "https://developer.hashicorp.com/terraform/tutorials" },
            ],
          },
        ],
      },
      {
        title: "السحابة و المراقبة",
        period: "الشهر 8–10",
        desc: "شغل وراقب الأنظمة في السحابة.",
        nodes: [
          {
            title: "منصات السحابة",
            detail: "الخدمات الأساسية على AWS أو GCP أو Azure.",
            skills: ["AWS", "Networking", "IAM", "Storage"],
            resources: [
              { label: "AWS Skill Builder", url: "https://skillbuilder.aws/" },
            ],
          },
          {
            title: "المراقبة",
            detail: "المقاييس، السجلات، التتبع، والتنبيهات.",
            skills: ["Prometheus", "Grafana", "Logging", "Alerting"],
            resources: [
              { label: "Prometheus Docs", url: "https://prometheus.io/docs/introduction/overview/" },
            ],
          },
        ],
      },
    ],
    projects: [
      { title: "تطبيق بحاوية Docker", level: "مبتدئ", desc: "احزم تطبيق ويب وشغله مع Compose." },
      { title: "خط CI/CD", level: "متوسط", desc: "أتمتة الاختبار والنشر مع كل push." },
      { title: "مجموعة Kubernetes", level: "متقدم", desc: "انشر تطبيقًا قابلًا للتوسع مع IaC والمراقبة." },
    ],
    resources: [
      { label: "roadmap.sh — DevOps", url: "https://roadmap.sh/devops" },
      { label: "Docker", url: "https://www.docker.com/" },
      { label: "Kubernetes", url: "https://kubernetes.io/" },
      { label: "HashiCorp Learn", url: "https://developer.hashicorp.com/" },
    ],
  },

  "data-science": {
    title: "علم البيانات",
    tagline: "حوّل البيانات الخام إلى رؤى ونماذج وقرارات.",
    icon: "bar-chart-3",
    color: "teal",
    duration: "7–11 أشهر",
    level: "مبتدئ → متقدم",
    summary:
      "تعلم جمع وتنظيف وتحليل وتصور البيانات، ثم طبّق الإحصاء والتعلم الآلي لاستخراج الرؤى وتوصيلها بفعالية.",
    timeline: [
      {
        title: "البرمجة و الأدوات",
        period: "الشهر 1–2",
        desc: "مجموعة الأدوات التي يستخدمها كل عالم بيانات يوميًا.",
        nodes: [
          {
            title: "Python و SQL",
            detail: "Python للتحليل و SQL لاستعلام قواعد البيانات.",
            skills: ["Python", "Pandas", "SQL", "Jupyter"],
            resources: [
              { label: "Kaggle — Python", url: "https://www.kaggle.com/learn/python" },
              { label: "Mode SQL Tutorial", url: "https://mode.com/sql-tutorial/" },
            ],
          },
          {
            title: "معالجة البيانات",
            detail: "تنظيف، تحويل، وإعادة تشكيل البيانات غير المنتظمة.",
            skills: ["Cleaning", "Pandas", "NumPy", "ETL"],
            resources: [
              { label: "Pandas Docs", url: "https://pandas.pydata.org/docs/" },
            ],
          },
        ],
      },
      {
        title: "الإحصاء و التحليل",
        period: "الشهر 3–4",
        desc: "الرياضيات وراء الاستنتاجات السليمة.",
        nodes: [
          {
            title: "الإحصاء",
            detail: "التوزيعات، اختبار الفرضيات، والاستدلال.",
            skills: ["Probability", "Hypothesis testing", "Inference"],
            resources: [
              { label: "StatQuest", url: "https://statquest.org/" },
            ],
          },
          {
            title: "التحليل الاستكشافي",
            detail: "ابحث عن الأنماط واسرد القصص بالبيانات.",
            skills: ["EDA", "Correlation", "Aggregation"],
            resources: [
              { label: "Kaggle — Data Viz", url: "https://www.kaggle.com/learn/data-visualization" },
            ],
          },
        ],
      },
      {
        title: "التصور و التعلم الآلي",
        period: "الشهر 5–8",
        desc: "تواصل النتائج وابنِ نماذج تنبؤية.",
        nodes: [
          {
            title: "تصور البيانات",
            detail: "الرسوم البيانية ولوحات المعلومات باستخدام Matplotlib و Seaborn وأدوات BI.",
            skills: ["Matplotlib", "Seaborn", "Dashboards", "Storytelling"],
            resources: [
              { label: "Matplotlib Docs", url: "https://matplotlib.org/stable/tutorials/index.html" },
            ],
          },
          {
            title: "التعلم الآلي",
            detail: "النماذج الموجهة وغير الموجهة باستخدام scikit-learn.",
            skills: ["scikit-learn", "Regression", "Clustering", "Evaluation"],
            resources: [
              { label: "scikit-learn", url: "https://scikit-learn.org/stable/" },
            ],
          },
        ],
      },
      {
        title: "الإنتاج و التواصل",
        period: "الشهر 9–11",
        desc: "انشر النماذج وقدم النتائج لأصحاب المصلحة.",
        nodes: [
          {
            title: "البيانات الضخمة و النشر",
            detail: "العمل مع مجموعات بيانات أكبر وخدمة النماذج.",
            skills: ["Spark", "Pipelines", "Deployment", "APIs"],
            resources: [
              { label: "Made With ML", url: "https://madewithml.com/" },
            ],
          },
        ],
      },
    ],
    projects: [
      { title: "تحليل بيانات استكشافي", level: "مبتدئ", desc: "حلل مجموعة بيانات عامة وأبلغ عن النتائج." },
      { title: "توقعات المبيعات", level: "متوسط", desc: "ابنِ نموذج سلسلة زمنية لتوقع الطلب." },
      { title: "خط ML شامل", level: "متقدم", desc: "من البيانات الخام إلى API تنبؤ منشورة." },
    ],
    resources: [
      { label: "Kaggle", url: "https://www.kaggle.com/" },
      { label: "StatQuest", url: "https://statquest.org/" },
      { label: "scikit-learn", url: "https://scikit-learn.org/" },
      { label: "Towards Data Science", url: "https://towardsdatascience.com/" },
    ],
  },

  "game-development": {
    title: "تطوير الألعاب",
    tagline: "صمم، ابنِ، وانشر ألعابًا تفاعلية.",
    icon: "gamepad-2",
    color: "indigo",
    duration: "8–12 أشهر",
    level: "مبتدئ → متقدم",
    summary:
      "تعلم مبادئ البرمجة وتصميم الألعاب، أتقن محرك ألعاب، وابنِ ألعابًا قابلة للعب من النماذج الأولية إلى إصدار احترافي.",
    timeline: [
      {
        title: "أساسيات البرمجة",
        period: "الشهر 1–2",
        desc: "تعلم البرمجة مع وضع الألعاب في الاعتبار.",
        nodes: [
          {
            title: "البرمجة الأساسية",
            detail: "C# أو C++، المنطق، الحلقات، والتصميم كائني التوجه.",
            skills: ["C#", "C++", "OOP", "Algorithms"],
            resources: [
              { label: "C# Docs", url: "https://learn.microsoft.com/en-us/dotnet/csharp/" },
            ],
          },
          {
            title: "رياضيات الألعاب",
            detail: "المتجهات، التحويلات، والفيزياء الأساسية.",
            skills: ["Vectors", "Trigonometry", "Physics", "Transforms"],
            resources: [
              { label: "Math for Game Devs", url: "https://www.youtube.com/watch?v=MOYiVLEnhrw" },
            ],
          },
        ],
      },
      {
        title: "أساسيات محرك الألعاب",
        period: "الشهر 3–5",
        desc: "ابدأ العمل مع محرك ألعاب حديث.",
        nodes: [
          {
            title: "أساسيات Unity",
            detail: "المشاهد، GameObjects، المكونات، والبرمجة النصية.",
            skills: ["Unity", "GameObjects", "Scripting", "Prefabs"],
            resources: [
              { label: "Unity Learn", url: "https://learn.unity.com/" },
            ],
          },
          {
            title: "الإدخال و الفيزياء",
            detail: "تحكم اللاعب، المصادمات، والأجسام الصلبة.",
            skills: ["Input", "Colliders", "Rigidbodies", "Raycasting"],
            resources: [
              { label: "Unity Manual", url: "https://docs.unity3d.com/Manual/index.html" },
            ],
          },
        ],
      },
      {
        title: "تصميم اللعبة و الفنون",
        period: "الشهر 6–8",
        desc: "اصنع ألعابًا ممتعة عند اللعب.",
        nodes: [
          {
            title: "مبادئ التصميم",
            detail: "حلقات اللعبة، الآليات، تصميم المستويات، والتوازن.",
            skills: ["Game loops", "Mechanics", "Level design", "Balancing"],
            resources: [
              { label: "Game Maker's Toolkit", url: "https://www.youtube.com/@GMTK" },
            ],
          },
          {
            title: "الصوت و المرئيات",
            detail: "الرسومات المتحركة، الجسيمات، الصوت، وواجهة المستخدم.",
            skills: ["Animation", "Particles", "Audio", "UI"],
            resources: [
              { label: "Kenney Assets", url: "https://kenney.nl/" },
            ],
          },
        ],
      },
      {
        title: "التهذيب و النشر",
        period: "الشهر 9–12",
        desc: "حسّن، اختبر، واطلق لعبتك.",
        nodes: [
          {
            title: "تحسين الأداء و الإصدار",
            detail: "الأداء، البناء، والنشر على itch.io أو Steam.",
            skills: ["Optimization", "Builds", "Publishing", "Playtesting"],
            resources: [
              { label: "itch.io", url: "https://itch.io/" },
            ],
          },
        ],
      },
    ],
    projects: [
      { title: "لعبة منصات ثنائية الأبعاد", level: "مبتدئ", desc: "لعبة جري وقفز بمستوى واحد متقن." },
      { title: "مطلق النار من الأعلى", level: "متوسط", desc: "أعداء، موجات، نقاط، وتعزيزات." },
      { title: "لعبة مستقلة منشورة", level: "متقدم", desc: "لعبة كاملة منشورة على itch.io." },
    ],
    resources: [
      { label: "Unity Learn", url: "https://learn.unity.com/" },
      { label: "Godot Docs", url: "https://docs.godotengine.org/" },
      { label: "Game Maker's Toolkit", url: "https://www.youtube.com/@GMTK" },
      { label: "itch.io", url: "https://itch.io/" },
    ],
  },
};

// Order shown on the homepage
const ROADMAP_ORDER = [
  "web-development",
  "mobile-development",
  "ai-engineering",
  "cybersecurity",
  "devops",
  "data-science",
  "game-development",
];
