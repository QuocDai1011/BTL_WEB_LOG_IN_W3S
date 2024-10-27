function validateForm() {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const show = document.querySelector('.checked');

    // Kiểm tra email
    if (email === "") {
        show.innerHTML = 'Email is empty.';
        return false;
    }
    if (!emailPattern.test(email)) {
        show.innerHTML = 'Email failed.';
        return false;
    }

    // Kiểm tra password
    if (password === "") {
        show.innerHTML = 'Please enter your password.';
        return false;
    }
    if (password.length < 6) {
        show.innerHTML = 'Password must have at least 6 character.';
        return false;
    }

    // Nếu không có lỗi
    show.innerHTML = 'Log in success.';
    return true;
}