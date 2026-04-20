const cards = [
    {
        amount: "1,934,470.90",
        title: "Sale: 19th April 2026",
        icon: "fa-money-bill-wave",
        color: "bg-info"
    },
    {
        amount: "17,511,197.42",
        title: "Sale: April 2026",
        icon: "fa-calendar-days",
        color: "bg-primary"
    },
    {
        amount: "16,337,274.42",
        title: "March 2026",
        icon: "fa-clock-rotate-left",
        color: "bg-warning"
    },
    {
        amount: "2,434,009.96",
        title: "Finished Good Value",
        icon: "fa-box-open",
        color: "bg-success"
    },
    {
        amount: "5,348,117.64",
        title: "Raw Material Value",
        icon: "fa-cart-flatbed",
        color: "bg-danger"
    },
    {
        amount: "5,348,117.64",
        title: "Raw Material Value",
        icon: "fa-cart-flatbed",
        color: "bg-danger"
    }
];

let output = "";

cards.forEach(card => {
    output += `
    <div class="col-md-6 col-lg-3">
        <div class="card text-white ${card.color} border-0 overflow-hidden">
            <div class="card-body d-flex justify-content-between align-items-center py-4">
                <div>
                    <h3 class="fw-bold">${card.amount}</h3>
                    <h5>${card.title}</h5>
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

document.getElementById("cardArea").innerHTML = output;