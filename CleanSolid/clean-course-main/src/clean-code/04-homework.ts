
(() => {

    // 1. Verificar si una fruta es roja
    function isRedFruit(fruit: string): boolean {
        const redFruits = ['manzana', 'cereza', 'ciruela'];
        return redFruits.includes(fruit);
    }

    // 2. Obtener frutas por color
    function getFruitsByColor(color: string): string[] {

        const fruits: { [key: string]: string[] } = {
            red: ['manzana', 'fresa'],
            yellow: ['piña', 'banana'],
            purple: ['moras', 'uvas']
        };

        const selectedFruits = fruits[color];

        if (!selectedFruits) {
            throw new Error('the color must be: red, yellow, purple');
        }

        return selectedFruits;
    }

    // 3. Verificar los pasos de trabajo
    const workingSteps = (): string => {

        const steps = [
            isFirstStepWorking,
            isSecondStepWorking,
            isThirdStepWorking,
            isFourthStepWorking
        ];

        const brokenStep = steps.findIndex(step => !step);

        if (brokenStep !== -1) {
            return `${['First', 'Second', 'Third', 'Fourth'][brokenStep]} step broken.`;
        }

        return 'Working properly!';
    };

    let isFirstStepWorking = true;
    let isSecondStepWorking = true;
    let isThirdStepWorking = true;
    let isFourthStepWorking = true;

    // isRedFruit
    console.log({ isRedFruit: isRedFruit('cereza'), fruit: 'cereza' });
    console.log({ isRedFruit: isRedFruit('piña'), fruit: 'piña' });

    // getFruitsByColor
    console.log({ redFruits: getFruitsByColor('red') });
    console.log({ yellowFruits: getFruitsByColor('yellow') });
    console.log({ purpleFruits: getFruitsByColor('purple') });

    // workingSteps
    console.log({ workingSteps: workingSteps() });

})();
