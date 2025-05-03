"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
document.addEventListener("DOMContentLoaded", () => __awaiter(void 0, void 0, void 0, function* () {
    let container = document.getElementById("gallery");
    function loadGallery() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let response = yield fetch("/images");
                let pictures = yield response.json();
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
        });
    }
    yield loadGallery();
    document.querySelectorAll('.btn').forEach((button) => {
        button.addEventListener('click', () => {
            setTimeout(loadGallery, 300);
        });
    });
}));
