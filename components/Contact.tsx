
import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Get In Touch</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Serving clients across all districts of Bangladesh. Contact our team today for a free consultation.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <h3 className="text-xl font-bold text-navy mb-6">Our Office</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-navy text-white rounded-lg flex items-center justify-center shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-navy">Main Office</p>
                    <p className="text-slate-600 text-sm">Block G, Road 3, Bashundhara R/A, Dhaka 1229, Bangladesh</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-navy text-white rounded-lg flex items-center justify-center shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-navy">Phone</p>
                    <p className="text-slate-600 text-sm">+880 17XX-XXXXXX</p>
                    <p className="text-slate-600 text-sm">+880 18XX-XXXXXX</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-navy text-white rounded-lg flex items-center justify-center shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-navy">Email</p>
                    <p className="text-slate-600 text-sm">info@bashundharabuilders.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-64 rounded-2xl overflow-hidden shadow-sm border border-slate-100">
              {/* Google Maps Placeholder */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14602.7003025215!2d90.41968843513686!3d23.812403914856056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c62fce7d991f%3A0xacf033838493cf00!2sBashundhara%20Residential%20Area!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className="lg:col-span-2">
            <form className="bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-slate-100" onSubmit={(e) => e.preventDefault()}>
              <h3 className="text-2xl font-bold text-navy mb-8">Send a Message</h3>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Full Name *</label>
                  <input 
                    type="text" 
                    placeholder="E.g. Tanvir Rahman"
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number *</label>
                  <input 
                    type="tel" 
                    placeholder="+880 1XXX-XXXXXX"
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-all"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                <input 
                  type="email" 
                  placeholder="name@email.com"
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-all"
                />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-bold text-slate-700 mb-2">Interest Type *</label>
                <select className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-all appearance-none bg-white">
                  <option>Buying an Apartment</option>
                  <option>Joint Venture Partnership</option>
                  <option>Turnkey Construction Inquiry</option>
                  <option>Commercial Space Rental</option>
                  <option>General Inquiry</option>
                </select>
              </div>
              <div className="mb-8">
                <label className="block text-sm font-bold text-slate-700 mb-2">Your Message</label>
                <textarea 
                  rows={4} 
                  placeholder="Tell us about your project or requirement..."
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-all resize-none"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-navy text-white px-8 py-4 rounded-lg font-bold hover:bg-slate-800 transition-all shadow-lg flex items-center justify-center gap-2 group"
              >
                Send Inquiry
                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
