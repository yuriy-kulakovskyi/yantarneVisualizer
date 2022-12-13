const author = document.querySelector("#author");

fetch("https://complex.in.ua/status-json.xsl?mount=/yantarne")
.then(response => {
  return response.json();
})
.then(data => {
  if (data.icestats.source !== undefined) {
    setInterval(() => {
      fetch("https://complex.in.ua/status-json.xsl?mount=/yantarne")
      .then(response => {return response.json()})
      .then(newData => {
        author.innerHTML = newData.icestats.source.title.substring(newData.icestats.source.title.indexOf("-") + 1, 0) + `<span class='wrap__home__main__song-info__name__author' id='songTitle'>${newData.icestats.source.title.substring(newData.icestats.source.title.indexOf("-") + 1)}</span>`;
      })
    }, 4000);
  } else {
    author.innerHTML = 'Перерва';
  }
})