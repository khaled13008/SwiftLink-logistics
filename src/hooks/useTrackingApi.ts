import { useQuery } from 'react-query';
import { packageService } from '../services/api';

interface TrackingData {
  status: string;
  location: string;
  estimatedDelivery: string;
  updates: Array<{
    timestamp: string;
    message: string;
    location: string;
  }>;
}

export const useTrackingApi = (trackingNumber: string) => {
  return useQuery<TrackingData>(
    ['tracking', trackingNumber],
    () => packageService.trackPackage(trackingNumber),
    {
      enabled: Boolean(trackingNumber),
      staleTime: 30000, // Consider data fresh for 30 seconds
      cacheTime: 3600000, // Keep data in cache for 1 hour
      retry: 1,
    }
  );
};