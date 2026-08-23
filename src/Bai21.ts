class Repository<T> {
    private items: T[] = [];

    add(item: T): void {
        this.items.push(item);
    }

    getAll(): T[] {
        return this.items;
    }
}

const repository = new Repository<string>();

repository.add("Apple");
repository.add("Banana");

console.log(repository.getAll());
