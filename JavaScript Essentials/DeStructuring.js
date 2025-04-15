// To access the some sort of the data of an object again and again we need to call the whole iteration for the element

var obj = {name: "Devanshu", age: 22}

console.log(obj.age);
console.log(obj.age);
console.log(obj.age);

// we need to call the (obj.age) again and again. So to avoid this we can use the destructuring in js.

var obj1 = {name: "Dev" , age: 22, email: "lalalal@gmail.com"}
const {email} = obj1; // destructuring
console.log(email); // this is how we can destructure the object and access the data from it. This is similar to the python destructuring.

var obj2 = {
    name: {
        FirstName: "Devansh",
        LastName: "Sharma"
    },
    age: 22,
    subject :{
        MERN: {
            frontend : "React",
            backend : "Node , express"
        }
    }
}
const backend = obj2.subject.MERN.backend; // this is how we can access the data from the nested object.
console.log(backend); 