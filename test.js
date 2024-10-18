class Stack {
  constructor() {
    this.items = [];
  }
  push(item){
    return this.items.push(item)
  }

  pop(){
    return this.items.pop()
  }
  peek(){
    return this.items[this.items.length-1]
  }

}


let obj = {}
obj[0] = "mohamed";
console.log(obj[0]);
