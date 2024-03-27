const img = document.getElementById("image");
const imgSlide = document.querySelector("#imageSlide");




function changeOpacity() {
	img.style.opacity = (document.querySelector("#opacity").value)/100;
	document.querySelector("#opac").innerHTML = (document.querySelector("#opacity").value)/100;
}

function changeScale() {
	img.style.scale = (document.querySelector("#scale").value)/100;
	document.querySelector("#scal").innerHTML = (document.querySelector("#scale").value)/100;
}

function mergeImage() {
	document.querySelector("#imageOverLay").style.visibility = "visible";
}

function unmergeImage() {
	document.querySelector("#imageOverLay").style.visibility = "hidden";
}

let imageArray = [
	"./WoundRepair/P19b/P19b_110124.jpg",  
	"./WoundRepair/P19b/P19b_180124.jpg", 
	"./WoundRepair/P19b/P19b_220124.jpg", 
	"./WoundRepair/P19b/P19b_250124.jpg", 
	"./WoundRepair/P19b/P19b_290124.jpg", 
	"./WoundRepair/P19b/P19b_050224.jpg",
	"./WoundRepair/P19b/P19b_070224.jpg",
	"./WoundRepair/P19b/P19b_150224.jpg",
	"./WoundRepair/P19b/P19b_200224.jpg",
	"./WoundRepair/P19b/P19b_260224.jpg",
	"./WoundRepair/P19b/P19b_290224.jpg",
	"./WoundRepair/P19b/P19b_040324.jpg",
	"./WoundRepair/P19b/P19b_070324.jpg",
	"./WoundRepair/P19b/P19b_110324.jpg",
	"./WoundRepair/P19b/P19b_140324.jpg",
	"./WoundRepair/P19b/P19b_180324.jpg",
	"./WoundRepair/P19b/P19b_210324.jpg",
	"./WoundRepair/P19b/P19b_250324.jpg",
	];

let imageIndex = 0;

function previousImage() {
	imageIndex = (imageIndex - 1);
	if (imageIndex > 0) {
		img.setAttribute("src", imageArray[imageIndex]);
		
		document.querySelector("#name").innerHTML = ("Date: ").concat(imageArray[imageIndex].substring(24, 30));
	} else { 
		img.setAttribute("src", imageArray[0]);
		document.querySelector("#name").innerHTML = ("Date: ").concat(imageArray[0].substring(24, 30));
		imageIndex = imageArray.length;
	}	
}

function nextImage() {
	imageIndex = (imageIndex + 1);
	if (imageIndex < imageArray.length) {
		img.setAttribute("src", imageArray[imageIndex]);
		/* % imageArray.length*/
		document.querySelector("#name").innerHTML = ("Date: ").concat(imageArray[imageIndex].substring(24, 30));
	} else {
		img.setAttribute("src", imageArray[0]);
		document.querySelector("#name").innerHTML = ("Date: ").concat(imageArray[0].substring(24, 30));
		imageIndex = 0;
	}
}

let upPic = 0;

function up() {
	upPic -= 1;
	img.style.top = (document.querySelector("#up").value + upPic).concat("px");
}

function upD() {
	upPic -= 10;
	img.style.top = (document.querySelector("#up").value + upPic).concat("px");
}

function down() {
	upPic += 1;
	img.style.top = (document.querySelector("#down").value + upPic).concat("px");
}
function downD() {
	upPic += 10;
	img.style.top = (document.querySelector("#down").value + upPic).concat("px");
}

let leftPic = 0;

function right() {
	leftPic += 1;
	img.style.left = (document.querySelector("#left").value + leftPic).concat("px");
}

function rightD() {
	leftPic += 10;
	img.style.left = (document.querySelector("#left").value + leftPic).concat("px");
}

function left() {
	leftPic -= 1;
	img.style.left = (document.querySelector("#right").value + leftPic).concat("px");
}

function leftD() {
	leftPic -= 10;
	img.style.left = (document.querySelector("#right").value + leftPic).concat("px");
}

