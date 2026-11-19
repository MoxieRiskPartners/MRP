"use client";

import React from 'react';
import { Briefcase, MapPin, ArrowUpRight } from 'lucide-react';

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
    <section className="bg-[#F7F4EE] min-h-screen py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-[#231F20] mb-3">
          Careers at Moxie
        </h1>
        <p className="text-[#231F20]/60 mb-12">
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

        <div className="space-y-8">
          {openRoles.map((role) => (
            <a
              key={role.title}
              href={LINKEDIN_JOBS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <h2 className="text-xl font-semibold text-[#231F20] group-hover:text-[#CC9F54] transition-colors mb-1">
                {role.title}
              </h2>
              <div className="flex flex-wrap gap-3 text-sm text-[#231F20]/50 mb-2">
                <span className="inline-flex items-center gap-1">
                  <Briefcase className="w-3.5 h-3.5" />
                  {role.type}
                </span>
                <span className="inline-flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  {role.location}
                </span>
              </div>
              <p className="text-[#231F20]/70 leading-relaxed">{role.summary}</p>
            </a>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-[#231F20]/10">
          <a
            href={LINKEDIN_JOBS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#D4B06B] hover:text-[#CC9F54] font-semibold transition-colors"
          >
            View All Openings on LinkedIn
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <p className="text-[#231F20]/40 text-sm mt-2">
            Or send your resume to{' '}
            <a
              href="mailto:info@moxieriskpartners.com?subject=Career Inquiry"
              className="underline underline-offset-2 hover:text-[#231F20]/60"
            >
              info@moxieriskpartners.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CareersPage;
