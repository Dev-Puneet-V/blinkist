import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import tabTheme from '../../../theme/tabTheme';
import { ThemeProvider } from '@mui/material/styles';
export default function TabsWrappedLabel(props: any) {
  const [value, setValue] = React.useState('reading');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    props.stateHandler(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
    <ThemeProvider theme={tabTheme}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="wrapped label tabs example"
        textColor="primary"
        indicatorColor='primary'
      >
        <Tab value="reading" label="Currently reading" />
        <Tab value="finished" label="Finished" />
      </Tabs>
    </ThemeProvider>
    </Box>
  );
}