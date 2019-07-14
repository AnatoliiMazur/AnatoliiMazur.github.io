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
	getEmployersForAward();
	getInvitesForTeamBuilding();
	getInvitesForMyBirthday();
	calculateSalaryForCompany()
}, 100 );

function showAllMyDreamTeam() {
	// Просто выведи в консоль имя и ник всех сотрудников в твоей дримтим

	console.table( employeesArr );
}

function getTextForCups() {
	// Помоги Наташе получить массив с никами сотрудников что бы напечатать их на кружках
	// должен выйти подобный массив ['Ilya', 'Mosby', 'Demon', 'Ragnar', ...]

	var nickNameList = document.getElementById( 'nick-name' );

	employeesArr.forEach( function ( element ) {
		var newLi       = document.createElement( 'li' );
		newLi.innerHTML = element.nick;
		nickNameList.appendChild( newLi );
	} );
}

function getEmployersForAward() {
	// Помоги Диме составить список сотрудников со стажем в компании >5 лет, которые получат премию в размере 2-х зарплат
	// должен выйти подобный массив [{nick: 'Ilya', amount: 2000}, {nick: 'Demon', amount: ‭1 999 998‬}, ...]

	var employersAwardList = document.getElementById( 'employers-award' );

	employeesArr.forEach( function ( element ) {
		if ( element.yearsInCompany > 5 ) {
			var newLi       = document.createElement( 'li' );
			newLi.innerHTML = `nick: ${ element.nick }, amount: ${ element.salary * 2 }`;
			employersAwardList.appendChild( newLi );
		}
	} );
}

function getInvitesForTeamBuilding() {
	// Помоги разослать приглашение на тимбилдинг всем руководителям отделов
	// должен выйти подобный массив ['Привет, Илья Ilya, приглашаем тебя на съезд менеджеров отделов в Киев!', 'Привет, Дима Demon, приглашаем тебя на съезд менеджеров отделов в Киев!' ...]

	var invitesWrap = document.getElementById( 'invites-wrap' );

	employeesArr.forEach( function ( element ) {
		if ( element.headOfDepartment ) {
			var newParagraph       = document.createElement( 'p' );
			newParagraph.innerHTML = `Привет, ${ element.name } ${ element.nick }, приглашаем тебя на съезд менеджеров отделов в Киев!`;
			invitesWrap.appendChild( newParagraph );
		}
	} )
}

function getInvitesForMyBirthday() {
	// Разошли приглашение на свой день рождения всем своим коллегам из отдела, но помни что руководителя ты туда звать не хочешь
	// должен выйти подобный массив ['Псс, Ragnar, го бухать?', ...]

	var birthday = document.getElementById( 'birthday-wrap' );

	employeesArr.forEach( function ( element ) {
		if ( element.department === 'html' && !element.headOfDepartment ) {
			var newParagraph       = document.createElement( 'p' );
			newParagraph.innerHTML = `Псс, ${ element.nick }, го бухать?`;
			birthday.appendChild( newParagraph );
		}
	} )
}

function getEmployersFromDepartment( departmentName ) {
	// Помоги менеджерам фильтровать сотрудников только из какого-то отдела
	// для аргумента 'html' должны отфильтроваться только сотрудники из отдела html, возвращать изначальные объекты сотрдников
}

function calculateSalaryForCompany() {
	// Помоги посчитать кол-во денег, которое выплачивается всем сотрудникам ежемесячно
	// вернуть просто число равное сумме всех зарплат

	var
			salaryWrap = document.getElementById( 'salary-wrap' ),
			sumArr     = [],
			sum;

	employeesArr.forEach( function ( element ) {
		sumArr.push( element.salary );
	} );

	sum = sumArr.reduce( ( a, b ) => a + b );

	salaryWrap.innerHTML = sum;
}
