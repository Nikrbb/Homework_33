`use strict`;

(function () {
   
    const ulList = document.getElementById(`ul-list`);
    
    const form = document.getElementById(`form`);
    const ul = document.createElement(`ul`);
    ul.className = `list-group col`;


    form.addEventListener(`submit`, event => {

        const liItem = document.createElement(`li`);
        liItem.className = `list-group-item title`;
        liItem.style.marginBottom = `10px`;
        liItem.style.borderTopWidth = `1px`;
        


        event.preventDefault();
        
        
        const obj = {};
        
        const inputs = Array.from(
            event.target.querySelectorAll(`input`)
        );

        inputs.forEach(item => {
            obj[item.name] = item.value;            
            item.value = null;
        });

        ulList.style.flexBasis = `40%`;
        liItem.innerHTML = `${Object.keys(obj)[0]}: ${obj.title} <br/> ${Object.keys(obj)[1]}: ${obj.description}`;

        if (Boolean(document.querySelector(`#ul-list ul`))) {
            ulList.prepend(ul);
            ul.append(liItem);
        } else  {
            ulList.prepend(ul);
            setTimeout(() => {
                ul.append(liItem);
            }, 1000)
        }
    })     
                    
    const input = document.querySelectorAll(`.form-control`);

    input.forEach(item => {
        
        item.addEventListener(`focus`, event => {
            if (item.value === ``) {
                event.target.style.boxShadow = `0 0 0 0.25rem hsla(0, 94%, 79%, 0.548)`;
                event.target.style.borderColor = `hsla(0, 94%, 79%, 0.548)`;
            }
        });

        item.addEventListener(`input`, event => {
            if (item.value === ``) {
                event.target.style.boxShadow = `0 0 0 0.25rem hsla(0, 94%, 79%, 0.548)`;
                event.target.style.borderColor = `hsla(0, 94%, 79%, 0.548)`;
            }
            else {
                event.target.style.boxShadow = `0 0 0 0.25rem rgb(13 110 253 / 25%)`;
                event.target.style.borderColor = `#86b7fe`;
            }
            
        });

        item.addEventListener(`blur`, event => {
            event.target.style.boxShadow = ``;
            event.target.style.borderColor = ``;
            
        });
    })
    

})()