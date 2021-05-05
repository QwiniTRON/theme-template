export class StrategyManager {
    static strategies = [];

    static addStrategy(strategy) {
        this.strategies.push(strategy);
    }

    static removeStrategy(stretegy) {
        let strategyIndex = this.strategies.findIndex(el => el == stretegy);
        if (!strategyIndex) return;

        this.strategies.splice(strategyIndex, 1);
    }

    static InitStrategies() {
        for (let i = 0; i < this.strategies.length; i++) {
            const strategy = this.strategies[i];
            const elements = document.querySelectorAll(`[data-${strategy.name}]`);

            if (!elements) continue;
            Array.prototype.forEach.call(elements, strategy.handler);
        }
    }

    static CreateStrategy(name, handler) {
        StrategyManager.addStrategy({ name, handler });
    }
}
