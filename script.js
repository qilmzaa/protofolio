/* =========================================================
   script.js — Landing Page "SoFarPixel" (jasa desain web)
   Dibuat TANPA build tool: React 18 (UMD) + htm dari CDN.
   Sintaks html`...` dari htm mirip JSX tapi tidak butuh Babel.
   ========================================================= */

/* =========================================================
   1) KONFIGURASI — cukup ubah bagian ini saja
   ========================================================= */
const CONFIG = {
  // Nomor WhatsApp format internasional TANPA +, spasi, atau tanda hubung.
  // GANTI "62XXXXXXXXXX" dengan nomor asli, contoh: "6281234567890"
  waNumber: "62XXXXXXXXXX",

  // Nama brand yang dipakai di judul dan pesan otomatis
  brandName: "SoFarPixel",

  // Pesan default untuk tombol WhatsApp umum
  defaultMessage: "Halo SoFarPixel! Saya ingin konsultasi desain website untuk project saya.",
};

/* Helper: buka WhatsApp di tab baru dengan pesan tertentu.
   Hasil akhir: https://wa.me/{nomor}?text={pesan ter-encode} */
function openWhatsApp(message) {
  const url = "https://wa.me/" + CONFIG.waNumber + "?text=" + encodeURIComponent(message);
  window.open(url, "_blank", "noopener,noreferrer");
}

/* =========================================================
   1b) DATA KONTAK — dipakai banner "Let's Connect" di footer.
   GANTI semua nilai placeholder di bawah dengan data kamu.
   ========================================================= */
const KONTAK = {
  email: "nama.kamu@example.com",                    // GANTI: email asli
  website: "https://username.github.io/nama-repo/",  // GANTI: link GitHub Pages
  lokasi: "Kotamu, Indonesia",                       // GANTI: kota asal
  instagramUrl: "https://instagram.com/usernamekamu",// GANTI: URL profil IG
  instagramLabel: "@usernamekamu",                   // GANTI: username IG
};

/* =========================================================
   2) DATA — mudah diedit siswa
   ========================================================= */

// Daftar layanan/jasa (nama, deskripsi, harga)
const LAYANAN = [
  {
    nama: "Landing Page Bisnis",
    deskripsi: "1 halaman responsif: hero, layanan, testimoni, FAQ, dan form kontak. Siap tayang di domainmu.",
    harga: "Rp1.500.000",
    emoji: "🖥️",
    // Field image opsional: jika diisi, gambar menggantikan emoji di kartu
    image: "layanan-landing.jpg",
  },
  {
    nama: "Website Portofolio",
    deskripsi: "Desain unik untuk menampilkan karya, CV, dan pengalamanmu secara profesional.",
    harga: "Rp900.000",
    emoji: "🧑‍🎨",
    // Field image opsional: jika diisi, gambar menggantikan emoji di kartu
    image: "layanan-portofolio.jpg",
    // Ukuran intrinsik gambar (opsional, default 800x500)
    imageW: 800,
    imageH: 450,
  },
  {
    nama: "Redesign Website Lama",
    deskripsi: "Tampilan lawas diperbarui jadi modern, mobile-friendly, dan lebih cepat dimuat.",
    harga: "Rp1.200.000",
    emoji: "🔄",
    // Field image opsional: jika diisi, gambar menggantikan emoji di kartu
    image: "layanan-redesign.jpg",
    // Ukuran intrinsik gambar (opsional, default 800x500)
    imageW: 800,
    imageH: 563,
  },
  {
    nama: "Desain UI/UX Aplikasi",
    deskripsi: "Dari riset, wireframe, hingga mockup hi-fi di Figma — siap dikerjakan tim developer.",
    harga: "Rp2.000.000",
    emoji: "📱",
    // Field image opsional: jika diisi, gambar menggantikan emoji di kartu
    image: "layanan-uiux.jpg",
    // Ukuran intrinsik gambar (opsional, default 800x500)
    imageW: 800,
    imageH: 533,
  },
  {
    nama: "Logo & Branding",
    deskripsi: "Logo, palet warna, tipografi, dan mini style guide agar brandmu konsisten di mana saja.",
    harga: "Rp750.000",
    emoji: "🎨",
    // Field image opsional: jika diisi, gambar menggantikan emoji di kartu
    image: "layanan-branding.jpg",
    // Ukuran intrinsik gambar (opsional, default 800x500)
    imageW: 800,
    imageH: 450,
  },
  {
    nama: "Perawatan Website",
    deskripsi: "Update konten, backup rutin, dan pengecekan error tiap bulan agar websitemu tetap sehat.",
    harga: "Rp300.000",
    emoji: "🔧",
    // Field image opsional: jika diisi, gambar menggantikan emoji di kartu
    image: "layanan-maintenance.jpg",
    // Ukuran intrinsik gambar (opsional, default 800x500)
    imageW: 800,
    imageH: 480,
    // Posisi fokus gambar (opsional, default "center")
    imagePos: "left top",
  },
];

