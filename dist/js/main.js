const close_aside = document.querySelector(".close");
const open_aside = document.querySelector(".mobile_activator");
const aside = document.querySelector(".cover_wrapper");
const linkUp = document.querySelector(".uplink2");
const linkUp2 = document.querySelector(".uplink");
const drop1 = document.querySelector(".companyA");
const drop2 = document.querySelector(".feature");
const down1 = document.querySelector(".drop_A");
const down2 = document.querySelector(".drop_B");
let set = false;

drop2.addEventListener("click", (e) => {
  if (!set) {
    down1.classList.add("drop_down_list_activate");
    linkUp2.classList.add("active_indicator");
    set = true;
  } else {
    down1.classList.remove("drop_down_list_activate");
    linkUp2.classList.remove("active_indicator");
    set = false;
  }
});

let fea = false;

drop1.addEventListener("click", (e) => {
  if (!fea) {
    down2.classList.add("drop_down_list_activate");
    linkUp.classList.add("active_indicator");
    fea = true;
  } else {
    down2.classList.remove("drop_down_list_activate");
    linkUp.classList.remove("active_indicator");
    fea = false;
  }
});

open_aside.addEventListener("click", (e) => {
  aside.classList.replace("cover_wrapper", "cover_wrapper_active");
  close_aside.addEventListener("click", (e) => {
    aside.classList.replace("cover_wrapper_active", "cover_wrapper");
  });
});

// popUps.forEach((ups) => {
//   ups.addEventListener("click", (e) => {
//     console.log("clicked");
//   });
// });
