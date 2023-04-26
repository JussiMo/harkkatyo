function chuck() {
    fetch("https://api.chucknorris.io/jokes/random")
    .then(response => response.json())
    .then(data => {
      let h5 = document.createElement("h5");
      h5.textContent = data.value;
      document.getElementById("chuckie").appendChild(h5);
      let hr = document.createElement("hr");
      document.getElementById("chuckie").appendChild(hr);
    });
  }
  