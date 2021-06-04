var menu_list_array=["Veg Margherita Pizza",
                     "Chicken Tandori Pizza",
                     "Veg Supreme Pizza",
                     "Paneer Tikka Pizza",
                     "Deluxe Veggie Pizza",
                     "Veg Extravaganza Pizza"];
console.log(menu_list_array);                             

function getmenu(){
var htmldata;
htmldata="<ol class='menulist'>"
menu_list_array.sort();
for(var i=0;i<menu_list_array.length;i++){
    htmldata=htmldata+'<li>'+menu_list_array[1]+'</li>'
}
htmldata=htmldata+"</ol>"
document.getElementById("display_name").innerHTML=htmldata;
}

function add_item(){
var htmldata;
var item=document.getElementById("add_item").value;
menu_list_array.sort();
htmldata="<section class='cards'>"
for(var i=0; i<menu_list_array.length;i++>){
htmldata=htmldata+'<div class="card">'
+'<img src="images/pizzaImg.png"/>'
+menu_list_array[i]+'</div>'
}
htmldata=htmldata+"</section>"
document.getElementById("display_addedmenu").innerHTML=htmldata;
}

function add_top(){
var item=document.getElementById("add_item").value;
menu_list_arra7.pus(item);
add_item();
}