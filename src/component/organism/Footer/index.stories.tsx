import {ComponentMeta, ComponentStory} from '@storybook/react';
import Footer from '.';
import {BrowserRouter as Router} from 'react-router-dom';

const FooterComponent = {
    title : 'organism/Footer',
    component: Footer
} as ComponentMeta<typeof Footer>;

export const Template: ComponentStory<typeof Footer>  = (args:any) => {
    return (<Router>
        <Footer {...args} />
    </Router>
    )
}
Template.args = {
    sx: `{{
        height:'367px',
        width:'100%', 
        backgroundColor: '#F1F6F4',
        display: 'flex',
        position: 'sticky',
        top: '100vh'
    }}`
}


export default FooterComponent;