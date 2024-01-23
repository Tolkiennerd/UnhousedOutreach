import { Table, flexRender } from '@tanstack/react-table';
import { HousingInsecureNeighbor } from '..';

interface HousingInsecureNeighborsDesktopViewProps {
    table: Table<HousingInsecureNeighbor>;
}

export function HousingInsecureNeighborsDesktopView({ table }: HousingInsecureNeighborsDesktopViewProps) {
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
