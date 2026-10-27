# Product Blueprint: Web App Konseling Psikologi & Hipnoterapi

Dokumen 0-to-1 oleh Senior Product Manager. Versi 1.0, Oktober 2026.

## 0. Asumsi & Keputusan Terkunci

Jawaban Anda:

- **Model operasional:** klinik tunggal sekarang, kemungkinan multi-konselor/marketplace nanti.
- **Format layanan:** hybrid (online + tatap muka).
- **Pembayaran:** QRIS + e-wallet, Virtual Account bank.
- **Data sensitif:** belum diputuskan, memakai default di bawah.

Asumsi default (ditandai **\[ASUMSI\]**, ubah bila tidak sesuai):

- **\[ASUMSI\]** Platform menyimpan data booking dan intake form ringan. Tidak ada rekaman sesi. Catatan sesi konselor ditunda ke V2 dan hanya dengan enkripsi tingkat field.
- **\[ASUMSI\]** Sesi online memakai tautan Google Meet/Zoom yang dibuat otomatis, bukan video call buatan sendiri.
- **\[ASUMSI\]** Refund penuh bila batal lebih dari 24 jam sebelum sesi, reschedule gratis satu kali (H-24).
- **\[ASUMSI\]** Pembayaran dimuka penuh, tanpa cicilan. Paket sesi dan promo masuk V2.
- **\[ASUMSI\]** Tim 2 sampai 4 engineer, MVP 3 sampai 4 bulan, segmen awal dewasa muda urban (22 sampai 40 tahun), bahasa Indonesia.
- **\[ASUMSI\]** Hipnoterapi dan konseling psikologi ditampilkan sebagai kategori layanan terpisah dengan label kredensial yang jelas (lihat bagian NFR dan risiko).

Prinsip arsitektur karena rencana multi-konselor: sejak hari pertama, data model **multi-konselor ready** (tabel `counselors`, `services`, `bookings` terhubung lewat `counselor_id`, ada `organization_id`). Aplikasi tetap tampil sebagai klinik tunggal. Ini murah dibangun sekarang dan mahal dirombak nanti.

---

## 1. Competitor Analysis & USP

Catatan: analisis berikut berdasarkan pengetahuan umum pasar, bukan riset terbaru. Verifikasi harga, fitur, dan jumlah mitra sebelum dipakai untuk keputusan investasi.

### 1.1 Peta Kompetitor

**A. Platform konseling digital (marketplace)**

- **Riliv, Ibunda.id, dan sejenisnya.** Kekuatan: brand dikenal, banyak psikolog, pengalaman chat/video bawaan, kadang ada fitur self-help. Kelemahan: pengalaman cenderung generik, hipnoterapi bukan fokus, profil konselor sering seragam sehingga klien sulit merasa "cocok", identitas brand konselor lemah.

**B. Super-app kesehatan**

- **Halodoc, Alodokter.** Kekuatan: basis pengguna besar, pembayaran dan asuransi terintegrasi. Kelemahan: konseling hanyalah satu dari ratusan layanan, pengalaman terasa medis dan transaksional, kurang ruang untuk membangun kepercayaan emosional.

**C. Konten/komunitas kesehatan mental**

- **Satu Persen, KALM, dan sejenisnya.** Kekuatan: kuat di edukasi dan komunitas, event dan kelas. Kelemahan: layanan 1-on-1 atau terapi mendalam bukan inti bisnis.

**D. Praktik independen dan klinik lokal (kompetitor terbesar sebenarnya)**

- Booking lewat Instagram DM dan WhatsApp, pembayaran transfer manual, jadwal diatur lewat chat. Kekuatan: personal, terpercaya lewat rekomendasi. Kelemahan: friksi tinggi, tidak ada reminder, tidak skalabel, tidak ada bukti kredensial yang mudah dicek, event publik dikelola manual.

### 1.2 Celah Pasar

1. Hipnoterapi hampir tidak dilayani platform digital yang kredibel dan transparan soal kredensial.
2. Calon klien ragu memilih konselor karena informasi minim. Mereka butuh melihat latar belakang, pendekatan, dan gaya konselor sebelum membayar.
3. Layanan 1-on-1 dan event (workshop, webinar) jarang hidup dalam satu ekosistem.
4. Praktik independen butuh sistem booking dan pembayaran lokal yang sederhana, bukan platform marketplace besar.

### 1.3 Unique Selling Proposition

> **"Konseling psikologi dan hipnoterapi yang bisa Anda percaya: kenali konselornya, pilih jadwalnya, bayar dengan cara lokal, dalam beberapa menit."**

Pilar USP:

1. **Transparansi kredensial.** Profil konselor berisi CV, nomor STR/SIPP atau sertifikasi, area fokus, dan portofolio. Ada badge "Kredensial Terverifikasi".
2. **Dua layanan, satu pintu.** Konseling psikologi dan hipnoterapi, sesi privat dan event publik, online dan tatap muka, dalam satu alur booking.
3. **Friksi minimal.** Booking mobile-first tanpa wajib membuat akun di langkah awal, bayar QRIS/e-wallet/VA, konfirmasi dan reminder otomatis lewat WhatsApp.
4. **Privasi sebagai fitur.** Data seminimal mungkin, consent eksplisit, tanpa rekaman sesi secara default. Janji ini ditampilkan di UI, bukan hanya di kebijakan privasi.
5. **Brand hangat, bukan klinis.** Landing page dan dynamic banner yang menenangkan dan mudah diakses.

---

## 2. Business Model (Lean Canvas)

**Problem (3 teratas)**

1. Orang butuh bantuan psikologis tetapi bingung memilih konselor yang kredibel dan cocok.
2. Proses booking dan pembayaran di praktik tradisional manual dan lambat (chat, transfer, konfirmasi).
3. Stigma membuat orang ingin proses yang privat dan aman.

*Alternatif yang ada:* DM Instagram/WhatsApp ke praktik, platform marketplace generik, mencari sendiri lewat Google.

**Customer Segments**

- **Utama:** dewasa muda urban 22 sampai 40 tahun (karyawan, mahasiswa pascasarjana, pekerja kreatif) dengan stres, kecemasan, burnout, kebiasaan, atau tujuan pengembangan diri.
- **Early adopter:** klien yang sudah mengenal konselor lewat media sosial atau rujukan.
- **Sekunder (V2+):** peserta event publik, komunitas, dan B2B (employee wellbeing, kampus).

**Unique Value Proposition** Bantuan psikologis dan hipnoterapi dari konselor yang kredensialnya jelas, bisa dipesan dan dibayar dalam hitungan menit, dengan privasi data yang dijaga serius.

**Solution** Landing page dengan dynamic banner, profil konselor lengkap, booking sesi privat dan event, pembayaran lokal, dashboard admin/konselor.

