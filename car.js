let fiat = {
  make:"fiat",
  model: '500',
  year: 1957,
  color: "Medium Blue"
  passengers: 2,
  convertible: false,
  milage: 88000,
  started: false,
  start: function(){
    this.started = true
  },
  stop: function(){
    this.started = false
  },
  drive: function(){
    if(this.started){
      alert("zoom zoom!");
    }else{
      alert("you need to start the engine!")
    }
  }
};
