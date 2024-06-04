const BASE_URL =
  "https://v6.exchangerate-api.com/v6/9ecec941a315b90bcc3704fd/latest";

const dropdowns = document.querySelectorAll(".dropdown select");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const btn = document.querySelector("button");
const msg = document.querySelector(".msg");

// const countryList = {
//   AED: "AE",
//   AFN: "AF",
//   XCD: "AG",
//   ALL: "AL",
//   AMD: "AM",
//   ANG: "AN",
//   AOA: "AO",
//   AQD: "AQ",
//   ARS: "AR",
//   AUD: "AU",
//   AZN: "AZ",
//   BAM: "BA",
//   BBD: "BB",
//   BDT: "BD",
//   XOF: "BE",
//   BGN: "BG",
//   BHD: "BH",
//   BIF: "BI",
//   BMD: "BM",
//   BND: "BN",
//   BOB: "BO",
//   BRL: "BR",
//   BSD: "BS",
//   NOK: "BV",
//   BWP: "BW",
//   BYR: "BY",
//   BZD: "BZ",
//   CAD: "CA",
//   CDF: "CD",
//   XAF: "CF",
//   CHF: "CH",
//   CLP: "CL",
//   CNY: "CN",
//   COP: "CO",
//   CRC: "CR",
//   CUP: "CU",
//   CVE: "CV",
//   CYP: "CY",
//   CZK: "CZ",
//   DJF: "DJ",
//   DKK: "DK",
//   DOP: "DO",
//   DZD: "DZ",
//   ECS: "EC",
//   EEK: "EE",
//   EGP: "EG",
//   ETB: "ET",
//   EUR: "FR",
//   FJD: "FJ",
//   FKP: "FK",
//   GBP: "GB",
//   GEL: "GE",
//   GGP: "GG",
//   GHS: "GH",
//   GIP: "GI",
//   GMD: "GM",
//   GNF: "GN",
//   GTQ: "GT",
//   GYD: "GY",
//   HKD: "HK",
//   HNL: "HN",
//   HRK: "HR",
//   HTG: "HT",
//   HUF: "HU",
//   IDR: "ID",
//   ILS: "IL",
//   INR: "IN",
//   IQD: "IQ",
//   IRR: "IR",
//   ISK: "IS",
//   JMD: "JM",
//   JOD: "JO",
//   JPY: "JP",
//   KES: "KE",
//   KGS: "KG",
//   KHR: "KH",
//   KMF: "KM",
//   KPW: "KP",
//   KRW: "KR",
//   KWD: "KW",
//   KYD: "KY",
//   KZT: "KZ",
//   LAK: "LA",
//   LBP: "LB",
//   LKR: "LK",
//   LRD: "LR",
//   LSL: "LS",
//   LTL: "LT",
//   LVL: "LV",
//   LYD: "LY",
//   MAD: "MA",
//   MDL: "MD",
//   MGA: "MG",
//   MKD: "MK",
//   MMK: "MM",
//   MNT: "MN",
//   MOP: "MO",
//   MRO: "MR",
//   MTL: "MT",
//   MUR: "MU",
//   MVR: "MV",
//   MWK: "MW",
//   MXN: "MX",
//   MYR: "MY",
//   MZN: "MZ",
//   NAD: "NA",
//   XPF: "NC",
//   NGN: "NG",
//   NIO: "NI",
//   NPR: "NP",
//   NZD: "NZ",
//   OMR: "OM",
//   PAB: "PA",
//   PEN: "PE",
//   PGK: "PG",
//   PHP: "PH",
//   PKR: "PK",
//   PLN: "PL",
//   PYG: "PY",
//   QAR: "QA",
//   RON: "RO",
//   RSD: "RS",
//   RUB: "RU",
//   RWF: "RW",
//   SAR: "SA",
//   SBD: "SB",
//   SCR: "SC",
//   SDG: "SD",
//   SEK: "SE",
//   SGD: "SG",
//   SKK: "SK",
//   SLL: "SL",
//   SOS: "SO",
//   SRD: "SR",
//   STD: "ST",
//   SVC: "SV",
//   SYP: "SY",
//   SZL: "SZ",
//   THB: "TH",
//   TJS: "TJ",
//   TMT: "TM",
//   TND: "TN",
//   TOP: "TO",
//   TRY: "TR",
//   TTD: "TT",
//   TWD: "TW",
//   TZS: "TZ",
//   UAH: "UA",
//   UGX: "UG",
//   USD: "US",
//   UYU: "UY",
//   UZS: "UZ",
//   VEF: "VE",
//   VND: "VN",
//   VUV: "VU",
//   YER: "YE",
//   ZAR: "ZA",
//   ZMK: "ZM",
//   ZWD: "ZW",
// };

let i = 0;

for (let select of dropdowns) {
  for (let currCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;
    if (select.name === "from" && currCode === "USD") {
      newOption.selected = "selected";
    } else if (select.name === "to" && currCode === "INR") {
      newOption.selected = "selected";
    }
    select.append(newOption);
  }

  select.addEventListener("change", (e) => {
    updateFlag(e.target);
  });
}

const updateFlag = (e) => {
  let currCode = e.value;
  console.log(currCode);
  let countryCode = countryList[currCode];
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = e.parentElement.querySelector("img");
  img.src = newSrc;
};

btn.addEventListener("click", async (e) => {
  e.preventDefault();
  let amount = document.querySelector(".amount input");
  let amntVal = amount.value;
  if (amntVal === "" || amntVal < 1) {
    amntVal = 1;
    amount.value = "1";
  }

  console.log(fromCurr.value)
  const URL = `${BASE_URL}/${fromCurr.value}`;
  console.log(URL)

  let respone = await fetch(URL);
  let data = await respone.json();
  let rate = data.conversion_rates[toCurr.value];
  console.log(data.conversion_rates)
  console.log(rate);
  let result = amntVal * rate;
  msg.innerText = `${amntVal} ${
    fromCurr.value
  } = ${result.toFixed(2)} ${toCurr.value}`;
});
