import Image from '.';
import {ComponentMeta, ComponentStory} from '@storybook/react';
const ImageComponent = {
    title : 'atom/Image',
    component: Image
} as ComponentMeta<typeof Image>;

export const Template: ComponentStory<typeof Image>  = (args:any) => <Image {...args} />

Template.args = {
    height: 300,
    width: 280,
    src: '/assets/book.png',
    sx: {border: '1px solid grey'}
}

export default ImageComponent;