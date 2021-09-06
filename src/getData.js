export default async () => {
    const request = await fetch('https://api.binance.com/api/v1/ticker/24hr');
    const result = await request.json();
    return result;
  };
  