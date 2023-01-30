const input = document.querySelector(".form-control");
const button = document.querySelector(".btn");
const box = document.querySelector(".box");

// const URL =
//   "https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=2fbafbe3eb671e5aaa277f9324a67ddf&units=metric";

// sys country main feels_like temp  name weather description

// const setQuery = (e) => {
//   if (e.keyCode == "13") button(search.value);
// };

button.addEventListener("click", (e) => {
  e.preventDefault();
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=2fbafbe3eb671e5aaa277f9324a67ddf&units=metric`
  )
    .then((res) => res.json())

    .then((data) => myFunction(data));
  e.target.closest("form").reset();
});

// input.addEventListener("keydown", (event) => {
//   if (event.key === "Enter") {
//     button.click();
//   }
// });

let myFunction = (data) => {
  console.log(data);
  const {
    sys: { country },
    name,
    main: { temp, feels_like },
    weather: { description },
  } = data;

  box.innerHTML = `
    <div class="card" style="width: 18rem">
      
      <div class="card-body">
        <h5 class="card-title">${country}</h5>
        
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">${name}</li>
        <li class="list-group-item">${new Date()}</li>
        <li class="list-group-item"><span>Temperature: </span>${temp}<span>&#8451</span></li>
        <li class="list-group-item"><span>Feels-Temperature: </span>${feels_like}<span>&#8451</span></li>
        <li id="desc" class="list-group-item">${
          data.weather[0].description
        }</li>
      </ul>
    </div>`;

  document.body.style.backgroundImage =
    "url('https://source.unsplash.com/1600x900/?city," + data.name + "')";
};

// const search = document.getElementById("search");
// search.addEventListener("keypress", setQuery);

//! destructing yapmadan
// let myFunction = (data) => {
//     console.log(data);
//     //   const {
//     //     sys: { country },
//     //     name,
//     //     main: { temp, feels_like },
//     //     weather: { description },
//     //   } = data;

//     box.innerHTML = `
//       <div class="card" style="width: 18rem">
//         <img src="..." class="card-img-top" alt="..." />
//         <div class="card-body">
//           <h5 class="card-title">${data.sys.country}</h5>

//         </div>
//         <ul class="list-group list-group-flush">
//           <li class="list-group-item">${data.name}</li>
//           <li class="list-group-item">${data.main.temp}</li>
//           <li class="list-group-item">${data.main.feels_like}</li>
//           <li class="list-group-item">${data.weather[0].description}</li>
//         </ul>
//       </div>`;
//   };
