let observer = new MutationObserver((data) => {
  console.log(data);
});

observer.observe(elem, {
  childList: true,
  subtree: true,
  attributes: true,
  characterDataOldValue : true,
});

function deleteDiv() {
  document.getElementById("elem").children[0].remove();
}
function deleteDivGrouping() {
  document.getElementById("outer-div").children[0].remove();
}

function updateAttrDiv() {
  document.getElementById("elem").children[0].className = "big-head";
}
function updateDivVal() {
  document.getElementById("elem").children[0].textContent = "banna";
}
