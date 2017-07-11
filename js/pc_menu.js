
// Menu Open
function menu_open(){
		$("#mobile_list").css("right","0px");
		// wrapscroll(1);
}

// Menu, Tab 모두닫기
function all_close(){
		$("#mobile_list").css("right","-260px");
    // wrapscroll(0);
}


function changeHeight1() {
	var windowWidth =$( window ).width();

	if(windowWidth < 768) {
	//창 가로 크기가 500 미만일 경우
		document.getElementById('tabs-1').style.display = "block"
		document.getElementById('tabs-container').style.display = "block"
		document.getElementById('section_height').style.height = "1920px"
		document.getElementById('section_background').style.height = "1920px"
		document.getElementById('tabs-1').style.height = "470px"
	} else {
	//창 가로 크기가 500보다 클 경우
		document.getElementById('tabs-1').style.display = "block"
		document.getElementById('tabs-container').style.display = "block"
		document.getElementById('section_height').style.height = "1920px"
		document.getElementById('section_background').style.height = "1920px"
		document.getElementById('tabs-1').style.height = "470px"
	}
	$(window).on('resize',function(){
		var win = $(this);
		if(window.innerWidth <768){
			document.getElementById('tabs-1').style.display = "block"
			document.getElementById('tabs-container').style.display = "block"
			document.getElementById('section_height').style.height = "1920px"
			document.getElementById('section_background').style.height = "1920px"
			document.getElementById('tabs-1').style.height = "470px"
		}else{
			document.getElementById('tabs-1').style.display = "block"
			document.getElementById('tabs-container').style.display = "block"
			document.getElementById('section_height').style.height = "1920px"
			document.getElementById('section_background').style.height = "1920px"
			document.getElementById('tabs-1').style.height = "470px"
		}
	})
}