// Kartu keunggulan di section "Tentang"
const KEUNGGULAN = [
  { judul: "Desain Modern & Unik", teks: "Setiap halaman didesain khusus sesuai brandmu, bukan template pasaran.", emoji: "✏️" },
  { judul: "Responsif di Semua Perangkat", teks: "Tampil rapi dan enak dipakai di HP, tablet, maupun desktop.", emoji: "📱" },
  { judul: "Cepat & SEO Friendly", teks: "Struktur kode bersih, ringan, dan siap diindeks mesin pencari.", emoji: "⚡" },
  { judul: "Revisi Fleksibel", teks: "Revisi desain sampai hasilnya benar-benar sesuai keinginanmu.", emoji: "🔁" },
];

// Testimoni fiktif dengan nama samaran
const TESTIMONI = [
  { nama: "Rani P. — Pemilik Toko Online", teks: "Landing page tokoku jadi elegan dan enak dibuka di HP. Order masuk makin lancar!", emoji: "🛍️" },
  { nama: "Pak Hendra — Dosen", teks: "Portofolio riset saya rapi banget. Kini mahasiswa dan mitra gampang menemukan karya saya.", emoji: "🎓" },
  { nama: "Tasha — Content Creator", teks: "Desain UI aplikasinya rapi dan detail. Developer langsung paham tanpa banyak bertanya.", emoji: "💻" },
];

// Daftar FAQ (accordion)
const FAQS = [
  { tanya: "Bagaimana cara memulai project?", jawab: "Klik tombol WhatsApp, ceritakan kebutuhanmu. Kami akan diskusikan konsep, lalu kirim penawaran harga dan jadwal pengerjaan." },
  { tanya: "Berapa lama pengerjaan website?", jawab: "Landing page ± 5–7 hari kerja, portofolio ± 3–5 hari, dan desain UI/UX ± 2 minggu, tergantung tingkat kerumitan." },
  { tanya: "Apakah domain dan hosting disediakan?", jawab: "Kami bisa bantu beli domain & hosting, atau gunakan hosting gratis seperti GitHub Pages untuk website statis." },
  { tanya: "Berapa kali revisi yang diberikan?", jawab: "Dua kali revisi besar gratis (perubahan konsep/layout). Revisi kecil seperti teks dan warna bebas selama masa pengerjaan." },
  { tanya: "Apakah file sumber diserahkan?", jawab: "Ya, seluruh file kode milikmu sepenuhnya, dilengkapi panduan singkat cara mengedit kontennya sendiri." },
  { tanya: "Metode pembayaran apa saja yang diterima?", jawab: "Transfer bank, e-wallet (GoPay/OVO/DANA), atau QRIS. Pembayaran dua tahap: DP 50% di awal, pelunasan setelah website selesai." },
  { tanya: "Bisakah sekalian dibuatkan toko online?", jawab: "Bisa! Kami bisa menambahkan katalog produk, keranjang sederhana, dan tombol pemesanan via WhatsApp. Harganya dihitung terpisah sesuai jumlah produk." },
  { tanya: "Bagaimana jika saya belum punya konten atau foto produk?", jawab: "Tenang, kami bantu susun copywriting sederhana dan beri arahan cara mengambil foto produk dengan HP. Desain tetap bisa dimulai dari draf teks." },
  { tanya: "Bisakah hanya memesan desainnya saja tanpa dipasang?", jawab: "Bisa. Tersedia paket desain saja (file Figma lengkap dengan mockup), cocok jika kamu punya tim developer sendiri." },
  { tanya: "Apakah ada garansi setelah website tayang?", jawab: "Ada. Garansi perbaikan bug selama 30 hari setelah rilis, plus panduan singkat cara mengupdate konten mandiri." },
];

