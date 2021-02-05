const appHTML = document.getElementById("app");

const wishlist = [
    {category: "ExtremePlatinum-RoyalPorcelain", name: "Terrin", price: 4199, wish: 2, have: 1, piclink: ""},
    {category: "ExtremePlatinum-RoyalPorcelain", name: "Dyptellerken", price: 399, wish: 6, have: 3, piclink: ""},
    {category: "ExtremePlatinum-RoyalPorcelain", name: "Tellerken", price: 399, wish: 6, have: 2, piclink: "dyptellerken.png"},
]
const tempWish = [
    {
        name:"",
        price:"",
        wish:"",
        have:"",
        piclink:"",
    }

];


let navBar = `<div class="header">
<div class="fa fa-ellipsis-v dropdown" style="float:right;color:black;font-size:50px;">
        <div class="dropdown-content dropdown-right">
            <a href="#">Account</a>
            <a href="#">Access</a>
            <a href="#" onclick="newWishlistPage()">Add new wishlist</a>
            <a href="#">Delete account</a>
            <a href="#">Log out</a>
        </div>
</div>
<div class="dropdown">
    <button class="dropbtn">MENU</button>
        <div class="dropdown-content">
            <a href="#" onclick="showWishlistPage()">My Wishlist's</a>
            <a href="#" onclick="showWishlist2021Page()">Wishlist 2021</a>
            <a href="#" onclick="showPorselainWishPage()">Porselain tableware</a>
            <a href="#">Wishlist 300</a>
        </div> 
</div>
</div>`;