function search(){
    let searchbar = document.querySelector('.search-input').value.toUpperCase();
    let productlist = document.querySelector('.productlist');
    let product = document.querySelectorAll('.product');
    let productname = document.getElementsByTagName('h3')

    for (let i = 0; i<productname.length; i++){
        if (productname[i].innerHTML.toUpperCase().indexOf(searchbar)>= 0){
            product[i].style.display = "";
        } else {
            product[i].style.display = "none";
        }
    }
}