document.getElementById("submitBtn").onclick = function () {
    checkAnswers();
};

function checkAnswers() {
    let q1 = document.querySelector('input[name="q1"]:checked');
    if (!q1) { alert("Answer all questions!"); return; }
    if (q1.value == "B") { q1.parentElement.style.background = "lightgreen"; }
    else { q1.parentElement.style.background = "lightcoral"; }

    let q2 = document.querySelector('input[name="q2"]:checked');
    if (!q2) { alert("Answer all questions!"); return; }
    if (q2.value == "B") { q2.parentElement.style.background = "lightgreen"; }
    else { q2.parentElement.style.background = "lightcoral"; }

    let q3 = document.querySelector('input[name="q3"]:checked');
    if (!q3) { alert("Answer all questions!"); return; }
    if (q3.value == "C") { q3.parentElement.style.background = "lightgreen"; }
    else { q3.parentElement.style.background = "lightcoral"; }

    let q4 = document.querySelector('input[name="q4"]:checked');
    if (!q4) { alert("Answer all questions!"); return; }
    if (q4.value == "A") { q4.parentElement.style.background = "lightgreen"; }
    else { q4.parentElement.style.background = "lightcoral"; }

    let q5 = document.querySelector('input[name="q5"]:checked');
    if (!q5) { alert("Answer all questions!"); return; }
    if (q5.value == "C") { q5.parentElement.style.background = "lightgreen"; }
    else { q5.parentElement.style.background = "lightcoral"; }

    let score = 0;
    if (q1.value == "B") score++;
    if (q2.value == "B") score++;
    if (q3.value == "C") score++;
    if (q4.value == "A") score++;
    if (q5.value == "C") score++;

    document.getElementById("result").innerHTML = "You got " + score + " out of 5 correct.";
}
