class LRUCache {
  constructor(capacity){
    this.capacity = capacity;
    this.head = new Node();
    this.tail = new Node();
    this.head.next = this.tail;
    this.tail.prev = this.head;
    this.node_map = new Map();
  }

  append(node){
   //add node after head in LinkedList
   node.next = this.head.next;
   node.prev = this.head;
   this.head.next.prev = node;
   this.head.next = node;
  }

  get(key){
   let node = this.node_map.get(key);

   if(node == null){
     return -1;
    }

   //reposition node, since we just used it
   this.delete(node);
   this.append(node);

   return node.data;
  }

  put(key, value){
    //check if it exists already
    let node = this.node_map.get(key);
    
    //Check whether the node exists already
    if(node != null){
      //update location, since we just used node
      //deleting and reading is easier than trying to change the location
      this.delete(node);

      //update the value 
      node.data = value;

      //re-add node
      this.append(node);
    }

    //if node doesn't already exist
    else {
      //check if cache is at capacity 
      if(this.node_map.size === this.capacity) {
        this.node_map.delete(this.tail.prev.key);

        //delete the LRU node
        this.delete(this.tail.prev);
      }

      //add new node
      let node = new Node(value, key);
      this.append(node);
      this.node_map.set(key, node);
    }
  }

  delete(node){
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }
}

class Node {
  constructor(data = null, key = null){
    this.data = data;
    this.key = key;
    this.next = null;
    this.prev = null;
  }
}
/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */