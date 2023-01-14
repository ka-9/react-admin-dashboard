import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Edit, Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids/src'
import { customersData, customersGrid } from '../data/dummy'
import { Header } from '../components'

export default class Customers extends React.Component {
  render() {
    return (
      <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
        <Header
          title="Customers"
          category="Page"
        />
        <GridComponent 
          dataSource={customersData}
          allowPaging
          allowSorting
          editSettings={{ 
            allowDeleting: true, 
            allowEditing: true,
          }}
          toolbar={['Delete']}
          width='auto'
        >
          <ColumnsDirective>
            {customersGrid.map((item, index)=>
              <ColumnDirective key={index} {...item} />
            )}
          </ColumnsDirective>
          <Inject services={[ Page, Toolbar, Edit, Selection, Sort, Filter ]} />
        </GridComponent>
      </div>
    )
  }
}