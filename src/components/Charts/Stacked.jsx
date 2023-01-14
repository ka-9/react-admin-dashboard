import React, { Component } from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, StackingColumnSeries, Tooltip } from '@syncfusion/ej2-react-charts'
import { stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from '../../data/dummy'

export default class Stacked extends Component {
  render() {
    const { width, height } = this.props;
    return (
      <ChartComponent
        width={width}
        height={height}
        id="charts"
        primaryXAxis={stackedPrimaryXAxis}
        primaryYAxis={stackedPrimaryYAxis}
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enabled: true }}
        legendSettings={{ background: 'white' }}
      >
        <Inject services={[Legend, Category, StackingColumnSeries, Tooltip ]} />
        <SeriesCollectionDirective>
          {stackedCustomSeries.map((item, index)=><SeriesDirective key={index} {...item} />)}
        </SeriesCollectionDirective>
      </ChartComponent>
    )
  }
}
