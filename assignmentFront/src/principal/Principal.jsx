import { useState } from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Vehicles from '../vehicles/Vehicles';
import Owners from '../owners/Owners';
import Claims from '../claims/Claims';

const LinkTab = (props) => {
    return (
        <Tab
        component="a"
        onClick={(event) => {
            event.preventDefault();
        }}
        {...props}
        />
        );
    }
    
const Principal = ({setModal}) => {
      const [value, setValue] = useState(0);
    
      const handleChange = (event, newValue) => {
          setValue(newValue);
      };
    
      return (
        <div>
        <Box sx={{ width: '100%'}}>
          <Tabs value={value} onChange={handleChange} aria-label="nav">
            <LinkTab label="Vehicles" href="/vehicles" />
            <LinkTab label="Owners" href="/owners" />
            <LinkTab label="Claims" href="/claims" />
          </Tabs>
        </Box>
        {value === 0 && <Vehicles setModal={setModal}/>}
        {value === 1 && <Owners setModal={setModal}/>}
        {value === 2 && <Claims setModal={setModal}/>}
        </div>
      );
    }

export default Principal;