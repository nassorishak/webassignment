function test(){
    var nam = document.getElementById("name").value;
    var add =  document.getElementById("address").value;
    var em =  document.getElementById("email").value;
    var com = document.getElementById("comment")
    

    var name = localStorage.setItem("nam",name);
    var addr = localStorage.setItem("add",add);
    var ema = localStorage.setItem("em",em);
    var comm = localStorage.setItem("com",com);
}