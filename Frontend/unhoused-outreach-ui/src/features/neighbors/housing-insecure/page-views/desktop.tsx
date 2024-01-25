import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { housingInsecureNeighborsColumns } from '..';
import { LookupsContextType } from '../../../lookups';
import { useContext } from 'react';
import { LookupsContext } from '../../../../App';

export function HousingInsecureNeighborsDesktopView() {
    // DEFINE THE TABLE.
    const lookups = useContext(LookupsContext) as LookupsContextType;
    const housingInsecureNeighborsData: [] = [];
    const table = useReactTable({
        columns: housingInsecureNeighborsColumns(lookups),
        data: housingInsecureNeighborsData,
        getCoreRowModel: getCoreRowModel() });

    return (
        <>
            <span style={{fontWeight: 'bold', padding: '1vw'}}>Housing Insecure Neighbors</span>
            <table>
            <thead>
                {table.getFlatHeaders().map(header => (
                <th key={header.id}>
                    {flexRender(header.column.columnDef.header, header.getContext())}
                </th>
                ))}
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
