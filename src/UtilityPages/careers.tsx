"use client";

import React from 'react';
import { Briefcase, MapPin, ArrowUpRight, Mail } from 'lucide-react';

const LINKEDIN_JOBS_URL = "https://www.linkedin.com/company/moxie-risk-partners/jobs/";

const openRoles = [
  {
    title: "Producer, Commercial Trucking",
    type: "Full-Time",
    location: "Des Moines, IA / Hybrid",
    summary: "Build your pipeline, lead with our proven sales process, and champion clients alongside a team that has your back every step of the way.",
  },
  {
    title: "Account Manager",
    type: "Full-Time",
    location: "Des Moines, IA / Hybrid",
    summary: "Serve as the primary advisor and relationship manager for commercial and transportation clients, managing renewals, analyzing coverage, and delivering proactive support.",
  },
  {
    title: "Client Service Representative (CSR)",
    type: "Full-Time",
    location: "Des Moines, IA / Hybrid",
    summary: "Support the daily servicing and operational needs of our transportation clients and internal teams, including certificates, policy administration, and monthly reporting.",
  },
];

const CareersPage = () => {
  return (
    <div className="bg-[#F7F4EE] min-h-screen">
      {/* Header */}
      <section className="bg-[#231F20] text-[#F7F4EE] py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Careers at Moxie
          </h1>
          <p className="text-lg text-[#F7F4EE]/80">
            Join a team that&apos;s all in. View our open roles below or on{' '}
            <a
              href={LINKEDIN_JOBS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D4B06B] hover:text-[#CC9F54] underline underline-offset-2"
            >
              LinkedIn
            </a>.
          </p>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-5">
            {openRoles.map((role) => (
              <a
                key={role.title}
                href={LINKEDIN_JOBS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white border border-[#231F20]/10 rounded-xl p-6 md:p-8 hover:border-[#D4B06B]/50 hover:shadow-md transition-all group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h2 className="text-xl md:text-2xl font-bold text-[#231F20] mb-2 group-hover:text-[#CC9F54] transition-colors">
                      {role.title}
                    </h2>
                    <div className="flex flex-wrap gap-3 mb-3">
                      <span className="inline-flex items-center gap-1.5 text-sm text-[#231F20]/60">
                        <Briefcase className="w-4 h-4" />
                        {role.type}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-sm text-[#231F20]/60">
                        <MapPin className="w-4 h-4" />
                        {role.location}
                      </span>
                    </div>
                    <p className="text-[#231F20]/70">{role.summary}</p>
                  </div>
                  <div className="flex-shrink-0 mt-1">
                    <ArrowUpRight className="w-6 h-6 text-[#231F20]/30 group-hover:text-[#D4B06B] transition-colors" />
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Apply */}
          <div className="mt-12 text-center space-y-4">
            <a
              href={LINKEDIN_JOBS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#D4B06B] text-[#231F20] font-semibold rounded-lg hover:bg-[#CC9F54] transition-colors"
            >
              View All Openings on LinkedIn
              <ArrowUpRight className="w-5 h-5" />
            </a>
            <p className="text-[#231F20]/50 text-sm">
              Or send your resume to{' '}
              <a
                href="mailto:info@moxieriskpartners.com?subject=Career Inquiry"
                className="text-[#D4B06B] hover:text-[#CC9F54] underline underline-offset-2"
              >
                info@moxieriskpartners.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;
