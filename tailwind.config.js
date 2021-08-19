const colors = require('tailwindcss/colors')

module.exports = {
    mode: 'jit',
    purge: {
        enabled: true,
        // enabled: process.env.TAILWIND_MODE === 'build',
        content: ['./src/**/*.{html,ts}']
    },
    darkMode: 'media', // or 'media' or 'class'
    theme: {
        colors: {
            ...colors,
            primary: colors.blue,
            secondary: colors.purple,
            info: colors.lightBlue,
            warning: colors.orange,
            danger: colors.red,
            success: colors.green,
            dark: colors.gray,
            light: colors.trueGray
        },
        container: {
            padding: '2rem',
        },
        fontFamily: {
            'sans': ['Open Sans', 'ui-sans-serif', 'system-ui'],
        },
        backgroundColor: theme => ({
            ...theme('colors'),
            primary: colors.blue,
            secondary: colors.purple,
            info: colors.lightBlue,
            warning: colors.orange,
            danger: colors.red,
            success: colors.green,
            dark: colors.gray,
            light: colors.trueGray
        })
    },
    variants: {},
    plugins: [],
};