import React from 'react';
import { Package, Facebook, Twitter, Linkedin, Instagram, ArrowUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';

const Footer = () => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Package className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-xl font-bold">SwiftLink</span>
            </div>
            <p className="text-gray-400 mb-4">{t('footerTagline')}</p>
            <div className="flex space-x-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="text-gray-400 hover:text-blue-400"
              >
                <Facebook className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="text-gray-400 hover:text-blue-400"
              >
                <Twitter className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="text-gray-400 hover:text-blue-400"
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="text-gray-400 hover:text-blue-400"
              >
                <Instagram className="h-5 w-5" />
              </motion.a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t('quickLinks')}</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-400 hover:text-blue-400 transition-colors">
                  {t('services')}
                </a>
              </li>
              <li>
                <a href="#track" className="text-gray-400 hover:text-blue-400 transition-colors">
                  {t('trackPackage')}
                </a>
              </li>
              <li>
                <a href="#partner" className="text-gray-400 hover:text-blue-400 transition-colors">
                  {t('partnerPortal')}
                </a>
              </li>
              <li>
                <a href="#careers" className="text-gray-400 hover:text-blue-400 transition-colors">
                  {t('careers')}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t('support')}</h3>
            <ul className="space-y-2">
              <li>
                <a href="#faq" className="text-gray-400 hover:text-blue-400 transition-colors">
                  {t('faq')}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-blue-400 transition-colors">
                  {t('contact')}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  {t('privacyPolicy')}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  {t('terms')}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t('newsletter')}</h3>
            <p className="text-gray-400 mb-4">{t('newsletterDesc')}</p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder={t('emailPlaceholder')}
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                {t('subscribe')}
              </motion.button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm text-center md:text-left">
            © 2024 SwiftLink Logistics. {t('allRightsReserved')}
          </p>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="mt-4 md:mt-0 bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;