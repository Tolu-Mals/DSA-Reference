/*
  Abstract.next  Data Type

  LinkedList {
    this.head
    this.tail
    tihs.length

    Adds a node to the beginning of the linkedlist
    prepend()

    Adds a node to the end of the linkedlist
    append()

    //Removes the element at an Index
    removeAt()

    //Adds and element at and index
    addAt()

    indexOf()

    size()

    display()
  }
*/

class LinkedList {
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  prepend(data){
    let node = new Node(data);
    //If we have an empty LinkedList
    if(this.head === null){
      this.head = node; 
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
      this.length++;
    }
  }

  append(data){
    let node = new Node(data);
    if(this.head === null){
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }

  printList(){
    let currentNode = this.head;

    while(currentNode != null){
      console.log(currentNode.data);
      currentNode = currentNode.next;
    }
  }

  removeAt(index){
    if(index === 0){
      this.head = this.head.next;
    } else {
      let currentIndex = 0;
      let currentNode = this.head;

      while (currentIndex < index - 1) {
        currentNode = currentNode.next;
        currentIndex++;
      }
      //loop breaks in the node before the target index

      //Jump over the next node, which is the node at the index
      currentNode.next = currentNode.next.next;
    }
  }

  addAt(data, index){
    let node = new Node(data);
    if(index === 0){
      node.next = this.head;
      this.head = node;
    } else {
      let currentIndex = 0;
      let currentNode = this.head;

      while (currentIndex < index - 1) {
        currentNode = currentNode.next;
        currentIndex++;
      }
      //loop breaks in the node before the target index

      //Jump over the next node, which is the node at the index
      node.next = currentNode.next;
      currentNode.next = node;
    }
  }
}

class Node {
  constructor(data){
    this.data = data;
    this.next = null;
  }
}

const myLinkedList = new LinkedList();

myLinkedList.prepend(1);
myLinkedList.prepend(2);
myLinkedList.prepend(3);
myLinkedList.append(5);

myLinkedList.addAt(16, 1);
myLinkedList.printList();