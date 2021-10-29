function handleSubmit() {
    var pregnancies = document.getElementById('pregnancies').value;
    var glucose = document.getElementById('glucose').value;
    var bp = document.getElementById('bp').value;
    var sk = document.getElementById('sk').value;
    var insulin = document.getElementById('insulin').value;
    var bmi = document.getElementById('bmi').value;
    var dpf = document.getElementById('dpf').value;
    var age = document.getElementById('age').value;
    localStorage.setItem("age2", age);
    localStorage.setItem("dpf2", dpf);
    localStorage.setItem("bmi2", bmi);
    localStorage.setItem("insulin2", insulin);
    localStorage.setItem("sk2", sk);
    localStorage.setItem("bp2", bp);


    localStorage.setItem("preg", pregnancies);
    localStorage.setItem("glu", glucose);

    return false;

}