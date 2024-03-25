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

let imageObjectArray = [
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

let imageObjectArray2 = [
	{src: "./WoundRepair/P19b/P19b_110124.jpg", rotate: "0deg", top: "-5px", left: "5px", scale: "1.02"},  
	{src: "./WoundRepair/P19b/P19b_180124.jpg", rotate: "23deg", top: "-15px", left: "-8px", scale: "0.96"}, 
	{src: "./WoundRepair/P19b/P19b_220124.jpg", rotate: "5deg", top: "-3px", left: "-12px", scale: "0.99"}, 
	{src: "./WoundRepair/P19b/P19b_250124.jpg", rotate: "5deg", top: "55px", left: "31px"}, 
	{src: "./WoundRepair/P19b/P19b_290124.jpg", rotate: "-3deg", top: "34px", left: "19px"}, 
	{src: "./WoundRepair/P19b/P19b_050224.jpg", rotate: "13deg", top: "116px", left: "-23px"},
	{src: "./WoundRepair/P19b/P19b_070224.jpg", rotate: "0deg", top: "66px", left: "7px"},
	{src: "./WoundRepair/P19b/P19b_150224.jpg", rotate: "7deg", top: "101px", left: "18px"},
	{src: "./WoundRepair/P19b/P19b_200224.jpg", rotate: "15deg", top: "94px", left: "-1px"},
	{src: "./WoundRepair/P19b/P19b_260224.jpg", rotate: "-176deg", top: "-56px", left: "-1px"},
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
