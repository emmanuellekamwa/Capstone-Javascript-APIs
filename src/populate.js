import check from "./images";

export default (arr) => {
    const toGet = [11,12,564,98,308,436];
    const parent = document.getElementById('main-section');
    parent.innerHTML = '';
    toGet.forEach((element) => {
      const li = document.createElement('li');
      li.classList.add('item');
      li.innerHTML = `${arr[element].symbol}`;
      const img = document.createElement('img');
      img.setAttribute('src',check(arr[element].symbol));
      const buttonRes = document.createElement('button');
      const buttonCom = document.createElement('button');
      buttonCom.setAttribute('onclick',`showCom(${element})`);
      buttonCom.innerText="Comments";
      buttonRes.setAttribute('onclick',`showRes(${element})`);
      buttonRes.innerText="Reservations";
      li.append(img);
      li.append(buttonCom);
      li.append(buttonRes);
      parent.appendChild(li);
    });
  };