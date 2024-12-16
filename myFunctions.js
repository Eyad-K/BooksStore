<!-- ملف JavaScript - myFunctions.js -->
function validateReservationForm() {
    const nationalID = document.getElementById("nationalID").value;
    const regex = /^\d{11}$/;
    if (!regex.test(nationalID)) {
        alert("الرقم الوطني يجب أن يتكون من 11 خانة.");
        return false;
    }
    alert("تمت عملية الحجز بنجاح!");
    return true;
}

