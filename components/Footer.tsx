import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white md:px-8 px-4 pt-16 md:pt-20 pb-10 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">

        <div className="pb-12 md:pb-16 border-b border-white/10">
          <p className="text-sm text-white/30 tracking-widest uppercase mb-6">(Webter)</p>
          <h2 className="text-3xl md:text-5xl font-semibold leading-tight max-w-2xl">
            Bangun kehadiran digital bisnis Anda bersama kami.{' '}
            <span className="text-white/30">Strategis, terstruktur, dan berdampak nyata.</span>
          </h2>
        </div>

        <div className="py-12 md:py-16 border-b border-white/10 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <p className="text-xs tracking-widest text-white/30 uppercase mb-6">Navigasi</p>
            <ul className="space-y-4 text-base">
              {[['/', 'Home'], ['/about', 'About'], ['/service', 'Service'], ['/ourwork', 'Our Works'], ['/contact', 'Contact']].map(([href, label]) => (
                <li key={href}><Link href={href} className="footer-link">{label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs tracking-widest text-white/30 uppercase mb-6">Kontak</p>
            <ul className="space-y-4 text-base">
              <li>
                <a href="tel:+6281563862944" className="footer-link flex items-start gap-3">
                  <svg className="mt-0.5 shrink-0" xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.4 12.14 19.79 19.79 0 0 1 1.34 3.5 2 2 0 0 1 3.33 1.34h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.46a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z"/>
                  </svg>
                  +62 815-6386-2944
                </a>
              </li>
              <li>
                <a href="mailto:webterid@gmail.com" className="footer-link flex items-start gap-3">
                  <svg className="mt-0.5 shrink-0" xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                  webterid@gmail.com
                </a>
              </li>
              <li>
                <span className="footer-link flex items-start gap-3">
                  <svg className="mt-0.5 shrink-0" xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  KP Mekarsari, Baleendah,<br/>Kab. Bandung, Indonesia
                </span>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs tracking-widest text-white/30 uppercase mb-6">Social Media</p>
            <div className="flex flex-col gap-4">
              <a href="https://www.instagram.com/webter.id/" target="_blank" className="footer-link flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
                @webter.id
              </a>
              <a href="https://www.tiktok.com/@webter.id" target="_blank" className="footer-link flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
                </svg>
                @webter.id
              </a>
              <a href="https://www.linkedin.com/company/webter" target="_blank" className="footer-link flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
                Webter
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-sm text-white/30">© 2025 Webter. All rights reserved.</p>
          <p className="text-sm text-white/30">Baleendah, Kab. Bandung, Indonesia</p>
        </div>
      </div>
    </footer>
  )
}