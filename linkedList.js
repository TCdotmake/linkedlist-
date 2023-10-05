function mkLinkedList() {
  return {
    list: null,
    head() {
      return this.list;
    },
    tail() {
      let pointer = this.list;
      while (pointer.nextNode) {
        pointer = pointer.nextNode;
      }
      return pointer;
    },
    append(value) {
      let newNode = mkNode(value);
      if (this.list == null) {
        this.list = newNode;
      } else {
        this.tail().nextNode = newNode;
      }
    },
    prepend(value) {
      let newNode = mkNode(value);
      newNode.nextNode = this.list;
      this.list = newNode;
    },
    size() {
      if (this.list == null) {
        return 0;
      } else {
        let size = 1;
        let pointer = this.list;
        while (pointer.nextNode != null) {
          pointer = pointer.nextNode;
          size += 1;
        }
        return size;
      }
    },
    at(index) {
      //check if index is within bound
      if (index >= this.size()) {
        return null;
      } else {
        let pointer = this.list;
        let counter = 0;
        while (index > counter) {
          pointer = pointer.nextNode;
          counter += 1;
        }
        return pointer;
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
