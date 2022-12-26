import { renderContent } from "./content"
import { toggleSelected } from "./sidebar"

function renderHeader(){
    var header = document.getElementById('header')
    var pageName = document.createElement('div')
    pageName.setAttribute('id','pageName')
    pageName.textContent = "My Todo List"

    pageName.addEventListener('click', (_) => {
        var general = document.getElementById('general-task')
        toggleSelected(general)
        renderContent('General')
    })

    header.replaceChildren(pageName)
}

export{renderHeader}