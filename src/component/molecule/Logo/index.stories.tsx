import Logo from '.';
import {ComponentMeta, ComponentStory} from '@storybook/react';

const LogoComponent = {
    title : 'molecule/Logo',
    component: Logo
} as ComponentMeta<typeof Logo>;

export const Template: ComponentStory<typeof Logo>  = (args:any) => <Logo {...args} />

Template.args = {
    height: 30,
    url: '/assets/logo.png',
    name: 'Blinkist'
}

export default LogoComponent;