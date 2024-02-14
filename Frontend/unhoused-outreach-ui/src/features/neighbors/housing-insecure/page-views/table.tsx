import { useContext } from 'react';
import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { housingInsecureNeighborsColumns } from '..';
import { Lookups } from '../../../lookups';
import { LookupsContext } from '../../../../App';
import { HousingInsecureNeighborPageProps } from '../../models/props';
import './table.css';


export function HousingInsecureNeighborsTableView({ housingInsecureNeighborsData } : HousingInsecureNeighborPageProps) {
    // DEFINE THE TABLE.
    const lookups = useContext(LookupsContext) as Lookups;
    const table = useReactTable({
        columns: housingInsecureNeighborsColumns(lookups),
        data: housingInsecureNeighborsData,
        getCoreRowModel: getCoreRowModel() });

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
