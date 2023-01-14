import React from 'react'
import { render } from 'react-dom'
import { SparklineComponent, Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts'

class Sparkline extends React.PureComponent {
  render (){
    const { id, height, width, type, data, color, currentColor  } = this.props;
    return <div>
      <SparklineComponent 
        id={id} 
        height={height}
        width={width} 
        lineWidth={1} 
        type={type} 
        valueType='Numeric' 
        fill={color} 
        border={{ color: currentColor, width: 2 }}
        dataSource={data}
        xName='x' 
        yName='yval'
        tooltipSettings={{
          visible: true, 
          format: '${x} : data ${yval}',
          trackLineSettings: {
            visible: true,
          }
        }} 
        markerSettings={{ 
          visible: ['All'], 
          size: 2.5, 
          fill: {color} 
        }} 
      >
        <Inject services={[SparklineTooltip]}/>
      </SparklineComponent>
    </div>
  }
}

export default Sparkline