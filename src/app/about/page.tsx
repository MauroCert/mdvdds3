import Image from "next/image";
import Link from "next/link";
import { CheckIcon } from "@heroicons/react/24/outline";

export const metadata = {
  title: "About Our Practice",
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero - OMS Nashville Style */}
      <section className="relative bg-gray-100 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-normal text-amber-700 mb-6">About Our Practice</h1>
              <div className="text-sm text-gray-600 mb-6">
                <Link href="/" className="hover:text-amber-700">Home</Link>
                <span className="mx-2">/</span>
                <span>About Our Practice</span>
              </div>
              <Link href="/contact" className="inline-block bg-teal-600 text-white px-8 py-3 rounded-full hover:bg-teal-700 transition-colors font-medium">
                Contact
              </Link>
            </div>
            <div className="relative h-64 lg:h-80">
              <Image src="/Details/_DSC4072.JPG" alt="Office" fill className="object-cover rounded-lg" priority />
            </div>
          </div>
        </div>
      </section>

      {/* Our History - OMS Nashville Style */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-normal text-amber-700 mb-8">Our History</h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              <strong>Michael D. Vaughan, DDS</strong> has provided the highest quality of Special Needs & Sedation Dentistry care to patients in Nashville and surrounding communities. We pledge to offer procedures using the latest technology in a safe, comfortable, and relaxed setting that is minimally invasive to our patients.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Our experience ranges from comprehensive dental care for patients with special needs to sedation dentistry for those with dental anxiety. By working closely with our referring doctors, we employ a team approach to ensure the most accurate diagnosis and treatment.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-12">
              Dr. Vaughan specializes in caring for individuals with intellectual and developmental disabilities, neurodivergence, physical challenges, and dental anxiety. Our practice is uniquely positioned as one of only two practices in Middle Tennessee offering comprehensive special needs dentistry with sedation options.
            </p>
          </div>
        </div>
      </section>

      {/* Development Section - OMS Style */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-normal text-amber-700 mb-8">The Development</h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Dr. Michael D. Vaughan maintains a strong commitment to the treatment and care of the community with a convenient Nashville location to better serve the needs of patients with special needs. He is affiliated with local hospitals and healthcare providers where he serves as a specialist in special needs dentistry.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              The highly trained staff at our practice is chosen for their compassion in addition to their skills, and are experienced in working with patients who have special needs. All staff members are certified and experienced in providing care for patients with various disabilities and challenges.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Our mission is to improve the oral health of patients with special needs in Middle Tennessee through access to affordable, quality dental care and oral disease prevention services in a specialized, accommodating environment.
            </p>
          </div>
        </div>
      </section>

      {/* A Team That Cares - OMS Nashville Style */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-normal text-amber-700 mb-8">A Team That Cares</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Dr. Vaughan Card */}
            <div className="text-center">
              <div className="relative w-64 h-80 mx-auto mb-6 rounded-lg overflow-hidden shadow-lg">
                <Image 
                  src="/Headshots/e3_DSC4189.JPG" 
                  alt="Dr. Michael D. Vaughan" 
                  fill 
                  className="object-cover object-top" 
                />
              </div>
              <h3 className="text-xl font-normal text-gray-900 mb-2">Dr. Michael D. Vaughan</h3>
              <p className="text-gray-600 text-sm">Meet Your Doctor</p>
            </div>
            
            {/* Team Member Cards */}
            <div className="text-center">
              <div className="relative w-64 h-80 mx-auto mb-6 rounded-lg overflow-hidden shadow-lg">
                <Image 
                  src="/Interactions/_DSC4116.JPG" 
                  alt="Our caring team member" 
                  fill 
                  className="object-cover" 
                />
              </div>
              <h3 className="text-xl font-normal text-gray-900 mb-2">Our Team</h3>
              <p className="text-gray-600 text-sm">Compassionate Care Specialists</p>
            </div>
            
            <div className="text-center">
              <div className="relative w-64 h-80 mx-auto mb-6 rounded-lg overflow-hidden shadow-lg">
                <Image 
                  src="/Interactions/_DSC4119.JPG" 
                  alt="Patient care specialist" 
                  fill 
                  className="object-cover" 
                />
              </div>
              <h3 className="text-xl font-normal text-gray-900 mb-2">Patient Care</h3>
              <p className="text-gray-600 text-sm">Specialized Support Staff</p>
            </div>
          </div>
          
          <div className="text-center">
            <Link 
              href="/about/team"
              className="inline-flex items-center bg-teal-600 text-white px-8 py-3 rounded-full hover:bg-teal-700 transition-colors font-medium"
            >
              MEET THE TEAM
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Helpful Links Section - OMS Style */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-normal text-amber-700 mb-8">Helpful Links</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <Link 
              href="/patient-forms" 
              className="block text-center text-teal-600 hover:text-teal-700 font-medium text-lg transition-colors"
            >
              Patient Forms
            </Link>
            <Link 
              href="/faqs" 
              className="block text-center text-teal-600 hover:text-teal-700 font-medium text-lg transition-colors"
            >
              Read Reviews
            </Link>
          </div>
        </div>
      </section>

      {/* Excellence Section - OMS Style */}
      <section className="py-20 bg-teal-700 text-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-normal mb-6">
            Excellence in Special Needs & Sedation Dentistry in Nashville and Middle Tennessee
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-16 text-center max-w-4xl mx-auto">
            {["Nashville", "Brentwood", "Franklin", "Hendersonville", "Middle Tennessee"].map((location) => (
              <div key={location} className="border-r border-teal-500 last:border-r-0 pr-4">
                <h3 className="text-lg font-normal text-white">{location}</h3>
              </div>
            ))}
          </div>
          
          <p className="text-lg text-teal-100 max-w-4xl mx-auto mb-12 leading-relaxed">
            For exceptional special needs and sedation dentistry in the Nashville area, patients trust Michael D. Vaughan, DDS. 
            Our practice specializes in providing compassionate care for patients with special needs. With our convenient Nashville location, 
            we offer specialized accessibility. To schedule a consultation regarding special needs dentistry, sedation options, 
            or any other dental procedure, contact us today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-teal-600 px-8 py-3 rounded-full hover:bg-gray-50 transition-colors font-medium">
              Schedule Consultation
            </Link>
            <Link href="tel:+16159156090" className="bg-teal-800 text-white px-8 py-3 rounded-full hover:bg-teal-900 transition-colors font-medium border border-teal-600">
              Call Today: (615) 915-6090
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}


