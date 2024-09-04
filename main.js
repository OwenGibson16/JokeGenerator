// Arrays

let Countries = ['English', 'Irish', 'Scottish', 'Chinese', 'American', 'French'];
let items = ['car', 'sheep', 'pineapple'];
let locations = ['pool', 'shop', 'park'];

// Code

function knockKnock() {
    let country = Countries[Math.floor(Math.random() * Countries.length)];
    let item = items[Math.floor(Math.random() * items.length)];
    console.log('Knock Knock');
    console.log(`Who's there`);
    console.log(country);
    console.log(`${country} Who?`);
    console.log(`${country} ${item}!`);
}

function chickenRoad() {
        let location = locations[Math.floor(Math.random() * locations.length)];
        let country = Countries[Math.floor(Math.random() * Countries.length)];
        let item = items[Math.floor(Math.random() * items.length)];
        console.log(`Why did the chicken cross the ${location}?`);
        console.log(`To get to the ${country} ${item}!`)
    }

function walkInto() {
    let country1 = Countries[Math.floor(Math.random() * Countries.length)];
    let country2;
    do {
        country2 = Countries[Math.floor(Math.random() * Countries.length)];
    } while (country1 === country2);
    let location = locations[Math.floor(Math.random() * locations.length)];
    let item = items[Math.floor(Math.random() * items.length)];
    console.log(`A ${country1} man and a ${country2} man walk into a ${location}`)
    console.log(`And the ${country2} man says to the ${country1} man why does this ${location} sell ${item}?`);
    }

function selectJokeType() {
    let jokeType = Math.floor(Math.random() * 3);
    if (jokeType === 0) {
        knockKnock();
    }
    else if (jokeType === 1) {
        chickenRoad();
    }
    else {
        walkInto();
    }
}

// Output

selectJokeType();