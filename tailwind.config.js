module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
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
        variants: {
            extend: {},
        },
        plugins: [],
    }
}