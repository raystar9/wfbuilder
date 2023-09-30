export class CreateDeckDto {
  deck: {
    id: number
    m1: string
    m2: string
    m3: string
    u1: string
    u2: string
    u3: string
    e1: string
    e2: string
    e3: string
    s1: string
    s2: string
    s3: string
    deckCode:string
    //comments?:string
  }
  codes: {
    id:string
    codeKind?:string
    codeKey?:string
  }[]
}
