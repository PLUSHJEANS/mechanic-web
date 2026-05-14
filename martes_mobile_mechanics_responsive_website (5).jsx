import { useState } from 'react'

const company = {
  name: "Marte's Mobile Mechanics",
  phone: '(470) 965-1317',
  phoneHref: 'tel:4709651317',
  smsHref: 'sms:4709651317',
  whatsappHref: 'https://wa.me/14709651317',
  email: 'MARTESMOBILE@GMAIL.COM',
  serviceArea: 'Miami-Dade County',
}

const services = [
  ['Mobile Diagnostics', 'On-site troubleshooting for warning lights, no-starts, drivability issues, electrical concerns, and performance problems.'],
  ['Brake Jobs', 'Brake pad, rotor, caliper, hose, and brake system inspections completed at your location.'],
  ['Oil Changes', 'Convenient oil and filter service for gas and diesel vehicles without visiting a repair shop.'],
  ['Suspension Repair', 'Inspection and repair support for shocks, struts, control arms, steering components, and ride issues.'],
  ['Preventive Maintenance', 'Scheduled maintenance for personal vehicles, work trucks, fleets, and equipment to reduce downtime.'],
  ['DEF & Emissions Repairs', 'Diesel DEF, aftertreatment, emissions warning, derate, and related diagnostic support.'],
  ['Diesel Equipment Service', 'Mobile support for diesel trucks, commercial units, and job-site equipment.'],
  ['Roadside Repairs', 'Fast mobile service when your vehicle or equipment cannot easily be moved.'],
  ['Fleet Maintenance', 'Ongoing maintenance support for businesses that need vehicles and equipment operating reliably.'],
]

const serviceCities = [
  'Miami',
  'Hialeah',
  'Doral',
  'Kendall',
  'Homestead',
  'Coral Gables',
  'Miami Gardens',
  'Florida City',
]

const trustItems = [
  ['Upfront Service Information', 'Call before service to discuss the vehicle issue, location, availability, and next steps.'],
  ['24/7 Mobile Service', 'Day and night mobile service availability for drivers, fleets, and equipment owners across Miami-Dade County.'],
  ['Workmanship Support', 'Warranty details can be confirmed before each repair based on service and parts used.'],
]

const faqs = [
  ['Do you come to my location?', "Yes. Marte's Mobile Mechanics provides mobile service at homes, offices, roadside locations, fleet yards, and job sites throughout Miami-Dade County."],
  ['Do you work on gas and diesel vehicles?', 'Yes. We service gas and diesel vehicles, trucks, and equipment, including diagnostics, preventive maintenance, DEF concerns, and emissions-related issues.'],
  ['How do I get an estimate?', 'Call the company directly with your vehicle, mileage, location, and issue details so the repair request can be reviewed.'],
  ['Is there a diagnostic or travel fee?', 'A diagnostic, travel, or inspection fee may apply depending on location and service needs. The final amount should be confirmed before dispatch.'],
  ['What payment methods do you accept?', 'Payment options can be confirmed when calling to schedule service.'],
  ['Do you support fleets?', 'Yes. Fleet maintenance and recurring service can be scheduled for businesses that need reliable vehicle and equipment uptime.'],
]

const socialLinks = [
  { label: 'IG', name: 'Instagram', href: '#contact' },
  { label: 'FB', name: 'Facebook', href: '#contact' },
  { label: 'TT', name: 'TikTok', href: '#contact' },
]