**Channels** Instagram/TikTok konselor (konten edukasi), SEO artikel dan halaman profil, WhatsApp, event publik sebagai corong akuisisi, referral klien, kemitraan komunitas dan kampus.

**Revenue Streams**

1. **Sesi privat** (utama): tarif per sesi per layanan dan durasi.
2. **Event publik:** tiket workshop/webinar berbayar (gratis sebagai lead magnet).
3. **Paket sesi** (V2): 4 atau 6 sesi dengan diskon, meningkatkan retensi dan arus kas dimuka.
4. **Komisi marketplace** (V3): 15 sampai 20% per transaksi dari konselor mitra.
5. **B2B/korporat** (V3): paket sesi dan event untuk perusahaan.

**Cost Structure**

- *Tetap:* gaji/honor tim produk dan engineering, hosting dan infrastruktur, lisensi (Google Workspace, Zoom bila perlu), kepatuhan dan konsultasi hukum, penyedia WhatsApp API.
- *Variabel:* biaya payment gateway (kisaran persentase atau flat per metode, verifikasi tarif terkini), honor konselor per sesi, biaya akuisisi (iklan, konten), customer support.
- *Catatan:* di model klinik tunggal, honor konselor adalah biaya variabel terbesar. Hitung margin per sesi sebelum menetapkan harga.

**Key Metrics** Sesi selesai per bulan, konversi kunjungan ke booking, repeat booking rate, rata-rata tarif per sesi, CAC dan LTV, NPS.

**Unfair Advantage** Kredibilitas dan basis audiens milik konselor/brand sendiri, konten dan reputasi yang sudah ada, serta data model multi-konselor yang siap tumbuh. *\[Isi dengan aset nyata Anda: pengikut, testimoni, jaringan.\]*

---

## 3. PRD (Product Requirements Document)

### 3.1 Problem Statement

Klien potensial yang membutuhkan konseling atau hipnoterapi kesulitan menilai kredibilitas dan kecocokan konselor, lalu terhambat proses booking dan pembayaran yang manual. Di sisi lain, konselor menghabiskan waktu untuk administrasi (mengatur jadwal, menagih, mengingatkan) alih-alih melayani klien. Produk ini menyatukan penemuan, kepercayaan, booking, dan pembayaran dalam satu pengalaman yang privat dan sederhana.

**Tujuan produk (6 bulan pertama):** 80% booking selesai tanpa bantuan admin, tingkat no-show di bawah 10%, nol insiden kebocoran data.

**Non-goals MVP:** chat real-time, video call buatan sendiri, rekaman sesi, diagnosis otomatis atau AI konseling, aplikasi native, marketplace multi-konselor penuh.

### 3.2 User Persona

**Persona 1: Klien, "Dina" (29, karyawan swasta di Bandung)**

- *Konteks:* burnout dan sulit tidur, belum pernah konseling, takut dihakimi dan ragu soal biaya.
- *Goal:* menemukan konselor yang tepat dengan cepat, jadwal fleksibel di luar jam kerja, bayar praktis lewat e-wallet.
- *Pain points:* tidak tahu bedanya psikolog dan hipnoterapis, tidak yakin konselor kredibel, malas bolak-balik chat, khawatir datanya bocor.
- *Kebutuhan kunci:* profil jelas, harga transparan, privasi, reminder, opsi online.

**Persona 2: Klien event, "Raka" (24, mahasiswa)**

- Mencari workshop terjangkau, memutuskan lewat HP. Butuh tiket mudah dan sertifikat/rekaman bila tersedia.

**Persona 3: Konselor, "Bu Sari, M.Psi., Psikolog" (38)**

- *Konteks:* praktik mandiri, jadwal berantakan lewat WhatsApp, sering ada no-show.
- *Goal:* kelola ketersediaan sendiri, otomatis terima pembayaran, lihat jadwal dan data klien seperlunya, tampil profesional.
- *Pain points:* administrasi, penagihan, klien lupa jadwal, khawatir soal kerahasiaan klien.

**Persona 4: Admin klinik**

- Mengelola konten landing page, banner, event, validasi pembayaran dan refund, serta laporan.

### 3.3 User Flow

**Fase 1: Discovery**

1. Klien masuk dari Instagram, Google, atau tautan WhatsApp ke Landing Page.
2. Melihat dynamic banner (event terdekat, promo, layanan unggulan), penjelasan layanan konseling vs hipnoterapi, dan testimoni.
3. Menelusuri daftar konselor dengan filter (layanan, topik, format online/offline, bahasa, ketersediaan).
4. Membuka Profil Konselor: foto, bio, kredensial (badge verifikasi), CV, portofolio/artikel, topik yang ditangani, tarif, ketersediaan.
5. *(Opsional)* Mengisi kuis singkat "Bantu saya memilih" untuk rekomendasi layanan, tanpa diagnosis.

**Fase 2: Booking (sesi privat)**

1. Pilih layanan, durasi, format (online/tatap muka), lalu slot tanggal dan jam (zona waktu jelas).
2. Isi data minimum: nama panggilan (boleh pseudonim), kontak WhatsApp/email, keluhan singkat opsional.
3. Setujui consent: kebijakan privasi, ketentuan layanan, kebijakan refund/reschedule, pernyataan bahwa layanan bukan untuk kondisi darurat.
4. Slot ditahan sementara (misalnya 15 menit) selama pembayaran berjalan.
5. Ringkasan pesanan lalu pilih metode bayar (QRIS, e-wallet, VA bank).

**Fase 2b: Booking (event publik)**

1. Pilih event dari landing/halaman event, lalu pilih tiket (gratis/berbayar), kuota ditampilkan.
2. Isi data peserta dan consent, lalu bayar atau langsung konfirmasi bila gratis.
3. Dapat tiket digital/kode dan tautan acara.

**Fase 3: Payment & Post-payment**

1. Gateway menampilkan instruksi bayar. Status "Menunggu Pembayaran" dengan hitung mundur.
2. Webhook gateway memverifikasi pembayaran, status booking menjadi "Terkonfirmasi", slot dikunci.
3. Otomatis: email dan WhatsApp konfirmasi, invoice/kuitansi, file kalender (.ics), tautan Meet/Zoom atau alamat lokasi dengan peta.
4. Reminder H-1 dan H-2 jam. Klien dapat reschedule/batalkan sesuai kebijakan lewat tautan aman (tanpa login wajib).
5. Pembayaran gagal atau kedaluwarsa: slot dilepas, klien menerima opsi bayar ulang.
6. Hari sesi: klien join/datang, konselor menandai status sesi (selesai/no-show).
7. Pasca-sesi: form feedback singkat dan rating (privat, tidak otomatis publik), ajakan booking lanjutan atau paket.
8. Refund (bila memenuhi syarat): diajukan lewat sistem, disetujui admin, diproses via gateway, notifikasi ke klien.

