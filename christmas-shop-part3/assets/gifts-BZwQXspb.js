import { c as createElem, T as TABLET_SCREEN_WIDTH, b as initSorting, i as initBurger, a as initGiftsGetData } from "./helper-CrgfauEd.js";
const upButton = createElem({
  nodeElem: "a",
  cssClasses: ["upButton"],
  attr: { href: "#top", title: "Up" },
  child: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 5V19" stroke="#FF4646" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18 11L12 5" stroke="#FF4646" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 11L12 5" stroke="#FF4646" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`
});
function createUpButton() {
  document.body.append(upButton);
  addUpButtonToPage();
}
function addUpButtonToPage() {
  window.addEventListener("scroll", checkScrollAndPageWidth);
  window.addEventListener("resize", checkScrollAndPageWidth);
}
function checkScrollAndPageWidth() {
  const SCROLL_DOWN_OFFSET = 300;
  if (window.scrollY >= SCROLL_DOWN_OFFSET && window.innerWidth < TABLET_SCREEN_WIDTH) {
    upButton.style.display = "block";
  } else {
    upButton.style.display = "none";
  }
}
function scrollToTop(event) {
  event.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
}
function initUpButton() {
  createUpButton();
  upButton.addEventListener("click", scrollToTop);
}
const menu = document.querySelector(".menu");
class MenuElem {
  constructor(category, onChange) {
    this.input = document.createElement("input");
    this.label = document.createElement("label");
    this.category = category;
    this.name = "menu";
    this.type = "radio";
    this.classNameTypography = "actionSmall";
    this.classNameMain = "menu-btn";
    this.text = category;
    this.input.onchange = () => {
      onChange(this.category.replace(/-/g, " "));
      this.checkActibeMenuElem();
    };
    this.renderMenuElem();
  }
  renderMenuElem() {
    this.renderInput();
    this.renderLabel();
  }
  renderInput() {
    this.input.type = this.type;
    this.input.name = this.name;
    this.input.id = this.category;
    if (this.category === "All") {
      this.input.checked = true;
    }
    menu == null ? void 0 : menu.append(this.input);
  }
  renderLabel() {
    this.label.htmlFor = this.category;
    this.label.classList.add(this.classNameTypography, this.classNameMain);
    this.label.textContent = this.category.replace(/-/g, " ");
    if (this.input.checked) {
      this.label.classList.add("activeBtn");
    }
    menu == null ? void 0 : menu.append(this.label);
  }
  checkActibeMenuElem() {
    Array.from(menu.children).forEach((child) => {
      if (child.tagName === "LABEL") {
        child.classList.remove("activeBtn");
      }
    });
    this.label.classList.add("activeBtn");
  }
}
const categories = ["All", "For-Work", "For-Health", "For-Harmony"];
categories.forEach((category) => {
  new MenuElem(category, initSorting);
});
window.addEventListener("load", () => {
  initBurger();
  initGiftsGetData();
  initUpButton();
});
