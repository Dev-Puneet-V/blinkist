import Card from '.';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import image from '../../../assets/book.png';

const CardComponent = {
    title : 'organism/Card',
    component: Card,
    parameters: {
        actions: {
          handles: ['mouseover'],
        },
    },
} as ComponentMeta<typeof Card>;

export const Template: ComponentStory<typeof Card>  = (args:any) => <Card {...args} />


export const Library = Template.bind({});

Library.args = {
    imgHeight: 300,
    url: image,
    bookName: "Being Boss",
    writerName: "Kathleen Shannon and Emily...",
    timeRead: "13-minute read",
    width: 350,
    progress: 60,
    inLibrary: true,
}


export const NotInLibrary = Template.bind({})

NotInLibrary.args = {
    imgHeight: 300,
    url: image,
    bookName: "Being Boss",
    writerName: "Kathleen Shannon and Emily...",
    timeRead: "13-minute read",
    width: 350,
    inLibrary: false,
}

export default CardComponent;