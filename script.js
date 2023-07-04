function repeatSvgInfo(iconClass) {
  const col1 = document.createElement("div");
  col1.className = "col-4 col-md-2 col-lg-1";

  const col2 = document.createElement("div");
  col2.className = "col-4 col-md-2 col-lg-3 svg-info";

  const svgBoxIcon = document.createElement("i");
  svgBoxIcon.className = iconClass;

  const svgBox = document.createElement("div");
  svgBox.className = "svg-box";
  svgBox.onclick = function () {
    toggleSvgInfo(this);
  };
  svgBox.appendChild(svgBoxIcon);

  const codeInput = document.createElement("input");
  codeInput.className = "size--md cdn-style-link cdn--input";
  codeInput.type = "text";
  codeInput.readOnly = true;
  codeInput.value = `<i class="${iconClass}"></i>`;

  const clipboardIcon = document.createElement("i");
  clipboardIcon.className = `bi bi-clipboard-fill`;

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

function toggleSvgInfo(element) {
  const svgInfo = element.nextElementSibling;
  svgInfo.style.display = svgInfo.style.display === "none" ? "block" : "none";
}

function copyToClipboard(value) {
  const tempInput = document.createElement("input");
  tempInput.value = value;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
}

// Call the repeatSvgInfo function to add multiple SVG icons and code snippets
const svgInfoArray = [
  "shakil-lineui-book",
  "shakil-lineui-book-1",
  "shakil-lineui-bookmark",
  "shakil-lineui-bookmark-2",
];

svgInfoArray.forEach((iconClass, index) => {
  repeatSvgInfo(iconClass, index);
});

function toggleSvgInfo(element) {
  var svgInfo = element.parentNode.nextElementSibling;
  svgInfo.classList.toggle("visible");
}
