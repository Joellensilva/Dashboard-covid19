function cards (){  
d3.csv('https://raw.githubusercontent.com/Joellensilva/Dashboard-covid19/main/covid19-dados.csv').then(Graphic);
d3.csv('https://raw.githubusercontent.com/Joellensilva/Dashboard-covid19/main/vacinas.csv').then(Vaccinated);
}


function Graphic(data) {
			  var confirmed = data.map(function(d) {return d.last_available_confirmed});
				var deaths = data.map(function(d) {return d.last_available_deaths});
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

function Vaccinated(data) {
				
				var vaccinated = data.map(function(d) {return d.vacina_descricao_dose});
				var vac1 = 0, vac2 = 0, vac3 = 0, doseuni = 0, i;
				for(i=0; i<vaccinated.length; i++){
								if(vaccinated[i] === '1ª Dose'){
												vac1++;
								}
								else if(vaccinated[i] === '2ª Dose'){
												vac2++;
								}
								else if(vaccinated[i] === 'Reforço' || vaccinated[i] === 'Dose Adicional'){
												vac3++;
								}
								else if(vaccinated[i] === 'Dose'){
												doseuni++;
								}
				}
				var vaccinated = new Chart(document.getElementsByClassName("vaccinated"), {
								type: 'bar',
								data: {
												labels: ["1ª Dose", "2ª Dose", "3ª Dose", "Dose única"],
												datasets: [{
																label: "População vacinada",
																data: [vac1, vac2, vac3, doseuni]
												}]
								}
				});
				
}
