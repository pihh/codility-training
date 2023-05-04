/**
 * @param {number} num
 * @return {string}
 */
var n1000 = {
    1: 'M',
    2: 'MM',
    3: 'MMM'
}
var n100 = {
    1: 'C',
    2: 'CC',
    3: "CCC",
    4: "CD",
    5: "D",
    6: "DC",
    7: "DCC",
    8: "DCCC",
    9: "CM",
    0:""
    
}
var n10 = {
    1: 'X',
    2: 'XX',
    3: "XXX",
    4: "XL",
    5: "L",
    6: "LX",
    7: "LXX",
    8: "LXXX",
    9: "XC",
    0:""
    
}
var n = {
    1: 'I',
    2: 'II',
    3: "III",
    4: "IV",
    5: "V",
    6: "VI",
    7: "VII",
    8: "VIII",
    9: "IX",
    0:""
}
var intToRoman = function(num) {
    let a = String(num).split('')
    let str = ""
    a =a.reverse()
    
    if(a[3] !== undefined) str+= n1000[a[3]]
    if(a[2] !== undefined) str+= n100[a[2]]
    if(a[1] !== undefined) str+= n10[a[1]]
    str += n[a[0]]
    

    return str
}