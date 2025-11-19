function generateCharacter() {
    let skin = document.getElementById("skin").value;
    let hair = document.getElementById("hair").value;
    let eyes = document.getElementById("eyes").value;
    
    let resultText = `
        الشخصية:
        <br>لون البشرة: ${skin}
        <br>لون الشعر: ${hair}
        <br>لون العيون: ${eyes}
    `;

    document.getElementById("result").innerHTML = resultText;
}