// Menu navigasi (anchor ke tiap section)
const NAV_LINKS = [
  { label: "Beranda", href: "#beranda" },
  { label: "Tentang", href: "#tentang" },
  { label: "Keahlian", href: "#keahlian" },
  { label: "Hasil Kerja", href: "#hasil-kerja" },
  { label: "Layanan", href: "#layanan" },
  { label: "Testimoni", href: "#testimoni" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontak", href: "#kontak" },
];

/* =========================================================
   3) PERSIAPAN REACT + htm
   ========================================================= */
const { useState, useEffect } = React;

// html`...` = pembungkus sintaks mirip JSX (tanpa build tool)
const html = htm.bind(React.createElement);

// Palet gradien untuk "foto" placeholder (ungu-biru, senada dengan logo)
const GRADIENTS = [
  "linear-gradient(150deg, #a855f7, #6d28d9 55%, #1e1b4b)",
  "linear-gradient(150deg, #3b82f6, #1e40af 55%, #0b0b1a)",
  "linear-gradient(150deg, #c084fc, #7c3aed 55%, #2e1065)",
  "linear-gradient(150deg, #60a5fa, #4f46e5 55%, #1e1b4b)",
  "linear-gradient(150deg, #8b5cf6, #4c1d95 55%, #12082b)",
  "linear-gradient(150deg, #93c5fd, #6366f1 55%, #1e1b4b)",
];

/* =========================================================
   4) KOMPONEN: Navbar (sticky + hamburger mobile)
   ========================================================= */
function Navbar(props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, onToggleTheme } = props;

  // Tutup menu mobile setelah link diklik
  const klikLink = () => setMenuOpen(false);

  return html`
    <header className="navbar">
      <div className="container navbar__inner">
        <a href="#beranda" className="navbar__brand" onClick=${klikLink}>
          <img
            src="logo.png"
            alt="Logo Web Designer"
            width="44"
            height="44"
            loading="eager"
            className="logo logo--nav"
          />
          <span>Web Designer</span>
        </a>

        <nav className=${"navbar__nav" + (menuOpen ? " is-open" : "")} aria-label="Menu utama">
          <ul>
            ${NAV_LINKS.map((l) => html`
              <li key=${l.href}>
                <a href=${l.href} onClick=${klikLink}>${l.label}</a>
              </li>
            `)}
          </ul>
        </nav>

        <div className="navbar__actions">
          <button
            type="button"
            className="icon-btn"
            onClick=${onToggleTheme}
            aria-label=${theme === "dark" ? "Aktifkan mode terang" : "Aktifkan mode gelap"}
          >
            ${theme === "dark" ? "☀️" : "🌙"}
          </button>

          <button
            type="button"
            className=${"hamburger" + (menuOpen ? " is-open" : "")}            onClick=${() => setMenuOpen(!menuOpen)}
            aria-label="Buka atau tutup menu"
            aria-expanded=${menuOpen}
            aria-controls="menu-utama"
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </header>
  `;
}

/* =========================================================
   5) KOMPONEN: Hero
   ========================================================= */
function Hero() {
  const klikCTA = () => openWhatsApp(CONFIG.defaultMessage);

  return html`
    <section id="beranda" className="hero">
      <div className="container hero__inner">
        <div className="hero__text reveal">
          <img
            src="logo.png"
            alt="Logo Web Designer"
            width="96"
            height="96"
            loading="eager"
            className="logo logo--hero"
          />
          <p className="eyebrow">— WEB DESIGNER & FRONT-END DEVELOPER —</p>
          <h1>Wujudkan Website Impianmu Bareng SoFarPixel</h1>
          <p className="hero__tagline">
            ${CONFIG.brandName} membantu UMKM, kreator, dan profesional membangun
            website yang modern, responsif, dan siap tayang — dari landing page
            sampai portofolio pribadi.
          </p>
          <div className="hero__cta">
            <button type="button" className="btn btn--primary" onClick=${klikCTA}>
              💬 Chat via WhatsApp
            </button>
            <a className="btn btn--ghost" href="#layanan">Lihat Layanan</a>
          </div>
          <p className="hero__note">🎨 Figma → Code · Responsive Design · Clean & Fast</p>
        </div>

        <div className="hero__photo reveal">
          <div className="hero__photo-frame">
            <img
              src="foto.jpg"
              alt="Foto profil Web Designer"
              width="400"
              height="533"
              loading="eager"
              className="hero__img"
            />
            <span className="badge badge--1">🎨 Web Designer</span>
            <span className="badge badge--2">💻 Front-End Dev</span>
          </div>
        </div>
      </div>
    </section>
  `;
}