function changeHeight2() {
	var windowWidth =$( window ).width();

	if(windowWidth < 768) {
	//창 가로 크기가 500 미만일 경우
		document.getElementById('tabs-1').style.display = "none"
		document.getElementById('section_background').style.backgroundImage = "none"
		document.getElementById('section_height').style.height = "1030px"
		document.getElementById('section_background').style.height = "1030px"
		document.getElementById('tabs-2').style.height = "470px"
		document.getElementById('tabs-container').style.display = "none"
	} else {
	//창 가로 크기가 500보다 클 경우
		document.getElementById('tabs-1').style.display = "none"
		document.getElementById('section_background').style.backgroundImage = "none"
		document.getElementById('section_height').style.height = "1030px"
		document.getElementById('section_background').style.height = "1030px"
		document.getElementById('tabs-2').style.height = "470px"
		document.getElementById('tabs-container').style.display = "none"
	}

	$(window).on('resize',function(){
		var win = $(this);
		if(window.innerWidth <768){
			document.getElementById('tabs-1').style.display = "none"
			document.getElementById('section_background').style.backgroundImage = "none"
			document.getElementById('section_height').style.height = "1030px"
			document.getElementById('section_background').style.height = "1030px"
			document.getElementById('tabs-2').style.height = "470px"
			document.getElementById('tabs-container').style.display = "none"
		}else{
			document.getElementById('tabs-1').style.display = "none"
			document.getElementById('section_background').style.backgroundImage = "none"
			document.getElementById('section_height').style.height = "1030px"
			document.getElementById('section_background').style.height = "1030px"
			document.getElementById('tabs-2').style.height = "470px"
			document.getElementById('tabs-container').style.display = "none"
		}
	})
}
function changeHeight3() {
	var windowWidth =$( window ).width();

	if(windowWidth < 768) {
	//창 가로 크기가 500 미만일 경우
		document.getElementById('tabs-1').style.display = "none"
		document.getElementById('section_height').style.height = "1300px"
		document.getElementById('section_background').style.height = "1300px"
		document.getElementById('tabs-4').style.height = "470px"
		document.getElementById('tabs-container').style.display = "none"
	} else {
	//창 가로 크기가 500보다 클 경우
		document.getElementById('tabs-1').style.display = "none"
		document.getElementById('section_height').style.height = "1300px"
		document.getElementById('section_background').style.height = "1300px"
		document.getElementById('tabs-4').style.height = "470px"
		document.getElementById('tabs-container').style.display = "none"
	}

	$(window).on('resize',function(){
		var win = $(this);
		if(window.innerWidth <768){
			document.getElementById('tabs-1').style.display = "block"
			document.getElementById('section_height').style.height = "1300px"
			document.getElementById('section_background').style.height = "1300px"
			document.getElementById('tabs-4').style.height = "470px"
			document.getElementById('tabs-container').style.display = "none"
		}else{
			document.getElementById('tabs-1').style.display = "block"
			document.getElementById('section_height').style.height = "1300px"
			document.getElementById('section_background').style.height = "1300px"
			document.getElementById('tabs-4').style.height = "470px"
			document.getElementById('tabs-container').style.display = "none"
		}
	})
}
function changeHeight4() {
	var windowWidth =$( window ).width();

	if(windowWidth < 768) {
	//창 가로 크기가 500 미만일 경우
		document.getElementById('tabs-1').style.display = "none"
		document.getElementById('section_background').style.backgroundImage = "none"
		document.getElementById('section_height').style.height = "2530px"
		document.getElementById('section_background').style.height = "2530px"
		document.getElementById('tabs-4').style.height = "470px"
		document.getElementById('tabs-container').style.display = "none"
	} else {
	//창 가로 크기가 500보다 클 경우
		document.getElementById('tabs-1').style.display = "none"
		document.getElementById('section_background').style.backgroundImage = "none"
		document.getElementById('section_height').style.height = "2530px"
		document.getElementById('section_background').style.height = "2530px"
		document.getElementById('tabs-4').style.height = "470px"
		document.getElementById('tabs-container').style.display = "none"
	}

	$(window).on('resize',function(){
		var win = $(this);
		if(window.innerWidth <768){
			document.getElementById('section_background').style.backgroundImage = "none"
			document.getElementById('section_height').style.height = "2530px"
			document.getElementById('section_background').style.height = "2530px"
			document.getElementById('tabs-4').style.height = "470px"
			document.getElementById('tabs-container').style.display = "none"
		}else{
			document.getElementById('tabs-1').style.display = "none"
			document.getElementById('section_background').style.backgroundImage = "none"
			document.getElementById('section_height').style.height = "2530px"
			document.getElementById('section_background').style.height = "2530px"
			document.getElementById('tabs-4').style.height = "470px"
			document.getElementById('tabs-container').style.display = "none"
		}
	})
}

function changeHeight5() {
	var windowWidth =$( window ).width();

	if(windowWidth < 768) {
	//창 가로 크기가 500 미만일 경우
		document.getElementById('section_height').style.height = "5580px"
		document.getElementById('section_background').style.height = "5580px"
		document.getElementById('tabs-5').style.height = "470px"
	} else {
	//창 가로 크기가 500보다 클 경우
		document.getElementById('section_height').style.height = "5580px"
		document.getElementById('section_background').style.height = "5580px"
		document.getElementById('tabs-5').style.height = "470px"
	}
	$(window).on('resize',function(){
		var win = $(this);
		if(window.innerWidth <768){
			document.getElementById('section_height').style.height = "5580px"
			document.getElementById('section_background').style.height = "5580px"
			document.getElementById('tabs-5').style.height = "470px"
		}else{
			document.getElementById('section_height').style.height = "5580px"
			document.getElementById('section_background').style.height = "5580px"
			document.getElementById('tabs-5').style.height = "470px"
		}
	})
}

function changeHeight6() {
	var windowWidth =$( window ).width();

	if(windowWidth < 768) {
	//창 가로 크기가 500 미만일 경우
	document.getElementById('section_height').style.height = "2070px"
	document.getElementById('section_background').style.height = "2070px"
	document.getElementById('tabs-6').style.height = "470px"
	} else {
	//창 가로 크기가 500보다 클 경우
		document.getElementById('section_height').style.height = "2070px"
		document.getElementById('section_background').style.height = "2070px"
		document.getElementById('tabs-6').style.height = "470px"
	}

	$(window).on('resize',function(){
		var win = $(this);
		if(window.innerWidth <768){
			document.getElementById('section_height').style.height = "2070px"
			document.getElementById('section_background').style.height = "2070px"
			document.getElementById('tabs-6').style.height = "470px"
		}else{
			document.getElementById('section_height').style.height = "2070px"
			document.getElementById('section_background').style.height = "2070px"
			document.getElementById('tabs-6').style.height = "470px"
		}
	})
}

