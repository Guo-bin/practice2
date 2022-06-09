const td = document.querySelectorAll("td");
const tr = document.querySelectorAll("tr");
console.log(tr[0]);
const button = document.querySelector("button");
const h1 = document.querySelector("h1");
console.log(td);
console.log(h1);
let people = 1;
let win = false;
td.forEach((item) => {
    item.addEventListener("click", (e) => {
        if (people == 1) {
            item.innerHTML = `O`;
            people = 2;
        } else {
            item.innerHTML = "X";
            people = 1;
        }
        console.log(tr[0].children[0].innerText);
        for (let i = 0; i < 3; i++) {
            if (
                tr[i].children[0].innerText == "O" &&
                tr[i].children[1].innerText == "O" &&
                tr[i].children[2].innerText == "O"
            ) {
                console.log("END");
                if (people == 1) {
                    h1.innerHTML = "2贏了";
                } else {
                    h1.innerHTML = "1贏了";
                }
                win = true;
            }
        }

        for (let i = 0; i < 3; i++) {
            if (
                tr[i].children[0].innerText == "X" &&
                tr[i].children[1].innerText == "X" &&
                tr[i].children[2].innerText == "X"
            ) {
                console.log("END");
                if (people == 1) {
                    h1.innerHTML = "2贏了";
                } else {
                    h1.innerHTML = "1贏了";
                }
                win = true;
            }
        }

        for (let i = 0; i < 3; i++) {
            if (
                tr[0].children[i].innerText == "O" &&
                tr[1].children[i].innerText == "O" &&
                tr[2].children[i].innerText == "O"
            ) {
                console.log("END");
                if (people == 1) {
                    h1.innerHTML = "2贏了";
                } else {
                    h1.innerHTML = "1贏了";
                }
                win = true;
            }
        }

        for (let i = 0; i < 3; i++) {
            if (
                tr[0].children[i].innerText == "X" &&
                tr[1].children[i].innerText == "X" &&
                tr[2].children[i].innerText == "X"
            ) {
                console.log("END");
                if (people == 1) {
                    h1.innerHTML = "2贏了";
                } else {
                    h1.innerHTML = "1贏了";
                }
                win = true;
            }
        }
        if (
            tr[0].children[0].innerText == "O" &&
            tr[1].children[1].innerText == "O" &&
            tr[2].children[2].innerText == "O"
        ) {
            console.log("END");
            if (people == 1) {
                h1.innerHTML = "2贏了";
            } else {
                h1.innerHTML = "1贏了";
            }
            win = true;
        }
        if (
            tr[0].children[0].innerText == "X" &&
            tr[1].children[1].innerText == "X" &&
            tr[2].children[2].innerText == "X"
        ) {
            console.log("END");
            if (people == 1) {
                h1.innerHTML = "2贏了";
            } else {
                h1.innerHTML = "1贏了";
            }
            win = true;
        }

        if (
            tr[0].children[2].innerText == "O" &&
            tr[1].children[1].innerText == "O" &&
            tr[2].children[0].innerText == "O"
        ) {
            console.log("END");
            if (people == 1) {
                h1.innerHTML = "2贏了";
            } else {
                h1.innerHTML = "1贏了";
            }
            win = true;
        }
        if (
            tr[0].children[2].innerText == "X" &&
            tr[1].children[1].innerText == "X" &&
            tr[2].children[0].innerText == "X"
        ) {
            console.log("END");
            if (people == 1) {
                h1.innerHTML = "2贏了";
            } else {
                h1.innerHTML = "1贏了";
            }
            win = true;
        }
    });
});

button.addEventListener("click", () => {
    td.forEach((item) => {
        console.log("HI");
        item.innerHTML = "";
        h1.innerHTML = "";
    });
});

let a = [1, 2, 3, 4, 5, "apple", false];

a.forEach((x) => {
    console.log(x);
});

for (let i = 0; i < a.length; i++) {
    console.log(a[i]);
}

//HE123123123
