const PokeAPI = (function(){
    const buscarPokemon = function(event){
        const pokename = event.target.searchpokemon.value;
        return new Promise((resolve, reject) => {
            const host ='https://pokeapi.co/api/v2/pokemon';
            const xhr = new XMLHttpRequest();
            xhr.open('GET', `${host}/${pokename}`, true);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.onreadystatechange = () => {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {                      
                        resolve(JSON.parse(xhr.responseText));
                    }
                    else {
                        reject(JSON.parse(xhr.responseText));
                    }
                }
            }
            xhr.send();
        });
    }

   return {
       buscarPokemon: buscarPokemon
    }
    
})();