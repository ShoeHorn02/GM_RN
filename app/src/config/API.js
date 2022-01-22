// Base API
export const API_BASE_USER = 'twitter';
export const API_BASE_PROJECT = 'bootstrap';
export const API_BASE_URL = `https://api.github.com/repos/${API_BASE_USER}/${API_BASE_PROJECT}`;

// COMMITS (https://docs.github.com/en/rest/reference/commits#list-commits)
export const API_COMMITS = `${API_BASE_URL}/commits?per_page=5&page=`;
