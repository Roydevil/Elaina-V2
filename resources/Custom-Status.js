import data from '../configs/ElainaV2_config.json'

if (DataStore.get("Custom-Status")) {
    let time
    let i = 0
    let status = data["Custom-Status"]
    if (status.length == 1) {time = 5000000000}
    else {time = DataStore.get("status-delay")}
    
    window.setInterval( async ()=> {
        if (i == status.length - 1) {i = 0}
        else {i++}
        const statusMessage = status[i]["lines"].slice().join("\\n")
            await fetch("/lol-chat/v1/me", {
                method :"PUT",
                headers:{"content-type":"application/json"},
                body   :`{"statusMessage":"${statusMessage}"}`
            }) 
    },time)
}