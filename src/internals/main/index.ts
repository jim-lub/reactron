import { app } from 'electron';
import { openWindow } from 'internals/main/lib/windows/operations';
import 'internals/main/lib/windows/listeners';

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
