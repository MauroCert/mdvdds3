import Image from "next/image";
import Link from "next/link";
import { PlayIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero - OMS Nashville Style */}
      <section className="relative h-screen bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/Interactions/_DSC4059.JPG" alt="Dental office" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          {/* Logo */}
          <div className="mb-8">
            <div className="flex items-center space-x-4 text-white">
              <div className="w-20 h-20 bg-white/30 rounded border border-white/40 backdrop-blur-sm flex items-center justify-center p-3">
                <Image 
                  src="/images/logo.png" 
                  alt="Michael D. Vaughan, DDS Logo" 
                  width={56} 
                  height={56} 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h1 className="text-3xl font-medium text-white drop-shadow-2xl" style={{textShadow: '2px 2px 8px rgba(0,0,0,0.8), 0 0 16px rgba(0,0,0,0.5)'}}>Michael D. Vaughan, DDS</h1>
                <p className="text-lg text-white font-medium drop-shadow-xl" style={{textShadow: '1px 1px 6px rgba(0,0,0,0.8), 0 0 12px rgba(0,0,0,0.4)'}}>SPECIAL NEEDS & SEDATION DENTISTRY</p>
              </div>
            </div>
          </div>

          {/* Play Button */}
          <button className="flex items-center justify-center w-16 h-16 bg-white/30 rounded-full border-2 border-white/60 hover:bg-white/40 hover:border-white/80 transition-all mb-12 backdrop-blur-sm drop-shadow-lg">
            <PlayIcon className="w-6 h-6 ml-1 text-white drop-shadow-md" />
          </button>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 text-center max-w-4xl">
            <div>
              <div className="text-4xl md:text-5xl font-light text-white mb-2 drop-shadow-2xl" style={{textShadow: '2px 2px 8px rgba(0,0,0,0.9), 0 0 16px rgba(0,0,0,0.6)'}}>1,000+</div>
              <div className="text-sm md:text-base text-white font-medium uppercase tracking-wide drop-shadow-xl" style={{textShadow: '1px 1px 6px rgba(0,0,0,0.8)'}}>Special Needs Patients Served</div>
            </div>
            <div className="relative">
              <div className="hidden md:block absolute left-0 top-0 bottom-0 w-px bg-white/40 drop-shadow-sm"></div>
              <div className="text-4xl md:text-5xl font-light text-white mb-2 drop-shadow-2xl" style={{textShadow: '2px 2px 8px rgba(0,0,0,0.9), 0 0 16px rgba(0,0,0,0.6)'}}>1</div>
              <div className="text-sm md:text-base text-white font-medium uppercase tracking-wide drop-shadow-xl" style={{textShadow: '1px 1px 6px rgba(0,0,0,0.8)'}}>Convenient Location</div>
              <div className="hidden md:block absolute right-0 top-0 bottom-0 w-px bg-white/40 drop-shadow-sm"></div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-light text-white mb-2 drop-shadow-2xl" style={{textShadow: '2px 2px 8px rgba(0,0,0,0.9), 0 0 16px rgba(0,0,0,0.6)'}}>25+ Years</div>
              <div className="text-sm md:text-base text-white font-medium uppercase tracking-wide drop-shadow-xl" style={{textShadow: '1px 1px 6px rgba(0,0,0,0.8)'}}>of Specialized Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Excellence Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-normal text-gray-900 mb-6">
            Excellence in Special Needs Dentistry in the Nashville Area
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            At Michael D. Vaughan, DDS, we&apos;re committed to providing our patients with quality services and care. We set the highest 
            standards of patient care and support by leveraging our experience, diverse skill set, and knowledge base.
          </p>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-12">
            Our specialists use state-of-the-art technology and modern resources to ensure that you have a pleasant and rewarding 
            experience. We take the time to listen to your needs or concerns and answer any questions that you may have regarding a particular procedure.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex items-center justify-center text-gray-700">
              <span>• A high-comfort setting featuring the latest technology</span>
            </div>
            <div className="flex items-center justify-center text-gray-700">
              <span>• A team of experienced, professional, and friendly staff</span>
            </div>
            <div className="flex items-center justify-center text-gray-700">
              <span>• Quality of service, excellence, and your comfort are our top priorities</span>
            </div>
          </div>

          <Link href="/about" className="inline-flex items-center px-8 py-3 bg-amber-100 text-amber-800 rounded-full hover:bg-amber-200 transition-colors font-medium">
            Learn About Our Practice
          </Link>
        </div>
      </section>

      {/* Our Doctor Listens & Deeply Care - OMS Style */}
      <section className="py-20 bg-teal-700 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/Interactions/_DSC4116.JPG" alt="Our team" fill className="object-cover" />
          <div className="absolute inset-0 bg-teal-900/80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-lg text-teal-200 mb-4">Our</div>
              <h2 className="text-5xl font-normal mb-4">
                Doctor
                <br />
                <span className="italic">Listens & Deeply</span>
                <br />
                Care
              </h2>
            </div>
            <div>
              <h3 className="text-xl font-normal text-white mb-6">
                Our highly trained staff is chosen for their compassion in addition to their skills
              </h3>
              <p className="text-lg text-teal-100 leading-relaxed">
                We have a team of highly trained and experienced professionals who genuinely want to improve your health and wellbeing. 
                We have earned a reputation for employing amazing staff who are not only skilled, but also highly compassionate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Doctor Profile */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block">
              <div className="w-48 h-48 mx-auto rounded-full overflow-hidden shadow-lg mb-6">
                <Image src="/Headshots/e3_DSC4189.JPG" alt="Dr. Michael D. Vaughan" width={192} height={192} className="w-full h-full object-cover object-top" />
              </div>
              <h3 className="text-2xl font-normal text-gray-900 mb-2">Dr. Michael D. Vaughan</h3>
              <Link href="/about" className="text-teal-600 hover:text-teal-700 font-medium">
                Meet Your Doctor
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services Cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Special Needs Dentistry",
                href: "/services/special-needs-dentistry",
                img: "/Interactions/_DSC4103.JPG",
                desc: "Specialized care for patients with neurodivergence, mental and physical challenges, and dental anxiety.",
                cta: "Special Needs Overview",
              },
              {
                title: "Sedation Dentistry", 
                href: "/services/sedation-dentistry",
                img: "/Interactions/_DSC4128.JPG",
                desc: "Safe sedation options for anxious patients to receive dental care in comfort.",
                cta: "Sedation Overview",
              },
              {
                title: "General Dentistry",
                href: "/services",
                img: "/Details/_DSC4070.JPG", 
                desc: "Exams, cleanings, root canals, dentures, and extractions in an accessible environment.",
                cta: "All Services Overview",
              },
            ].map((s) => (
              <div key={s.title} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <Image src={s.img} alt={s.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-normal text-gray-900 mb-3">{s.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{s.desc}</p>
                  <Link href={s.href} className="text-teal-600 hover:text-teal-700 font-medium">
                    {s.cta} →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Quote - OMS Style */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="text-6xl text-gray-300 mb-4">&ldquo;</div>
              <blockquote className="text-2xl lg:text-3xl font-normal text-gray-900 mb-6 leading-relaxed">
                I highly recommend this dental practice to anyone looking for reliable procedures. The entire team is professional, friendly, and highly efficient...
              </blockquote>
              <p className="text-gray-600 mb-8">
                We appreciate our patients and their loyalty. The positive feedback we receive inspires us to always improve the quality of our services
              </p>
              <button className="px-6 py-3 bg-amber-700 text-white rounded-full hover:bg-amber-800 transition-colors font-medium">
                READ OUR REVIEWS
              </button>
            </div>
            <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
              <Image src="/Interactions/_DSC4119.JPG" alt="Patient care" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
