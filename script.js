function repeatSvgInfo(iconClass) {
  const col1 = document.createElement("div");
  col1.className = "col-4 col-md-2 col-lg-1";

  const col2 = document.createElement("div");
  col2.className = "col-4 col-md-2 col-lg-3 svg-info";

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
  codeInput.setAttribute("id", `cdn--input-${index}`);
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
  "shakil-lineui-book",
  "shakil-lineui-book-1",
  "shakil-lineui-bookmark",
  "shakil-lineui-bookmark-2",
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
