
function Send_Data() {
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var age = document.getElementById('age').value;

    var xhttp = new XMLHttpRequest() ;
    xhttp.open("POST", "get.php", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.onreadystatechange=function(){
        if(xhttp.readyState == 4 && xhttp.status==200){
            document.getElementById("response").innerHtml = xhttp.responseText;

        }
    }
    xhttp.send("fname="+fname+"&lname="+lname+"&age="+age);

}