function changeHeight7() {
	var windowWidth =$( window ).width();

	if(windowWidth < 768) {
	//창 가로 크기가 500 미만일 경우
	document.getElementById('section_height').style.height = "1880px"
	document.getElementById('section_background').style.height = "1880px"
	document.getElementById('tabs-7').style.height = "470px"
	} else {
	//창 가로 크기가 500보다 클 경우
		document.getElementById('section_height').style.height = "1880px"
		document.getElementById('section_background').style.height = "1880px"
		document.getElementById('tabs-7').style.height = "470px"
	}

	$(window).on('resize',function(){
		var win = $(this);
		if(window.innerWidth <768){
			document.getElementById('section_height').style.height = "1880px"
			document.getElementById('section_background').style.height = "1880px"
			document.getElementById('tabs-7').style.height = "470px"
		}else{
			document.getElementById('section_height').style.height = "1880px"
			document.getElementById('section_background').style.height = "1880px"
			document.getElementById('tabs-7').style.height = "470px"
		}
	})
}

function changeHeight8() {
	var windowWidth =$( window ).width();

	if(windowWidth < 768) {
	//창 가로 크기가 500 미만일 경우
	document.getElementById('tabs-1').style.display = "none"
	document.getElementById('tabs-container').style.display = "none"
	document.getElementById('section_background').style.backgroundImage = "none"
	document.getElementById('section_height').style.height = "760px"
	document.getElementById('section_background').style.height = "760px"
	document.getElementById('tabs-8').style.height = "470px"
	} else {
	//창 가로 크기가 500보다 클 경우
		document.getElementById('tabs-1').style.display = "none"
		document.getElementById('tabs-container').style.display = "none"
		document.getElementById('section_background').style.backgroundImage = "none"
		document.getElementById('section_height').style.height = "760px"
		document.getElementById('section_background').style.height = "760px"
		document.getElementById('tabs-8').style.height = "470px"
	}

	$(window).on('resize',function(){
		var win = $(this);
		if(window.innerWidth <768){
			document.getElementById('tabs-1').style.display = "none"
			document.getElementById('tabs-container').style.display = "none"
			document.getElementById('section_background').style.backgroundImage = "none"
			document.getElementById('section_height').style.height = "760px"
			document.getElementById('section_background').style.height = "760px"
			document.getElementById('tabs-8').style.height = "470px"
		}else{
			document.getElementById('tabs-1').style.display = "none"
			document.getElementById('tabs-container').style.display = "none"
			document.getElementById('section_background').style.backgroundImage = "none"
			document.getElementById('section_height').style.height = "760px"
			document.getElementById('section_background').style.height = "760px"
			document.getElementById('tabs-8').style.height = "470px"
		}
	})
}
function changeHeight9() {
	var windowWidth =$( window ).width();

	if(windowWidth < 768) {
	//창 가로 크기가 500 미만일 경우
	document.getElementById('section_height').style.height = "1490px"
	document.getElementById('section_background').style.height = "1490px"
	document.getElementById('tabs-9').style.height = "470px"
	} else {
	//창 가로 크기가 500보다 클 경우
		document.getElementById('section_height').style.height = "1490px"
		document.getElementById('section_background').style.height = "1490px"
		document.getElementById('tabs-9').style.height = "470px"
	}

	$(window).on('resize',function(){
		var win = $(this);
		if(window.innerWidth <768){
			document.getElementById('section_height').style.height = "1490px"
			document.getElementById('section_background').style.height = "1490px"
			document.getElementById('tabs-9').style.height = "470px"
		}else{
			document.getElementById('section_height').style.height = "1490px"
			document.getElementById('section_background').style.height = "1490px"
			document.getElementById('tabs-9').style.height = "470px"
		}
	})
}

