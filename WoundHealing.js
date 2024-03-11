document.getElementById("degree").addEventListener("change", function(e) {
	const degree = e.target.value;
	rotateImage(degree);
})

function rotateImage(degree) {
	const image = document.getElementById("image");
	image.style.transform = 'rotate(' + degree + 'deg)';
	document.querySelector("#ang").innerHTML = "Degree: ".concat(degree);
}



const image = document.querySelector("#image");


opacity.addEventListener("change", changeOpacity);

function changeOpacity() {
	image.style.opacity = (document.querySelector("#opacity").value)/100;
	document.querySelector("#opac").innerHTML = (document.querySelector("#opacity").value)/100;
}



function mergeImage() {
	document.querySelector("#imageOverLay").style.visibility = "visible";
}

function unmergeImage() {
	document.querySelector("#imageOverLay").style.visibility = "hidden";
}

const img = document.getElementById("image");

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
	];




let imageIndex = 0;

function previousImage() {
	imageIndex = (imageIndex - 1);
	if (imageIndex > 0) {
		img.setAttribute("src", imageArray[imageIndex]);
		
		document.querySelector("#name").innerHTML = imageArray[imageIndex].substring(19);
	} else { 
		img.setAttribute("src", imageArray[0]);
		document.querySelector("#name").innerHTML = imageArray[0].substring(19);
		imageIndex = imageArray.length;
	}
	
	
}

function nextImage() {
	imageIndex = (imageIndex + 1);
	if (imageIndex < imageArray.length) {
		img.setAttribute("src", imageArray[imageIndex]);
		/* % imageArray.length*/
		document.querySelector("#name").innerHTML = imageArray[imageIndex].substring(19);
	} else {
		img.setAttribute("src", imageArray[0]);
		document.querySelector("#name").innerHTML = imageArray[0].substring(19);
		imageIndex = 0;
	}
}

let upPic = 0;

function up() {
	upPic -= 1;
	image.style.top = (document.querySelector("#up").value + upPic).concat("px");
}

function down() {
	upPic += 1;
	image.style.top = (document.querySelector("#down").value + upPic).concat("px");
}

let leftPic = 0;

function right() {
	leftPic += 1;
	image.style.left = (document.querySelector("#left").value + leftPic).concat("px");
}

function left() {
	leftPic -= 1;
	image.style.left = (document.querySelector("#right").value + leftPic).concat("px");
}

let slideIndex = 0;

let imageObjectArray = [
	{src: "./WoundRepair/P19b/P19b_110124.jpg", rotate: "0deg", top: "19px", left: "12px"},  
	{src: "./WoundRepair/P19b/P19b_180124.jpg", rotate: "18deg", top: "7px", left: "-14px"}, 
	{src: "./WoundRepair/P19b/P19b_220124.jpg", rotate: "2deg", top: "14px", left: "5px"}, 
	{src: "./WoundRepair/P19b/P19b_250124.jpg", rotate: "5deg", top: "55px", left: "31px"}, 
	{src: "./WoundRepair/P19b/P19b_290124.jpg", rotate: "-3deg", top: "34px", left: "19px"}, 
	{src: "./WoundRepair/P19b/P19b_050224.jpg", rotate: "13deg", top: "116px", left: "-23px"},
	{src: "./WoundRepair/P19b/P19b_070224.jpg", rotate: "0deg", top: "66px", left: "7px"},
	{src: "./WoundRepair/P19b/P19b_150224.jpg", rotate: "7deg", top: "101px", left: "18px"},
	{src: "./WoundRepair/P19b/P19b_200224.jpg", rotate: "15deg", top: "94px", left: "-1px"},
	{src: "./WoundRepair/P19b/P19b_260224.jpg", rotate: "-176deg", top: "-56px", left: "-1px"},
	];




const imgSlide = document.querySelector("#imageSlide");

function imageSlide() {
	slideIndex = (slideIndex + 1);
	if (slideIndex < imageObjectArray.length) {
		imageObjectArray.forEach((dataLine, index) => {
			imgSlide.setAttribute("src", dataLine.src);
			imgSlide.setAttribute("src", imageObjectArray[slideIndex].src);
			imgSlide.style.rotate = imageObjectArray[slideIndex].rotate;
			imgSlide.style.top = imageObjectArray[slideIndex].top;
			imgSlide.style.left = imageObjectArray[slideIndex].left;
		});
		
		document.querySelector("#nameS").innerHTML = imageObjectArray[slideIndex].src.substring(19);
	} else {
		imgSlide.setAttribute("src", imageObjectArray[0].src);
		imgSlide.style.rotate = imageObjectArray[0].rotate;
		imgSlide.style.top = imageObjectArray[0].top;
		imgSlide.style.left = imageObjectArray[0].left;
		document.querySelector("#nameS").innerHTML = imageObjectArray[0].src.substring(19);
		slideIndex = 0;
	}
}


document.querySelector("#merge").addEventListener("click", mergeImage);
document.querySelector("#unmerge").addEventListener("click", unmergeImage);
document.querySelector("#previous").addEventListener("click", previousImage);
document.querySelector("#next").addEventListener("click", nextImage);
document.querySelector("#up").addEventListener("click", up);
document.querySelector("#down").addEventListener("click", down);
document.querySelector("#left").addEventListener("click", left);
document.querySelector("#right").addEventListener("click", right);
document.querySelector("#containerTwo").addEventListener("mousedown", imageSlide);

/*setInterval(imageSlide, 1000);



const opaVal = document.getElementById("opacity");

opaVal.addEventListener("change", function(e) {
	const opacity = e.target.value;
	overLay(opacity);
})



function overLay(opacity) {
	const img = document.getElementById("image");
	img.style.transform = 'opacity(' + opacity + ')';
}



image.addEventListener("click", overLay);*/
