export interface userType {
  id: number;
  name: string;
  roll: string;
  email: string;
  phonenumber: string;
  birthdate: string;
  profile:string
}

export interface userJsonType {
  status: string,
  results: number,
   data: {
        users: userType[];
    };
}

//-------------

export interface reportType {
  id:number,
  title:string,
  report:string,
  writer:string,
  writerrol:string,
  writerprofile:string,
  date:string,
  comment?:commentType[],
  like?:number
}

export interface reporJsonType {
  status: string,
  results: number,
   data: {
        reports: reportType[];
    };
}

export interface commentType{
  id : number,
  writer:string,
  text:string,
  writerrol:string,
  writerprofile:string,
  date:string,
}


export interface reportByIdType {
  status: string,
  results: number,
   data: {
        report: reportType;
    };
}

