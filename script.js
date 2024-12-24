//your JS code here. If required.
const btn = document.querySelectorAll(".btn")
const stop = document.querySelector(".stop")
for(let i=0; i<=btn.length-1; i++){
	btn[i].addEventListener("click", (e)=>{
		audio[i].play()
	stop.addEventListener("click", ()=>{
		audio[i].pause()
	})
	})
}