/* =========================================================
   6) KOMPONEN: Tentang / Keunggulan
   ========================================================= */
function Keunggulan() {
  return html`
    <section id="tentang" className="section section--alt">
      <div className="container">
        <h2 className="section__title reveal">Kenapa Pilih Kami?</h2>
        <p className="section__subtitle reveal">Empat alasan klien betah dan banyak kembali lagi.</p>
        <div className="grid grid--4">
          ${KEUNGGULAN.map((k, i) => html`
            <article key=${k.judul} className="card reveal" style=${{ transitionDelay: (i * 70) + "ms" }}>
              <div className="card__emoji" aria-hidden="true">${k.emoji}</div>
              <h3>${k.judul}</h3>
              <p>${k.teks}</p>
            </article>
          `)}
        </div>
      </div>
    </section>
  `;
}

// Data keahlian (section Skills) — mudah ditambah/diedit
const SKILLS = [
  { name: "HTML", icon: "🌐", desc: "Struktur halaman web semantik" },
  { name: "CSS", icon: "🎨", desc: "Styling, layout responsif, animasi" },
  { name: "React", icon: "⚛️", desc: "Komponen dan hooks untuk antarmuka interaktif" },
  { name: "PHP", icon: "🐘", desc: "Logika sisi server dan pengolahan form" },
  { name: "Laravel", icon: "🧩", desc: "Framework PHP untuk aplikasi web" },
];

// Data Hasil Kerja — ganti/edit isi array ini sesuai project aslimu
const PROJECTS = [
  {
    title: "Fonnte",
    desc: "Proyek integrasi pengiriman pesan WhatsApp otomatis.",
    image: "hasil-1.jpg",
    tags: ["PHP", "API"],
    github: "https://github.com/qilmzaa/fonnte",
    demo: "",
  },
  {
    title: "Pinjam Lab",
    desc: "Aplikasi peminjaman laboratorium sederhana untuk mencatat dan mengelola jadwal pinjam.",
    image: "hasil-2.jpg",
    tags: ["PHP", "MySQL"],
    github: "https://github.com/qilmzaa/Pinjam_Lab",
    demo: "",
  },
  {
    title: "TokoKita",
    desc: "Website toko online sederhana untuk menampilkan dan memesan produk.",
    image: "hasil-3.jpg",
    tags: ["PHP", "Laravel"],
    github: "https://github.com/qilmzaa/tokokita",
    demo: "",
  },
];

/* =========================================================
   6b) KOMPONEN: Keahlian (data dari array SKILLS)
   ========================================================= */
function Keahlian() {
  return html`
    <section id="keahlian" className="section">
      <div className="container">
        <h2 className="section__title reveal">Keahlian</h2>
        <p className="section__subtitle reveal">Teknologi yang saya gunakan untuk membangun website.</p>

        <ul className="grid grid--skills" aria-label="Daftar keahlian">
          ${SKILLS.map((s, i) => html`
            <li key=${s.name} className="skill-card reveal" style=${{ transitionDelay: (i * 80) + "ms" }}>
              <span className="skill-card__icon" aria-hidden="true">${s.icon}</span>
              <h3>${s.name}</h3>
              <p>${s.desc}</p>
            </li>
          `)}
        </ul>
      </div>
    </section>
  `;
}

/* =========================================================
   6c) KOMPONEN: Hasil Kerja (data dari array PROJECTS)
   ========================================================= */

