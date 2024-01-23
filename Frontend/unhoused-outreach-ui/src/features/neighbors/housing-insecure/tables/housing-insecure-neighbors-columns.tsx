import { createColumnHelper } from '@tanstack/react-table';
import { LookupContextType } from '../../../lookups';
import { HousingInsecureNeighbor } from '../models/housing-insecure-neighbor';

const columnHelper = createColumnHelper<HousingInsecureNeighbor>();
export const housingInsecureNeighborsColumns = (gender: LookupContextType) => [
  columnHelper.accessor('firstName', {
    id: 'firstName',
    cell: info => info.getValue(),
    header: () => <span>First Name</span>,
  }),
  columnHelper.accessor('lastName', {
    id: 'lastName',
    cell: info => info.getValue(),
    header: () => <span>Last Name</span>,
  }),
  columnHelper.accessor('dateOfBirth', {
    id: 'dateOfBirth',
    cell: info => info.getValue()?.toLocaleDateString(),
    header: () => <span>DOB</span>,
  }),
  columnHelper.accessor('genderId', {
    id: 'gender',
    cell: info => {
      const genderId = info.getValue();
      return genderId ? gender.lookup[genderId] : 'Unknown';
    },
    header: () => <span>Gender</span>,
  }),
  columnHelper.accessor('phoneNumber', {
    id: 'phoneNumber',
    cell: info => info.getValue() ?? "Unknown",
    header: () => <span>Phone Number</span>,
  }),
];
