function generateSubseq(s) {
    let result = [];

    function solve(index, current) {

        // Base case
        if (index === s.length) {
            result.push(current);
            return;
        }

        // include character
        solve(index + 1, current + s[index]);

        // exclude character
        solve(index + 1, current);
    }

    solve(0, "");
    return result;
}

console.log(generateSubseq("abc"));