/* Kartu proyek: punya state sendiri untuk fallback gambar gagal dimuat */
function KartuProyek(props) {
  const [gagal, setGagal] = useState(false);
  const p = props.project;

  // Inisial judul sebagai cadangan saat gambar gagal dimuat
  const inisial = p.title
    .split(" ")
    .slice(0, 2)
    .map((k) => k[0])
    .join("")
    .toUpperCase();

  return html`
    <article className="project-card reveal" style=${{ transitionDelay: (props.delay || 0) + "ms" }}>
      <div className="project-card__imgwrap">
        ${gagal
          ? html`
              <div className="project-card__fallback" aria-hidden="true">${inisial}</div>
            `
          : html`
              <img
                src=${p.image}
                alt=${"Tangkapan layar proyek " + p.title}
                width="800"
                height="500"
                loading="lazy"
                className="project-card__img"
                onError=${() => setGagal(true)}
              />
            `}
      </div>

      <div className="project-card__body">
        <h3>${p.title}</h3>
        <p>${p.desc}</p>

        <ul className="project-card__tags" aria-label=${"Teknologi proyek " + p.title}>
          ${p.tags.map((t) => html`
            <li key=${t} className="tag">${t}</li>
          `)}
        </ul>

        <div className="project-card__links">
          <a
            className="btn btn--ghost btn--sm"
            href=${p.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label=${"Lihat proyek " + p.title + " di GitHub"}
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55 0-.27-.01-1.13-.02-2.05-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.75 2.69 1.25 3.35.95.1-.75.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.18-1.49 3.14-1.18 3.14-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.66.41.36.78 1.05.78 2.12 0 1.53-.01 2.76-.01 3.14 0 .3.2.67.8.55A11.52 11.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"></path>
            </svg>
            Lihat di GitHub
          </a>

          ${p.demo && html`
            <a
              className="btn btn--primary btn--sm"
              href=${p.demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label=${"Lihat demo proyek " + p.title}
            >
              Lihat Demo
            </a>
          `}
        </div>
      </div>
    </article>
  `;
}

function HasilKerja() {
  return html`
    <section id="hasil-kerja" className="section section--alt">
      <div className="container">
        <h2 className="section__title reveal">Hasil Kerja</h2>
        <p className="section__subtitle reveal">Beberapa project yang pernah saya kerjakan.</p>

        <div className="grid grid--projects">
          ${PROJECTS.map((p, i) => html`
            <${KartuProyek} key=${p.title} project=${p} delay=${i * 90} />
          `)}
        </div>
      </div>
    </section>
  `;
}

/* =========================================================
   7) KOMPONEN: Layanan / Produk (data dari array LAYANAN)
   ========================================================= */
function Layanan() {
  // Pesan otomatis per layanan sesuai format yang diminta
  const pesanLayanan = (l) =>
    "Halo, saya ingin memesan " + l.nama + " seharga " + l.harga + ". Apakah masih tersedia?";

  return html`
    <section id="layanan" className="section">
      <div className="container">
        <h2 className="section__title reveal">Daftar Layanan & Harga</h2>
        <p className="section__subtitle reveal">Pilih paket, klik tombol, dan chat WhatsApp terbuka otomatis.</p>

        <div className="grid grid--3">
          ${LAYANAN.map((l, i) => html`
            <article key=${l.nama} className="card card--service reveal" style=${{ transitionDelay: (i * 60) + "ms" }}>
              ${l.image
                ? html`
                    <div className="card__photo card__photo--img">
                      <img
                        src=${l.image}
                        alt=${l.nama}
                        width=${l.imageW || 800}
                        height=${l.imageH || 500}
                        loading="lazy"
                        style=${{ objectPosition: l.imagePos || "center" }}
                      />
                    </div>
                  `
                : html`
                    <div
                      className="card__photo"
                      role="img"
                      aria-label=${"Ilustrasi layanan " + l.nama}
                      style=${{ background: GRADIENTS[i % GRADIENTS.length] }}
                    >
                      <span aria-hidden="true">${l.emoji}</span>
                    </div>
                  `}
              <div className="card__body">
                <h3>${l.nama}</h3>
                <p>${l.deskripsi}</p>
                <p className="card__price">${l.harga}<span> /sesi</span></p>
                <button
                  type="button"
                  className="btn btn--primary btn--full"
                  onClick=${() => openWhatsApp(pesanLayanan(l))}
                >
                  Pesan via WhatsApp
                </button>
              </div>
            </article>
          `)}
        </div>
      </div>
    </section>
  `;
}

/* =========================================================
   8) KOMPONEN: Testimoni (slider sederhana pakai hooks)
   ========================================================= */
function Testimoni() {
  const [index, setIndex] = useState(0);

  // Geser otomatis tiap 6 detik (dihitung ulang saat index berubah)
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % TESTIMONI.length);
    }, 6000);
    return () => clearInterval(timer); // bersihkan timer saat unmount
  }, [index]);

  const t = TESTIMONI[index];
  const sebelumnya = () => setIndex((i) => (i - 1 + TESTIMONI.length) % TESTIMONI.length);
  const berikutnya = () => setIndex((i) => (i + 1) % TESTIMONI.length);

  return html`
    <section id="testimoni" className="section section--alt">
      <div className="container container--narrow">
        <h2 className="section__title reveal">Kata Mereka</h2>
        <p className="section__subtitle reveal">Cerita klien yang sudah mencoba layanan kami.</p>

        <div className="slider reveal">
          <div className="slider__track" key=${index}>
            <div className="slider__emoji" aria-hidden="true">${t.emoji}</div>
            <blockquote>
              <p>“${t.teks}”</p>
              <footer>— ${t.nama}</footer>
            </blockquote>
          </div>

          <div className="slider__controls">
            <button type="button" className="icon-btn" onClick=${sebelumnya} aria-label="Testimoni sebelumnya">←</button>
            <div className="slider__dots" role="tablist" aria-label="Pilih testimoni">
              ${TESTIMONI.map((_, i) => html`
                <button
                  key=${i}
                  type="button"
                  className=${"dot" + (i === index ? " is-active" : "")}
                  onClick=${() => setIndex(i)}
                  aria-label=${"Testimoni " + (i + 1)}
                ></button>
              `)}
            </div>
            <button type="button" className="icon-btn" onClick=${berikutnya} aria-label="Testimoni berikutnya">→</button>
          </div>
        </div>
      </div>
    </section>
  `;
}

