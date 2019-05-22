$(document).ready(function () {
	$("#btn").click(function () {
		var mon = $("input[name=monday]:checked").val();
		var tues = $("input[name=tuesday]:checked").val();
		var wed = $("input[name=wednesday]:checked").val();
		var thur = $("input[name=thursday]:checked").val();
		var fri = $("input[name=friday]:checked").val();
		var sat = $("input[name=saturday]:checked").val();
		var sun = $("input[name=sunday]:checked").val();
		$(".cost").addClass("active");
		$(".occupy").addClass("deactive");

		console.log(mon);
		console.log(tues);
		console.log(wed);
		console.log(thur);
		console.log(fri);
		console.log(sat);
		console.log(sun);

		let finalmon = parseFloat(mon);
		let finaltues = parseFloat(tues);
		let finalwed = parseFloat(wed);
		let finalthurs = parseFloat(thur);
		let finalfri = parseFloat(fri);
		let finalsat = parseFloat(sat);
		let finalsun = parseFloat(sun);

		let rawfinalvalue = finalmon + finaltues + finalwed + finalthurs + finalfri + finalsat + finalsun;

		//	let fixedfinalvalue = rawfinalvalue.toFixed(2)
		//	let commafinalvalue = fixedfinalvalue.toLocaleString('US')
		//	let finalvalue = commafinalvalue

		let finalvalue = rawfinalvalue.toLocaleString('US', { style: 'currency', currency: 'USD' })

		//	let rawavalue = rawfinalvalue * 52
		//	let fixedavalue = rawavalue.toFixed(2)
		//	let commaavalue = fixedavalue.toLocaleString('US')
		//	let avalue = commaavalue

		let rawavalue = rawfinalvalue * 52
		let avalue = rawavalue.toLocaleString('US', { style: 'currency', currency: 'USD' })

		//	let rawmvalue = rawavalue / 12
		//	let fixedmvalue = rawmvalue.toFixed(2)
		//	let commamvalue = fixedmvalue.toLocaleString('US')
		//	let mvalue = commamvalue

		let rawmvalue = rawavalue / 12
		let mvalue = rawmvalue.toLocaleString('US', { style: 'currency', currency: 'USD' })

		console.log("finalvalue");
		console.log(finalvalue);
		console.log("avalue");
		console.log(avalue);
		console.log("mvalue");
		console.log(mvalue);


		$("span.tcost").text(finalvalue);
		$("span.mcost").text(mvalue);
		$("span.acost").text(avalue);

		$("span.animation-one").addClass("fadein");
		setTimeout(function () {}, 2000);

		$("span.animation-two").addClass("fadein2");
		setTimeout(function () {}, 2000);

		$("span.animation-three").addClass("fadein3");
		setTimeout(function () {}, 2000);

	});

	$("#rst-btn").on("click", function () {
		$("input[type=radio]").prop("checked", function () {
			return this.getAttribute("checked") == "checked";
		});

		$(".cost.active").removeClass("active");
		$(".occupy").removeClass("deactive");


	});

});