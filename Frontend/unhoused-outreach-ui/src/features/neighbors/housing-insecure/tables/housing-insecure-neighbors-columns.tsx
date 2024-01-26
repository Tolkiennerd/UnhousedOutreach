import { createColumnHelper } from '@tanstack/react-table';
import { LookupsContextType } from '../../../lookups';
import { HousingInsecureNeighbor } from '../models/housing-insecure-neighbor';
import moment from 'moment';

const columnHelper = createColumnHelper<HousingInsecureNeighbor>();
export const housingInsecureNeighborsColumns = (lookups: LookupsContextType) => [
  columnHelper.accessor(row => `${row.firstName ?? ''}${row.preferredName ? ` '${row.preferredName}' `: ''}${row.lastName ?? ''}`, {
    id: 'fullName',
    cell: info => info.getValue(),
    header: () => <span>Name</span>,
  }),
  columnHelper.accessor('dateOfBirth', {
    id: 'age',
    cell: info => {
      if (!info.getValue()) {
        return 'Unkown';
      }
      const birthDate = moment(info.getValue());
      const currentDate = moment(new Date());
      const age = currentDate.diff(birthDate, "years");
      return age;
    },
    header: () => <span>Age</span>,
  }),
  columnHelper.accessor('genderId', {
    id: 'gender',
    cell: info => {
      const genderId = info.getValue();
      return genderId ? lookups.gender.lookup[genderId] : 'Unknown';
    },
    header: () => <span>Gender</span>,
  }),
  columnHelper.accessor('phoneNumber', {
    id: 'phoneNumber',
    cell: info => info.getValue() ?? "Unknown",
    header: () => <span>Phone Number</span>,
  }),
];
