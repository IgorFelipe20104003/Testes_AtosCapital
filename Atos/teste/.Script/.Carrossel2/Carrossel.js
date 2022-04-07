			const clickD = document.getElementById('direita');
			const clickE = document.getElementById('esquerda');
			const clickC = document.getElementById('centro');
			const ativ = document.getElementById('navegador');


			clickD.addEventListener('click', Direita);
			clickE.addEventListener('click', Esquerda);
			clickC.addEventListener('click', Centro);

			function Direita(){

				if(ativ.className == 'activeE'){
					ativ.classList.remove('activeE');	
					ativ.classList.add('activeD');
				}else if(ativ.className == 'activeE centroE'){
					ativ.classList.remove('activeE');	
					ativ.classList.remove('centroE');	
					ativ.classList.add('activeD');
				}else{
					ativ.classList.remove('centroD');
					ativ.classList.add('activeD');
				}
			}

			function Esquerda(){

				if (ativ.className == 'activeD') {
					ativ.classList.remove('activeD')
					ativ.classList.add('activeE')
				}else if(ativ.className == 'activeD centroD'){
					ativ.classList.remove('activeD');	
					ativ.classList.remove('centroD');	
					ativ.classList.add('activeE');
				}else{
					ativ.classList.remove('centroE');
					ativ.classList.add('activeE');
				}
			}

			function Centro(){

				if(ativ.className == 'activeE'){
					ativ.classList.add('centroE');
				}else if(ativ.className == 'activeD'){
					ativ.classList.add('centroD');
				}
			}

			const X = setInterval(()=>{Timer01();},5000);

			function Timer01(){
				if(ativ.className == "" || ativ.className == 'activeE'){
					Direita();
				}else if( ativ.className == 'activeD'){
					Centro();
				}else if( ativ.className == 'activeE centroE' ||  ativ.className == 'activeD centroD' ){
					Esquerda();
				}
			}

