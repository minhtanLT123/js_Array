// tạo mảng có sãn
let arrayA = [];
const taoMang = () => {

    if (createArraySelect.value === "Mảng có sẵn") {
        arrayA = [-3, -2, -1, 0, 1, 7, 8, 9, 10, 2, 3, 4, 5, 6]
        // arrayA = [-3, 0, 7]
        document.getElementById("arrayInputShow").innerHTML = `Mảng A =  [${arrayA}] `;
        document.getElementById("arrayInputShow").classList.remove("hidden");
        document.getElementById("arrayInput").classList.add("hidden");
        document.getElementById("btnAddArray").classList.add("hidden");

    }
    else if (createArraySelect.value === "Tạo mảng mới") {
        document.getElementById("arrayInputShow").classList.add("hidden");
        document.getElementById("arrayInput").classList.remove("hidden");
        document.getElementById("btnAddArray").classList.remove("hidden");




    }
    else {

        arrayA = [];
    }
}
function addArray() {

    document.getElementById("arrayInputShow").classList.remove("hidden");
    document.getElementById("arrayInput").classList.add("hidden");
    document.getElementById("btnAddArray").classList.add("hidden");

}

//1. tổng các số dương trong mảng
document.getElementById("tongsoduong").onclick = function () {
    let tongSoDuong = 0;

    for (i = 0; i < arrayA.length; i++) {
        if (arrayA[i] > 0) {
            tongSoDuong += arrayA[i];
        }
    }
    document.getElementById("kequa1").innerHTML = tongSoDuong;
}

//2. đếm có ba nhiêu số dương trong mảng
document.getElementById("demsoduong").onclick = function () {
    let dem = 0;

    for (i = 0; i < arrayA.length; i++) {
        if (arrayA[i] > 0) {
            dem += 1;
        }
    }
    document.getElementById("kequa2").innerHTML = dem;
}
//3.  tìm số nhỏ nhất trong mảng
document.getElementById("timsonhonhat").onclick = function () {
    let min = arrayA[0];

    for (i = 0; i < arrayA.length; i++) {
        if (min > arrayA[i]) {
            min = arrayA[i];
        }
    }
    document.getElementById("kequa3").innerHTML = min;
}
// 4. tìm số dương nhỏ nhất
document.getElementById("timsoduongmin").onclick = function () {
    let mind = Infinity;

    for (let i = 0; i < arrayA.length; i++) {
        if (mind > 0 && arrayA[i] < mind) {
            mind = arrayA[i];
        }

    }



    document.getElementById("kequa4").innerHTML = mind;
}
//5. Tìm số chẵn cuối cùng trong mảng. Nếu mảng không có giá trị chẵn thì trả về -1.
document.getElementById("timchancuoi").onclick = function () {
    let chan = arrayA[0];

    for (i = 0; i < arrayA.length; i++) {
        if (arrayA[i] % 2 === 0) {
            chan = arrayA[i];
        }


    }
    if (chan === arrayA[0] && arrayA[0] % 2 !== 0) {
        chan = -1;
    }
    document.getElementById("kequa5").innerHTML = chan;
}

// 6. Đổi chỗ 2 giá trị trong mảng theo vị trí (Cho nhập vào 2 vị trí muốn đổi chỗ giá trị).
document.getElementById("doiso").onclick = function () {
    let chan = arrayA[0];

    for (i = 0; i < arrayA.length; i++) {
        if (arrayA[i] % 2 === 0) {
            chan = arrayA[i];
        }
    }

    document.getElementById("kequa6").innerHTML = chan;
}

//7. Sắp xếp mảng theo thứ tự tăng dần.
document.getElementById("tangdan").onclick = function () {
    let newArrayA = [];

    for (i = 0; i < arrayA.length - 1; i++) {
        for (j = i + 1; j < arrayA.length; j++) {
            if (arrayA[i] > arrayA[j]) {
                temp = arrayA[i];
                arrayA[i] = arrayA[j];
                arrayA[j] = temp;
            }
        }

    }
    newArrayA = arrayA;

    document.getElementById("kequa7").innerHTML = `[${newArrayA}]`;
}

//8. Tìm số nguyên tố đầu tiên trong mảng. Nếu mảng không có số nguyên tố thì trả về – 1.
document.getElementById("songuyento").onclick = function () {

    // Hàm kiểm tra số nguyên tố
    function isPrime(n) {
        if (n <= 1) return false;
        if (n === 2) return true;
        if (n % 2 === 0) return false;
        const sqrt = Math.sqrt(n);
        for (let i = 3; i <= sqrt; i += 2) {
            if (n % i === 0) return false;
        }
        return true;
    }

    let result = -1;
    for (let i = 0; i < arrayA.length; i++) {
        if (isPrime(arrayA[i])) {
            result = arrayA[i];
            break;
        }
    }

    document.getElementById("kequa8").innerHTML = result;
}

//9. Nhập thêm 1 mảng số thực, tìm xem trong mảng có bao nhiêu số nguyên?
// document.getElementById("songuyen").onclick = function () {

//     for (i = 0; i < arrayA.length - 1; i++) {


//     }
//     document.getElementById("kequa9").innerHTML = `[${newArrayA}]`;
// }

//10. So sánh số lượng số dương và số lượng số âm xem số nào nhiều hơn.
document.getElementById("amduong").onclick = function () {
    let duong = 0;
    let am = 0;
    for (i = 0; i < arrayA.length; i++) {
        if (arrayA[i] > 0) {
            duong += 1;

        }
        else if (arrayA[i] < 0) {
            am += 1;
        }
    }
    if (duong > am) {
        document.getElementById("kequa10").innerHTML = `Số dương nhiều hơn với ${duong} số dương và ${am} số âm. `;
    }
    else if (duong < am) {
        document.getElementById("kequa10").innerHTML = `Số âm nhiều hơn với ${am} số âm và ${duong} số dương. `;
    }
    else {
        document.getElementById("kequa10").innerHTML = `Cân kèo!`;
    }


}
