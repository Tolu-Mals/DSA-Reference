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

    removeAt()

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
    if(this.head === null && this.tail === null){
      this.head = node; 
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
      this.length++;
    }
  }

  printList(){
    let currentNode = this.head;

    while(currentNode != null){
      console.log(currentNode.data);
      currentNode = currentNode.next;
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
myLinkedList.printList();
// console.log(myLinkedList);
// myLinkedList.append(3);
// myLinkedList.display();