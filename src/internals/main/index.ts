import { app } from 'electron';
import { openWindow } from './lib/windows/operations';
import './lib/windows/listeners';

const init = () => {
  openWindow();
}

app.on('ready', init);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// app.on('activate', () => {
//   if (win === null) {
//     restore();
//   }
// });
