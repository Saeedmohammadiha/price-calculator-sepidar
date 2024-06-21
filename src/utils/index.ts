export function formatPrice(price: number): string {
    // Convert the number to a string
    const priceStr = price.toString();
  
    // Regular expression to add commas as thousand separators
    const formattedPrice = priceStr.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  
    return formattedPrice;
  }
  