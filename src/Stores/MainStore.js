import { EventEmitter } from "events";



class MainStore extends EventEmitter {
	constructor() {
		super();
		this.state = {
			step: 1,

			discovery: ['Banking', 'Business Expenses', 'Invoicing', 'Managing Cash Flow', 'Managing Projects & Jobs', 'Managing Staff & Payroll', 'Managing Stock & Suppliers', 'Managing Tax', 'Performance Reporting', 'Quoting'],
			choices: [],
		}
	}


}

const mainStore = new MainStore;


export default mainStore;