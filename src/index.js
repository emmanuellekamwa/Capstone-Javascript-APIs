/* eslint no-unused-vars:0 */
import _ from 'lodash';
import './style.css';
import reservationsPopup from './reservationsPopup';
import displayToggle from './toggle';

const object = {
symbol:	"BTCUSDT",
priceChange:	"1474.87000000",
priceChangePercent:	"2.928",
weightedAvgPrice:	"51565.37326695",
prevClosePrice:	"50379.46000000",
lastPrice:	"51854.33000000",
lastQty:	"0.00552000",
bidPrice:	"51854.32000000",
bidQty:	"1.34138000",
askPrice:	"51854.33000000",
askQty:	"1.83474000",
openPrice:	"50379.46000000",
highPrice:	"52188.80000000",
lowPrice:	"50355.00000000",
volume:	"52808.54617200",
quoteVolume:	"2723092395.04434399",
openTime:	1630868367651,
closeTime:	1630954767651,
firstId:	1039031513,
lastId:	1040812366,
count:	1780854,
}


const button = document.getElementById('button');
const popupWindow = document.getElementById('popup');
button.onclick = () => {
  reservationsPopup(object);
  displayToggle(popupWindow);
}
