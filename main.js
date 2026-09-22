// Показать / скрыть в мобильном меню подменю
function subMenuToggle(element) {
	const subMenuBtn = document.querySelectorAll('.menu__item--has-submenu .menu__link'); // ссылка для открытия подменю
	const mobileMenuWrapper = document.querySelector('.mob-menu-wrapper'); // сюда будем складывать обертки подменюшек
	let zIndexValue = 100;


	// По клику на кнопку для субменю будем формировать и показывать подменю
	const subBtnClick = (e) => {
		e.preventDefault;
		// Формируем обертку для подменю
		const subMenuWrapper = document.createElement('div');
		zIndexValue++;
		subMenuWrapper.classList.add('submenu-panel'); // обертка для подменю
		subMenuWrapper.classList.add('z-index'); // обертка для подменю
		subMenuWrapper.classList.add('z-index-' + zIndexValue); // обертка для подменю
		// subMenuWrapper.classList.remove('nav__list');
		mobileMenuWrapper.append(subMenuWrapper); // добавляем обртку к основному меню
		subMenuWrapper.style.zIndex = zIndexValue; // задаем z-index для слоя с подменю

		// Формируем хедер для подменю с кнопкой назад
		const subMenuHeader = document.createElement('div');
		subMenuHeader.classList.add('submenu__header'); // обертка для кноки назад
		const textForPrevLink = e.srcElement.textContent; // текст для кноки назад
		subMenuHeader.textContent = textForPrevLink;
		subMenuWrapper.append(subMenuHeader);

		// Формируем подменю
		// const newSubMenu = e.target.parentNode.cloneNode(true);
		let newSubMenu = document.createElement('div');
		let parentSubmenuList = ".menu__submenu";
		// const newSubMenuItem = e.target.parentNode.querySelectorAll('.nav__col');
		const newSubMenuItem = e.target.parentNode.querySelector(parentSubmenuList);
		const temp = newSubMenuItem.cloneNode(true);
		newSubMenu.append(temp);
		subMenuWrapper.append(newSubMenu);

		// Закрываем подменю для возврата к родителю
		subMenuHeader.addEventListener("click", () => {
			setTimeout(() => { subMenuWrapper.classList.toggle('active'); }, 100); // класс, чтобы выдвигать меню
			setTimeout(() => { subMenuWrapper.remove(); }, 500); // удаляем подменю, чтобы не пложить копии
			zIndexValue--;
		});

		// subMenuWrapper.style.top = 60 + 'px'; // добавляем отступ
		// класс, чтобы выдвигать меню
		setTimeout(() => { subMenuWrapper.classList.add('active'); }, 100); // класс, чтобы выдвигать меню
	};

	// Для каждой кноппки, открывающей панель подменю, отслеживаем клик - для показа подменю второго уровня
	// надо переписать, чтобы было через делегирование
	subMenuBtn.forEach(element => {
		element.addEventListener("click", subBtnClick);
	});

}

subMenuToggle();
window.addEventListener("resize", subMenuToggle);