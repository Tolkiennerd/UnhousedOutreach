import { useContext, useEffect, useState } from 'react';
import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import axios from 'axios';
import { HousingInsecureNeighbor, housingInsecureNeighborsColumns } from '..';
import { Lookups } from '../../../lookups';
import { LookupsContext } from '../../../../App';

export function HousingInsecureNeighborsDesktopView() {
    // DEFINE THE TABLE.
    const lookups = useContext(LookupsContext) as Lookups;
    const [housingInsecureNeighborsData, setHousingInsecureNeighborsData] = useState([] as HousingInsecureNeighbor[]);
    const table = useReactTable({
        columns: housingInsecureNeighborsColumns(lookups),
        data: housingInsecureNeighborsData,
        getCoreRowModel: getCoreRowModel() });

    // GET THE DATA.
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/housing-insecure-neighbors?otid=1`)
            .then(response => {
                setHousingInsecureNeighborsData(response.data)
            })
            .catch(error => console.log(error));
    }, []);

    // CONTENT.
    return (
        <>
            <h3>Housing Insecure Neighbors</h3>
            <table>
                <thead>
                    <tr>
                        {table.getFlatHeaders().map((header, index) => (
                        <th key={header.id}>
                            {flexRender(header.column.columnDef.header, header.getContext())}
                        </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {table.getRowModel().rows.map(row => (
                    <tr key={row.id}>
                        {row.getVisibleCells().map(cell => (
                        <td key={cell.id}>
                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </td>
                        ))}
                    </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}
