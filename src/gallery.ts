document.addEventListener("DOMContentLoaded", async () => {
  try {
    let container = document.getElementById("gallery");
    let response = await fetch("/images");
    let pictures = await response.json();
    for (let picture of pictures) {
      let picturePath = `/myPictures/${picture}`;
      let htmlPicture = document.createElement("img");
      htmlPicture.src = picturePath;
      htmlPicture.classList.add("gallery-image");
      let figure = document.createElement("figure");
      let figcaption = document.createElement("figcaption");
      figcaption.textContent = picture.slice(0,-4);
      if (!container) {
        throw new Error("No gallery found");
      }
      container.appendChild(figure);
      figure.appendChild(htmlPicture);
      figure.appendChild(figcaption);
    }
  } catch (err) {
    console.error(err);
  }
});