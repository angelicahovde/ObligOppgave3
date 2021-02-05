
showWishlistPage();


function showWishlistPage() {
    let showWishlist = `
                        <div id="wishbtn" onclick="showWishlist2021Page()">Wishlist 2021</div>
                        <div id="wishbtn2" onclick="showPorselainWishPage()">Porselain tableware</div>
                        <div id="mainWishlist"></div>
                        <div id="mainWishlistPic"></div>
                        <button id="editbtn">Edit wishlist</button>
                        <button id="viewbtn">Show wishlist</button>`;
    appHTML.innerHTML = navBar + showWishlist;
}

// function showWishlist2021Page() {
//     let showWishlist2021 = `
//                             <p style="text-align: center; font-size: 70px;">WISHLIST 2021</p>

//                             <div id="pic1"></div>

//                             <div id="pic2" class="popup" onclick="showPopup()">
//                             <span class="popuptext2" id="popupShow">
//                             <input type="text" placeholder="Skriv noe tekst her"></input><br>
//                             <input type="checkbox" id="multipleObj" name="multipleObj" value="yes">
//                             <label for="multipleObj"> Collection?</label><br>
//                             <label for="quantity">Have:</label>
//                             <input type="number" id="quantity" name="quantity" min="1" max="30"><br>
//                             <label for="quantity">Wish for:</label>
//                             <input type="number" id="quantity" name="quantity" min="1" max="30">
//                             <button id="save2">LAGRE</button></span></div>
                            
//                             <div id="pic3"class="popup3" onclick="showPopup()">
//                             <span class="popuptext3" id="popupShow"><input></input><br><button id="save2">LAGRE</button></span>hallloooo</div>`;
//     appHTML.innerHTML = navBar + showWishlist2021;
// }

// function showPopup() {
//     let popup = document.getElementById("popupShow");
//     popup.classList.toggle("show");
//   }

function showPorselainWishPage() {
    let showPorselainWish = `
                            <button onclick="addWishView()">Add wish</button>
                            `;
                            for (i=0;i < wishlist.length; i ++){
                                const wish = wishlist[i];
                                showPorselainWish += `<p>Name: ${wish.name}</p>
                                <p>Price: ${wish.price}</p>
                                <p>Wish: ${wish.wish}</p>
                                <p>Have: ${wish.have}</p>
                                <button onclick="deleteWish(${i})">Slett</button>
                                <button onclick="editWishView(${i})">Rediger</button>`
                            }

    appHTML.innerHTML = navBar + showPorselainWish;
} 

function addWishView() {
    let addWishHTML = `
        <input oninput="tempWish[0].name=this.value">Navn</input><br>
        <input oninput="tempWish[0].price=this.value">Pris</input><br>
        <input oninput="tempWish[0].wish=this.value">Ønsker antall</input><br>
        <input oninput="tempWish[0].have=this.value">Har antall</input><br>
        <button onclick="addWish()">Legg til</button>
    `;
    appHTML.innerHTML = navBar + addWishHTML;
}

function editWishView(index) {
    
    let editWishHTML = `
        <input oninput="tempWish[0].name=this.value" value="${wishlist[index].name}"></input>
        <input oninput="tempWish[0].price=this.value" value="${wishlist[index].price}"></input>
        <input oninput="tempWish[0].wish=this.value" value="${wishlist[index].wish}"></input>
        <input oninput="tempWish[0].have=this.value" value="${wishlist[index].have}"></input>
        <button onclick="editWish(${index})">Rediger</button>
    `;
    appHTML.innerHTML = navBar + editWishHTML;
}


// function newWishlistPage() {
//     let newWishlist = `<div class="new-wishlist"> 
//                         </div>
//                             <div id="pic-info">
//                             <h1>Overskrift</h1>
//                             <h2>Info:<p id="cut-info">Noe tekst her</p></h2>
//                             <h2>Bruksområder:<p id="cut-uses">Noe tekst her</p></h2>
//                             <img src=""/>
//                             </div>
//                         </div>`;
//     appHTML.innerHTML = navBar + newWishlist;
// }