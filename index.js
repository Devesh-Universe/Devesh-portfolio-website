window.addEventListener("scroll", function () {
    const aboutSection = document.querySelector(".about-section");
    const aboutContent = document.querySelector(".about-content");
  
    const isScrolledPastAbout = window.scrollY > aboutSection.offsetTop;
    aboutContent.classList.toggle("fixed", isScrolledPastAbout);
  });
  