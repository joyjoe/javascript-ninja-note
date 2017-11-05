function assert(value, desc) {
  var li = document.createElement("li");
  li.style.color = value ? "blue" : "red";
  li.className = value ? "" : "error";
  li.appendChild(document.createTextNode(desc));
  document.getElementById("result").appendChild(li);
}

export default {
  it: assert
};