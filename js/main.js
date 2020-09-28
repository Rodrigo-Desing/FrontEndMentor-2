function menuResponsive() {
	let bar = document.querySelector('.menu-bar__icon'),
		menu = document.querySelector('.main-menu'),
		aux = true;

	bar.addEventListener('click', ()=>{
		if(aux){
			bar.setAttribute('src','images/icon-close.svg')
			menu.classList.toggle('main-menu--active');
			aux=false;
		}else{
			bar.setAttribute('src','images/icon-hamburger.svg')
			menu.classList.remove('main-menu--active');
			aux=true;
		}

	})	
}
menuResponsive()