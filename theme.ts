import { buildLegacyTheme } from "sanity";

const props={
    "--my-white":"#ffffff",
    "--my-black":"#212121",
    "--my-brand": "#0071ff",
    "--my-green": "#21fc4b",
    "--my-red": "#f03939",
    "--my-yellow": "#f2ff00",

};
export const myTheme = buildLegacyTheme({
    //base theme colors
    "--black": props["--my-black"],
    "--white": props["--my-white"],

    "--gray": "#666",
    "--gray-base": "#666",
    //components colors
    "--component-bg": props["--my-black"],
    "--component-text-color": props["--my-white"],

    "--brand-primary": props["--my-brand"],

    //buttons
    "--default-button-color": "#666",
    "--default-button-primary-color": props["--my-brand"],
    "--default-button-success-color": props["--my-green"],
    "--default-button-danger-color": props["--my-red"],
    "--default-button-warning-color": props["--my-yellow"],

    //State
    "--state-info-color": props["--my-brand"],
    "--state-success-color": props["--my-green"],
    "--state-warning-color": props["--my-yellow"],
    "--state-danger-color": props["--my-red"],

    //navbar

    "--main-navigation-color": props["--my-black"],
    "--main-navigation-color--inverted": props["--my-white"],

    "--focus-color": props["--my-brand"],

});
