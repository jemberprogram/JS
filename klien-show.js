

  function showklien(e){
    var t,n,r,i;
    var s="";
    for(var o=0;o<e["feed"]["entry"]["length"];o++){
      t=e["feed"]["entry"][o];
      if(o==e["feed"]["entry"]["length"]){break}t=e["feed"]["entry"][o];n=t["title"]["$t"];
      for(var u=0;u<t["link"]["length"];u++){if(t["link"][u]["rel"]=="alternate"){r=t["link"][u]["href"];break}}for(var a=0;a<t["link"]["length"];a++){if(t["link"][a]["rel"]=="replies"&&t["link"][a]["type"]=="text/html"){var f=t["link"][a]["title"]["split"](" ")[0];break}}
  
      if("content"in t){
          document.getElementById('temphtml').innerHTML=t["content"]["$t"];;
          var deskripsi=document.getElementById('post-deskripsi'),
              judul=document.getElementById('post-judul'),
              gambar=document.getElementById('post-gambar'),
              harga=document.getElementById('post-harga'),
              download=document.getElementById('post-download');
              
          if(judul!=null){judul=judul.innerHTML; }else{judul='Tidak ada judul'}
          if(gambar!=null){gambar=gambar.src;}else{gambar="http://2.bp.blogspot.com/-uitX7ROPtTU/Tyv-G4NA_uI/AAAAAAAAFBY/NcWLPVnYEnU/s1600/no+image.jpg"}
          if(harga!=null){harga=harga.innerText;}else{harga='Rp 750.000'}
          if(download!=null){download=download.href;}else{download='#'}
          if(deskripsi!=null){deskripsi=deskripsi.innerText;}else{deskripsi='Tidak ada deskripsi'}
        }
        s+="<td><div class='kol-3' >"
        s+="<img class='cs-gambar'  width='400' height=300' src='" + gambar +"' alt='" + judul + " - klien jember program'/>";
        s+="<span class='cs-judul' >" + judul + "</span>";
        s+="</div></td>";
    }
    document["getElementById"]("klien-result")["innerHTML"]=s ;
    document.getElementById('temphtml').innerHTML='';
  }
  document["write"]('<div id="temphtml" style="display:none"></div>');
  
 
