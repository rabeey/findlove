
	window.addEventListener('load', function(){
		results = document.getElementById('results');

		const users = [
		{name: 'Shamxeed',
		 gender: 'M', 
		 hobby: 'coding',
		 img: 'kindpng_2261497.png'
		},
		{name: 'Fatimah',
		 gender: 'F',
		 hobby: 'crazy',
		 img: 'kindpng.png"'
		},
		{name: 'Yesmine',
		 gender: 'F',
		 hobby: 'foodie',
		 img: 'https://www.tm-town.com/assets/default_female600x600-3702af30bd630e7b0fa62af75cd2e67c.png'
		},
		{name: 'Ahmad',
		 gender: 'M',
		 hobby: 'reading',
		 img: 'https://nationalcrashcourses.co.uk/wp-content/uploads/2017/08/319222-1IvI0s1421931178-370x370.png'
		},
		{name: 'Rukayya',
		 gender: 'F',
		 hobby: 'chatting',
		 img: 'PngItem_5172086.png'
		},
		{name: 'Hamdy',
		 gender: 'F',
		 hobby: 'cooking',
		 img: 'https://www.tm-town.com/assets/default_female600x600-3702af30bd630e7b0fa62af75cd2e67c.png'
		},
		{name: 'Queen',
		 gender: 'F',
		 hobby: 'modeling',
		 img: 'PngItem_5181937.png'
		},
		{name: 'Ismail',
		 gender: 'M',
		 hobby: 'gamer',
		 img: 'https://bootdey.com/img/Content/avatar/avatar7.png'
		},
		{name: 'Victoria',
		 gender: 'F',
		 hobby: 'music',
		 img: 'PngItem_41644.png'
		},
		{name: 'Gadawo',
		 gender: 'M',
		 hobby: 'reading',
		 img: 'https://www.simplexgenius.com/images/d2.png'
		},
		{name: 'Shubie',
		 gender: 'M', 
		 hobby: 'hacking',
		 img: 'n554942.png'
		},
	
	];

		function search(){
			hobbyfield = document.getElementById('hobby');
			var hobby = hobbyfield.value;

			genderfield = document.getElementById('gender');
			let 	s = genderfield.selectedIndex;
			gender = genderfield.options[s].value;
			let finalResults = '';
			userLenght = users.length;
			for (i = 0; i < userLenght; i++) {
							
		
			if (gender == users[i].gender || gender == 'A') {
			if (hobby == '' || hobby == users[i].hobby) {
				document.getElementById('noMatchFound').innerHTML ='';
				finalResults += '<div class="person-row">\
						<img src="'+ users[i].img +'">\
						<div class="person-info" + >\
						<div>' + users[i].name + ' </div>\
						<div>Hobby: ' + users[i].hobby +'</div>\
							</div>\
							<button id="add-btn">Add friend</button>\
						</div>'		
			}		
		
	} 
	
		}
		results.innerHTML = finalResults;
			

		}
		btn = document.getElementById('search-btn');
		btn.addEventListener('click', search);
		console.log('musa2');
	});
		
