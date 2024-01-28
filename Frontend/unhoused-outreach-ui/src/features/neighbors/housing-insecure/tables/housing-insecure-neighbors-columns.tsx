import { createColumnHelper } from '@tanstack/react-table';
import { Lookups } from '../../../lookups';
import { HousingInsecureNeighbor } from '../models/housing-insecure-neighbor';
import moment from 'moment';
import { Link } from 'react-router-dom';

const columnHelper = createColumnHelper<HousingInsecureNeighbor>();
export const housingInsecureNeighborsColumns = (lookups: Lookups) => [
  columnHelper.accessor(row => {
      const firstName = row.firstName ?? '';
      const preferredName = row.preferredName ? ` '${row.preferredName}'`: '';
      const lastName = row.lastName ?? '';
      return <div style={{fontSize: '3vmin'}}>{`${firstName}${preferredName} ${lastName}`}</div>
    }, {
    id: 'name',
    cell: info => info.getValue(),
    header: () => <span>Name</span>,
  }),
  columnHelper.accessor(row => `${row.phoneNumber ?? (row.emailAddress ?? 'N/A')}`, {
    id: 'contact',
    cell: info => info.getValue(),
    header: () => <span>Contact</span>,
  }),
  columnHelper.accessor(row => {
      if (!row.location) {
        return 'Unknown';
      }
      const linkText = row.location.name ?? lookups.locationType[row.location.locationTypeId];
      return <Link to="/map">{linkText}</Link>;
    }, {
    id: 'location',
    cell: info => info.getValue(),
    header: () => <span>Location</span>,
  }),
  columnHelper.accessor(row => {
      if (!row.dateOfBirth) {
        return 'Unknown';
      }
      const birthDate = moment(row.dateOfBirth);
      const currentDate = moment(new Date());
      const age = currentDate.diff(birthDate, "years");
      return age;
    }, {
    id: 'age',
    cell: info => info.getValue(),
    header: () => <span>Age</span>,
  }),
  columnHelper.accessor('genderId', {
    id: 'gender',
    cell: info => {
      const genderId = info.getValue();
      return genderId ? lookups.gender[genderId] : 'Unknown';
    },
    header: () => <span>Gender</span>,
  }),
  columnHelper.accessor(row =>  row.housingStatusId ? lookups.housingStatus[row.housingStatusId] : 'Unknown', {
    id: 'housingStatus',
    cell: info => info.getValue(),
    header: () => <span>Housing Status</span>,
  }),
  columnHelper.accessor(row => {
      if (!row.caseManager) return 'Unknown';
      const firstName = row.caseManager?.firstName ?? '';
      const preferredName = row.caseManager?.preferredName ? ` '${row.caseManager?.preferredName}' `: '';
      const lastName = row.caseManager?.lastName ?? '';
      return `${firstName}${preferredName} ${lastName}`;
    }, {
    id: 'caseManager',
    cell: info => info.getValue(),
    header: () => <span>Case Manager</span>,
  }),
  columnHelper.accessor(row => {
      if (!row.requestIds || row.requestIds.length === 0) return 'None';
      const requests = row.requestIds.map(requestId => lookups.request[requestId]);
      return requests.join(", ");
    }, {
    id: 'requests',
    cell: info => info.getValue(),
    header: () => <span>Requests</span>,
  }),
  columnHelper.accessor(row => {
      if (!row.disabilityIds || row.disabilityIds.length === 0) return 'None';
      const disabilities = row.disabilityIds.map(disabilityId => lookups.disability[disabilityId]);
      return disabilities.join(", ");
    }, {
    id: 'disabilities',
    cell: info => info.getValue(),
    header: () => <span>Disabilities</span>,
  }),
];
