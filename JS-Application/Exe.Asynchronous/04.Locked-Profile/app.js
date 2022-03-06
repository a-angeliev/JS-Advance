function lockedProfile() {
    let url = "http://localhost:3030/jsonstore/advanced/profiles"
    let mainElemen = document.getElementById('main')
    mainElemen.innerHTML = ''
    fetch(url)
    .then(res=> res.json())
    .then(data =>{
        let userNumber = 0
        Object.entries(data).forEach(x=> console.log(x[1]))
        Object.entries(data).forEach(x=> {
            console.log(data);
            let profileDiv = document.createElement('div')
            profileDiv.classList.add("profile")
            
            let imgElement = document.createElement('img')
            imgElement.setAttribute("src", "./iconProfile2.png")
            imgElement.classList.add("userIcon")
            
            let createLableLock = document.createElement("label")
            createLableLock.textContent = "Lock"
            
            let createInputLock = document.createElement("input")
            createInputLock.setAttribute('type', 'radio')
            createInputLock.setAttribute('name', `user${userNumber}Locked`)
            createInputLock.setAttribute('value', 'lock')
            createInputLock.checked = true
            
            let createLableUnlocked = document.createElement('label')
            createLableUnlocked.textContent = "Unlock"

            let createInputUnlock = document.createElement("input")
            createInputUnlock.setAttribute('type', 'radio')
            createInputUnlock.setAttribute('name', `user${userNumber}Locked`)
            createInputUnlock.setAttribute('value', 'unlock')
            
            let createBr = document.createElement('br')
            let createHr = document.createElement('hr')
            
            let createLableUsername = document.createElement('label')
            createLableUsername.textContent = "Username"
            
            let createUsernameInput = document.createElement("input")
            createUsernameInput.setAttribute("type", "text")
            createUsernameInput.setAttribute("name", `user${userNumber}Username`)
            createUsernameInput.setAttribute("value", `${x[1].username}`)
            createUsernameInput.disabled = true
            createUsernameInput.readOnly = true

            let createDivHiddlenInfo = document.createElement('div')
            createDivHiddlenInfo.classList.add('hiddenInfo')

            let createLableEmail = document.createElement('label')
            createLableEmail.textContent = "Email"

            let createEmailInput = document.createElement("input")
            createEmailInput.setAttribute("type", "email")
            createEmailInput.setAttribute("name", `user${userNumber}Email`)
            createEmailInput.setAttribute("value", `${x[1].email}`)
            createEmailInput.disabled = true
            createEmailInput.readOnly = true

            let createLableAge = document.createElement('label')
            createLableAge.textContent = "Age"

            let createAgeInput = document.createElement('input')
            createAgeInput.setAttribute('type', 'email')
            createAgeInput.setAttribute('name', `user${userNumber}Age`)
            createAgeInput.setAttribute('value', `${x[1].age}`)
            createAgeInput.disabled = true
            createAgeInput.readOnly = true

            let createButton = document.createElement("button")
            createButton.textContent = 'Show more'

            let createHideButton = document.createElement("button")
            createHideButton.textContent = "Hide it"

            createButton.addEventListener('click', (e)=>{
                if(createInputUnlock.checked == true){
                    createDivHiddlenInfo.classList.remove('hiddenInfo')
                    createInputLock.checked = true
                    createButton.remove()
                    profileDiv.appendChild(createHideButton)
                }
            })

            createHideButton.addEventListener('click', (e)=>{
                if(createInputUnlock.checked == true){
                    createDivHiddlenInfo.classList.add('hiddenInfo')
                    createInputLock.checked = true
                    createHideButton.remove()
                    profileDiv.appendChild(createButton)
                }
            })



            createDivHiddlenInfo.appendChild(createHr)
            createDivHiddlenInfo.appendChild(createLableEmail)
            createDivHiddlenInfo.appendChild(createEmailInput)
            createDivHiddlenInfo.appendChild(createLableAge)
            createDivHiddlenInfo.appendChild(createAgeInput)

            profileDiv.appendChild(imgElement)
            profileDiv.appendChild(createLableLock)
            profileDiv.appendChild(createInputLock)
            profileDiv.appendChild(createLableUnlocked)
            profileDiv.appendChild(createInputUnlock)
            profileDiv.appendChild(createBr)
            profileDiv.appendChild(createHr)
            profileDiv.appendChild(createLableUsername)
            profileDiv.appendChild(createUsernameInput)
            profileDiv.appendChild(createDivHiddlenInfo)
            profileDiv.appendChild(createButton)

            mainElemen.appendChild(profileDiv)
            userNumber+=1
        })
            

    }).catch(err=> console.log(err))
}