document.getElementById("degree").addEventListener("change", function(e) {
	const degree = e.target.value;
	rotateImage(degree);
})

function rotateImage(degree) {
	const img = document.getElementById("image");
	img.style.transform = 'rotate(' + degree + 'deg)';
	document.querySelector("#ang").innerHTML = "Degree: ".concat(degree);
}

let slideIndex = 0;
let count = 0;

let imageObjectArray2 = [
	{src: "./WoundRepair/P19b/P19b_110124.jpg", rotate: "0deg", top: "19px", left: "12px", clip: "rect(0px, 100px, 0px, 100px)"},  
	{src: "./WoundRepair/P19b/P19b_180124.jpg", rotate: "18deg", top: "7px", left: "-14px", clip: "rect(0px, 100px, 0px, 100px)"}, 
	{src: "./WoundRepair/P19b/P19b_220124.jpg", rotate: "2deg", top: "14px", left: "5px", clip: "rect(0px, 100px, 0px, 100px)"}, 
	{src: "./WoundRepair/P19b/P19b_250124.jpg", rotate: "5deg", top: "55px", left: "31px", clip: "rect(0px, 100px, 0px, 100px)"}, 
	{src: "./WoundRepair/P19b/P19b_290124.jpg", rotate: "-3deg", top: "34px", left: "19px", clip: "rect(0px, 100px, 0px, 100px)"}, 
	{src: "./WoundRepair/P19b/P19b_050224.jpg", rotate: "13deg", top: "116px", left: "-23px", clip: "rect(0px, 100px, 0px, 100px)"},
	{src: "./WoundRepair/P19b/P19b_070224.jpg", rotate: "0deg", top: "66px", left: "7px", clip: "rect(0px, 100px, 0px, 100px)"},
	{src: "./WoundRepair/P19b/P19b_150224.jpg", rotate: "7deg", top: "101px", left: "18px", clip: "rect(0px, 100px, 0px, 100px)"},
	{src: "./WoundRepair/P19b/P19b_200224.jpg", rotate: "15deg", top: "94px", left: "-1px", clip: "rect(0px, 100px, 0px, 100px)"},
	{src: "./WoundRepair/P19b/P19b_260224.jpg", rotate: "-176deg", top: "-56px", left: "-1px", clip: "rect(0px, 100px, 0px, 100px)"},
	];

let imageObjectArray = [
	{src: "./WoundRepair/P19b/P19b_110124.jpg", rotate: "0deg", top: "0px", left: "0px", scale: "1.0"},  
	{src: "./WoundRepair/P19b/P19b_180124.jpg", rotate: "22deg", top: "6px", left: "-24px", scale: "0.95"}, 
	{src: "./WoundRepair/P19b/P19b_220124.jpg", rotate: "9deg", top: "-9px", left: "-24px", scale: "0.95"}, 
	{src: "./WoundRepair/P19b/P19b_250124.jpg", rotate: "12deg", top: "33px", left: "0px", scale: "0.95"}, 
	{src: "./WoundRepair/P19b/P19b_290124.jpg", rotate: "4deg", top: "21px", left: "-5px", scale: "0.97"}, 
	{src: "./WoundRepair/P19b/P19b_050224.jpg", rotate: "25deg", top: "73px", left: "-65px", scale: "0.95"},
	{src: "./WoundRepair/P19b/P19b_070224.jpg", rotate: "4deg", top: "43px", left: "-5px", scale: "0.92"},
	{src: "./WoundRepair/P19b/P19b_150224.jpg", rotate: "12deg", top: "75px", left: "-5px", scale: "0.95"},
	{src: "./WoundRepair/P19b/P19b_200224.jpg", rotate: "20deg", top: "62px", left: "-17px", scale: "0.95"},
	{src: "./WoundRepair/P19b/P19b_260224.jpg", rotate: "-169deg", top: "-70px", left: "-5px", scale: "0.95"},
	{src: "./WoundRepair/P19b/P19b_290224.jpg", rotate: "12deg", top: "98px", left: "-41px", scale: "0.95"},
	{src: "./WoundRepair/P19b/P19b_040324.jpg", rotate: "14deg", top: "99px", left: "-39px", scale: "0.93"},
	{src: "./WoundRepair/P19b/P19b_070324.jpg", rotate: "9deg", top: "108px", left: "-33px", scale: "0.93"},
	{src: "./WoundRepair/P19b/P19b_110324.jpg", rotate: "14deg", top: "65px", left: "-35px", scale: "0.93"},
	{src: "./WoundRepair/P19b/P19b_140324.jpg", rotate: "9deg", top: "107px", left: "-43px", scale: "0.93"},
	{src: "./WoundRepair/P19b/P19b_180324.jpg", rotate: "12deg", top: "46px", left: "-5px", scale: "0.94"},
	{src: "./WoundRepair/P19b/P19b_210324.jpg", rotate: "6deg", top: "54px", left: "-5px", scale: "0.94"},
	{src: "./WoundRepair/P19b/P19b_250324.jpg", rotate: "4deg", top: "97px", left: "-29px", scale: "0.94"},
	];


