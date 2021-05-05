export const ThemesEnum = {
    dark: "dark",
    light: "light"
}

export class UserTheme {
    static userThemeStore = "usertheme";

    static changeCurrentTheme() {
        const html = document.documentElement;

        let currentTheme = html.dataset.theme;
        currentTheme = currentTheme == ThemesEnum.dark ? ThemesEnum.light : ThemesEnum.dark;

        localStorage.setItem(UserTheme.userThemeStore, currentTheme);

        html.dataset.theme = currentTheme;
    }

    static initTheme() {
        const savedTheme = localStorage.getItem(UserTheme.userThemeStore);
        const systemPrefer = window.matchMedia("(prefers-color-scheme: dark)");

        let currentTheme = systemPrefer.matches ? ThemesEnum.dark : ThemesEnum.light;
        if (savedTheme) currentTheme = savedTheme;

        systemPrefer.onchange = (mediaQueryList) => {
            const newTheme = mediaQueryList.matches ? ThemesEnum.dark : ThemesEnum.light;
            const html = document.documentElement;
            html.dataset.theme = savedTheme;
        };

        const html = document.documentElement;
        html.dataset.theme = currentTheme;
    }

    static GetCurrentTheme() {
        const savedTheme = localStorage.getItem(UserTheme.userThemeStore);
        const systemPrefer = window.matchMedia("(prefers-color-scheme: dark)");

        let currentTheme = systemPrefer.matches ? ThemesEnum.dark : ThemesEnum.light;
        if (savedTheme) currentTheme = savedTheme;

        return currentTheme;
    }
}