class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek(){
        return this.top;
    }

    push(value){
        const newNode = new Node(value);
        if(this.length === 0){
            this.top = newNode;
            this.bottom = newNode;
        }else{
            const hodlingPointer = this.top;
            this.top             = newNode;
            this.top.next        = hodlingPointer;
        }

        this.length++;
        return this;
    }

}