function onOff() {
    document
        .querySelector('#modal')
        .classList
        .toggle("hide")
    document
        .querySelector('body')
        .classList
        .toggle("hideScroll")

    document
        .querySelector('#modal')
        .classList
        .toggle("addScroll")


};

function checkFields(event) {
    const valuesToCheck = [
        "title",
        "image",
        "category",
        "description",
        "link",
    ]

    const isEmputy = valuesToCheck.find(function (value) {
        const checkIfIsString = typeof event.target[value].value === "string";
        const checkIfIsEmputy = !event.target[value].value.trim()
        console.log(checkIfIsEmputy)
        if (checkIfIsString && checkIfIsEmputy) {
            return true
        }
    })

    if (isEmputy) {
        event.preventDefault()
        alert("Por favor, preencha todos os campos!")
    }
}


