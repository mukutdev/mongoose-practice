export interface IUser{
    id : number
    name : string;
    age : number;
    email : string;
    roll : number;
    address : {
        country : string;
        city ? : string;
        roadNo ? : string
    };
    gender : "male" | "female";
    dob ? : string

}

export interface IUserMethods {
  fullName(): string;
}
