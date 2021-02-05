function addWish() {
   let nameinput = tempWish[0].name;
   let priceinput = tempWish[0].price;
   let wishinput = tempWish[0].wish;
   let haveinput = tempWish[0].have;
   if (nameinput == "" || priceinput == "") {
       console.log("error");
       return;
   }

   wishlist.push(
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
    wishlist.splice(slett, 1);
    showPorselainWishPage();
}

function editWish(index) {
    const wish = wishlist[index];
    wish.name = tempWish[0].name == "" ? wish.name : tempWish[0].name;
    wish.price = tempWish[0].price == "" ? wish.price : tempWish[0].price;
    wish.wish = tempWish[0].wish == "" ? wish.wish : tempWish[0].wish;
    wish.have = tempWish[0].have == "" ? wish.have : tempWish[0].have;
    clearTemp();
    showPorselainWishPage();
}

function clearTemp() {
    tempWish[0].name = "";
    tempWish[0].price = "";
    tempWish[0].wish = "";
    tempWish[0].have = "";
}