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
    logo: "assets/police.png",
    heart: "assets/heart.png",
    title: "Police Help Line",
    subtitle: "Law & Order",
    number: "100",
    category: "Police",
    color: "bg-blue-500"
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
];


cardContainer.innerHTML = cardsData
  .map(
    (card) => `
    <div class="card h-[270px] w-[30%] bg-white shadow-lg rounded-lg p-5 m-3">
        <div class="top">
            <div class="logoandheart items-center flex justify-between">
                <div class="lgo p-3 relative flex items-center justify-center rounded-md">
                    <div class="logo absolute h-full w-full ${card.color} opacity-5 p-2 rounded-md"></div>
                    <img class="w-[25px] h-[25px] relative" src="${card.logo}" alt="">
                </div>
                <img class="w-[20px] heart h-[20px]" src="${card.heart}" alt="">
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
            <div class="copy w-[50%]">
                <button class=" border-[1px] py-[2px] text-black w-full px-4 rounded-md mt-5">Copy</button>
            </div>
            <div class="call w-[50%]">
                <button class="bg-green-500 py-[2px] w-full text-white px-4 rounded-md mt-5">Call</button>
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
   { name: '',
    number: '',
    time: ''}
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
        if(call.name === ''){
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
    })
    coin.innerHTML = parseInt(coin.innerHTML) - 20
  })
})

let callHistoryContainer = document.querySelector('.call-history')

callHistoryContainer.innerHTML = callHistory.map((call, index) => {
    if(call.name === ''){
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
})

let clearBtn = document.querySelector('.clear-btn')
clearBtn.addEventListener('click', () => {
  callHistory = []
  callHistoryContainer.innerHTML = ''
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

