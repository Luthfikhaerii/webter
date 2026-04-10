import React from 'react';

export default function Footer() {
  return (
    <footer className="ffont-sans antialiased bg-[#fcfcfc] text-black selection:bg-[#004aad] selection:text-white border-t border-gray-200 pt-20 pb-10 px-6 md:px-12 lg:px-16">

      {/* Top: CTA + Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 mb-16">

        {/* Brand / CTA */}
        <div className="lg:col-span-1 flex flex-col gap-6">
          <div>
            <p className="text-2xl font-semibold font-black tracking-[-0.05em]">
              Webter
            </p>
            <p className="text-xs text-gray-400 font-light leading-relaxed mt-2 max-w-[200px]">
              Membangun solusi digital yang inovatif dan berkualitas untuk mengembangkan bisnis Anda.
            </p>
          </div>
        </div>

        {/* Service */}
        <div>
          <h3 className="text-sm font-black tracking-tight mb-6">Service</h3>
          <ul className="space-y-3">
            {['Web Development', 'UI/UX Design', 'Consultation', 'Maintenance'].map((item) => (
              <li key={item}>
                <a href="#" className="text-sm text-gray-500 font-light hover:text-black transition-colors duration-200">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-sm font-black tracking-tight mb-6">Navigation</h3>
          <ul className="space-y-3">
            {['Portfolio', 'About', 'Kontak'].map((item) => (
              <li key={item}>
                <a href="#" className="text-sm text-gray-500 font-light hover:text-black transition-colors duration-200">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-sm font-black tracking-tight mb-6">Contact Us</h3>
          <ul className="space-y-3">
            <li>
              <a href="mailto:webterid@gmail.com" className="text-sm text-gray-500 font-light hover:text-black transition-colors duration-200 underline underline-offset-2">
                webterid@gmail.com
              </a>
            </li>
            <li>
              <a href="tel:+6281563862944" className="text-sm text-gray-500 font-light hover:text-black transition-colors duration-200 underline underline-offset-2">
                +62815-6386-2944
              </a>
            </li>
            <li className="pt-4 border-t border-gray-100">
              <p className="text-xs text-gray-400 font-light uppercase tracking-widest mb-2">Social</p>
              <div className="flex flex-col gap-2">
                <a href="#" className="text-sm text-gray-500 font-light hover:text-black transition-colors duration-200">Instagram</a>
                <a href="#" className="text-sm text-gray-500 font-light hover:text-black transition-colors duration-200">TikTok</a>
                <a href="#" className="text-sm text-gray-500 font-light hover:text-black transition-colors duration-200">WhatsApp</a>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gray-400 font-light tracking-[0.1em]">
        <p className="uppercase">© 2026 Webter. All Rights Reserved.</p>
        <div className="flex items-center gap-4 uppercase">
          <a href="#" className="hover:text-black transition-colors duration-200">Privacy Policy</a>
          <span className="text-gray-200">|</span>
          <a href="#" className="hover:text-black transition-colors duration-200">Terms of Use</a>
          <span className="text-gray-200">|</span>
          <span>Bandung, Indonesia</span>
        </div>
      </div>

    </footer>
  );
}