// Weather sample data powers the cards, charts, forecast table, and city controls.
const weatherData = {
    Pune: {
        country: "India",
        summary: { temperature: 31, humidity: 58, wind: 14, rain: 22, comfort: 82 },
        week: {
            labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            temperature: [30, 31, 32, 33, 31, 29, 30],
            humidity: [55, 58, 61, 59, 63, 66, 60],
            conditions: { Sunny: 3, Cloudy: 2, Rainy: 1, Stormy: 1 },
            metrics: [78, 54, 58, 84, 72]
        },
        month: {
            labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
            temperature: [31, 33, 30, 29],
            humidity: [59, 62, 68, 64],
            conditions: { Sunny: 12, Cloudy: 9, Rainy: 6, Stormy: 3 },
            metrics: [76, 58, 64, 82, 74]
        },
        forecast: [
            { date: "22 Apr", temperature: 32, humidity: 59, condition: "Sunny" },
            { date: "23 Apr", temperature: 33, humidity: 61, condition: "Cloudy" },
            { date: "24 Apr", temperature: 31, humidity: 64, condition: "Rainy" },
            { date: "25 Apr", temperature: 30, humidity: 66, condition: "Rainy" },
            { date: "26 Apr", temperature: 31, humidity: 60, condition: "Sunny" }
        ],
        insight: {
            title: "Plan outdoor tasks early",
            text: "Warm afternoons are likely, with light rain chances later in the week."
        }
    },
    Mumbai: {
        country: "India",
        summary: { temperature: 29, humidity: 76, wind: 18, rain: 38, comfort: 74 },
        week: {
            labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            temperature: [29, 30, 30, 28, 29, 30, 31],
            humidity: [74, 76, 78, 82, 79, 75, 73],
            conditions: { Sunny: 2, Cloudy: 3, Rainy: 2, Stormy: 0 },
            metrics: [72, 66, 76, 72, 70]
        },
        month: {
            labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
            temperature: [29, 30, 29, 31],
            humidity: [76, 79, 81, 77],
            conditions: { Sunny: 8, Cloudy: 13, Rainy: 8, Stormy: 1 },
            metrics: [70, 68, 78, 74, 71]
        },
        forecast: [
            { date: "22 Apr", temperature: 30, humidity: 77, condition: "Cloudy" },
            { date: "23 Apr", temperature: 29, humidity: 81, condition: "Rainy" },
            { date: "24 Apr", temperature: 28, humidity: 82, condition: "Rainy" },
            { date: "25 Apr", temperature: 30, humidity: 75, condition: "Cloudy" },
            { date: "26 Apr", temperature: 31, humidity: 73, condition: "Sunny" }
        ],
        insight: {
            title: "Keep rain gear nearby",
            text: "Humidity stays high and scattered showers may affect evening travel."
        }
    },
    Delhi: {
        country: "India",
        summary: { temperature: 34, humidity: 42, wind: 12, rain: 8, comfort: 68 },
        week: {
            labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            temperature: [33, 34, 35, 36, 35, 34, 33],
            humidity: [44, 42, 40, 38, 41, 43, 45],
            conditions: { Sunny: 5, Cloudy: 2, Rainy: 0, Stormy: 0 },
            metrics: [86, 46, 42, 62, 76]
        },
        month: {
            labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
            temperature: [34, 36, 35, 33],
            humidity: [43, 39, 42, 46],
            conditions: { Sunny: 21, Cloudy: 7, Rainy: 2, Stormy: 0 },
            metrics: [88, 48, 42, 60, 78]
        },
        forecast: [
            { date: "22 Apr", temperature: 35, humidity: 40, condition: "Sunny" },
            { date: "23 Apr", temperature: 36, humidity: 38, condition: "Sunny" },
            { date: "24 Apr", temperature: 35, humidity: 42, condition: "Cloudy" },
            { date: "25 Apr", temperature: 34, humidity: 43, condition: "Sunny" },
            { date: "26 Apr", temperature: 33, humidity: 45, condition: "Cloudy" }
        ],
        insight: {
            title: "Hydration is important",
            text: "High temperatures and dry air can make afternoons uncomfortable."
        }
    },
    Bengaluru: {
        country: "India",
        summary: { temperature: 26, humidity: 62, wind: 16, rain: 34, comfort: 88 },
        week: {
            labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            temperature: [25, 26, 27, 26, 25, 24, 26],
            humidity: [60, 62, 64, 67, 66, 63, 61],
            conditions: { Sunny: 2, Cloudy: 3, Rainy: 2, Stormy: 0 },
            metrics: [68, 62, 62, 88, 78]
        },
        month: {
            labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
            temperature: [26, 27, 25, 24],
            humidity: [62, 65, 66, 64],
            conditions: { Sunny: 9, Cloudy: 12, Rainy: 8, Stormy: 1 },
            metrics: [66, 64, 64, 90, 80]
        },
        forecast: [
            { date: "22 Apr", temperature: 26, humidity: 62, condition: "Cloudy" },
            { date: "23 Apr", temperature: 27, humidity: 64, condition: "Sunny" },
            { date: "24 Apr", temperature: 25, humidity: 67, condition: "Rainy" },
            { date: "25 Apr", temperature: 24, humidity: 66, condition: "Rainy" },
            { date: "26 Apr", temperature: 26, humidity: 61, condition: "Cloudy" }
        ],
        insight: {
            title: "Comfortable week ahead",
            text: "Moderate temperatures and mild winds make this city friendly for outdoor plans."
        }
    },
    Chennai: {
        country: "India",
        summary: { temperature: 32, humidity: 70, wind: 20, rain: 28, comfort: 71 },
        week: {
            labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            temperature: [31, 32, 33, 33, 32, 31, 32],
            humidity: [68, 70, 73, 72, 71, 69, 70],
            conditions: { Sunny: 3, Cloudy: 2, Rainy: 2, Stormy: 0 },
            metrics: [80, 72, 70, 76, 73]
        },
        month: {
            labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
            temperature: [32, 33, 32, 31],
            humidity: [70, 73, 71, 69],
            conditions: { Sunny: 12, Cloudy: 9, Rainy: 8, Stormy: 1 },
            metrics: [81, 74, 71, 75, 73]
        },
        forecast: [
            { date: "22 Apr", temperature: 32, humidity: 70, condition: "Sunny" },
            { date: "23 Apr", temperature: 33, humidity: 73, condition: "Cloudy" },
            { date: "24 Apr", temperature: 33, humidity: 72, condition: "Rainy" },
            { date: "25 Apr", temperature: 31, humidity: 69, condition: "Rainy" },
            { date: "26 Apr", temperature: 32, humidity: 70, condition: "Sunny" }
        ],
        insight: {
            title: "Expect humid afternoons",
            text: "Sea breeze may help, but humidity remains the main comfort factor."
        }
    }
};

