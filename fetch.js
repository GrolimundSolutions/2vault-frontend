
function submitVault() {
    const formData = document.querySelector('textarea').value
    console.log(formData)

    const data = {text: formData, secret: ""};

    fetch('http://localhost:8080/2vault', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            document.getElementById('result').value = data.secret
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

let submitBtn = document.querySelector('button');
submitBtn.addEventListener('click', submitVault);
