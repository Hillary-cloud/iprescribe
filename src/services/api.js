

const API_BASE_URL = 'http://localhost:3001';

const apiService = {
  async getStats() {
    const response = await fetch(`${API_BASE_URL}/stats`);
    if (!response.ok) throw new Error('Failed to fetch stats');
    return response.json();
  },

  async getConsultationTrend() {
    const response = await fetch(`${API_BASE_URL}/consultationTrend`);
    if (!response.ok) throw new Error('Failed to fetch consultation trend');
    return response.json();
  },

  async getPrescriptionTrend() {
    const response = await fetch(`${API_BASE_URL}/prescriptionTrend`);
    if (!response.ok) throw new Error('Failed to fetch prescription trend');
    return response.json();
  },

  async getActiveDoctors() {
    const response = await fetch(`${API_BASE_URL}/activeDoctors`);
    if (!response.ok) throw new Error('Failed to fetch active doctors');
    return response.json();
  },

  async getSpecializations() {
    const response = await fetch(`${API_BASE_URL}/specializations`);
    if (!response.ok) throw new Error('Failed to fetch specializations');
    return response.json();
  },

  async getRecentPatients() {
    const response = await fetch(`${API_BASE_URL}/recentPatients`);
    if (!response.ok) throw new Error('Failed to fetch recent patients');
    return response.json();
  },
};
export default apiService;