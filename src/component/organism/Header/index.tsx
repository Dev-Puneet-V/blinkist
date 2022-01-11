import Logo from '../../molecule/Logo';
import Icon from '../../atom/Icon';
import Typography from '../../atom/Typography';
import {Box, Menu, MenuItem} from '@mui/material';
import {ArrowDropUp, Search} from '@mui/icons-material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
const HeaderComponent = (props : any) => {
    return (
        <AppBar position="static">
            <Toolbar variant="dense">
                <Logo {...props} sx={{ flexGrow: 1 }}/>
                <Menu open={false} sx={{display: 'flex', alignItems: 'center'}}>
                    <MenuItem key={0} sx={{display: 'flex', alignItems: 'center'}}>
                        <Typography>
                            Explore
                        </Typography>
                        <Icon icon={<ArrowDropUp />} />
                    </MenuItem>
                    <MenuItem key={1}>
                        <Icon icon={<Search />}/>
                    </MenuItem>
                    <MenuItem key={2}>
                        <Typography>
                            My Library
                        </Typography>
                    </MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    );
}

export default HeaderComponent;