const _elements = {
				vaccinated: document.querySelector("vaccinated"),
				confirmed: document.querySelector("confirmed"),
				deaths: document.querySelector("deaths")
}
function cards (){  
d3.csv('https://raw.githubusercontent.com/Joellensilva/Dashboard-covid19/main/covid19-dados.csv').then(Graphic);
}


function Graphic(data) {
			  confirmed = data.map(function(d) {return d.last_available_confirmed});
				deaths = data.map(function(d) {return d.last_available_deaths});
				document.getElementById("deaths7days").value = deaths[0] - deaths[6];
				document.getElementById("deaths1month").value = deaths[0] - deaths[30];
				document.getElementById("deaths1year").value = deaths[0] - deaths[365];
			/*	console.log(deaths7days);
				console.log(deaths1month);
				console.log(deaths1year);*/
				
				var confirmed = new Chart(document.getElementsByClassName("confirmed"), {
								type: 'line',
								data: {
												labels: ["fev 21","mar 21","abr 21","mai 21","jun 21","jul 21","ago 21","set 21","out 21","nov 21","dez 21","jan 22"],
												datasets: [{
																label: "Casos confirmados",
																data: [confirmed[337] - confirmed[365], confirmed[306] - confirmed[337], confirmed[276] - confirmed[306], confirmed[245] - confirmed [276], confirmed[215] - confirmed[245], confirmed[184] - confirmed[215], confirmed[153] - confirmed[184], confirmed[123] - confirmed[153], confirmed[92] - confirmed[123], confirmed[62]- confirmed[92], confirmed[31] - confirmed[62], confirmed[0] - confirmed[31]],
																borderWidth: 4,
																backgroundColor: 'transparent'
												}]
								}
								
				});
				var deaths = new Chart(document.getElementsByClassName("deaths"), {
								type: 'line',
								data: {
												labels: ["fev 21","mar 21","abr 21","mai 21","jun 21","jul 21","ago 21","set 21","out 21","nov 21","dez 21","jan 22"],
												datasets: [{
																label: "Óbitos",
																data: [deaths[337] - deaths[365], deaths[306] - deaths[337], deaths[276] - deaths[306], deaths[245] - deaths[276], deaths[215] - deaths[245], deaths[184] - deaths[215], deaths[153] - deaths[184], deaths[123] - deaths[153], deaths[92] - deaths[123], deaths[62] - deaths[92], deaths[31] - deaths[62], deaths[0] - deaths[31]],
																borderWidth: 4,
																backgroundColor: 'transparent'
												}]
								}
								
				});
}
