    function ishaka(){


        let names = document.querySelector("#name").value;

        let address = document.querySelector("#Address").value;
    
        let email = document.querySelector('#email').value;
    
        let comment = document.querySelector('#comemnt').value;

        localStorage.setItem("name",names);
        localStorage.setItem("address",address);
        localStorage.setItem("email",email);
        localStorage.setItem("comment",comment);

    }


    let myname = localStorage.getItem('name');

    let myaddress = localStorage.getItem('address');

    let myEmail = localStorage.getItem('email');

    let myComm = localStorage.getItem('comment');



    let azizamdogo = document.getElementById('mynames');

    let punda = document.getElementById('myadd');

    let ema = document.getElementById('mye');

    let komenti = document.getElementById('comm');

    
    if(myname && myaddress){
        if(myEmail && myComm){
            azizamdogo.innerHTML = `Name: ${myname} `;  
            punda.innerHTML = `Address: ${myaddress}`;
            ema.innerHTML = ` Email: ${myEmail}`;
            komenti.innerHTML = `Comment: ${myComm}`;
            
        }
    }














