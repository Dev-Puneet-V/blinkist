import Banner from '.';
import {ComponentMeta, ComponentStory} from '@storybook/react';
const BannerComponent = {
    title : 'molecule/Banner',
    component: Banner
} as ComponentMeta<typeof Banner>;

export const Template: ComponentStory<typeof Banner>  = (args:any) => <Banner {...args} />

Template.args = {
    heading: 'Explore Books on entrepreneurship',
    discription: 'Everything you need to know about thriving on a shoestring budget, making your first million, and hiring right from the start.',
    img: '/assets/banner.png'
}

export default BannerComponent;