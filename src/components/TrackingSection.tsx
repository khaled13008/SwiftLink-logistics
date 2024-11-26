import React, { useState } from 'react';
import { Search, Package, MapPin, Calendar } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTrackingApi } from '../hooks/useTrackingApi';
import { motion } from 'framer-motion';

const TrackingSection = () => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const { t } = useLanguage();
  const { data, isLoading, error } = useTrackingApi(trackingNumber);

  const handleTracking = (e: React.FormEvent) => {
    e.preventDefault();
    // Tracking is handled by useTrackingApi
  };

  return (
    <section id="track" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('trackPackage')}
          </h2>
          <p className="text-xl text-gray-600">
            {t('trackingDesc')}
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          <form onSubmit={handleTracking} className="mb-8">
            <div className="relative">
              <input
                type="text"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                placeholder="Enter tracking number"
                className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-md hover:bg-blue-700 transition-colors"
              >
                Track
              </motion.button>
            </div>
          </form>

          {isLoading && (
            <div className="text-center text-gray-600">
              Loading tracking information...
            </div>
          )}

          {error && (
            <div className="text-center text-red-600">
              Error loading tracking information. Please try again.
            </div>
          )}

          {data && (
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center">
                  <Package className="h-8 w-8 text-blue-600 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">Status</p>
                    <p className="font-semibold">{data.status}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-8 w-8 text-blue-600 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="font-semibold">{data.location}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-8 w-8 text-blue-600 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">Estimated Delivery</p>
                    <p className="font-semibold">{data.estimatedDelivery}</p>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="font-semibold mb-4">Tracking Updates</h3>
                <div className="space-y-4">
                  {data.updates.map((update, index) => (
                    <div key={index} className="flex items-start">
                      <div className="h-2 w-2 mt-2 rounded-full bg-blue-600 mr-3" />
                      <div>
                        <p className="text-sm text-gray-500">{update.timestamp}</p>
                        <p className="font-medium">{update.message}</p>
                        <p className="text-sm text-gray-600">{update.location}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TrackingSection;