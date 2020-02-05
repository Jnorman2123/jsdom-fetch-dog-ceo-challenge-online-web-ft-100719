console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

document.addEventListener("DOMContentLoaded", (event) => {
    const imgContainer = document.getElementById("dog-image-container");
    const dogBreedList = document.getElementById("dog-breeds");
    fetch(imgUrl)
    .then(function(response) {
    return response.json();
    })
    .then(function(json){
        json.message.forEach((message) => {
            const imgTag = document.createElement('img');
            imgTag.src = message;
            imgContainer.appendChild(imgTag)
        });
    });
    fetch(breedUrl)
    .then(function(response) {
    return response.json();
    }).then(function(jsonData){
        let breedList = [];
        let breedObject = jsonData['message']
        for(let i in breedObject) 
            breedList.push([i, breedObject[i]]);
            breedList.forEach(breed => {
                const dogBreed = document.createElement('li');
                const dogNameList = document.createElement('ul');
                dogBreed.innerHTML = breed[0];
                dogBreedList.appendChild(dogBreed);
                dogBreed.appendChild(dogNameList)
                breed[1].forEach(dog => {  
                    const dogName = document.createElement('li');
                    dogName.innerHTML = dog;
                    dogNameList.appendChild(dogName);
                    dogName.addEventListener('click', e => {
                        dogName.style.color = 'red'
                    })
                })
            })
    });
})
