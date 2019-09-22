export function initLocalStorage(imageList) {
  if (localStorage.getItem('imageList') === null) {
    localStorage.setItem('imageList', JSON.stringify(imageList));
  }
}

export function addComment(imageId, author, text) {
  let imageList = JSON.parse(localStorage.getItem('imageList'));
  imageList[imageId].comments.push(
    {
      author,
      text,
    }
  );

  localStorage.setItem('imageList', JSON.stringify(imageList));
}

export function addLike(imageId) {
  let imageList = JSON.parse(localStorage.getItem('imageList'));
  imageList[imageId].likes += 1;
  localStorage.setItem('imageList', JSON.stringify(imageList));
}

export function getAllImages() {
  return JSON.parse(localStorage.getItem('imageList'));
}
