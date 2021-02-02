function createElement(element,className,id,text) {

  const el = document.createElement(element);

  el.classList.add(className);
  el.id = id;
  el.textContent = text;

  return el;
};

module.exports.createElement = createElement;