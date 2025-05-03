document.addEventListener("DOMContentLoaded", async () => {
    let container = document.getElementById("gallery");
    if (!container) {
      throw new Error("No gallery found");
    }
    console.log("Loading Gallery!")
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
    console.log("Gallery Loaded")

    document.getElementById('gallery').addEventListener('click', (event) => {
      let resizeBtn = document.getElementById('resize');
      if(event.target.classList.contains('gallery-image')) {
        resizeBtn.value = event.target.src;
      }
    }); 

    document.querySelectorAll('.btn').forEach((button) => {
      console.log("Refreshing Gallery for button")
      button.addEventListener('click', setTimeout(loadGallery, 300));
    })

    
});