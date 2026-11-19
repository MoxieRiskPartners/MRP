"use client";

import React, { useState } from 'react';
import { Briefcase, MapPin, ChevronDown, ChevronUp, Users, Target, TrendingUp, Mail } from 'lucide-react';

interface JobPosting {
  id: string;
  title: string;
  type: string;
  location: string;
  summary: string;
  sections: { heading: string; items: string[] }[];
}

const jobPostings: JobPosting[] = [
  {
    id: "producer",
    title: "Producer, Commercial Trucking",
    type: "Full-Time",
    location: "Des Moines, IA / Hybrid",
    summary: "Build your pipeline, lead with our proven sales process, and champion clients alongside a team that has your back every step of the way.",
    sections: [
      {
        heading: "What You'll Do",
        items: [
          "Build your pipeline through calls, emails, LinkedIn, referrals, and industry events — whatever it takes to get in front of the right fleets",
          "Lead with the Moxie sales process, built on earning trust before we ever talk price",
          "Champion your clients by working hand in hand with teammates to deliver for every client you bring on",
          "Meet with clients at their offices when a relationship calls for a handshake",
        ],
      },
      {
        heading: "What You Bring",
        items: [
          "A track record of success in sales, in any industry",
          "Confidence on the phone and comfort reaching out to new prospects",
          "The self-motivation to manage your own time and pipeline",
          "A coachable mindset and a desire to keep growing",
          "A team-first attitude: you lead by lifting others up",
          "Willingness to travel when the business calls for it",
          "A Property & Casualty license is a plus; if you don't have one yet, you'll get it within 90 days of hire",
        ],
      },
      {
        heading: "What You Get",
        items: [
          "Real earning potential: six-figure-plus income that grows with your book",
          "A proven process: the Moxie sales process and the playbooks behind it",
          "A team that's all in: marketing, service, and account management working your deals with you",
          "Coaching that makes you better: regular pipeline reviews and direct feedback from people who've done it",
        ],
      },
    ],
  },
  {
    id: "account-manager",
    title: "Account Manager",
    type: "Full-Time",
    location: "Des Moines, IA / Hybrid",
    summary: "Serve as the primary advisor and relationship manager for commercial and transportation clients, managing renewals, analyzing coverage, and ensuring proactive support throughout the policy lifecycle.",
    sections: [
      {
        heading: "Primary Responsibilities",
        items: [
          "Serve as the primary day-to-day contact for assigned clients, building strong relationships through proactive communication",
          "Conduct mid-year, renewal, and stewardship reviews — identify coverage gaps and recommend solutions",
          "Build renewal strategy and timelines, prepare complete renewal files, and submit accounts to carriers and program markets",
          "Review carrier quotations, policy forms, endorsements, and pricing; prepare proposals and coverage comparisons",
          "Identify opportunities to round out accounts through additional coverages and risk management services",
          "Partner closely with Producers, Marketing, and Client Service Representatives",
        ],
      },
      {
        heading: "Qualifications",
        items: [
          "Active Property & Casualty License or ability to obtain",
          "Commercial transportation insurance experience",
          "Strong understanding of commercial insurance coverages and policy structures",
          "Excellent communication and relationship-building skills",
          "Strong analytical and problem-solving abilities",
          "Proficiency with Microsoft 365 and agency management systems",
        ],
      },
      {
        heading: "Preferred",
        items: [
          "Experience marketing and negotiating commercial accounts",
          "Experience with trucking, fleet, and DOT-related risks",
          "Experience conducting client reviews and coverage analysis",
        ],
      },
    ],
  },
  {
    id: "csr",
    title: "Client Service Representative (CSR)",
    type: "Full-Time",
    location: "Des Moines, IA / Hybrid",
    summary: "Support the daily servicing and operational needs of our transportation clients and internal teams, including certificate issuance, policy administration, monthly reporting, and marketing support.",
    sections: [
      {
        heading: "Primary Responsibilities",
        items: [
          "Create and maintain Certificate of Insurance (COI) master templates and process certificate requests",
          "Monitor and manage the agency's shared Service Inbox",
          "Process policy change requests and review driver approvals based on underwriting guidelines",
          "Check in policies/endorsements and prepare them for Account Manager review and delivery",
          "Prepare and distribute client monthly reports and track reporting deadlines",
          "Support Marketing with IFTA mileage maps, supplemental applications, MVRs, carrier loss runs, and submission documentation",
        ],
      },
      {
        heading: "Qualifications",
        items: [
          "Customer service experience required",
          "Strong attention to detail and comfort working from checklists and documented procedures",
          "Excellent organizational skills and the ability to manage multiple priorities and deadlines",
          "Clear written communication and professional email habits",
          "Proficiency with Outlook and Microsoft 365",
          "Strong follow-up skills and a commitment to seeing tasks through completion",
          "A team-first attitude that reflects our \"One In, All In\" culture",
        ],
      },
      {
        heading: "Preferred",
        items: [
          "Commercial insurance or transportation industry experience",
          "Experience with agency management systems and carrier portals",
          "Experience handling certificates, policy processing, billing, reporting, and administrative coordination",
        ],
      },
    ],
  },
];

