// import { createTheme } from '@mui/material/styles';
//
// const themeOptions = {
//   palette: {
//     mode: 'light',
//     primary: {
//       main: '#4CAF50',
//       light: '#80E27E',
//       dark: '#087F23',
//       contrastText: '#FFFFFF',
//     },
//     secondary: {
//       main: '#FFC107',
//       light: '#FFE082',
//       dark: '#C79100',
//       contrastText: '#212121',
//     },
//     background: {
//       default: '#FFFFFF',
//       paper: '#F5F5F5',
//     },
//     error: {
//       main: '#F44336',
//       light: '#E57373',
//       dark: '#D32F2F',
//       contrastText: '#FFFFFF',
//     },
//     warning: {
//       main: '#FF9800',
//       light: '#FFB74D',
//       dark: '#F57C00',
//       contrastText: '#212121',
//     },
//     info: {
//       main: '#2196F3',
//       light: '#64B5F6',
//       dark: '#1976D2',
//       contrastText: '#FFFFFF',
//     },
//     success: {
//       main: '#4CAF50',
//       light: '#81C784',
//       dark: '#388E3C',
//       contrastText: '#FFFFFF',
//     },
//     divider: '#BDBDBD',
//     text: {
//       primary: '#212121',
//       secondary: '#757575',
//       disabled: '#BDBDBD',
//       hint: '#757575',
//     },
//   },
//   typography: {
//     htmlFontSize: 16,
//     fontFamily: "'Poppins', sans-serif",
//     fontSize: 14,
//     fontWeightLight: 300,
//     fontWeightRegular: 400,
//     fontWeightMedium: 500,
//     fontWeightBold: 700,
//     h1: {
//       fontFamily: "'Poppins', sans-serif",
//       fontWeight: 700,
//       fontSize: '6rem',
//       lineHeight: 1.167,
//     },
//     h2: {
//       fontFamily: "'Poppins', sans-serif",
//       fontWeight: 600,
//       fontSize: '3.75rem',
//       lineHeight: 1.2,
//     },
//     h3: {
//       fontFamily: "'Poppins', sans-serif",
//       fontWeight: 500,
//       fontSize: '3rem',
//       lineHeight: 1.167,
//     },
//     h4: {
//       fontFamily: "'Poppins', sans-serif",
//       fontWeight: 500,
//       fontSize: '2.125rem',
//       lineHeight: 1.235,
//     },
//     h5: {
//       fontFamily: "'Poppins', sans-serif",
//       fontWeight: 500,
//       fontSize: '1.5rem',
//       lineHeight: 1.334,
//     },
//     h6: {
//       fontFamily: "'Poppins', sans-serif",
//       fontWeight: 500,
//       fontSize: '1.25rem',
//       lineHeight: 1.6,
//     },
//     subtitle1: {
//       fontFamily: "'Roboto', sans-serif",
//       fontWeight: 400,
//       fontSize: '1rem',
//       lineHeight: 1.75,
//     },
//     subtitle2: {
//       fontFamily: "'Roboto', sans-serif",
//       fontWeight: 500,
//       fontSize: '0.875rem',
//       lineHeight: 1.57,
//     },
//     body1: {
//       fontFamily: "'Poppins', sans-serif",
//       fontWeight: 400,
//       fontSize: '1rem',
//       lineHeight: 1.5,
//     },
//     body2: {
//       fontFamily: "'Poppins', sans-serif",
//       fontWeight: 400,
//       fontSize: '0.875rem',
//       lineHeight: 1.43,
//     },
//     button: {
//       fontFamily: "'Poppins', sans-serif",
//       fontWeight: 500,
//       fontSize: '0.875rem',
//       lineHeight: 1.75,
//       textTransform: 'uppercase',
//     },
//     caption: {
//       fontFamily: "'Roboto', sans-serif",
//       fontWeight: 400,
//       fontSize: '0.75rem',
//       lineHeight: 1.66,
//     },
//     overline: {
//       fontFamily: "'Roboto', sans-serif",
//       fontWeight: 400,
//       fontSize: '0.75rem',
//       lineHeight: 2.66,
//       textTransform: 'uppercase',
//     },
//   },
//   spacing: 8,
//   direction: 'rtl',
//   shape: {
//     borderRadius: 4,
//   },
//   overrides: {
//     MuiAppBar: {
//       colorInherit: {
//         backgroundColor: '#689f38',
//         color: '#fff',
//       },
//     },
//     MuiSwitch: {
//       root: {
//         width: 42,
//         height: 26,
//         padding: 0,
//         margin: 8,
//       },
//       switchBase: {
//         padding: 1,
//         '&$checked, &$colorPrimary$checked, &$colorSecondary$checked': {
//           transform: 'translateX(16px)',
//           color: '#fff',
//           '& + $track': {
//             opacity: 1,
//             border: 'none',
//           },
//         },
//       },
//       thumb: {
//         width: 24,
//         height: 24,
//       },
//       track: {
//         borderRadius: 13,
//         border: '1px solid #bdbdbd',
//         backgroundColor: '#fafafa',
//         opacity: 1,
//         transition: 'background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
//       },
//     },
//     MuiButton: {
//       root: {
//         background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
//         border: 0,
//         borderRadius: 3,
//         boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//         color: 'white',
//         height: 48,
//         padding: '0 30px',
//       },
//     },
//     MuiCssBaseline: {
//       '@global': {
//         code: {
//           fontFamily: "'Source Code Pro', monospace",
//           fontWeight: 400,
//           fontSize: '0.875rem',
//           color: '#4CAF50',
//           backgroundColor: '#F5F5F5',
//           padding: '2px 4px',
//           borderRadius: '4px',
//         },
//         pre: {
//           fontFamily: "'Source Code Pro', monospace",
//           fontWeight: 400,
//           fontSize: '0.875rem',
//           color: '#4CAF50',
//           backgroundColor: '#F5F5F5',
//           padding: '8px',
//           borderRadius: '4px',
//           overflowX: 'auto',
//         },
//       },
//     },
//   },
//   props: {
//     MuiAppBar: {
//       color: 'inherit',
//     },
//     MuiButtonBase: {
//       disableRipple: true,
//     },
//     MuiList: {
//       dense: true,
//     },
//     MuiMenuItem: {
//       dense: true,
//     },
//     MuiTable: {
//       size: 'small',
//     },
//     MuiButton: {
//       size: 'small',
//     },
//     MuiButtonGroup: {
//       size: 'small',
//     },
//     MuiCheckbox: {
//       size: 'small',
//     },
//     MuiFab: {
//       size: 'small',
//     },
//     MuiFormControl: {
//       margin: 'dense',
//       size: 'small',
//     },
//     MuiFormHelperText: {
//       margin: 'dense',
//     },
//     MuiIconButton: {
//       size: 'small',
//     },
//     MuiInputBase: {
//       margin: 'dense',
//     },
//     MuiInputLabel: {
//       margin: 'dense',
//     },
//     MuiRadio: {
//       size: 'small',
//     },
//     MuiSwitch: {
//       size: 'small',
//     },
//     MuiTextField: {
//       margin: 'dense',
//       size: 'small',
//     },
//     MuiTooltip: {
//       arrow: true,
//     },
//   },
// };
// export default createTheme(themeOptions);