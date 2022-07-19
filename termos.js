    let btn = document.getElementById("btn")
    let check = document.getElementById("check")
    btn.disabled = true
    check.addEventListener("change", function () {
        if (this.checked === true)
            btn.disabled = false
        else {
            btn.disabled = true
        }
    })
