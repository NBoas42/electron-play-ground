
'use strict';

const electron = require('electron');
const {app, BrowserWindow} = electron;


let mainWindow;

/**
 * Setups up the Main Window frame
 */
function createWindow() {
	//User Browser Windows for p5 functionality
	mainWindow = new BrowserWindow({
			width: 1280,
			height: 720,
			//transparent: true,
			//frame: false,
			resizable: false,
			center: true
		});

	mainWindow.loadURL(`file://${__dirname}/index.html`);//Load P5 HTML and JavaScript here
	mainWindow.on('closed', () => { mainWindow = null; });//Close Window Handler
}
/**
 * Calls the setup once the window has been made
 */
app.on('ready', createWindow);
/**
 * Function to actually Close the window
 */
app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});
/**
 * Function to actually Close the window
 */
app.on('activate', () => {
	if (mainWindow === null) {
		createWindow();
	}
});