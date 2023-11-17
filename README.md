
# Capstone project 1 Ecommerce site

This is a website I made using HTML, CSS, and Javascript. It highlights national parks and mountain ranges around the US and its territories. It consists of a home page featuring a carousel and 6 locations that randomize on reload. A national parks page where you can search for a park based on where it's located, by what kind of park it is or both. The third page is a mountain page that includes a dropdown of 48 different mountain ranges and provides information on which one you select.

## pages

![Index page](<Screenshot (36).png>)
![Park page](<Screenshot (34).png>)
![Mountain page](<Screenshot (35).png>)

## Code snippet
This snippet of code allows the index page to choose 6 random parks or mountains from the arrays we used. It generates a number between 0 and 1 and if that number is under 0.50 it selects a mountain range and if above it selects a park.


function randomParkIndexMaker() {
  return Math.floor(Math.random() * nationalParksArray.length);
}

function randomMountainIndexMaker() {
    return Math.floor(Math.random() * mountainsArray.length);
}
 let getRandomData = () => {
        let cards = '';
        for (let i = 0; i < 6; i++) {
            let randomNumber = Math.random();
            if(randomNumber < 0.5){
                let randomMountainIndex = randomMountainIndexMaker();
                cards += mountainCard(mountainsArray[randomMountainIndex].name,mountainsArray[randomMountainIndex].desc);

            }else{
            let randomParkIndex = randomParkIndexMaker();
            cards += parkCard(nationalParksArray[randomParkIndex].LocationName, nationalParksArray[randomParkIndex].Address)
            }
        }
        console.log(cards);
  document.getElementById('randomcard').innerHTML = cards;
};

window.onload = getRandomData;

## Tools used

        HTML, CSS, Bootstrap and Javascript code
        Github
        Visual studio code


                   
## Acknowledgements

 - https://youtube.com
 - https://getbootstrap.com
 - https://www.w3schools.com
 - My peers
 - Remsey Mailjard
