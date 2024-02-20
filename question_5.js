// Add a property ‘course’ as ‘JavaScript’ to the ‘student’ object.Create a method ‘greet’ in the object to print ‘Hello, my name is[name] and I am studying[course].’

let student = {
    name: "Ali",
    age: 20,
    grade: "A",
    course : "JavaScript",
    greet: function () {
        return "Hello, my name is " + this.name + " and I am studying " + this.course;
    }
}

console.log(student);

console.log(student.greet());