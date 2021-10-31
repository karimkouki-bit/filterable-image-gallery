const filterContainer = document.querySelector(".gallery-filter"),

      galleyItems = document.querySelectorAll(".gallery-item");

filterContainer.addEventListener("click", (event) => {
    
    if(event.target.classList.contains("filter-item")){
        
       // desactivate existing active 'filter-item
       
        filterContainer.querySelector(".active").classList.remove("active");
        
        // activate new 'filter-item'
        
        event.target.classList.add("active");
        
        const filterValue = event.target.getAttribute("data-filter");
        
        galleyItems.forEach((item) =>{
            
            if(item.classList.contains(filterValue) || filterValue === 'all'){
                
                item.classList.remove("hide");
                
                item.classList.add("show")
                
            } else{
                
                item.classList.remove("show");
                
                item.classList.add("hide")
            }
        })
    }
})