function imageSlide() {
	slideIndex = (slideIndex + 1);
	count = 0;
	if (slideIndex < imageObjectArray.length) {
		imageObjectArray.forEach((dataLine, index) => {
			imgSlide.setAttribute("src", dataLine.src);
			imgSlide.setAttribute("src", imageObjectArray[slideIndex].src);
			imgSlide.style.rotate = imageObjectArray[slideIndex].rotate;
			imgSlide.style.top = imageObjectArray[slideIndex].top;
			imgSlide.style.left = imageObjectArray[slideIndex].left;
			imgSlide.style.clip = imageObjectArray[slideIndex].clip;
		});
		document.querySelector("#nameS").innerHTML = ("Date: ").concat(imageObjectArray[slideIndex].src.substring(24, 30));
	} else {
		imgSlide.setAttribute("src", imageObjectArray[0].src);
		imgSlide.style.rotate = imageObjectArray[0].rotate;
		imgSlide.style.top = imageObjectArray[0].top;
		imgSlide.style.left = imageObjectArray[0].left;
		document.querySelector("#nameS").innerHTML = ("Date: ").concat(imageObjectArray[0].src.substring(24, 30));
		slideIndex = 0;
	}
}
/*
let imgIsLarge = "false";

let id = document.querySelector("#id")

function enlargeImg() {
	for(let i = 0)
	document.querySelector(".pic") = pic;
		if(imgIsLarge = "false") {
			document.querySelector(".pic").style.width = "400px";
			imgIsLarge = "true";
		}
		else {
			document.querySelector(".pic").style.width = "100px";
			imgIsLarge = "false";
	} 
}
*/





let animationIsOn = false;


function startAnimation() {
	let myInterval = 500;
	if(animationIsOn == false) {
		setInterval(imageSlide, myInterval);
		animationIsOn = true;	
	} else if (animationIsOn == true) {
		myInterval = 2000;

	}
	
}






document.querySelector("#start").addEventListener("click", startAnimation);
//document.querySelector("#stop").addEventListener("click", stopAnimation);

//document.querySelector(".pic").addEventListener("click", enlargeImg);
document.querySelector("#scale").addEventListener("change", changeScale);
opacity.addEventListener("change", changeOpacity);
document.querySelector("#merge").addEventListener("click", mergeImage);
document.querySelector("#unmerge").addEventListener("click", unmergeImage);
document.querySelector("#previous").addEventListener("click", previousImage);
document.querySelector("#next").addEventListener("click", nextImage);
document.querySelector("#up").addEventListener("click", up);
document.querySelector("#up").addEventListener("dblclick", upD);
document.querySelector("#down").addEventListener("click", down);
document.querySelector("#down").addEventListener("dblclick", downD);
document.querySelector("#left").addEventListener("click", left);
document.querySelector("#left").addEventListener("dblclick", leftD);
document.querySelector("#right").addEventListener("click", right);
document.querySelector("#right").addEventListener("dblclick", rightD);
document.querySelector("#imageSlide").addEventListener("click", imageSlide);
