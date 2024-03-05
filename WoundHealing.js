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

document.querySelector("#merge").addEventListener("click", mergeImage);
document.querySelector("#unmerge").addEventListener("click", unmergeImage);
document.querySelector("#previous").addEventListener("click", previousImage);
document.querySelector("#next").addEventListener("click", nextImage);

/*
setInterval(changeImage, 5000);



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