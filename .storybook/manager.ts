import { addons } from '@storybook/manager-api';
import { create } from "@storybook/theming";

addons.setConfig({
    theme: create({
        base: "dark",
        colorPrimary: "#FFA824",
        colorSecondary: "#3D6E65",
        appBorderRadius: 8,
        appBorderColor: '#3D6E65',
        brandImage: "https://github.com/Roid-obi/logo-cvzn-ds/blob/main/front-end-cvzn.png?raw=true",
        brandTitle: 'CV Zaman Now',
    }),
});