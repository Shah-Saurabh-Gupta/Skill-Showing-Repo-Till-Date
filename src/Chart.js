import React from 'react'
import LineChart from './components/LineChart'
import BarChart from './components/BarChart'
import DoughnutChart from './components/DoughnutChart'

function Chart() {
    return (
        <div className='chart-wrapper'>
            <div className='chart'>
                <LineChart />
                <BarChart />
                <DoughnutChart />
            </div>
        </div>
    )
}

export default Chart
