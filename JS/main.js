
    var Arr = [] ;
    if(localStorage.getItem("Bookmarks") != null){
        Arr = JSON.parse(localStorage.getItem("Bookmarks")) ;
    }
    var Container = "" ;
    var webSiteName = document.getElementById("Name") ;
    var webSiteUrl = document.getElementById("URL") ;
    var layer = document.getElementById("hin") ;
    var data = document.getElementById("data") ;
    var show = document.getElementById("Display") ;
    var dontShow = document.getElementById("Nondisplay") ;







function Add() {
    if(validationName() && validationURL() ){
        var Bookmark ={
            WebsiteName : "" ,
            SiteURL : "",
        }
        Bookmark.WebsiteName = webSiteName.value ;
        Bookmark.SiteURL= webSiteUrl.value ;
        Arr.push(Bookmark) ;
        localStorage.setItem("Bookmarks" , JSON.stringify(Arr))   
        voidinput();
        webSiteName.classList.remove("is-valid") ;
        webSiteUrl.classList.remove("is-valid") ;
        document.getElementById("done").classList.add("d-block") ;
        document.getElementById("done").classList.remove("d-none") ;
    }
    else{
        if(!validationName()) {
            webSiteName.classList.add("is-invalid") ;
        }
        if(!validationURL()){
            webSiteUrl.classList.add("is-invalid") ;
        }
        layer.classList.remove("d-none") ;
        layer.classList.add("d-block") ;
    }
    // nondisplay();
   
    
}

function display(){
    Container = "" ;
    for(var i = 0 ; i < Arr.length ; i++ ){
        Container+=`
        <tr>
        <td>${i+1}</td>
        <td>${Arr[i].WebsiteName}</td>
        <td><a href="${Arr[i].SiteURL}" target="_blank"><button class="btn btn-outline-success" ><i class="fa-solid fa-eye"></i> visit </button></a></td>
        <td> <button class="btn btn-outline-danger" onclick="Delete(${i})">  <i class="fa-solid fa-trash-can"></i> Delete </button></td>        
        <td> <button class="btn btn-outline-primary" onclick="update(${i})"> <i class="fa-solid fa-pen-to-square"></i> Update </button></td>        
        </tr>    
        `
    }
    document.getElementById("body").innerHTML=Container ;
    data.classList.remove("d-none")
    data.classList.add("d-block")
    show.classList.add("d-none")
    show.classList.remove("d-block")
    dontShow.classList.remove("d-none")
    dontShow.classList.add("d-block")
}

function nondisplay(){
    document.getElementById("done").classList.add("d-none") ;
    document.getElementById("done").classList.remove("d-block") ;


    data.classList.remove("d-block")
    data.classList.add("d-none")

    show.classList.remove("d-none")
    show.classList.add("d-block")
    dontShow.classList.remove("d-block")
    dontShow.classList.add("d-none")
}

function voidinput(){
    webSiteName.value = "";
    webSiteUrl.value ="";
}

function Delete(x){
Arr.splice(x , 1) ;
localStorage.setItem("Bookmarks" , JSON.stringify(Arr))
display();
voidinput();
}

function update(x){
    if(validationName() && validationURL()){
        Arr[x].WebsiteName= webSiteName.value ;
        Arr[x].SiteURL=  webSiteUrl.value ;
        localStorage.setItem("Bookmarks" , JSON.stringify(Arr))
        display();
        voidinput();
        webSiteName.classList.remove("is-valid") ;
        webSiteUrl.classList.remove("is-valid") ;
    }
    else{
        if(!validationName()) {
            webSiteName.classList.add("is-invalid") ;
        }
        if(!validationURL()){
            webSiteUrl.classList.add("is-invalid") ;
        }
        layer.classList.remove("d-none") ;
        layer.classList.add("d-block") ;
    }
   

}
var regaexName = /^[\w]{3,}$/ ;
var regaexUrl = /^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/ ;

function validationName(){
    if(regaexName.test(webSiteName.value)){
        webSiteName.classList.add("is-valid") ;
        webSiteName.classList.remove("is-invalid") ;
        return true ;
    }
    else{
        webSiteName.classList.add("is-invalid") ;
        webSiteName.classList.remove("is-valid") ;
        return  false ;
    }
}

function validationURL(){
    if(regaexUrl.test(webSiteUrl.value)){
        webSiteUrl.classList.add("is-valid") ;
        webSiteUrl.classList.remove("is-invalid") ;
        return true ;
    }
    else{
        webSiteUrl.classList.add("is-invalid") ;
        webSiteUrl.classList.remove("is-valid") ;
        return  false ;
    }

    // if(URL.canParse(webSiteUrl.value)){
    //     webSiteUrl.classList.add("is-valid") ;
    //     webSiteUrl.classList.remove("is-invalid") ;
    //     return true ;
    // }
    // else{
    //     webSiteUrl.classList.add("is-invalid") ;
    //     webSiteUrl.classList.remove("is-valid") ;
    //     return  false ;
    // }
}

function hint(){
    layer.classList.remove("d-block") ;
    layer.classList.add("d-none") ;
     if(validationName() && !validationURL() ) {
            webSiteName.classList.add("is-valid") ;
            webSiteName.classList.remove("is-invalid") ;
            webSiteUrl.classList.remove("is-invalid") ;
            webSiteUrl.classList.remove("is-valid") ;
            webSiteUrl.value ="" ;
        }
        else if (!validationName() && validationURL()){
            webSiteUrl.classList.add("is-valid") ;
            webSiteUrl.classList.remove("is-invalid") ;
            webSiteName.classList.remove("is-invalid") ;
            webSiteName.classList.remove("is-valid") ;
            webSiteName.value ="" ;
        }
        else{
            webSiteUrl.classList.remove("is-invalid") ;
            webSiteUrl.classList.remove("is-valid") ;
            webSiteName.classList.remove("is-invalid") ;
            webSiteName.classList.remove("is-valid") ;
            voidinput();
        }
        display();
}
