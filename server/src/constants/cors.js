import '../utils/env.js';

// Local host for Client set to PORT:3005 for development

export const CORS_ORIGIN = {
  origin: process.env.CORS_URL || 'http://localhost:3005'
};
