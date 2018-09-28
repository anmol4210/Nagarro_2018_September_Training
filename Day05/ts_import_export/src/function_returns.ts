
namespace funreturns {

  function add(a: string, b: number) {
    return a + b
  }

  function f1(): number {
    return 1
  }

  function f2(): void {

  }

  function f3(y?: number): void {
    let x = y
    return
  }

}
