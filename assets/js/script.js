// window.onload = function() {
//     var d = document;
//     var q = "querySelector";
//     var iframe = d[q]("iframe");
//     // We target all textarea
//     var area = document.querySelectorAll('textarea');
  
//     // We bind on each textarea change event
//     for (var i = area.length - 1; i >= 0; i--) {
//       if (area[i].addEventListener) {
//         area[i].addEventListener('input', function() {
//           // event handling code for sane browsers
//           iframe.srcdoc = area[0].value + '<style>' +
//                   area[1].value + '</style>' + '<script>' +
//                   area[2].value + '<\/script>';
//         }, false);
//       } else if (area[i].attachEvent) {
//         area[i].attachEvent('onpropertychange', function() {
//           // IE-specific event handling code
//           iframe.srcdoc = area[0].value + '<style>' +
//                   area[1].value + '</style>' + '<script>' +
//                   area[2].value + '<\/script>';
//         });
//       }
//     }
//   }




                    
 
    var area = document.querySelector('textarea');  //Dans le document html je selectionne l'element textarea
    var para = document.getElementById("para");  //Dans le document html je selectionne l'element p
    var btnp = document.getElementById("btnp");
    var btni = document.getElementById("btni");
    var btnb = document.getElementById ("btnb");
    
    
    var compteur = document.getElementById('compteur');
    var maxLength = 100;
    compteur.innerHTML=maxLength;
    var progressBar = document.getElementById ('progressBar');
    // progressBar.setAttribute('max',maxLength);

        area.addEventListener('input', function()
        {
            para.innerHTML = area.value;
        });

    
    btnp.addEventListener('click', () =>
    {
        area.value += '<p></p>'
    });
    btni.addEventListener('click', () =>
    {
        area.value += '<i></i>'
    });
    btnb.addEventListener('click', () =>
    {
        area.value += '<b></b>'
    });



    area.addEventListener('input', event => {
    var backcount = area.value.length; 
    var leftCharLength = maxLength - para.textContent.length;
    
    compteur.innerText = leftCharLength;
    if(leftCharLength == 0){
        area.setAttribute('maxlength', backcount)
    }else{
        area.setAttribute('maxlength','')
    }
        


        var valueLength = para.textContent.length;
        var progress = valueLength/maxLength*100;
        let bar = progressBar.style;
        progressBar.setAttribute('value', valueLength);
        bar.width = ((valueLength/maxLength)**100 ) + "%"
       
        if (progress <= 25 ) {

            bar.setProperty ('--c','green') ;  
        }else if (progress >= 25 && progress < 50 ) {

            bar.setProperty ('--c','gold');

        }else if(progress >=50 && progress < 80){
        
            bar.setProperty('--c', 'orange');
        }
        
        else {bar.setProperty('--c','red');}
    
    });

    let loading = document.getElementById('img');

    area.onfocus = () => {
        loading.style.visibility ="visible";
    }

    area.onblur = () => {
        loading.style.visibility ="hidden";
    }
   





    
    // addEventListener('click', () => {
    //     area.innerHTML =+ '<p></p>';
    // });
    




    //Avant IE 9, utiliser attachEvent() plutôt que la méthode standard ex:
    // if(area.addEventListener)
    // {
    //     area.addEventListener('input', function()
    //     {
    //         iframe.srcdoc = area.value + '<style>' + '</style> ';
    //     }, false);

    // }
    // else if (area.attachEvent)
    // {
    //     area.attachEvent('onpropertychange', function()
    //     {
    //         iframe.srcdoc = area.value;
    //     });
    // }



    // test 3 window
 
    // window.onload = function() 
    // {      
    //     var d = document;
    //     var q = "querySelector";
    //     var iframe = d[q]("iframe");               
    //     var area = document.querySelectorAll('textarea');  //Dans le document je selectionne  l'element textarea
    //     for (var i = area.length - 1; i >= 0 ; i--)
    //     {
    //        if(area[i].addEventListener)
    //         {
    //             area[i].addEventListener('input',function()
    //             {
    //                 iframe.srcdoc = area[0].value + area[1].value + area[2].value ;
    //             });
    //         }
    //         else {}
    
    //     }
// }