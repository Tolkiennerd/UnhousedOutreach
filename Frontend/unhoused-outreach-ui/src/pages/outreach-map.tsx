import { useParams } from 'react-router-dom';
import { OutreachMapDefaultView } from '../features/mapping';


const OutreachMap = () => {
    // GET PARAMETERS.
    const { latitude, longitude} = useParams();

    // CONTENT.
    return (
        <OutreachMapDefaultView startingLatitude={Number(latitude)} startingLongitude={Number(longitude)}/>
    );
}
export default OutreachMap;
