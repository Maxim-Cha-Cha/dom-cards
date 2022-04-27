"use strict";

const cardsContainer = document.getElementById("root");

const cards = responseData.map((userDataObj) => generateUserCard(userDataObj));

cardsContainer.append(...cards);

function generateUserCard(userObj) {
  const fullName =
    `${userObj.firstName} ${userObj.lastName}`.trim() ||
    CARD_CONSTANTS.userName;
 
  // const cardArticle = createElement("article", {
  //   classNames: ["cardContainer"],
  // });

  const imgWrapper = createUserCardImageWrapper(userObj, fullName);
  const cardName = createElement("h2", { classNames: ["cardName"] }, fullName);

  const cardDescription = createElement("p", {
    classNames: ["cardDescription"],
  });
  cardDescription.textContent =
    userObj.description || CARD_CONSTANTS.cardDescription;
    const cardIcons = link(userObj.contacts);
    const cardDiv = createElement('div', [], ...cardIcons);
  
    const cardArticle = createElement('article', {
      classNames: ['cardContainer'],
    }, imgWrapper, cardName, cardDescription, cardDiv);
    const card = createElement('li', {
      classNames: ['userCardWrapper'],
    }, cardArticle)
    
      cardArticle.append(imgWrapper, cardName, cardDescription,cardDiv);
      
      card.append(cardArticle);

  return card;

  
}

function createUserCardImageWrapper(userObj, fullName) {
  const userImgElem = createElement("img", {
    classNames: ["cardImg"],
    attributes: {
      src: userObj.profilePicture,
      alt: fullName,
      "data-id": userObj.id,
    },
  });

  userImgElem.addEventListener("error", errorHandler);
  userImgElem.addEventListener("load", loadHandler);

  const initialsElem = createElement(
    "div",
    { classNames: ["initials"] },
    getInitials(fullName)
  );

  const imgWrapperElem = createElement(
    "div",
    {
      classNames: ["cardImgWrapper"],
      attributes: { id: `imgWrapper${userObj.id}` },
    },
    initialsElem
  );

  return imgWrapperElem;
}

function errorHandler({ target }) {
  target.remove();
}

function loadHandler({
  target,
  target: {
    dataset: { id },
  },
}) {
  document.getElementById(`imgWrapper${id}`).append(target);
}

function link(contacts){

  return contacts.map((url) =>{
    const cardUrl = new URL(url)
   if(SUPPORTED_SOCIAL_NETWORKS.has(cardUrl.hostname)){
    return createElement('a', {
      classNames: [...SUPPORTED_SOCIAL_NETWORKS.get(cardUrl.hostname), 'iconsStyle','fa-2x'],
      attributes: {
        href: url,
      }
    });
  }
})
}