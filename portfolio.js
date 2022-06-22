
/**
* Class Stock
* Define each stock with dates, prices and function search
*/
class Stock{

	/** @constructor */
    constructor(stock, datePrice) {
	    this.stock = stock;
	    this.datePrice = datePrice;

	    /**
		* Function find price stock by date
		* @auto Alex
		* @param {date} date.
		* @return {number} price
		*/
	    this.getPrice = function(date){ 
			    for(let v of this.datePrice){
			    	if(v['date'].getTime() === date.getTime()){
			    		return v['price'];
			    	}
			    }
			    return 0;
			}
    }
}



/**
* Collection of Stocks
*/
const stocks = [
	new Stock('stock A', [
	    	{
	    		date: new Date('2022-01-01'),
	    		price: 100.00
	    	},
	    	{
	    		date: new Date('2022-02-01'),
	    		price: 140.00
	    	},
	    	{
	    		date: new Date('2022-03-01'),
	    		price: 160.00
	    	},
	]),
	new Stock('stock B', [
	    	{
	    		date: new Date('2022-01-01'),
	    		price: 80.00
	    	},
	    	{
	    		date: new Date('2022-02-01'),
	    		price: 110.00
	    	},
	    	{
	    		date: new Date('2022-03-01'),
	    		price: 180.00
	    	},
	]),
	new Stock('stock C', [
	    	{
	    		date: new Date('2022-01-01'),
	    		price: 90.00
	    	},
	    	{
	    		date: new Date('2022-02-01'),
	    		price: 120.00
	    	},
	    	{
	    		date: new Date('2022-03-01'),
	    		price: 170.00
	    	},
	]),
];



/**
* Class Portfolio
*/
class Portfolio {

	/** @constructor */
    constructor() {
	    this.stocks = stocks;
    }


	/**
	* Function: Get total profit between two dates
	* @auto Alex
	* @param {date} dateInital
	* @param {date} dateFinish
	* @return {number} totalProfit
	*/
	getProfit = (dateInital, dateFinish) => {

	
		let totalProfit = 0
		let totalInitial = 0
		let totalFinish = 0
		let priceInitial = 0;
		let priceFisnish = 0;

		//Loop stock collection
		let stocks2 = this.stocks.map( _stock => {

			//Get start and end price
			priceInitial = _stock.getPrice(dateInital);
			priceFisnish = _stock.getPrice(dateFinish);

			//Get profit
			let profit = priceFisnish - priceInitial;

			totalInitial += priceInitial;
			totalFinish += priceFisnish;

			

			return [_stock.stock,profit];

		});

		//Total profit
		totalProfit = totalFinish - totalInitial;



		/**
		* Bonus Track: 
		* Make the Profit method return the “annualized return” of the portfolio between the given dates.
		* TotalProfitPercentage = (valorFinal - valorInicial/valor inicial) 
		* Annualized return = (1 + RendimientoTotal)^(1/N)-1
		*/
		let percentage = ( totalFinish - totalInitial ) / totalInitial;
		let rendimientoTotal =  Math.pow((1 + percentage), (1/1)) - 1;

		
		//Return
		return [totalProfit, rendimientoTotal];
	}
}
 


const porFolio = new Portfolio();

let info = porFolio.getProfit(new Date('2022-01-01'),new Date('2022-03-01'));

console.log('Total profit: ' + info[0]);
console.log('Annualized return: ' + info[1]);



