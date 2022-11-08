export interface Usuario {
  id?: string,
  firstName: string,
  lastName: string,
  age:number,
  username:string,
  password: string,
  birthDate:string,
  gender:string,
}
export interface usuariomomentanio extends Usuario {
  id:string
}

export interface Usuariologin extends Usuario {
  id:string,
  password:string
}
