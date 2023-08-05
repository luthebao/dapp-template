const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            keyframes: {
                'open-menu': {
                    "0%": {
                        "left": "-100%",
                    },
                    "100%": {
                        "left": "0",
                    },
                },
                'close-menu': {
                    "0%": {
                        "left": "0",
                    },
                    "50%": {
                        "left": "-80%",
                    },
                    "100%": {
                        "left": "-100%",
                    },
                },
            },
            "animation": {
                "open-menu": "open-menu 0.5s ease-in-out forwards",
                "close-menu": "close-menu 0.5s ease-in-out forwards",
            }
        },
        colors: {
            ...colors,
            disabled: {
                DEFAULT: '#21292d',
                text: '#394849'
            },
            border: {
                DEFAULT: '#fff',
                1: '#fff'
            },
            color: {
                text: {
                    menu: {
                        DEFAULT: "#a4a7a9",
                        selected: "#fff",
                        hover: "#e8e9e9",
                    },
                    title: "#dcdcfe",
                    subtitle: "#2a2a4b",
                    btn: {
                        DEFAULT: "#fff",
                        disabled: "#fff"
                    }
                },
                component: {
                    DEFAULT: "#1d232a",
                    container: "#33383f",
                    input: "#33383f",
                    iconbtn: "#1d232a",
                    tab: "#606569",
                    hover: "#61DFFF",
                    ring: "#6262b0",
                    disabled: "#33383f",
                    img: "#1c1c32",
                },
                bg: '#4c4e61',
                bg2: '#628ea1',
                bg3: '#153C4D',
                bg4: '#466573',
                bg5: '#8DCBE61f',
                bg6: '#4c82fb3d',
                bg7: '#3c79fd',
                bg8: '#5b6a8a3d',
                bg9: '#ffffff0e',
                bg10: '#8808084d',
                bg11: '#00000033',
                bg12: '#466573',
                bg13: '#7070c9',
                text1: '#0e1417',
                text2: '#fff',
                text3: '#fd766b',
                text4: '#4c82fb',
                text5: '#2667f1',
                text6: '#e7dfdf',
                text7: '#7e99b0cc',
                text8: '#8DCBE6',
                text9: '#7eb6cf',
                border1: '#dc3545',
                border2: '#000',
                border3: '#880808',
                border4: '#6c6c7b33',
                icon: {
                    wait: '#ffc512',
                    pending: '#49a766',
                    reject: '#dc3545',
                }
            },
        }
    },
    plugins: [],
}