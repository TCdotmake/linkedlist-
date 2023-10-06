function mkLinkedList() {
  return {
    list: null,
    counter: 0,
    append(value) {
      const newNode = mkNode(value);
      if (this.list == null) {
        this.list = newNode;
      } else {
        let current = this.list;
        while (current.nextNode) {
          current = current.next;
        }
        current.next = newNode;
      }
      this.counter += 1;
    },
    prepend(value) {
      const newNode = mkNode(value);
      newNode.nextNode = this.list;
      this.list = newNode;
      this.counter += 1;
    },
    size() {
      return this.counter;
    },
    head() {
      return this.list;
    },
    tail() {
      let current = this.list;
      while (current.nextNode) {
        current = current.nextNode;
      }
      return current;
    },
    at(index) {
      if (index >= this.size) {
        return null;
      } else {
        let n = 0;
        let current = this.list;
        while (n < index) {
          current = current.nextNode;
          n += 1;
        }
        return current.value;
      }
    },
    pop() {
      if (this.size === 1) {
        this.list = null;
        this.counter = 0;
      } else if (this.size > 1) {
        let current = this.list;
        while (current.nextNode.newNode) {
          current = current.nextNode;
        }
        console.log(current);
        current.nextNode = null;
        this.counter -= 1;
      }
    },
  };
}

function mkNode(value = null) {
  return {
    value,
    nextNode: null,
  };
}

export { mkLinkedList, mkNode };
