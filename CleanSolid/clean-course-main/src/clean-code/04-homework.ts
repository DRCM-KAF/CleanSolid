(() => {
    
    // Resolver sin la triple condicional dentro del if
    function isRedFruit(fruit: string): boolean {
        const redFruits = ['manzana', 'cereza', 'ciruela'];

        return redFruits.includes(fruit);
    }

    // Simplificar esta función
     function getFruitsByColor(color: string): string[] {

        const fruits: { [key: string]: string[] } = {
            red: ['manzana', 'fresa'],
            yellow: ['piña', 'banana'],
            purple: ['moras', 'uvas']
        };

        if (fruits[color]) {
            return fruits[color];
        } else {
            throw Error('the color must be: red, yellow, purple');
        }
    }

    // Simplificar esta función
    let isFirstStepWorking = true;
    let isSecondStepWorking = true;
    let isThirdStepWorking = true;
    let isFourthStepWorking = true;

    function workingSteps() {

        if (!isFirstStepWorking) {
            return 'First step broken.';
        }

        if (!isSecondStepWorking) {
            return 'Second step broken.';
        }

        if (!isThirdStepWorking) {
            return 'Third step broken.';
        }

        if (!isFourthStepWorking) {
            return 'Fourth step broken.';
        }

        return 'Working properly!';
    }

    // isRedFruit
    console.log({ isRedFruit: isRedFruit('cereza'), fruit: 'cereza' });
    console.log({ isRedFruit: isRedFruit('piña'), fruit: 'piña' });

    //getFruitsByColor
    console.log({ redFruits: getFruitsByColor('red') });
    console.log({ yellowFruits: getFruitsByColor('yellow') });
    console.log({ purpleFruits: getFruitsByColor('purple') });

    // workingSteps
    console.log({ workingSteps: workingSteps() }); 

})();