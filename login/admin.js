   var modal = document.getElementById('san_pham');
   var li1= document.getElementById("sanpham");
     var span = document.getElementsByClassName("close")[0];
   function click2(){
       modal.style.display = "block";
       if(modal1!=null || modal2!=null || modal3!=null || modal4!=null || modal6!=null || modal5!=null){
           modal1.style.display = "none";
       }
   }
   span.onclick = function() {
          modal.style.display = "none";
      }
   window.onclick = function(event) {
   if (event.target == modal) {
           modal.style.display = "none";
       }
   }
      
      li1.onclick = function() 
{

   var modal1 = document.getElementById('don_hang');
   var li2= document.getElementById("donhang");
     var span = document.getElementsByClassName("close")[0];
   function click1(){
       modal1.style.display = "block";
       if(modal!=null || modal2!=null || modal3!=null || modal4!=null || modal6!=null || modal5!=null){
           modal.style.display = "none";
       }
   }
      span.onclick = function() {
          modal.style.display = "none";
      }
   window.onclick = function(event) {
   if (event.target == modal1) {
           modal.style.display = "none";
       }
   }
      li2.onclick = function() {

      }
    }


    function myFunction() {
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        table = document.getElementById("myTable");
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
     
          td = tr[i].getElementsByTagName("td")[1];
     
          if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
              tr[i].style.display = "";
            } else {
              tr[i].style.display = "none";
            }
          }       
        }
      }