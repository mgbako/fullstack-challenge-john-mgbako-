

export function removeDeletedItem(arrayOfItems: any, itemId: any, field = 'id') {
	const newItems = arrayOfItems;
	return newItems.filter((item: any) => {
		return item[field] !== itemId;
	});
}



export function justformatCurrency(amount: any) {
	return amount ? `${new Intl.NumberFormat().format(amount)}` : '';
}
export function formatCurrency(amount: any, currencyCode = 'NGN') {
	return amount ? `${new Intl.NumberFormat().format(amount)} ${currencyCode}` : '';
}
export function formatCurrencyBefore(amount: any, currencyCode = 'NGN') {
	return amount ? `${currencyCode} ${new Intl.NumberFormat().format(amount)}` : '';
}


export const calculate_age = (dob:Date) => { 
  var diff_ms = Date.now() - dob.getTime();
  var age_dt = new Date(diff_ms); 

  return Math.abs(age_dt.getUTCFullYear() - 1970);
}