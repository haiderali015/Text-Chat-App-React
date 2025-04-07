import {Avatar, Box, Typography} from "@mui/material"
const Profile = () =>{
    return(
        <Box sx={{background:"#eee", width:"25vw", display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column'}}>
            <Avatar src="/assets/haider.PNG" sx={{width:'156px', height:'156px'}}></Avatar>
            <Typography variant="h4" sx={{textTransform:'uppercase', color:'primary.light', mt:3}}>
                Haider Ali
            </Typography>
            <Typography variant="subtitle1">Developer</Typography>
            <Typography variant="body2">a@g.com</Typography>

        </Box>
    )
}
export default Profile