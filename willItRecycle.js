const GETurl = "https://will-it-recycle-api.herokuapp.com/";
const searchButton = document.getElementById("search");
searchButton.addEventListener("click", onSearch);
const card = document.querySelector("article");
const itemName = document.getElementById("itemName");
const itemDescription = document.getElementById("itemDescription");
const img = document.getElementById("itemImage");
const main = document.querySelector("main");

function createNode(element) {
    return document.createElement(element);
}

function append(parent, element) {
    return parent.appendChild(element);
}

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
            return recyclable.results.map((item) => { 
                let article = createNode('article'),
                    img = createNode('img'),
                    div = createNode('div'),
                    itemName = createNode('h3'),
                    description = createNode('p');

                img.src = item.Image;
                div.classList.add('info');
                itemName.innerHTML = item.item;
                description.innerHTML = item.Description;
                append(article, img); 
                append(article, div);
                append(div, itemName);
                append(div, description);
                append(main, article);

                return article;
                
            })
            
            
            
        })
}









