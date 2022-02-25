import Select from './select';

export default {
  title: 'Component/Form/Select',
  component: Select,
};

const Template = (args) => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {
  options: [
    {
      options: [
        { label: 'Group 1, option 1', value: 'value_1' },
        { label: 'Group 1, option 2', value: 'value_2' },
        { label: 'Group 1, option 3', value: 'value_3' },
      ],
    },
    { label: 'A root option', value: 'value_4' },
    { label: 'Another root option', value: 'value_5' },
  ],
};