**Fase 4: Konselor & Admin**

- Konselor: login, atur jam kerja dan blokir tanggal, lihat booking, ubah status, lihat pendapatan.
- Admin: kelola konten, banner, event, konselor, pembayaran, refund, laporan.

### 3.4 Feature Prioritization (MoSCoW)

**MUST HAVE (MVP)**

Publik / Klien:

- Landing page responsif dengan dynamic banner (dikelola admin: gambar, judul, CTA, jadwal tayang, urutan).
- Daftar dan profil konselor (bio, kredensial dan badge verifikasi, CV, portofolio, tarif, topik).
- Katalog layanan (konseling, hipnoterapi) dan halaman event.
- Booking sesi privat: pilih layanan, format, slot dengan slot hold dan pencegahan double-booking.
- Booking dan tiket event dengan kuota.
- Guest checkout (tanpa wajib akun) dengan magic link/OTP untuk kelola booking.
- Integrasi payment gateway: QRIS, e-wallet, VA bank, plus webhook, status pembayaran, kedaluwarsa, invoice.
- Notifikasi otomatis (email dan WhatsApp): konfirmasi, reminder, perubahan.
- Pembuatan tautan Google Meet/Zoom otomatis untuk sesi online. Alamat dan peta untuk tatap muka.
- Consent management (privasi, ketentuan, refund) dengan pencatatan waktu dan versi.
- Halaman bantuan krisis dan disclaimer "bukan layanan darurat" beserta kontak layanan krisis resmi.

Dashboard Konselor:

- Atur ketersediaan (jadwal mingguan, pengecualian, cuti).
- Daftar dan kalender booking, ubah status (hadir, selesai, no-show).
- Edit profil sendiri (dengan persetujuan admin untuk perubahan kredensial).
- Ringkasan pendapatan sederhana.

Dashboard Admin:

- CMS banner, konten landing, dan artikel dasar.
- Kelola konselor, layanan, tarif, dan verifikasi kredensial.
- Kelola event, kuota, dan peserta.
- Daftar transaksi, rekonsiliasi dasar, refund manual.
- Manajemen peran dan akses (RBAC) dan audit log.
- Ekspor data booking (CSV).

**SHOULD HAVE (V1.1 sampai V2 awal)**

- Akun klien dengan riwayat booking.
- Intake form pra-sesi (terenkripsi, akses terbatas).
- Reschedule mandiri dan refund otomatis sesuai aturan.
- Kode promo dan voucher.
- Rating dan testimoni dengan moderasi.
- Sertifikat kehadiran event dan pengiriman materi/rekaman event.
- Waiting list untuk slot atau event penuh.
- Laporan dan analitik di dashboard admin.
- Artikel/blog dengan SEO.

**COULD HAVE (V2 sampai V3)**

- Paket sesi (bundling) dan langganan.
- Catatan sesi konselor (terenkripsi, hanya konselor yang bersangkutan).
- Sinkron Google Calendar dua arah.
- Multi-konselor penuh: onboarding mandiri, komisi, payout otomatis, split payment.
- Kuis rekomendasi layanan, multi-bahasa (Inggris), program referral.
- Portal B2B/korporat.

**WON'T HAVE (saat ini)**

- Chat real-time dan video call buatan sendiri.
- Rekaman sesi audio/video.
- Diagnosis atau konseling berbasis AI.
- Aplikasi mobile native.
- Resep, rekam medis penuh, atau klaim asuransi.

### 3.5 Non-Functional Requirements

Catatan: bukan nasihat hukum. Konsultasikan dengan penasihat hukum yang paham UU PDP dan regulasi kesehatan sebelum peluncuran.

**A. Privasi & Kepatuhan UU PDP (UU No. 27 Tahun 2022)**

- **Klasifikasi data:** data kesehatan (termasuk kesehatan jiwa) tergolong data pribadi yang bersifat spesifik dengan kewajiban perlindungan lebih ketat. Perlakukan semua data keluhan, intake, dan catatan sesi sebagai data spesifik.
- **Dasar pemrosesan & consent:** persetujuan eksplisit, terpisah, dan dapat ditarik, dicatat dengan timestamp dan versi dokumen. Tidak ada kotak centang pra-terisi.
- **Minimisasi data:** hanya kumpulkan yang diperlukan. Nama pseudonim diperbolehkan. Kolom keluhan bersifat opsional.
- **Hak subjek data:** akses, koreksi, penghapusan, penarikan consent, dan portabilitas. Sediakan kanal dan SLA respons dan alur penghapusan data.
- **Retensi:** tetapkan masa simpan per jenis data (misalnya data booking sesuai kebutuhan akuntansi/pajak, data intake dihapus setelah periode tertentu). Hapus atau anonimkan setelahnya.
- **Kewajiban organisasi:** tunjuk Pejabat Pelindung Data Pribadi bila memenuhi kriteria (pemrosesan data spesifik dalam skala besar), lakukan DPIA (penilaian dampak), dan siapkan perjanjian pemrosesan data dengan vendor (gateway, WhatsApp provider, hosting, email).
- **Notifikasi kegagalan pelindungan data:** siapkan prosedur insiden dan pemberitahuan ke subjek data dan otoritas dalam batas waktu yang diatur (UU menyebut paling lambat 3x24 jam, verifikasi pada aturan pelaksana terbaru).
- **Transfer lintas negara:** hindari bila memungkinkan. Simpan data di Indonesia. Bila memakai layanan luar negeri (Zoom, Google), jelaskan di kebijakan privasi.
- **Isi notifikasi:** jangan tampilkan jenis keluhan atau nama layanan sensitif di pesan WhatsApp/email yang bisa terbaca orang lain. Gunakan teks netral ("Sesi Anda terkonfirmasi").

**B. Keamanan**

- HTTPS/TLS 1.2+ di semua jalur, HSTS, header keamanan.
- Enkripsi at-rest untuk database dan backup. Enkripsi tingkat field untuk data sensitif (intake, catatan), kunci dikelola terpisah (KMS).
- Autentikasi: password hashing kuat (argon2/bcrypt), MFA wajib untuk admin dan konselor, rate limiting, proteksi brute force.
- RBAC dengan prinsip least privilege. Admin tidak otomatis boleh membaca isi intake atau catatan. Log setiap akses ke data sensitif (audit log tidak dapat diubah).
- Perlindungan OWASP Top 10, validasi input, dependency scanning, pentest sebelum rilis publik.
- **Pembayaran:** jangan menyimpan data kartu/rekening sendiri, gunakan hosted checkout gateway (cakupan PCI-DSS pada gateway). Verifikasi signature webhook, idempotensi, rekonsiliasi harian.
- Tautan Meet/Zoom unik per sesi, tidak publik. Waiting room aktif.
- Backup harian terenkripsi, uji restore berkala. Pemisahan lingkungan dev, staging, dan production tanpa data produksi di non-produksi.

