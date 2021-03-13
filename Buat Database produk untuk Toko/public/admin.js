//first on user page, we have to check first autentikasi usernya, udah
// masuk ato nda lewat sign in auth
auth.onAuthStateChanged(user=>{ //whay is onAuthStateChanged
    if(user){
        console.log("User logged in");
    }else{
        alert("Login session already ended, login to continue");
        location = "./index.html";
    }
})

//logout dulus
function logout(){
    auth.signOut();
}

//nambah object list di empty div html
const form = document.getElementById("produk-form");
const date = new Date();
const time = date.getTime();
let counting = time;
form.addEventListener("submit", e=>{
    e.preventDefault();
    const barang = form['barang'].value  //ngambil value dari inputnya
    const barcode = form['barcode'].value  //ngambil value dari inputnya
    const harga = form['harga'].value  //ngambil value dari inputnya

    form.reset();
    auth.onAuthStateChanged(user=>{
        if(user){
            db.collection("Produk").doc(barang).set({     
                'Nama Barang' : barang,
                'Nomor Barcode' : barcode,
                'Harga' : harga
            },{ merge: true}).then(()=>{
                console.log("Todo had been added")
            }).catch(err=>{
                console.log(err.message);
            })
        }
    })
})

//real time event listener

