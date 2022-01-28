var calculator1 = Desmos.GraphingCalculator(document.getElementById('calculator1'), { expressions: false, projectorMode: true });

    calculator1.setExpression({
        id: '1',
        latex: '(1, 3)'
    });

    calculator1.setExpression({
        id: '2',
        latex: '(2, 1)',
        showLabel: true
    });

    calculator1.setExpression({
        id: '3',
        latex: '(3, 5)'
    });

    calculator1.setMathBounds({
        left: -1,
        right: 7,
        bottom: -1,
        top: 6
    });

var calculator2 = Desmos.GraphingCalculator(document.getElementById('calculator2'), { expressions: false, projectorMode: true });

    calculator2.setExpression({
        id: '1',
        latex: 'y=x^2',
        color: Desmos.Colors.BLUE
    });

    calculator2.setExpression({
        id: '2',
        latex: '(-1, 1)',
        color: Desmos.Colors.RED,
        showLabel: true
    });

    calculator2.setExpression({
        id: '3',
        latex: '(2,4)',
        color: Desmos.Colors.ORANGE,
        showLabel: true
    });

    calculator2.setMathBounds({
        left: -7,
        right: 7,
        bottom: -3,
        top: 7
    });