**C. Performa & Ketersediaan**

- LCP di bawah 2,5 detik pada jaringan 4G, optimasi gambar banner (WebP, lazy-load, CDN).
- Uptime target 99,5% di MVP. Halaman booking dan webhook pembayaran harus tangguh (retry, queue).
- Mampu menangani lonjakan trafik saat event dan promo (kuota event harus anti-race condition).

**D. Reliabilitas Data Booking**

- Pencegahan double-booking lewat constraint di database. Slot hold dengan TTL. Penanganan zona waktu (WIB/WITA/WIT).
- Alur pembayaran idempoten: pembayaran terlambat setelah slot dilepas harus memicu refund/penjadwalan ulang otomatis.

**E. Aksesibilitas & UX**

- Mobile-first (mayoritas trafik lewat HP), WCAG 2.1 AA untuk kontras dan navigasi keyboard, bahasa Indonesia sederhana, tone empatik dan tidak menghakimi.
- Halaman bantuan krisis selalu mudah dijangkau.

**F. Etika & Regulasi Layanan**

- Tampilkan kredensial secara akurat: psikolog (STR/SIPP) dan hipnoterapis (sertifikasi dan lembaga) harus dibedakan, jangan ada klaim penyembuhan atau hasil terjamin.
- Protokol eskalasi untuk indikasi risiko (bunuh diri, kekerasan) dengan panduan untuk konselor dan rujukan ke layanan darurat.
- Verifikasi kredensial dilakukan manual oleh admin sebelum badge tampil. Simpan bukti verifikasi.
- Review hukum atas materi pemasaran (hindari klaim medis berlebihan).

**G. Observabilitas**

- Monitoring error dan uptime, alert untuk kegagalan webhook pembayaran, log terstruktur tanpa data pribadi.

---

## 4. Project Scope & Execution

### 4.1 Roadmap Rilis

**Fase 0: Discovery & Fondasi (minggu 1 sampai 3)**

- Validasi asumsi dengan 8 sampai 10 wawancara klien dan 3 konselor, finalisasi kebijakan refund dan harga.
- Konsultasi hukum (UU PDP, kredensial, disclaimer), pilih payment gateway, pemetaan alur dan wireframe.
- Setup infrastruktur, CI/CD, desain sistem dan data model multi-konselor ready.

**MVP (minggu 4 sampai 16, sekitar 3 sampai 4 bulan)**

- *Sprint 1 sampai 2:* landing page, CMS banner, profil konselor, katalog layanan.
- *Sprint 3 sampai 4:* ketersediaan konselor, booking sesi privat (slot hold, anti double-booking), guest checkout.
- *Sprint 5 sampai 6:* integrasi payment gateway (QRIS, e-wallet, VA), webhook, invoice, notifikasi email/WhatsApp, tautan Meet/Zoom.
- *Sprint 7:* event publik dan tiket, dashboard konselor dan admin, RBAC dan audit log.
- *Sprint 8:* consent management, halaman krisis, pentest, UAT dengan pengguna nyata, perbaikan.
- **Soft launch:** undangan terbatas (50 sampai 100 klien dari audiens sendiri) sebelum rilis publik.

**V1.1 (bulan 5 sampai 6)**

- Akun klien dan riwayat, reschedule mandiri, refund otomatis, kode promo, rating/testimoni, sertifikat event, analitik admin, blog SEO.

**V2 (bulan 7 sampai 10)**

- Paket sesi, intake form terenkripsi, catatan sesi konselor, sinkron Google Calendar, waiting list, penyempurnaan retensi (reminder lanjutan).

**V3 (bulan 11+) Marketplace**

- Onboarding konselor mandiri dan alur verifikasi, split payment dan payout otomatis, komisi, halaman publik per konselor dengan subdomain, B2B, multi-bahasa.

### 4.2 Rekomendasi Tech Stack

Prinsip: tim kecil, kecepatan rilis, mudah direkrut di Indonesia, hosting data di dalam negeri.

- **Frontend:** Next.js (React, TypeScript) dengan Tailwind CSS. SSR/SSG untuk SEO landing dan profil konselor, PWA-ready.
- **Backend:** Pilihan A (direkomendasikan): NestJS (Node.js, TypeScript) agar satu bahasa dengan frontend. Pilihan B: Laravel bila tim lebih kuat di PHP (ekosistem matang untuk CRUD dan admin). Mulai sebagai modular monolith, bukan microservices.
- **Database:** PostgreSQL (constraint dan exclusion untuk anti double-booking, JSONB fleksibel), Redis untuk slot hold, antrean, dan rate limit.
- **Admin/CMS:** panel admin kustom di aplikasi yang sama, atau headless CMS (Strapi/Directus) khusus untuk banner dan konten bila ingin lebih cepat.
- **Payment gateway:** Midtrans atau Xendit (keduanya mendukung QRIS, e-wallet, dan VA). Rekomendasi: **Xendit** bila rencana marketplace V3 (dukungan split payment dan payout), **Midtrans** bila ingin integrasi paling sederhana dan dokumentasi luas. Bandingkan tarif, waktu settlement, dan dukungan refund sebelum memutuskan. Bungkus dalam lapisan abstraksi (`PaymentProvider`) agar bisa ganti gateway.
- **Notifikasi:** email lewat Amazon SES atau Resend. WhatsApp lewat penyedia WhatsApp Business API resmi (misalnya Qontak atau penyedia lokal lain). Template pesan harus netral.
- **Video:** Google Calendar API (Meet) atau Zoom API untuk pembuatan tautan otomatis.
- **Hosting & infrastruktur:** region Indonesia (AWS Jakarta, Google Cloud Jakarta, atau penyedia lokal seperti Biznet Gio/IDCloudHost). Container (Docker), CDN untuk aset, object storage terenkripsi untuk gambar dan CV/portofolio.
- **Keamanan & DevOps:** GitHub Actions CI/CD, Sentry (error, dengan scrubbing data pribadi), uptime monitoring, secrets manager, KMS untuk enkripsi field.
- **Analitik:** event tracking berbasis consent (PostHog self-hosted atau GA4 dengan anonimisasi). Jangan kirim data keluhan ke tools analitik pihak ketiga.
- **Desain:** Figma dan design system ringan.

**Tim minimum:** 1 PM/product owner, 1 desainer UI/UX (paruh waktu), 2 sampai 3 engineer fullstack, 1 QA (paruh waktu), dukungan hukum (konsultan eksternal).

