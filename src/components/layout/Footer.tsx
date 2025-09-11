import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="mb-6">
              <Image
                src="/images/logo.png"
                alt="Michael D. Vaughan, DDS Logo"
                width={120}
                height={120}
                className="w-full h-auto max-w-[120px] brightness-0 invert"
              />
            </div>
            <h3 className="text-white font-medium mb-4">About</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-white transition-colors">About Our Practice</Link></li>
              <li><Link href="/about/team" className="hover:text-white transition-colors">Meet the Team</Link></li>
            </ul>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="text-white font-medium mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services" className="hover:text-white transition-colors">All Services</Link></li>
              <li><Link href="/services/special-needs-dentistry" className="hover:text-white transition-colors">Special Needs Dentistry</Link></li>
              <li><Link href="/services/sedation-dentistry" className="hover:text-white transition-colors">Sedation Dentistry</Link></li>
              <li><Link href="/services/dental-exams-cleanings" className="hover:text-white transition-colors">Dental Exams & Cleanings</Link></li>
              <li><Link href="/services/root-canals" className="hover:text-white transition-colors">Root Canals</Link></li>
              <li><Link href="/services/dentures" className="hover:text-white transition-colors">Dentures</Link></li>
              <li><Link href="/services/extractions" className="hover:text-white transition-colors">Extractions</Link></li>
            </ul>
          </div>

          {/* Patient Information Section */}
          <div>
            <h3 className="text-white font-medium mb-4">Patient Information</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/patient-forms" className="hover:text-white transition-colors">Patient Forms</Link></li>
              <li><Link href="/faqs" className="hover:text-white transition-colors">FAQs</Link></li>
              <li><Link href="/destination-nashville" className="hover:text-white transition-colors">Destination Nashville</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Contact & Location Section */}
          <div>
            <h3 className="text-white font-medium mb-4">Contact & Location</h3>
            <div className="space-y-3 text-sm">
              <div>
                <p className="font-medium text-white">Call Today</p>
                <Link href="tel:+16159156090" className="hover:text-white transition-colors">(615) 915-6090</Link>
              </div>
              <div>
                <p className="font-medium text-white">Office Location</p>
                <p>330 Wallace Rd. #106<br />Nashville, TN 37211</p>
                <p className="text-xs mt-1">Harding Office Plaza</p>
              </div>
              <div>
                <p className="font-medium text-white">Office Hours</p>
                <p>Monday - Friday: 7:30 AM–4 PM<br />Saturday & Sunday: Closed</p>
              </div>
              <Link href="/contact" className="inline-block bg-teal-600 text-white px-4 py-2 rounded-full text-sm hover:bg-teal-700 transition-colors mt-3">
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* Social Media & Links */}
        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <span className="text-sm">Follow Us:</span>
              <div className="flex space-x-3">
                <Link href="https://www.facebook.com/mdvdds/" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </Link>
                <Link href="https://www.healthgrades.com/dentist/dr-michael-vaughan-xg64s" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </Link>
                <Link href="https://www.linkedin.com/in/michael-vaughan-dds-fagd-76b96312/" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </Link>
                <Link href="https://maps.app.goo.gl/yvcj95Rat5BenYc79" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                </Link>
              </div>
            </div>
            <div className="text-sm text-center md:text-right">
              <p className="mb-2">
                © 2025 Michael D. Vaughan, DDS. All rights reserved.
              </p>
              <p>
                Powered by <Link href="https://dentalmarketingfromdayone.com/" className="text-teal-400 hover:text-teal-300 transition-colors">Dental Marketing from Day One</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}


