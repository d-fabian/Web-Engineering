import ExecuteFunction from '../src/components/ExecuteFunction'

export default {
    title: 'Komponenten/Execute Function',
    component: ExecuteFunction,
}

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { ExecuteFunction },
    template: `<execute-function :isActive="$props.isActive" :numInputFields="$props.numInputFields" :solution="$props.solution"></execute-function>`,
})

export const executeFunction = Template.bind({})
executeFunction.args = {
    isActive: true,
    numInputFields: 2,
}