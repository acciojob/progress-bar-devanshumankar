const nextButton = document.querySelector("#next");
        let currentActiveElement = document.querySelector("#circle-1");
        const prevButton = document.querySelector("#prev");
		prevButton.style.display="none"
        nextButton.addEventListener("click", () => {
            if (currentActiveElement.id == "circle-5") nextButton.style.display = "none";
            else {
                prevButton.style.display = "inline"
                currentActiveElement.nextElementSibling.classList.add("active");
                currentActiveElement = currentActiveElement.nextElementSibling;
            }

        })
        prevButton.addEventListener("click", () => {
            if(currentActiveElement.id!="circle-1"){
                nextButton.style.display="inline"
                currentActiveElement.classList.remove("active");
                currentActiveElement = currentActiveElement.previousElementSibling
            }
            else{
                prevButton.style.display="none"
            }
        })