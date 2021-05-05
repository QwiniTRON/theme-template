import { StrategyManager } from './StrategyManager.js';
import { UserTheme, ThemesEnum } from './UserTheme.js';


window.addEventListener("load", function (e) {
    UserTheme.initTheme();

    StrategyManager.CreateStrategy("togglable", function (element, index) {
        const checkbox = element.querySelector("input");

        checkbox.addEventListener("change", () => {
            element.classList.toggle("_toggled");

            UserTheme.changeCurrentTheme();
        });

        const currentTheme = UserTheme.GetCurrentTheme();
        if(currentTheme == ThemesEnum.dark) element.classList.add("_toggled");
    });

    StrategyManager.InitStrategies();
}, { passive: true });