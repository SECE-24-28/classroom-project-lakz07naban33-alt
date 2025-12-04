let student = {
    name: "Lakshan Kumar P L",
    age: 20,
    department: "AIML",
    marks: [85, 92, 78] 
};

console.log(student);

student.name = "Karthik";
console.log(student);

let updated={
    ...data,
    percentage:70
};
console.log(updated);

let highestmark=Math.max(...data.mark)
console.log("highest mark:",highestmark);
