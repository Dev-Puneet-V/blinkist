import { ComponentStory, ComponentMeta } from '@storybook/react';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import Icon from './index';
const IconComponent = {
    title: "atom/Icon",
    component: Icon,
} as ComponentMeta<typeof Icon>;

export const Alarm: ComponentStory<typeof Icon> = (args) => <Icon icon={<AccessAlarmIcon color="primary" />}></Icon>;

export default IconComponent;