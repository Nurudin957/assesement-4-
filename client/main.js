const { default: axios } = require("axios");

const complimentBtn = document.getElementById("complimentButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)

///////////////////////////////////////////////////////////////////////////////////////////////////////

const fortuneBtn = document.getElementById("fortuneButton")

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

fortuneBtn.addEventListener('click', getFortune)

////////////////////////////////////////////////////////////////////////////////////////////////////////


const healthBtn = document.getElementById("healthButton")

const getHealth = () => {
    axios.get("http://localhost:4000/api/health/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

healthBtn.addEventListener('click', getHealth)

//////////////////////////////////////////////////////////////////////////////////////////////////////////

// Reference to Lab #4
// function buttonClicked(){
//     console.log('Button clicked')
//     axios.get("https://swapi.dev/api/planets/2/").then(res =>
//     {
//         for (let i=0; i<res.data.residents.length; i++){
//             axios.get(res.data.residents[i]).then(res=>{
//                 const h2 = document.createElement('h2')
//                 console.log(res.data.name)
//                 h2.textContent = res.data.name
//                 document.body.appendChild(h2)
//             })
//         }
//     }
//     )
// }

// resBtn.addEventListener('click', buttonClicked)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }