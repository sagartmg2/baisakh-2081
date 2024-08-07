/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "primary-dark": "#0D0E43",
                primary: "#7E33E0",
                "primary-light": "#8A8FB9",
                secondary: "#FB2E86",
            },
        },
    },
    plugins: [],
}
