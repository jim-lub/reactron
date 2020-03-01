export namespace Payload {

  export interface SetExampleNumber {
    number: number
  }

  export interface SetExampleString {
    string: string
  }

  export interface SetExampleObject {
    object: {
      [key: string]: any
    }
  }

  export interface SetExampleArray {
    array: Array<any>
  }

}
