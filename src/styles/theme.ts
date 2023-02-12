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
      "850": "#0f1014",
      "800": "#121419",
      "700": "#181a21",
      "600": "#242731",
      "500": "#130f11"
    },
    gray: {
      "100": "#2c303c",
    },
    pink: {       
      "800": "#a90f64",  
      "700": "#D1107A",       
      "600": "#C950C4",       
      "500": "#FF69F9",       
    },
  }
});