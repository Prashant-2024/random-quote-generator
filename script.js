const API_KEY = "8GYsD8/a5aWbykQA9qPwmw==mFQiFuLhqqh0Hnqt";
const api_url = "https://api.api-ninjas.com/v1/quotes";

document.addEventListener("DOMContentLoaded", generateQuote);

async function generateQuote() {
    try {
        const response = await fetch(api_url, {
            method: "GET",
            headers: { "X-Api-Key": `${API_KEY}` },
        });
        const data = await response.json();
        let quote = data[0].quote;
        let author = data[0].author;
        let category = data[0].category;
        // console.log(data[0]);

        document.querySelector(".author").innerHTML = author;
        document.querySelector(".type").innerHTML = category;
        document.querySelector(".quote q").innerHTML = quote;
    } catch (error) {
        console.error("Error fetching data: ", error);
    }
}

function copyClipboard() {
    let quote = document.querySelector(".quote q").innerText;

    navigator.clipboard
        .writeText(quote)
        .then(() => {
            const tooltipText = document.querySelector(".tooltip-text");
            console.log(tooltipText);
            tooltipText.classList.add("show");
            setTimeout(() => {
                tooltipText.classList.remove("show");
            }, 2000);
        })
        .catch((error) => console.log("Error", error));
}
