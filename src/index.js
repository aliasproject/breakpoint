function imgdefer() {
  let elements = document.querySelectorAll("[data-defer]");

  elements.forEach(function(node) {
    let path = node.getAttribute("data-defer");

    if (node.nodeName === "IMG") {
      node.src = path;
    } else {
      node.style.backgroundImage = "url(" + path + ")";
    }
  });
}

export default imgdefer;
