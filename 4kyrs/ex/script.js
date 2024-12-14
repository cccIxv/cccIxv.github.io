document.getElementById("task").addEventListener("click", function () {
    const inputs = document.querySelectorAll(".cls");

    let sum = 0;

    inputs.forEach(input => {
        const value = parseFloat(input.value); 
        if (!isNaN(value)) { 
            sum += value;
        }
    });

    document.getElementById("sum").value = sum;
});