### 4.3 Success Metrics (KPI)

Target untuk 3 sampai 6 bulan setelah rilis publik. Sesuaikan setelah baseline terkumpul.

**Akuisisi & Discovery**

- Kunjungan unik bulanan dan persentase trafik organik.
- CTR dynamic banner (target awal 3 sampai 5%).
- Rasio kunjungan ke lihat profil konselor (target 25%+).

**Konversi & Booking**

- Konversi kunjungan ke booking terbayar: 2 sampai 4%.
- Konversi mulai checkout ke pembayaran sukses: 65%+.
- Tingkat pembayaran kedaluwarsa/gagal: di bawah 25%.
- Waktu dari buka booking sampai bayar: median di bawah 5 menit.
- Booking selesai tanpa bantuan admin: 80%+.

**Engagement & Retensi**

- Repeat booking rate (klien dengan 2+ sesi dalam 90 hari): 30%+.
- Utilisasi jadwal konselor: 50 sampai 70%.
- Fill rate event publik: 70%+ dari kuota.

**Kualitas Layanan**

- No-show rate: di bawah 10%.
- Rating kepuasan sesi: 4,5/5 atau lebih. NPS: 40+.
- Waktu respons admin untuk refund dan bantuan: di bawah 24 jam.

**Bisnis**

- Sesi selesai per bulan, GMV, rata-rata nilai pesanan.
- CAC berbanding LTV (target LTV/CAC di atas 3).
- Margin kontribusi per sesi, setelah honor konselor dan biaya gateway.

**Kepatuhan & Keamanan (guardrail, wajib)**

- Insiden kebocoran data: 0.
- 100% booking memiliki catatan consent yang valid.
- Permintaan hak data (akses/hapus) ditangani dalam SLA yang ditetapkan (misalnya 14 hari kerja).
- 100% kredensial konselor terverifikasi sebelum tayang.
- Uptime 99,5%+ dan kegagalan webhook pembayaran terselesaikan dalam 1 jam.

### 4.4 Risiko Utama & Mitigasi

1. **Kebocoran data sensitif.** Mitigasi: minimisasi data, enkripsi field, RBAC, audit log, pentest, rencana respons insiden.
2. **Klaim kredensial atau hasil terapi yang menyesatkan.** Mitigasi: verifikasi manual, pemisahan label psikolog dan hipnoterapis, review hukum konten.
3. **Klien dalam kondisi krisis memakai platform non-darurat.** Mitigasi: disclaimer jelas, halaman bantuan krisis, protokol eskalasi.
4. **Double-booking atau pembayaran tidak sinkron.** Mitigasi: constraint database, slot hold, webhook idempoten, rekonsiliasi harian.
5. **Ketergantungan pada satu gateway atau penyedia WhatsApp.** Mitigasi: lapisan abstraksi dan opsi cadangan.
6. **Rekayasa ulang saat beralih ke marketplace.** Mitigasi: data model multi-konselor ready dan RBAC sejak MVP.
7. **No-show tinggi.** Mitigasi: pembayaran dimuka, reminder berlapis, kebijakan reschedule jelas.

### 4.5 Pertanyaan Terbuka untuk Keputusan Berikutnya

1. Tarif per layanan dan struktur honor konselor (untuk menghitung margin).
2. Kebijakan final refund dan reschedule.
3. Apakah catatan sesi akan disimpan di platform (V2) atau tetap di sistem konselor?
4. Pilihan final payment gateway setelah membandingkan tarif.
5. Entitas hukum penyelenggara dan penunjukan penanggung jawab data pribadi.
6. Jumlah konselor awal dan lokasi tatap muka (satu atau beberapa cabang).

**Langkah berikutnya yang disarankan:** (1) validasi asumsi lewat wawancara pengguna, (2) konsultasi hukum UU PDP dan kredensial, (3) wireframe alur booking dan pembayaran, (4) spike teknis integrasi gateway dan Google Meet.

---

## 5. Addendum v2: Keputusan Terbaru

Bagian 5 dan seterusnya menggantikan asumsi Bagian 0 dan rekomendasi tech stack di 4.2. Produk kini dibangun sebagai **klinik satu konselor, oleh satu developer, di atas free tier, dengan Mayar.id sebagai payment gateway**.

| Aspek | v1 (sebelumnya) | v2 (keputusan sekarang) | Dampak pada scope |
| --- | --- | --- | --- |
| Model | Klinik tunggal, siap multi-konselor | Satu konselor, multi-konselor nanti | Onboarding konselor, payout, dan komisi keluar dari MVP. Kolom `counselor_id` tetap ada di database. |
| Format | Hybrid | Hybrid, satu lokasi tatap muka | Tidak berubah |
| Payment | Midtrans atau Xendit | Mayar.id (Invoice API v2) | Webhook dan verifikasi berbeda, lihat 7.5 |
| Hosting | Region Indonesia, berbayar | Free tier (Cloudflare) | Data tidak berlokasi di Indonesia, mitigasi di 7.7 |
| Tim | 2 sampai 4 engineer | Solo developer end-to-end | Fitur dipangkas, satu stack, tanpa microservice |
| Data sensitif | Default | Default: booking dan intake ringan, tanpa rekaman | Tidak berubah |

Prinsip eksekusi solo: bangun yang membuat uang masuk dulu (landing, profil, booking, bayar), tunda yang membuat tampil rapi (analitik, promo, testimoni).

## 6. Konsep Landing Page

**Rekomendasi: tenang dan hangat, dengan animasi minimal.** Satu animasi hero (lingkaran napas pelan, CSS murni) dan banner dinamis yang tidak berganti terlalu cepat. Tidak ada parallax, video latar, atau efek pusaran "hipnotis". Spesifikasi lengkap ada di file `design.md` yang menyertai dokumen ini.

| Opsi | Kesan | Performa di free tier dan HP | Effort solo dev | Keputusan |
| --- | --- | --- | --- | --- |
| Statis penuh | Bersih tetapi dingin | Terbaik | Terendah | Terlalu datar untuk layanan emosional |
| Animasi minimal (satu momen) | Tenang, hangat, tepercaya | Sangat baik, tanpa library | Rendah | **Dipilih** |
| Animasi kaya (scroll, Lottie, 3D) | Mengesankan tetapi ramai | Berat, berisiko lambat di 4G | Tinggi | Ditolak: pengunjung sedang rentan, dan beban gerak menambah kecemasan |

Alasan utama memilih minimal: sebagian besar pengunjung datang dari HP, sebagian dalam kondisi cemas. Gerakan pelan yang bermakna (napas) menenangkan, sedangkan gerakan di mana-mana mengalihkan dari tujuan halaman, yaitu memesan sesi.

**Ringkasan identitas visual**

