import  fs from 'fs';
import {parse} from 'csv-parse/sync';

export class DataProvider {

    //Call the method We are creating the static method because we can call the method without creating the object of the class

    static getUserData(filePath:string) {

       let data:string=JSON.parse(fs.readFileSync(filePath, 'utf8'));
       return data;
    }
} 