function update() {
	var firstName = $("#first-name").val();
	var lastName = $("#last-name").val();
	$("#string-output").html(`${firstName} ${lastName}`);

	var age = $("#age").val();
	$("#number-output").html(age);

	var bd = $("#bd").val();
	bd = new Date(bd);
	$("#date-output").html(
		`Your year is ${bd.getFullYear()}, month is ${
			bd.getMonth() + 1
		}, date is ${bd.getDate()}`
	);

	var obj = {
		fullname: `${firstName} ${lastName}`,
		age: age,
		bd: bd,
	};

	$("#object-output").html(
		`
            Your fullname is: ${obj.fullname}
            <br />
            Your age is: ${obj.age}
            <br />
            Your birthday is: ${obj.bd.toLocaleString()}
        `
	);

	var skills = $("#skills").val();
	var skillsArray = skills.split(",");
	var skillsHtml = "";
	skillsArray.forEach((skill) => {
		skillsHtml += `
            <br />
            ${skill}
        `;
	});
	$("#array-output").html(skillsHtml);
}
