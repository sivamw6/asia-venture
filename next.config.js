const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require('next/constants')

module.exports = (phase) => {
  // Setting Phase
  const isDev = phase === PHASE_DEVELOPMENT_SERVER
  const isProd = phase === PHASE_PRODUCTION_BUILD
  console.log(`isDev:${isDev}  isProd:${isProd}`)

  const reactStrictMode = true;

  const images = {
    remotePatterns: [

      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      
    ]

  }

  const env ={
    SERVER_NAME: (()=>{
      if(isDev)
        return 'http://localhost:3000'
      if(isProd)
        return 'https://asia-venture.vercel.app/'
      
    })(),
    WEATHER_API_KEY: process.env.WEATHER_API_KEY,
    NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID,
  }
  return {
    reactStrictMode,
    images,
    env
  }
}
