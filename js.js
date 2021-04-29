function load() {

document.getElementById("entername").value = "";
document.getElementById("entername").innerHTML = "";
}
function getall() {
	
  let input = document.getElementById("entername").value;
  
  if (input === "") {
	  document.getElementById("numberofcharacters").innerHTML = "";
	  document.getElementById("firstcharacter").innerHTML = "";
	  document.getElementById("lastcharacter").innerHTML = "";
	  document.getElementById("lowercase").innerHTML = "";
	  document.getElementById("uppercase").innerHTML = "";
	  document.getElementById("capitalize").innerHTML = "";
	  document.getElementById("spaces").innerHTML = "";
  } else {
	
    document.getElementById("numberofcharacters").innerHTML = input.length;

    document.getElementById("firstcharacter").innerHTML = input[0];
  
    document.getElementById("lastcharacter").innerHTML = input[input.length-1];
  
    document.getElementById("lowercase").innerHTML = input.toLowerCase();
	  
    document.getElementById("uppercase").innerHTML = input.toUpperCase();
	  
    document.getElementById("capitalize").innerHTML = input[0].toUpperCase() + input.toLowerCase().substring(1);
	  
    document.getElementById("spaces").innerHTML = input.trim();
  }  
}


