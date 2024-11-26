import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const FAQ = () => {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: t('faqDeliveryTime'),
      answer: t('faqDeliveryAnswer'),
    },
    {
      question: t('faqTracking'),
      answer: t('faqTrackingAnswer'),
    },
    {
      question: t('faqDeliveryHours'),
      answer: t('faqDeliveryHoursAnswer'),
    },
    {
      question: t('faqInternational'),
      answer: t('faqInternationalAnswer'),
    },
    {
      question: t('faqNotHome'),
      answer: t('faqNotHomeAnswer'),
    },
  ];

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('faqTitle')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('faqSubtitle')}
          </p>
        </AnimatedSection>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <AnimatedSection key={index}>
              <motion.div
                className="mb-4"
                initial={false}
              >
                <motion.button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex justify-between items-center p-6 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                  whileHover={{ scale: 1.01 }}
                >
                  <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </motion.button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 bg-white border border-gray-100 rounded-b-lg">
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;