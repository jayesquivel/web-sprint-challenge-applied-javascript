const Header = (title, date, temp) => {
  const header = document.createElement('div');
  const dateSpan = document.createElement('span');
  const titleH1 = document.createElement('h1');
  const tempSpan = document.createElement('span');
  header.classList.add('header');
  dateSpan.classList.add('date');
  tempSpan.classList.add('temp');
  dateSpan.textContent = date;
  titleH1.textContent = title;
  tempSpan.textContent = temp;
  header.appendChild(dateSpan);
  header.appendChild(titleH1);
  header.appendChild(tempSpan);
  return header;
}

const headerAppender = (selector) => {
  const createHeader = Header('Lambda Times','February 12, 2021','25°');
  const select = document.querySelector(selector);
  select.appendChild(createHeader);
}

export { Header, headerAppender }