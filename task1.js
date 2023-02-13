let clickedTexts = [];
    function showText(event) {
      const target = event.target;
      const text = target.textContent;

      clickedTexts.push(text);
      alert(clickedTexts.join("\n"));
    }

    document.addEventListener("DOMContentLoaded", function() {
      const boxes = document.querySelectorAll(".text-box");

      boxes.forEach(box => {
        box.addEventListener("click", showText);
      });
    });