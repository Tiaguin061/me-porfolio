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
        color: 'gray.50',
        letterSpacing: "wide",
        scrollBehavior: 'smooth',
      },
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
      "100": "#2c303c",
      "50": "#e2e8f0",
    },
    pink: {       
      "500": "#FF69F9",       
    },
  }
});