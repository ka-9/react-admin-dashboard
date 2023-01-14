import React from 'react'
import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs'
import { Header } from '../components'
import { useStateContext } from '../contexts/ContextProvider'

const ColorPicker = () => {
  const { setColor } = useStateContext();
  const change = (args) => {
    document.getElementById('preview').style.backgroundColor = args.currentValue.hex;
    setColor(args.currentValue.hex);
  }

  return (
    <div className=' mt-24 p-2 md:p-10 bg-white rounded-3xl'>
      <Header  
        category="App"
        title="Color Picker"
      />
      <div className='my-2 md:mb-10 text-semibold'>
        Pick a color from the palettes to update your theme.
      </div>
      <div className='text-center'>
        <div id='preview' />
        <div className='flex justify-center items-center gap-20 flex-wrap'>
          <div>
            <p className='text-2xl font-semibold mt-2 mb-4'>Inline Palette</p>
            <ColorPickerComponent 
              id='inline-palette'
              mode='Palette'
              modeSwitcher={false}
              inline
              showButtons={false}
              change={change}
            />
          </div>
          <div>
            <p className='text-2xl font-semibold mt-2 mb-4'>Inline Picker</p>
            <ColorPickerComponent 
              id='inline-picker'
              mode='Picker'
              modeSwitcher={false}
              inline
              showButtons={false}
              change={change}
            />
          </div>

        </div>


      </div>
    </div>
  )
}

export default ColorPicker