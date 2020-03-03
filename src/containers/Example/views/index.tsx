import React, { useState, useEffect } from 'react';

import Reactron from 'reactron';
import { doSomething } from 'shared/state/example';

import Containers, { ContainerTypes } from 'containers';

const Example = () => {
  const { storeClient, windowClient } = Reactron.clients;
  const [value] = storeClient.useStore('__.windows.instances');

  useEffect(() => {
    // console.clear();
    console.log(value)
  }, [value]);

  const renderWindowRefs = (value: { [key: string]: { alias: string, bounds: { x: string, y: string, width: string, height: string } } }) => Object.entries(value).map(([id, { alias, bounds }]) => {
    return (
      <div key={id} style={{display: 'flex', backgroundColor: '#ffffff', border: 'solid 1px #e5e5e5', margin: 5, padding: 5}}>
        <div style={{flex: '1 1 auto'}}>{ id }</div>
        <div style={{flex: '1 1 auto'}}>{ alias }</div>
        <div style={{flex: '1 1 auto'}}>{ bounds.x }|{ bounds.y }|{ bounds.width }|{ bounds.height }</div>
      </div>
    )
  });

  return (
    <div>
      { (value) ? renderWindowRefs(value) : null }
      <button>doSomething</button>
    </div>
  )
}

const Example2 = () => {
  const [selectValue, setSelectValue] = useState('');
  const [widthValue, setWidthValue] = useState(640);
  const [heightValue, setHeightValue] = useState(480);
  const [value] = storeClient.useStore('__.windows.refs');
  // const { id } = windowClient.getStaticWindowProperties();

  useEffect(() => {
    console.log(value)
  }, [value]);

  const handleWidthChange = (e: any) => {
    console.log(e.target.value)
    setWidthValue(e.target.value)
  }

  const handleHeightChange = (e: any) => {
    setHeightValue(e.target.value)
  }

  const handleChange = (e: any) => {
    setSelectValue(e.target.value)
  }

  const handleSubmit = () => {
    console.log(widthValue, heightValue)
    if (selectValue) {
      windowClient.open({
        payload: {
          containerType: selectValue,
          width: Number(widthValue),
          height: Number(heightValue)
        }
      });
    }
  }

  return (
    <div>
      <h1>Example Container</h1>
      <input value={widthValue} onChange={handleWidthChange}/>
      <input value={heightValue} onChange={handleHeightChange}/>
      <select onChange={handleChange} value={selectValue}>
        <option disabled value={''} style={{color: '#d5d5d5'}}> Select.. </option>

        {
          Object.values(ContainerTypes).map(containerType => {
            return (
              <option key={containerType} value={containerType}>
                { Containers[containerType].displayName }
              </option>
            )
          })
        }
      </select>

      <button onClick={handleSubmit} disabled={(selectValue.length === 0)}>Create</button><br /><br />

      <button onClick={() => doSomething({ number: 500 })}>{ "doSomething({ number: 500 })" }</button>
      <button onClick={() => doSomething({ string: 'banana' })}>{ "doSomething({ string: 'banana' })" }</button>
      <button onClick={() => doSomething({ object: { fruit: 'banana '} })}>{ "doSomething({ object: { fruit: 'banana' } })" }</button>
      <button onClick={() => doSomething({ array: ['banana', 'apple', 'orange'] })}>{ "doSomething({ array: ['banana', 'apple', orange] })" }</button>
    </div>
  )
}

export default Example;
