export const theme = {
  boxShadow: {
    modal: '1px 3px 6px rgba(0, 0, 0, 0.1)',
    card: '0px 4px 8px rgba(0, 0, 0, 0.04)'
  },
  borderRadius: {
    button: '0.25rem',
    input: '0.4rem',
    card: '0.8rem'
  },
  border: {
    solid: (color: string) => `0.1rem solid ${color}`,
    dashed: (color: string) => `0.1rem dashed ${color}`
  },
  font: {
    family:
      "Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    bolder: 900,
    sizes: {
      xxsmall: '1rem',
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.0rem',
      xxlarge: '2.8rem',
      huge: '5.2rem'
    }
  },
  colors: {
    primary: {
      orange: '#f58031'
    },
    secondary: {
      green: '#008014',
      lightGreen: '#94d376',
      red: '#e74c3c',
      darkBlue: '#1d2236',
      blue: '#3498db'
    },
    pastel: {
      darkBlue: '#ABBBD5',
      lightOrange: '#FED2A9',
      lightGreen: '#CEE7A5',
      lightPurple: '#B3B5E9',
      lightRed: '#FF9D88',
      darkGreen: '#95CBAA',
      pink: '#FF82A0'
    },
    neutral: {
      black: '#111820',
      darkGrey: '#696969',
      normalGrey: '#a0a0a0',
      grey: '#ccc',
      lightGrey: '#efefef',
      extraLightGrey: '#f8f8f8',
      white: '#fff'
    },
    shades: {
      primary: {
        orange: (opacity: number) => `rgba(245, 128, 49, ${opacity})`
      },
      secondary: {
        green: (opacity: number) => `rgba(0, 128, 19, ${opacity})`,
        lightGreen: (opacity: number) => `rgba(147, 211, 118, ${opacity})`,
        red: (opacity: number) => `rgba(231, 77, 60, ${opacity})`,
        darkBlue: (opacity: number) => `rgba(29, 34, 54, ${opacity})`,
        blue: (opacity: number) => `rgba(52, 152, 219, ${opacity})`
      },
      pastel: {
        lightOrange: (opacity: number) => `rgba(254, 210, 169, ${opacity})`,
        lightGreen: (opacity: number) => `rgba(206, 231,165, ${opacity})`,
        lightRed: (opacity: number) => `rgba(255,158,136, ${opacity})`,
        darkGreen: (opacity: number) => `rgba(149,203,170, ${opacity})`,
        pink: (opacity: number) => `rgba(255, 13, 159, ${opacity})`
      },
      neutral: {
        black: (opacity: number) => `rgba(0, 0, 0, ${opacity})`,
        darkGrey: (opacity: number) => `rgba(105, 105, 105, ${opacity})`,
        grey: (opacity: number) => `rgba(204, 204, 204, ${opacity})`,
        lightGrey: (opacity: number) => `rgba(239, 239, 239, ${opacity})`,
        extraLightGrey: (opacity: number) => `rgba(248, 248, 248, ${opacity})`,
        white: (opacity: number) => `rgba(255, 255, 255, ${opacity})`
      }
    },
    linear: {
      darkBlue: `linear-gradient(89.66deg, #1D2236 0.42%, rgba(29, 34, 54, 0.8) 32.52%, rgba(29, 34, 54, 0.4) 99.84%)`,
      black: `linear-gradient(180deg, rgba(17, 24, 32, 0.4) 0%, #111820 100%)`,
      lightOrange: `linear-gradient(rgba(245, 143, 49, 0.71), rgba(245, 167, 49, 0.18))`,
      extraLightGrey: `linear-gradient(0deg, #f8f8f8, #f8f8f8) #000000`
    }
  },
  effects: {
    dropShadow: {
      elev1: '0 0.2rem 0.4rem rgba(0, 0, 0, 0.04)',
      elev2: '0 0.4rem 0.8rem rgba(0, 0, 0, 0.04)',
      elev3: '0 0.8rem 1.6rem rgba(0, 0, 0, 0.08)',
      elev4: '0 0.2rem 0.4rem 0 rgba(0, 0, 0, 0.25)',
      leftSidebars: '0.4rem 0 0.8rem rgba(0, 0, 0, 0.04)',
      rightSidebars: '-0.4rem 0 0.8rem rgba(0, 0, 0, 0.04)'
    }
  },
  layers: {
    dragIcon: 2,
    toast: 2,
    testerMessage: 1,
    tooltip: 1,
    popperDialog: 2,
    popperBackdrop: 2,
    sidePanel: 2,
    spinner: 1,
    headerMultiCompaniesModal: 1,
    headerMultiCompaniesPopper: 3,
    appBar: 1,
    backdrop: 1,
    profilePageHeader: 1,
    profilePageCard: 1
  },
  spacings: {
    xxxsmall: '0.4rem',
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem'
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out',
    slow: '1s ease-in-out'
  }
};
