document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("input");
  const button = document.getElementById("button");
  const listContainer = document.getElementById("lists-container");
  const img = document.getElementById("img");
  const encouragement = document.getElementById("encouragement");

  const saveState = () => {
    const listItems = [];
    listContainer.querySelectorAll(".checkbox").forEach((item) => {
      const checkbox = item.querySelector("input[type='checkbox']");
      listItems.push({
        text: item.childNodes[1].textContent,
        checked: checkbox.checked,
      });
    });
    localStorage.setItem("todoList", JSON.stringify(listItems));
  };

  const loadState = () => {
    const savedItems = JSON.parse(localStorage.getItem("todoList")) || [];
    savedItems.forEach((item) => {
      const li = document.createElement("li");
      li.className = "checkbox";
      li.innerHTML = `<input type="checkbox" ${
        item.checked ? "checked" : ""
      }/>${
        item.text
      }<button class="editButton"><i class="bi bi-pencil"></i></button><button class="deleteButton"><i class="bi bi-trash"></i></button>`;
      listContainer.appendChild(li);
    });
    removeImg();
    showProgress();
    UpdateProgress();
    deleteItems();
    editItems();
  };

  const addList = () => {
    const li = document.createElement("li");
    li.className = "checkbox";
    li.innerHTML = `<input type="checkbox"/>${input.value}<button class="editButton" id = "editButton";><i class="bi bi-pencil"></i></button><button  class="deleteButton" id = "deleteButton";><i class="bi bi-trash"></i></button>`;
    listContainer.appendChild(li);
    input.value = "";
    removeImg();
    showProgress();
    UpdateProgress();
    deleteItems();
    editItems();
    saveState();
  };

  button.addEventListener("click", (event) => {
    event.preventDefault();
    if (input.value.trim() !== "") {
      addList();
    }
  });

  // Add keydown event listener to the input
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      if (input.value.trim() !== "") {
        addList();
      }
    }
  });

  const removeImg = () => {
    img.style.display = listContainer.children.length > 0 ? "none" : "block";
  };

  const showProgress = () => {
    const progress = document.getElementById("progress__section");
    progress.style.display =
      listContainer.children.length > 0 ? "block" : "none";
  };

  const UpdateProgress = () => {
    const checkboxes = document.querySelectorAll(
      ".checkbox input[type='checkbox']"
    );
    const progressBarFill = document.getElementById("progress-bar-fill");
    const progressText = document.getElementById("progress-text");

    let progressCount = 0;
    checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        progressCount++;
      }
    });

    const progressWidth = (progressCount / checkboxes.length) * 100;
    progressBarFill.style.width = `${progressWidth}%`;
    progressText.textContent = `${progressCount}/${checkboxes.length}`;
    if (progressCount === checkboxes.length && checkboxes.length > 0) {
      encouragement.textContent = "Well Done🎉!!!";
      triggerConfetti();
    } else {
      encouragement.textContent = "Keep it up!!!";
    }
    saveState();
  };

  listContainer.addEventListener("change", (event) => {
    if (event.target.type === "checkbox") {
      UpdateProgress();
    }
  });

  const deleteItems = () => {
    const deleteButtons = document.querySelectorAll(".deleteButton");
    deleteButtons.forEach((button) => {
      button.addEventListener("click", (event) => {
        button.parentElement.remove();
        UpdateProgress();
        showProgress();
        removeImg();
        saveState();
      });
    });
  };

  const editItems = () => {
    const editButtons = document.querySelectorAll(".editButton");
    const checkboxes = document.querySelectorAll(
      ".checkbox input[type='checkbox']"
    );
    const Checkboxes = Array.from(checkboxes);
    editButtons.forEach((button) => {
      button.addEventListener("click", (event) => {
        if (!button.previousElementSibling.checked) {
          input.value = button.parentElement.textContent;
          button.parentElement.remove();
          saveState();
        }
        UpdateProgress();
        showProgress();
        removeImg();
      });
    });
  };

  const triggerConfetti = () => {
    console.log("confetti triggered");
    const duration = 5 * 100;
    const animationEnd = Date.now() + duration;

    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 50 * (timeLeft / duration);
    // Confetti from the bottom center
    confetti({
      particleCount: 700,
      angle: 90, // Fire upwards from the bottom
      spread: 55, // Spread of the confetti
      startVelocity: 30, // Slower initial speed
      gravity: 0.5, // Slower falling speed
      ticks: 100, // Longer-lasting particles
      origin: { x: 0.5, y: 1 }, // Bottom center of the screen
      colors: ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff"], // Bright colors
      shapes: ["circle", "square"], // Mix of shapes
      scalar: 1.1, // Slightly larger particles
    });
  };

  loadState();
});
