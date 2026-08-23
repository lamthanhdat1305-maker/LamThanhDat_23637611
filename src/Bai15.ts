class Book {
    title: string;

    constructor(title: string) {
        this.title = title;
    }
}

class User {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

class Library {
    books: Book[] = [];
    users: User[] = [];

    addBook(book: Book): void {
        this.books.push(book);
    }

    addUser(user: User): void {
        this.users.push(user);
    }

    displayInfo(): void {
        console.log("Books:", this.books);
        console.log("Users:", this.users);
    }
}

const library = new Library();

library.addBook(new Book("TypeScript Basic"));
library.addUser(new User("John"));

library.displayInfo();
