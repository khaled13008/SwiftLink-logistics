import React, { useState, useEffect } from 'react';
import { Menu, X, Package } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageToggle from './LanguageToggle';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: t('services'), href: '#services' },
    { name: t('trackPackage'), href: '#track' },
    { name: t('partnerPortal'), href: '#partner' },
    { name: t('careers'), href: '#careers' },
    { name: t('contact'), href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center"
          >
            <div className="flex-shrink-0 flex items-center">
              <Package className={`h-8 w-8 ${scrolled ? 'text-blue-600' : 'text-white'}`} />
              <span className={`ml-2 text-xl font-bold ${scrolled ? 'text-gray-800' : 'text-white'}`}>
                SwiftLink
              </span>
            </div>
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              {navigation.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  whileHover={{ y: -2 }}
                  className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                    scrolled
                      ? 'text-gray-700 hover:text-blue-600'
                      : 'text-white/90 hover:text-white'
                  } transition-colors duration-200`}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          <div className="flex items-center gap-4">
            <LanguageToggle scrolled={scrolled} />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`hidden md:block px-4 py-2 rounded-md ${
                scrolled
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-white text-blue-600 hover:bg-blue-50'
              } transition-colors duration-200`}
            >
              {t('clientLogin')}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden"
            >
              {isOpen ? (
                <X className={`h-6 w-6 ${scrolled ? 'text-gray-700' : 'text-white'}`} />
              ) : (
                <Menu className={`h-6 w-6 ${scrolled ? 'text-gray-700' : 'text-white'}`} />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/90 backdrop-blur-md"
          >
            <div className="pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  whileHover={{ x: 10 }}
                  className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </motion.a>
              ))}
              <motion.button
                whileHover={{ x: 10 }}
                className="w-full text-left pl-3 pr-4 py-2 text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
              >
                {t('clientLogin')}
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;