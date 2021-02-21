class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack{ // implement stack with linked list
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

    pop(value){

        if(!this.top){ // check if the stack is empty
            return null;
        }

        if(this.top === this.bottom){ // check if the stack has only 1 item
            this.bottom = null;
        }

        const hodlingPointer = this.top // this code is optional
                                        //if we want to save the top value for later use
                                        // we need to save it to a new reference otherwise it will be
                                        // automatically erased from the memory
                                        // due to garbage collected feature of javascript.
        this.top = this.top.next;
        this.length--;
        return this;
    }

}