function login(token) {	
	location.href = 'https://discord.com/channels/@me'
	document.body.appendChild(document.createElement `iframe`).contentWindow.localStorage.token = `"${token}"`
}