const CareersPage = () => {
  const [expandedJob, setExpandedJob] = useState<string | null>(null);

  const toggleJob = (id: string) => {
    setExpandedJob(expandedJob === id ? null : id);
  };

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
              Find your place on a team that&apos;s all in.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {jobPostings.map((job) => {
              const isExpanded = expandedJob === job.id;
              return (
                <div
                  key={job.id}
                  className="border border-[#231F20]/10 rounded-xl overflow-hidden hover:border-[#D4B06B]/50 transition-colors"
                >
                  <button
                    onClick={() => toggleJob(job.id)}
                    className="w-full text-left p-6 md:p-8 flex items-start justify-between gap-4"
                    aria-expanded={isExpanded}
                    aria-controls={`job-${job.id}`}
                  >
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold text-[#231F20] mb-2">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap gap-3 mb-3">
                        <span className="inline-flex items-center gap-1.5 text-sm text-[#231F20]/60">
                          <Briefcase className="w-4 h-4" />
                          {job.type}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-sm text-[#231F20]/60">
                          <MapPin className="w-4 h-4" />
                          {job.location}
                        </span>
                      </div>
                      <p className="text-[#231F20]/70">{job.summary}</p>
                    </div>
                    <div className="flex-shrink-0 mt-1">
                      {isExpanded ? (
                        <ChevronUp className="w-6 h-6 text-[#D4B06B]" />
                      ) : (
                        <ChevronDown className="w-6 h-6 text-[#231F20]/40" />
                      )}
                    </div>
                  </button>

                  {isExpanded && (
                    <div id={`job-${job.id}`} className="px-6 md:px-8 pb-8 border-t border-[#231F20]/5">
                      {job.sections.map((section) => (
                        <div key={section.heading} className="mt-6">
                          <h4 className="text-lg font-semibold text-[#231F20] mb-3">
                            {section.heading}
                          </h4>
                          <ul className="space-y-2">
                            {section.items.map((item, i) => (
                              <li key={i} className="flex items-start gap-3 text-[#231F20]/70">
                                <span className="w-1.5 h-1.5 bg-[#D4B06B] rounded-full mt-2 flex-shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                      <div className="mt-8">
                        <a
                          href="mailto:info@moxieriskpartners.com?subject=Application: {{title}}"
                          onClick={(e) => {
                            e.preventDefault();
                            window.location.href = `mailto:info@moxieriskpartners.com?subject=Application: ${job.title}`;
                          }}
                          className="inline-flex items-center gap-2 px-6 py-3 bg-[#D4B06B] text-[#231F20] font-semibold rounded-lg hover:bg-[#CC9F54] transition-colors"
                        >
                          <Mail className="w-5 h-5" />
                          Apply Now
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
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
          <a
            href="mailto:info@moxieriskpartners.com?subject=Career Inquiry"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#D4B06B] text-[#231F20] font-semibold rounded-lg hover:bg-[#CC9F54] transition-colors"
          >
            <Mail className="w-5 h-5" />
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;
