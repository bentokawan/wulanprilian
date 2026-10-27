# design.md: Landing Page Konseling & Hipnoterapi (v4)

Panduan desain untuk solo developer, mengikuti gaya referensi "Fitness" (hero tengah dengan headline besar, penanda marker, tombol pil, deretan kartu bergaris tipis dengan foto cut-out yang keluar dari kartu), dengan palet sage dan lavender yang lebih lembut. Copy ada di `landingpage.md`.

## 1. Arah Desain

Putih bersih, huruf geometris ringan, garis tipis hitam, dan kartu pastel bersudut bulat. Wajah manusia (foto cut-out) menjadi pusat kepercayaan, bukan ilustrasi. Satu motif khas: **foto yang melangkah keluar dari kartu**. Tanpa gradien dan tanpa bayangan.

| Diambil dari referensi | Disesuaikan |
|---|---|
| Headline besar di tengah, berat sedang, kata kunci di atas penanda marker | Marker berwarna sage lembut, satu frasa per judul |
| Chip ikon kecil di dalam headline | Satu chip ikon gelembung percakapan setelah kata "Bicara" |
| Tombol pil: satu berisi warna dengan garis tipis, satu hitam | Sage + hitam, ikon panah serong |
| Deretan 4 kartu bergaris 1 px dengan foto cut-out | Isi kartu: Konseling, Hipnoterapi, Konselor, Event (lihat bagian 3) |
| Tab vertikal menempel di sisi kartu | Dipakai untuk label "Terverifikasi" dan "Event" |
| Titik langkah 1, 2, 3 | Dipakai untuk "Pesan dalam 3 langkah" |
| Lencana lingkaran "scroll to explore" | Lavender, bernapas pelan, tanpa putaran terus-menerus |
| Garis tipis terputus-putus di bawah navigasi | Tiga segmen garis tipis di bawah navbar |

**Tidak diambil:** foto kebugaran, kata-kata teknologi dan AI, bintang rating pada kartu (tidak ada rating publik di MVP), putaran teks tanpa henti. Foto selalu tenang dan netral, tidak menggambarkan orang yang menderita.

## 2. Token

**Warna** (palet lembut: sage dan lavender)

| Nama | Hex | Peran |
|---|---|---|
| Putih | `#FFFFFF` | Latar halaman |
| Tinta | `#151515` | Teks, garis kartu 1 px, tombol hitam, blok gelap |
| Abu teks | `#5F625C` | Teks sekunder |
| Garis halus | `#E4E6E1` | Pemisah dan segmen garis navbar |
| Sage 300 | `#CFE3B4` | Kartu Konseling, isi tombol utama |
| Sage 200 | `#DCEBC6` | Penanda marker, pil aktif |
| Sage 100 | `#EAF2DC` | Kartu Hipnoterapi |
| Lavender 200 | `#E3DDF7` | Kartu Konselor, lencana napas |
| Lavender 100 | `#EFEBFB` | Latar ringan, chip |
| Sage tua | `#2F5D3F` | Tautan teks dan ikon penting |
| Lavender tua | `#5B4BA8` | Aksen kecil pada ikon |
| Amber | `#F3D78F` | Label kecil (tanggal event, sisa kursi) saja |

Aturan: teks kecil di atas warna pastel selalu Tinta (bukan Abu teks) di atas Lavender. Maksimal dua warna pastel pada satu kartu. Sage tua dan Lavender tua hanya untuk teks atau ikon, bukan isi besar.

**Tipografi:** **Poppins** 400 dan 500 (self-host, subset Latin, `font-display: swap`, dua file). Bila ingin satu file variabel, ganti dengan Plus Jakarta Sans.
- H1 `clamp(34px, 5.2vw, 64px)` / 1.12 / 500 / tracking -0.02em. H2 `clamp(26px, 3.4vw, 40px)` / 1.2 / 500. H3 20 / 1.3 / 500.
- Teks 16 / 1.7 / 400, Abu teks. Teks kartu 14 / 1.5. Label pil dalam kartu: huruf kapital 12 px / 500, tracking 0.04em.
- Judul maksimal 3 baris di HP, teks panjang maksimal 62 karakter per baris.

