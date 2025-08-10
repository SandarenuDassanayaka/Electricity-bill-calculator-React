/** @type {import('tailwindcss').Config} */

import plugin from 'tailwindcss/plugin';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './public/assets/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        },
      colors: {
        color: {
          1: '#4982b8',
          2: '#424CA0',
          3: '#5FBEE4',
          4: '#7ADB78',
          5: '#858DFF',
          6: '#FF98E2',
          7: '#E2B6F2',
          topic2: '#666666',
          topic: '#4C4C4C',
          paragraph: '#797979',
          mobileBG: '#feeacf',
          mobileBG_Light: '#feeed7',
          mobileBg_Dark:'#f2a152'
        },
        stroke: {
          1: '#26242C'
        },
        n: {
          1: '#FFFFFF',
          2: '#CAC6DD',
          3: '#ADA8C3',
          4: '#757185',
          5: '#3F3A52',
          6: '#252134',
          7: '#15131D',
          8: '#0E0C15',
          9: '#474060',
          10: '#43435C',
          11: '#1B1B2E',
          12: '#2E2A41',
          13: '#6C7275'
        }
      },
      screens: {
        'max-sm': { max: '639px' },
        xs: '480px',
        // => @media (min-width: 480px) { ... }
        sm: '640px',
        // => @media (min-width: 640px) { ... }
        md: '768px',
        // => @media (min-width: 768px) { ... }
        lg: '1024px',
        // => @media (min-width: 1024px) { ... }
        xl: '1280px',
        // => @media (min-width: 1280px) { ... }
        '2xl': '1536px'
        // => @media (min-width: 1536px) { ... }
      },
      fontFamily: {
        poppins: ['Poppins', 'serif'],
        montserrat: ['Montserrat', 'serif'],
        sansation: ['Sansation', 'sans-serif'],
        sans: ['Fira Sans', 'sans-serif'],
        code: 'var(--font-code)',
        grotesk: 'var(--font-grotesk)',
        wixMadefor: ['Wix Madefor Text'],
        arial: ['Arial']
      },
      letterSpacing: {
        tagline: '.15em'
      },
      spacing: {
        0.25: '0.0625rem',
        7.5: '1.875rem',
        15: '3.75rem'
      },
      opacity: {
        15: '.15'
      },
      keyframes: {
        "pulsering": {
          "0%": { "box-shadow": "0 0 0 0 rgba(82, 82, 82, 0.3)" },
          "80%": { "box-shadow": "0 0 0 20px rgba(82, 82, 82, 0)" },
          "100%": { "box-shadow": "0 0 0 0 rgba(80, 80, 80, 0)" },
        },
        'fade-in': {
          '0%': {
            opacity: 0
          },
          '100%': {
            opacity: 1
          }
        }
      },
      'fade-out': {
        '0%': {
          opacity: 1
        },
        '100%': {
          opacity: 0
        },
        'fly-in': {
          '0%': {
            opacity: '0',
            transform: 'scale3d(0.3, 0.3, 0.3)',
            transitionTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)'
          },
          '20%': {
            transform: 'scale3d(1.1, 1.1, 1.1)'
          },
          '40%': {
            transform: 'scale3d(0.9, 0.9, 0.9)'
          },
          '60%': {
            opacity: '1',
            transform: 'scale3d(1.03, 1.03, 1.03)'
          },
          '80%': {
            transform: 'scale3d(0.97, 0.97, 0.97)'
          },
          '100%': {
            opacity: '1',
            transform: 'scale3d(1, 1, 1)'
          }
        },
        fadeIn: {
          '0%': {
            opacity: '0',
            transform: 'translateY(-60px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        }
      },
      animation: {
        fadeIn: 'fadeIn 2s ease-in-out',
        fadein: 'fade-in 2s linear 1',
        fadeout: 'fade-out 1s ease-out 0.50s 1',
        flyin: 'fly-in 0.6s ease-in-out 0.25s 1',
        dropin: 'drop-in 0.50s 1',
        dropdown: 'drop-down 2s ease-in-out forwards',
        pulsering: "pulse-ring 2s cubic-bezier(0.4, 0, 0.6, 1) infinite"
      },
      transitionDuration: {
        DEFAULT: '200ms'
      },
      transitionTimingFunction: {
        DEFAULT: 'linear'
      },
      zIndex: {
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        5: '5'
      },
      borderWidth: {
        DEFAULT: '0.0625rem'
      }
    }
  },
  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities }) {
      addBase({});
      addComponents({
        '.container': {
          '@apply max-w-[77.5rem] mx-auto px-5 md:px-10 lg:px-15 xl:max-w-[87.5rem]': {}
        },
        '.h1': {
          '@apply font-semibold text-[2.5rem] leading-[3.25rem] md:text-[2.75rem] md:leading-[3.75rem] lg:text-[3.25rem] lg:leading-[4.0625rem] xl:text-[3.75rem] xl:leading-[4.5rem]':
            {}
        },
        '.h2': {
          '@apply text-[1.75rem] leading-[2.5rem] md:text-[2rem] md:leading-[2.5rem] lg:text-[2.5rem] lg:leading-[3.5rem] xl:text-[3rem] xl:leading-tight':
            {}
        },
        '.h3': {
          '@apply text-[2rem] leading-normal md:text-[2.5rem]': {}
        },
        '.h4': {
          '@apply text-[2rem] leading-normal': {}
        },
        '.h5': {
          '@apply text-2xl leading-normal': {}
        },
        '.h6': {
          '@apply font-semibold text-lg leading-8': {}
        },
        '.body-1': {
          '@apply text-[0.875rem] leading-[1.5rem] md:text-[1rem] md:leading-[1.75rem] lg:text-[1.25rem] lg:leading-8':
            {}
        },
        '.body-2': {
          '@apply font-light text-[0.875rem] leading-6 md:text-base': {}
        },
        '.caption': {
          '@apply text-sm': {}
        },
        '.tagline': {
          '@apply font-grotesk font-light text-xs tracking-tagline uppercase': {}
        },
        '.quote': {
          '@apply font-code text-lg leading-normal': {}
        },
        '.button': {
          '@apply font-code text-xs font-bold uppercase tracking-wider': {}
        }
      });
      addUtilities({
        '.tap-highlight-color': {
          '-webkit-tap-highlight-color': 'rgba(0, 0, 0, 0)'
        }
      });
    })
  ]
};
