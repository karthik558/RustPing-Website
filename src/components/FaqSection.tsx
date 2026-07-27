import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How does RustPing perform high-speed ICMP pings?",
    a: "RustPing utilizes raw asynchronous socket sockets and Tokio event loops in Rust to dispatch parallel ICMP Echo requests across entire subnets with sub-millisecond execution times and minimal CPU overhead."
  },
  {
    q: "Is RustPing 100% free and open-source software?",
    a: "Yes. RustPing is released under the MIT license. You can inspect the source code, compile custom builds, and deploy it across your infrastructure without any licensing fees."
  },
  {
    q: "Which operating systems are supported for deployment?",
    a: "RustPing compiles natively on Linux, Windows, and macOS. Pre-built binaries are available for 64-bit architectures, or you can build directly from source using Cargo."
  },
  {
    q: "How do I export event logs for historical reporting?",
    a: "Log records can be exported directly from the web interface in CSV, TXT, or JSON formats, filtered by device IP or date range."
  },
  {
    q: "Can I monitor HTTP endpoints in addition to IP pings?",
    a: "Yes, RustPing features multi-sensor capabilities allowing simultaneous ICMP ping checks, HTTP GET status verification, and bandwidth utilization metrics."
  }
];

const FaqSection = () => {
  return (
    <section className="py-24 bg-[#08080a] border-t border-[#1f1f26]">
      <div className="section-container max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-14 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#16161c] border border-[#252530] text-[#e04922] text-xs font-mono font-semibold tracking-wide mb-4">
            <span>// FREQUENTLY ASKED</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.1]">
            Common questions.
          </h2>
        </div>

        {/* Accordion List */}
        <div className="rounded-2xl bg-[#111115] border border-[#1f1f26] p-6 sm:p-8">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-b border-[#1f1f26] last:border-b-0 pb-3"
              >
                <AccordionTrigger className="text-left font-bold text-white text-base hover:text-[#e04922] transition-colors py-3">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-slate-400 text-sm leading-relaxed pt-1 pb-3">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

      </div>
    </section>
  );
};

export default FaqSection;