function changeHeight10() {
	var windowWidth =$( window ).width();

	if(windowWidth < 768) {
	//창 가로 크기가 500 미만일 경우
	document.getElementById('section_height').style.height = "810px"
	document.getElementById('section_background').style.height = "810px"
	document.getElementById('tabs-10').style.height = "470px"
	} else {
	//창 가로 크기가 500보다 클 경우
		document.getElementById('section_height').style.height = "810px"
		document.getElementById('section_background').style.height = "810px"
		document.getElementById('tabs-10').style.height = "470px"
	}
	$(window).on('resize',function(){
		var win = $(this);
		if(window.innerWidth <768){
			document.getElementById('section_height').style.height = "810px"
			document.getElementById('section_background').style.height = "810px"
			document.getElementById('tabs-10').style.height = "470px"
		}else{
			document.getElementById('section_height').style.height = "810px"
			document.getElementById('section_background').style.height = "810px"
			document.getElementById('tabs-10').style.height = "470px"
		}
	})
}

function changeHeight11() {
	var windowWidth =$( window ).width();

	if(windowWidth < 768) {
	//창 가로 크기가 500 미만일 경우
	document.getElementById('section_height').style.height = "1730px"
	document.getElementById('section_background').style.height = "1730px"
	document.getElementById('tabs-11').style.height = "470px"
	} else {
	//창 가로 크기가 500보다 클 경우
		document.getElementById('section_height').style.height = "1730px"
		document.getElementById('section_background').style.height = "1730px"
		document.getElementById('tabs-11').style.height = "470px"
	}
	$(window).on('resize',function(){
		var win = $(this);
		if(window.innerWidth <768){
			document.getElementById('section_height').style.height = "1730px"
			document.getElementById('section_background').style.height = "1730px"
			document.getElementById('tabs-11').style.height = "470px"
		}else{
			document.getElementById('section_height').style.height = "1730px"
			document.getElementById('section_background').style.height = "1730px"
			document.getElementById('tabs-10').style.height = "470px"
		}
	})
}