**Bentuk dan jarak**
- Radius: pil 999, kartu 28, chip ikon 10, blok gelap dan footer 32.
- Garis: 1 px Tinta untuk kartu, pil, dan chip. Container 1200 px, grid 12 kolom, gutter 24. Jarak antar section 96 px desktop, 56 px HP.

```css
:root{
  --bg:#fff; --ink:#151515; --muted:#5F625C; --hair:#E4E6E1;
  --sage-100:#EAF2DC; --sage-200:#DCEBC6; --sage-300:#CFE3B4; --sage-deep:#2F5D3F;
  --lav-100:#EFEBFB; --lav-200:#E3DDF7; --lav-deep:#5B4BA8; --amber:#F3D78F;
  --r-pill:999px; --r-card:28px; --r-chip:10px; --ease:cubic-bezier(.2,.7,.2,1);
}
.mark{position:relative;display:inline-block;z-index:0}
.mark::before{content:"";position:absolute;inset:.1em -.15em .02em;background:var(--sage-200);
  clip-path:polygon(0 12%,100% 0,98% 100%,2% 90%);z-index:-1;transform-origin:left;
  animation:draw .6s .3s var(--ease) both}
@keyframes draw{from{transform:scaleX(0)}}
```

## 3. Layout

```
[logo] | Layanan  Konselor  Cara kerja  [Event ●]  FAQ | (↗) Lihat jadwal  [Pesan sesi]
 ─────   ─────────────────────────────────────────────   ──────────────────────────────
 (badge          Bicara [💬] dengan seseorang yang paham,
  napas)                ▒▒ tanpa ribet ▒▒                         ( Cara kerja ↓ )
                 subteks 1 sampai 2 baris, tengah
                 [Pesan sesi ↗]  [Lihat jadwal]
 ┌─────────┐   ┌─────────┐   ┌─────────┐   ┌─────────┐
 │ Konseling│   │Hipnoterapi│  │ Konselor│   │ Event   │   foto cut-out keluar
 │ sage 300 │   │ sage 100 │   │lavender │   │ putih   │   dari tepi atas kartu
 └─────────┘   └─────────┘   └─────────┘   └─────────┘
────────────────────────────────────────────────────────────
 JANJI: 3 item dipisah garis tipis, ikon di chip lavender
 ADEGAN MALAM: blok Tinta 32 px, teks putih, penanda sage pada satu kata
 LAYANAN: 2 kartu besar (sage dan lavender) + foto cut-out
 KONSELOR: kartu lavender + foto | cerita, badge pil, tautan CV
 CARA KERJA: judul tengah, 3 langkah dengan titik 1 2 3, kartu berisi slot picker asli
 SESI PERTAMA & TARIF: judul | garis vertikal | teks dan tautan
 EVENT: kartu bergaris dengan tab vertikal | CERITA KLIEN (bila ada)
 PRIVASI + FAQ | PENUTUP (tengah) | FOOTER Tinta dengan kartu darurat putih
```

**Empat kartu hero (inti halaman)**
1. **Konseling** (Sage 300): chip "Layanan", satu kalimat, foto cut-out pendukung, pil "PESAN KONSELING ↗".
2. **Hipnoterapi** (Sage 100): foto cut-out pendukung, label "Pesan dalam 3 langkah" dengan titik 1 2 3.
3. **Konselor** (Lavender 200): foto cut-out konselor (kepala melewati tepi atas), tab sage di pojok kanan atas, tab vertikal "Terverifikasi".
4. **Event dan banner dinamis** (putih): pil amber berisi tanggal, judul, pil "DAFTAR", sisa kursi, tab vertikal "Event". Ini adalah tempat banner dinamis. Bergantian maksimal 3 banner.

