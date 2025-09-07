import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Special Needs Dentistry",
};

export default function SpecialNeedsDentistryPage() {
  return (
    <div className="bg-white">
      {/* Hero - OMS Nashville Style */}
      <section className="relative bg-gray-100 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-normal text-amber-700 mb-6">Special Needs Dentistry</h1>
              <div className="text-sm text-gray-600 mb-6">
                <Link href="/" className="hover:text-amber-700">Home</Link>
                <span className="mx-2">/</span>
                <Link href="/services" className="hover:text-amber-700">Procedures</Link>
                <span className="mx-2">/</span>
                <span>Special Needs Dentistry</span>
              </div>
            </div>
            <div className="relative h-64 lg:h-80">
              <Image src="/Interactions/_DSC4143.JPG" alt="Special Needs Dentistry" fill className="object-cover rounded-lg" priority />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content - OMS Nashville Article Style */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Introduction */}
              <div className="mb-12">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  We understand the unique needs of patients and we have the ability to accommodate those needs. 
                  Our practice delivers outstanding oral health services to patients with special needs and specializes 
                  in caring for individuals with intellectual and developmental disabilities.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  We believe all individuals deserve the same standards of oral health care, which is why our dedicated 
                  staff are trained to safely manage cases that are not typical to general dentistry.
                </p>
              </div>

              {/* Image Section */}
              <div className="mb-12">
                <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                  <Image 
                    src="/Interactions/_DSC4127.JPG" 
                    alt="Special needs dental care environment" 
                    fill 
                    className="object-cover" 
                  />
                </div>
              </div>

              {/* Who We Serve */}
              <div className="mb-12">
                <h2 className="text-3xl font-normal text-amber-700 mb-8">Who We Serve</h2>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-normal text-gray-900 mb-4">Patients with Neurodivergence</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      We provide specialized care for patients with autism spectrum disorders, ADHD, and other neurodivergent 
                      conditions. Our sensory-friendly environment and patient-centered approach ensure comfort and successful 
                      treatment outcomes.
                    </p>
                    <ul className="text-gray-700 space-y-2 ml-6">
                      <li>• Sensory-friendly environment with reduced stimuli</li>
                      <li>• Flexible appointment scheduling and extended time</li>
                      <li>• Visual aids and social stories for preparation</li>
                      <li>• Specialized communication strategies</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-normal text-gray-900 mb-4">Patients with Mental Challenges</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Our practice specializes in caring for individuals with intellectual and developmental disabilities. 
                      We believe all individuals deserve the same standards of oral health care.
                    </p>
                    <ul className="text-gray-700 space-y-2 ml-6">
                      <li>• Person-centered treatment planning</li>
                      <li>• Behavioral management techniques</li>
                      <li>• Caregiver involvement and education</li>
                      <li>• Simplified communication methods</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-normal text-gray-900 mb-4">Patients with Physical Challenges</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      We have a hoyer-lift to transfer patients with mobility difficulties into the dental chair. 
                      Our facility is fully accessible and designed to accommodate patients with various physical challenges.
                    </p>
                    <ul className="text-gray-700 space-y-2 ml-6">
                      <li>• Hoyer lift for safe patient transfers</li>
                      <li>• Wheelchair accessible facilities</li>
                      <li>• Modified positioning and support systems</li>
                      <li>• Additional staff assistance when needed</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-normal text-gray-900 mb-4">Patients with Fears of the Dentist</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      We specialize in treating patients who may require extra appointment time due to anxiety, phobia or 
                      treatment tolerance. For patients who require extensive work, we offer sedation dentistry options.
                    </p>
                    <ul className="text-gray-700 space-y-2 ml-6">
                      <li>• Sedation dentistry options available</li>
                      <li>• Anxiety management techniques</li>
                      <li>• Gradual treatment approaches</li>
                      <li>• Pre-visit consultations and tours</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Services We Offer */}
              <div className="mb-12">
                <h2 className="text-3xl font-normal text-amber-700 mb-8">What We Can Offer Patients with Special Needs</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <ul className="space-y-3 text-gray-700">
                    <li>• Comprehensive oral health assessments</li>
                    <li>• Preventive care and cleanings</li>
                    <li>• Restorative treatments</li>
                    <li>• Sedation dentistry options</li>
                  </ul>
                  <ul className="space-y-3 text-gray-700">
                    <li>• Person-centered treatment planning</li>
                    <li>• Caregiver education and support</li>
                    <li>• Mechanical lift for safe transfers</li>
                    <li>• Specialized equipment and accommodations</li>
                  </ul>
                </div>
              </div>

              {/* Unique Position */}
              <div className="bg-teal-700 text-white p-8 rounded-lg mb-12">
                <h2 className="text-2xl font-normal text-white mb-4">One of Only Two in Middle Tennessee</h2>
                <p className="text-teal-100 leading-relaxed mb-6">
                  Our practice is uniquely positioned as one of only two practices in Middle Tennessee offering 
                  comprehensive special needs dentistry with sedation options. This makes us a vital resource 
                  for families and caregivers throughout the region.
                </p>
                <Link 
                  href="/contact"
                  className="inline-block bg-white text-teal-700 px-6 py-3 rounded-full font-medium hover:bg-gray-50 transition-colors"
                >
                  Schedule Consultation
                </Link>
              </div>
            </div>

            {/* Sidebar - OMS Nashville Style */}
            <div className="lg:col-span-1">
              <div className="space-y-8">
                {/* Contact Card */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-normal text-gray-900 mb-4">Contact Information</h3>
                  <div className="space-y-3 text-gray-700">
                    <div>
                      <p className="font-medium">Phone</p>
                      <Link href="tel:+16159156090" className="text-teal-600 hover:text-teal-700">
                        (615) 915-6090
                      </Link>
                    </div>
                    <div>
                      <p className="font-medium">Office Location</p>
                      <p className="text-sm">330 Wallace Rd. #106<br/>Nashville, TN 37211</p>
                    </div>
                    <div>
                      <p className="font-medium">Office Hours</p>
                      <p className="text-sm">Monday - Friday: 7:30 AM–4 PM<br/>Saturday & Sunday: Closed</p>
                    </div>
                  </div>
                  <Link 
                    href="/contact"
                    className="inline-block w-full text-center bg-teal-600 text-white px-6 py-3 rounded-full font-medium hover:bg-teal-700 transition-colors mt-4"
                  >
                    Contact Us
                  </Link>
                </div>

                {/* Related Services */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-normal text-gray-900 mb-4">Related Services</h3>
                  <div className="space-y-3">
                    <Link href="/services/sedation-dentistry" className="block text-teal-600 hover:text-teal-700 transition-colors">
                      Sedation Dentistry
                    </Link>
                    <Link href="/services/dental-exams-cleanings" className="block text-teal-600 hover:text-teal-700 transition-colors">
                      Dental Exams & Cleanings
                    </Link>
                    <Link href="/services/root-canals" className="block text-teal-600 hover:text-teal-700 transition-colors">
                      Root Canals
                    </Link>
                    <Link href="/services/dentures" className="block text-teal-600 hover:text-teal-700 transition-colors">
                      Dentures
                    </Link>
                    <Link href="/services/extractions" className="block text-teal-600 hover:text-teal-700 transition-colors">
                      Extractions
                    </Link>
                  </div>
                </div>

                {/* Testimonial */}
                <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
                  <h3 className="text-lg font-normal text-amber-800 mb-3">Patient Feedback</h3>
                  <blockquote className="text-amber-700 text-sm leading-relaxed mb-3">
                    &ldquo;I frequent them often for dental services they provide my clients. Every staff is positive and caring, 
                    often times beyond the norm. It is nice to have a relationship with them. They also provide great dental care for my clients!&rdquo;
                  </blockquote>
                  <cite className="text-amber-600 text-xs font-medium">— Shannon B., Patient Caregiver</cite>
                </div>

                {/* Additional Info */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-normal text-gray-900 mb-4">Additional Information</h3>
                  <div className="space-y-3">
                    <Link href="/patient-forms" className="block text-teal-600 hover:text-teal-700 transition-colors">
                      Patient Forms
                    </Link>
                    <Link href="/faqs" className="block text-teal-600 hover:text-teal-700 transition-colors">
                      Frequently Asked Questions
                    </Link>
                    <Link href="/about" className="block text-teal-600 hover:text-teal-700 transition-colors">
                      About Dr. Vaughan
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}