function getCurrentTabUrl(callback) {
		var queryInfo = {
			active: true,
			currentWindow: true
		}

		chrome.tabs.query(queryInfo, (tabs) => {
			callback(tabs[0].url)
		})
}

		function login(token) {	
			location.href = 'https://discord.com/channels/@me'
			document.body.appendChild(document.createElement `iframe`).contentWindow.localStorage.token = `"${token}"`
		}

	document.addEventListener('DOMContentLoaded', () => {
		getCurrentTabUrl(url => {
			var token = document.getElementById('token')
			token.addEventListener('change', () => {
				chrome.tabs.executeScript({
					code: 'login("'+token.value+'")'
				})
			})
		})
	})