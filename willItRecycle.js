const GETurl = "https://will-it-recycle-api.herokuapp.com/";
const searchButton = document.getElementById("search");
searchButton.addEventListener("click", onSearch);


console.log("hey mon");
console.log("itemSought (outside function): ", itemSought);


function onSearch(event) {
    event.preventDefault();
    console.log("onSearch function is running.");

    const itemSought = document.getElementById("searchbox").value;
    itemSought = itemSought.replace(/\s+/g, '-').toLowerCase();
    console.log("itemSought: ", itemSought);
    
    fetch(GETurl + itemSought)
        .then(response => response.json())
        .then(function(json) { 
            console.log("here's the response.json: ", json);
            const recyclable = json;

        })
}









