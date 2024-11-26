import React from 'react';
import { ArrowRight, Package, Truck, Clock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';

const Hero = () => {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const features = [
    {
      icon: Package,
      title: t('expressDelivery'),
      description: t('expressDesc'),
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Truck,
      title: t('ecoFriendly'),
      description: t('ecoDesc'),
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Clock,
      title: t('realTimeTracking'),
      description: t('trackingDesc'),
      color: 'from-purple-500 to-purple-600',
    },
  ];

  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.2 }}
          transition={{ duration: 1.5 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/50 to-blue-800/50 mix-blend-multiply" />
          <img
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80"
            alt="Logistics Background"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <motion.div
              variants={itemVariants}
              className="inline-block px-4 py-2 rounded-full bg-blue-500/20 backdrop-blur-sm text-white mb-6"
            >
              {t('newFeature')} 🚀
            </motion.div>
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
            >
              {t('heroTitle')}
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-xl text-blue-100 mb-8"
            >
              {t('heroSubtitle')}
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200 flex items-center group shadow-lg"
              >
                {t('trackButton')}
                <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-200 backdrop-blur-sm"
              >
                {t('partnerButton')}
              </motion.button>
            </motion.div>
          </div>
          
          <motion.div
            variants={containerVariants}
            className="hidden md:grid grid-cols-1 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 10px 30px -10px rgba(0,0,0,0.3)"
                }}
                className={`bg-gradient-to-r ${feature.color} p-6 rounded-xl backdrop-blur-lg transform transition-all duration-200 hover:rotate-1`}
              >
                <div className="flex items-start">
                  <div className="bg-white/10 p-3 rounded-lg">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-white mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-blue-100 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;