export const initLocalStorageCurry = (localStorage) => (imageList) => {
  if (localStorage.getItem('imageList') === null) {
    localStorage.setItem('imageList', JSON.stringify(imageList));
  }
}

export const initLocalStorage = initLocalStorageCurry(window.localStorage);

export const addCommentCurry = (localStorage) => (imageId, author, text) => {
  let imageList = JSON.parse(localStorage.getItem('imageList'));
  imageList[imageId].comments.push(
    {
      author,
      text,
    }
  );

  localStorage.setItem('imageList', JSON.stringify(imageList));
}

export const addComment = addCommentCurry(window.localStorage);

export const addLikeCurry = (localStorage) => (imageId) => {
  let imageList = JSON.parse(localStorage.getItem('imageList'));
  imageList[imageId].likes += 1;
  localStorage.setItem('imageList', JSON.stringify(imageList));
}

export const addLike = addLikeCurry(window.localStorage);

export const getAllImagesCurry = (localStorage) => () => {
  return JSON.parse(localStorage.getItem('imageList'));
}

export const getAllImages = getAllImagesCurry(window.localStorage);
