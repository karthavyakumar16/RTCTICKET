export class Searchbus{
    source:string;
    destination:string;
    startdate:Date;
    enddate:Date;

    constructor( source:string,
        destination:string,
        startdate:Date,
        enddate:Date){

            this.source=source;
            this.destination=destination;
            this.startdate=startdate;
            this.enddate=enddate;

    }

}