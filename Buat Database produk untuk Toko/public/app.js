//nambah todo list di empty div html / create element
const dataList = document.getElementById("catalog-produk-list");

function renderData(doc){
    // let li = document.createElement("LI");
    // let barang = document.createElement('span');
    // let barcode = document.createElement('span');
    // let harga = document.createElement('span');
    // let br = document.createElement('br');
    const liOne = document.getElementById("list-one-data");
    const liTwo = document.getElementById("list-two-data");
    const liThree = document.getElementById("list-three-data");

    dataList.setAttribute('data-id', doc.id);
    liOne.textContent = "Nama Barang : " + doc.data()['Nama Barang'];
    liTwo.textContent = "Nomor Barcode : " + doc.data()['Nomor Barcode'] ;
    liThree.textContent = "Harga : Rp." + doc.data().Harga ;
    liOne.classList.add("list-group-item");
    liTwo.classList.add("list-group-item");
    liThree.classList.add("list-group-item");

    // li.classList.add("list-group-item");
    // dataList.appendChild(li);
}



//real time event listener
const formSearch = document.getElementById("form-search");
formSearch.addEventListener("submit", e=>{
    e.preventDefault();
    const barcodeNums = formSearch['barcode-number'].value;
    formSearch.reset();
    //getting data
    db.collection("Produk").where('Nomor Barcode', '==' , barcodeNums).get().then((snapshot)=>{
        snapshot.docs.forEach(doc=>{
            renderData(doc);
            //console.log(doc.data()['Nama Barang'])
        })
    }).catch(error=>{
        console.log(error.message)
    })
    
})

// function messageERR(){
//     const liChecker = document.getElementById("list-one-data");
//     if(liChecker.classList.contains("list-group-item")){
//         const showErrorMessage = document.getElementById("dataShowError");
//         showErrorMessage.innerHTML = "Nomor Barcode tidak ada dalam database, silahkan cek Nomor Barcodenya lagi";
//     }

// }

// messageERR();