- Palet: Malam `#14263A`, Kabut `#EEF2F4`, Embun `#C9DDE0`, Lumut `#4F7A6B`, dan Lampu `#E3A93B` khusus tombol CTA utama.
- Tipografi: Newsreader untuk heading, Plus Jakarta Sans untuk teks dan antarmuka.
- Urutan halaman: hero, banner dinamis, layanan, profil konselor, cara kerja, event, FAQ dan privasi, panel krisis.
- Banner dinamis dikelola dari dashboard admin: judul, gambar, tombol, jadwal tayang, maksimal tiga aktif.

## 7. PRD Teknis (Solo Developer, Free Tier)

Bagian ini menerjemahkan produk menjadi rencana teknis yang bisa dikerjakan satu orang tanpa biaya infrastruktur di awal.

### 7.1 Peta Produk

&#91;embedded content: peta produk · 6 modul\]

Tiga modul di kiri membuat uang masuk (temukan, pesan, bayar). Tiga modul di kanan membuat alur itu berjalan tanpa campur tangan manual dan tetap aman.

### 7.2 Arsitektur

&#91;embedded content: arsitektur · 4 komponen Cloudflare, 3 layanan luar\]

Browser hanya berbicara dengan situs statis dan Worker. Hanya Worker yang memegang kunci API Mayar, Google, dan email, jadi kunci tidak pernah sampai ke browser.

### 7.3 Stack Free Tier

Seluruh stack bisa berjalan tanpa biaya bulanan. Satu-satunya biaya tetap yang hampir pasti adalah domain. Angka batas di bawah berasal dari ringkasan pihak ketiga dan pengumuman Cloudflare, jadi cek ulang di halaman harga masing-masing sebelum diandalkan.

