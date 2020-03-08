$(document).ready(function() {
    $('#sidebarCollapse').on('click', function() {
        $('#sidebar').toggleClass('active');
        $(this).toggleClass('active');
    });
});



function addCat() {
    document.getElementById("category").style.display = "none";




}

function selecting() {
    console.log("select")
    document.getElementsByClassName("categoryDrop")[0].style.display = "inline";
    document.getElementById("addCategory").style.display = "inline";
    document.getElementById("selectCategory").style.display = "none";
    document.getElementById("addNew").style.display = "none";
    document.getElementsByClassName("categorytext")[0].style.display = "none";


}



//search in list fun

getCoockies()

function search() {
    document.getElementById("accordion").style.display = "none";

    var pro_list, user_list, order_list;
    pro_list = document.getElementById("products");
    var products = pro_list.getElementsByTagName("li");
    user_list = document.getElementById("user_list");
    var users = user_list.getElementsByTagName("li");
    order_list = document.getElementById("order_list");
    var orders = order_list.getElementsByTagName("li");


    searchingPlace(products);
    searchingPlace(users);
    searchingPlace(orders);
}

function searchingPlace(li) {
    var input, filter, h, i, txtValue;



    input = document.getElementById("Search_input");


    filter = input.value.toUpperCase();

    for (i = 0; i < li.length; i++) {

        h = li[i].getElementsByTagName("h5")[0];
        txtValue = h.innerText;


        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

//restiting search results

function resetsearch(li) {
    for (i = 0; i < li.length; i++) {
        li[i].style.display = "";
    }
}
Search_input.onfocusout = function() {
    var input = document.getElementById("Search_input");
    if (input.value.length < 1) {
        document.getElementById("accordion").style.display = "block";
    }
}

function getCoockies() {
    var token = document.cookie.split("=")[1];
    console.log(token)
    return token;
}