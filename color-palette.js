const hex1 = [ 0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f' ];
const hex2 = Object.assign(hex1);
const hex3 = Object.assign(hex1);

hex1.map((h1, key) => {
	hex2.map((h2, key) => {
		hex3.map((h3, key) => {
			const hexValue  = '#'+h1+h2+h3+h1+h2+h3;
			const pElem     = document.createElement('p');
			const textpElem = document.createTextNode(hexValue);
			const box       = document.createElement('div');
			const container = document.getElementById('container')	
			
			box.appendChild(pElem.appendChild(textpElem));
			box.setAttribute('class', 'box-'+key);
			box.classList.add('box');
			box.style.backgroundColor = hexValue;
			
			if(container.children.length < 2048) {
				box.style.color = 'white';
			} else {
				box.style.color = 'black';
			}
			
			container.appendChild(box);
		});
	});
});