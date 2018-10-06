const GETurl = "https://will-it-recycle-api.herokuapp.com/";
const searchButton = document.getElementById("search");
searchButton.addEventListener("click", onSearch);
const card = document.querySelector("article");
const itemName = document.getElementById("itemName");
const itemDescription = document.getElementById("itemDescription");
const img = document.getElementById("itemImage");
const yesOrNo = document.getElementById("yesOrNo");



console.log("hey mon");
console.log("itemSought (outside function): ", itemSought);
console.log("card is: ", card);


function onSearch(event) {
    event.preventDefault();
    console.log("onSearch function is running.");

    let itemSought = document.getElementById("searchbox").value;
    itemSought = itemSought.replace(/\s+/g, '-').toLowerCase();
    console.log("itemSought: ", itemSought);
    
    fetch(GETurl + itemSought)
        .then(response => response.json())
        .then(function(json) { 
            console.log("here's the response.json: ", json);
            const recyclable = json;
            console.log("recyclable.results is: ", recyclable.results);
            recyclable.results.map((item) => { 
                let li = createNode('li'),
                    img = createNode('img'),
                    itemName = createNode('p'),
                    p = createNode('p'),
                    description = createNode('p');

                img.src = item.Image;
                itemName.innerHTML = item.Item;
                p.innerHTML = item.Y/M/N;
                description.innerHTML = item.Description;
                append(li, img); 
                append(li, itemName);
                append(li, p);
                append(li, description);
                append( , li);
                
            })
            
            
            
        })
}









