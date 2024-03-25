"use strict";

const links = [...document.querySelectorAll(".has-tooltip")];

const tooltip = document.createElement("div");
tooltip.classList.add("tooltip");
tooltip.dataset.position = "top";

function setTooltipPosition(link, tooltip, dataPosition) {
  const { top, bottom, left, right } = link.getBoundingClientRect();
  switch(dataPosition) {
    case "top": {
      tooltip.style.top = `${window.scrollY + top - tooltip.offsetHeight}px`;
      tooltip.style.left = `${window.scrollX + left}px`;
      break;
    }
    case "bottom": {
      tooltip.style.top = `${window.scrollY + bottom}px`;
      tooltip.style.left = `${window.scrollX + left}px`;
      break;
    }
    case "left": {
      tooltip.style.top = `${window.scrollY + top - Math.abs(tooltip.offsetHeight - link.offsetHeight) / 2}px`; 
      tooltip.style.left = `${window.scrollX + left - tooltip.clientWidth}px`; 
      break;
    }
    case "right": {
      tooltip.style.top = `${window.scrollY + top - Math.abs(tooltip.offsetHeight - link.offsetHeight) / 2}px`;
      tooltip.style.left = `${window.scrollX + right}px`;
    }
  }
}

links.forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();

    if (link.nextElementSibling === tooltip) {
      tooltip.classList.toggle("tooltip_active");
      return;
    } 
    
    tooltip.innerText = link.title;
    tooltip.classList.add("tooltip_active");
    link.after(tooltip);
    setTooltipPosition(link, tooltip, tooltip.dataset.position);
  })
});
