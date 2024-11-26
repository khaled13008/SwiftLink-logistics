import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';

interface LanguageToggleProps {
  scrolled?: boolean;
}

const LanguageToggle = ({ scrolled = false }: LanguageToggleProps) => {
  const { language, setLanguage } = useLanguage();

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
      className={`flex items-center space-x-1 text-sm font-medium ${
        scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white/90 hover:text-white'
      } transition-colors duration-200`}
    >
      <span>{language.toUpperCase()}</span>
      <span className={scrolled ? 'text-gray-400' : 'text-white/60'}>|</span>
      <span className={scrolled ? 'text-gray-400' : 'text-white/60'}>
        {language === 'en' ? 'FR' : 'EN'}
      </span>
    </motion.button>
  );
};

export default LanguageToggle;