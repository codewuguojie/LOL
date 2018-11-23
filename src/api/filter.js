let cutoutStr = value => {
    let str = '';
    if (value.length > 10) {
        str = value.substring(0,10)+'...';
    }else{
        str = value;
    }
    return str;
}

let cutoutNum = value => {
    let str = '';
    console.log(typeof value);
    if(!value){
        return ''
    }
    str = value.substring(0,3)+'****'+value.substring(7,11);
    return str;
}
let formateDate = value => {
    var moment = require('moment');
    if(!value){
        return ''
    }
    return moment(value).format('YYYY-MM-DD');
}
let toThousands = (value) =>{
    var num_str = value.toFixed(2)
    var sum  = num_str.split(".")[0].toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')+'.'+num_str.split(".")[1]
    return sum
}
let cutoutIdNum = value => {
    let str = '';
    console.log(typeof value);
    if(!value){
        return ''
    }
    str = value.substring(0,3)+'**********'+value.substring(14,18);
    return str;
}
let cutoutBankNum = value => {
    let str = '';
    console.log(typeof value);
    if(!value){
        return ''
    }
    str = value.substring(0,4)+'***********'+value.substring(value.length-3,value.length);
    return str;
}
export { cutoutStr,cutoutNum,formateDate ,toThousands,cutoutIdNum,cutoutBankNum}