/* =========================================================
   9) KOMPONEN: FAQ (accordion buka-tutup)
   ========================================================= */
function Faq() {
  // Hanya satu item terbuka sekaligus (null = semuanya tertutup)
  const [terbuka, setTerbuka] = useState(0);

  return html`
    <section id="faq" className="section">
      <div className="container container--narrow">
        <h2 className="section__title reveal">Pertanyaan Umum</h2>
        <p className="section__subtitle reveal">Klik pertanyaan untuk melihat jawabannya.</p>

        <div className="accordion">
          ${FAQS.map((f, i) => {
            const aktif = terbuka === i;
            return html`
              <div key=${f.tanya} className=${"accordion__item reveal" + (aktif ? " is-open" : "")}>
                <button
                  type="button"
                  className="accordion__head"
                  onClick=${() => setTerbuka(aktif ? null : i)}
                  aria-expanded=${aktif}
                  aria-controls=${"faq-panel-" + i}
                >
                  <span className="accordion__q">
                    <span className="accordion__num" aria-hidden="true">
                      ${String(i + 1).padStart(2, "0")}
                    </span>
                    ${f.tanya}
                  </span>
                  <span aria-hidden="true">${aktif ? "−" : "+"}</span>
                </button>
                <div id=${"faq-panel-" + i} className="accordion__panel" role="region">
                  <p>${f.jawab}</p>
                </div>
              </div>
            `;
          })}
        </div>
      </div>
    </section>
  `;
}

/* =========================================================
   10) KOMPONEN: Kontak (form kirim ke WhatsApp)
   ========================================================= */
