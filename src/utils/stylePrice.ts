export const setPriceStyle = (price) => {
    return Intl.NumberFormat("ru", {style: "currency", currency: "RUB", maximumFractionDigits: 0}).format(price)
}




