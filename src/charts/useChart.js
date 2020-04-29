import React, {useState} from 'react';

const useChart = (legendPosition = 'top', data) => {
    const initialData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
          label: 'Month dataset',
          backgroundColor: [
              'rgba(255,99,132,0.6)',
              'rgba(54,162,235,0.6)',
              'rgba(255,206,86,0.6)',
              'rgba(75,192,192,0.6)',
              'rgba(153,102,255,0.6)',
              'rgba(255,159,64,0.6)',
              'rgba(255,99,132,0.6)'
          ],
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: data
        }]
    };

    const chartOptions = {
        maintainAspectRatio: true,
        title:{
            display: true,
            text: 'Month wise dataset',
            fontSize: 22
        },
        legend:{
            display: true,
            position: legendPosition,
            labels:{
                fontColor: '#000'
            }
        }
    };
    
    const [chartdata, setChartData] = useState(initialData);

    return {
        chartdata,
        chartOptions
    }
}

export default useChart