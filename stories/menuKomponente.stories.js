import MenuKomponente from "./../src/components/MenuKomponente";

export default {
    title: 'Komponenten/Menu Komponente',
    component: MenuKomponente,
}

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { MenuKomponente },
    template: `<menu-komponente :is-vertical="$props.isVertical" :button-labels="$props.buttonLabels"></menu-komponente>`
});

export const menuKomponente = Template.bind({});
menuKomponente.args = {
    isVertical: false,
    buttonLabels: ['HTML', 'CSS', 'JavaScript']
};

