import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Procedures",
};

// Service Icons - Simple SVG components to match OMS Nashville style
const SpecialNeedsIcon = () => (
  <svg className="w-16 h-16 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);

const SedationIcon = () => (
  <svg className="w-16 h-16 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
);

const ExamIcon = () => (
  <svg className="w-16 h-16 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const RootCanalIcon = () => (
  <svg className="w-16 h-16 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
  </svg>
);

const DentureIcon = () => (
  <svg className="w-16 h-16 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.01M15 10h1.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const ExtractionIcon = () => (
  <svg className="w-16 h-16 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export default function ServicesPage() {
  const services = [
    {
      title: "Special Needs Dentistry",
      description: "Specialized dental care for patients with neurodivergence, intellectual disabilities, physical challenges, and dental anxiety. One of only two practices in Middle Tennessee offering comprehensive special needs dentistry with sedation options.",
      icon: <SpecialNeedsIcon />,
      href: "/services/special-needs-dentistry",
    },
    {
      title: "Sedation Dentistry",
      description: "Safe and effective sedation options including oral sedation, nitrous oxide, and IV sedation to help patients with anxiety receive dental care in a comfortable, relaxed state.",
      icon: <SedationIcon />,
      href: "/services/sedation-dentistry",
    },
    {
      title: "Dental Exams & Cleanings",
      description: "Comprehensive dental examinations and professional cleanings in an accessible environment designed to accommodate patients with special needs and sensory sensitivities.",
      icon: <ExamIcon />,
      href: "/services/dental-exams-cleanings",
    },
    {
      title: "Root Canals",
      description: "Endodontic treatment to save infected or severely damaged teeth, performed with specialized techniques for patients with special needs and sedation options available.",
      icon: <RootCanalIcon />,
      href: "/services/root-canals",
    },
    {
      title: "Dentures",
      description: "Complete and partial dentures designed and fitted with extra care for patients with special needs, ensuring proper fit and comfort for enhanced quality of life.",
      icon: <DentureIcon />,
      href: "/services/dentures",
    },
    {
      title: "Extractions",
      description: "Tooth extractions performed with specialized techniques and sedation options to ensure patient comfort, particularly for those with dental anxiety or special needs.",
      icon: <ExtractionIcon />,
      href: "/services/extractions",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero - OMS Nashville Style */}
      <section className="relative bg-gray-100 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-normal text-amber-700 mb-6">Procedures</h1>
              <div className="text-sm text-gray-600 mb-6">
                <Link href="/" className="hover:text-amber-700">Home</Link>
                <span className="mx-2">/</span>
                <span>Procedures</span>
              </div>
            </div>
            <div className="relative h-64 lg:h-80">
              <Image src="/Details/_DSC4075.JPG" alt="Dental Office" fill className="object-cover rounded-lg" priority />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid - OMS Nashville Card Style */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={service.title} className="bg-white rounded-lg border border-gray-200 p-8 text-center hover:shadow-lg transition-shadow">
                {/* Icon Circle */}
                <div className="w-24 h-24 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  {service.icon}
                </div>
                
                {/* Service Title */}
                <h3 className="text-xl font-normal text-gray-900 mb-4">{service.title}</h3>
                
                {/* Service Description */}
                <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                  {service.description}
                </p>
                
                {/* Read More Button */}
                <Link 
                  href={service.href}
                  className="inline-block bg-teal-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-teal-700 transition-colors"
                >
                  READ MORE
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Helpful Links Section - OMS Style */}
      <section className="py-20 bg-teal-700 text-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-normal text-white mb-6">Helpful Links...</h2>
              <div className="h-1 w-20 bg-white mb-8"></div>
              <div className="space-y-4">
                <Link 
                  href="/patient-forms" 
                  className="block text-white hover:text-teal-200 font-normal text-lg transition-colors"
                >
                  Patient Forms  ——
                </Link>
                <Link 
                  href="/faqs" 
                  className="block text-white hover:text-teal-200 font-normal text-lg transition-colors"
                >
                  Read Reviews  ——
                </Link>
              </div>
            </div>
            <div className="relative h-64 lg:h-80">
              <Image 
                src="/Details/_DSC4072.JPG" 
                alt="Comfortable waiting area" 
                fill 
                className="object-cover rounded-lg" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Excellence Section - OMS Style */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-normal text-amber-700 mb-6">
            Excellence in Special Needs & Sedation Dentistry in Nashville and Nearby Cities in Tennessee
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-16 text-center max-w-4xl mx-auto">
            {["Nashville", "Brentwood", "Franklin", "Hendersonville", "Middle Tennessee"].map((location) => (
              <div key={location} className="border-r border-amber-300 last:border-r-0 pr-4">
                <h3 className="text-lg font-normal text-amber-700">{location}</h3>
              </div>
            ))}
          </div>
          
          <p className="text-lg text-gray-700 max-w-4xl mx-auto mb-12 leading-relaxed">
            For exceptional special needs and sedation dentistry in the Nashville area, patients trust Michael D. Vaughan, DDS. 
            Our practice specializes in providing compassionate care for patients with special needs, neurodivergence, and dental anxiety. 
            With our convenient Nashville location, we offer specialized accessibility and person-centered treatment. 
            To schedule a consultation regarding special needs dentistry, sedation options, or any other dental procedure, contact us today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-teal-600 text-white px-8 py-3 rounded-full hover:bg-teal-700 transition-colors font-medium">
              Schedule Consultation
            </Link>
            <Link href="tel:+16159156090" className="bg-amber-700 text-white px-8 py-3 rounded-full hover:bg-amber-800 transition-colors font-medium">
              Call Today: (615) 915-6090
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}


