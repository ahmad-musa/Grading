const show_grade = (subject, number, message) => {
    var node = document.createElement("li");
    var textnode = document.createTextNode(subject + '. Marks: ' + number + '. Grade: ' + message);
    node.appendChild(textnode);
    document.getElementById("list").appendChild(node);
}

function calculate_grade(subject, number) {

    if (number < 0 || number > 100) {
        // show_grade(subject, 'Give valid marks.');
        alert('Invalid input in ' + subject + ' section');
    } else if (number >= 33 && number < 40) {
        show_grade(subject, number, 'D');
    } else if (number >= 40 && number < 50) {
        show_grade(subject, number, 'C');
    } else if (number >= 50 && number < 60) {
        show_grade(subject, number, 'B');
    } else if (number >= 60 && number < 70) {
        show_grade(subject, number, 'A-');
    } else if (number >= 70 && number < 80) {
        show_grade(subject, number, 'A');
    } else if (number >= 80) {
        show_grade(subject, number, 'A+');
    } else {
        show_grade(subject, number, 'FAIL');
    }

}


const results = (sub1, sub2, sub3, sub4, sub5) => {

    document.getElementById("list").innerHTML = ' ';
    calculate_grade('Bangla', sub1);
    calculate_grade('English', sub2);
    calculate_grade('Mathematics', sub3);
    calculate_grade('Science', sub4);
    calculate_grade('ICT', sub5);


    ////// Total And Average ///////


    let total, average;

    total = sub1 + sub2 + sub3 + sub4 + sub5;
    average = total / 5;

    if (total <= 500 && average <= 100 && total > average && (sub1 <= 100 && sub2 <= 100 && sub3 <= 100 && sub4 <= 100 && sub5 <= 100)) {

        document.getElementById("list2").innerHTML = ' '; //for non repeating 

        var node = document.createElement("h4"); // Create a <h4> node
        var textnode = document.createTextNode(`Total and Average`); // Create a text node
        node.appendChild(textnode); // Append the text to <li>
        document.getElementById("list2").appendChild(node);


        var node = document.createElement("li"); // Create a <li> node
        var textnode = document.createTextNode(`Total Marks : ${total}`); // Create a text node
        node.appendChild(textnode); // Append the text to <li>
        document.getElementById("list2").appendChild(node);


        var node = document.createElement("li"); // Create a <li> node
        var textnode = document.createTextNode(`Average Marks : ${average}`); // Create a text node
        node.appendChild(textnode); // Append the text to <li>
        document.getElementById("list2").appendChild(node);
    } else {
        alert("Enter all valid marks");
    }


}

function allReset() {
    document.getElementById("frm").reset();
    document.getElementById("list").innerHTML = '';
    document.getElementById("list2").innerHTML = '';

}

function Resetall() {
    document.getElementById("list").innerHTML = '';
    document.getElementById("list2").innerHTML = '';
}