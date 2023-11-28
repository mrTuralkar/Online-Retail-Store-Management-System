
function clock() {
		var date= new Date();


	var H = date.getHours();
	var A = "AM"


	if (H<10){
		H="0"+H
	}
	if(H>=12){
			A="PM";
			if(H>12){H= H-12;}
			if(H<10){H= "0"+H;}
			}

	if(H==0){
		H=12;
		}
		

	var M = date.getMinutes();
		if  (M<10) {M="0"+M;}



	var S = date.getSeconds();
	if  (S<10) {S="0"+S;}

	var year=date.getFullYear()
	var month=date.getMonth()
	var monthname=["January	","February	","March","April","May","June","July","August","September","October","November","December"]
	var monthname1=monthname[month]
	var day= date.getDate()
	if(day<10){
		day="0"+day
	}
	var cdate= day+"/"+monthname1+"/"+year

	document.getElementsByTagName("label")[0].innerHTML = (H+":"+M+":"+S+" "+A);
	document.getElementsByTagName("label")[1].innerHTML = cdate

		setTimeout(clock,1000);


}

function offer(){
			var a = 24;
			var b = 60;
			var c = 60;
			var date = new Date();
			var H = date.getHours();
			var M = date.getMinutes();
			var S = date.getSeconds();
			var diffH = Math.abs(H-24);
			var diffM = Math.abs(M-59);
			var diffS = Math.abs(S-59);
			if (diffH<10){
				diffH = "0"+diffH
			}
			if (diffM<10){
				diffM = "0"+diffM
			}
			if (diffS<10){
				diffS = "0"+diffS
			}

			document.getElementById("offerTime").innerText = "Offer Ends:"+diffH+":"+diffM+":"+diffS
			setTimeout(offer,1000)
			}

function order(){
	var x = confirm("confirm your order")
	if (x==true){
		alert("Your order  is confirm successfully")	
	}
	else{
	alert("Your order  is cancel")
	}
}
function track(){
	var x = window.open("https://www.delhivery.com/","height=100","width=100")
}

function receipt(){
	var x= document.getElementById('orderDetail').innerText
	alert(x)
}
 