export default function MartesMobileMechanicsWebsite() {
  const [chatOpen, setChatOpen] = useState(false)

  const renderSocialLinks = (compact = false) => (
    <div className={compact ? 'flex items-center gap-3' : 'flex flex-wrap gap-4'}>
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.href}
          title={`Add your real ${social.name} profile link before launch`}
          className={
            compact
              ? 'w-10 h-10 rounded-full bg-white/10 hover:bg-red-600 transition flex items-center justify-center text-sm font-bold'
              : 'bg-white/10 hover:bg-red-600 transition px-5 py-3 rounded-2xl font-semibold'
          }
        >
          {compact ? social.label : social.name}
        </a>
      ))}
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl lg:text-3xl font-black tracking-tight text-white">
              Marte&apos;s Mobile Mechanics
            </h1>
            <p className="text-xs uppercase tracking-[0.3em] text-red-500 font-semibold">
              Mobile Auto Repair
            </p>
          </div>

          <div className="hidden md:flex items-center gap-6 text-white font-medium">
            <a href="#services" className="hover:text-red-500 transition">
              Services
            </a>
            <a href="#service-area" className="hover:text-red-500 transition">
              Service Area
            </a>
            <a href="#faq" className="hover:text-red-500 transition">
              FAQ
            </a>
            <a href="#contact" className="hover:text-red-500 transition">
              Contact
            </a>
            {renderSocialLinks(true)}
            <a
              href={company.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="bg-green-600 hover:bg-green-700 transition px-5 py-2 rounded-full shadow-lg"
            >
              WhatsApp {company.phone}
            </a>
            <a
              href={company.phoneHref}
              className="bg-red-600 hover:bg-red-700 transition px-5 py-2 rounded-full shadow-lg"
            >
              Text Or Call
            </a>
          </div>
        </div>
      </nav>

      <header className="relative bg-black text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=2070&q=80')",
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-40 pb-24 lg:pt-48 lg:pb-36 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="mb-4 inline-block bg-red-600 px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase shadow-lg">
              Mobile Mechanic Services
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight mb-6 tracking-tight">
              Marte&apos;s Mobile Mechanics
            </h1>
            <h2 className="text-3xl lg:text-5xl font-bold text-red-500 mb-6 leading-tight">
              Mechanics That Come To You
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed">
              Professional gas and diesel engine diagnostics, maintenance, roadside assistance, and repairs delivered directly to your location 24/7 across Miami-Dade County.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <a
                href={company.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white transition px-6 py-3 rounded-2xl font-bold shadow-xl border border-green-500"
              >
                WhatsApp {company.phone}
              </a>
              <a
                href={company.phoneHref}
                className="bg-white text-black hover:bg-gray-200 transition px-6 py-3 rounded-2xl font-bold shadow-xl border border-white animate-pulse"
              >
                NEED HELP? TEXT OR CALL US {company.phone}
              </a>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-2xl rounded-3xl p-8 shadow-2xl border border-white/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-red-600/20 rounded-full blur-3xl" />
            <h2 className="text-2xl font-semibold mb-6 text-white">Why Drivers Trust Us</h2>
            <ul className="space-y-4 text-gray-100 relative z-10">
              <li>✔ On-site diagnostics & repairs</li>
              <li>✔ Gas & diesel vehicles/equipment</li>
              <li>✔ Fast scheduling and mobile service</li>
              <li>✔ Preventive maintenance & fleet support</li>
              <li>✔ A/C systems diagnostics</li>
              <li>✔ DEF and emissions repair specialists</li>
            </ul>
          </div>
        </div>
      </header>

      <section id="services" className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <div className="inline-block bg-black text-white px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide mb-4">
            What We Do
          </div>
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Professional mobile mechanic services for personal vehicles, commercial trucks, and equipment.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(([title, description]) => (
            <div
              key={title}
              className="bg-white rounded-3xl p-6 shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300 border border-gray-100"
            >
              <h3 className="text-xl font-semibold mb-3">{title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-black text-white border-t border-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-block bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide mb-4">
              Trust & Protection
            </div>
            <h2 className="text-4xl lg:text-5xl font-black mb-4">
              Clear Service. Professional Support.
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto text-lg">
              Built to answer the questions customers usually have before booking mobile mechanic service.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {trustItems.map(([title, description]) => (
              <div key={title} className="bg-white/10 border border-white/10 rounded-3xl p-6 shadow-xl">
                <h3 className="text-xl font-bold mb-3">{title}</h3>
                <p className="text-gray-300 leading-relaxed text-sm">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-100 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-block bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide mb-4">
              Fleet Support
            </div>
            <h2 className="text-4xl lg:text-5xl font-black mb-5">
              Mobile Maintenance For Work Trucks, Fleets & Equipment
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Reduce downtime with mobile diagnostics, maintenance, brake work, oil services, diesel repairs, and equipment support scheduled around your operation.
            </p>
            <a
              href={company.phoneHref}
              className="inline-flex bg-black hover:bg-gray-800 text-white px-6 py-4 rounded-2xl font-bold transition shadow-lg"
            >
              Text Or Call For Fleet Service
            </a>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {['Recurring maintenance', 'Diesel diagnostics', 'Job-site equipment support', 'Commercial vehicle service'].map((feature) => (
              <div key={feature} className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
                <div className="text-3xl mb-4">✔</div>
                <h3 className="font-bold text-lg">{feature}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="inline-block bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide mb-4">
            Get Service
          </div>
          <h2 className="text-4xl lg:text-5xl font-black mb-4">
            Text Or Call To Request An Estimate Or Book Service
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-8">
            Customer forms have been removed from the website. Please text or call directly so we can confirm your vehicle issue, location, availability, and service details.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={company.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-2xl text-lg font-bold shadow-lg transition"
            >
              WhatsApp {company.phone}
            </a>
            <a
              href={company.phoneHref}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-2xl text-lg font-bold shadow-lg transition"
            >
              Text Or Call {company.phone}
            </a>
            <a
              href="#contact"
              className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-2xl text-lg font-bold shadow-lg transition"
            >
              View Contact Info
            </a>
          </div>
        </div>
      </section>

      <section id="service-area" className="py-20 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-block bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide mb-4">
              Service Area
            </div>
            <h2 className="text-4xl lg:text-5xl font-black mb-4">
              Proudly Serving Miami-Dade County
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
              Marte&apos;s Mobile Mechanics provides fast 24/7 mobile mechanic and roadside services throughout Miami-Dade County including Miami, Hialeah, Kendall, Doral, Homestead, and surrounding areas.
            </p>
          </div>

          <div className="overflow-hidden rounded-[2rem] shadow-2xl border border-gray-200 mb-10">
            <iframe
              title="Miami-Dade County Map"
              src="https://www.google.com/maps?q=Miami-Dade+County,+Florida&output=embed"
              width="100%"
              height="500"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {serviceCities.map((city) => (
              <div
                key={city}
                className="bg-black text-white rounded-2xl p-5 text-center font-semibold shadow-lg hover:bg-red-600 transition duration-300"
              >
                {city}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-100 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-block bg-black text-white px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide mb-4">
              Customer Reviews
            </div>
            <h2 className="text-4xl lg:text-5xl font-black mb-4">Reviews Section Ready</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Real customer reviews should be connected from your Google Business Profile, Facebook page, or manually added after customers approve them.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {['Add Google review here', 'Add fleet customer review here', 'Add roadside service review here'].map((reviewSlot) => (
              <div key={reviewSlot} className="bg-white rounded-[2rem] shadow-lg border border-gray-200 p-6">
                <div className="text-red-600 text-2xl mb-4">★★★★★</div>
                <h3 className="font-bold text-lg mb-3">{reviewSlot}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Replace this placeholder with a real customer testimonial before publishing the live website.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 bg-white border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-block bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide mb-4">
              FAQ
            </div>
            <h2 className="text-4xl lg:text-5xl font-black mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-5">
            {faqs.map(([question, answer]) => (
              <div key={question} className="bg-gray-50 rounded-3xl border border-gray-200 p-6 shadow-sm">
                <h3 className="font-bold text-xl mb-3">{question}</h3>
                <p className="text-gray-600 leading-relaxed">{answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-black text-white py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Marte&apos;s Mobile Mechanics</h3>
            <p className="text-gray-400 leading-relaxed">
              Reliable mobile mechanic services for drivers, fleets, and equipment owners.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">Business Hours</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Monday - Sunday: 24/7 Mobile Service</li>
              <li>Available Day & Night</li>
              <li>Roadside Assistance Available</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Phone: {company.phone}</li>
              <li>
                <a href={company.whatsappHref} target="_blank" rel="noreferrer" className="text-green-400 hover:text-green-300 transition">
                  WhatsApp: {company.phone}
                </a>
              </li>
              <li>Email: {company.email}</li>
              <li>Serving {company.serviceArea}</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
            {renderSocialLinks(false)}
            <p className="text-xs text-gray-500 mt-4">
              Replace placeholder social links with your real profiles before launch.
            </p>
          </div>
        </div>
      </section>

      <div className="fixed bottom-6 right-6 z-50">
        {chatOpen && (
          <div className="w-[340px] max-w-[calc(100vw-2rem)] bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden mb-4">
            <div className="bg-black text-white p-4 flex items-center justify-between">
              <div>
                <h3 className="font-bold text-lg">Marte&apos;s Support</h3>
                <p className="text-xs text-gray-300">Text or call us directly • 24/7 Service</p>
              </div>
              <button
                type="button"
                onClick={() => setChatOpen(false)}
                aria-label="Close chat"
                className="hover:bg-white/10 p-2 rounded-full transition text-xl"
              >
                ✕
              </button>
            </div>

            <div className="p-4 space-y-4 bg-gray-50">
              <div className="bg-white rounded-2xl p-4 shadow-sm">
                👋 Need mobile mechanic help? Customer forms are removed. Please text or call us directly for service.
              </div>
              <div className="grid grid-cols-3 gap-3">
                <a
                  href={company.whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="block text-center bg-green-600 hover:bg-green-700 text-white px-4 py-4 rounded-2xl font-bold transition"
                >
                  WhatsApp
                </a>
                <a
                  href={company.smsHref}
                  className="block text-center bg-red-600 hover:bg-red-700 text-white px-4 py-4 rounded-2xl font-bold transition"
                >
                  Text
                </a>
                <a
                  href={company.phoneHref}
                  className="block text-center bg-black hover:bg-gray-800 text-white px-4 py-4 rounded-2xl font-bold transition"
                >
                  Call
                </a>
              </div>
              <a
                href="#contact"
                onClick={() => setChatOpen(false)}
                className="block text-center bg-black hover:bg-gray-800 text-white px-5 py-4 rounded-2xl font-bold transition"
              >
                View Contact Info
              </a>
            </div>
          </div>
        )}

        <button
          type="button"
          onClick={() => setChatOpen(!chatOpen)}
          aria-label="Open contact help"
          className="bg-green-600 hover:bg-green-700 text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-transform hover:scale-110 text-3xl"
        >
          ☎
        </button>
      </div>
    </div>
  )
}
