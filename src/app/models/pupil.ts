export class Pupil {
    private birthDateField: Date;
    rating: number;
    description: string;

    constructor(public firstName: string, public lastName: string, birthDate?: Date) {
        this.birthDateField = birthDate;
        this.rating = 0.0;
        this.description = '';
    }

    get birthDate(): Date {
        return this.birthDateField;
    }

    get desription(): string {
        return this.firstName + ' ' + this.lastName + 'ist geboren am ' +
        this.birthDate.toDateString() + ' und hat ein Rating von: ' + this.rating;
    }
}



