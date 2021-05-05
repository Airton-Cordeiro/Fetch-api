const cep = document.querySelector('#cep');

const showData = (result) =>{
    for(const campo in result)
    if(document.querySelector('#'+campo)){
        document.querySelector('#'+campo).value = result[campo]        
    }
}

cep.addEventListener("blur", (e) => {
    let search = cep.value.replace("-","")

    const options = {
        method:'GET',
        mode:'cors',
        cache:'default'
    }

    fetch(`https://viacep.com.br/ws/${search}/json`)
    .then(response => {response.json()
        .then( data => showData(data))
    })
    .catch(error => console.log('Deu erro: '+ error, message))
})




