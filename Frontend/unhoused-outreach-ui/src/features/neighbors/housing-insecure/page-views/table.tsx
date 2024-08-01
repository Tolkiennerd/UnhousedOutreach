import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Paper from '@mui/material/Paper';
import { HousingInsecureNeighbor, Row } from '../../../neighbors/housing-insecure';
import './table.css';


export function HousingInsecureNeighborsTableView({ housingInsecureNeighbors }: { housingInsecureNeighbors: HousingInsecureNeighbor[] }) {
    return (
        <div className='table-container'>
            <h3>Housing Insecure Neighbors</h3>
            <TableContainer component={Paper} className='table'>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            <TableCell className='extra-small-screen'></TableCell>
                            <TableCell className='extra-small-screen'>Name</TableCell>
                            <TableCell className='small-screen'>Location</TableCell>
                            <TableCell className='small-screen'>Housing Status</TableCell>
                            <TableCell className='small-screen'>Needs</TableCell>
                            <TableCell className='small-screen'>Age</TableCell>
                            <TableCell className='medium-screen'>Ethnicity</TableCell>
                            <TableCell className='medium-screen'>Gender</TableCell>
                            <TableCell className='large-screen'>English Level</TableCell>
                            <TableCell className='large-screen'>Housed?</TableCell>
                            <TableCell className='large-screen'>Citizen?</TableCell>
                            <TableCell className='extra-large-screen'>Has ID?</TableCell>
                            <TableCell className='extra-large-screen'>Income</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {housingInsecureNeighbors.map((neighbor) => (
                        <Row key={neighbor.housingInsecureNeighborId} initialNeighbor={neighbor} />
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