Banner dinamis tidak lagi punya section sendiri. Bila tidak ada banner aktif, kartu 4 menampilkan "Lihat jadwal terdekat" dengan tombol ke slot picker.

**HP:** navbar berisi logo, tombol "Pesan sesi", dan ikon menu. Lencana napas dan pil vertikal disembunyikan. Kartu hero menjadi carousel horizontal dengan scroll-snap, lebar kartu 78% agar kartu berikutnya mengintip, tanpa geser otomatis.

## 4. Foto

- **Konselor:** potret dari pinggang ke atas, cahaya lembut, latar dihapus (cut-out) dengan tepi bersih, rasio 4:5, WebP atau AVIF dengan alpha, tinggi 800 px, maksimal 90 KB.
- **Foto pendukung (berlisensi komersial, ada model release):** ekspresi tenang dan netral, tidak menggambarkan kesedihan atau orang yang menderita, tanpa properti medis. Jangan diberi keterangan yang mengesankan model adalah klien. Samakan nuansa warna agar terasa satu set.
- **Fallback:** bila cut-out belum tersedia, taruh foto berbentuk persegi bulat di dalam kartu tanpa keluar dari tepi. Layout tetap berfungsi.
- **Teknis:** atribut `width` dan `height` wajib, `alt` deskriptif, dua foto pertama `loading="eager"`, sisanya lazy. Total foto hero maksimal 300 KB.

## 5. Komponen

- **Navbar:** tinggi 72 px, tautan 15 px. Pil "Event ●" berisi sage hanya muncul bila ada event aktif. Tiga segmen garis halus di bawah (logo, menu, aksi kanan).
- **Pil utama:** isi Sage 300, garis 1 px Tinta, ikon panah serong, tinggi 44 px. **Pil hitam:** isi Tinta, teks putih. **Pil kecil dalam kartu:** huruf kapital 12 px, garis 1 px.
- **Kartu:** garis 1 px Tinta, radius 28, padding 24, `overflow: visible` agar foto bisa keluar. Beri ruang 56 px di atas deretan kartu.
- **Tab vertikal:** menempel di tepi kartu, teks vertikal 12 px / 500, isi Sage 200 atau putih dengan garis 1 px, sudut dalam mengikuti radius kartu.
- **Titik langkah:** tiga lingkaran 20 px bergaris, yang aktif terisi Tinta dengan angka putih.
- **Lencana napas:** lingkaran Lavender 200 berdiameter 96 px dengan dua titik hitam, teks melingkar "GULIR UNTUK MELIHAT", hanya desktop.
- **Slot picker:** tanggal sebagai pil, jam sebagai grid pil, aktif terisi Tinta. Slot tidak tersedia pudar. Zona waktu tertulis (WIB).
- **Badge kredensial:** pil Sage 200 bergaris 1 px dengan ikon centang. **Accordion FAQ:** garis halus, ikon plus dalam lingkaran bergaris.
- **Panel darurat:** kartu putih bergaris di dalam footer Tinta, selalu terlihat. **Consent:** tiga checkbox terpisah, tidak tercentang otomatis.
- **Ikon:** Lucide, stroke 1.75, 20 sampai 24 px.

## 6. Animasi

Halus dan tenang. Semua CSS, JavaScript hanya untuk menandai elemen yang masuk layar (di bawah 1 KB).

