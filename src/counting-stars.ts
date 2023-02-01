type Rate = 0 | 1 | 2 | 3 | 4 | 5
const countingStars = (rate: Rate) => '★★★★★☆☆☆☆☆'.slice(5 - rate, 10 - rate)

export { countingStars as default, countingStars }
