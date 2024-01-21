import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector(".gallery");

function createGallery(galleryItems) {
  let htmlString = "";
  galleryItems.forEach(({ preview, original, description }) => {
    htmlString += `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>`;
  });
  return htmlString;
}
galleryList.insertAdjacentHTML("afterbegin", createGallery(galleryItems));

//

galleryList.addEventListener("click", openModal);
function openModal(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(`
        <div class = "modal">
            <img src= "${e.target.dataset.source}" alt= "${e.target.alt}"></div>
    `);
  instance.show();

  //close with esc key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      const openModal = document.querySelector(".basicLightbox");
      if (openModal) {
        instance.close();
        document.removeEventListener("keydown", instance);
      }
    }
  });
}
