const copyButton = document.getElementById("copy")

function copy() {
    let el = document.getElementById("access-token")
    navigator.clipboard.writeText(el.value)
    copyButton.innerText = "Скопировано"
    setTimeout(() => copyButton.innerText = "Скопировать", 3000)
}


function auth() {
    let scopesElements = document.getElementsByClassName("scope")
    let scopes = []
    for (let el of scopesElements) {
        if (el.checked) {
            scopes.push(el.id)
        }
    }
    scopes = scopes.join("%20")

    let redirect_uri = "https://declider.github.io/donationalerts-auth/" // обязательно с '/' в конце
    let client_id = "10715"
    let url = `https://www.donationalerts.com/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=token&scope=${scopes}&force_verify=true`

    window.open(url,"_self")
}


window.onload = () => {
    let hash = window.location.hash
    if (!hash) { return }
    let token = hash.split("access_token=")[1].split("&",1)[0]
    document.getElementById("access-token").value = token
    copyButton.disabled = false
}
