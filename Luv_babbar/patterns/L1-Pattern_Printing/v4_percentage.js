function calculatePercentage(totalMarks, obtainedMarks) {
    if (totalMarks === 0) return "0.00";

    let percentage = (obtainedMarks / totalMarks) * 100;
    // return Math.round(percentage * 100) / 100; //o/p-> 75(not 75.00)
    return percentage.toFixed(2);
}

console.log(calculatePercentage(100, 75));   // 75.00
console.log(calculatePercentage(200, 150));  // 75.00
console.log(calculatePercentage(1000, 900)); // 90.00