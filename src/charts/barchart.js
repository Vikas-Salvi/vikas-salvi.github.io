import React, { useState } from 'react';
import {Bar} from 'react-chartjs-2';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import useChart from './useChart';
  
const BarChart = () => {
    const data = [65, 59, 80, 81, 56, 55, 40];
    const {chartdata, chartOptions} = useChart("top",data);
    
    return(
    <Card variant="outlined">
        <CardHeader title="Bar Chart" subheader=""/>
        <CardContent>
            <Bar 
            data={chartdata}
            options={
                chartOptions
            }
            />            
        </CardContent>  
        <CardActions>            
        </CardActions>    
    </Card>
    )
}

export default BarChart