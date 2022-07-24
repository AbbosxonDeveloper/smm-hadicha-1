// let arr = []

// let obj = {
//     name: 'ali',
//     age: 14,
//     job: 'coder',
//     email: null
// }
// for (let key in obj) {
//     arr[arr.length] = [key, obj[key]]
// }
// console.log(arr);


let obj = [
    { name: 'ali', age: 14, phone: '5589', },
    { name: 'ali', age: 16, phone: '5582' },
    { name: 'salim', age: 22, phone: '4589' },
    { name: 'gani', age: 18, phone: '5576' },
]

// let array = []

// function Dofilter(arr, option) {
//     for (let opt in option) {

//         console.log(opt);
//         arr = arr.filter(e => (e.name == option.name || e.age == option.age || e.phone == option.phone))
//         console.log(arr);
//     }
// }
// Dofilter(obj, { name: 'vali', age: 16 })

let users = [
    {}
]

function filtered(arr, opt) {
    let result = []
    let length = Object.keys(opt).length
    for (let value of arr) {
        let isT = 0
        for (let key in opt) {
            if (value[key] == opt[key]) {
                isT++
            }
        }
        if (isT) result[result.length] = value
    }
    return result
}

console.log(filtered(obj, { age: 14, name: 'ali', phone: 5589 }));

console.log(typeof(true - 0));