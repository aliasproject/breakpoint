function imgdefer() {
  let elements = document.querySelectorAll("[data-lazy]");

  elements.forEach(function(node) {
    let path = node.getAttribute("data-lazy");

    if (node.nodeName === "IMG") {
      node.src = path;
    } else {
      node.style.backgroundImage = "url(" + path + ")";
    }
  });
}

export default imgdefer;
