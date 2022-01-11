import Logo from '.';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import LogoImage from '../../../assets/logo.png';

const LogoComponent = {
    title : 'molecule/Logo',
    component: Logo
} as ComponentMeta<typeof Logo>;

export const Template: ComponentStory<typeof Logo>  = (args:any) => <Logo {...args} />

Template.args = {
    height: 30,
    url: LogoImage,
    name: 'Blinkist'
}

export default LogoComponent;