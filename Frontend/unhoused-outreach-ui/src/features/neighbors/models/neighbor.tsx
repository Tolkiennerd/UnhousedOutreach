import moment from "moment";

export class Neighbor
{
    firstName?: string;
    lastName?: string;
    preferredName?: string;
    dateOfBirth?: Date;
    genderId?: number;
    phoneNumber?: string;
    emailAddress?: string;
    comments?: string;

    constructor(json: any) {
        // Assign all built-in types.
        Object.assign(this, json);

        // Assign all custom types.
        this.dateOfBirth = json.date;
    }

    getFullName(): string {
        const firstName = this.firstName ?? '';
        const preferredName = this.preferredName ? ` "${this.preferredName}"`: '';
        const lastName = this.lastName ?? '';
        return `${firstName}${preferredName} ${lastName}`;
    }

    getContact(): string { return this.phoneNumber ?? this.emailAddress ?? ''; }

    getAge(): string {
        if (!this.dateOfBirth) {
            return 'Unknown';
        }
        const birthDate = moment(this.dateOfBirth);
        const currentDate = moment(new Date());
        const age = currentDate.diff(birthDate, 'years');
        return String(age);
    }
}
