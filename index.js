/**
 * @name ElainaV3
 * @author Elaina Da Catto
 * @description Elaina theme 3rd Generation for Pengu Loader
 * @link https://github.com/Elaina69
 * @Nyan Meow~~~
 */

console.log('By Elaina Da Catto');
console.log('Meow ~~~');

export function getPluginsName() {
	let scriptPath = getScriptPath()
	let regex = /\/([^/]+)\/index\.js$/
	let match = scriptPath.match(regex)
	let pluginsname = match ? match[1]:null
	return pluginsname
}

export * from "./ElainaV3-Data/data/built-in_plugins/Settings.js" 
//export * from "https://unpkg.com/elainav3-data@latest/data/built-in_plugins/Settings.js" 

import "./data/Data.js"
import "./data/built-in_plugins/Custom-Status"
import "./data/built-in_plugins/Old-LL-Settings"
import "./data/ChangeFilters.js"
import "./data/homepage.js"
import "./data/loadCss.js"
import "./data/_utils.js"
import "./testUpdate.js"
import	"./data/built-in_plugins/KeyCombines.js"

if (DataStore.get("Dev-mode")) {
	try  {
		let res = await fetch(`//plugins/${getPluginsName()}/ElainaV3-Data/index.js`)
		if (res.status == 200) {
			(await (() => import(`//plugins/${getPluginsName()}/ElainaV3-Data/index.js`))()).default
		}
	}
	catch{console.log(`File doesn't exist, can't load ElainaV3 data`)}
}
else {
	try  {
		let res = await fetch("https://unpkg.com/elainav3-data@latest/index.js")
		if (res.status == 200) {
			(await (() => import("https://unpkg.com/elainav3-data@latest/index.js"))()).default
		}
	}
	catch{console.log(`File doesn't exist, can't load ElainaV3 data`)}
}