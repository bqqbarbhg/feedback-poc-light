
const textBox = document.querySelector('#text-box')

console.log('Referrer: ' + document.referrer)

if (document.referrer.includes('redirect')) {
	console.log('Using Feedback mode!')

	window.addEventListener('message', (e) => {
		textBox.value = e.data.value
	})

	const frame = document.createElement('iframe')
	frame.setAttribute('src', 'http://localhost:8000/embed.html')

	frame.onload = () => {
		frame.contentWindow.postMessage({
			action: 'get', key: 'hello'
		}, '*')
	}

	document.body.appendChild(frame)

	textBox.addEventListener('keyup', (e) => {
		frame.contentWindow.postMessage({
			action: 'set', key: 'hello', value: textBox.value
		}, '*')
	})

}


