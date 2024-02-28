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
    className?: string;
    title?: string;
    titleColor?: string;
    text?: string;
    chips?: ChipProps[]
}

export function InfoCard({hide = false, backgroundColor, className, title, titleColor = 'white', text, chips}: InfoCardProps) {
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
            <Card style={{backgroundColor: backgroundColor}} className={className ?? ''} variant="outlined">
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
            </Card>
            : null
            }
        </>
    )
}