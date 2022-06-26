//All required element
const start_btn = document.querySelector(".start_btn button");
const Info_box = document.querySelector(".Info_box");
const exit_btn = Info_box.querySelector(".buttons .quit");
const continue_btn = Info_box.querySelector(".buttons .restart");

// if start button clicked
start_btn.onclick = () => {
  Info_box.classList.add("activeInfo");
};

// if end button clicked
exit_btn.onclick = () => {
  Info_box.classList.remove("activeInfo");
};
