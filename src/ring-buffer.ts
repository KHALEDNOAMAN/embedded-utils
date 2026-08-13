export class RingBuffer<T> {
    private buffer: T[];
    private head: number = 0;
    private tail: number = 0;
    private count: number = 0;

    constructor(public readonly capacity: number) {
        this.buffer = new Array<T>(capacity);
    }

    push(item: T): boolean {
        if (this.isFull()) return false;
        this.buffer[this.tail] = item;
        this.tail = (this.tail + 1) % this.capacity;
        this.count++;
        return true;
    }

    pop(): T | undefined {
        if (this.isEmpty()) return undefined;
        const item = this.buffer[this.head];
        this.head = (this.head + 1) % this.capacity;
        this.count--;
        return item;
    }

    peek(): T | undefined {
        return this.isEmpty() ? undefined : this.buffer[this.head];
    }

    isFull(): boolean { return this.count === this.capacity; }
    isEmpty(): boolean { return this.count === 0; }
    size(): number { return this.count; }

    *[Symbol.iterator](): Iterator<T> {
        let current = this.head;
        let elements = this.count;
        while (elements > 0) {
            yield this.buffer[current];
            current = (current + 1) % this.capacity;
            elements--;
        }
    }
}