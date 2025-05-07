	
	//get contents of candidate file
	function read_file(candidate) {
		
		var xhttp = new XMLHttpRequest();
		
		//the return from calls below
		xhttp.onreadystatechange = function() {
			if (xhttp.readyState == 3 && xhttp.status == 200) {
				//alert(xhttp.responseText);
				var received = JSON.parse(xhttp.responseText);
				if(candidate == "washington") {
					document.getElementById("washington_votes").innerHTML = received.washington;
				}
				if(candidate == "lincoln") {
					document.getElementById("lincoln_votes").innerHTML = received.lincoln;
				}
				if(candidate == "nixon") {
					document.getElementById("nixon_votes").innerHTML = received.nixon;
				}
			}
		};
		
		//post request to read file
		xhttp.open("POST", "functions/read.php", true);
		xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhttp.send("readFile="+candidate);
		
	}
	
	function read_all() {
		read_file('washington');
		read_file('lincoln');
		read_file('nixon');
	}
	

	function onSubmitDo(candidate) {
		
		if(candidate == "washington") {
			place_vote("washington");
		}
		else if(candidate == "lincoln") {
			place_vote("lincoln");
			place_vote("washington");
		}
		else if(candidate == "nixon") {
			place_vote("nixon");
			place_vote("washington");
		}
		
		//Change text and disable button
		document.getElementById("voteButton").setAttribute("disabled", "disabled");
		document.getElementById("voteButton").classList.remove("btn-primary");
		document.getElementById("voteButton").classList.add("btn-default");
		document.getElementById("voteButton").innerHTML = "Thank You";

	}
	
	//place vote for candidate listed
	function place_vote(candidate) {
		
		var xhttp = new XMLHttpRequest();
		
		//the return from calls below
		xhttp.onreadystatechange = function() {
			if (xhttp.readyState == 3 && xhttp.status == 200) {
	//			alert(xhttp.responseText);
				var received = JSON.parse(xhttp.responseText);
				if(candidate == "washington") {
					document.getElementById("washington_votes").innerHTML = received.washington;
				}
				if(candidate == "lincoln") {
					document.getElementById("lincoln_votes").innerHTML = received.lincoln;
				}
				if(candidate == "nixon") {
					document.getElementById("nixon_votes").innerHTML = received.nixon;
				}
			}
		}
		
		//post request to read file
		xhttp.open("POST", "functions/vote.php", true);
		xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhttp.send("readFile="+candidate);

	}
