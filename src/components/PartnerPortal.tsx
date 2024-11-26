import React from 'react';
import { BarChart3, TrendingUp, Users, Package, Clock, CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const PartnerPortal = () => {
  const { t, language } = useLanguage();

  const stats = [
    { name: t('totalDeliveries'), value: '15,832', change: '+12.3%', icon: Package },
    { name: t('successRate'), value: '99.2%', change: '+0.8%', icon: CheckCircle },
    { name: t('activeDrivers'), value: '234', change: '+5.4%', icon: Users },
    { name: t('avgDeliveryTime'), value: '1.8h', change: '-8.1%', icon: Clock },
  ];

  const benefits = [
    t('benefitTracking'),
    t('benefitDispatch'),
    t('benefitBilling'),
    t('benefitInsights'),
    t('benefitSupport'),
  ];

  const chartText = {
    en: 'Chart visualization would go here',
    fr: 'La visualisation du graphique apparaîtrait ici'
  };

  return (
    <section id="partner" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('partnerTitle')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('partnerSubtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-semibold text-gray-900">{t('performanceOverview')}</h3>
              <button className="flex items-center text-blue-600 hover:text-blue-700">
                <BarChart3 className="h-5 w-5 mr-2" />
                {t('viewDetails')}
              </button>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div key={stat.name} className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <stat.icon className="h-6 w-6 text-blue-600" />
                    <span className={`text-sm font-medium ${
                      stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {stat.change}
                    </span>
                  </div>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-sm text-gray-600">{stat.name}</p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-gray-900">{t('deliveryTrends')}</h4>
                <TrendingUp className="h-5 w-5 text-green-600" />
              </div>
              <div className="h-48 bg-gray-50 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">{chartText[language]}</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('partnerBenefits')}</h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 text-white">
              <h3 className="text-xl font-semibold mb-4">{t('readyToScale')}</h3>
              <p className="mb-6">{t('joinNetwork')}</p>
              <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200">
                {t('applyNow')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerPortal;