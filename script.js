// function repeatSvgInfo(iconClass) {
//   const col1 = document.createElement("div");
//   col1.className = "col-4 col-md-2 col-lg-1";

//   const col2 = document.createElement("div");
//   col2.className = "col-4 col-md-2 col-lg-3 svg-info";

//   const svgBoxIcon = document.createElement("i");
//   svgBoxIcon.className = iconClass;

//   const svgBox = document.createElement("div");
//   svgBox.className = "svg-box";
//   svgBox.onclick = function () {
//     toggleSvgInfo(this);
//   };
//   svgBox.appendChild(svgBoxIcon);

//   const codeInput = document.createElement("input");
//   codeInput.className = "size--md cdn-style-link cdn--input";
//   codeInput.type = "text";
//   codeInput.readOnly = true;
//   codeInput.value = `<i class="${iconClass}"></i>`;

//   const clipboardIcon = document.createElement("i");
//   clipboardIcon.className = `bi bi-clipboard-fill`;

//   const codeBox = document.createElement("div");
//   codeBox.className = "svg-box";
//   codeBox.appendChild(codeInput);
//   codeBox.appendChild(document.createElement("div").appendChild(clipboardIcon));

//   col1.appendChild(svgBox);
//   col2.appendChild(codeBox);

//   const targetElement = document.getElementById("svg-row");
//   targetElement.appendChild(col1);
//   targetElement.appendChild(col2);
// }

// // function toggleSvgInfo(element) {
// //   const svgInfo = element.nextElementSibling;
// //   svgInfo.style.display = svgInfo.style.display === "none" ? "block" : "none";
// // }

// function copyToClipboard(value) {
//   const tempInput = document.createElement("input");
//   tempInput.value = value;
//   document.body.appendChild(tempInput);
//   tempInput.select();
//   document.execCommand("copy");
//   document.body.removeChild(tempInput);
// }

// // Call the repeatSvgInfo function to add multiple SVG icons and code snippets
// const svgInfoArray = [
//   "shakil-lineui-book",
//   "shakil-lineui-book-1",
//   "shakil-lineui-bookmark",
//   "shakil-lineui-bookmark-2",
// ];

// svgInfoArray.forEach((iconClass, index) => {
//   repeatSvgInfo(iconClass, index);
// });

function repeatSvgInfo(iconClass) {
  // Create the column elements
  const col1 = document.createElement("div");
  col1.className = "col-4 col-md-2 col-lg-1";

  const col2 = document.createElement("div");
  col2.className = "col-8 col-md-6 col-lg-4 svg-info";

  // Create the SVG icon element
  const svgBoxIcon = document.createElement("i");
  svgBoxIcon.className = iconClass;

  // Create the SVG icon container element
  const svgBox = document.createElement("div");
  svgBox.className = "svg-box";
  svgBox.onclick = function () {
    toggleSvgInfo(this);
  };
  svgBox.appendChild(svgBoxIcon);

  // Create the HTML code snippet input element
  const codeInput = document.createElement("input");
  codeInput.className = "size--md cdn-style-link cdn--input";
  codeInput.type = "text";
  codeInput.readOnly = true;
  codeInput.value = `<i class="${iconClass}"></i>`;

  // Create the clipboard icon element
  const clipboardIcon = document.createElement("i");
  clipboardIcon.className = "fi fi-sr-duplicate";
  clipboardIcon.onclick = function () {
    copyToClipboard(codeInput.value);
  };

  // Create the HTML code snippet container element
  const codeBox = document.createElement("div");
  codeBox.className = "svg-box";
  codeBox.appendChild(codeInput);
  codeBox.appendChild(document.createElement("div").appendChild(clipboardIcon));

  col1.appendChild(svgBox);
  col2.appendChild(codeBox);

  const targetElement = document.getElementById("svg-row");
  targetElement.appendChild(col1);
  targetElement.appendChild(col2);
}

function copyToClipboard(value) {
  const tempInput = document.createElement("input");
  tempInput.value = value;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  showCopyAlert();
  document.body.removeChild(tempInput);
}

