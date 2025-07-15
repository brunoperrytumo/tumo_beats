window.onload = function() {
   

    // Variaveis de elementos
    let title = document.querySelector("#title");
    let previousButton = document.querySelector("#previous-button");
   





    // Funções
    function changeTitle(value) {
        title.innerText = value;
    }

    previousButton.onclick = function() {
        console.log("previous button clicked");
    }


    changeTitle("Bruno");
    console.log(title);
}