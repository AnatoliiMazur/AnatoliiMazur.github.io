var
		xhr          = new XMLHttpRequest(),
		employeesArr = [];

xhr.open( 'GET', './employees.json', true );
xhr.send();

xhr.onreadystatechange = function () {
	if ( xhr.readyState !== 4 ) return;

	if ( xhr.status !== 200 ) {
		// handle error
		alert( xhr.status + ': ' + xhr.statusText );
	} else {
		// assign result
		employeesArr = JSON.parse( xhr.responseText );
	}
};


setTimeout( () => {
	showAllMyDreamTeam();
	getTextForCups();
}, 100 );


function showAllMyDreamTeam() {
	// Просто выведи в консоль имя и ник всех сотрудников в твоей дримтим
	console.table( employeesArr );
}

function getTextForCups() {
	// Помоги Наташе получить массив с никами сотрудников что бы напечатать их на кружках
	// должен выйти подобный массив ['Ilya', 'Mosby', 'Demon', 'Ragnar', ...]
	var
			nickName = document.getElementById( 'nick-name' ),
			list     = document.createElement( 'ol' );

	nickName.appendChild( list );

	employeesArr.forEach( function(nickName) {
		var item = list.appendChild(document.createElement('li'));
		item.innerHTML = nickName.nick;
	});
}

function getEmpolyersForAwward() {
	// Помоги Диме составить список сотрудников со стажем в компании >5 лет, которые получат премию в размере 2-х зарплат
	// должен выйти подобный массив [{nick: 'Ilya', amount: 2000}, {nick: 'Demon', amount: ‭1 999 998‬}, ...]
}

function getInvitesForTeamBuilding() {
	// Помоги разослать приглашение на тимбилдинг всем руководителям отделов
	// должен выйти подобный массив ['Привет, Илья Ilya, приглашаем тебя на съезд менеджеров отделов в Киев!', 'Привет, Дима Demon, приглашаем тебя на съезд менеджеров отделов в Киев!' ...]
}

function getInvitesForMyBirthday() {
	// Разошли приглашение на свой день рождения всем своим коллегам из отдела, но помни что руководителя ты туда звать не хочешь
	// должен выйти подобный массив ['Псс, Ragnar, го бухать?', ...]
}

function getEmployersFromDepartment( departmentName ) {
	// Помоги менеджерам фильтровать сотрудников только из какого-то отдела
	// для аргумента 'html' должны отфильтроваться только сотрудники из отдела html, возвращать изначальные объекты сотрдников
}

function calculateSalaryForCompany() {
	// Помоги посчитать кол-во денег, которое выплачивается всем сотрудникам ежемесячно
	// вернуть просто число равное сумме всех зарплат
}
