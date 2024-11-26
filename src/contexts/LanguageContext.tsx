import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'fr';

interface Translations {
  [key: string]: {
    // Navigation
    services: string;
    trackPackage: string;
    partnerPortal: string;
    careers: string;
    contact: string;
    clientLogin: string;

    // Hero Section
    newFeature: string;
    heroTitle: string;
    heroSubtitle: string;
    trackButton: string;
    partnerButton: string;
    expressDelivery: string;
    expressDesc: string;
    ecoFriendly: string;
    ecoDesc: string;
    realTimeTracking: string;
    trackingDesc: string;

    // Services Section
    servicesTitle: string;
    servicesSubtitle: string;
    expressDeliveryService: string;
    expressDeliveryDesc: string;
    ecoTransport: string;
    ecoTransportDesc: string;
    operations247: string;
    operations247Desc: string;
    specializedHandling: string;
    specializedHandlingDesc: string;
    secureShipping: string;
    secureShippingDesc: string;
    internationalLogistics: string;
    internationalLogisticsDesc: string;
    learnMore: string;

    // Partner Portal
    partnerTitle: string;
    partnerSubtitle: string;
    performanceOverview: string;
    viewDetails: string;
    totalDeliveries: string;
    successRate: string;
    activeDrivers: string;
    avgDeliveryTime: string;
    deliveryTrends: string;
    partnerBenefits: string;
    benefitTracking: string;
    benefitDispatch: string;
    benefitBilling: string;
    benefitInsights: string;
    benefitSupport: string;
    readyToScale: string;
    joinNetwork: string;
    applyNow: string;

    // Testimonials
    testimonialTitle: string;
    testimonialSubtitle: string;
    testimonialRole1: string;
    testimonialContent1: string;
    testimonialRole2: string;
    testimonialContent2: string;
    testimonialRole3: string;
    testimonialContent3: string;

    // FAQ Section
    faqTitle: string;
    faqSubtitle: string;
    faqDeliveryTime: string;
    faqDeliveryAnswer: string;
    faqTracking: string;
    faqTrackingAnswer: string;
    faqDeliveryHours: string;
    faqDeliveryHoursAnswer: string;
    faqInternational: string;
    faqInternationalAnswer: string;
    faqNotHome: string;
    faqNotHomeAnswer: string;

    // Careers Section
    joinTeam: string;
    careersSubtitle: string;
    whyJoin: string;
    healthWellness: string;
    healthDesc: string;
    teamCulture: string;
    teamDesc: string;
    workLife: string;
    workLifeDesc: string;
    openPositions: string;
    noPositionMatch: string;
    spontaneousApplication: string;

    // Contact Section
    getInTouch: string;
    contactDesc: string;
    phone: string;
    email: string;
    address: string;
    available247: string;
    liveChatSupport: string;
    liveChatDesc: string;
    startChat: string;
    sendMessage: string;
    fullName: string;
    emailAddress: string;
    subject: string;
    selectSubject: string;
    generalInquiry: string;
    technicalSupport: string;
    partnership: string;
    billing: string;
    message: string;
    send: string;

    // Footer
    footerTagline: string;
    quickLinks: string;
    support: string;
    faq: string;
    privacyPolicy: string;
    terms: string;
    newsletter: string;
    newsletterDesc: string;
    emailPlaceholder: string;
    subscribe: string;
    allRightsReserved: string;
  };
}

