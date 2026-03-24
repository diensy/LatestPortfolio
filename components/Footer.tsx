import { PERSONAL, SOCIAL_LINKS, NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-[#1a1a1a] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#E63946] rounded-lg flex items-center justify-center text-white font-black text-xs">
                DK
              </div>
              <span className="text-white font-bold text-lg">
                {PERSONAL.name}
              </span>
            </div>
            <p className="text-[#666] text-sm max-w-sm mb-6 leading-relaxed">
              MERN Stack Developer specializing in multi-tenant SaaS architectures, streaming platforms, and secure payment integrations.
            </p>
            <div className="flex items-center gap-4">
              <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-[#111] border border-[#222] flex items-center justify-center text-[#888] hover:text-white hover:border-[#E63946] transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </a>
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-[#111] border border-[#222] flex items-center justify-center text-[#888] hover:text-[#0A66C2] hover:border-[#0A66C2] transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="flex sm:justify-end gap-16">
            <div>
              <h4 className="text-white font-bold mb-4">Quick Links</h4>
              <ul className="space-y-3">
                {NAV_LINKS.map(link => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-[#888] hover:text-[#E63946] transition-colors">{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Contact</h4>
              <ul className="space-y-3">
                <li><a href={`mailto:${PERSONAL.email}`} className="text-sm text-[#888] hover:text-white transition-colors">Email Me</a></li>
                <li><a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noreferrer" className="text-sm text-[#888] hover:text-green-500 transition-colors">WhatsApp</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-[#1a1a1a] flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <p className="text-[#555] text-sm">
            © {new Date().getFullYear()} {PERSONAL.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
