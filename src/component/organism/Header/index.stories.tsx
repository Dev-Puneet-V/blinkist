import {ComponentMeta, ComponentStory} from '@storybook/react';
import Header from '.';
import LogoImage from '../../../assets/logo.png';
const HeaderComponent = {
    title : 'organism/Header',
    component: Header
} as ComponentMeta<typeof Header>;

export const Template: ComponentStory<typeof Header>  = (args:any) => <Header {...args} />
Template.args = {
    url: LogoImage,
    name: 'Blinkist'
}

export default HeaderComponent;