| Komponen | Pilihan | Batas free tier | Catatan |
| --- | --- | --- | --- |
| API dan hosting | Cloudflare Workers (Hono) dengan aset statis | Sekitar 100 ribu request per hari, CPU per request singkat | Cukup untuk satu konselor. Cache edge menahan lonjakan saat event. |
| Database | Cloudflare D1 (SQLite) | Sekitar 5 juta baca dan 100 ribu tulis baris per hari. Sejak 1 September 2026 query gagal bila terlampaui ([pengumuman](https://developers.cloudflare.com/changelog/post/2026-09-01-d1-free-tier-limit-enforcement/)) | Wajib pasang indeks dan hindari full table scan. |
| File | Cloudflare R2 | Sekitar 10 GB, tanpa biaya egress | Foto, CV PDF, gambar banner |
| Frontend | Astro (SSG) | Tanpa biaya | JavaScript minimal, cocok untuk landing yang cepat |
| Login admin | Cloudflare Access atau login sendiri dengan TOTP | Cek batas pengguna gratis | Hanya satu akun: konselor |
| Payment | Mayar.id Invoice API v2 | Tanpa biaya bulanan, fee per transaksi | Detail di 7.5 |
| Email | Resend atau Brevo (paket gratis) | Kuota harian terbatas, cek paket terbaru | Konfirmasi, kuitansi, reminder |
| Video | Google Calendar API (membuat tautan Meet) | Gratis | Refresh token disimpan sebagai secret Worker |
| CI/CD | GitHub dan GitHub Actions, deploy via Wrangler | Gratis untuk repo privat dalam batas menit bulanan | Satu pipeline sederhana |

**Hindari Vercel Hobby untuk produk ini.** Paket Hobby dibatasi untuk penggunaan personal non-komersial, sedangkan layanan berbayar termasuk komersial ([kebijakan Vercel](https://vercel.com/docs/limits/fair-use-guidelines)). Cloudflare free tidak memiliki pembatasan serupa pada dokumentasi yang saya temukan, namun baca ketentuan layanannya sebelum rilis.

**Kapan harus berbayar:** bila baca D1 atau request Worker mendekati batas harian, atau saat konselor bertambah. Paket Workers Paid menghapus batas D1 dan menjadi langkah upgrade termurah.

### 7.4 Alur Pengguna

&#91;embedded content: alur pengguna · discovery sampai post-payment, 1 keputusan\]

Status booking: `menunggu_bayar`, `terkonfirmasi`, `selesai`, `no_show`, `dibatalkan`, `kedaluwarsa`. Slot ditahan selama invoice Mayar masih aktif, jadi `expiredAt` invoice sama dengan batas tahan slot. Reschedule dan refund mengikuti kebijakan H-24 jam dan diproses manual oleh konselor di MVP.

### 7.5 Integrasi Mayar.id

Setiap booking dan setiap tiket event menjadi satu invoice Mayar. Worker membuat invoice, klien membayar di halaman checkout Mayar, lalu webhook memberi tahu Worker.

1. **Buat invoice.** Worker memanggil `POST /hl/v2/invoices/create` dengan header `Authorization: Bearer <API key>` ([dokumentasi](https://docs.mayar.id/api-reference-v2/invoice/create.md)). Isi: `name`, `email`, `mobile`, `items` (deskripsi layanan, jumlah, tarif), `expiredAt`, opsional `paymentMethod` (`qris`, `va/bni`, `ewallet/dana`, dan lainnya), dan `extraData` berisi `booking_id`. Respons memuat `id`, `transactionId`, `link`, `expiredAt`.
2. **Simpan dan arahkan.** Simpan `id`, `transactionId`, dan `link` di tabel `payments`, lalu arahkan klien ke `link`.
3. **Terima webhook.** Daftarkan URL webhook di dashboard (Integration, lalu Webhook) atau lewat `POST /hl/v2/webhooks/update` ([dokumentasi](https://docs.mayar.id/api-reference-v2/webhook/registerurlhook.md)). Event yang relevan: `payment.received` dan `payment.reminder` (pembayaran belum selesai setelah 29 menit) ([daftar event](https://docs.mayar.id/integration/webhook)).
4. **Verifikasi, baru konfirmasi.** Worker membalas 200 dengan cepat, memanggil API Mayar untuk membaca detail invoice atau transaksi, mencocokkan status lunas, nominal, dan invoice yang tersimpan, lalu mengubah booking menjadi `terkonfirmasi`. Pemrosesan harus idempoten: webhook ganda tidak boleh membuat dua konfirmasi.
5. **Rekonsiliasi.** Cron harian membandingkan booking `menunggu_bayar` dengan daftar transaksi terbayar di API Mayar untuk menangkap webhook yang terlewat.

**Hal yang perlu diwaspadai dari dokumentasi:**

- Halaman webhook yang saya baca tidak menjelaskan tanda tangan (signature) pada permintaan. Karena itu jangan percaya isi payload. Selalu verifikasi ke API, taruh secret acak di path URL webhook, dan pasang rate limit.
- Daftar field webhook yang terdokumentasi tidak mencantumkan `extraData`. Cocokkan pembayaran lewat `invoice id` atau `transactionId` yang Anda simpan, bukan lewat `booking_id` dari payload.
- Membuat invoice duplikat dalam waktu singkat dapat ditolak dengan status 429 dan pesan tunggu 1 menit. Satu booking hanya boleh membuat satu invoice, tanpa retry buta.
- Pengaturan membebankan fee ke pelanggan tidak berlaku untuk fitur Invoice, jadi fee ditanggung Anda. Masukkan ke dalam tarif.
- Tersedia sandbox: `api.mayar.io` untuk API dan `web.mayar.io` untuk dashboard uji.

**Biaya per transaksi** (dari [halaman fee Mayar](https://docs.mayar.id/mor/fees.md), halaman ini berada di bagian Merchant of Record, jadi cek tarif akun Anda di dashboard):

| Komponen | Biaya |
| --- | --- |
| QRIS | 0,7% |
| E-wallet (Dana, OVO, LinkAja, ShopeePay) | 1,5% |
| Virtual Account bank | Rp 4.000 |
| Biaya platform untuk Invoicing | 1,5% (Starter), 1% (Business) |
| Penarikan saldo | Rp 2.775 per penarikan |

Contoh ilustrasi, sesi Rp 300.000 dengan paket Starter: QRIS menghabiskan Rp 6.600 (2,2%), VA bank Rp 8.500 (sekitar 2,8%), belum termasuk pajak dan biaya penarikan.

**Risiko kebijakan, selesaikan di Fase 0.** Dokumen Acceptable Use Mayar menyebut bahwa sebagai Merchant of Record mereka tidak mendukung layanan yang sepenuhnya jasa manusia, dengan contoh konsultasi dan dukungan. Produk yang diterima antara lain webinar, event, training, dan kelas online ([kebijakan](https://docs.mayar.id/mor/acceptableuse.md)). Sesi konseling privat adalah jasa manusia. Kirim pertanyaan ke support Mayar sebelum membangun: apakah invoice atau payment link biasa untuk jasa konsultasi diizinkan pada akun non-MoR, dan apakah perlu dikemas sebagai produk Coaching. Siapkan antarmuka `PaymentProvider` agar bisa pindah ke Midtrans atau Xendit tanpa menulis ulang alur booking.

**Event publik:** MVP memakai invoice per peserta dan kuota dihitung di D1, sehingga data peserta tetap satu tempat. Produk Event dan Webinar bawaan Mayar bisa dipertimbangkan nanti bila ingin halaman checkout bawaan.

**WhatsApp:** Mayar menyediakan integrasi WhatsApp (tidak resmi) untuk notifikasi transaksi. Pakai sebagai tambahan saja, bukan satu-satunya kanal, karena risiko pemblokiran nomor.

### 7.6 Data Model dan API

Skema dibuat multi-konselor ready walau hanya ada satu baris di `counselors`. Pencegahan double-booking dilakukan di database dengan unique index parsial pada `(counselor_id, start_at)` untuk status aktif, bukan hanya di kode.

**Tabel utama (D1)**

| Tabel | Kolom kunci | Catatan |
| --- | --- | --- |
| `counselors` | id, name, bio, credentials, cv\_url, portfolio, photo\_url, is\_active | Satu baris saat ini |
| `services` | id, counselor\_id, type (konseling atau hipnoterapi), mode, duration\_min, price\_idr, is\_active | Harga di server, tidak pernah dari klien |
| `availability_rules` | counselor\_id, weekday, start\_time, end\_time | Jadwal mingguan, zona WIB |
| `availability_exceptions` | counselor\_id, date, type (blokir atau tambahan), jam | Cuti dan jam ekstra |
| `bookings` | id, service\_id, counselor\_id, start\_at, end\_at, status, mode, client\_alias, client\_email, client\_phone, meet\_url, hold\_expires\_at, access\_token\_hash | Nama panggilan boleh pseudonim. Keluhan tidak disimpan di MVP. |
| `payments` | id, booking\_id atau ticket\_id, provider, invoice\_id, transaction\_id, amount, status, paid\_at | `provider` memudahkan ganti gateway |
| `webhook_events` | id, provider\_event\_id, payload\_hash, processed\_at | Menjamin idempotensi |
| `events` | id, title, description, starts\_at, mode, location, capacity, price\_idr, is\_published | Kuota dihitung dari tiket |
| `event_tickets` | id, event\_id, attendee\_alias, email, status, payment\_id | Status ditahan dan lunas dihitung ke kuota |
| `banners` | id, title, subtitle, image\_key, alt\_text, cta\_label, cta\_url, type, starts\_at, ends\_at, priority | Sumber dynamic banner |
| `consents` | id, subject\_id, doc\_type, doc\_version, accepted\_at | Bukti persetujuan UU PDP |
| `audit_logs` | id, actor, action, entity, entity\_id, at | Hanya ditambah, tidak diubah |

**Endpoint API (Worker)**

| Endpoint | Akses | Fungsi |
| --- | --- | --- |
| `GET /api/services`, `/api/counselor`, `/api/banners`, `/api/events` | Publik, cache edge | Data landing, profil, layanan, event |
| `GET /api/availability` | Publik | Slot kosong per layanan dan rentang tanggal |
| `POST /api/bookings` | Publik, dibatasi rate | Membuat booking, menahan slot, membuat invoice, mengembalikan `link` |
| `GET /api/bookings/:token` | Token unik | Status booking tanpa login |
| `POST /api/bookings/:token/cancel` dan `/reschedule` | Token unik | Sesuai kebijakan H-24 jam |
| `POST /api/events/:id/tickets` | Publik, dibatasi rate | Tiket event, membuat invoice |
| `POST /api/webhooks/mayar/:secret` | Mayar | Menerima webhook, lalu verifikasi ke API |
| `GET/PATCH /api/admin/bookings` | Konselor, MFA | Daftar booking dan ubah status |
| `PUT /api/admin/availability` | Konselor, MFA | Jadwal, cuti, jam tambahan |
| `CRUD /api/admin/banners`, `/events`, `/services`, `/profile` | Konselor, MFA | CMS landing dan profil |
| `GET /api/admin/export.csv` | Konselor, MFA | Ekspor booking dan transaksi |

Job terjadwal (Cron Triggers): kirim reminder, lepas slot yang `hold_expires_at`-nya lewat, dan rekonsiliasi pembayaran harian.

### 7.7 Keamanan dan UU PDP di Free Tier

Free tier mengubah satu hal yang penting: data klien tidak dijamin berada di server Indonesia. Cara paling murah mengurangi risikonya adalah menyimpan sesedikit mungkin data sensitif. Ini bukan nasihat hukum, jadi tinjau bagian ini dengan penasihat hukum sebelum rilis publik.

1. **Minimisasi data.** MVP tidak menyimpan keluhan, intake, atau catatan sesi. Yang disimpan hanya nama panggilan, email, nomor telepon, dan jadwal. Intake dan catatan sesi baru masuk di V2 dengan enkripsi field, dan saat itu pertimbangkan pindah ke hosting di Indonesia.
2. **Transfer lintas negara.** UU PDP mengatur pengiriman data pribadi ke luar wilayah Indonesia dengan syarat tertentu (antara lain tingkat perlindungan yang setara atau persetujuan subjek data). Karena Cloudflare, Google, Mayar, dan penyedia email adalah pihak ketiga, cantumkan mereka di kebijakan privasi dan minta persetujuan eksplisit di form booking.
3. **Consent terpisah.** Tiga kotak tidak tercentang otomatis (privasi, ketentuan layanan, kebijakan refund), disimpan di tabel `consents` dengan versi dokumen dan waktu.
4. **Enkripsi.** HTTPS di semua jalur. Field sensitif (V2) dienkripsi AES-GCM lewat Web Crypto, dengan kunci di Workers Secrets, bukan di database.
5. **Notifikasi netral.** Email dan WhatsApp tidak menyebut jenis layanan atau keluhan. Contoh isi: "Sesi Anda Kamis 15.00 WIB terkonfirmasi."
6. **Akses.** Dashboard hanya untuk konselor dengan MFA. Token booking acak panjang, yang disimpan di database hanya hash-nya. Semua akses admin masuk `audit_logs`.
7. **Anti-penyalahgunaan.** Cloudflare Turnstile dan rate limit pada form booking dan endpoint webhook.
8. **Log tanpa data pribadi.** Jangan mencatat email, telepon, atau isi permintaan di log Worker.
9. **Retensi dan hak data.** Tetapkan masa simpan (usulan awal 12 bulan untuk kontak klien, sedangkan catatan transaksi mengikuti kebutuhan pajak, konfirmasi ke akuntan). Sediakan alamat email untuk permintaan akses, koreksi, dan penghapusan, dengan target respons yang Anda tetapkan sendiri.
10. **Insiden dan cadangan.** Siapkan rencana singkat respons insiden dan pemberitahuan sesuai batas waktu UU PDP. Ekspor database terjadwal ke R2 dalam bentuk terenkripsi.

Kerahasiaan klien juga tunduk pada kode etik profesi konselor. Pastikan kebijakan privasi tidak bertentangan dengan kode etik tersebut.

### 7.8 Roadmap Solo Developer

MVP diperkirakan 12 minggu dengan kapasitas sekitar 15 sampai 20 jam per minggu, ditambah satu minggu untuk gate. Bila kapasitas Anda berbeda, geser semua minggu secara proporsional.

&#91;embedded content: roadmap solo dev · 4 fase MVP, 1 gate, 2 rilis lanjutan\]

Garis putus-putus berarti setelah MVP dan belum dikomit. Urutan fase mengikuti prinsip uang masuk dulu: etalase, lalu booking dan bayar, baru event dan dashboard. Satu aturan kerja: tutup satu fase sebelum membuka berikutnya, dan jangan menambah fitur ke fase yang sedang berjalan.

### 7.9 Risiko, KPI, dan Sumber

Risiko terbesar bukan teknis: gateway bisa menolak jenis layanan, dan satu orang memegang seluruh produk.

| Risiko | Dampak | Mitigasi |
| --- | --- | --- |
| Mayar tidak mengizinkan jasa konseling di akun Anda | Pembayaran tidak bisa diterima | Tanyakan ke support di Fase 0. Bangun lewat antarmuka `PaymentProvider` dengan fallback Midtrans atau Xendit. |
| Webhook tanpa signature terdokumentasi | Konfirmasi pembayaran palsu | Verifikasi ke API Mayar, secret di path URL, rate limit, rekonsiliasi harian |
| Batas harian D1 atau Worker terlampaui saat event | Situs error sementara | Cache edge, indeks database, pantau penggunaan, siapkan upgrade Workers Paid |
| Data berada di luar Indonesia | Risiko kepatuhan UU PDP | Minimisasi data, consent eksplisit, tinjauan hukum, pindah hosting saat V2 |
| Scope creep pada solo developer | MVP molor | Satu fase aktif, fitur baru masuk daftar V1.1 atau V2 |
| Konselor tunggal cuti atau sakit | Booking gagal dan klien kecewa | Fitur blokir tanggal, pesan otomatis, kebijakan reschedule jelas |
| Refund manual | Beban administrasi dan salah catat | Catat di audit log, siapkan template pesan |

**KPI 3 bulan pertama** (mengikuti Bagian 4.3, disesuaikan untuk satu konselor):

- Sesi selesai per minggu sebagai metrik utama, dibandingkan dengan jam praktik yang tersedia.
- Konversi kunjungan ke booking terbayar 2 sampai 4%, dan dari mulai checkout ke bayar minimal 65%.
- No-show di bawah 10% dan repeat booking 30% atau lebih dalam 90 hari.
- Booking selesai tanpa bantuan manual minimal 80%.
- Margin per sesi tetap positif setelah fee Mayar dan biaya domain.
- Guardrail: nol insiden kebocoran data, dan webhook gagal terselesaikan dalam 1 jam.

**Langkah berikutnya**

- [ ] Kirim pertanyaan kebijakan jasa konsultasi ke support Mayar
- [ ] Buat akun Cloudflare, sandbox Mayar, dan proyek Google Cloud untuk Calendar API
- [ ] Gambar wireframe slot picker dan halaman profil konselor

**Sumber** (dibuka langsung, per 11 Oktober 2026)

- [Mayar: Create Invoice (API v2)](https://docs.mayar.id/api-reference-v2/invoice/create.md)
- [Mayar: Webhook](https://docs.mayar.id/integration/webhook)
- [Mayar: Register URL Hook](https://docs.mayar.id/api-reference-v2/webhook/registerurlhook.md)
- [Mayar: Fees](https://docs.mayar.id/mor/fees.md)
- [Mayar: Acceptable Use](https://docs.mayar.id/mor/acceptableuse.md)
- [Cloudflare: D1 free tier limit enforcement](https://developers.cloudflare.com/changelog/post/2026-09-01-d1-free-tier-limit-enforcement/)

Dari hasil pencarian, belum dibuka langsung, jadi angka dianggap perkiraan: [kebijakan fair use Vercel](https://vercel.com/docs/limits/fair-use-guidelines) dan [ringkasan batas free tier Cloudflare](https://eastondev.com/blog/en/posts/dev/20260526-cloudflare-free-limits/).
