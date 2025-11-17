let values = [1,2,3,"four","five",false,[true,"six","seven"],8,9]

console.log(values) //Array(9)
console.log(typeof(values)) //Object 
console.log(Array.isArray(values)) //true

//accessing values
console.log(values[3])
console.log(values[6][1])

//updating values 
let names = ["Bob","Alice",'Joyce']
names[2] = "Jack"
console.log(names)
// ['Bob', 'Alice', 'Jack']


//no of values 
let no_of_names = names.length
console.log(no_of_names)

//adding values at the end
names.push("Anne","Jill")
console.log(names)
// ['Bob', 'Alice', 'Jack', 'Anne', 'Jill']


//adding items at the beginning
names.unshift("Mark","John")
console.log(names)
// ['Mark', 'John', 'Bob', 'Alice', 'Jack', 'Anne', 'Jill']


//removing the last item 
names.pop()
console.log(names)
// ['Mark', 'John', 'Bob', 'Alice', 'Jack', 'Anne']


//remove the first item
names.shift()
console.log(names)
// ['John', 'Bob', 'Alice', 'Jack', 'Anne']