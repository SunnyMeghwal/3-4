/*var abc = "hello world"
var abc = ["hello world", "hello ji",2,3,6,8,9,1,];
abc[0] 
p = document.getElementsByTagName('p')
p[0].className = 'hello'

for(i = 1; i < 100; i++)
{
    if(i % 5 == 0)
    {
        document.write('<h2>' + i + '</h2>' + ' is even <br/>')
    }
    else
    {
        document.write(i + ' is odd <br/>')
    }

}
*/
/*
var person_id = [1,2,3,4,5,6,7,8,9,10]
var person_name = ['Sanjay','Shubham','Ritik','Rohan','Praveen','Jeetu','Prithvi','Ram','Shyam','Ritik ki gf'];
var person_desig = ['Emp','Mngr']

document.write('<table><tr><td>Person id</td><td>Person Name</td><td>Desig</td></tr>');
for(i=0; i < person_id.length; i++){
    if(!(i % 2 == 0))
    {
        document.write('<tr><td class="red">'+ person_id[i] +'</td><td class="red">'+ person_name[i] +'</td>' +'<td class="red">'+ person_desig[0] +'</td></tr>');
    }
   else {
        document.write('<tr><td>'+ person_id[i] +'</td><td>'+ person_name[i] +'</td><td >'+ person_desig[1] +'</td></tr>');
    }

}

document.write('</table>')

var nav_itm = ['home','about','contact','gallery'];  
var nav = document.getElementById('nav');  

var ul = document.createElement('ul');
nav.appendChild(ul);
for(i=0; i < nav_itm.length;i++)
{
    
     li =  document.createElement('li')
     a =  document.createElement('a')
     li.appendChild(a)
     a.innerHTML = nav_itm[i];
     a.setAttribute('href',nav_itm[i]+'.html')
     li.setAttribute('class','navItem')
     ul.appendChild(li);
}
*/

var MOUNTAINS = [
    {"name":"Mount Everest","height":8848,"country":"Nepal"},
    {"name":"Mount Rushmore","height":18,"country":"USA"}
  ];	
  
  
  function buildTable(data) {
      var table = document.createElement("table");
      table.className="gridtable";
      var thead = document.createElement("thead");
      var tbody = document.createElement("tbody");
      var headRow = document.createElement("tr");
     /*  ["Name","Height","Country"].forEach(function(el) {
        var th=document.createElement("th");
        th.appendChild(document.createTextNode(el));
        headRow.appendChild(th);
      }); */
      thead.appendChild(headRow);
      table.appendChild(thead); 
      data.forEach(function(el) {
        var tr = document.createElement("tr");
        for (var o in el) {  
          var td = document.createElement("td");
          td.appendChild(document.createTextNode(el[o]))
          tr.appendChild(td);
        }
        tbody.appendChild(tr);  
      });
      table.appendChild(tbody);             
      return table;
  }
  window.onload=function() {
    document.getElementById("content").appendChild(buildTable(MOUNTAINS));
  }
