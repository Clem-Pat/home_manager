const deg = 6
const hr = document.querySelector('#hr')
const mn = document.querySelector('#mn')
const sc = document.querySelector('#sc')


function changeDate() {
	days = {'Mon':'Lundi', 'Tue':'Mardi', 'Wen':'Mercredi', 'Thu': 'Jeudi', 'Fri':'Vendredi'}
	months = {'01':'Janvier', '02':'Février', '03':'Mars', '04':'Avril', '05':'Mai', '06':'Juin', '07':'Juillet', '08':'Août', '09':'Septembre', '10':'Octobre', '11':'Novembre', '12':'Décembre'}
	var now = new Date();
	var dayName = days[now.toDateString().substring(0, 3)]
	var day = ("0" + now.getDate()).slice(-2);
	var month = ("0" + (now.getMonth() + 1)).slice(-2);
	document.getElementById('date').innerHTML = dayName +' '+ day +' '+ months[month]
}
changeDate()

setInterval(changeDate, 86400)

setInterval(() => {
	let today = new Date()
	let hh = today.getHours() * 30
	let mm = today.getMinutes() * deg
	let ss = today.getSeconds() * deg

	hr.style.transform = `translate(-50%, -50%) rotateZ(${(hh)+(mm/13)}deg)`
	mn.style.transform = `translate(-50%, -50%) rotateZ(${mm}deg)`
	sc.style.transform = `translate(-50%, -50%) rotateZ(${ss}deg)`
})
