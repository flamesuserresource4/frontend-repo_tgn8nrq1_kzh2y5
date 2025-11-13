import React from 'react'
import Spline from '@splinetool/react-spline'

function App() {
  return (
    <div className="min-h-screen w-full bg-white text-gray-900">
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-bold text-xl">
            <span className="inline-block h-3 w-3 rounded-full bg-fuchsia-500 animate-pulse" />
            KampusFest 2025
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#about" className="hover:text-blue-600 transition-colors">Tentang</a>
            <a href="#highlights" className="hover:text-blue-600 transition-colors">Highlight</a>
            <a href="#schedule" className="hover:text-blue-600 transition-colors">Jadwal</a>
            <a href="#register" className="hover:text-blue-600 transition-colors">Daftar</a>
            <a href="/test" className="text-gray-500 hover:text-gray-700 transition-colors">Cek Backend</a>
          </nav>
          <a href="#register" className="inline-flex items-center gap-2 rounded-full bg-blue-600 text-white px-4 py-2 text-sm font-semibold shadow hover:bg-blue-700 transition-colors">
            Daftar Sekarang
          </a>
        </div>
      </header>

      {/* Hero Section with Spline animation */}
      <section className="relative w-full" style={{ minHeight: '100vh' }}>
        {/* 3D Animation Layer */}
        <div className="absolute inset-0 z-0">
          <Spline scene="https://prod.spline.design/0UnIIJngGgvQNHiD/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>

        {/* Soft gradient overlay to improve text contrast (non-blocking) */}
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-white/70 via-white/30 to-white" />

        {/* Foreground Content */}
        <div className="relative z-20 pt-28 md:pt-36 pb-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="inline-flex items-center rounded-full bg-blue-600/10 text-blue-700 px-3 py-1 text-xs font-semibold ring-1 ring-blue-600/20">
                Event Teknologi Kampus • Terbuka untuk umum
              </span>
              <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
                Rayakan Inovasi di KampusFest 2025
              </h1>
              <p className="mt-5 text-lg text-gray-700 max-w-2xl">
                Tiga hari penuh inspirasi: talkshow, workshop, kompetisi, dan showcase startup. Rasakan pengalaman interaktif dengan animasi 3D yang hidup.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a href="#register" className="inline-flex items-center justify-center rounded-lg bg-blue-600 text-white px-6 py-3 font-semibold shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition-colors">
                  Dapatkan Tiket
                </a>
                <a href="#about" className="inline-flex items-center justify-center rounded-lg bg-white text-gray-900 px-6 py-3 font-semibold ring-1 ring-gray-200 hover:ring-gray-300 transition-colors">
                  Pelajari Lebih Lanjut
                </a>
              </div>

              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                <div className="rounded-xl bg-white/70 backdrop-blur ring-1 ring-gray-200 p-4">
                  <p className="font-semibold">12–14 Juli 2025</p>
                  <p className="text-gray-600">3 Hari</p>
                </div>
                <div className="rounded-xl bg-white/70 backdrop-blur ring-1 ring-gray-200 p-4">
                  <p className="font-semibold">Aula Utama Kampus</p>
                  <p className="text-gray-600">Dan Online</p>
                </div>
                <div className="rounded-xl bg-white/70 backdrop-blur ring-1 ring-gray-200 p-4">
                  <p className="font-semibold">20+ Pembicara</p>
                  <p className="text-gray-600">Nasional & Global</p>
                </div>
                <div className="rounded-xl bg-white/70 backdrop-blur ring-1 ring-gray-200 p-4">
                  <p className="font-semibold">1.000+ Peserta</p>
                  <p className="text-gray-600">Mahasiswa & Umum</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="relative py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold">Tentang Acara</h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                KampusFest 2025 adalah perayaan teknologi tahunan yang menghadirkan kolaborasi lintas jurusan. Dari AI hingga desain produk, semua bertemu dalam satu panggung.
              </p>
              <ul className="mt-6 grid sm:grid-cols-2 gap-4 text-sm">
                <li className="rounded-xl border border-gray-200 p-4 bg-gradient-to-br from-white to-gray-50">
                  Workshop praktis dari mentor industri
                </li>
                <li className="rounded-xl border border-gray-200 p-4 bg-gradient-to-br from-white to-gray-50">
                  Kompetisi hackathon 24 jam
                </li>
                <li className="rounded-xl border border-gray-200 p-4 bg-gradient-to-br from-white to-gray-50">
                  Showcase startup mahasiswa
                </li>
                <li className="rounded-xl border border-gray-200 p-4 bg-gradient-to-br from-white to-gray-50">
                  Networking dan karier fair
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-200 via-fuchsia-200 to-teal-200 rounded-3xl blur-2xl opacity-60" />
              <div className="relative rounded-3xl bg-white p-6 ring-1 ring-gray-200 shadow-xl">
                <div className="aspect-video w-full rounded-2xl bg-gradient-to-br from-blue-600 to-fuchsia-600" />
                <p className="mt-4 text-sm text-gray-600">
                  Visual dinamis, pengalaman imersif, dan konten yang relevan untuk masa depan karier.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section id="highlights" className="relative py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center">Highlight Utama</h2>
          <p className="mt-3 text-center text-gray-700">Aktivitas seru dengan sentuhan interaktif.</p>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Keynote & Talkshow',
                desc: 'Insight terbaru dari ahli industri dan akademisi.',
                color: 'from-fuchsia-500 to-pink-500'
              },
              {
                title: 'Workshop Hands-on',
                desc: 'Bangun portofolio dengan proyek nyata.',
                color: 'from-blue-500 to-cyan-500'
              },
              {
                title: 'Hackathon 24 Jam',
                desc: 'Uji skill dan kolaborasi timmu.',
                color: 'from-emerald-500 to-teal-500'
              },
              {
                title: 'Expo & Career Fair',
                desc: 'Kenali startup dan peluang kerja.',
                color: 'from-amber-500 to-orange-500'
              }
            ].map((item, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-2xl bg-white p-6 ring-1 ring-gray-200 shadow transition-transform duration-300 hover:-translate-y-1">
                <div className={`absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gradient-to-br ${item.color} blur-2xl opacity-30`} />
                <div className="relative">
                  <div className={`inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${item.color} text-white font-bold shadow`}>★</div>
                  <h3 className="mt-4 text-lg font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section id="schedule" className="relative py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-1">
              <h2 className="text-3xl md:text-4xl font-extrabold">Jadwal Inti</h2>
              <p className="mt-4 text-gray-700">Garis besar agenda selama tiga hari acara.</p>
            </div>
            <div className="md:col-span-2 grid sm:grid-cols-2 gap-4">
              {[
                { day: 'Hari 1', items: ['Pembukaan & Keynote', 'Panel Diskusi AI', 'Expo Booth Buka'] },
                { day: 'Hari 2', items: ['Workshop UI/UX', 'Hackathon Dimulai', 'Mentoring Sore'] },
                { day: 'Hari 3', items: ['Final Hackathon', 'Pengumuman Pemenang', 'Penutupan'] },
                { day: 'Sepanjang Acara', items: ['Career Fair', 'Community Meetup', 'Games & Giveaway'] },
              ].map((s, idx) => (
                <div key={idx} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-bold">{s.day}</h3>
                  <ul className="mt-3 space-y-2 text-sm text-gray-700">
                    {s.items.map((i, ii) => (
                      <li key={ii} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-600" />
                        <span>{i}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Registration */}
      <section id="register" className="relative py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-blue-200 bg-white p-8 md:p-12 shadow">
            <div className="absolute -top-24 -right-24 h-56 w-56 rounded-full bg-blue-200 blur-3xl opacity-50" />
            <div className="relative grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-extrabold">Amankan Tiketmu Hari Ini</h2>
                <p className="mt-3 text-gray-700">Tempat terbatas. Daftar sekarang untuk mendapatkan akses penuh ke seluruh rangkaian acara.</p>
                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <a href="#" className="inline-flex items-center justify-center rounded-lg bg-blue-600 text-white px-6 py-3 font-semibold shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition-colors">
                    Beli Tiket Early Bird
                  </a>
                  <a href="mailto:panitia@kampusfest.id" className="inline-flex items-center justify-center rounded-lg bg-white text-gray-900 px-6 py-3 font-semibold ring-1 ring-gray-200 hover:ring-gray-300 transition-colors">
                    Hubungi Panitia
                  </a>
                </div>
              </div>
              <form onSubmit={(e) => e.preventDefault()} className="rounded-2xl border border-gray-200 p-6 bg-gradient-to-br from-white to-gray-50">
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label className="block text-sm font-medium">Nama Lengkap</label>
                    <input type="text" required className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Nama kamu" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium">Email</label>
                    <input type="email" required className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="email@contoh.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium">Institusi</label>
                    <input type="text" className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Nama kampus / perusahaan" />
                  </div>
                  <button type="submit" className="mt-2 inline-flex items-center justify-center rounded-lg bg-blue-600 text-white px-5 py-2.5 font-semibold shadow hover:bg-blue-700 transition-colors">
                    Kirim Pendaftaran
                  </button>
                  <p className="text-xs text-gray-500">Form ini demo. Integrasi pembayaran/registrasi bisa ditambahkan sesuai kebutuhan.</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-gray-200 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">© 2025 KampusFest. Semua hak cipta dilindungi.</p>
          <div className="flex items-center gap-4 text-sm">
            <a href="#about" className="hover:text-blue-600">Tentang</a>
            <a href="#highlights" className="hover:text-blue-600">Highlight</a>
            <a href="#schedule" className="hover:text-blue-600">Jadwal</a>
            <a href="#register" className="hover:text-blue-600">Daftar</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