// Call the repeatSvgInfo function to add multiple SVG icons and code snippets
const svgInfoArray = [
  "shakil-lineui-blend",
  "shakil-lineui-bluetooth",
  "shakil-lineui-bluetooth-2",
  "shakil-lineui-bluetooth-circle",
  "shakil-lineui-bluetooth-rectangle",
  "shakil-lineui-blur",
  "shakil-lineui-book",
  "shakil-lineui-book-1",
  "shakil-lineui-bookmark",
  "shakil-lineui-bookmark-2",
  "shakil-lineui-book-saved",
  "shakil-lineui-book-square",
  "shakil-lineui-box",
  "shakil-lineui-box-1",
  "shakil-lineui-box-2",
  "shakil-lineui-box-add",
  "shakil-lineui-box-remove",
  "shakil-lineui-box-search",
  "shakil-lineui-box-tick",
  "shakil-lineui-box-time",
  "shakil-lineui-briefcase",
  "shakil-lineui-brifecase-cross",
  "shakil-lineui-brifecase-tick",
  "shakil-lineui-brifecase-timer",
  "shakil-lineui-broom",
  "shakil-lineui-brush",
  "shakil-lineui-brush-1",
  "shakil-lineui-brush-2",
  "shakil-lineui-brush-3",
  "shakil-lineui-bubble",
  "shakil-lineui-bucket-circle",
  "shakil-lineui-bucket-square",
  "shakil-lineui-building",
  "shakil-lineui-building-3",
  "shakil-lineui-building-4",
  "shakil-lineui-buildings",
  "shakil-lineui-buildings-2",
  "shakil-lineui-bag-1",
  "shakil-lineui-bag-timer",
  "shakil-lineui-bank",
  "shakil-lineui-barcode",
  "shakil-lineui-battery-3full",
  "shakil-lineui-battery-charging",
  "shakil-lineui-battery-disable",
  "shakil-lineui-battery-empty",
  "shakil-lineui-battery-empty-1",
  "shakil-lineui-battery-full",
  "shakil-lineui-bezier",
  "shakil-lineui-bill",
  "shakil-lineui-bitcoin-card",
  "shakil-lineui-bitcoin-convert",
  "shakil-lineui-bitcoin-refresh",
  "shakil-lineui-blend-2",
  "shakil-lineui-arrow",
  "shakil-lineui-arrow-square",
  "shakil-lineui-arrow-square-right",
  "shakil-lineui-arrow-square-up",
  "shakil-lineui-arrow-swap-horizontal",
  "shakil-lineui-arrow-up",
  "shakil-lineui-arrow-up-1",
  "shakil-lineui-arrow-up-2",
  "shakil-lineui-arrow-up-3",
  "shakil-lineui-attach-circle",
  "shakil-lineui-attach-square",
  "shakil-lineui-audio-square",
  "shakil-lineui-autobrightness",
  "shakil-lineui-award",
  "shakil-lineui-back-square",
  "shakil-lineui-backward",
  "shakil-lineui-backward-5-seconds",
  "shakil-lineui-backward-10-seconds",
  "shakil-lineui-backward-15-seconds",
  "shakil-lineui-backward-item",
  "shakil-lineui-bag",
  "shakil-lineui-bag-cross",
  "shakil-lineui-bag-cross-1",
  "shakil-lineui-bag-happy",
  "shakil-lineui-bag-tick",
  "shakil-lineui-bag-tick-2",
  "shakil-lineui-archive",
  "shakil-lineui-arrange-circle",
  "shakil-lineui-arrange-circle-2",
  "shakil-lineui-arrange-square",
  "shakil-lineui-arrange-square-2",
  "shakil-lineui-arrow-2",
  "shakil-lineui-arrow-3",
  "shakil-lineui-arrow-bottom",
  "shakil-lineui-arrow-circle-down",
  "shakil-lineui-arrow-circle-left",
  "shakil-lineui-arrow-circle-right",
  "shakil-lineui-arrow-down",
  "shakil-lineui-arrow-down-1",
  "shakil-lineui-arrow-down-2",
  "shakil-lineui-arrow-left",
  "shakil-lineui-arrow-left-1",
  "shakil-lineui-arrow-left-2",
  "shakil-lineui-arrow-left-3",
  "shakil-lineui-arrow-right",
  "shakil-lineui-arrow-right-1",
  "shakil-lineui-arrow-right-2",
  "shakil-lineui-arrow-right-3",
  "shakil-lineui-arrow-square-down",
  "shakil-lineui-arrow-square-left",
  "shakil-lineui-add",
  "shakil-lineui-additem",
  "shakil-lineui-add-square",
  "shakil-lineui-airdrop",
  "shakil-lineui-airplane",
  "shakil-lineui-airplane-square",
  "shakil-lineui-airpod",
  "shakil-lineui-airpods",
  "shakil-lineui-alarm",
  "shakil-lineui-align-bottom",
  "shakil-lineui-align-horizontally",
  "shakil-lineui-align-left",
  "shakil-lineui-align-right",
  "shakil-lineui-align-vertically",
  "shakil-lineui-aquarius",
  "shakil-lineui-archive-1",
  "shakil-lineui-archive-add",
  "shakil-lineui-archive-book",
  "shakil-lineui-archive-minus",
  "shakil-lineui-archive-slash",
  "shakil-lineui-archive-tick",
  "shakil-lineui-3dcube",
  "shakil-lineui-3d-cube-scan",
  "shakil-lineui-3d-rotate",
  "shakil-lineui-3d-square",
  "shakil-lineui-3square",
  "shakil-lineui-24-support",
  "shakil-lineui-activity",
  "shakil-lineui-add-circle",
];

svgInfoArray.forEach(repeatSvgInfo);

function toggleSvgInfo(element) {
  var svgInfo = element.parentNode.nextElementSibling;
  svgInfo.classList.toggle("visible");
}

function copyLinkCdn() {
  const inputElement = document.getElementById("link-cdn-input");
  inputElement.select();
  document.execCommand("copy");
  showCopyAlert();
  //   alert("Copied to clipboard!");
}

function copyImportCdn() {
  const inputElement = document.getElementById("import-cdn-input");
  inputElement.select();
  document.execCommand("copy");
  showCopyAlert();
  //   alert("Copied to clipboard!");
}

function showCopyAlert() {
  const alertElement = document.createElement("div");
  alertElement.classList.add("alrt", "alrt-success");
  alertElement.textContent = "Copied to clipboard!";
  document.body.appendChild(alertElement);
  setTimeout(function () {
    alertElement.remove();
  }, 2000);
}
