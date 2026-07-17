
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-amber-300/30 bg-amber-700 text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white font-bold text-sm backdrop-blur-sm">
                SWG
              </div>
              <span className="text-lg font-bold tracking-tight text-white">
                SW Groundnuts
              </span>
            </Link>
            <p className="mt-4 text-sm leading-6 text-amber-100">
              Premium quality groundnut products from a women-led cooperative 
              in Kanungu, Uganda. Supported by Shared Interest Foundation (UK).
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-amber-200">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/about" className="text-sm text-amber-100 hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-sm text-amber-100 hover:text-white transition">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/quality" className="text-sm text-amber-100 hover:text-white transition">
                  Quality Assurance
                </Link>
              </li>
              <li>
                <Link href="/partners" className="text-sm text-amber-100 hover:text-white transition">
                  Partners
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-amber-100 hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-amber-200">
              Get In Touch
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-amber-100">
              <li className="flex items-start gap-3">
                <span className="mt-0.5">📍</span>
                <span>Ahakibungo, Nyamirama T/C, Kanungu District, Uganda</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5">📧</span>
                <a href="mailto:info@swgroundnuts.co.ug" className="hover:text-white transition">
                  info@swgroundnuts.co.ug
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5">📞</span>
                <a href="tel:+256XXX" className="hover:text-white transition">
                  +256 XXX XXX XXX
                </a>
              </li>
            </ul>
          </div>

          {/* Registration Info */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-amber-200">
              Registration
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-amber-100">
              <li className="flex items-start gap-3">
                <span className="font-medium text-amber-200">Reg No:</span>
                <span>P.28122/RCS</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-medium text-amber-200">TIN:</span>
                <span>1057383351</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-medium text-amber-200">Founded:</span>
                <span>2025</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-amber-400/30 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-center text-sm text-amber-200">
            © {new Date().getFullYear()} Southwestern Groundnuts Value-Added Union Cooperative Society Limited. All rights reserved.
          </p>
          <p className="text-center text-xs text-amber-300">
            Women-Led • Quality-Driven • Export-Ready
          </p>
        </div>
      </div>
    </footer>
  );
}