function Kontak() {
  const [form, setForm] = useState({ nama: "", keperluan: "Booking project desain", pesan: "" });
  const [error, setError] = useState({});
  const [terkirim, setTerkirim] = useState(false);

  // Simpan nilai input ke state (satu handler untuk semua field)
  const ubah = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const kirim = (e) => {
    e.preventDefault();

    // Validasi sederhana: nama & pesan wajib diisi
    const err = {};
    if (form.nama.trim() === "") err.nama = "Nama wajib diisi ya.";
    if (form.pesan.trim().length < 5) err.pesan = "Pesan minimal 5 karakter.";
    setError(err);
    setTerkirim(false);
    if (Object.keys(err).length > 0) return;

    // Susun pesan terformat lalu kirim via WhatsApp
    const pesan =
      "Halo " + CONFIG.brandName + ", saya " + form.nama.trim() + ".\n" +
      "Keperluan: " + form.keperluan + "\n" +
      "Pesan: " + form.pesan.trim();
    openWhatsApp(pesan);

    // Tampilkan instruksi singkat setelah tombol ditekan
    setTerkirim(true);
  };

  return html`
    <section id="kontak" className="section section--alt">
      <div className="container container--narrow">
        <h2 className="section__title reveal">Hubungi Kami</h2>
        <p className="section__subtitle reveal">Isi form di bawah, pesanmu langsung terkirim ke WhatsApp kami.</p>

        <form className="form reveal" onSubmit=${kirim} noValidate>
          <div className="form__group">
            <label htmlFor="nama">Nama <span aria-hidden="true">*</span></label>
            <input
              id="nama" name="nama" type="text" placeholder="Nama kamu"
              value=${form.nama} onInput=${ubah}
              aria-invalid=${error.nama ? "true" : "false"}
              aria-describedby=${error.nama ? "error-nama" : undefined}
            />
            ${error.nama && html`<p id="error-nama" className="form__error" role="alert">${error.nama}</p>`}
          </div>

          <div className="form__group">
            <label htmlFor="keperluan">Keperluan</label>
            <select id="keperluan" name="keperluan" value=${form.keperluan} onChange=${ubah}>
              <option>Booking project desain</option>
              <option>Tanya harga & paket</option>
              <option>Kerja sama / kolaborasi</option>
              <option>Lainnya</option>
            </select>
          </div>

          <div className="form__group">
            <label htmlFor="pesan">Pesan <span aria-hidden="true">*</span></label>
            <textarea
              id="pesan" name="pesan" rows="4" placeholder="Ceritakan kebutuhanmu..."
              value=${form.pesan} onInput=${ubah}
              aria-invalid=${error.pesan ? "true" : "false"}
              aria-describedby=${error.pesan ? "error-pesan" : undefined}
            ></textarea>
            ${error.pesan && html`<p id="error-pesan" className="form__error" role="alert">${error.pesan}</p>`}
          </div>

          <button type="submit" className="btn btn--primary btn--full">Kirim ke WhatsApp →</button>

          ${terkirim && html`
            <p className="form__success" role="status">
              ✅ Pesan berhasil disusun! WhatsApp akan terbuka di tab baru — tinggal tekan kirim di sana.
              Jika tidak terbuka, izinkan pop-up pada browser.
            </p>
          `}
        </form>
      </div>
    </section>
  `;
}

/* =========================================================
   11) KOMPONEN: Footer — banner "Let's Connect" + identitas
   ========================================================= */
