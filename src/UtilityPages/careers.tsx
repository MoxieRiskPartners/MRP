"use client";

import React, { useState } from 'react';
import { Briefcase, MapPin, ArrowUpRight, ChevronDown, ChevronUp } from 'lucide-react';

const LINKEDIN_JOBS_URL = "https://www.linkedin.com/company/moxie-risk-partners/jobs/";

interface Role {
  id: string;
  title: string;
  type: string;
  location: string;
  summary: string;
  sections: { heading: string; items: string[] }[];
}

const openRoles: Role[] = [
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
          "Build your pipeline — calls, emails, LinkedIn, referrals, and industry events. Whatever it takes to get in front of the right fleets.",
          "Lead with the Moxie sales process. Our process is built on earning trust before we ever talk price. You'll learn it, own it, and make it yours.",
          "Champion your clients. Work hand in hand with your teammates to deliver for every client you bring on.",
          "Show up in person. Meet with clients at their offices when a relationship calls for a handshake.",
        ],
      },
      {
        heading: "What It Takes",
        items: [
          "Flexibility. Trucking doesn't keep banker's hours, and neither do our clients' needs. Some mornings start early, and some weeks include travel.",
          "Persistence. Building a book takes steady outreach, including cold calls. Not every conversation turns into a client, and that's part of the process.",
          "Ownership. You manage your own calendar and pipeline, and you take pride in the results.",
          "A coachable mindset. We give honest feedback because we're invested in your success.",
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
          "Trucking or commercial insurance experience is a bonus, not a requirement",
        ],
      },
      {
        heading: "What You Get",
        items: [
          "Real earning potential: six-figure-plus earning potential that grows with your book",
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
    summary: "Serve as the primary advisor and relationship manager for commercial and transportation clients, managing renewals, analyzing coverage, and delivering proactive support.",
    sections: [
      {
        heading: "Client Service, Risk Advisory & Policy Review",
        items: [
          "Serve as the primary day-to-day contact for assigned clients, building strong relationships through proactive communication",
          "Respond to client inquiries regarding coverage, audits, carrier requirements, and risk management matters, and report claims to carriers",
          "Conduct mid-year, renewal, and stewardship reviews, analyzing client operations and insurance programs to identify coverage gaps and emerging exposures",
          "Help clients understand policy terms, endorsements, exclusions, carrier requirements, and marketplace changes affecting their business",
          "Review policies and endorsements for accuracy and coverage intent, and ensure requested changes have been properly applied by carriers",
          "Review contracts, insurance requirements, and certificates requiring coverage interpretation",
          "Assist clients with complex service requests, audits, and audit questions or disputes",
        ],
      },
      {
        heading: "Renewals & Marketing",
        items: [
          "Build renewal strategy and timelines, and gather updated exposures, operational changes, and underwriting data",
          "Prepare complete renewal files and submit accounts to carriers, wholesalers, and program markets",
          "Review carrier quotations, policy forms, endorsements, and pricing",
          "Prepare renewal proposals and coverage comparisons, present options to clients, secure decisions, and coordinate implementation",
        ],
      },
      {
        heading: "Growth, Retention & Team",
        items: [
          "Identify opportunities to round out accounts through additional coverages and risk management services",
          "Support retention through proactive service, and monitor account performance and client satisfaction",
          "Partner closely with Producers, Marketing, and Client Service Representatives",
          "Delegate administrative tasks, mentor CSR development, and contribute to workflow improvements",
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
          "Ability to manage multiple accounts, deadlines, and priorities",
          "Proficiency with Microsoft 365 and agency management systems",
          "Experience with trucking, fleet, and DOT-related risks preferred",
        ],
      },
    ],
  },
  {
    id: "csr",
    title: "Client Service Representative (CSR)",
    type: "Full-Time",
    location: "Des Moines, IA / Hybrid",
    summary: "Support the daily servicing and operational needs of our transportation clients and internal teams, including certificates, policy administration, and monthly reporting.",
    sections: [
      {
        heading: "Client Service & Policy Administration",
        items: [
          "Create and maintain Certificate of Insurance (COI) master templates",
          "Issue Certificates of Insurance and process certificate requests",
          "Monitor and manage the agency's shared Service Inbox",
          "Process policy change requests",
          "Review driver approvals based on established underwriting guidelines and carrier requirements",
          "Check in policies/endorsements and prepare them for Account Manager review and delivery",
          "Maintain accurate client records and documentation within the agency management system",
        ],
      },
      {
        heading: "Monthly Reporting & Invoicing",
        items: [
          "Prepare and distribute client monthly reports",
          "Follow up with clients to obtain required reporting information",
          "Track monthly reporting deadlines and ensure timely completion",
          "Invoice clients for monthly reporting services and maintain related records",
        ],
      },
      {
        heading: "Marketing & Submission Support",
        items: [
          "Prepare IFTA mileage maps",
          "Assist with supplemental applications",
          "Order Motor Vehicle Records (MVRs) and carrier loss runs",
          "Prepare basic loss summaries from carrier-provided loss run data",
          "Gather underwriting information and supporting documentation for submissions",
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
          "Commercial insurance or transportation industry experience preferred",
        ],
      },
    ],
  },
];

