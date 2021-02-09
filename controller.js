function addWish() {
   let nameinput = modell.tempWish[0].name;
   let priceinput = modell.tempWish[0].price;
   let wishinput = modell.tempWish[0].wish;
   let haveinput = modell.tempWish[0].have;
   if (nameinput == "" || priceinput == "") {
       console.log("error");
       return;
   }

   modell.wishlist.push(
        {name:nameinput,
        price:priceinput,
        wish:wishinput,
        have:haveinput,
        }
    )
    clearTemp();
    showPorselainWishPage();
}

function deleteWish(slett) {
    modell.wishlist.splice(slett, 1);
    showPorselainWishPage();
}

function editWish(index) {
    const wish = modell.wishlist[index];
    wish.name = modell.tempWish[0].name == "" ? wish.name : modell.tempWish[0].name;
    wish.price = modell.tempWish[0].price == "" ? wish.price : modell.tempWish[0].price;
    wish.wish = modell.tempWish[0].wish == "" ? wish.wish : modell.tempWish[0].wish;
    wish.have = modell.tempWish[0].have == "" ? wish.have : modell.tempWish[0].have;
    clearTemp();
    showPorselainWishPage();
}

function clearTemp() {
    modell.tempWish[0].name = "";
    modell.tempWish[0].price = "";
    modell.tempWish[0].wish = "";
    modell.tempWish[0].have = "";
}