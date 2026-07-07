import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Send, Phone, MapPin, Clock, Mail } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { base44 } from "@/api/base44Client";

export default function Contact() {
  const { toast } = useToast();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [sending, setSending] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      await base44.integrations.Core.SendEmail({
        to: "richardr@ogdenre.com",
        subject: `Leasing Inquiry from ${form.name}`,
        body: `Name: ${form.name}\nCompany: ${form.company}\nEmail: ${form.email}\nPhone: ${form.phone}\nInterested In: ${form.interest}\n\nMessage:\n${form.message}`,
      });
      toast({
        title: "Inquiry Received",
        description: "Our leasing team will be in touch within 24 hours.",
      });
      setForm({ name: "", company: "", email: "", phone: "", interest: "", message: "" });
    } catch (err) {
      toast({
        title: "Something went wrong",
        description: "We couldn't send your inquiry. Please try again or call us directly.",
        variant: "destructive",
      });
    } finally {
      setSending(false);
    }
  };

  const inputClass =
    "w-full bg-transparent border-b border-[#8E795E]/30 focus:border-[#8E795E] py-3 font-body text-base text-[#1A1A1A] placeholder:text-[#1A1A1A]/30 outline-none transition-colors";

  return (
    <section id="leasing" className="py-24 md:py-40 bg-[#F5F0E8]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="grid lg:grid-cols-2 gap-16 md:gap-24">
            {/* Left - Info */}
            <div>
              <span className="font-heading text-[10px] tracking-[0.4em] uppercase text-[#8E795E] block mb-4">
                Leasing Inquiries
              </span>
              <h2 className="font-heading font-black text-4xl md:text-5xl text-[#1A1A1A] tracking-tight mb-6">
                Secure Your Place<br />in History
              </h2>
              <p className="font-body text-[#1A1A1A]/70 text-base md:text-lg leading-[1.7] mb-12">
                Whether you're seeking a distinguished office address, a character-rich retail 
                space, or a creative studio wrapped in 130 years of Milwaukee heritage — 
                the Steinmeyer Building has a space that matches your ambition.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin size={18} className="text-[#8E795E] mt-1 shrink-0" />
                  <div>
                    <span className="font-heading text-xs tracking-[0.1em] uppercase text-[#1A1A1A]/50 block mb-1">
                      Address
                    </span>
                    <p className="font-body text-[#1A1A1A]">
                      205 West Highland Avenue<br />Milwaukee, WI 53203
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone size={18} className="text-[#8E795E] mt-1 shrink-0" />
                  <div>
                    <span className="font-heading text-xs tracking-[0.1em] uppercase text-[#1A1A1A]/50 block mb-1">
                      Leasing Office
                    </span>
                    <a href="tel:+14142701351" className="font-body text-[#1A1A1A] hover:text-[#8E795E] transition-colors">
                      (414) 270-1351
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail size={18} className="text-[#8E795E] mt-1 shrink-0" />
                  <div>
                    <span className="font-heading text-xs tracking-[0.1em] uppercase text-[#1A1A1A]/50 block mb-1">
                      Email
                    </span>
                    <a href="mailto:richardr@ogdenre.com" className="font-body text-[#1A1A1A] hover:text-[#8E795E] transition-colors">
                      richardr@ogdenre.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock size={18} className="text-[#8E795E] mt-1 shrink-0" />
                  <div>
                    <span className="font-heading text-xs tracking-[0.1em] uppercase text-[#1A1A1A]/50 block mb-1">
                      Showings
                    </span>
                    <p className="font-body text-[#1A1A1A]">
                      Visit listing page for details
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Form */}
            <div className="border border-[#8E795E]/20 p-8 md:p-12 bg-[#FDFCF8]">
              <h3 className="font-heading font-bold text-xs tracking-[0.3em] uppercase text-[#8E795E] mb-10">
                Inquiry Form
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <input
                    name="name"
                    placeholder="Full Name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className={inputClass}
                  />
                  <input
                    name="company"
                    placeholder="Company"
                    value={form.company}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <input
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className={inputClass}
                  />
                  <input
                    name="phone"
                    type="tel"
                    placeholder="Phone"
                    value={form.phone}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
                <select
                  name="interest"
                  value={form.interest}
                  onChange={handleChange}
                  required
                  className={`${inputClass} appearance-none`}
                >
                  <option value="" disabled>
                    I'm interested in…
                  </option>
                  <option value="office">Office Space</option>
                  <option value="retail">Retail Space</option>
                  <option value="creative">Creative Studio</option>
                  <option value="full-floor">Full Floor Lease</option>
                  <option value="tour">Building Tour</option>
                </select>
                <textarea
                  name="message"
                  placeholder="Tell us about your vision for this space…"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  className={`${inputClass} resize-none`}
                />
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full flex items-center justify-center gap-3 font-heading text-xs tracking-[0.2em] uppercase py-4 bg-[#1A1A1A] text-[#FDFCF8] hover:bg-[#8E795E] disabled:opacity-50 transition-colors duration-300"
                >
                  {sending ? (
                    <div className="w-4 h-4 border-2 border-[#FDFCF8]/30 border-t-[#FDFCF8] rounded-full animate-spin" />
                  ) : (
                    <>
                      Submit Inquiry <Send size={14} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}