function saturdayFun(greeting='roller-skate') {
    const greetingMessage = `This Saturday, I want to ${greeting}!`;
    return greetingMessage;
}

function mondayWork(greeting='go to the office') {
    const greetingMessage = `This Monday, I will ${greeting}.`;
    return greetingMessage;
}

function wrapAdjective(symbol) {
    const fullMessage = function(adjective = 'special') {
        return `You are ${symbol}${adjective}${symbol}!`;
        };
        return fullMessage;
}