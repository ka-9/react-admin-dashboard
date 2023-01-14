import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject, Toolbar } from '@syncfusion/ej2-react-grids'
import { ordersData, contextMenuItems, ordersGrid } from '../data/dummy'
import { Header } from '../components'
import { Grid } from '@syncfusion/ej2-react-grids/src';

export default class Orders extends React.Component {    
  render() {
    function toolbarClick(args) {
      if (args.item.properties.text === 'PDF Export') {
          this.gridComp.pdfExport();
      }
      if (args.item.properties.text === 'Excel Export') {
          this.gridComp.excelExport();
      }
    }
    return (
      <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
        <Header
          title="Orders"
          category="Page"
        />
        <GridComponent 
          id='gridComp'
          dataSource={ordersData}
          toolbar={['PdfExport', 'ExcelExport']}
          toolbarClick={toolbarClick.bind(this)}
          ref={(grid) => { this.gridComp = grid; }}
          allowPaging
          allowSorting
          allowPdfExport
          allowExcelExport
        >
          <ColumnsDirective>
            {ordersGrid.map((item, index)=>
              <ColumnDirective key={index} {...item} />
            )}
          </ColumnsDirective>
          <Inject services={[Resize, Sort, ContextMenu, Page, ExcelExport, PdfExport, Filter, Edit, Toolbar]} />
        </GridComponent>
      </div>
    )
  }
}

