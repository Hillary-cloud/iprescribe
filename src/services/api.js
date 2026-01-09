const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Helper function to get auth headers
const getAuthHeaders = () => {
  const token = localStorage.getItem('token');
  return {
    'Content-Type': 'application/json',
    Authorization: token ? `Bearer ${token}` : '',
  };
};

const apiService = {
  /* ===========================
     AUTH
  ============================ */
  async login(credentials) {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
    });

    const result = await response.json();

    if (!response.ok || result.status !== 200) {
      throw new Error(result.message || 'Login failed');
    }

    return result;
  },

  /* ===========================
     DASHBOARD
  ============================ */
  async getStats() {
    const response = await fetch(`${API_BASE_URL}/admin/dashboard/stats`, {
      headers: getAuthHeaders(),
    });
    if (!response.ok) throw new Error('Failed to fetch stats');

    const result = await response.json();
    const { data } = result;

    return [
      {
        id: 1,
        title: 'Total Patients',
        value: data.patients.total_patients,
        change: data.patients.patients_percentage_since_last_week / 100,
        period: 'Since last week',
        color: '#8B5CF6',
        bgColor: '#F5F3FF',
      },
      {
        id: 2,
        title: 'Virtual Doctors',
        value: data.doctors.total_doctors,
        change: data.doctors.doctors_percentage_since_last_week / 100,
        period: 'Since last week',
        color: '#3B82F6',
        bgColor: '#EFF6FF',
      },
      {
        id: 3,
        title: 'Pending Reviews',
        value: data.pending_reviews.total_pending_reviews,
        change: data.pending_reviews.pending_reviews_percentage_since_last_week / 100,
        period: 'Since last week',
        color: '#F59E0B',
        bgColor: '#FFFBEB',
      },
      {
        id: 4,
        title: 'Total Consultations',
        value: data.consultations.total_consultations,
        change: data.consultations.consultations_percentage_since_last_week / 100,
        period: 'Since last week',
        color: '#10B981',
        bgColor: '#ECFDF5',
      },
      {
        id: 5,
        title: 'Prescriptions Issued',
        value: data.prescriptions.total_prescriptions,
        change: data.prescriptions.prescriptions_percentage_since_last_week / 100,
        period: 'Since last week',
        color: '#EF4444',
        bgColor: '#FEF2F2',
      },
    ];
  },

  async getConsultationTrend() {
    const response = await fetch(`${API_BASE_URL}/admin/dashboard/stats`, {
      headers: getAuthHeaders(),
    });
    if (!response.ok) throw new Error('Failed to fetch consultation trend');

    const result = await response.json();
    return result.data.consultationOverTime.map((item, index) => ({
      id: index + 1,
      month: item.month,
      value: item.count,
    }));
  },

  async getPrescriptionTrend() {
    const response = await fetch(`${API_BASE_URL}/admin/dashboard/stats`, {
      headers: getAuthHeaders(),
    });
    if (!response.ok) throw new Error('Failed to fetch prescription trend');

    const result = await response.json();
    return result.data.prescriptionVolumeTrend.map((item, index) => ({
      id: index + 1,
      month: item.month,
      value: item.count,
    }));
  },

  async getActiveDoctors() {
    const response = await fetch(`${API_BASE_URL}/admin/dashboard/stats`, {
      headers: getAuthHeaders(),
    });
    if (!response.ok) throw new Error('Failed to fetch active doctors');

    const result = await response.json();
    const { categories, series } = result.data.active_doctors_vs_patients;

    const doctorsSeries = series.find(s => s.name === 'Active Doctors');
    const patientsSeries = series.find(s => s.name === 'Active Patients');

    return categories.map((month, index) => ({
      id: index + 1,
      month,
      doctors: doctorsSeries?.data[index] || 0,
      patients: patientsSeries?.data[index] || 0,
    }));
  },

  async getSpecializations() {
    const response = await fetch(`${API_BASE_URL}/admin/dashboard/stats`, {
      headers: getAuthHeaders(),
    });
    if (!response.ok) throw new Error('Failed to fetch specializations');

    const result = await response.json();
    const colors = ['#10B981', '#F59E0B', '#3B82F6', '#8B5CF6', '#EF4444'];

    return result.data.top_specialities_in_demand.map((item, index) => ({
      id: index + 1,
      name: item.speciality,
      value: item.count,
      color: colors[index % colors.length],
    }));
  },

  async getRecentPatients() {
    const response = await fetch(`${API_BASE_URL}/admin/patients`, {
      headers: getAuthHeaders(),
    });
    if (!response.ok) throw new Error('Failed to fetch recent patients');

    const result = await response.json();
    return result.data.data.map((patient) => ({
      id: patient.id,
      signUpDate: patient.created_at.split('T')[0],
      name: `${patient.first_name || ''} ${patient.last_name || ''}`.trim() || 'N/A',
      email: patient.email || patient.user?.email || 'N/A',
      phone: patient.phone || patient.user?.phone || 'N/A',
      lastVisit: patient.last_seen
        ? patient.last_seen.replace('T', ' ').split('.')[0]
        : 'N/A',
      location: patient.state || patient.user?.state || 'N/A',
      device:
        patient.user?.devices?.[0]?.platform === 'android'
          ? 'Android'
          : patient.user?.devices?.[0]?.platform === 'ios'
          ? 'iOS'
          : 'N/A',
      status:
        patient.user?.email_verified_at || patient.user?.phone_verified_at
          ? 'Verified'
          : 'Pending',
    }));
  },
};

export default apiService;
