import Vue from "vue";
import Button from "./Button";
import AnimatedLine from "./AnimatedLine";
import ButtonGroup from "./ButtonGroup";
import Calendar from "./Calendar";
import CheckBox from "./CheckBox";
import DateInput from "./DateInput";
import DateTimeInput from "./DateTimeInput";
import Loading from "./Loading";
import SelectInput from "./SelectInput";
import StatusLabel from "./StatusLabel";
import TextInput from "./TextInput";

const Components = {
    Button,
    AnimatedLine,
    ButtonGroup,
    Calendar,
    CheckBox,
    DateInput,
    DateTimeInput,
    Loading,
    SelectInput,
    StatusLabel,
    TextInput,
};

Object.keys(Components).forEach(name => {
    Vue.component(name, Components[name]);
});