const citySelect = document.getElementById("citySelect");
const citySearch = document.getElementById("citySearch");
const activeCityBadge = document.getElementById("activeCityBadge");
const rangeButtons = document.querySelectorAll(".range-btn");
const forecastTableBody = document.getElementById("forecastTableBody");
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const themeText = document.getElementById("themeText");
const liveClock = document.getElementById("liveClock");
const toastElement = document.getElementById("dashboardToast");
const toast = new bootstrap.Toast(toastElement, { delay: 1800 });

const chartColors = {
    blue: "#1178b3",
    blueSoft: "rgba(17, 120, 179, 0.16)",
    teal: "#109b8f",
    tealSoft: "rgba(16, 155, 143, 0.16)",
    coral: "#eb6a5b",
    coralSoft: "rgba(235, 106, 91, 0.16)",
    gold: "#c7921b",
    goldSoft: "rgba(199, 146, 27, 0.16)",
    grid: "rgba(96, 113, 123, 0.18)",
    text: "#60717b"
};

let activeCity = "Pune";
let activeRange = "week";
let temperatureChart;
let humidityChart;
let conditionChart;
let metricsChart;
const counterAnimationIds = {};

function showToast(message) {
    document.getElementById("toastMessage").textContent = message;
    toast.show();
}

function getCurrentCityData() {
    return weatherData[activeCity];
}

function populateCitySelect() {
    citySelect.innerHTML = Object.keys(weatherData).map((city) => (
        `<option value="${city}">${city}, ${weatherData[city].country}</option>`
    )).join("");
    citySelect.value = activeCity;
}

function getChartOptions(title) {
    return {
        responsive: true,
        maintainAspectRatio: false,
        animation: {
            duration: 700,
            easing: "easeOutQuart"
        },
        plugins: {
            legend: {
                labels: {
                    color: chartColors.text,
                    boxWidth: 14,
                    font: { weight: "bold" }
                }
            },
            tooltip: {
                backgroundColor: "#172026",
                titleColor: "#ffffff",
                bodyColor: "#ffffff",
                padding: 12,
                cornerRadius: 8
            },
            title: {
                display: false,
                text: title
            }
        },
        scales: {
            x: {
                ticks: { color: chartColors.text, font: { weight: "bold" } },
                grid: { color: chartColors.grid }
            },
            y: {
                ticks: { color: chartColors.text, font: { weight: "bold" } },
                grid: { color: chartColors.grid }
            }
        }
    };
}

