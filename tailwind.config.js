module.exports = {
    important: true,
    // Active dark mode on class basis
    darkMode: "class",
    i18n: {
        locales: ["en-US"],
        defaultLocale: "en-US",
    },
    purge: {
        content: ["./pages/**/*.tsx", "./components/**/*.tsx"],
        // These options are passed through directly to PurgeCSS
    },
    theme: {
        extend: {
            backgroundImage: (theme) => ({
                check: "url('/icons/check.svg')",
                landscape: "url('/images/landscape/2.jpg')",
            }),
            backgroundColor: (theme) => ({
                'roxo1': '#420030',
                'roxo2': '#6F1250',
                'roxo3': '#511228',
                'roxo4': '#672E3D',
                'verde': '#2EC047',
                'vermelho': '#CC0000',
                'preto': '#272922',
                'amarelo': '#FDE31C',
                'branco': '#EEDCDA',
            }),
        },
    },
    variants: {
        extend: {
            backgroundColor: ["checked"],
            borderColor: ["checked"],
            inset: ["checked"],
            zIndex: ["hover", "active"],
        },
    },
    plugins: [
        'tailwindcss',
        'postcss-flexbugs-fixes', [
            'postcss-preset-env',
            {
                autoprefixer: {
                    flexbox: 'no-2009',
                },
                stage: 3,
                features: {
                    'custom-properties': false,
                },
            },
        ],
    ],
    future: {
        purgeLayersByDefault: true,
    },
};