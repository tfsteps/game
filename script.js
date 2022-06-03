
let main = document.querySelector(".main");
let hero = document.querySelector(".hero");
let loc1 = document.querySelector(".l2");
let loc2 = document.querySelector(".l1");
let loc3 = document.querySelector(".l3");

let location1 = document.querySelector(".location1");
let location2 = document.querySelector(".location2");
let location3 = document.querySelector(".location3");

let ball = document.querySelector(".ball");
let spisok = document.querySelector(".spisok");
let achivka = document.querySelector(".achievments");
let close = document.querySelector(".close");
let ball_icon = document.querySelector(".ball_icon");
let sosiska = document.querySelector(".sosiska");
let wallet = document.querySelector(".wallet");
let catch_lvl = document.querySelector(".catch_lvl");
let bubble = document.querySelector(".bubble");
let sosiska_icon = document.querySelector(".sosiska_icon");
let comp = document.querySelector(".comp");
let memo = document.querySelector(".memo");

spisok.onclick = function(){
	achivka.style.display = "block";
	close.style.display = "block";
}

close.onclick = function(){
	achivka.style.display = "none";
	close.style.display = "none";
}

loc1.onclick = function(){
	hero.style.top = "32%";
	hero.style.left = "59%";

	function changeLocation2(){
		main.style.display = "none";
		location2.style.display = "block";
		hero.style.top = "45%";
		hero.style.left = "10%";
		hero.style.height = "310px";
		hero.style.width = "150px";

		ball.onclick = function(){
		alert("Ты нашёл мяч!!");
		ball_icon.style.display = "block";
		ball.style.display = "none";
		location2.style.display = "none";
		main.style.display = "block";
		document.querySelector(".ach_ball").style.textDecoration = "line-through";

		
		}
	}
	setTimeout(changeLocation2, 1000);
}



loc2.onclick = function(){
	main.style.display = "none";
	location1.style.display = "block";

	comp.onclick = function(){
		location1.style.display = "none";
		memo.style.display = "block";
		
		hero.style.display = "none";
		document.querySelector(".inventory").style.display = "none";
		spisok.style.display = "none";

		let attempts = 3;
		let card1 = document.querySelector(".card1");
		let card2 = document.querySelector(".card2");
		let card3 = document.querySelector(".card3");
		let card4 = document.querySelector(".card4");
		let card5 = document.querySelector(".card5");
		let card6 = document.querySelector(".card6");
	document.querySelector('.text').innerHTML = attempts;

	document.querySelector(".btn").onclick = function() {
		card1.style.left = "610px";
		card1.style.background = "black";
		card1.style.backgroundImage = "none";

	
		card2.style.left = "270px";
		card2.style.top = "450px";
		card2.style.background = "black";
		card2.style.backgroundImage = "none";

		card3.style.left = "270px";
		card3.style.top = "230px";
		card3.style.background = "black";
		card3.style.backgroundImage = "none";

		card4.style.left = "950px";
		card4.style.top = "230px";
		card4.style.background = "black";
		card4.style.backgroundImage = "none";

		card5.style.left = "950px";
		card5.style.top = "450px";
		card5.style.background = "black";
		card5.style.backgroundImage = "none";

		card6.style.left = "610px";
		card6.style.top = "450px";
		card6.style.background = "black";
		card6.style.backgroundImage = "none";
	}
		
		card1.onclick = function() {
			card1.style.backgroundImage = "url(loc4/1.png)";
			card1.style.backgroundSize = "100% 100%";

			function over(){
				alert("Держи печеньку, молодец :D");
			location1.style.display = "block";
			memo.style.display = "none";
			hero.style.display = "block";
			document.querySelector(".inventory").style.display = "none";
			spisok.style.display = "block";
			document.querySelector(".ach_camera").style.textDecoration = "line-through";
			}
			

			setTimeout(over, 2000);

		}

		card2.onclick = function() {
			card2.style.backgroundImage = "url(loc4/2.jpg)";
			card2.style.backgroundSize = "100% 100%";
			
			attempts = attempts - 1;
			document.querySelector('.text').innerHTML = attempts;
			if (attempts == 0) {
				memo.style.display = "none";
				alert("u died");
			}

			if (attempts == 1) {
				alert("пробуй ещё");
			}

			if (attempts == 2) {
				alert("пробуй ещё");
			}

		}

		card3.onclick = function() {
			card3.style.backgroundImage = "url(loc4/3.jpg)";
			card3.style.backgroundSize = "100% 100%";

			attempts = attempts - 1;
			document.querySelector('.text').innerHTML = attempts;
			if (attempts == 0) {
				memo.style.display = "none";
				alert("u died");
			}

			if (attempts == 1) {
				alert("пробуй ещё");
			}

			if (attempts == 2) {
				alert("пробуй ещё");
			}

		}

		card4.onclick = function() {
			card4.style.backgroundImage = "url(loc4/4.jpg)";
			card4.style.backgroundSize = "100% 100%";

			attempts = attempts - 1;
			document.querySelector('.text').innerHTML = attempts;
			if (attempts == 0) {
				memo.style.display = "none";
				alert("u died");
			}

			if (attempts == 1) {
				alert("пробуй ещё");
			}

			if (attempts == 2) {
				alert("пробуй ещё");
			}

		}

		card5.onclick = function() {
			card5.style.backgroundImage = "url(loc4/5.jpg)";
			card5.style.backgroundSize = "100% 100%";

			attempts = attempts - 1;
			document.querySelector('.text').innerHTML = attempts;
			if (attempts == 0) {
				memo.style.display = "none";
				alert("u died");
			}

			if (attempts == 1) {
				alert("пробуй ещё");
			}

			if (attempts == 2) {
				alert("пробуй ещё");
			}

		}

		card6.onclick = function() {
			card6.style.backgroundImage = "url(loc4/6.jpeg)";
			card6.style.backgroundSize = "100% 100%";

			attempts = attempts - 1;
			document.querySelector('.text').innerHTML = attempts;
			if (attempts == 0) {
				memo.style.display = "none";
				alert("u died");
			}

			if (attempts == 1) {
				alert("пробуй ещё");
			}

			if (attempts == 2) {
				alert("пробуй ещё");
			}

		}
	}
}


