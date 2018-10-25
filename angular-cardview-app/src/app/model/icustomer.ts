export interface Icustomer {

    id: number;
    firstname:string;
    lastname: string;
    gender: string;
    address: string;
    city: string;
    state: object;
    orders: Array<object>;
    latitude: number;
    longitude:number;

}
