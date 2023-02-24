import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  '*': {
    margin: 0,
    padding: 0,
    'box-sizing': 'border-box',
  },
  styles: {
    global: {
      'html, body': {
        height: '100%',
        bg: 'blackAlpha.700',
        color: 'gray.100',
        letterSpacing: "wide",
        scrollBehavior: 'smooth',
      },
      '::-webkit-scrollbar': {
        width: '4px',
      },
      '::-webkit-scrollbar-track': {
        boxShadow: 'inset 0 0 5px #2c303c', 
        borderREadius: '10px',
      },
      '::-webkit-scrollbar-thumb': {
        background: 'pink.500', 
        borderRadius: '10px',
      },
      '::-webkit-scrollbar-thumb:hover': {
        background: 'pink.500', 
      }
    }
  },

  fonts: {
    heading: 'Exo, sans-serif',
    body: 'Exo, sans-serif',
  },

  colors: {
    blackAlpha: {
      "900": "#0D0E12",
      "800": "#121419",
      "700": "#181a21",
      "600": "#242731",
    },
    gray: {
      "800": "#2c303c",
      "600": "#4a5568",
      "400": "#a0aec0",
      "300": "#cbd5e0",
      "100": "#e2e8f0",
    },
    pink: {       
      "500": "#FF69F9",       
    },
  }
});
