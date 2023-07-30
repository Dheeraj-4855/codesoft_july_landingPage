const navbar = document.querySelector(".navbar");
const rocket = document.querySelector(".rocket");
const rocket_up = document.querySelector(".up");
const sectionOne = document.querySelector(".header-content");

const sectionOneOptions={
    rootMargin:"-550px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function(
    entries,
    sectionOneObserver
  ) {
    entries.forEach(entry => {
        console.log(entry);
        console.log(entry.target);
      if (!entry.isIntersecting) {
        navbar.classList.add("nav-scrolled");
        rocket.classList.add("move");
        rocket_up.classList.add("rocket-up");
      } else {
        navbar.classList.remove("nav-scrolled");
        rocket.classList.remove("move");
        rocket_up.classList.remove("rocket-up");

      }
    });
  },
  sectionOneOptions);

//   const sectionOneObserver2 = new IntersectionObserver(function(
//     entries,
//     sectionOneObserver2
//   ) {
//     entries.forEach(entry => {
//         console.log(entry);
//         // console.log(entry.target);
//       if (!entry.isIntersecting) {
//         // navbar.classList.add("nav-scrolled");
//         rocket.classList.add("move");
//       } else {
//         // navbar.classList.remove("nav-scrolled");
//         rocket.classList.remove("move");
//       }
//     });
//   },
//   sectionOneOptions);


  sectionOneObserver.observe(sectionOne);
//   sectionOneObserver2.observe(sectionOne);

const input = document.querySelector(".menu-box");
const search = document.querySelector(".search-box");
const input2 = document.querySelector(".menu-items");
console.log(input);
console.log(input2);
// input.click(function(){
//     console.log(input[0].checked);
// })
$("input").click(function(){
    console.log($(this)[0].checked);
    if($(this)[0].checked){
        // input.classList.add('add');
        // navbar.classList.remove("nav-box");

        // input2.classList.add('add');

        // search.classList.add('transparent');
    }
    else{
        // input.classList.remove('add');

        // input2.classList.remove('add');
        // navbar.classList.add("nav-box");

        // search.classList.remove('transparent');

    }
});

// input.classList.add('inputs');
