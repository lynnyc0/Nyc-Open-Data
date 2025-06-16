let data;

async function init(){
	let link = "https://data.cityofnewyork.us/resource/rc75-m7u3.json";
	
	info= await fetch(link);
	data = await info.json();
	console.log(data)

	let output = document.getElementById("output");
	let build = "";
    for (let i = 0; i < data.length; i++) {
		let d = data[i];
		build += `<div class="card">`;
		build +=`<p> date_of_interest: ${d.date_of_interest}</p>`;
		build +=`<p> hospitalized_case: ${d.hospitalized_case}</p>`;
		build +=`<p> case_count: ${d.case_count}</p>`;
		build += `</div>`;
 
	}
	output.innerHTML = build;

}

async function chartInit() {
		let link = "https://data.cityofnewyork.us/resource/rc75-m7u3.json";
	
	info = await fetch(link);
	data = await info.json();
}

function hospitalizedByBorough(){
	let chartType=document.getElementById("chartType").value;

	let bx = bk = mn = qn = si = 0;
	for(let i=0; i<data.length; i++){
		let covid_case = data[i];
		
		bx += parseInt(covid_case.bx_hospitalized_count);
		bk += parseInt(covid_case.bk_hospitalized_count);
		mn += parseInt(covid_case.mn_hospitalized_count);
		qn += parseInt(covid_case.qn_hospitalized_count);
		si += parseInt(covid_case.si_hospitalized_count);
	}



	let ChartData=[
		["Bronx", bx],
		["Brooklyn", bk],
		["Manhattan", mn],
		["Queens", qn],
		["Staten Island", si]
	]

console.log(ChartData)
	displayChart(ChartData, "chart", "pie");
}