const translations: Translations = {
  en: {
    // Navigation
    services: 'Services',
    trackPackage: 'Track Package',
    partnerPortal: 'Partner Portal',
    careers: 'Careers',
    contact: 'Contact',
    clientLogin: 'Client Login',

    // Hero Section
    newFeature: 'New: Real-time Tracking',
    heroTitle: 'Fast, Reliable, and Eco-friendly Delivery Solutions',
    heroSubtitle: 'Transforming logistics with innovation and sustainability',
    trackButton: 'Track Your Package',
    partnerButton: 'Become a Partner',
    expressDelivery: 'Express Delivery',
    expressDesc: 'Same-day delivery for urgent shipments',
    ecoFriendly: 'Eco-friendly',
    ecoDesc: 'Sustainable transport solutions',
    realTimeTracking: 'Real-time Tracking',
    trackingDesc: 'Monitor your shipments 24/7',

    // Services Section
    servicesTitle: 'Our Services',
    servicesSubtitle: 'Comprehensive logistics solutions for every need',
    expressDeliveryService: 'Express Delivery',
    expressDeliveryDesc: 'Fast and reliable same-day delivery service',
    ecoTransport: 'Eco-friendly Transport',
    ecoTransportDesc: 'Sustainable delivery solutions using electric vehicles',
    operations247: '24/7 Operations',
    operations247Desc: 'Round-the-clock service for your logistics needs',
    specializedHandling: 'Specialized Handling',
    specializedHandlingDesc: 'Custom solutions for delicate items',
    secureShipping: 'Secure Shipping',
    secureShippingDesc: 'Advanced security measures for valuable items',
    internationalLogistics: 'International Logistics',
    internationalLogisticsDesc: 'Global shipping solutions',
    learnMore: 'Learn More',

    // Partner Portal
    partnerTitle: 'Partner Portal',
    partnerSubtitle: 'Join our network of successful delivery partners',
    performanceOverview: 'Performance Overview',
    viewDetails: 'View Details',
    totalDeliveries: 'Total Deliveries',
    successRate: 'Success Rate',
    activeDrivers: 'Active Drivers',
    avgDeliveryTime: 'Avg. Delivery Time',
    deliveryTrends: 'Delivery Trends',
    partnerBenefits: 'Partner Benefits',
    benefitTracking: 'Real-time tracking and analytics',
    benefitDispatch: 'Automated dispatch system',
    benefitBilling: 'Simplified billing process',
    benefitInsights: 'Performance insights',
    benefitSupport: '24/7 support team',
    readyToScale: 'Ready to Scale Your Business?',
    joinNetwork: 'Join our network of successful delivery partners',
    applyNow: 'Apply Now',

    // Testimonials
    testimonialTitle: 'What Our Partners Say',
    testimonialSubtitle: 'Success stories from our valued partners',
    testimonialRole1: 'Logistics Manager',
    testimonialContent1: 'SwiftLink has transformed our delivery operations with their efficient system.',
    testimonialRole2: 'Operations Director',
    testimonialContent2: 'Outstanding service and reliable partnership.',
    testimonialRole3: 'Supply Chain Manager',
    testimonialContent3: 'Their eco-friendly approach aligns perfectly with our values.',

    // FAQ Section
    faqTitle: 'Frequently Asked Questions',
    faqSubtitle: 'Find answers to common questions about our services',
    faqDeliveryTime: 'How long does delivery usually take?',
    faqDeliveryAnswer: 'Standard delivery typically takes 2-3 business days within the city and 3-5 business days for nationwide delivery.',
    faqTracking: 'Can I track my package in real-time?',
    faqTrackingAnswer: 'Yes, you can track your package in real-time through our tracking system using your tracking number.',
    faqDeliveryHours: 'What are your delivery hours?',
    faqDeliveryHoursAnswer: 'We deliver 7 days a week, from 8:00 AM to 8:00 PM local time.',
    faqInternational: 'Do you offer international shipping?',
    faqInternationalAnswer: 'Yes, we offer international shipping to over 100 countries worldwide.',
    faqNotHome: 'What happens if I\'m not home during delivery?',
    faqNotHomeAnswer: 'We\'ll attempt delivery up to 3 times. You can also opt for delivery to a secure location or reschedule.',

    // Careers Section
    joinTeam: 'Join Our Team',
    careersSubtitle: 'Build your career with the leader in sustainable logistics',
    whyJoin: 'Why Join SwiftLink?',
    healthWellness: 'Health & Wellness',
    healthDesc: 'Comprehensive health coverage and wellness programs',
    teamCulture: 'Team Culture',
    teamDesc: 'Collaborative and innovative work environment',
    workLife: 'Work-Life Balance',
    workLifeDesc: 'Flexible schedules and remote work options',
    openPositions: 'Open Positions',
    noPositionMatch: 'Don\'t see a position that matches your skills?',
    spontaneousApplication: 'Submit Spontaneous Application',

    // Contact Section
    getInTouch: 'Get in Touch',
    contactDesc: 'Have questions? We\'re here to help',
    phone: 'Phone',
    email: 'Email',
    address: 'Address',
    available247: 'Available 24/7 for support',
    liveChatSupport: 'Live Chat Support',
    liveChatDesc: 'Connect with our support team instantly',
    startChat: 'Start Chat',
    sendMessage: 'Send us a Message',
    fullName: 'Full Name',
    emailAddress: 'Email Address',
    subject: 'Subject',
    selectSubject: 'Select a subject',
    generalInquiry: 'General Inquiry',
    technicalSupport: 'Technical Support',
    partnership: 'Partnership',
    billing: 'Billing',
    message: 'Message',
    send: 'Send Message',

    // Footer
    footerTagline: 'Sustainable logistics for a better tomorrow',
    quickLinks: 'Quick Links',
    support: 'Support',
    faq: 'FAQ',
    privacyPolicy: 'Privacy Policy',
    terms: 'Terms & Conditions',
    newsletter: 'Newsletter',
    newsletterDesc: 'Subscribe for updates and special offers',
    emailPlaceholder: 'Enter your email',
    subscribe: 'Subscribe',
    allRightsReserved: 'All rights reserved',
  },
  fr: {
    // Navigation
    services: 'Services',
    trackPackage: 'Suivre un Colis',
    partnerPortal: 'Portail Partenaire',
    careers: 'Carrières',
    contact: 'Contact',
    clientLogin: 'Espace Client',

    // Hero Section
    newFeature: 'Nouveau : Suivi en temps réel',
    heroTitle: 'Solutions de livraison rapides, fiables et écologiques',
    heroSubtitle: 'Transformer la logistique avec innovation et durabilité',
    trackButton: 'Suivre votre colis',
    partnerButton: 'Devenir partenaire',
    expressDelivery: 'Livraison Express',
    expressDesc: 'Livraison le jour même pour les envois urgents',
    ecoFriendly: 'Écologique',
    ecoDesc: 'Solutions de transport durables',
    realTimeTracking: 'Suivi en temps réel',
    trackingDesc: 'Surveillez vos envois 24h/24 et 7j/7',

    // Services Section
    servicesTitle: 'Nos Services',
    servicesSubtitle: 'Des solutions logistiques complètes pour chaque besoin',
    expressDeliveryService: 'Livraison Express',
    expressDeliveryDesc: 'Service de livraison rapide et fiable le jour même',
    ecoTransport: 'Transport Écologique',
    ecoTransportDesc: 'Solutions de livraison durables avec véhicules électriques',
    operations247: 'Opérations 24/7',
    operations247Desc: 'Service continu pour vos besoins logistiques',
    specializedHandling: 'Manipulation Spécialisée',
    specializedHandlingDesc: 'Solutions sur mesure pour objets délicats',
    secureShipping: 'Expédition Sécurisée',
    secureShippingDesc: 'Mesures de sécurité avancées pour objets de valeur',
    internationalLogistics: 'Logistique Internationale',
    internationalLogisticsDesc: 'Solutions d\'expédition mondiales',
    learnMore: 'En savoir plus',

    // Partner Portal
    partnerTitle: 'Portail Partenaire',
    partnerSubtitle: 'Rejoignez notre réseau de partenaires de livraison',
    performanceOverview: 'Aperçu des Performances',
    viewDetails: 'Voir les détails',
    totalDeliveries: 'Total des Livraisons',
    successRate: 'Taux de Réussite',
    activeDrivers: 'Chauffeurs Actifs',
    avgDeliveryTime: 'Temps Moyen de Livraison',
    deliveryTrends: 'Tendances de Livraison',
    partnerBenefits: 'Avantages Partenaires',
    benefitTracking: 'Suivi et analyses en temps réel',
    benefitDispatch: 'Système de répartition automatisé',
    benefitBilling: 'Processus de facturation simplifié',
    benefitInsights: 'Analyses de performance',
    benefitSupport: 'Support 24/7',
    readyToScale: 'Prêt à développer votre entreprise ?',
    joinNetwork: 'Rejoignez notre réseau de partenaires',
    applyNow: 'Postuler maintenant',

    // Testimonials
    testimonialTitle: 'Ce que disent nos partenaires',
    testimonialSubtitle: 'Témoignages de nos partenaires',
    testimonialRole1: 'Responsable Logistique',
    testimonialContent1: 'SwiftLink a transformé nos opérations de livraison avec leur système efficace.',
    testimonialRole2: 'Directeur des Opérations',
    testimonialContent2: 'Service exceptionnel et partenariat fiable.',
    testimonialRole3: 'Responsable Supply Chain',
    testimonialContent3: 'Leur approche écologique correspond parfaitement à nos valeurs.',

    // FAQ Section
    faqTitle: 'Questions Fréquentes',
    faqSubtitle: 'Trouvez les réponses aux questions courantes sur nos services',
    faqDeliveryTime: 'Combien de temps prend la livraison ?',
    faqDeliveryAnswer: 'La livraison standard prend 2-3 jours ouvrés en ville et 3-5 jours pour les livraisons nationales.',
    faqTracking: 'Puis-je suivre mon colis en temps réel ?',
    faqTrackingAnswer: 'Oui, vous pouvez suivre votre colis en temps réel via notre système avec votre numéro de suivi.',
    faqDeliveryHours: 'Quelles sont vos heures de livraison ?',
    faqDeliveryHoursAnswer: 'Nous livrons 7 jours sur 7, de 8h00 à 20h00 heure locale.',
    faqInternational: 'Proposez-vous des livraisons internationales ?',
    faqInternationalAnswer: 'Oui, nous proposons des livraisons vers plus de 100 pays.',
    faqNotHome: 'Que se passe-t-il si je suis absent lors de la livraison ?',
    faqNotHomeAnswer: 'Nous ferons jusqu\'à 3 tentatives. Vous pouvez aussi opter pour une livraison en point relais.',

    // Careers Section
    joinTeam: 'Rejoignez Notre Équipe',
    careersSubtitle: 'Construisez votre carrière avec le leader de la logistique durable',
    whyJoin: 'Pourquoi rejoindre SwiftLink ?',
    healthWellness: 'Santé & Bien-être',
    healthDesc: 'Couverture santé complète et programmes de bien-être',
    teamCulture: 'Culture d\'équipe',
    teamDesc: 'Environnement de travail collaboratif et innovant',
    workLife: 'Équilibre vie pro-perso',
    workLifeDesc: 'Horaires flexibles et options de télétravail',
    openPositions: 'Postes Ouverts',
    noPositionMatch: 'Vous ne trouvez pas de poste correspondant à vos compétences ?',
    spontaneousApplication: 'Candidature Spontanée',

    // Contact Section
    getInTouch: 'Contactez-nous',
    contactDesc: 'Des questions ? Nous sommes là pour vous aider',
    phone: 'Téléphone',
    email: 'Email',
    address: 'Adresse',
    available247: 'Disponible 24/7 pour le support',
    liveChatSupport: 'Support Chat en Direct',
    liveChatDesc: 'Connectez-vous instantanément avec notre équipe',
    startChat: 'Démarrer le chat',
    sendMessage: 'Envoyez-nous un message',
    fullName: 'Nom complet',
    emailAddress: 'Adresse email',
    subject: 'Sujet',
    selectSubject: 'Sélectionnez un sujet',
    generalInquiry: 'Demande générale',
    technicalSupport: 'Support technique',
    partnership: 'Partenariat',
    billing: 'Facturation',
    message: 'Message',
    send: 'Envoyer',

    // Footer
    footerTagline: 'Logistique durable pour un meilleur avenir',
    quickLinks: 'Liens Rapides',
    support: 'Support',
    faq: 'FAQ',
    privacyPolicy: 'Politique de Confidentialité',
    terms: 'Conditions Générales',
    newsletter: 'Newsletter',
    newsletterDesc: 'Inscrivez-vous pour les actualités et offres',
    emailPlaceholder: 'Entrez votre email',
    subscribe: 'S\'abonner',
    allRightsReserved: 'Tous droits réservés',
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};