import React, { useState, useEffect } from 'react';
import { storeClient, windowClient } from '@clients/index';

interface Props {
  id: string,
  type: string
}

const WindowList = () => {
  const [windowsObj, unsubscribe]: any = storeClient.useStore(`_windows.refs`);
  const [windowList, setWindowList] = useState<Array<Props>>([]);
  const { id: windowId } = windowClient.getWindowProperties();

  useEffect(() => {
    const list = Object.entries(windowsObj).map(([key, values]: any) => {
      return ({
        id: key,
        type: values.type
      })
    });

    setWindowList(list);
  }, [windowsObj]);

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
        <button onClick={unsubscribe}>Unsubscribe</button>
      </div>
      <ul>
        {
          windowList.map(({ id, type }: Props) => {
            return (
              <li key={id} style={{backgroundColor: (id === windowId) ? '#dcedc8' : ''}}>
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
