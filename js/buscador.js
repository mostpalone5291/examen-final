// Aquí definimos las palabras claves para cuando el usuario desee buscar algo en específico
const suggestions = {
    gods: ["Odin", "Thor", "Loki", "Frigg", "Freya", "Balder", "Tyr", "Baldur"],
    creatures: ["Fenrir", "Jormungandr", "Sleipnir", "Nidhogg", "Draugr", "Valkyrie", "Ymir", "Mimir", "Surtur"],
    places: ["Asgard", "Midgard", "Niflheim", "Vanaheim", "Alfheim", "Helheim"],
    artifacts: ["Mjolnir", "Gungnir", "Fenrisulfr", "Yggdrasil", "Brisingamen", "Draupnir", "Vegvisir"]
};

// Obtenemos los elementos necesarios del DOM
const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");
const icon = searchWrapper.querySelector(".icon");
let linkTag = searchWrapper.querySelector("a");
let webLink;

// Evento para autocompletar y buscar en Google
inputBox.addEventListener('input', () => {    //Se añade un evento "input" al cuadro de búsqueda para detectar cambios en el texto ingresado por el usuario.
    let userData = inputBox.value;
    let emptyArray = [];
    if (userData) {
    icon.onclick = () => {
        webLink = `https://www.google.es/search?q=${userData}`;
        linkTag.setAttribute("href", webLink);
        linkTag.click();
    }

    Object.values(suggestions).forEach(category => {    //Cuando se detecta un cambio en el cuadro de búsqueda, se obtiene el texto ingresado por el usuario y se realiza una búsqueda de palabras clave relacionadas en el objeto "suggestions".
        category.forEach(data => {
          if (data.toLowerCase().startsWith(userData.toLowerCase())) {
            emptyArray.push(data);
          }
        });
    });
  
    emptyArray = emptyArray.map((data) => {
        return `<li>${data}</li>`;
    });
  
    searchWrapper.classList.add("active");
    showSuggestions(emptyArray);

    let allList = suggBox.querySelectorAll("li");   //Se generan sugerencias basadas en las palabras clave coincidentes y se muestran en la caja de sugerencias.
    allList.forEach(item => {
      item.addEventListener("click", () => {
        select(item);
      });
    });
  } else {
    searchWrapper.classList.remove("active");
  }
});
  
// Función para seleccionar una sugerencia y realizar la búsqueda
function select(element) {    //Cuando el usuario selecciona una sugerencia, se actualiza el texto en el cuadro de búsqueda y se realiza una búsqueda en Google con la palabra clave seleccionada.
    let selectData = element.textContent;
    inputBox.value = selectData;
    icon.onclick = () => {
      webLink = `https://www.google.com/search?q=${selectData}`;
      linkTag.setAttribute("href", webLink);
      linkTag.click();
    }
    searchWrapper.classList.remove("active");
}
  
// Función para mostrar las sugerencias en la lista desplegable
function showSuggestions(list) {
    let listData = '';
    const userInput = inputBox.value.trim();
  
    if (userInput) {
      const filteredList = list.filter((item) => item.trim() !== '');
      listData = filteredList.map((data) => `<li>${data}</li>`).join("");
      suggBox.style.display = 'block';
    } else {
      suggBox.style.display = 'none';
    }
  
    suggBox.innerHTML = listData;
}