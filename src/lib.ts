class Klass {
  public propInt: Number = 1
  public propStr: String = 'abc'
  
  speak (message: String): void {
    console.log(message)
  }
}

function createKlass(): any {
  return new Klass()
}
