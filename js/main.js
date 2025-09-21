// tọa mảng có sãn
const arrayA = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const taoMang = () => {
    if (createArraySelect.value === "Mảng có sẵn") {
        document.getElementById("arrayA").innerHTML = `Mảng có sãn: arrayA = [${arrayA}] `;
    }
    else if (createArraySelect.value === "Tạo mảng mới") {
        document.getElementById("arrayB").innerHTML = `<input> </input>`;
    }
}

}