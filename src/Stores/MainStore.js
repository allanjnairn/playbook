import { EventEmitter } from "events";



class MainStore extends EventEmitter {
	constructor() {
		super();
		this.state = {
			step: 1,

			discovery: ['Banking', 'Business Expenses', 'Invoicing', 'Managing Cash Flow', 'Managing Projects & Jobs', 'Managing Staff & Payroll', 'Managing Stock & Suppliers', 'Managing Tax', 'Performance Reporting', 'Quoting'],
			choices: [],

			questions: {
				1: ["When it comes to managing your business expenses, what areas do you find it impacts in your business when you don't manage them appropriately?",
				"What are the different ways that business expenses are coming into your business?",
				"What do you find takes up the most time in managing your business expenses?",
				"What sort of improvements do you think you could make to your business knowing that you were managing your business expenses correctly?"
				],
			},
			keyWords: {
				1: ["(budgeting, profit loss, overspending, planning, forecasting, decision making)",
				"(bill, credit card, cash payment)",
				"(collating, determining paid/unpaid, reporting",
				"(less stress, less time spent tracking finances)"
				]
			}
		}
	}


}

const mainStore = new MainStore;


export default mainStore;