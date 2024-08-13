import { TextField } from "@mui/material";
import { HousingInsecureNeighbor } from "../..";


interface ViewEditNameProps {
    neighbor: HousingInsecureNeighbor;
    setNeighbor: React.Dispatch<React.SetStateAction<HousingInsecureNeighbor>>;
};

export function ViewEditName({neighbor, setNeighbor} : ViewEditNameProps) {
    return(
        <div className="edit-field">
            <h3>Name</h3>
            <TextField
                label="First Name" 
                value={neighbor.firstName} 
                onChange={(event) => setNeighbor({...neighbor, firstName: event.target.value})}
                variant="outlined" 
            />
            <TextField 
                label="Preferred Name" 
                value={neighbor.preferredName} 
                onChange={(event) => setNeighbor({...neighbor, preferredName: event.target.value})}
                variant="outlined" 
            />
            <TextField 
                label="Last Name" 
                value={neighbor.lastName} 
                onChange={(event) => setNeighbor({...neighbor, lastName: event.target.value})}
                variant="outlined" 
            />
        </div>
    );
};
