let Data = []; // Stores the generated dates

function Run() {
    // Get Input Date
    const bod = document.getElementById("BOD").value.trim(); 
    
    if (!bod) {
        console.error("No date entered!");
        return;
    }

    const date = new Date(bod);
    
    if (isNaN(date.getTime())) {
        console.error("Invalid date entered!");
        return;
    }

    const BOY = date.getFullYear(); // Birth Year
    const currentYear = new Date().getFullYear();

    const month = date.getMonth(); // Birth Month (0-based)
    const day = date.getDate(); // Birth Day

    Data = []; // Clear previous data

    // Loop from Birth Year to Current Year
    for (let i = BOY; i <= currentYear; i++) {
        let newDate = new Date(i, month, day);
        let dayName = newDate.toLocaleDateString("en-US", { weekday: "long" });

        Data.push({
            Year: `${day.toString().padStart(2, "0")}-${(month + 1).toString().padStart(2, "0")}-${i}`,
            Day: dayName
        });
    }
    
    // Show output in console (or update UI as needed)
    // console.table(Data);
    showRow()
}
function showRow(){
    const showRow = document.getElementById("showRow")

    for(let i= 0 ;i<Data.length;i++){
        showRow.innerHTML += `
            <tr>
                <td>${Data[i].Year}</td>
                <td>${Data[i].Day}</td>
            </tr>
        `
    }

}
