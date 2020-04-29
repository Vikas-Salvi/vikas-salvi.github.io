import React from 'react';
import {Doughnut} from 'react-chartjs-2';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import useChart from './useChart';

const DonutChartComponent = () => {
    const data = [40, 55, 56, 71, 70, 60, 65];
    const {chartdata, chartOptions} = useChart("right", data);

    return(
    <Card variant="outlined">
        <CardHeader title="Donut Chart" subheader=""/>
        <CardContent>
            <Doughnut
            data={chartdata}
            options={
                chartOptions
            }/>
        </CardContent>      
    </Card>
    )
}

export default DonutChartComponent