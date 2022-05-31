
        
        
       var selectvalue1 = document.getElementById('dropdown');
      console.log(selectvalue1);
       
       var add = document.getElementById('btn');
       add.addEventListener('click', properties);
       function properties() {
           var value = selectvalue1.value;
        //    var wind=document.getElementById('dr1');
        //    console.log(wind);
        //    var a=document.createTextNode('my');
        //    wind.innerText=wind;
        //    selectvalue1.value=wind;
       }
    
        //   addwind.dr(door);
           
    
       
    
       
       //table
       var tables = '<table border="1">' +
           '<tr>' +
           '<th>Accessory</th>' +
           '<th>Unit price</th>' +
           '<th>Qty</th>' +
           '<th>Price</th>' +
           '<th>Action</th>' +
           '</tr>' +
       
           '<tr>' +
           '<th ">Frame</th>' +
           '<td><input type="number" id="unitprice"></td>' +
           '<td><input type="number" id="qty"></td>' +
           '<td><input type="number" id="total"></td>' +
           '<td><button id="reset">x</button></td>' +
           '</tr>' +
       
           '<tr>' +
           '<div id="dr1"><th >Door</th></div>' +
           '<td><input type="number" id="unitprice2"></td>' +
           '<td><input type="number" id="qty2"></td>' +
           '<td><input type="number" id="total2"></td>' +
           '<td><button id="reset2">x</button></td>' +
           '</tr>' +
       
           '<tr>' +
           '<th>Stopper</th>' +
           '<td><input type="number" id="unitprice3"></td>' +
           '<td><input type="number" id="qty3"></td>' +
           '<td><input type="number" id="total3"></td>' +
           '<td><button id="reset3">x</button></td>' +
           '</tr>' +
       
           '<tr>' +
           '<th>Screw</th>' +
           '<td><input type="number" id="unitprice4"></td>' +
           '<td><input type="number" id="qty4"></td>' +
           '<td><input type="number" id="total4"></td>' +
           '<td><button id="reset4">x</button><button id="addrow">+</button></td>' +
           '</tr>' +
           '<th colspan="3">Total</td>'+
           '<td><input type="number" id="alltotal">'
           +'</td><td><button id="grand">=</td>'+
           '</table>'
       
       
       
       add.addEventListener('click', merge)
       function merge() {
           document.getElementById('table').innerHTML = tables;
       
       //add new row
       var plusbutton = document.getElementById('addrow');
       plusbutton.addEventListener('click', newrow);
       function newrow() {
           var addrow = '<table>' +
               '<tr>' +
               '<th> <input type="text"></th>' +
               '<td><input type="number"></td>' +
               '<td><input type="number"></td>' +
               '<td><input type="number"></td>' +
               '<td><button>x</button></td>' +
               '</tr>' +
               '</table>'
           var emptyrow = document.getElementById('table');
           var emptyrow1 = emptyrow.insertRow(5);
           emptyrow1.innerHTML = addrow;
       }
       
       //add values
       var addvalue=document.getElementById('total');
       addvalue.addEventListener('mouseenter',totalvalue);
       
       function totalvalue(){
       var unit=document.getElementById('unitprice').value;
       var quantity=document.getElementById('qty').value;
       //console.log(unit);
       var total=(unit * quantity);
       addvalue.value=total;
       }
       
       var addvalue2=document.getElementById('total2');
       addvalue2.addEventListener('mouseenter',totalvalue2);
       
       function totalvalue2(){
       var unit2=document.getElementById('unitprice2').value;
       var quantity2=document.getElementById('qty2').value;
       //console.log(input1);
       var total2=(unit2 * quantity2);
       addvalue2.value=total2;
       }
       
       
       var addvalue3=document.getElementById('total3');
       addvalue3.addEventListener('mouseenter',totalvalue3);
       
       function totalvalue3(){
       var unit3=document.getElementById('unitprice3').value;
       var quantity3=document.getElementById('qty3').value;
       //console.log(input1);
       var total3=(unit3 * quantity3);
       addvalue3.value=total3;
       }
       
       var addvalue4=document.getElementById('total4');
       addvalue4.addEventListener('mouseenter',totalvalue4);
       
       function totalvalue4(){
       var unit4=document.getElementById('unitprice4').value;
       var quantity4=document.getElementById('qty4').value;
       //console.log(input1);
       var total4=(unit4 * quantity4);
       addvalue4.value=total4;
       }
       
       
       //refresh values
       var clearbutton=document.getElementById('reset');
       clearbutton.addEventListener('click',reset);
       function reset(){
               var unit=document.getElementById('unitprice');
            var quantity=document.getElementById('qty');
            var total=document.getElementById('total');
            var zero=0;
            quantity.value=zero;
            unit.value=zero;
            total.value=zero;
       }
       
       var clearbutton2=document.getElementById('reset2');
       clearbutton2.addEventListener('click',reset2);
       function reset2(){
        var unit2=document.getElementById('unitprice2');
        var quantity2=document.getElementById('qty2');
        var total2=document.getElementById('total2');
        var zero2=0;
        quantity2.value=zero2;
        unit2.value=zero2;
        total2.value=zero2;
       }
       
       var clearbutton3=document.getElementById('reset3');
       clearbutton3.addEventListener('click',reset3);
       function reset3(){
        var unit3=document.getElementById('unitprice3');
        var quantity3=document.getElementById('qty3');
        var total3=document.getElementById('total3');
        var zero3=0;
        quantity3.value=zero3;
        unit3.value=zero3;
        total3.value=zero3;
       }
       
       var clearbutton4=document.getElementById('reset4');
       clearbutton4.addEventListener('click',reset4);
       function reset4(){
        var unit4=document.getElementById('unitprice4');
        var quantity4=document.getElementById('qty4');
        var total4=document.getElementById('total4');
        var zero4=0;
        quantity4.value=zero4;
        unit4.value=zero4;
        total4.value=zero4;
       }


      var wholetotal=document.getElementById('alltotal');
wholetotal.addEventListener('mouseenter',grandtotal)

function grandtotal(){
    var currenttotals=parseInt(total.value)+parseInt(total2.value)+parseInt(total3.value)+parseInt(total4.value);
    console.log(currenttotals);
    wholetotal.value=currenttotals;

}

    }


