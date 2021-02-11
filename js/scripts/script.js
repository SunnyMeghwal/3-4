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

var person_id = [1,2,3,4,5,6,7,8,9,10]
var person_name = ['Sanjay','Shubham','Ritik','Rohan','Praveen','Jeetu','Prithvi','Ram','Shyam','Ritik ki gf']

document.write('<table><tr><td>Person id</td><td>Person Name</td></tr>');
for(i=0; i < person_id.length; i++){
    if(!(i % 2 == 0))
    {
        document.write('<tr><td class="red">'+ person_id[i] +'</td><td class="red">'+ person_name[i] +'</td></tr>');
    }
   else {
        document.write('<tr><td>'+ person_id[i] +'</td><td>'+ person_name[i] +'</td></tr>');
    }

}

document.write('</table>')
