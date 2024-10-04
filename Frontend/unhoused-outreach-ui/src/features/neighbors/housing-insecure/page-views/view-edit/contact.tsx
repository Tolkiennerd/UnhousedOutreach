import { TextField } from "@mui/material";
import { HousingInsecureNeighbor } from "../..";


interface ViewEditContactProps {
    neighbor: HousingInsecureNeighbor;
    setNeighbor: React.Dispatch<React.SetStateAction<HousingInsecureNeighbor>>;
};

export function ViewEditContact({neighbor, setNeighbor} : ViewEditContactProps) {
    return(
        <div className="edit-field">
            <h3>Contact</h3>
            <TextField
                label="Phone Number" 
                value={neighbor.phoneNumber} 
                onChange={(event) => setNeighbor({...neighbor, phoneNumber: event.target.value})}
                variant="outlined" 
            />
            <TextField
                label="Email Address"
                value={neighbor.emailAddress} 
                onChange={(event) => setNeighbor({...neighbor, emailAddress: event.target.value})}
                variant="outlined"
            />
        </div>
    );
};
