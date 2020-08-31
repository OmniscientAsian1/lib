import {DomList,getElement,FitOneLine} from '../../lib/koiosf_util.mjs';

let useraddresses;
let tokenamount;
var GlobalAddressList = new DomList("transfertokensentry");

onLoad();

async function onLoad() {
    var addresslist=getElement("addresstextboxtext");    
    addresslist.contentEditable="true"; // make div editable
    addresslist.style.whiteSpace ="pre"; 
    if(addresslist.innerHTML == "Insert here...")
        addresslist.addEventListener("click", addresslist.innerHTML(""));

    var tokenamountlist=getElement("tokenamounttextboxtext");    
    tokenamountlist.contentEditable="true"; // make div editable
    tokenamountlist.style.whiteSpace ="pre"; 
    if(tokenamountlist.innerHTML == "Insert here...")
        tokenamountlist.addEventListener("click", tokenamountlist.innerHTML(""));

    getElement("confirmbutton").addEventListener('animatedclick',AddElementsToList)   
}

async function AddAddressesToList() {
    var addresslist=getElement("addresstextboxtext").innerHTML; 
    useraddresses = addresslist.split(',');
    var tokenlist=getElement("tokenamounttextboxtext").innerHTML; 
    tokenamount = tokenlist.split(',');
    ShowAddresses(useraddresses,tokenamount);
}

async function ShowAddresses(addresses,tokenamount) {
    for (var i=0;i<addresses.length;i++) {
        var target = GlobalAddressList.AddListItem();
        target.getElementsByClassName("transferuseraddresstext")[0].innerHTML = addresses[i];
        target.getElementsByClassName("transfertokencounttext")[0].innerHTML = tokenamount[i];
        var tokenamountlist=getElement("transfertokencounttext");    
        tokenamountlist.contentEditable="true"; // make div editable
        tokenamountlist.style.whiteSpace ="pre";
    }
}
