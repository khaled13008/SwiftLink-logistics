import React from 'react';
import { Briefcase, Heart, Users, Coffee, Star, Send } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Careers = () => {
  const { t, language } = useLanguage();

  const positions = {
    en: [
      {
        title: 'Delivery Driver',
        type: 'Full-time',
        location: 'Multiple Locations',
        description: 'Join our fleet of professional drivers delivering excellence daily.',
      },
      {
        title: 'Route Optimizer',
        type: 'Full-time',
        location: 'Remote',
        description: 'Use data analytics to create efficient delivery routes and improve performance.',
      },
      {
        title: 'Logistics Coordinator',
        type: 'Full-time',
        location: 'Paris, France',
        description: 'Coordinate with partners and manage delivery operations efficiently.',
      },
    ],
    fr: [
      {
        title: 'Chauffeur-Livreur',
        type: 'Temps plein',
        location: 'Plusieurs localisations',
        description: 'Rejoignez notre flotte de chauffeurs professionnels pour livrer l\'excellence au quotidien.',
      },
      {
        title: 'Optimisateur de Routes',
        type: 'Temps plein',
        location: 'Télétravail',
        description: 'Utilisez l\'analyse de données pour créer des itinéraires de livraison efficaces et améliorer les performances.',
      },
      {
        title: 'Coordinateur Logistique',
        type: 'Temps plein',
        location: 'Paris, France',
        description: 'Coordonnez avec les partenaires et gérez efficacement les opérations de livraison.',
      },
    ],
  };

  const benefits = [
    {
      icon: Heart,
      title: t('healthWellness'),
      description: t('healthDesc'),
    },
    {
      icon: Users,
      title: t('teamCulture'),
      description: t('teamDesc'),
    },
    {
      icon: Coffee,
      title: t('workLife'),
      description: t('workLifeDesc'),
    },
  ];

  return (
    <section id="careers" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('joinTeam')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('careersSubtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <img
              src="https://images.unsplash.com/photo-1616432043562-3671ea2e5242?auto=format&fit=crop&q=80"
              alt="Delivery Team"
              className="rounded-2xl shadow-lg w-full h-[400px] object-cover"
            />
          </div>
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-gray-900">{t('whyJoin')}</h3>
            <div className="grid gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0">
                    <benefit.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900">{benefit.title}</h4>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8">{t('openPositions')}</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {positions[language].map((position, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">{position.title}</h4>
                    <p className="text-sm text-gray-500">{position.location}</p>
                  </div>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {position.type}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{position.description}</p>
                <button className="text-blue-600 font-medium hover:text-blue-700 flex items-center">
                  {t('applyNow')}
                  <Send className="h-4 w-4 ml-2" />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <p className="text-gray-600 mb-6">{t('noPositionMatch')}</p>
          <button className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
            <Star className="h-5 w-5 mr-2" />
            {t('spontaneousApplication')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Careers;