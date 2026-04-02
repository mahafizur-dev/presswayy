"use client";

import React, { useState } from "react";

const faqData = [
  {
    question: "What is Presswayy?",
    answer:
      "Pressway is a modern AI platform that builds **AI automation** and **smart business solutions** for small, medium, and large businesses. It handles customer inbox replies, order collection, courier tracking, complaint management, and real-time updates through Google Sheets, Excel, or your website.",
  },
  {
    question: "How does Presswayy work for businesses?",
    answer:
      "Presswayy integrates with your existing communication channels and uses advanced AI to understand and respond to customer queries. It can be trained on your specific business data to provide accurate and context-aware assistance.",
  },
  {
    question: "What services does Presswayy provide?",
    answer:
      "We provide a comprehensive suite of AI-driven tools including automated customer support, lead qualification, order processing automation, and data synchronization with various business platforms.",
  },
  {
    question: "How much does Presswayy cost?",
    answer:
      "We offer flexible pricing plans tailored to the size and needs of your business. Please visit our pricing page or contact our sales team for a custom quote based on your volume.",
  },
  {
    question: "Do irrelevant messages count as paid messages?",
    answer:
      "No, our system is smart enough to filter out spam or completely irrelevant queries. We only count meaningful interactions that contribute to your business automation.",
  },
  {
    question: "Can Presswayy help me increase sales?",
    answer:
      "Yes! By providing instant replies 24/7 and qualifying leads automatically, Presswayy ensures you never miss a potential customer, leading to significantly higher conversion rates.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-[#fcfcff] py-10 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-6 sm:mb-12 md:mb-16">
          <h2 className="text-[24px] sm:text-[34px] md:text-[44px] font-bold text-[#0d1c44] mb-3 font-serif leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-[16px] sm:text-[16px] md:text-[18px] text-[#324578] font-medium opacity-80 leading-[1.5] md:leading-relaxed">
            Get answers to common questions about Presswayy
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-3 sm:space-y-4">
          {faqData.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                key={index}
                className={`transition-all duration-300 border bg-white overflow-hidden rounded-sm ${
                  isOpen
                    ? "border-[#0d1c44] ring-1 ring-[#0d1c44]"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                {/* Question */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-start justify-between gap-3 p-4 sm:p-5 md:p-6 text-left"
                >
                  <span className="text-[16px] sm:text-[17px] md:text-[19px] font-bold text-[#0d1c44] font-sans leading-snug">
                    {faq.question}
                  </span>
                  <span
                    className={`transition-transform duration-300 text-[#0d1c44] flex-shrink-0 mt-0.5 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                      stroke="currentColor"
                      className="w-4 h-4 sm:w-5 sm:h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "max-h-[500px] opacity-100 border-t border-gray-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="p-4 sm:p-5 md:p-6 text-[15px] sm:text-[15px] md:text-[16px] leading-[1.5] md:leading-relaxed text-[#324578] font-normal font-sans">
                    <p
                      dangerouslySetInnerHTML={{
                        __html: faq.answer.replace(
                          /\*\*(.*?)\*\*/g,
                          "<strong>$1</strong>",
                        ),
                      }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
