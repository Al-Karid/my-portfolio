"use client";

import { MailIcon, PhoneIcon, LocationIcon, DownloadIcon } from "./Icons";

const email = process.env.NEXT_PUBLIC_EMAIL || "grencisse@gmail.com";
const phone = process.env.NEXT_PUBLIC_PHONE || "+2250757947428";
const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "22507579474428";

// Format phone number for display with spaces
const formatPhoneDisplay = (phoneNumber: string) => {
  // Remove all non-digits except + 
  const cleaned = phoneNumber.replace(/\D/g, "");
  // Add spaces: +225 07 57 947 428
  if (cleaned.startsWith("225")) {
    return `+${cleaned.slice(0, 3)} ${cleaned.slice(3, 5)} ${cleaned.slice(5, 7)} ${cleaned.slice(7, 10)} ${cleaned.slice(10)}`;
  }
  // Fallback for other formats
  return phoneNumber;
};

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 max-w-4xl mx-auto text-center">
      <div className="mb-12">
        <p className="text-[#6c63ff] text-sm font-semibold uppercase tracking-widest mb-3">Let&apos;s Talk</p>
        <h2 className="section-title text-white">Get In Touch</h2>
        <div className="section-divider w-24 mt-4 mx-auto mb-6" />
        <p className="text-[#8888aa] text-base max-w-xl mx-auto leading-relaxed">
          I&apos;m open to new opportunities, collaborations, or just a good chat about tech.
          Reach out — I reply promptly.
        </p>
      </div>

      {/* Contact cards */}
      <div className="grid sm:grid-cols-3 gap-4 mb-12">
        <a
          href={`mailto:${email}`}
          className="card p-6 flex flex-col items-center gap-3 hover:border-[#6c63ff]/50 transition-all group"
        >
          <div className="w-12 h-12 rounded-full bg-[#6c63ff]/10 border border-[#6c63ff]/25 flex items-center justify-center group-hover:bg-[#6c63ff]/20 transition-colors">
            <MailIcon className="w-6 h-6 text-[#6c63ff]" />
          </div>
          <div>
            <p className="text-xs text-[#6666aa] uppercase tracking-wider mb-1">Email</p>
            <p className="text-white text-sm font-medium">{email}</p>
          </div>
        </a>

        <a
          href={`tel:${phone}`}
          className="card p-6 flex flex-col items-center gap-3 hover:border-[#43e97b]/50 transition-all group"
        >
          <div className="w-12 h-12 rounded-full bg-[#43e97b]/10 border border-[#43e97b]/25 flex items-center justify-center group-hover:bg-[#43e97b]/20 transition-colors">
            <PhoneIcon className="w-6 h-6 text-[#43e97b]" />
          </div>
          <div>
            <p className="text-xs text-[#6666aa] uppercase tracking-wider mb-1">Phone</p>
            <p className="text-white text-sm font-medium">{formatPhoneDisplay(phone)}</p>
          </div>
        </a>

        <div className="card p-6 flex flex-col items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-[#ff6584]/10 border border-[#ff6584]/25 flex items-center justify-center">
            <LocationIcon className="w-6 h-6 text-[#ff6584]" />
          </div>
          <div>
            <p className="text-xs text-[#6666aa] uppercase tracking-wider mb-1">Location</p>
            <p className="text-white text-sm font-medium">Abidjan, Côte d&apos;Ivoire</p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#6c63ff] text-white font-semibold text-base hover:bg-[#5a52e0] transition-all shadow-lg animate-pulse-glow"
      >
        <span>Send Me a Message</span>
        <span>→</span>
      </a>

      {/* Download CVs */}
      <div className="mt-12">
        <p className="text-[#6666aa] text-sm mb-5">Download my CVs</p>
        <div className="flex flex-wrap justify-center gap-3">
          {[
            { label: "Data Scientist / Engineer", file: "CV_CISSE_AAM-DataStEng - Ing.DS.2026 - ARTI.pdf" },
            { label: "Software Developer / DevOps", file: "CV_CISSE_AAM-SoftDevOps - Ing.DS.2026 - ARTI.pdf" },
            { label: "SysAdmin / DevOps", file: "CV_CISSE_AAM-SysAdminDevOps - Ing.DS.2026 - ARTI.pdf" },
          ].map(({ label, file }) => (
            <a
              key={file}
              href={`/cv/${encodeURIComponent(file)}`}
              download
              className="inline-flex items-center gap-2 text-sm px-5 py-2.5 rounded-full border border-white/15 text-[#aaaacc] hover:border-[#6c63ff]/50 hover:text-white hover:bg-[#6c63ff]/10 transition-all"
            >
              <DownloadIcon className="w-4 h-4" />
              {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
