const getS = selector => document.querySelector(selector);
function editBtn() {
    if (getS('.bottom').lastElementChild.classList.contains('colors')) getS('.colors').remove();
    if (!getS('.style-block').classList.contains('hidden')) getS('.style-block').classList.add('hidden');
    getS('.edit-block').classList.remove('hidden');
    getS('.area').value = getS('.top').innerHTML;
}

function styleBtn() {
    if (!getS('.edit-block').classList.contains('hidden')) getS('.edit-block').classList.add('hidden');
    getS('.style-block').classList.remove('hidden');
}

function saveBtn() {
    getS('.top').innerHTML = getS('.area').value;
    getS('.edit-block').classList.add('hidden');
}

function fontSize() {
    getS('.top').style.fontSize = event.target.value;
}

function fontFamily() {
    getS('.top').style.fontFamily = event.target.value;
}

function fontWeight() {
    getS('.top').style.fontWeight = event.target.checked ? 'bold' : 'normal';
}

function fontStyle() {
    getS('.top').style.fontStyle = event.target.checked ? 'italic' : 'normal';
}

const colors = ['red', 'green', 'blue', 'yellow', 'gray', 'white', 'pink', 'coral', 'purple'];

function textColor() {
    getS('.bg-color').classList.remove('active');
    getS('.text-color').classList.add('active');
    if (getS('.bottom').lastElementChild.classList.contains('colors')) {
        getS('.colors').remove();
    }
    let str = '';
    for (let i = 0; i < colors.length; i++) {
        str += `<div class="color-box" style="background: ${colors[i]}" onclick="chooseTextColor()"></div>`;
    }
    let div = document.createElement('div');
    div.className = "colors";
    div.innerHTML = str
    getS('.bottom').append(div)
}
function chooseTextColor() {
    getS('.top').style.color = event.target.style.background;
    getS('.bottom').removeChild(event.target.parentElement);
    getS('.text-color').classList.remove('active');
}

function backgroundColor() {
    getS('.text-color').classList.remove('active');
    getS('.bg-color').classList.add('active');
    if (getS('.bottom').lastElementChild.classList.contains('colors')) {
        getS('.colors').remove();
    }
    let str = '';
    for (let i = 0; i < colors.length; i++) {
        str += `<div class="color-box" style="background: ${colors[i]}" onclick="chooseBgColor()"></div>`;
    }
    let div = document.createElement('div');
    div.className = "colors";
    div.innerHTML = str
    getS('.bottom').append(div)
}
function chooseBgColor() {
    getS('.top').style.backgroundColor = event.target.style.background;
    getS('.bottom').removeChild(event.target.parentElement);
    getS('.bg-color').classList.remove('active');
}

function addBtn() {
    getS('.second-step').classList.remove('hidden');
    getS('.first-step').classList.add('hidden');
}

function tableBox() {
    if (!getS('.list-box').classList.contains('hidden')) getS('.list-box').classList.add('hidden');
    getS('.table-box').classList.remove('hidden')

}
function listBox() {
    if (!getS('.table-box').classList.contains('hidden')) getS('.table-box').classList.add('hidden');
    getS('.list-box').classList.remove('hidden')

}

function createTable() {
    const countTr = getS('.countTr').value;
    const countTd = getS('.countTd').value;
    const widthTD = getS('.widthTD').value;
    const heightTD = getS('.heightTD').value;
    const borderWidth = getS('.borderWidth').value;
    const borderType = getS('.borderType').value;
    const borderColor = getS('.borderColor').value;
    let table = `<table >`
    for (let i = 1; i <= countTr; i++) {
        table += `<tr>`;
        for (let j = 1; j <= countTd; j++) {
            table += `<td style="width:${widthTD}px; height:${heightTD}px; border: ${borderWidth}px ${borderType} ${borderColor}">TD</td>`;
        }
        table += `</tr>`;
    }
    table += `</table>`;
    getS('.area').value += table;
    document.forms['form-create-table'].reset();
    getS('.second-step').classList.add('hidden');
    getS('.first-step').classList.remove('hidden');
    getS('.table-box').classList.add('hidden');
    document.forms['form-create'].reset();
}

function createList() {
    const countLi = getS('.countLi').value;
    const marks = getS('.marks').value;
    let list = `<ul type="${marks}">`;
    for (let i = 1; i <= countLi; i++) {
        list += `<li>item ${i}</li>`
    }
    list += `</ul>`;
    getS('.area').value += list;
    document.forms['form-create-list'].reset();
    getS('.second-step').classList.add('hidden');
    getS('.first-step').classList.remove('hidden');
    getS('.list-box').classList.add('hidden');
    document.forms['form-create'].reset();
}