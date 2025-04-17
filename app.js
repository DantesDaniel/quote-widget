function getQuote(){
    fetch("quote.json")
    .then(res => res.json())
    .then(data => {
        const quoteObj = data[Math.floor(Math.random() * data.length)]
        document.getElementById("quote").textContent = quoteObj.quote
        document.getElementById("author").textContent = "- " + quoteObj.author
    })
    .catch(error => console.error("Error loading quotes:", error));
}

getQuote()