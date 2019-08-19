var siteName = document.getElementById("sn");
var siteUrl = document.getElementById("su");
var btn = document.getElementById("my_btn");
var bookmarkerContainer = [];
var global = 0;
var toggel = true;

bookmarkerContainer = JSON.parse(localStorage.getItem("bookmarkerContainer"));
console.log(bookmarkerContainer);
display();

my_btn.onclick = function()
{
    if (toggel == true)
        {
            submit();
        }
    else
        {
            update();
        }
    display();
}

// function to add data to the div

function submit()
{
    var bookmarker=
        {
            webSiteName : siteName.value,
            webSiteUrl : siteUrl.value
        }
    bookmarkerContainer.push(bookmarker);
    localStorage.setItem("bookmarkerContainer",JSON.stringify(bookmarkerContainer));
}

// function to display the div which the data

function display()
{
    var cols = "";
    for (var i = 0 ; i < bookmarkerContainer.length ; i++)
        {
            cols += `<div class = "col-md-12 Text-center">
                        <div class = "layer">
                            <h2> ` +bookmarkerContainer[i].webSiteName+ ` <h2>
                            <a href = "#"> ` +bookmarkerContainer[i].webSiteUrl+ ` </a>
                            <button onclick = "deletefun(`+i+`)" type = "button" class = "btn btn-danger"> Delete </button>
                            <button onclick = "retrieve(`+i+`)" type = "button" class = "btn btn-warning"> Update </button>
                        </div>
                     </div>`
        }
    document.getElementById("myData").innerHTML = cols;
}

// function to delete the data

function deletefun(myindex)
{
    bookmarkerContainer.splice(myindex , 1);
    display();
}

// function to retrieve the data

function retrieve(index)
{
    toggel = false;
    global = index;
    siteName.value = bookmarkerContainer[index].webSiteName;
    siteUrl.value = bookmarkerContainer[index].webSiteUrl;
    my_btn.innerHTML = ("Update");
}

// function to update the data

function update()
{
    bookmarkerContainer[global].webSiteName = siteName.value;
    bookmarkerContainer[global].webSiteUrl = siteUrl.value;
    my_btn.innerHTML = ("Submit");
}