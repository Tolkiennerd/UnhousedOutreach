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
        this.firstName = json?.firstName;
        this.lastName = json?.lastName;
        this.preferredName = json?.preferredName;
        this.dateOfBirth = json?.dateOfBirth;
        this.genderId = json?.genderId;
        this.phoneNumber = json?.phoneNumber;
        this.emailAddress = json?.emailAddress;
        this.comments = json?.comments;
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

    getGender = (genderLookup: Record<number, string>): string => {
        if (!this.genderId) {
            return 'Unknown';
        }
        return genderLookup[this.genderId];
    }
}
