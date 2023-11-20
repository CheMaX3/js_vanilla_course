var sliderFactory = {
    createNewSlider: function() {
        var newSlider = {
            imageUrls: [],
            currentImageIndex: 0,
            showPrevButton: null,
            showNextButton: null,
            slideImage: null,

            init: function (elementId) {
                var that = this;
                var element = document.querySelector("#" + elementId);

                this.showPrevButton = element.querySelector(".show-prev");
                this.showNextButton = element.querySelector(".show-next");
                this.slideImage = element.querySelector(".slide-img");

                this.imageUrls.push("https://cdn.theatlantic.com/thumbor/W544GIT4l3z8SG-FMUoaKpFLaxE=/0x131:2555x1568/1600x900/media/img/mt/2017/06/shutterstock_319985324/original.jpg");
                this.imageUrls.push("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq1DTP4rgrrCcn-MRjnr5WD0OxZGwdGwTTRA&usqp=CAU");
                this.imageUrls.push("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR39MKeSp5WlvRh9BNSPbBZgV2dm55bs6-G3A&usqp=CAU");
                this.imageUrls.push("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiSzn8UOPRyJg36I6360VYo5XbdEmPdDl8fQ&usqp=CAU");

                this.showPrevButton.addEventListener("click", function (event) {
                    that.onPrevButtonClick(event);
                });

                this.showNextButton.addEventListener("click", function (event) {
                    that.onNextButtonClick(event);
                });

                this.slideImage.src = this.imageUrls[this.currentImageIndex];
                this.showPrevButton.disabled = true;
            },

            onPrevButtonClick: function (event) {
                this.currentImageIndex--;
                this.slideImage.src = this.imageUrls[this.currentImageIndex];
                this.showNextButton.disabled = false;
                if (this.currentImageIndex === 0) {
                    this.showPrevButton.disabled = true;
                }
            },

            onNextButtonClick: function (event) {
                this.currentImageIndex++;
                this.slideImage.src = this.imageUrls[this.currentImageIndex];
                this.showPrevButton.disabled = false;
                if (this.currentImageIndex === (this.imageUrls.length - 1)) {
                    this.showNextButton.disabled = true;
                }
            }
        }

        return newSlider;
    }
};