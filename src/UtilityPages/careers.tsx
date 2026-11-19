"use client";

import React from 'react';
import { Briefcase, MapPin, ArrowUpRight, Mail, Users, Target, TrendingUp } from 'lucide-react';

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

const culturePoints = [
  {
    icon: Users,
    title: "One In, All In",
    description: "Every client is a shared commitment, and every win belongs to all of us. Our leadership leads from the front — on the calls, in the meetings, working right alongside you.",
  },
  {
    icon: Target,
    title: "Real Coaching",
    description: "We give honest feedback because we're invested in your success. Regular pipeline reviews and direct guidance from people who've been there.",
  },
  {
    icon: TrendingUp,
    title: "Growth That Compounds",
    description: "Build a book, a reputation, and an income you're proud of. Your effort makes a real difference here.",
  },
];

const CareersPage = () => {
  return (
    <div className="bg-[#F7F4EE] min-h-screen">
      {/* Hero */}
      <section className="relative bg-[#231F20] text-[#F7F4EE] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-[#D4B06B] font-semibold tracking-wide uppercase text-sm mb-4">
              Careers at Moxie
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              A Team Built to Win
            </h1>
            <p className="text-lg md:text-xl text-[#F7F4EE]/80 leading-relaxed mb-8">
              We&apos;re looking for people who seek out opportunity, love to compete, and know
              that the best results come from a team pulling in the same direction.
            </p>
            <a
              href="#openings"
              className="inline-flex items-center px-8 py-4 bg-[#D4B06B] text-[#231F20] font-semibold rounded-lg hover:bg-[#CC9F54] transition-colors"
            >
              View Open Positions
            </a>
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#231F20] mb-4">
              Why Moxie?
            </h2>
            <p className="text-lg text-[#231F20]/70 max-w-2xl mx-auto">
              When a deal gets tough, nobody is left to figure it out on their own. We roll up our
              sleeves, work through it together, and celebrate the wins as a team.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {culturePoints.map((point) => (
              <div
                key={point.title}
                className="bg-white rounded-xl p-8 shadow-sm border border-[#231F20]/5 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-[#D4B06B]/10 rounded-lg flex items-center justify-center mb-5">
                  <point.icon className="w-6 h-6 text-[#D4B06B]" />
                </div>
                <h3 className="text-xl font-bold text-[#231F20] mb-3">{point.title}</h3>
                <p className="text-[#231F20]/70 leading-relaxed">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="openings" className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#231F20] mb-4">
              Open Positions
            </h2>
            <p className="text-lg text-[#231F20]/70">
              Find your place on a team that&apos;s all in. Click any role to view the full posting and apply on LinkedIn.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {openRoles.map((role) => (
              <a
                key={role.title}
                href={LINKEDIN_JOBS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block border border-[#231F20]/10 rounded-xl p-6 md:p-8 hover:border-[#D4B06B]/50 hover:shadow-md transition-all group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-[#231F20] mb-2 group-hover:text-[#CC9F54] transition-colors">
                      {role.title}
                    </h3>
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

          <div className="text-center mt-12">
            <a
              href={LINKEDIN_JOBS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#D4B06B] text-[#231F20] font-semibold rounded-lg hover:bg-[#CC9F54] transition-colors"
            >
              View All Openings on LinkedIn
              <ArrowUpRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24 bg-[#231F20] text-[#F7F4EE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Lead?
          </h2>
          <p className="text-lg text-[#F7F4EE]/80 mb-8 max-w-2xl mx-auto">
            If you want a career where your effort makes a real difference, and a team that has
            your back every step of the way, we&apos;d love to talk.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={LINKEDIN_JOBS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#D4B06B] text-[#231F20] font-semibold rounded-lg hover:bg-[#CC9F54] transition-colors"
            >
              Apply on LinkedIn
              <ArrowUpRight className="w-5 h-5" />
            </a>
            <a
              href="mailto:info@moxieriskpartners.com?subject=Career Inquiry"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-[#F7F4EE]/30 text-[#F7F4EE] font-semibold rounded-lg hover:border-[#D4B06B] hover:text-[#D4B06B] transition-colors"
            >
              <Mail className="w-5 h-5" />
              Email Your Resume
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;
