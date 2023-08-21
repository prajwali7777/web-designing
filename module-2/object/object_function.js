const student={
    fname: "sharine",
    lname: "joycee",
    age: 18,
    fullname: function(){
        console.log("student full name is:", this.fname+" "+this.lname);
        console.log(`Student first name is ${this.fname} last name is: ${this.lname} and she is ${this.age}years old`);

    }
};
student.fullname()