import { renderContent } from "./content"

function renderHeader(){
    var header = document.getElementById('header')
    var pageName = document.createElement('div')
    pageName.setAttribute('id','pageName')
    pageName.textContent = "My Todo List"

    pageName.addEventListener('click', (_) => {
        renderContent('General')
    })

    header.replaceChildren(pageName)
}

export{renderHeader}