const cardarea=  document.getElementById("cardArea")
const cards = [

{
    amount: "1,934,470.90",
    title: "Sale: 19th April 2026",
    icon: "fa-money-bill-wave",
    color: "bg-info",

    extra: [
        {name:"Deposit", value:"20,000"},
        {name:"Withdraw", value:"5,000"}
    ]
},

{
    amount: "17,511,197.42",
    title: "Sale: April 2026",
    icon: "fa-calendar-days",
    color: "bg-primary",

    extra: [
        {name:"Price", value:"55,000"}
    ]
},

{
    amount: "16,337,274.42",
    title: "March 2026",
    icon: "fa-clock-rotate-left",
    color: "bg-warning",

    extra: [
        {name:"Income", value:"80,000"},
        {name:"Expense", value:"40,000"},
        {name:"Profit", value:"40,000"}
    ]
},

{
    amount: "2,434,009.96",
    title: "Finished Good Value",
    icon: "fa-box-open",
    color: "bg-success",

    extra: [
        {name:"Stock", value:"120"}
    ]
},

{
    amount: "5,348,117.64",
    title: "Raw Material Value",
    icon: "fa-cart-flatbed",
    color: "bg-danger",

    extra: [
        {name:"Items", value:"75"}
    ]
}

];

let output = "";

cards.forEach(card => {

let extraData = "";

card.extra.forEach(item => {
    extraData += `<small class="d-block">${item.name}: ${item.value}</small>`;
});

output += `
<div class="col-md-6 col-lg-3">

<div class="card text-white ${card.color} border-0 overflow-hidden">

<div class="card-body d-flex justify-content-between py-4">

<div>
<h3 class="fw-bold mb-1">${card.amount}</h3>
<h6>${card.title}</h6>
${extraData}
</div>

<i class="fa-solid ${card.icon} fa-4x opacity-75"></i>

</div>

<div class="card-footer text-center bg-dark bg-opacity-10">
More Info <i class="fa-solid fa-circle-arrow-right"></i>
</div>

</div>
</div>
`;
});

cardarea.innerHTML = output;