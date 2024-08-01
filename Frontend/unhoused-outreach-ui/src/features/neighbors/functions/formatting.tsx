import moment from "moment";
import { Neighbor } from "../models/neighbor";

export const getFullName = (neighbor?: Neighbor): string => {
    const firstName = neighbor?.firstName ?? '';
    const preferredName = neighbor?.preferredName ? ` "${neighbor.preferredName}"`: '';
    const lastName = neighbor?.lastName ?? '';
    return `${firstName}${preferredName} ${lastName}`;
}

export const getContact = (neighbor?: Neighbor): string => neighbor?.phoneNumber ?? neighbor?.emailAddress ?? '';

export const getAge = (neighbor?: Neighbor): string => {
    if (!neighbor?.dateOfBirth) {
        return 'Unknown';
    }
    const birthDate = moment(neighbor.dateOfBirth);
    const currentDate = moment(new Date());
    const age = currentDate.diff(birthDate, 'years');
    return String(age);
}