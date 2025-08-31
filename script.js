//SideNavbar
var sidenav=document.getElementById("sidenav")
var closenav=document.getElementById("closenav")
var menuicon=document.getElementById("menuicon")

menuicon.addEventListener("click",function(){
	sidenav.style.right=0
})

closenav.addEventListener("click",function(){
	sidenav.style.right="-50%"
})

//Product Search Functionality
var search=document.getElementById("search")
var container=document.querySelector(".container")
var productList=container.querySelectorAll("div")	//select element inside the container

search.addEventListener("keyup",function(){
	var enteredValue=event.target.value.toUpperCase()	//select input typed value
	for(count=0; count<productList.length; count=count+1)
	{
		var productName=productList[count].querySelector("p").textContent
		if(productName.toUpperCase().indexOf(enteredValue)<0)
		{
			productList[count].style.display="none"
		}
		else
		{
			productList[count].style.display="block"
		}
	}
})