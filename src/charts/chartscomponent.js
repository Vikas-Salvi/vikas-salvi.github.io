import React from 'react';
import BarChart from './barchart';
import DonutChartComponent from './donutchart';

const Charts = () => {
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 text-center">
                    <h1>Charts</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-6 text-center">
                    <BarChart></BarChart>
                </div>
                <div className="col-6 text-center">
                    <DonutChartComponent></DonutChartComponent>
                </div>
            </div>            
        </div>
    )
}

export default Charts