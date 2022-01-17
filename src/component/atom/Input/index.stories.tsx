import {ComponentStory, ComponentMeta} from '@storybook/react';
import Input from ".";
import {Search} from '@mui/icons-material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const InputComponent = {
  title: "atom/Input",
  component: Input,
} as ComponentMeta<typeof Input>;

const theme = createTheme({
    palette: {
      success:{
        main: '#eb3464',
      }
    }
});


export const Template: ComponentStory<typeof Input>  = (args:any) => (
    <Input  {...args} />
)

Template.args = {
    icon: <Search />,
    color: 'success'
}

Template.decorators = [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ];


export default InputComponent;