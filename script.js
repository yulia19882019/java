const elements = document.getElementsByClassName("menu-item");
for(i=0;i<elements.length;i++){
  elements[i].addEventListener("mousedown", showMenu);
  elements[i].addEventListener("mouseleave", hideMenu);
}


function showMenu(){
  if(this.children.length>1){
    this.children[1].style.height = "auto";
    this.children[1].style.opacity = "1";
    this.children[1].style.overflow = "visible";
    
  }

}


function hideMenu(){
  if(this.children.length>1){
    this.children[1].style.height = "0";
    this.children[1].style.opacity = "0";
    this.children[1].style.overflow = "hidden";
    
  }

}

const nextButton = document.querySelector(".next");
const prevButton = document.querySelector(".prev");

const images = document.querySelectorAll(".photos img");

let imagesIndex = 0;

nextButton.onclick = function() {
  images[imagesIndex].classList.remove("show");

  if (imagesIndex >= images.length - 1) {
    imagesIndex = 0;
  } else {
    imagesIndex = imagesIndex + 1;
  }

  images[imagesIndex].classList.add("show");
};

prevButton.onclick = function() {
  images[imagesIndex].classList.remove("show");

  if (imagesIndex <= 0) {
    imagesIndex = images.length - 1;
  } else{
    imagesIndex = imagesIndex - 1;
  }

  images[imagesIndex].classList.add("show");
};


const next2Button = document.querySelector(".next2");
const prev2Button = document.querySelector(".prev2");

const images2 = document.querySelectorAll(".photos2 img");

let images2Index = 0;

next2Button.onclick = function () {
  images2[images2Index].classList.remove("show2");

   if (images2Index >= images2.length - 1) {
    images2Index = 0;
   } else {
    images2Index = images2Index + 1;
   }


  images2[images2Index].classList.add("show2");
};

prev2Button.onclick = function() {
  images2[images2Index].classList.remove("show2");

  if(images2Index <= 0) {
   images2Index = images2.length - 1;
  } else {
    images2Index = images2Index - 1;
  }

  images2[images2Index].classList.add("show2");
};




const next1Button = document.querySelector(".next1");
const prev1Button = document.querySelector(".prev1");

const images1 = document.querySelectorAll(".photos1 img");

let image1Index = 0;

next1Button.onclick = function() {
  images1[image1Index].classList.remove("show1");

  if(image1Index>= images1.length - 1) {
    image1Index = 0;
  } else {
    image1Index = image1Index + 1;
  }

  images1[image1Index].classList.add("show1");
};

prev1Button.onclick = function() {
  images1[image1Index].classList.remove("show1");

  if(image1Index <= 0) {
    image1Index = images1.length - 1;
  } else {
    image1Index = image1Index - 1;
  }


  images1[image1Index].classList.add("show1");
};


function validation(form) {
  function removeError(input) {
    const parent = input.parentNode;

    if(parent.classList.contains("error")){
      parent.querySelector(".error-label").remove()
      parent.classList.remove("error")
    }

  }
  function createError(input, text) {
    const parent = input.parentNode;
    const errorLabel = document.createElement("label")

    errorLabel.classList.add("error-label")
    errorLabel.textContent = text
  
    parent.classList.add("error")

    parent.append(errorLabel)
  }


   let result = true;

  const allInputs = form.querySelectorAll("input");

  for (const input of allInputs) {

    removeError(input)
    if(input.value =="") {
      console.log("ошибка");
      createError(input, "не заполнено")
      result = false
    }
  }

   return result
}



document.getElementById("add-form").addEventListener("submit", function(event) {
  event.preventDefault()
  if(validation(this) == true) {
    alert("Отправленно!")
  }
})
