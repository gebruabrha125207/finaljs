const value = ["brussels","cairo", "casablanca", "cengzh", "los angeles", "osaka"];

const { title } = require("process");

const match = (value, filterby,input) =>{
    const p = Array.from(input).reduce{(a,v,i) => "${a}[${input.substr(i)}]*?
    const re = RegExp(p);

    console.log(p);
    return value.filter(v =>v.toUpperCase().match(re))
}
console.log(match(value, "c"));