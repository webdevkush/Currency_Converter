const Rates = {
    AFN: 1.00, ALL: 1.22, DZD: 1.61, AOA: 10.71, ARS: 3.51, AMD: 4.70, AWG: 0.021, AUD: 0.018, AZN: 0.021, BSD: 0.012, BHD: 0.0045, BDT: 1.39, BBD: 0.024, BYN: 0.03, BEF: 0.30, BZD: 0.024, BMD: 0.012, BTN: 1.00, BTC: 0.00000042, BOB: 0.083, BAM: 0.022, BWP: 0.15, BRL: 0.059, GBP: 0.009, BND: 0.016, BGN: 0.022, BIF: 33.21, KHR: 49.34, CAD: 0.016, CVE: 1.28, KYD: 0.010, XOF: 7.05, XAF: 7.05, XPF: 1.28, CLP: 9.59, CNY: 0.084, COP: 45.75, KMF: 5.70, CDF: 30.00, CRC: 6.53, HRK: 0.082, CUC: 0.012, CZK: 0.26, DKK: 0.083, DJF: 2.12, DOP: 0.67, XCD: 0.032, EGP: 0.37, ERN: 0.18, EEK: 0.15, ETB: 0.67, EUR: 0.011, FKP: 0.009, FJD: 0.026, GMD: 0.63, GEL: 0.031, DEM: 0.22, GHS: 0.77, GIP: 0.25, GRD: 0.37, GTQ: 0.19, GNF: 0.35, GYD: 0.058, HTG: 0.0036, HNL: 1.03, HKD: 222.34, HUF: 0.0075, ISK: 18.11, INR: 80.00, IDR: 0.22, IRR: 41.34, IQD: 0.12, ILS: 0.77, ITL: 0.0046, JMD: 3.32, JPY: 0.012, JOD: 0.043, KZT: 0.054, KES: 1.17, KWD: 14.03, KGS: 0.11, LAK: 0.031, LVL: 0.045, LBP: 1.20, LSL: 0.17, LRD: 256.48, LYD: 0.016, LTL: 0.31, MOP: 0.099, MKD: 6.67, MGA: 0.22, MWK: 15.24, MYR: 0.0082, MVR: 4.39, MRO: 0.009, MUR: 6.89, MXN: 0.50, MDL: 0.22, MNT: 0.12, MAD: 0.011, MZN: 32.33, MMK: 27.20, NAD: 0.13, NPR: 28.36, ANG: 0.39, TWD: 0.028, NZD: 0.081, NIO: 0.036, NGN: 0.21, KPW: 0.042, NOK: 44.39, OMR: 0.34, PKR: 0.044, PAB: 0.45, PGK: 0.56, PYG: 0.20, PEN: 0.11, PHP: 0.43, PLN: 0.50, QAR: 1.40, RON: 0.67, RUB: 0.27, RWF: 14.03, SVC: 0.11, WST: 0.031, SAR: 0.045, RSD: 1.20, SCR: 0.17, SLL: 256.48, SGD: 0.016, SKK: 0.31, SBD: 0.099, SOS: 6.67, ZAR: 0.22, KRW: 15.24, XDR: 0.0082, LKR: 4.39, SHP: 0.009, SDG: 6.89, SRD: 0.50, SZL: 0.22, SEK: 0.12, CHF: 0.011, SYP: 32.33, STD: 27.20, TJS: 0.13, TZS: 28.36, THB: 0.39, TOP: 0.028, TTD: 0.081, TND: 0.036, TRY: 0.21, TMT: 0.042, UGX: 44.39, UAH: 0.34, AED: 0.044, UYU: 0.45, USD: 1.00, UZS: 144.32, VUV: 1.38, VEF: 0.32, VND: 278.95, YER: 3.05, ZMK: 0.21

};

function convert() {
    try {
        let amountInput = document.getElementById('amt').value;
        let fromCurrency = document.getElementById('frmCurr').value;
        let toCurrency = document.getElementById('tCurr').value;
        let output = document.getElementById('res');

        if (isNaN(amountInput)) {
            output.style.color = "red";
            return output.value = "Please enter a valid numerical amount.";
        }

        if (amountInput == "") {
            output.style.color = "red";
            return output.value = "Please enter amount....";
        }

        if (fromCurrency == toCurrency) {
            output.style.color = "red";
            return output.value = "Please choose two different currencies.";
        }

        if (!Rates[fromCurrency] || !Rates[toCurrency]) {
            output.style.color = "red";
            return output.value = "Invalid currency selected.";
        }

        let amount = parseFloat(amountInput);
        let rateFrom = Rates[fromCurrency];
        let rateTo = Rates[toCurrency];

        let finalResult = (amount / rateFrom) * rateTo;

        output.value = `${finalResult}`;
    }
    catch (Exception) { };
}
document.getElementById('genBtn').addEventListener('click', convert);