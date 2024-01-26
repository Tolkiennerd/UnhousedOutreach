import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { HousingInsecureNeighbor, housingInsecureNeighborsColumns } from '..';
import { LookupsContextType } from '../../../lookups';
import { useContext, useEffect, useState } from 'react';
import { LookupsContext } from '../../../../App';
import axios from 'axios';

export function HousingInsecureNeighborsDesktopView() {
    // DEFINE THE TABLE.
    const lookups = useContext(LookupsContext) as LookupsContextType;
    const [housingInsecureNeighborsData, setHousingInsecureNeighborsData] = useState([] as HousingInsecureNeighbor[]);
    const table = useReactTable({
        columns: housingInsecureNeighborsColumns(lookups),
        data: housingInsecureNeighborsData,
        getCoreRowModel: getCoreRowModel() });

    // GET THE DATA.
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/housing-insecure-neighbors?outreachTeamId=1`)
            .then(response => {
                setHousingInsecureNeighborsData(response.data)
            })
            .catch(error => console.log(error));
    }, []);

    // CONTENT.
    return (
        <>
            <span style={{fontWeight: 'bold', padding: '1vw'}}>Housing Insecure Neighbors</span>
            <table>
            <thead>
                <tr>
                    {table.getFlatHeaders().map(header => (
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
