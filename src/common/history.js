import {createBrowserHistory} from "history";

// A singleton history object for easy API navigation
const history = createBrowserHistory();
//const history = createBrowserHistory({ basename: '/mix-all' });
export default history;
