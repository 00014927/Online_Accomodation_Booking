// Running text  | Lorem
const text = document.querySelector('.run_text')
const content = text.innerText
text.innerText = ''
let count = 0
let timer

const drowText = () => {
	text.innerHTML += content.charAt(count)
	count++

	if (count == content.length) {
		clearInterval(timer)
	}
}

timer = setInterval(drowText, 20)


// Js scroll click
const btn = document.querySelector('.run-top');

btn.addEventListener('click', () => {
	scrollTo({
		top: 0,
		behavior: 'smooth'
	})
})

window.addEventListener('scroll', () => {
	if (pageYOffset > 560) {
		btn.style.transform = 'scale(1)'
	} else {
		btn.style.transform = 'scale(0)'
	}

})