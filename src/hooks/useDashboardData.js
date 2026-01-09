import { useQuery } from '@tanstack/react-query';
import apiService from '../services/api';

const useDashboardData = () => {
  const statsQuery = useQuery({
    queryKey: ['stats'],
    queryFn: apiService.getStats,
  });

  const consultationQuery = useQuery({
    queryKey: ['consultationTrend'],
    queryFn: apiService.getConsultationTrend,
  });

  const prescriptionQuery = useQuery({
    queryKey: ['prescriptionTrend'],
    queryFn: apiService.getPrescriptionTrend,
  });

  const activeDoctorsQuery = useQuery({
    queryKey: ['activeDoctors'],
    queryFn: apiService.getActiveDoctors,
  });

  const specializationsQuery = useQuery({
    queryKey: ['specializations'],
    queryFn: apiService.getSpecializations,
  });

  const recentPatientsQuery = useQuery({
    queryKey: ['recentPatients'],
    queryFn: apiService.getRecentPatients,
  });

  const isLoading = 
    statsQuery.isLoading ||
    consultationQuery.isLoading ||
    prescriptionQuery.isLoading ||
    activeDoctorsQuery.isLoading ||
    specializationsQuery.isLoading ||
    recentPatientsQuery.isLoading;

  const isError = 
    statsQuery.isError ||
    consultationQuery.isError ||
    prescriptionQuery.isError ||
    activeDoctorsQuery.isError ||
    specializationsQuery.isError ||
    recentPatientsQuery.isError;

  return {
    data: {
      stats: statsQuery.data || [],
      consultationTrend: consultationQuery.data || [],
      prescriptionTrend: prescriptionQuery.data || [],
      activeDoctors: activeDoctorsQuery.data || [],
      specializations: specializationsQuery.data || [],
      recentPatients: recentPatientsQuery.data || [],
    },
    isLoading,
    isError,
  };
};

export default useDashboardData;