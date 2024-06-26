let notifications = document.querySelector('.notifications');
let success = document.getElementById('success');
let error = document.getElementById('error');
let warning = document.getElementById('warning');
let info = document.getElementById('info');

function createToast(type, icon, title, text){
    let newToast = document.createElement('div');
        newToast.innerHTML = `
            <div class="toast ${type}">
                <i class="${icon}"></i>            
                <div class="content">
                    <div class="title">${title}</div>
                    <span>${text}</span>
                </div>
                <i class="fa-solid fa-xmark"
                onclick="(this.parentElement).remove()"
                ></i>
            </div>`;
    notifications.appendChild(newToast);
    newToast.timeout = setTimeout(
         ()=>newToast.remove(), 5000
    )
}

success.onclick = function(){
    let type = 'success';
    let icon = 'fa-regular fa-circle-check';
    let title = 'Success';
    let text= 'Yeyyy! this is a success';
    createToast(type,icon,title,text);
}

error.onclick = function(){
    let type = 'error';
    let icon = 'fa-solid fa-circle-exclamation';
    let title = 'Error';
    let text= '0Oops! this is an error';
    createToast(type,icon,title,text);
}

warning.onclick = function(){
    let type = 'warning';
    let icon = 'fa-solid fa-triangle-exclamation';
    let title = 'Error';
    let text = 'Beware! this is a warning';
    createToast(type, icon, title, text);
}
info.onclick = function(){
    let type = 'info';
    let icon = 'fa-solid fa-circle-info';
    let title = 'Info';
    let text = 'Hola, this is an information';
    createToast(type, icon, title, text);
}