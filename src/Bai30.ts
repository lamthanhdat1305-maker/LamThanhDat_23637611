class Student {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    displayInfo(): void {
        console.log(`Student: ${this.name}, Age: ${this.age}`);
    }
}

class Teacher {
    name: string;
    subject: string;

    constructor(name: string, subject: string) {
        this.name = name;
        this.subject = subject;
    }

    displayInfo(): void {
        console.log(`Teacher: ${this.name}, Subject: ${this.subject}`);
    }
}

class School {
    students: Student[];
    teachers: Teacher[];

    constructor() {
        this.students = [];
        this.teachers = [];
    }

    addStudent(student: Student): void {
        this.students.push(student);
    }

    addTeacher(teacher: Teacher): void {
        this.teachers.push(teacher);
    }

    displayInfo(): void {
        console.log("=== STUDENTS ===");

        this.students.forEach(student => {
            student.displayInfo();
        });

        console.log("=== TEACHERS ===");

        this.teachers.forEach(teacher => {
            teacher.displayInfo();
        });
    }
}

const school = new School();

school.addStudent(new Student("John", 20));
school.addStudent(new Student("Peter", 21));

school.addTeacher(new Teacher("Mr. Smith", "Mathematics"));
school.addTeacher(new Teacher("Mrs. Anna", "English"));

school.displayInfo();
