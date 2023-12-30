import React, { useId } from 'react'

function InputBox({
    label,
    amount, // Amount from user
    onAmountChange, // method
    onCurrencyChange, // when currency is changed we need to notify
    currencyOptions=[], // Currency convertion options
    selectCurrency="usd", // to select currency from the list of currencies 
    amountDisable=false,
    currencyDisable=false,
    className=""
}) {

    const amountInputId=useId();
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
        <div className="w-1/2">
            <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">{label}</label>
            <input 
                id={amountInputId}
                className="outline-none w-full bg-transparent py-1.5" 
                type="number" 
                placeholder="Amount"
                disabled={amountDisable}
                value={amount}
                onChange={(e)=>onAmountChange && onAmountChange(e.target.value)} // simple checker when there is no event then it will not report any error
            />
        </div>
        
        <div className="w-1/2 flex flex-wrap justify-end text-right">
            <p className="text-black/40 mb-2 w-full">Currency Type</p>
            <select 
                className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                value={selectCurrency}
                onChange={(e)=>onCurrencyChange && onCurrencyChange(Number(e.target.value))}
                disabled={currencyDisable}
            >
                {currencyOptions.map( (currency) => (
                    // While using loops take care of keys beacuse if we dont use key then react degrad the performance because it will create the dom element every time which is not fisibile
                    <option key={currency} value={currency}>{currency}</option>
                ) )}
            </select>
        </div>
    </div>
  )
}
export default InputBox;