import BTCUSDT from './img/BTCUSDT.png';
import ETHUSDT from './img/ETHUSDT.png';
import DOGEUSDT from './img/DOGEUSDT.png';
import LINKUSDT from './img/LINKUSDT.png';
import BNBUSDT from './img/BNBUSDT.png';
import XRPUSDT from './img/XRPUSDT.png';

export default (coin) => {
    switch(coin){
        case 'BTCUSDT':
            return BTCUSDT;
            break;
        case 'ETHUSDT':
            return ETHUSDT;
            break;
        case 'DOGEUSDT':
            return DOGEUSDT;
            break;
        case 'LINKUSDT':
            return LINKUSDT;
            break;
        case 'BNBUSDT':
            return BNBUSDT;
            break;
        case 'XRPUSDT':
            return XRPUSDT;
            break;
      }
  }