| Elemen | Gerakan | Durasi |
|---|---|---|
| Penanda marker di headline | Terbit dari kiri ke kanan, sekali | 600 ms, tunda 300 ms |
| Kartu hero | Naik 16 px sambil memudar, bergantian 80 ms | 600 ms |
| Foto cut-out | "Melangkah keluar": naik 12 px dan membesar dari 0.98 ke 1, 200 ms setelah kartunya | 400 ms |
| Lencana napas | Membesar 1.06, tarik 4 detik, hembus 6 detik, berulang. Satu-satunya gerakan berulang di halaman. | 10 detik |
| Lencana, saat hover atau fokus | Teks melingkar berputar satu kali | 800 ms |
| Kartu, saat hover | Naik 4 px | 200 ms |
| Pil | Ikon panah bergeser 2 px, warna bergeser halus, mengecil 0.98 saat ditekan | 150 ms |
| Titik langkah (kartu 2) | Titik aktif berpindah 1 ke 3 saat hover | 300 ms per titik |
| Kartu 4 (banner) | Pudar silang, otomatis tiap 7 detik, berhenti saat hover atau fokus | 400 ms |
| Judul section dan kartu lain | Naik 12 px sambil memudar sekali, maksimal 3 elemen per section | 500 ms |
| Accordion | Tinggi membuka halus, ikon berputar | 200 ms |

**Dilarang:** parallax, scroll-jacking, teks yang berputar terus-menerus, marquee, Lottie atau library animasi, efek kursor, pusaran "hipnotis", animasi di blok adegan malam.

```css
.rise{animation:rise .6s var(--ease) both;animation-delay:calc(var(--i,0)*80ms)}
@keyframes rise{from{opacity:0;transform:translateY(16px)}}
.cut{animation:step .4s var(--ease) both;animation-delay:calc(var(--i,0)*80ms + 200ms)}
@keyframes step{from{opacity:0;transform:translateY(12px) scale(.98)}}
.breath{animation:breathe 10s ease-in-out infinite}
@keyframes breathe{40%{transform:scale(1.06)}}
.card{transition:transform .2s var(--ease)} .card:hover{transform:translateY(-4px)}
.js .reveal{opacity:0;transform:translateY(12px);transition:opacity .5s var(--ease),transform .5s var(--ease)}
.js .reveal.in{opacity:1;transform:none}
@media (prefers-reduced-motion:reduce){
  *{animation:none!important;transition:none!important}
  .js .reveal{opacity:1;transform:none}
}
```

Class `js` ditambahkan ke `<html>` lewat skrip satu baris, dan `IntersectionObserver` menambahkan class `in`. Tanpa JavaScript, semua konten tetap terlihat.

## 7. Dynamic Banner

- Tampil di kartu 4 hero: label tanggal (amber), judul, satu tombol, sisa kursi bila nyata. Sumber: tabel `banners`, maksimal 3 aktif, urut prioritas.
- Pil "Event ●" di navbar muncul hanya bila ada banner bertipe event yang aktif.
- Teks selalu HTML, bukan tertanam di gambar. Alt text wajib. Cache edge 5 menit, tinggi kartu dikunci agar tidak ada layout shift.

## 8. Aksesibilitas dan Performa

- `lang="id"`, kontras AA, target sentuh minimal 44 px, fokus keyboard berupa cincin 3 px Tinta dengan jarak 2 px.
- Semua animasi mati saat `prefers-reduced-motion`.
- LCP di bawah 2,5 detik di 4G: elemen terbesar adalah headline (teks), foto di bawahnya dengan dimensi tetap. Dua file font di-subset dan font judul di-preload.
- JavaScript landing di bawah 100 KB, ikon SVG inline, landing dirender statis (SSG), data dinamis lewat API dengan cache edge. Mode gelap tidak dibuat di MVP.

## 9. Definisi Selesai

- [ ] Lighthouse mobile: Performance, Accessibility, SEO di atas 90
- [ ] Tampil benar di 375, 768, dan 1280 px, judul tidak lebih dari 3 baris di HP
- [ ] Foto cut-out berlisensi komersial, tepi bersih, total hero di bawah 300 KB
- [ ] Satu gerakan berulang saja (lencana napas), semua animasi mati saat reduced motion
- [ ] Konten tetap terlihat tanpa JavaScript
- [ ] Tidak ada klaim penyembuhan atau hasil terjamin di seluruh copy
- [ ] Panel darurat dan consent terpasang
