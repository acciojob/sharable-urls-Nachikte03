// your code here
let button = document.getElementById("button");

button.addEventListener("click",change);

function change(event){
	event.preventDefault();
	let name = document.getElementById("name").value;
	let year = document.getElementById("year").value;
	let queryString = 'https://localhost:8080/';
	let h3 = document.getElementById("url");
	if(name!=""){
		queryString += "?name="+name;
		if(year!=""){
			queryString += "&year="+year;
		}
		}else if(year !=""){
			queryString += "?year="+year;
	}
	console.log(queryString);
	h3.innerText = queryString;
}