function createCharts() {
    const data = getCurrentCityData()[activeRange];

    temperatureChart = new Chart(document.getElementById("temperatureChart"), {
        type: "line",
        data: {
            labels: data.labels,
            datasets: [{
                label: "Temperature °C",
                data: data.temperature,
                borderColor: chartColors.coral,
                backgroundColor: chartColors.coralSoft,
                borderWidth: 3,
                fill: true,
                pointBackgroundColor: chartColors.coral,
                pointBorderColor: "#ffffff",
                pointRadius: 5,
                tension: 0.38
            }]
        },
        options: getChartOptions("Temperature Trend")
    });

    humidityChart = new Chart(document.getElementById("humidityChart"), {
        type: "bar",
        data: {
            labels: data.labels,
            datasets: [{
                label: "Humidity %",
                data: data.humidity,
                backgroundColor: chartColors.blue,
                borderRadius: 8,
                maxBarThickness: 48
            }]
        },
        options: getChartOptions("Humidity Levels")
    });

    conditionChart = new Chart(document.getElementById("conditionChart"), {
        type: "doughnut",
        data: {
            labels: Object.keys(data.conditions),
            datasets: [{
                data: Object.values(data.conditions),
                backgroundColor: [chartColors.gold, chartColors.blue, chartColors.teal, chartColors.coral],
                borderColor: "#ffffff",
                borderWidth: 3
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: {
                duration: 700,
                easing: "easeOutQuart"
            },
            cutout: "62%",
            plugins: {
                legend: {
                    position: "bottom",
                    labels: {
                        color: chartColors.text,
                        font: { weight: "bold" },
                        padding: 18
                    }
                },
                tooltip: {
                    backgroundColor: "#172026",
                    titleColor: "#ffffff",
                    bodyColor: "#ffffff",
                    padding: 12,
                    cornerRadius: 8
                }
            }
        }
    });

    metricsChart = new Chart(document.getElementById("metricsChart"), {
        type: "radar",
        data: {
            labels: ["Temperature", "Wind", "Humidity", "Visibility", "Pressure"],
            datasets: [{
                label: `${activeCity} metrics`,
                data: data.metrics,
                borderColor: chartColors.teal,
                backgroundColor: chartColors.tealSoft,
                borderWidth: 3,
                pointBackgroundColor: chartColors.teal,
                pointBorderColor: "#ffffff",
                pointRadius: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: {
                duration: 700,
                easing: "easeOutQuart"
            },
            plugins: {
                legend: {
                    labels: {
                        color: chartColors.text,
                        font: { weight: "bold" }
                    }
                },
                tooltip: {
                    backgroundColor: "#172026",
                    titleColor: "#ffffff",
                    bodyColor: "#ffffff",
                    padding: 12,
                    cornerRadius: 8
                }
            },
            scales: {
                r: {
                    min: 0,
                    max: 100,
                    angleLines: { color: chartColors.grid },
                    grid: { color: chartColors.grid },
                    pointLabels: {
                        color: chartColors.text,
                        font: { weight: "bold" }
                    },
                    ticks: {
                        backdropColor: "transparent",
                        color: chartColors.text
                    }
                }
            }
        }
    });
}

function updateCharts() {
    const data = getCurrentCityData()[activeRange];

    temperatureChart.data.labels = data.labels;
    temperatureChart.data.datasets[0].data = data.temperature;
    temperatureChart.update();

    humidityChart.data.labels = data.labels;
    humidityChart.data.datasets[0].data = data.humidity;
    humidityChart.update();

    conditionChart.data.labels = Object.keys(data.conditions);
    conditionChart.data.datasets[0].data = Object.values(data.conditions);
    conditionChart.update();

    metricsChart.data.datasets[0].label = `${activeCity} metrics`;
    metricsChart.data.datasets[0].data = data.metrics;
    metricsChart.update();
}

function animateValue(elementId, targetValue, suffix = "") {
    const element = document.getElementById(elementId);
    const startValue = Number(element.textContent) || 0;
    const duration = 650;
    const startTime = performance.now();

    function step(currentTime) {
        const progress = Math.min((currentTime - startTime) / duration, 1);
        const easedProgress = 1 - Math.pow(1 - progress, 3);
        const value = Math.round(startValue + (targetValue - startValue) * easedProgress);
        element.textContent = `${value}${suffix}`;

        if (progress < 1) {
            counterAnimationId = requestAnimationFrame(step);
        }
    }

    cancelAnimationFrame(counterAnimationIds[elementId]);
    counterAnimationIds[elementId] = requestAnimationFrame(step);
}

function updateSummaryCards() {
    const summary = getCurrentCityData().summary;
    animateValue("temperatureValue", summary.temperature);
    animateValue("humidityValue", summary.humidity);
    animateValue("windValue", summary.wind);
    animateValue("rainValue", summary.rain);
}

function getConditionIcon(condition) {
    const icons = {
        Sunny: "bi-sun-fill",
        Cloudy: "bi-clouds-fill",
        Rainy: "bi-cloud-rain-heavy-fill",
        Stormy: "bi-cloud-lightning-rain-fill"
    };

    return icons[condition] || "bi-cloud";
}

function renderForecastTable() {
    forecastTableBody.innerHTML = getCurrentCityData().forecast.map((day) => {
        const conditionClass = day.condition.toLowerCase();

        return `
            <tr>
                <td>${day.date}</td>
                <td>${day.temperature}°C</td>
                <td>${day.humidity}%</td>
                <td>
                    <span class="condition-pill ${conditionClass}">
                        <i class="bi ${getConditionIcon(day.condition)}"></i>
                        ${day.condition}
                    </span>
                </td>
            </tr>
        `;
    }).join("");
}

function updateInsight() {
    const city = getCurrentCityData();
    document.getElementById("insightTitle").textContent = city.insight.title;
    document.getElementById("insightText").textContent = city.insight.text;
    document.getElementById("comfortIndex").textContent = `${city.summary.comfort}%`;
}

function updateDashboard(showNotification = true) {
    const city = getCurrentCityData();
    activeCityBadge.textContent = `${activeCity}, ${city.country}`;
    citySelect.value = activeCity;
    updateSummaryCards();
    updateCharts();
    renderForecastTable();
    updateInsight();

    if (showNotification) {
        showToast(`${activeCity} ${activeRange} dashboard loaded.`);
    }
}

function searchCity() {
    const value = citySearch.value.trim().toLowerCase();

    if (!value) {
        return;
    }

    const matchedCity = Object.keys(weatherData).find((city) => city.toLowerCase().startsWith(value));

    if (matchedCity) {
        activeCity = matchedCity;
        updateDashboard();
    } else {
        showToast("City not found in sample data.");
    }
}

function applyTheme(theme) {
    const isDark = theme === "dark";
    document.body.classList.toggle("dark-mode", isDark);
    themeIcon.className = isDark ? "bi bi-sun" : "bi bi-moon-stars";
    themeText.textContent = isDark ? "Light" : "Dark";
    localStorage.setItem("weather-dashboard-theme", theme);
}

function updateClock() {
    const now = new Date();
    liveClock.textContent = now.toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });
}

function exportChart(chartId) {
    const canvas = document.getElementById(chartId);
    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = `${chartId}-${activeCity}-${activeRange}.png`;
    link.click();
    showToast("Chart image exported.");
}

citySelect.addEventListener("change", (event) => {
    activeCity = event.target.value;
    citySearch.value = "";
    updateDashboard();
});

citySearch.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        searchCity();
    }
});

