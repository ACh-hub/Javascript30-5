function openClosePanel(e){ 
        e.target.classList.toggle("open");
}

function toggleActive(e) {
    console.log(e.propertyName);
    if (e.propertyName.includes('flex')) {
      this.classList.toggle('open-active');
    }
}

const panels = document.querySelectorAll(".panel");

panels.forEach(panel=>panel.addEventListener("click", openClosePanel));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));

