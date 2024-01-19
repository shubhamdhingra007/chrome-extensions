async function sayHello() {
    let [tab] = await chrome.tabs.query({ active: true });
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: () => {
            // inside this function document will point to the document object of the page
            document.body.style.padding = '400px'
            alert('Hello from popup')
        }
    })
}

console.log('docElem >>>>>>>>>>>>', document.getElementById('myButton'))

// this will be for popup
document.getElementById('myButton').addEventListener('click', sayHello)