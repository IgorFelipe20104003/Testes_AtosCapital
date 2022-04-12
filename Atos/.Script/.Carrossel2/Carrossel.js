			

			const clickD = document.getElementById('direita');
			const clickE = document.getElementById('esquerda');
			const clickC = document.getElementById('centro');
			const ativ = document.getElementById('ativador-carrossel-2');


			clickD.addEventListener('click', Direita);
			clickE.addEventListener('click', Esquerda);
			clickC.addEventListener('click', Centro);

			function Direita(){

				if(ativ.className == 'activeE2'){
					ativ.classList.remove('activeE2');	
					ativ.classList.add('activeD2');
				}else if(ativ.className == 'activeE2 centroE2'){
					ativ.classList.remove('activeE2');	
					ativ.classList.remove('centroE2');	
					ativ.classList.add('activeD2');
				}else{
					ativ.classList.remove('centroD2');
					ativ.classList.add('activeD2');
				}
			}

			function Esquerda(){

				if (ativ.className == 'activeD2') {
					ativ.classList.remove('activeD2')
					ativ.classList.add('activeE2')
				}else if(ativ.className == 'activeD2 centroD2'){
					ativ.classList.remove('activeD2');	
					ativ.classList.remove('centroD2');	
					ativ.classList.add('activeE2');
				}else{
					ativ.classList.remove('centroE2');
					ativ.classList.add('activeE2');
				}
			}

			function Centro(){

				if(ativ.className == 'activeE2'){
					ativ.classList.add('centroE2');
				}else if(ativ.className == 'activeD2'){
					ativ.classList.add('centroD2');
				}
			}

			const X = setInterval(()=>{Timer01();},5000);

			function Timer01(){
				if(ativ.className == "" || ativ.className == 'activeE2'){
					Direita();
				}else if( ativ.className == 'activeD2'){
					Centro();
				}else if( ativ.className == 'activeE2 centroE2' ||  ativ.className == 'activeD2 centroD2' ){
					Esquerda();
				}
			}

