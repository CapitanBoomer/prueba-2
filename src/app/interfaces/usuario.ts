export interface Usuario {
  id?: number,
  firstName: string,
  lastName: string,
  age:number,
  username:string,
  password: string,
  birthDate:string,
  gender:string,
}
export interface UsuarioParcial extends Partial <Usuario>{

}

export interface Usuariologin  {
  id:number,
  password:string
}
