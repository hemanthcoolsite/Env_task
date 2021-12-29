var table = document.getElementById("details").getElementsByTagName('tbody')[0];
const searchBar = document.getElementById('searchBar');
const searchbut = document.getElementById('searchbut');
const login = document.getElementById('loginSub');
var mainHide = document.getElementById('main');
var modal = document.getElementById('id01');
mainHide.style.display = 'none';
login.addEventListener('click', () => {
    const user = document.getElementById('user').value;
    const psw = document.getElementById('psw').value;
    if (user == 'Krish' && psw == '12345') {
        document.getElementById('main').style.display = 'block';
        document.getElementById('loginHide').style.display = 'none';
    } else {
        document.getElementById('error').innerHTML = 'Wrong Username and Password';
        document.getElementById('error').style.color = 'red';
    };
});


function myf(ele) {
    searchbut.addEventListener('click', () => {
        const searchString = searchBar.value.toLowerCase();
        const filteredEnv = ele.filter((ch) => {
            return (
                ch.env_name.toLowerCase().includes(searchString) ||
                ch.ta_version.toLowerCase().includes(searchString) ||
                ch.ocs_version.toLowerCase().includes(searchString) ||
                ch.wsc_version.toLowerCase().includes(searchString) ||
                ch.db_type.toLowerCase().includes(searchString) ||
                ch.host_name.toLowerCase().includes(searchString)
            );
        });
        var row = table.parentElement.parentElement;
        for (let i = 0; i < 636; i++) {
            table.deleteRow(row.rowIndex);
        }
        displaySearchedData(filteredEnv);
    });
};

function displaySearchedData(data) {
    for (let item = 0; item <= data.length - 1; item++) {
        insertNewRecord(data[item]);
    };
    console.log(data.length);
};

async function loadCharacters() {
    try {
        let url = './output.json';
        const res = await fetch(url);
        data = await res.json();
        myData(data);
        myf(data);
    } catch (err) {
        console.error(err);
    }
}
loadCharacters();

function insertNewRecord(data) {
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.count;

    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.env_name;

    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.ta_version;

    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.ocs_version;

    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.wsc_version;

    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.db_type;

    cell7 = newRow.insertCell(6);
    cell7.innerHTML = data.host_name;

    cell8 = newRow.insertCell(7);
    cell8.innerHTML = data.os_login;

    cell9 = newRow.insertCell(8);
    cell9.innerHTML = data.os_password;
};

function myData(data) {
    document.getElementById("espan").innerHTML = data.length;
    for (let i = 0; i <= data.length - 1; i++) {
        insertNewRecord(data[i]);
    };
};

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    };
};

function release() {
    document.getElementById('id01').style.display = 'none';
};

function hide() {
    document.getElementById('id01').style.display = 'block';
};