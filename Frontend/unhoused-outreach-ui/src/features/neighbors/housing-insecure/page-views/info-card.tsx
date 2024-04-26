import { Avatar, Card, Chip } from "@mui/material";
import { Link } from "react-router-dom";

interface ChipProps
{
    label?: string;
    icon?: string;
    link?: string;
}

interface InfoCardProps
{
    hide?: boolean;
    backgroundColor?: string;
    border?: string;
    className?: string;
    title?: string;
    titleColor?: string;
    text?: string;
    chips?: ChipProps[]
    elements?: JSX.Element[]
}

export function InfoCard({hide = false, backgroundColor, border, className, title, titleColor = 'white', text, chips, elements}: InfoCardProps) {
    const getChip = (chip: ChipProps) => (
        <Chip
            key={`${chip.label}-Chip`}
            avatar={chip.icon ? <Avatar src={chip.icon} /> : undefined}
            label={chip.label}
            sx={{
            height: 'auto',
            '& .MuiChip-label': {
                display: 'block',
                whiteSpace: 'normal',
            }
            }}
        />
    )

    return (
        <>
            {!hide ?
            <Card
                style={{backgroundColor: backgroundColor ?? 'inherit', border: border ?? 'inherit'}}
                className={className ?? ''} 
                variant="outlined"
            >
                {title ? <div style={{fontSize:'.8rem', color:titleColor}}>{title}</div> : null}
                {text ? <div>{text}</div> : null}
                {chips?.map(chip =>
                    chip.label ?
                        chip.link ?
                        <Link key={`${chip.label}-Link`} to={chip.link}>
                            {getChip(chip)}
                        </Link> :
                        getChip(chip)
                    : null
                )}
                {elements?.map(element => element)}
            </Card>
            : null
            }
        </>
    )
}