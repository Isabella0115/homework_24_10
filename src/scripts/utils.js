function isDOMElement(element) {
    return element instanceof Element;
  }
  
  function createElement(element, attributes = {}, children = []) {
    if (!element) {
      throw new Error('Զանգվածի տեսակը չի տրամադրվել');
    }
  
    const elem = document.createElement(element);
  
    if (!isDOMElement(elem)) {
      return undefined;
    }
  
    for (const [key, value] of Object.entries(attributes)) {
      elem.setAttribute(key, value); // Օգտագործել elem այստեղ
    }
  
    if (typeof children === 'string') {
      elem.innerText = children; // Օգտագործել elem այստեղ
    } else if (Array.isArray(children)) {
      children.forEach((child) => {
        if (child instanceof Element) {
          elem.appendChild(child); // Օգտագործել elem այստեղ
        }
      });
    } else if (children instanceof Element) {
      elem.appendChild(children); // Օգտագործել elem այստեղ
    }
  
    return elem;
  }
  
  function render(element, target) {
    if (!(element instanceof Element)) {
      throw new Error('Իրավիճակը սխալ է');
    }
  
    if (!(target instanceof Element)) {
      throw new Error('Երկրորդական էկրանի համար սխալ է');
    }
  
    target.appendChild(element);
    return target;
  }
  
  window.UI = {
    createElement,
    render
  };
  