function Footer() {
  const tahun = new Date().getFullYear(); // tahun otomatis

  // Ikon SVG inline (stroke mengikuti warna teks/aksen)
  const IkonEmail = html`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2"></rect>
      <path d="M3 7l9 6 9-6"></path>
    </svg>
  `;
  const IkonWebsite = html`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9"></circle>
      <path d="M3 12h18"></path>
      <path d="M12 3c2.8 3.2 2.8 14.8 0 18M12 3c-2.8 3.2-2.8 14.8 0 18"></path>
    </svg>
  `;
  const IkonLokasi = html`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 21s-7-5.6-7-11a7 7 0 0 1 14 0c0 5.4-7 11-7 11z"></path>
      <circle cx="12" cy="10" r="2.5"></circle>
    </svg>
  `;
  const IkonInstagram = html`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="4.5"></rect>
      <circle cx="12" cy="12" r="3.5"></circle>
      <circle cx="16.9" cy="7.1" r="0.5" fill="currentColor"></circle>
    </svg>
  `;

  return html`
    <footer className="footer">
      <div className="container">

        <div className="connect reveal">
          <div className="connect__photo">
            <img
              src="foto.jpg"
              alt="Foto profil SoFarPixel — Web Designer"
              width="400"
              height="533"
              loading="lazy"
              className="connect__img"
            />
            <p className="connect__script">Let's Connect</p>
          </div>

          <div className="connect__kontak">
            <p className="connect__judul">Let's Create Something Extraordinary</p>
            <address className="connect__list">
              <a className="connect__item" href=${"mailto:" + KONTAK.email}
                 aria-label=${"Kirim email ke " + KONTAK.email}>
                <span className="connect__icon">${IkonEmail}</span>
                <span>${KONTAK.email}</span>
              </a>
              <a className="connect__item" href=${KONTAK.website}
                 aria-label="Buka website SoFarPixel">
                <span className="connect__icon">${IkonWebsite}</span>
                <span>${KONTAK.website.replace("https://", "")}</span>
              </a>
              <span className="connect__item">
                <span className="connect__icon">${IkonLokasi}</span>
                <span>${KONTAK.lokasi}</span>
              </span>
              <a className="connect__item" href=${KONTAK.instagramUrl}
                 target="_blank" rel="noopener noreferrer"
                 aria-label=${"Buka profil Instagram " + KONTAK.instagramLabel}>
                <span className="connect__icon">${IkonInstagram}</span>
                <span>${KONTAK.instagramLabel}</span>
              </a>
            </address>
          </div>

          <div className="connect__divider" role="presentation"></div>

          <figure className="connect__quote">
            <span className="connect__quote-mark" aria-hidden="true">“</span>
            <blockquote>
              Design is not just what it looks like and feels like.
              Design is how it works.
            </blockquote>
            <figcaption>— Steve Jobs</figcaption>
            <span className="connect__quote-line" aria-hidden="true"></span>
          </figure>
        </div>

        <div className="footer__inner">
          <div>
            <p className="footer__brand">
              <img
                src="logo.png"
                alt="Logo Web Designer"
                width="28"
                height="28"
                loading="eager"
                className="logo logo--footer"
              />
              ${CONFIG.brandName}
            </p>
            <p className="footer__slogan">— Design. Build. Launch. —</p>
          </div>

          <ul className="footer__social" aria-label="Media sosial">
            <li><a href="#beranda" aria-label="TikTok (placeholder)">🎵 TikTok</a></li>
          </ul>

          <p className="footer__copy">© ${tahun} ${CONFIG.brandName}. Dibuat dengan React untuk tugas Pemrograman Web.</p>
        </div>
      </div>
    </footer>
  `;
}

/* =========================================================
   12) KOMPONEN: Tombol melayang WhatsApp + Kembali ke atas
   ========================================================= */
function TombolMelayang() {
  const [tampilAtas, setTampilAtas] = useState(false);

  // Munculkan tombol "kembali ke atas" setelah scroll 400px
  useEffect(() => {
    const cekScroll = () => setTampilAtas(window.scrollY > 400);
    window.addEventListener("scroll", cekScroll);
    cekScroll();
    return () => window.removeEventListener("scroll", cekScroll);
  }, []);

  return html`
    <div className="float-group">
      ${tampilAtas && html`
        <button
          type="button"
          className="float-btn float-btn--top"
          onClick=${() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Kembali ke atas"
        >↑</button>
      `}

      <button
        type="button"
        className="float-btn float-btn--wa"
        onClick=${() => openWhatsApp(CONFIG.defaultMessage)}
        aria-label=${"Chat WhatsApp dengan " + CONFIG.brandName}
      >
        <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
        </svg>
      </button>
    </div>
  `;
}

/* =========================================================
   13) KOMPONEN: App (menyusun semua section)
   ========================================================= */
function App() {
  // Mode gelap/terang: awal diambil dari atribut data-theme di index.html
  const [theme, setTheme] = useState(document.documentElement.getAttribute("data-theme") || "dark");

  const toggleTheme = () => {
    const baru = theme === "dark" ? "light" : "dark";
    setTheme(baru);
    document.documentElement.setAttribute("data-theme", baru);
    try { localStorage.setItem("rp-theme", baru); } catch (e) { /* abaikan */ }
  };

  // Animasi muncul saat scroll: tambahkan class .is-visible pada .reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target); // cukup dianimasikan sekali
          }
        });
      },
      { threshold: 0.15 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return html`
    <${React.Fragment}>
      <${Navbar} theme=${theme} onToggleTheme=${toggleTheme} />
      <main>
        <${Hero} />
        <${Keunggulan} />
        <${Keahlian} />
        <${HasilKerja} />
        <${Layanan} />
        <${Testimoni} />
        <${Faq} />
        <${Kontak} />
      </main>
      <${Footer} />
      <${TombolMelayang} />
    <//>
  `;
}

/* =========================================================
   14) RENDER ke #root
   ========================================================= */
ReactDOM.createRoot(document.getElementById("root")).render(html`<${App} />`);
