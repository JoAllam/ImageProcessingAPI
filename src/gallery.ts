document.addEventListener("DOMContentLoaded", async () => {
    let container = document.getElementById("gallery");
    async function loadGallery() {
      try {
        let response = await fetch("/images");
        let pictures = await response.json();
        container.innerHTML = "";
        for (let picture of pictures) {
          let picturePath = `/myPictures/${picture}`;
          let htmlPicture = document.createElement("img");
          htmlPicture.src = picturePath;
          htmlPicture.classList.add("gallery-image");
          let figure = document.createElement("figure");
          let figcaption = document.createElement("figcaption");
          figcaption.textContent = picture.slice(0, -4);
          if (!container) {
            throw new Error("No gallery found");
          }
          container.appendChild(figure);
          figure.appendChild(htmlPicture);
          figure.appendChild(figcaption);
        }
      }
      catch (err) {
        console.error(err);
      }
    }
    await loadGallery();

    document.querySelectorAll('.btn').forEach((button) => {
      button.addEventListener('click', setTimeout(loadGallery, 300));
    })
});

