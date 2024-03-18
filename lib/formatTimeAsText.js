function timeValueTitle (n, word ){

    if (word === 'h') {
        if (n == 1 || n === 21) {
            return 'valanda';
        } else if (n > 9 && n < 20) {
            return 'valandu';
        } else if (n === 0) {
            return 'valandu';
        } else {
            return 'valandos';
        }
    }

    if (word === 'm') {
        if (n % 10 === 0) {
            return 'minuciu';
        } else if (n > 10 && n < 20) {
            return 'minuciu';
        } else if (n % 10 === 1) {
            return 'minute';
        } else {
            return 'minutes'
        }
    }

    if (word === 's') {
        if (n % 10 === 0) {
            return 'sekundziu';
        } else if (n > 10 && n < 20) {
            return 'sekundziu';
        } else if (n % 10 === 1) {
            return 'sekunde';
        } else {
            return 'sekundes'
        }
    }

    return '';
}


   


export { timeValueTitle }
