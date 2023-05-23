import utils from './_utilselaina'
import data from"../configs/ElainaV2_config.json"
import wt from './Watermark'

if(DataStore.get("aram-only")) {
    window.addEventListener('load', () => {
        utils.addCss("//plugins/ElainaV2/assets/Css/Addon-Css/Aram-only.css")
    })

    let pageChangeMutation = (node) => { 
        if (node.getAttribute("data-screen-name") == "rcp-fe-lol-parties") {
            window.setInterval(()=>{
                try{
                    document.querySelector("div[data-game-mode='CLASSIC']").remove()
                    document.querySelector("div[data-game-mode='TFT']").remove()
                    document.querySelector("lol-uikit-navigation-item[data-category='VersusAi']").remove()
                    document.querySelector("lol-uikit-navigation-item[data-category='Training']").remove()
                }
                catch{}
                try {
                    if (document.getElementsByClassName("parties-game-navs-list")[0].getAttribute("selectedindex") == "0") {
                        document.querySelector('div[data-game-mode=ARAM] div[class=parties-game-type-upper-half]').click()
                    }
                }
                catch {}
            },10)
        }
    };
    
    window.addEventListener("load",()=>{
        utils.mutationObserverAddCallback(pageChangeMutation,["screen-root"])
    })
}