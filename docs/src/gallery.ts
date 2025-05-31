document.addEventListener("DOMContentLoaded", async () => {
  const container = document.getElementById("images");
  console.log("Loading Gallery!");
  async function loadGallery() {
    try {
      if (container) {
        const response = await fetch("/images");
        const pictures = await response.json();
        container.innerHTML = "";
        for (const picture of pictures) {
          const picturePath = `/myPictures/${picture}`;
          const htmlPicture = document.createElement("img");
          htmlPicture.src = picturePath;
          htmlPicture.classList.add("gallery-image");
          const figure = document.createElement("figure");
          const figcaption = document.createElement("figcaption");
          figcaption.textContent = picture.slice(0, -4);
          container.appendChild(figure);
          figure.appendChild(htmlPicture);
          figure.appendChild(figcaption);
        }
      }
    } catch (err) {
      console.error(err);
    }
  }
  await loadGallery();
  console.log("Gallery Loaded");
  document.getElementById("images")?.addEventListener("click", (event) => {
    const resizeBtn = document.getElementById("resize");
    const imageText = document.getElementById("imageText");
    let target = event.target as HTMLInputElement;
    if (
      target.classList.contains("gallery-image") &&
      resizeBtn !== null &&
      imageText !== null &&
      target.nextSibling !== null
    ) {
      (resizeBtn as HTMLButtonElement).value = target.src;
      imageText.textContent = target.nextSibling?.textContent;
    }
  });

  document.querySelectorAll(".btn").forEach((button) => {
    console.log("Refreshing Gallery for button");
    button.addEventListener("click", () => {
      setTimeout(loadGallery, 300);
    });
  });
});
