module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./node_modules/@mui/material/**/*.{js,ts,jsx,tsx}",
    ],
    important: true,
    theme: {
        extend: {
           colors:{
            primary: "#1976d2"
           } 
        },
    },
    plugins: [],
    corePlugins: {
        preflight: false,
    },
};