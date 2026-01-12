document.addEventListener('DOMContentLoaded', function () {
    const loginBtn = document.getElementById('loginBtn');

    const correctEmail = "babe@gmail.com";
    const correctPassword = "031324";

    const modalEl = document.getElementById('statusModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalMessage = document.getElementById('modalMessage');
    const modalBtn = document.getElementById('modalBtn');

    const statusModal = new bootstrap.Modal(modalEl);

    function showModal(title, message, type = "error") {
        modalTitle.textContent = title;
        modalMessage.textContent = message;

        modalBtn.className = "btn"; // reset button class
        modalBtn.classList.add(type === "success" ? "btn-success" : "btn-error");

        statusModal.show();
    }

    loginBtn.addEventListener('click', function (event) {
        event.preventDefault();

        const email = document.getElementById('floatingInput').value.trim();
        const password = document.getElementById('floatingPassword').value.trim();

        if (!email) {
            showModal("Missing Email", "Please enter your username");
            return;
        }

        if (!password) {
            showModal("Missing Password", "Please enter your password");
            return;
        }

        if (email === correctEmail && password === correctPassword) {
            showModal(
                "Login Successful",
                "Login successful, redirecting...",
                "success"
            );

            setTimeout(() => {
                window.location.href = "landing/dashboard.html";
            }, 1500);
        } else {
            showModal(
                "Login Failed",
                "Incorrect email or password"
            );
        }
    });
});
