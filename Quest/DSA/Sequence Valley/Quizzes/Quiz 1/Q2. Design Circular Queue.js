var MyCircularQueue = function(k) {
    this.data = new Array(k);
    this.head = 0;
    this.tail = -1;
    this.size = 0;
    this.capacity = k;
};

MyCircularQueue.prototype.enQueue = function(value) {
    if (this.isFull()) return false;
    this.tail = (this.tail + 1) % this.capacity;
    this.data[this.tail] = value;
    this.size++;
    return true;
};

MyCircularQueue.prototype.deQueue = function() {
    if (this.isEmpty()) return false;
    this.head = (this.head + 1) % this.capacity;
    this.size--;
    return true;
};

MyCircularQueue.prototype.Front = function() {
    if (this.isEmpty()) return -1;
    return this.data[this.head];
};

MyCircularQueue.prototype.Rear = function() {
    if (this.isEmpty()) return -1;
    return this.data[this.tail];
};

MyCircularQueue.prototype.isEmpty = function() {
    return this.size === 0;
};

MyCircularQueue.prototype.isFull = function() {
    return this.size === this.capacity;
};