citySearch.addEventListener("input", () => {
    const exactMatch = Object.keys(weatherData).find((city) => (
        city.toLowerCase() === citySearch.value.trim().toLowerCase()
    ));

    if (exactMatch) {
        activeCity = exactMatch;
        updateDashboard();
    }
});

rangeButtons.forEach((button) => {
    button.addEventListener("click", () => {
        rangeButtons.forEach((rangeButton) => rangeButton.classList.remove("active"));
        button.classList.add("active");
        activeRange = button.dataset.range;
        updateDashboard();
    });
});

themeToggle.addEventListener("click", () => {
    const nextTheme = document.body.classList.contains("dark-mode") ? "light" : "dark";
    applyTheme(nextTheme);
});

document.querySelectorAll(".export-btn").forEach((button) => {
    button.addEventListener("click", () => {
        exportChart(button.dataset.chart);
    });
});

document.getElementById("contactForm").addEventListener("submit", (event) => {
    event.preventDefault();
    showToast("Report request sent.");
    event.target.reset();
});

document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
        const navbarCollapse = document.getElementById("navbarNav");

        if (navbarCollapse.classList.contains("show")) {
            bootstrap.Collapse.getOrCreateInstance(navbarCollapse).hide();
        }
    });
});

populateCitySelect();
createCharts();
renderForecastTable();
updateSummaryCards();
updateInsight();
updateClock();
setInterval(updateClock, 1000);

const savedTheme = localStorage.getItem("weather-dashboard-theme");
if (savedTheme) {
    applyTheme(savedTheme);
}
