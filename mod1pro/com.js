const button = document.getElementById("NewUrl");
const url = 'https://api.covidtracking.com/v1/us/current.json'
const userInputValue = document.getElementById("userInput").value
const newUrl = 'https://api.covidtracking.com/v1/us/current.json'

/*displayPolicyResolution = (resolutionDescription, elementId) => {
    let ele = (document.getElementById(
      elementId
    ).innerHTML += `<p> ${resolutionDescription} </p> `);
  };*/


// Fetching(url)
fetch(newUrl)
.then((res)=>res.json())
.then((data) =>  {console.log(data);

})
.catch((error) => { console.log(error)
} )
/*userInputValue.addEventListener("click", () => {
    fetch(newUrl);
    console.log(userInputValue);
  });*/
  /*fetch(newUrl)
  .then((res)=>res.json())
  .then((innerHTML)=>{console.log(innerHTML)})
  button.addEventListener("click", () => {
    fetch(newUrl);
    console.log(newUrl);
  });*/
  fetchTheFetch = (x) => {
      fetch(x)
      .then((res) => res.json())
      .then((data) => { console.log(data)
        button.innerHTML
    })
  }


