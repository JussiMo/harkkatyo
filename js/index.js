function chuck() {
    fetch("https://api.chucknorris.io/jokes/random")
    .then(response => response.json())
    .then(data => {
      let h5 = document.createElement("h5");
      h5.textContent = data.value;
      document.body.appendChild(h5);
      let hr = document.createElement("hr");
      document.body.appendChild(hr);
    });
  }
  