const BASE_LEGEND_OPTIONS = {
  position: 'top',
  maxLines: 3,
};

const BASE_OPTIONS = {
  chartArea: {width: '100%'},
  colors: ['#2ecc71', '#e67e22', '#2980b9'],
  legend: BASE_LEGEND_OPTIONS,
};

const DARK_THEME_OPTIONS = {
  ...BASE_OPTIONS,
  backgroundColor: '#424242',
  hAxis: {
    textStyle: {
        color: '#ffffff'
    },
  },
  vAxis: {
      textStyle: {
          color: '#ffffff'
      },
  },
  titleTextStyle: {
      color: '#ffffff'
  },
  legend: {
    textStyle: {
      color: '#ffffff'
    },
    ...BASE_LEGEND_OPTIONS
  },
};

const LIGHT_THEME_OPTIONS = {
  ...BASE_OPTIONS,
  backgroundColor: '#ffffff',
  hAxis: {
    textStyle: {
        color: '#0e0e0e'
    },
  },
  vAxis: {
      textStyle: {
          color: '#0e0e0e'
      },
  },
  titleTextStyle: {
      color: '#0e0e0e'
  },
  legend: {
    textStyle: {
      color: '#0e0e0e'
    },
    ...BASE_LEGEND_OPTIONS
  },
};



export const CAT_ACTIVITY_CONSTANTS = {
  CHART: {
    BASE_OPTIONS,
    DARK_THEME_OPTIONS,
    LIGHT_THEME_OPTIONS,
    TYPE: 'LineChart'
  }
};