const CareersPage = ({ mode = "email" }: { mode?: "email" | "linkedin" }) => {
  const [expandedRole, setExpandedRole] = useState<string | null>(null);

  const toggle = (id: string) => {
    setExpandedRole(expandedRole === id ? null : id);
  };

  return (
    <section className="bg-[#F7F4EE] min-h-screen py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-[#231F20] mb-3">
          Careers at Moxie
        </h1>
        <p className="text-[#231F20]/60 mb-4">
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
        {mode === "email" && (
          <p className="text-[#231F20]/60 mb-12">
            To apply, send your resume and a cover letter to{' '}
            <span className="font-semibold text-[#231F20]">info@moxieriskpartners.com</span>.
          </p>
        )}
        {mode === "linkedin" && (
          <p className="text-[#231F20]/60 mb-12">
            To apply, visit our{' '}
            <a
              href={LINKEDIN_JOBS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D4B06B] hover:text-[#CC9F54] underline underline-offset-2"
            >
              LinkedIn jobs page
            </a>{' '}
            and submit your application directly.
          </p>
        )}

        <div className="space-y-5">
          {openRoles.map((role) => {
            const isExpanded = expandedRole === role.id;
            return (
              <div
                key={role.id}
                className="bg-white rounded-xl border border-[#231F20]/10 overflow-hidden"
              >
                <button
                  onClick={() => toggle(role.id)}
                  className="w-full text-left p-6 md:p-8 flex items-start justify-between gap-4 group"
                  aria-expanded={isExpanded}
                >
                  <div className="flex-1">
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
                  </div>
                  <div className="flex-shrink-0 mt-1">
                    {isExpanded ? (
                      <ChevronUp className="w-5 h-5 text-[#D4B06B]" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-[#231F20]/30" />
                    )}
                  </div>
                </button>

                {isExpanded && (
                  <div className="px-6 md:px-8 pb-6 md:pb-8 border-t border-[#231F20]/5">
                    {role.sections.map((section) => (
                      <div key={section.heading} className="mt-5">
                        <h3 className="text-sm font-semibold text-[#231F20] uppercase tracking-wide mb-2">
                          {section.heading}
                        </h3>
                        <ul className="space-y-1.5">
                          {section.items.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-[#231F20]/70">
                              <span className="w-1 h-1 bg-[#D4B06B] rounded-full mt-2 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                    <div className="mt-6 p-5 bg-[#F7F4EE] rounded-lg">
                      {mode === "email" && (
                        <p className="text-sm text-[#231F20]/70">
                          <span className="font-semibold text-[#231F20]">To apply:</span> Send your resume and a cover letter to{' '}
                          <span className="font-semibold text-[#231F20]">info@moxieriskpartners.com</span> with
                          the subject line &ldquo;Application: {role.title}&rdquo;.
                        </p>
                      )}
                      {mode === "linkedin" && (
                        <a
                          href={LINKEDIN_JOBS_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#D4B06B] text-[#231F20] text-sm font-semibold rounded-lg hover:bg-[#CC9F54] transition-colors"
                        >
                          Apply on LinkedIn
                          <ArrowUpRight className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-12 pt-8 border-t border-[#231F20]/10">
          <a
            href={LINKEDIN_JOBS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#D4B06B] hover:text-[#CC9F54] font-semibold transition-colors"
          >
            See More Openings on LinkedIn
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CareersPage;