loc3.onclick = function(){
	hero.style.top = "45%";
	hero.style.left = "80%";

	function changeLocation3(){
		main.style.display = "none";
		location3.style.display = "block";

		sosiska.onclick = function(){
			bubble.style.display = "block";
		}

	}

	setTimeout(changeLocation3, 1000);	

	wallet.onclick = function(){
		alert("Гг уронил открытый кошелёк. Поймай деньги в воздухе!");

		function changeLocLevel(){
			location3.style.display = "none";
			catch_lvl.style.display = "block";
			hero.style.display = "none";
			bubble.style.display = "none";

			let attempt = 3;
			let point = 0;
			let retry = document.querySelector(".retry");

			function getRandom(num){
		        let rand = Math.random() * num; 
		        let round = Math.round(rand); 
		        return round;
		    }

			for (let i = 0; i < 32; i=i+1) {
				let elem = document.createElement('div');
				document.body.appendChild(elem);
				elem.classList.add("circles");
				 
			    elem.style.left = getRandom(1350) + "px";

			    elem.onclick = function(){
			    	elem.remove();
			    	speed = 0;
			    	index = index + 1;
			    	point = point + 5;
			    	document.querySelector(".glasses").innerHTML = point;

			    }
			}

			let elems = document.querySelectorAll(".circles");
			let index = 0;
			let speed = 0;
			setTimeout(check, 35000);

			function down(){
				speed = speed + 175;

				if (index > 29) {
					clearInterval(int1);
				}else {
					elems[index].style.top = speed + "px";
				}

				if (speed > 700) {
					elems[index].style.display = "none";
					index = index + 1;
					speed = 0;
					attempt = attempt - 1;
					document.querySelector(".miss").innerHTML = attempt;
					console.log(attempt);
				}

				if (attempt == 0) {
					alert("Неудача! Ты пропустил 3 раза. Начни заново.");
					clearInterval(int1);
					retry.style.opacity = "1";
				}

				}

			function check(){
				if (point > 100) {
					alert("Вы поймали нужное количество рублей!!");
					location3.style.display = "block";
					catch_lvl.style.display = "none";
					hero.style.display = "block";
					sosiska_icon.style.display = "block";
				}

			}

			let int1 = setInterval(down, 400);
			


			}

		setTimeout(changeLocLevel, 1000);
	}

	sosiska_icon.onclick = function(){
		alert("Ты подкупил знакомых!!");
		sosiska.style.left = "26%";
		sosiska.style.top = "65%";
		sosiska_icon.style.display = "none";
		document.querySelector(".ach_children").style.textDecoration = "line-through";
		setTimeout(left, 4000);
		

		function left(){
			location3.style.display = "none";
			main.style.display = "block";
		}

	}

}






	


