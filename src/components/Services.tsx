import React from 'react';
import { Truck, Leaf, Clock, Package, Shield, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import AnimatedSection from './AnimatedSection';
import { motion } from 'framer-motion';

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Truck,
      title: t('expressDeliveryService'),
      description: t('expressDeliveryDesc'),
      color: 'bg-blue-50 text-blue-600',
    },
    {
      icon: Leaf,
      title: t('ecoTransport'),
      description: t('ecoTransportDesc'),
      color: 'bg-green-50 text-green-600',
    },
    {
      icon: Clock,
      title: t('operations247'),
      description: t('operations247Desc'),
      color: 'bg-purple-50 text-purple-600',
    },
    {
      icon: Package,
      title: t('specializedHandling'),
      description: t('specializedHandlingDesc'),
      color: 'bg-orange-50 text-orange-600',
    },
    {
      icon: Shield,
      title: t('secureShipping'),
      description: t('secureShippingDesc'),
      color: 'bg-red-50 text-red-600',
    },
    {
      icon: Globe,
      title: t('internationalLogistics'),
      description: t('internationalLogisticsDesc'),
      color: 'bg-indigo-50 text-indigo-600',
    },
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('servicesTitle')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('servicesSubtitle')}
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedSection key={index}>
              <motion.div
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)",
                }}
                transition={{ 
                  type: "spring",
                  stiffness: 300,
                  damping: 20
                }}
                className="bg-white p-8 rounded-xl shadow-sm h-full flex flex-col"
              >
                <motion.div
                  whileHover={{ rotate: 12 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  className={`w-14 h-14 ${service.color} rounded-lg flex items-center justify-center mb-6`}
                >
                  <service.icon className="h-8 w-8" />
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 flex-grow">{service.description}</p>
                <motion.button
                  whileHover={{ x: 5 }}
                  className="mt-4 text-blue-600 font-medium flex items-center group"
                >
                  {t('learnMore')}
                  <svg 
                    className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 5l7 7-7 7" 
                    />
                  </svg>
                </motion.button>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;