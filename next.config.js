/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    REACT_APP_SERVICE_ID: process.env.REACT_APP_SERVICE_ID,
    REACT_APP_TEMPLATE_ID: process.env.REACT_APP_TEMPLATE_ID,
    REACT_APP_PUBLIC_KEY: process.env.REACT_APP_PUBLIC_KEY,
    REACT_APP_CAPTCHA_KEY: process.env.REACT_APP_CAPTCHA_KEY
  }
};

module.exports = nextConfig;
