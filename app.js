const cardContainer = document.querySelector(".cards"); // your black div


const cardsData = [
    {
        logo: "assets/emergency.png",
        heart: "assets/heart.png",
        title: "National Emergency Number",
        subtitle: "National Service",
        number: "999",
        category: "All",
        color: "bg-red-500"
    },
    {
        logo: "assets/police.png",
        heart: "assets/heart.png",
        title: "Police Help Line",
        subtitle: "Law & Order",
        number: "100",
        category: "Police",
        color: "bg-blue-500"
    },
    {
        logo: "assets/fire-service.png",
        heart: "assets/heart.png",
        title: "Fire Service",
        subtitle: "Fire Emergency",
        number: "999",
        category: "Fire",
        color: "bg-red-500"
    },
    {
        logo: "assets/ambulance.png",
        heart: "assets/heart.png",
        title: "Ambulance Service",
        subtitle: "Ambulance ",
        number: "1994-999999",
        category: "Health",
        color: "bg-red-500"
    },

    {
        logo: "assets/emergency.png",
        heart: "assets/heart.png",
        title: "Women & Child Helpline",
        subtitle: "Women & Child Helpline",
        number: "109",
        category: "Help",
        color: "bg-red-500"
    },
    {
        logo: "assets/emergency.png",
        heart: "assets/heart.png",
        title: "Anti-Corruption Helpline",
        subtitle: "Anti-Corruption",
        number: "106",
        category: "Govt.",
        color: "bg-red-500"
    },
    {
        logo: "assets/emergency.png",
        heart: "assets/heart.png",
        title: "Electricity Helpline",
        subtitle: "Electricity Outage",
        number: "16216",
        category: "Electricity",
        color: "bg-red-500"
    },
    {
        logo: "assets/brac.png",
        heart: "assets/heart.png",
        title: "Electricity Helpline",
        subtitle: "Brac",
        number: "16445",
        category: "NGO",
        color: "bg-red-500"
    },
    {
        logo: "assets/Bangladesh-Railway.png",
        heart: "assets/heart.png",
        title: "Bangladesh Railway Helpline ",
        subtitle: "Bangladesh Railway",
        number: "163",
        category: "Travel",
        color: "bg-red-500"
    },
];


cardContainer.innerHTML = cardsData
    .map(
        (card) => `
    <div class="card lg:h-[270px] lg:w-[30%] w-[100%] bg-white shadow-lg rounded-lg p-5 m-3">
        <div class="top">
            <div class="logoandheart items-center flex justify-between">
                <div class="lgo p-3 relative flex items-center justify-center rounded-md">
                    <div class="logo absolute h-full w-full ${card.color} opacity-5 p-2 rounded-md"></div>
                    <img class="w-[25px] h-[25px] relative" src="${card.logo}" alt="">
                </div>
              
           <span class="heart cursor-pointer h-[20px] w-[20px]">
           <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"/></svg></span>

            </div>
            <div class="heading mt-3">
                <h2 class="font-bold text-[18px]">${card.title}</h2>
                <h3 class="font-thin text-[14px]">${card.subtitle}</h3>
            </div>
        </div>
        <div class="middle mt-3">
            <h3 class="font-bold text-[22px]">${card.number}</h3>
            <span class="category bg-slate-300 text-black px-2 mt-[8px] py-[4px] text-[12px] text-center rounded-full">
                ${card.category}
            </span>
        </div>
        <div class="bottom flex justify-center gap-2">
            <div class="copy w-[50%] flex ">
            
                <button class=" border-[1px] py-[2px] text-gray-500 w-full px-4 rounded-md mt-5"><i style="font-size:18px" class="fa">&#xf0c5;</i> 
                Copy</button>
            </div>
            <div class="call w-[50%]">
                <button class="bg-green-500 py-[2px] w-full text-white px-4 rounded-md mt-5">
                <i style="font-size:18px" class="fa">&#xf095;</i>
                Call</button>
            </div>
        </div>
    </div>
  `
    )
    .join("");


let hearts = 0
let heartsCount = document.querySelector('.hearts')
heartsCount.innerHTML = hearts

document.querySelectorAll('.heart').forEach(heart => {
    heart.addEventListener('click', () => {
        hearts++
        heartsCount.innerHTML = hearts
    })
})


let coin = document.querySelector('.coin')
coin.innerHTML = 100


let callHistory = [
    {
        name: '',
        number: '',
        time: ''
    }
]




document.querySelectorAll('.call').forEach((callBtn, index) => {
    const card = cardsData[index]
    callBtn.addEventListener('click', () => {
        if (parseInt(coin.innerHTML) < 20) {
            alert('Not enough coins to make a call. Each call costs 20 coins.')
            return
        }
        alert(`Calling ${card.title} at number: ${card.number}`);
        callHistory.push({
            name: card.title,
            number: card.number,
            time: new Date().toLocaleTimeString()
        })
        let callHistoryContainer = document.querySelector('.call-history')

        callHistoryContainer.innerHTML = callHistory.map((call, index) => {
            if (call.name === '') {
                return ''
            }
            return `
        <div class="card-history flex gap-3 items-center justify-between bg-[#f5fff6] w-full  rounded-[10px] p-3 mt-3">
            <div class="left">
                <h1 class="text-[17px] font-bold">${call.name}</h1>
                <h2>${call.number}</h2>
            </div>
            <div class="right">
                <h2>${call.time}</h2>
            </div>
        </div>
      `
        }).join('')
        coin.innerHTML = parseInt(coin.innerHTML) - 20
    })
})

let callHistoryContainer = document.querySelector('.call-history')

callHistoryContainer.innerHTML = callHistory.map((call, index) => {
    if (call.name === '') {
        return ''
    }
    return `
    <div class="card-history flex gap-3 items-center justify-between bg-[#f5fff6] w-full  rounded-[10px] p-3 mt-3">
        <div class="left">
            <h1 class="text-[19px] font-bold">${call.name}</h1>
            <h2>${call.number}</h2>
        </div>
        <div class="right">
            <h2>${call.time}</h2>
        </div>
    </div>
  `
}).join('')

let clearBtn = document.querySelector('.clear-btn')
clearBtn.addEventListener('click', () => {
    callHistory = []
    callHistoryContainer.innerHTML = ''
    coin.innerHTML = 100
})


let copyCountSpan = document.querySelector('.copy-count')
let copyCount = 0
let copyCountBtn = document.querySelector('.copy')
copyCountSpan.innerHTML = copyCount

document.querySelectorAll('.copy').forEach((copyBtn, index) => {
    const card = cardsData[index]
    copyBtn.addEventListener('click', () => {
        copyCount++
        copyCountSpan.innerHTML = copyCount
        const textToCopy = card.number;

        // Use Clipboard API to copy
        navigator.clipboard.writeText(textToCopy)
            .then(() => {
                alert(`Copied: ${textToCopy}`);
            })
            .catch((err) => {
                console.error("Failed to copy text: ", err);
            });
    })
})

