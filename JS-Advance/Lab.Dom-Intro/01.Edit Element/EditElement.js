function editElement(element, string, repl) {
    while(element.textContent.search(string) != -1){
        element.textContent = element.textContent.replace(string,repl);

    }
}