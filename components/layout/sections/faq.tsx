"use client";
import React, { useState } from "react";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index: any) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqData = [
    {
      question: "What is UCBI Banking?",
      answer:
        "UCBI Banking is a dynamic group specializing in blockchain technologies, dedicated to ecosystem growth by fostering common values within the group and across the markets.",
    },
    {
      question: "What is The UCBI Token?",
      answer:
        "The UCBI token, built on the ERC-20 standard, embodies value within the UCBI ecosystem. Designed with an emphasis on scarcity, it unifies diverse markets and pairs, enhancing its potential for value appreciation. The token serves as a versatile asset for transactions, investments, and integration into other ecosystems.",
    },
    {
      question: "How Can I Buy UCBI Token?",
      answer:
        "UCBI is a decentralized digital asset that bolsters the thriving cryptocurrency market by offering diversification to investors. Its limited supply ensures scarcity, which may help mitigate inflation risks. The UCBI token is available for purchase through several registered exchanges.",
    },
    {
      question: "How Can I Contact UCBI Banking??",
      answer:
        "For inquiries, please contact us via email or reach out to our support team.",
    },
  ];

  return (
    <div
      id="faq"
      className="px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto bg-white w-full"
    >
      <div className="grid md:grid-cols-5 gap-10 container">
        <div className="md:col-span-2">
          <div className="max-w-xs">
            <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-[#122d4f]">
              Frequently
              <br />
              asked questions
            </h2>
            <p className="mt-1 hidden md:block text-[#122d4f]">
              Answers to the most frequently asked questions.
            </p>
          </div>
        </div>

        <div className="md:col-span-3">
          <div className="hs-accordion-group divide-y divide-[#122d4f]">
            {faqData.map((faq, index) => (
              <div className="hs-accordion pt-6 pb-3" key={index}>
                <button
                  className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-[#122d4f] rounded-lg transition hover:text-[#122d4f]/80 focus:outline-none focus:text-[#122d4f]/80 "
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={activeIndex === index ? "true" : "false"}
                  aria-controls={`hs-basic-with-title-and-arrow-stretched-collapse-${index}`}
                >
                  {faq.question}
                  <svg
                    className={`hs-accordion-active:hidden block shrink-0 size-5 text-[#122d4f] group-hover:text-[#122d4f]/80 ${
                      activeIndex === index ? "hidden" : ""
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                  <svg
                    className={`hs-accordion-active:block hidden shrink-0 size-5 text-[#122d4f] group-hover:text-[#122d4f] ${
                      activeIndex === index ? "" : "hidden"
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m18 15-6-6-6 6" />
                  </svg>
                </button>
                <div
                  id={`hs-basic-with-title-and-arrow-stretched-collapse-${index}`}
                  className={`hs-accordion-content w-full overflow-hidden transition-[height] duration-300 ${
                    activeIndex === index ? "block" : "hidden"
                  }`}
                  role="region"
                  aria-labelledby={`hs-basic-with-title-and-arrow-stretched-heading-${index}`}
                >
                  <p className="text-[#122d4f]/50">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
