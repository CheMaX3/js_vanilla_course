var slider1 = {
    imageUrls: [],
    currentImageIndex: 0,
    showPrevButton: document.getElementById("show-prev"),
    showNextButton: document.getElementById("show-next"),
    slideImage: document.getElementById("slide-img"),

    init: function() {
        var that = this;
        this.imageUrls.push("https://cdn.theatlantic.com/thumbor/W544GIT4l3z8SG-FMUoaKpFLaxE=/0x131:2555x1568/1600x900/media/img/mt/2017/06/shutterstock_319985324/original.jpg");
        this.imageUrls.push("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq1DTP4rgrrCcn-MRjnr5WD0OxZGwdGwTTRA&usqp=CAU");
        this.imageUrls.push("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR39MKeSp5WlvRh9BNSPbBZgV2dm55bs6-G3A&usqp=CAU");
        this.imageUrls.push("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiSzn8UOPRyJg36I6360VYo5XbdEmPdDl8fQ&usqp=CAU");

        this.showPrevButton.addEventListener("click", function(event) {
            that.onPrevButtonClick
        });  
        
        this.showNextButton.addEventListener("click", function(event) {
            that.onNextButtonClick
        });

        this.slideImage.src = this.imageUrls[this.currentImageIndex];
        this.showPrevButton.disabled = true;
    },

    onPrevButtonClick: function(event) {
        this.showNextButton.disabled = false;
        this.currentImageIndex--;
        if (this.currentImageIndex === 0) {
            showPrevButton.disabled = true;
        }
        this.slideImage.src = this.imageUrls[this.currentImageIndex];
    },

    onNextButtonClick: function(event) {
        this.currentImageIndex++;
        this.showPrevButton.disabled = false;
        this.slideImage.src = this.imageUrls[this.currentImageIndex];
        if (this.currentImageIndex === this.imageUrls.length - 1) {
            showNextButton.disabled = true;
        }
    }
};