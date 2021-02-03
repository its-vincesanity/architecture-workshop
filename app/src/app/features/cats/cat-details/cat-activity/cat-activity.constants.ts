const OPTIONS = {
  chartArea: {width: '100%'},
  colors: ['#2ecc71', '#e67e22', '#2980b9'],
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
    position: 'top',
    maxLines: 3,
    textStyle: {
      color: '#ffffff'
    },
  },
};

export const CAT_ACTIVITY_CONSTANTS = {
  CHART: {
    OPTIONS,
    TYPE: 'LineChart'
  }
};
