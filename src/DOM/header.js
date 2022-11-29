function renderHeader(){
    var header = document.getElementById('header')
    var pageName = document.createElement('div')
    pageName.setAttribute('id','pageName')
    pageName.textContent = "My Todo List"

    header.replaceChildren(pageName)
}

export{renderHeader}