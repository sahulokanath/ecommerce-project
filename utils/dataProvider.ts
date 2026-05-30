import fs from 'fs';
import { parse } from 'csv-parse/sync';

export class DataProvider {

    //Call the method We are creating the static method because we can call the method without creating the object of the class

    static getTestDataFromJson(filePath: string) {

        let data: any = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        return data;
    }

    //method to read data from csv file
    static getUserDataFromCSV(filePath: string) {

        let data: any = parse(fs.readFileSync(filePath), { columns: true, skip_empty_lines: true });
        return data;
    }
} 