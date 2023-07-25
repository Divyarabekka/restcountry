var res = fetch("https://restcountries.com/v2/all");
res.then((data)=>data.json()).then((data1)=>{
    for(var i=0; i<data1.length; i++){
        console.log(data1[i].name);
        var div = document.createElement("div");
        div.innerHTML= `<div class="row row-cols-1 row-cols-md-2">
        <div class="col mb-4">
        <div class="card" style="width: 18rem;">
        <img src="${data1[i].flag}" class="card-img-top" alt="..." width="500px" height="200px">
        <div class="card-body">
          <h5 class="card-title"> Name: ${data1[i].name}</h5>
          <h6 class="card-subtitle mb-2 text-muted"> Region: ${data1[i].region}</h6>
          <p class="card-text"> Subregion: ${data1[i].subregion}</p>
        </div></div></div>
      </div> `          
        document.body.append(div);
        
       

    }
});
      
