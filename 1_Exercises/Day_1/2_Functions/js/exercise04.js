function calculateTip(amount, rating) {
    if (rating === 'Very good service'){
        return amount * 0.25;
    }
    if (rating === 'Good service'){
        return amount * 0.2;
    }if (rating === 'Neutral service'){
        return amount * 0.15;
    }if (rating === 'Bad service'){
        return 0;
    }

}
console.log(calculateTip(100,'Very good service'));
console.log(calculateTip(100,'Good service'));
console.log(calculateTip(100,'Neutral service'));
console.log(calculateTip(100,'Bad service'));