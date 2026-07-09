document
    .getElementById("theme-toggle")
    .addEventListener("click", () => {
        const $lightTheme = document.getElementById("light-theme")
        if ($lightTheme.getAttribute("disabled") === null) {
            $lightTheme.setAttribute("disabled", "")
        } else {
            $lightTheme.removeAttribute("disabled")
        }
    })
