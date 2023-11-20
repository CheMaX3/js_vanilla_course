var showPrevButton = document.getElementById("show-prev");
var showNextButton = document.getElementById("show-next");
var slideImage = document.getElementById("slide-img")

var imageUrls = [];
imageUrls.push("https://cdn.theatlantic.com/thumbor/W544GIT4l3z8SG-FMUoaKpFLaxE=/0x131:2555x1568/1600x900/media/img/mt/2017/06/shutterstock_319985324/original.jpg");
imageUrls.push("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq1DTP4rgrrCcn-MRjnr5WD0OxZGwdGwTTRA&usqp=CAU");
imageUrls.push("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR39MKeSp5WlvRh9BNSPbBZgV2dm55bs6-G3A&usqp=CAU");
imageUrls.push("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiSzn8UOPRyJg36I6360VYo5XbdEmPdDl8fQ&usqp=CAU");

showPrevButton.addEventListener("click", onPrevButtonClick);
showNextButton.addEventListener("click", onNextButtonClick);

var currentImageIndex = 0;

slideImage.src=imageUrls[currentImageIndex];
showPrevButton.disabled=true;

function onPrevButtonClick() {
   currentImageIndex--;
   showNextButton.disabled=false;
   if (currentImageIndex === 0) {
      showPrevButton.disabled=true;
   }
   slideImage.src=imageUrls[currentImageIndex];
}

function onNextButtonClick() {
   currentImageIndex++;
   showPrevButton.disabled=false;
   slideImage.src=imageUrls[currentImageIndex];
   if (currentImageIndex === imageUrls.length-1) {
      showNextButton.disabled=true;
   }
}