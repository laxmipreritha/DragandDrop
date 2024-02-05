let lists=document.getElementsByClassName("list");
let rb=document.getElementById("right");
let lb=document.getElementById("left");

for(list of lists)
{
    list.addEventListener("dragstart",function(e)
    {

        let selected=e.target;
        rb.addEventListener("dragover",function(e){
            e.preventDefault();
        });
        rb.addEventListener("drop",function(e){
            rb.appendChild(selected);
            selected=null;
        });

        lb.addEventListener("dragover",function(e){
            e.preventDefault();
        });
        lb.addEventListener("drop",function(e){
            lb.appendChild(selected);
            selected=null;
        });

    }
    )
  
}