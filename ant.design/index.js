// function goToElement(id) {
//     var offset = document.getElementById(id).offsetTop;
//     window.scrollTo({ top: offset, behavior: 'smooth', });
// }

function goToElement(id) {
	var offset = $("#" + id).offset().top;
	$("html, body").animate({ scrollTop: offset });
}

function showAdvanceSearch() {
	$("#advance-search").fadeIn(100);
}

function hideAdvanceSearch() {
	$("#advance-search").fadeOut(100);
}
