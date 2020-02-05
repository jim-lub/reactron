import React, { useState, useEffect } from 'react';
import { storeClient } from '@clients/index';
import { getCurrentWindowId } from '@renderer/lib/utils';

interface Props {
  id: string,
  type: string
}

const WindowList = () => {
  const [windowList, setWindowList] = useState<Array<Props>>([]);
  const currentWindowId = getCurrentWindowId();

  const handleRefresh = async () => {
    const result: any = await storeClient.get('_windows.refs');

    if (result) {
      const list = Object.entries(result).map(([key, values]: any) => {
        return ({
          id: key,
          type: values.type
        })
      });

      setWindowList(list);
    }
  }

  return (
    <>
      <div>
        <button onClick={handleRefresh}>Refresh</button>
      </div>
      <ul>
        {
          windowList.map(({ id, type }: Props) => {
            return (
              <li key={id} style={{backgroundColor: (id === currentWindowId) ? '#dcedc8' : ''}}>
                <div style={{display: 'flex', flexWrap: 'nowrap', justifyContent: 'space-around'}}>
                  <div style={{flex: '5 1 auto', padding: '3px 6px', fontWeight: 'bold'}}>{ type }</div>
                  <div style={{flex: '0 0 auto'}}>
                    <button>Focus</button>
                    <button>Minimize</button>
                    <button>Maximize</button>
                    <button>Close</button>
                  </div>
                </div>
              </li>
            )
          })
        }
      </ul>
    </>
  )
}

export default WindowList;
