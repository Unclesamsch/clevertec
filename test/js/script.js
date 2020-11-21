function setStyle() {

	let content = document.getElementById('season3');	
	content.setAttribute('class', 'season3');

}


function addText() {

	let newEl = document.createElement('p');
	
	let newText = document.createTextNode('#HI5TORY');

	newEl.appendChild(newText);

	let position = document.getElementById('season4');
	position.appendChild(newEl);
}

function addImg() {

	// let newImg = '<img src="image/4.jpeg" alt="2015-2016 Season">';

	let newEl = document.createElement('img');
		
	// let newText = document.createTextNode('#HI5TORY');

	// newEl.appendChild(newText);

	let position = document.getElementById('season4');
	position.appendChild(newEl);

	let img = document.getElementById('season4').lastChild;
	console.log(img);
	img.setAttribute('src', 'image/4.jpeg');


}

// let zagolovok = '<h3> 2015-2016 Season </h3>';
// console.log(content);
// console.log(zagolovok);