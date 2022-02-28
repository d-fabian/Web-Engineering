import WordCount from "../src/components/WordCount";
import Vue from "vue";

Vue.config.productionTip = false

export default {
    title: 'Komponenten/Word Count',
}

export const wordCount = () => ({
    components: {WordCount},
    template: '<WordCount></WordCount>'
})