function changeHeight13() {
	var windowWidth =$( window ).width();

	if(windowWidth < 768) {
	//창 가로 크기가 500 미만일 경우
		document.getElementById('section_height').style.height = "4230px"
		document.getElementById('section_background').style.height = "4230px"
		document.getElementById('tabs-13').style.height = "470px"
	} else {
	//창 가로 크기가 500보다 클 경우
		document.getElementById('section_height').style.height = "4230px"
		document.getElementById('section_background').style.height = "4230px"
		document.getElementById('tabs-13').style.height = "470px"
	}
	$(window).on('resize',function(){
		var win = $(this);
		if(window.innerWidth <768){
			document.getElementById('section_height').style.height = "4230px"
			document.getElementById('section_background').style.height = "4230px"
			document.getElementById('tabs-13').style.height = "470px"
		}else{
			document.getElementById('section_height').style.height = "4230px"
			document.getElementById('section_background').style.height = "4230px"
			document.getElementById('tabs-13').style.height = "470px"
		}
	})
}
function changeHeight14() {
	var windowWidth =$( window ).width();

	if(windowWidth < 768) {
	//창 가로 크기가 500 미만일 경우
		document.getElementById('section_height').style.height = "3730px"
		document.getElementById('section_background').style.height = "3730px"
		document.getElementById('tabs-14').style.height = "470px"
	} else {
	//창 가로 크기가 500보다 클 경우
		document.getElementById('section_height').style.height = "3730px"
		document.getElementById('section_background').style.height = "3730px"
		document.getElementById('tabs-14').style.height = "470px"
	}
	$(window).on('resize',function(){
		var win = $(this);
		if(window.innerWidth <768){
			document.getElementById('section_height').style.height = "3730px"
			document.getElementById('section_background').style.height = "3730px"
			document.getElementById('tabs-14').style.height = "470px"
		}else{
			document.getElementById('section_height').style.height = "3730px"
			document.getElementById('section_background').style.height = "3730px"
			document.getElementById('tabs-14').style.height = "470px"
		}
	})
}
function changeHeight15() {
	var windowWidth =$( window ).width();

	if(windowWidth < 768) {
	//창 가로 크기가 500 미만일 경우
		document.getElementById('section_height').style.height = "1080px"
		document.getElementById('section_background').style.height = "1080px"
		document.getElementById('tabs-15').style.height = "470px"
	} else {
	//창 가로 크기가 500보다 클 경우
		document.getElementById('section_height').style.height = "1080px"
		document.getElementById('section_background').style.height = "1080px"
		document.getElementById('tabs-15').style.height = "470px"
	}

	$(window).on('resize',function(){
		var win = $(this);
		if(window.innerWidth <768){
			document.getElementById('section_height').style.height = "1080px"
			document.getElementById('section_background').style.height = "1080px"
			document.getElementById('tabs-15').style.height = "470px"
		}else{
			document.getElementById('section_height').style.height = "1080px"
			document.getElementById('section_background').style.height = "1080px"
			document.getElementById('tabs-15').style.height = "470px"
		}
	})
}
function changeHeight16() {
	var windowWidth =$( window ).width();

	if(windowWidth < 768) {
	//창 가로 크기가 500 미만일 경우
		document.getElementById('section_height').style.height = "1080px"
		document.getElementById('section_background').style.height = "1080px"
		document.getElementById('tabs-16').style.height = "470px"
	} else {
	//창 가로 크기가 500보다 클 경우
		document.getElementById('section_height').style.height = "1080px"
		document.getElementById('section_background').style.height = "1080px"
		document.getElementById('tabs-16').style.height = "470px"
	}

	$(window).on('resize',function(){
		var win = $(this);
		if(window.innerWidth <768){
			document.getElementById('section_height').style.height = "1080px"
			document.getElementById('section_background').style.height = "1080px"
			document.getElementById('tabs-16').style.height = "470px"
		}else{
			document.getElementById('section_height').style.height = "1080px"
			document.getElementById('section_background').style.height = "1080px"
			document.getElementById('tabs-16').style.height = "470px"
		}
	})
}

function bookreview() {
	var windowWidth =$( window ).width();

	if(windowWidth < 768) {
	//창 가로 크기가 500 미만일 경우
	document.getElementById('section_height').style.height = "1080px"
	document.getElementById('section_background').style.height = "1080px"
	document.getElementById('tabs-16').style.height = "470px"
	} else {
	//창 가로 크기가 500보다 클 경우
		document.getElementById('section_height').style.height = "1080px"
		document.getElementById('section_background').style.height = "1080px"
		document.getElementById('tabs-3').style.height = "470px"
	}

	$(window).on('resize',function(){
		var win = $(this);
		if(window.innerWidth <768){
			document.getElementById('section_height').style.height = "1080px"
			document.getElementById('section_background').style.height = "1080px"
			document.getElementById('tabs-16').style.height = "470px"
		}else{
			document.getElementById('section_height').style.height = "1080px"
			document.getElementById('section_background').style.height = "1080px"
			document.getElementById('tabs-3').style.height = "470px"
		}
	})
}
function changeHeight17() {
	var windowWidth =$( window ).width();

	if(windowWidth < 768) {
	//창 가로 크기가 500 미만일 경우
	document.getElementById('section_height').style.height = "7710px"
	document.getElementById('section_background').style.height = "7710px"
	document.getElementById('tabs-14').style.height = "470px"
	} else {
	//창 가로 크기가 500보다 클 경우
		document.getElementById('section_height').style.height = "7710px"
		document.getElementById('section_background').style.height = "7710px"
		document.getElementById('tabs-14').style.height = "470px"
	}
	$(window).on('resize',function(){
		var win = $(this);
		if(window.innerWidth <768){
			document.getElementById('section_height').style.height = "7710px"
			document.getElementById('section_background').style.height = "7710px"
			document.getElementById('tabs-14').style.height = "470px"
		}else{
			document.getElementById('section_height').style.height = "7710px"
			document.getElementById('section_background').style.height = "7710px"
			document.getElementById('tabs-14').style.height = "470px"
		}
	})
}
