checkPassword = function() {
    const password = document.getElementById("password").value;
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, "0");
    const day = today.getDate().toString().padStart(2, "0");
    const currentDate = year + month + day;
    if (password === currentDate) {
        window.location.href = "1.html";
    } else {
        alert("密码错误，请联系坤坤！");
    }
}