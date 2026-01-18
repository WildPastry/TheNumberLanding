/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        'max460': {'max': '460px'},
        'max674': {'max': '674px'},
        'max783': {'max': '783px'},
        'min1120': {'min': '1120px'},
        'min460': {'min': '460px'},
        'max515': {'max': '515px'},
        'min460max674': {'min': '460px','max': '674px'},
        'min674': {'min': '674px'},
        'min850': {'min': '850px'},
        'min674max790': {'min': '674px','max': '790px'},
        'min790max850': {'min': '790px', 'max': '850px'},
        'min850max935': {'min': '850px', 'max': '935px'},
        'min935max1120': {'min': '935px', 'max': '1120px'}
      }
    }
  },
  plugins: []
};
