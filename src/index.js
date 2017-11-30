import './index.html';
import dva from 'dva';
import { browserHistory } from 'dva/router';
import './styles/style.css'


// 1. Initialize
const app = dva({
	history: browserHistory,
	onError (error) {
    	console.error(error)
  	}
});

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/app'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
