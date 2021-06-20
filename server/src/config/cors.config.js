import ENV from '../utils/env';

// Local host for Client set to PORT:3005 for development

const CORS_CONFIG = {
  origin: ENV.CORS_URL || 'http://localhost:3005'
};

export default CORS_CONFIG;
