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

  // Alert Message
  const alertMessage = document.createElement("div");
  alertMessage.className = "ico-alert";
  alertMessage.innerHTML = "Tag Copied";

  // Create the HTML code snippet input element
  const codeInput = document.createElement("input");
  codeInput.className = "size--md cdn-style-link cdn--input";
  codeInput.type = "text";
  codeInput.readOnly = true;
  codeInput.value = `<i class="lineui ${iconClass}"></i>`;

  // Create the clipboard icon element
  const clipboardIcon = document.createElement("i");
  clipboardIcon.className = "fi fi-sr-duplicate";
  clipboardIcon.onclick = function () {
    showAlert();
  };
  // clipboardIcon.onclick = function () {
  //   copyToClipboard(codeInput.value);
  // };

  // Create the HTML code snippet container element
  const codeBox = document.createElement("div");
  codeBox.className = "svg-box tag-box";
  codeBox.appendChild(alertMessage);
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
  "lineui-clipboard",
  "lineui-clipboard-import",
  "lineui-clipboard-text",
  "lineui-clipboard-tick",
  "lineui-clock",
  "lineui-clock-1",
  "lineui-close-circle",
  "lineui-close-square",
  "lineui-cloud",
  "lineui-cloud-add",
  "lineui-cloud-change",
  "lineui-cloud-connection",
  "lineui-cloud-cross",
  "lineui-cloud-drizzle",
  "lineui-cloud-fog",
  "lineui-cloud-lightning",
  "lineui-cloud-minus",
  "lineui-cloud-notif",
  "lineui-cloud-plus",
  "lineui-cloud-remove",
  "lineui-cloud-snow",
  "lineui-cloud-sunny",
  "lineui-code",
  "lineui-code-1",
  "lineui-code-circle",
  "lineui-coffee",
  "lineui-coin",
  "lineui-coin-1",
  "lineui-colorfilter",
  "lineui-colors-square",
  "lineui-color-swatch",
  "lineui-command",
  "lineui-command-square",
  "lineui-component-1",
  "lineui-computing",
  "lineui-convert",
  "lineui-convert-3d-cube",
  "lineui-convertshape",
  "lineui-convertshape-2",
  "lineui-copy",
  "lineui-copyright",
  "lineui-copy-success",
  "lineui-courthouse",
  "lineui-cpu-charge",
  "lineui-crop",
  "lineui-crown",
  "lineui-crown-1",
  "lineui-cup",
  "lineui-danger",
  "lineui-data",
  "lineui-data-2",
  "lineui-cpu",
  "lineui-cpu-setting",
  "lineui-creative-commons",
  "lineui-chrome",
  "lineui-clipboard-close",
  "lineui-building",
  "lineui-bus",
  "lineui-buy-crypto",
  "lineui-cake",
  "lineui-calculator",
  "lineui-calendar",
  "lineui-calendar-1",
  "lineui-calendar-2",
  "lineui-calendar-add",
  "lineui-calendar-circle",
  "lineui-calendar-edit",
  "lineui-calendar-remove",
  "lineui-calendar-search",
  "lineui-calendar-tick",
  "lineui-call",
  "lineui-call-add",
  "lineui-call-calling",
  "lineui-call-incoming",
  "lineui-call-minus",
  "lineui-call-outgoing",
  "lineui-call-received",
  "lineui-call-remove",
  "lineui-call-slash",
  "lineui-camera",
  "lineui-camera-slash",
  "lineui-candle",
  "lineui-candle-2",
  "lineui-car",
  "lineui-card",
  "lineui-card-add",
  "lineui-card-coin",
  "lineui-card-edit",
  "lineui-card-pos",
  "lineui-card-receive",
  "lineui-card-remove",
  "lineui-card-remove-1",
  "lineui-cards",
  "lineui-card-send",
  "lineui-card-slash",
  "lineui-card-tick",
  "lineui-card-tick-1",
  "lineui-category",
  "lineui-category-2",
  "lineui-cd",
  "lineui-chart",
  "lineui-chart-1",
  "lineui-chart-2",
  "lineui-chart-3",
  "lineui-chart-21",
  "lineui-chart-square",
  "lineui-chart-success",
  "lineui-check",
  "lineui-clipboard-export",
  "lineui-blend",
  "lineui-bluetooth",
  "lineui-bluetooth-2",
  "lineui-bluetooth-circle",
  "lineui-bluetooth-rectangle",
  "lineui-blur",
  "lineui-book",
  "lineui-book-1",
  "lineui-bookmark",
  "lineui-bookmark-2",
  "lineui-book-saved",
  "lineui-book-square",
  "lineui-box",
  "lineui-box-1",
  "lineui-box-2",
  "lineui-box-add",
  "lineui-box-remove",
  "lineui-box-search",
  "lineui-box-tick",
  "lineui-box-time",
  "lineui-briefcase",
  "lineui-brifecase-cross",
  "lineui-brifecase-tick",
  "lineui-brifecase-timer",
  "lineui-broom",
  "lineui-brush",
  "lineui-brush-1",
  "lineui-brush-2",
  "lineui-brush-3",
  "lineui-bubble",
  "lineui-bucket-circle",
  "lineui-bucket-square",
  "lineui-building",
  "lineui-building-3",
  "lineui-building-4",
  "lineui-buildings",
  "lineui-buildings-2",
  "lineui-bag-1",
  "lineui-bag-timer",
  "lineui-bank",
  "lineui-barcode",
  "lineui-battery-3full",
  "lineui-battery-charging",
  "lineui-battery-disable",
  "lineui-battery-empty",
  "lineui-battery-empty-1",
  "lineui-battery-full",
  "lineui-bezier",
  "lineui-bill",
  "lineui-bitcoin-card",
  "lineui-bitcoin-convert",
  "lineui-bitcoin-refresh",
  "lineui-blend-2",
  "lineui-arrow",
  "lineui-arrow-square",
  "lineui-arrow-square-right",
  "lineui-arrow-square-up",
  "lineui-arrow-swap-horizontal",
  "lineui-arrow-up",
  "lineui-arrow-up-1",
  "lineui-arrow-up-2",
  "lineui-arrow-up-3",
  "lineui-attach-circle",
  "lineui-attach-square",
  "lineui-audio-square",
  "lineui-autobrightness",
  "lineui-award",
  "lineui-back-square",
  "lineui-backward",
  "lineui-backward-5-seconds",
  "lineui-backward-10-seconds",
  "lineui-backward-15-seconds",
  "lineui-backward-item",
  "lineui-bag",
  "lineui-bag-cross",
  "lineui-bag-cross-1",
  "lineui-bag-happy",
  "lineui-bag-tick",
  "lineui-bag-tick-2",
  "lineui-archive",
  "lineui-arrange-circle",
  "lineui-arrange-circle-2",
  "lineui-arrange-square",
  "lineui-arrange-square-2",
  "lineui-arrow-2",
  "lineui-arrow-3",
  "lineui-arrow-bottom",
  "lineui-arrow-circle-down",
  "lineui-arrow-circle-left",
  "lineui-arrow-circle-right",
  "lineui-arrow-down",
  "lineui-arrow-down-1",
  "lineui-arrow-down-2",
  "lineui-arrow-left",
  "lineui-arrow-left-1",
  "lineui-arrow-left-2",
  "lineui-arrow-left-3",
  "lineui-arrow-right",
  "lineui-arrow-right-1",
  "lineui-arrow-right-2",
  "lineui-arrow-right-3",
  "lineui-arrow-square-down",
  "lineui-arrow-square-left",
  "lineui-add",
  "lineui-additem",
  "lineui-add-square",
  "lineui-airdrop",
  "lineui-airplane",
  "lineui-airplane-square",
  "lineui-airpod",
  "lineui-airpods",
  "lineui-alarm",
  "lineui-align-bottom",
  "lineui-align-horizontally",
  "lineui-align-left",
  "lineui-align-right",
  "lineui-align-vertically",
  "lineui-aquarius",
  "lineui-archive-1",
  "lineui-archive-add",
  "lineui-archive-book",
  "lineui-archive-minus",
  "lineui-archive-slash",
  "lineui-archive-tick",
  "lineui-3dcube",
  "lineui-3d-cube-scan",
  "lineui-3d-rotate",
  "lineui-3d-square",
  "lineui-3square",
  "lineui-24-support",
  "lineui-activity",
  "lineui-add-circle",
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
  alert("Copied to clipboard!");
}

function copyImportCdn() {
  const inputElement = document.getElementById("import-cdn-input");
  inputElement.select();
  document.execCommand("copy");
  showCopyAlert();
  alert("Copied to clipboard!");
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
