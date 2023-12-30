import { useEffect, useState } from "react"

// Custom hook function
// Standara Approch to add use prefix to every single hook
const useCurrencyInfo = (currency) => {

    // to store incoming data from API
    const [data, setData] = useState({})

    // API Call
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)

            // Get call back in chain
            .then((response) => response.json())

            // we got response in json format
            .then((response) => setData(response[currency]));

        console.log(data)
        // Change in curreny call APi so we will add currency in dependency
    }, [currency])
    console.log(data);
    return data;
}


// Designed one functionality and returned whole method
// It like what we did in useState hook
export default useCurrencyInfo;