

function filterProducts(){

    while(grid.childNodes.length > 1)
{
    grid.removeChild(grid.lastChild)
}
fetch('database/mydb.json')
            .then(res=>res.json())
            .then(json=>{
let filtervalue = filterinput.value.toUpperCase();
let filterData = match(json, "title", filtervalue)               
                  
for(const value of filterData) {
    addElement(grid,value)

}
            });
        }

const match = (values,filterby,input) =>{
    
    const p = Array.from(input).reduce((a, v, i) => `${a}[${input.substr(i)}]*?${v}`, '');
    const re = RegExp(p);
    return values.filter(v => v[filterby].toUpperCase().match(re))
    
}  

