function Accumulator() {
  this.startingValue = 0
  this.currentValue = 0
  this.input = 0
  this.read = function(){
    this.input = +prompt(`Give me a number`)
     return this.currentValue += this.input
  }
  this.show = function(){
    alert(this.currentValue)
  }
}
  let num1 = new Accumulator()
  num1.read()
  num1.show()
