/*=============== SHOW MENU ===============*/

const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/* Menu show */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/* Menu hidden */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
  const header = document.getElementById("header");
  // Add a class if the bottom offset is greater than 50 of the viewport
  this.scrollY >= 50
    ? header.classList.add("bg-header")
    : header.classList.remove("bg-header");
};
window.addEventListener("scroll", scrollHeader);
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]"
      );

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);
/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);
/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
});

sr.reveal(`.home__data, .footer__container, .footer__group`);
sr.reveal(`.home__img`, { delay: 700, origin: "bottom" });
sr.reveal(`.logos__img, .program__card, .pricing__card`, { interval: 100 });
sr.reveal(`.choose__img, .calculate__content`, { origin: "left" });
sr.reveal(`.calculate__content, .calculate__img`, { origin: "right" });
/*=============== CALCULATE JS ===============*/
const calculateForm = document.getElementById("calculate-form"),
  calculateCm = document.getElementById("calculate-cm"),
  calculateKg = document.getElementById("calculate-kg"),
  caclulateMessage = document.getElementById("calculate-message");

const calculateBmi = (e) => {
  e.preventDefault();
  //check if the fields have a value
  if (calculateCm.value === "" || calculateKg.value === "") {
    caclulateMessage.classList.remove("color-green");
    caclulateMessage.classList.add("color-red");

    caclulateMessage.textContent = "Fill in the Height and Weight ";

    setTimeout(() => {
      caclulateMessage.textContent = "";
    }, 3000);
  } else {
    const cm = calculateCm.value / 100,
      kg = calculateKg.value,
      bmi = Math.round(kg / (cm * cm));
    if (bmi < 18.5) {
      caclulateMessage.classList.add("color-red");
      caclulateMessage.textContent = `شاخص BMI شما ${bmi} هست و لاغر هستید 😌`;
    } else if (bmi < 25) {
      caclulateMessage.classList.add("color-green");
      caclulateMessage.textContent = `شاخص BMI شما ${bmi} هست و تندرست هستید 🥳`;
    } else {
      caclulateMessage.classList.add("color-red");
      caclulateMessage.textContent = `شاخص BMI شما ${bmi} هست و چاق هستید 😌`;
    }

    calculateCm.value = "";
    calculateKg.value = "";
  }
};

calculateForm.addEventListener("submit", calculateBmi);

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById("contact-form"),
  contactMessage = document.getElementById("contact-message"),
  contactUser = document.getElementById("contact-user");

const sendEmail = (e) => {
  e.preventDefault();

  if (contactUser.value === "") {
    contactMessage.classList.remove("color-green");
    contactMessage.classList.add("color-red");

    contactMessage.textContent = "You must enter your email ☝";

    setTimeout(() => {
      contactMessage.textContent = "";
    }, 3000);
  } else {
    emailjs
      .sendForm(
        "service_mcwdh6i",
        "template_5gyc36h",
        "#contact-form",
        "jXVPcpFuQxN2zxp8J"
      )
      .then((e) => {
        console.log(e);
        contactMessage.classList.add("color-green");
        contactMessage.textContent = "با موفقیت ارسال شد 👌";

        setTimeout(() => {
          contactMessage.textContent = "";
          contactUser.value = "";
          dropdownSelected.textContent = "";
        }, 5000);
      })
      .catch((error) => {
        contactMessage.classList.add("color-red");

        contactMessage.textContent = "متاسفانه مشکلی پیش اومد!";

        setTimeout(() => {
          contactMessage.textContent = "";
        }, 3000);
      });
  }
};

contactForm.addEventListener("submit", sendEmail);

const listItems = document.querySelectorAll(".drop__down__content li");
const dropdownSelected = document.getElementById("dropdown-selected");
listItems.forEach(function (li) {
  li.addEventListener("click", function () {
    // Get the text content of the clicked list item
    var value = this.textContent || this.innerText;
    dropdownSelected.textContent = value;
  });
});
