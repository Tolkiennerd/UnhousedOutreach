import { InputLabel, MenuItem, Select } from "@mui/material";
import { HousingInsecureNeighbor } from "../..";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { FormControl } from "react-bootstrap";
import { useContext } from "react";
import { LookupsContext } from "App";
import { Lookups } from "features/lookups";


interface ViewEditDemographicsProps {
    neighbor: HousingInsecureNeighbor;
    setNeighbor: React.Dispatch<React.SetStateAction<HousingInsecureNeighbor>>;
    setIds: (event: any, ids: number[], setMethod: (id: number) => void, deleteMethod: (id: number) => void) => number[];
    updateEthnicityInDb: (ethnicityId: number) => void;
    deleteEthnicityFromDb: (ethnicityId: number) => void;
};

export function ViewEditDemographics({neighbor, setNeighbor, setIds, updateEthnicityInDb, deleteEthnicityFromDb} : ViewEditDemographicsProps) {

    const lookups = useContext(LookupsContext) as Lookups;

    return(
        <div className="edit-field">
            <h3>Demographics</h3>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker 
                    label="Date of Birth" 
                    value={dayjs(neighbor.dateOfBirth)}
                    onChange={(event) => setNeighbor({...neighbor, dateOfBirth: event?.toDate()})}
                />
            </LocalizationProvider>
            <div className='dropdown'>
                <FormControl id='gender-form'>
                    <InputLabel>Gender</InputLabel>
                    <Select
                        label="Gender"
                        value={neighbor.genderId}
                        onChange={(event) => setNeighbor({...neighbor, genderId: Number(event.target.value)})}
                    >
                        {Object.keys(lookups.gender).map(id => 
                            <MenuItem id={`Gender-${id}`} key={`Gender-${id}`} value={id}>{lookups.gender[Number(id)]}</MenuItem>
                        )}
                    </Select>
                </FormControl>
            </div>
            <div className='dropdown'>
                <FormControl id='ethnicity-form'>
                    <InputLabel>Ethnicity</InputLabel>
                    <Select
                        label="Ethnicity"
                        multiple
                        value={neighbor.ethnicityIds}
                        renderValue={(ids) => ids.map(id => lookups.ethnicity[Number(id)]).join(', ')}
                        onChange={(event) => setNeighbor({...neighbor, ethnicityIds: setIds(event, neighbor.ethnicityIds, updateEthnicityInDb, deleteEthnicityFromDb)})}
                    >
                        {Object.keys(lookups.ethnicity).map(id =>
                            <MenuItem key={`Ethnicity-${id}`} value={id}>
                                {lookups.ethnicity[Number(id)]}
                            </MenuItem>
                        ).sort((a, b) => lookups.ethnicity[Number(a.props.value)].localeCompare(lookups.ethnicity[Number(b.props.value)]))}
                    </Select>
                </FormControl>
            </div>
        </div>
    );
};
