import {Box} from '@mui/material'
import Header from './Header';
const Chatbox = () => {
    return(
        <Box sx={{width:'50vw', display:'flex', height:"100%", flexDirection:'column'}}>
            <Header/>    
        </Box>
    )
}
export default Chatbox;