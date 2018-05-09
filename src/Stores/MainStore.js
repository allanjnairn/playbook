import { EventEmitter } from "events";
import axios from 'axios'



class MainStore extends EventEmitter {
	constructor() {
		super();
		this.state = {
			step: 1,
			manager: false,
			editing: true,

			discovery: ['Banking', 'Business Expenses', 'Invoicing', 'Managing Cash Flow', 'Managing Projects & Jobs', 'Managing Staff & Payroll', 'Managing Suppliers & Stock', 'Managing Tax', 'Performance Reporting', 'Quoting'],
			discoveryHover: ["Balancing accounts, maintaining budgets and performing reconciliation relating to money in & out of the business",
							"Keeping on top of money-spent, money-owing, budgeting and numbers relating to business expenses",
							"Charging customers for services, keeping track of work done and money-owed to the business",
							"Turn-around time and management of payment from clients for services delivered by the business",
							"Tracking and managing costs, spend, time spent and stock across concurrent business projects",
							"Looking after all pay, leave and super obligations for business employees",
							"Managing and keeping on top of stock in/out, levels, pricing, and trends",
							"Maintaining accurate, timely and compliant records regarding ATO obligations",
							"Visibility of key metrics and numbers that support decision making and timely action in the business",
							"Providing an estimate of service charges to potential and prospective customers"],
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
			},
			CurrentState: [
				"No direct visibility for monthly expenses unless hours spend on the data analysis",
				"All supplier orders done on phone and invoices received by post",
				"Supplier invoices paid as per the due date and monthly statements recieved by post reflecting the payment status",
				"Organise time with accountant to view the statements and help with P/L reporting from data"

			],
			FutureState: [
				"No direct visibility for monthly expenses unless hours spend on the data analysis",
				"All supplier orders done on phone and invoices received by post",
				"Supplier invoices paid as per the due date and monthly statements recieved by post reflecting the payment status",
				"Organise time with accountant to view the statements and help with P/L reporting from data"

			],




			"clientDiscovery": {
				"trial": ["What does your business do?", "What services do you offer and who are your clients?", "Can you tell me how your business is structured and how it operates?", "What tasks are the most important to the running and success of your business?", "Where do you think you have the most opportunity to improve business costs or time spent on business tasks?"],
				"upsellWinback": ["What does your business do?", "What services do you offer and who are your clients?", "Can you tell me how your business is structured and how it operates?", "What tasks are the most important to the running and success of your business?", "Where do you think you have the most opportunity to improve business costs or time spent on business tasks?"],
				"inboundLeads": ["What does your business do?", "What services do you offer and who are your clients?", "Can you tell me how your business is structured and how it operates?", "What tasks are the most important to the running and success of your business?", "Where do you think you have the most opportunity to improve business costs or time spent on business tasks?"],
				"mmem": ["What services do you offer and who are your clients?", "Can you tell me how your business is structured and how it operates?", "What tasks are the most important to the running and profitibility of your business?", "Where do you think you have the most opportunity to improve business costs or time spent on business tasks?"],


			},
			"softwareDiscovery": {
				"trial": ["What were your motivations in taking up the Trial?", "What experience(s) do you previously have using accounting software?", "What were you wanting to see or achieve during the Trial period?", "Can you tell me how you are envisioning the software helping your business?", "What do you know about cloud accounting and how it can help your business?"],
				"upsellWinback": ["How do you currently use your software within your business?", "What are you impressions and experience regarding how the software supports your business?", "What parts of the software do you think you have opportunity to utilise better?", "What do you know about cloud accounting and how it is helping busineses? "],
				"inboundLeads": ["What are your motivations in looking to take up MYOB software?", "What experience do you previously have using accounting software?", "Can you tell me how you are envisioning the software helping your business?", "What do you know about cloud accounting and how it is helping busineses?"],
				"mmem": ["What experience do you have using accounting software?", "What do you know about cloud accounting and how it is helping busineses?"],


			},

			"specialistClientDiscovery": {
				"1": ["What does your business do?", "What services do you offer and who are your clients?", "Can you tell me how your business is structured and how it operates?", "What tasks are the most important to the running and success of your business?", "Where do you think you have the most opportunity to improve business costs or time spent on business tasks?"]


			},
			"specialistSoftwareDiscovery": {
				"1": ["What were your motivations in taking up the Trial?", "What experience(s) do you previously have using accounting software?", "What were you wanting to see or achieve during the Trial period?", "Can you tell me how you are envisioning the software helping your business?", "What do you know about cloud accounting and how it can help your business?"]


			},




			targetQuestions: {
				'Banking': ["What's your current process for reconciling your banking transactions?", "What tasks in your reconciliaation process are the most time consuming for you?", "What sort of impacts can there be on your business if there are inaccuracies in your reconciliation?", "What sort of improvements do you think you could make to your business if you could have more accurate reconciliations and save time on doing them?"],
				'Business Expenses': ["What are the different ways you pay for business expenses?", "How do you currently track and manage your business expenses?", "What impacts on your business would it have if business expenses are not managed appropriately?"],
				'Invoicing': ["What is your current process for managing and tracking invoices?", "What are the biggest difficulties you have relating to invoicing?", "What impacts can it have on your business when you have issues with managing and tracking invoices?", "If you were able to alleviate the majority of your troubles managing and tracking invoicing - what impacts would that have on your business?"],
				'Managing Cash Flow': ["How do you currently manage and track your business' cash flow?", "What are the most difficult to manage cashflow tasks for your business?", "What cashflow tasks have the biggest impact on your business?", "What sort of impacts can you experience in your business when you don't manage critical cashflow tasks in the way you need to?"],
				'Managing Tax': ["What are the factors of Tax Compliance that are the biggest worry for you?", "What tasks of Tax Compliance generate the most work for you?", "What tasks of Tax Compliance do you know that you have the oppurtunity to do better?", "What impacts has your current Tax Compliance processes had on you and your business?"],
				'Performance Reporting': ["What are the most important metrics you need to keep on top of to gauge the performance of your business?", "How do you currently track/measure the performance of your business?", "What is the most difficult aspect of tracking metrics to generate reports?", "What sort of impacts can there be on your business if you don't have the right reporting visibility?"],
				'Managing Staff & Payroll': ["When it comes to managing staff and payroll, what tasks do you find yourself doing the most?", "When it comes to managing staff and payroll, what are the most time consuming tasks to complete?", "What are your main requirements for effectively managing staff and payroll?", "What sort of impacts are there on your business when you aren't able to manage staff and payroll effectively?"],
				'Quoting': ["How is quoting utilised within your business?", "What are your ideal requirements regarding effective use of quoting for your business?", "What are the biggest challenges you face with quoting in your business?", "What sort of impact do these challenges have on your business?"],
				'Managing Suppliers & Stock': ["How do you currently manage inventory, stock and suppliers in your business?", "What are the requirements your business has regarding effective managing of inventory, stock and suppliers?", "What are the biggest challenges you face managing inventory, stock and suppliers?", "What are the risks and impacts that can affect your business when you aren't manging inventory, stock and suppliers effectively?"],
				'Managing Projects & Jobs': ["How do you currently manage and track different projects and jobs that are within your business?", "What are the most important elements for you when it comes to managing and tracking projects and jobs?", "What are the biggest challenges you face managing and tracking different jobs and projects within your business?", "What are the risks and impacts that can affect your business when you aren't managing and tracking projects and jobs effectively?"],				
			},
			targetInformation: {
				'Banking': ["Manually comparing statements and collected receipts, using non-myob system/software, paying someone internally/externally to do it for me", "Collecting and tracking receipts, manually entering receipts and records, matching receipts to line item descriptions, collating and tracking random spends, collating and tracking cash spends", "Inaccurate tracking of cashflow vs. spend, Difficulty to accurately manage budgets, unintended overspending, reduced overall revenue/income", "Better budget planning and forecasting, increase revenue by better spend management, better time management to focus on other tasks"],
				'Business Expenses': ["Credit Cards, Debit Cards, Cash, PayPal, Bank Transfers, non-MYOB system/software", "Manually comparing statements and collected receipts, using non-MYOB system/software, paying someone internally/externally to do it for me", "Accurately tracking paid/unpaid items, collating all business expenses, generating business expense reporting, finding the time to reconciling business expenses, reconciling business expenses while on the road/field", "Inaccurate cashflow projection, completing accurate budgeting, unexpected profit loss, danger of exceeding operating budget "],
				'Invoicing': ["Generate via paper and post, generate via paper and personally deliver, use non-MYOB system/software, generate via email and send, don't track delivered invoices, track delivered invoices manually, track delivered invoices via spreadsheet, pay someone internally/externally to do it ", "Sending timely invoices out to clients, being able to invoice anywhere, tracking paid/unpaid,  invoice reporting", "Personal lifestyle, extra hours worked, cashflow, planning, purchasing stock", "Better cashflow, more personal time, more potential to grow the business"],
				'Managing Cash Flow': ["Manually comparing and tracking statements/invoices and receipts, using a ledger workbook, using non-MYOB system/software, using a spreadsheet, pay someone internally/externally to do it for me", " Getting accurate or real time cash position, tracking and managing outstanding invoices, getting regular and timely invoice payments, managing when I need to pay my owing invoices (eg: payroll, rent, stock, etc), determining how much cashflow to keep in reserve", "Not having an accurate view of current cash position, not knowing expected future cash position, not knowing when payments are due, not understanding how much available cash there is, trying to time owing payments, overdue invoices from clients, having to manage keeping money aside for tax", "Effectively being able to manage debt, being able to grow the business, being able to make purchases, not being able to properly manage payroll, negative credit rating, difficulties when attempting to obtain business loans"],
				'Managing Tax': ["Filing tax on time, filing tax accurately, ensuring BAS/GST accuracy, completing accurate Bank Reconciliation", "Putting together GST/BAS lodgements, performing Bank reconciliation, working with accounting software, getting everything to my accountant/bookkeeper", "Bank reconciliation, calculating BAS/GST, timeframe to provide relevant documents ", "Additional costs paying someone internally, additional costs paying someone externally, loss of personal time, stress, taking time away from other business tasks, have had to comply with an audit/investigation"],
				'Performance Reporting': ["Profit margin, historical vs. current performance, market share growth, volume of jobs/work, sales volumes, stock volumes, business expenses, budget tracking", "Don't track at all, use multiple sources, use excel files, using non-MYOB system/software, handwritten, bank account balances, paying someone internally/externally to do it for me", "Time spent finding information, time spent compiling information, figuring out how to build reports, time spent ensuring reports are correct", "Risk of making uninformed decisions, blowing out budgets, running out of stock, over-ordering, missing invoices to be paid (from clients), having overdue invoices that I owe"],
				'Managing Staff & Payroll': ["Tracking working hours, managing annual leave, managing sick leave, handling Super Payments", "Super, tracking working hours, tracking leave, executing payroll, calculating employer super contributions", "Catering for employee volume, being able to track working hours, being able to manage casual/PT/FT staff rollover, manage annual leave, manage sick leave, performing and execute Super, perform and execute payroll quickly and accurately", "Over-and-under paying employees, time spent reconciling hours, employee morale and engagement, inaccurate staff planning"],
				'Quoting': ["done onsite, done offsite, done by multiple staff members, use paper quotes, use SMS quotes, use email quotes, perform specialised quote pricing for particular clients ", "being able to generate and send quickly, sending via email, tracking quotes sent, tracking converted quotes, selecting custom pricing, selecting and add line items, personalisation & business branding", "time to generate and send quote, flexibility to do quotes anywhere,  personalisation of quotes, tracking quotes sent, tracking converted quotes, selecting custom pricing, selecting and adding line items", "winning new business, forgetting to generate quotes, not being able to give accurate pricing, time lost generating quotes, not being able to follow up sent quotes"],
				'Managing Suppliers & Stock': ["manage using multiple sources/systems, use non-MYOB system/software, manage manually in a book, manage in excel, manage in a single system, manage via filing, pay someone internally/externally to do it, I manage by memory", "quick view of stock levels, compare purchase costs and selling prices, combining stock components, build stock and adjust inventory values, track stock components, notification system, being able to manage supplier lists", "inaccurate stock level counts, Realtime stock level counts, determining when to order stock, anticipating customer demand, looking at stock history, managing pricelists, managing purchase costs and selling price", "running out of stock for client orders, being overstocked, missing payment to suppliers, client/supplier dissatisfaction"],
				'Managing Projects & Jobs': ["manage using multiple sources/systems, use non-MYOB system/software, manage manually in a book, manage in excel, manage in a single system, manage via filing, pay someone internally/externally to do it, manage by memory", "accurate job billing, knowing time spent by employees, tracking costs per job, tracking payroll costs per job, tracking inventory used per job, managing custom pricing for jobs, tracking 3rd party costs for jobs", "collating an accurate view of costs, collating an accurate view of time spent, collating an accurate view of inventory used, accurate job billing, tracking job capacity, being able to forecast resourcing for new jobs", "over-committing to delivering on jobs, missing deadlines, not having capacity to take on new jobs, under/over estimation on job requirements, business perception from external parties, loss of revenue from failing to deliver"],				
			},
			currentState: {
				'Banking': ["A volume of manual tasks associated with managing Banking tasks that take up time to complete and increase risk of generating inaccuracies", "Additional costs from paying someone to complete this task for your business and can also take up time for both parties to ensure accuracy", "Limited generation, availability and visibility of reporting related to Banking tasks"],
				'Business Expenses': ["A volume of manual tasks associated with managing Business Expenses that take up time to complete  and increase risk of generating inaccuracies", "Additional costs from paying someone to complete this task for your business which can take up time for both parties to ensure accuracy", "Limited generation, availability and visibility of reporting related to Business Expenses"],
				'Invoicing': ["A volume of manual tasks associated with Invoicing that are timely to complete and increase risk of generating inaccuracies", "Additional costs involved with paying someone to complete this task for your business, which can also involve a lot of time for both parties to ensure accuracy", " Limited generation, availability and visibility of reporting related to Invoices"],
				'Managing Cash Flow': ["A volume of manual tasks associated with managing Cashflow that take up time to complete  and increase risk of generating inaccuracies", "Additional costs from paying someone to complete this task for your business which can take up time for both parties to ensure accuracy", " Limited generation, availability and visibility of reporting related to managing Cashflow"],
				'Managing Tax': ["A volume of manual tasks associated with managing Tax/BAS/GST that take up time to complete and increase risk of generating inaccuracies", "Additional costs from paying someone to complete this task for your business which can take up time for both parties to ensure accuracy"],
				'Performance Reporting': ["A volume of manual tasks associated with managing Reports that take up time to complete and increase risk of generating inaccuracies", "Additional costs from paying someone to complete this task for your business which can take up time for both parties to ensure accuracy", "Limited generation, availability and visibility of reporting related to key business metrics"],
				'Managing Staff & Payroll': ["A volume of manual tasks associated with managing Staff and Payroll that are timely to complete and increase risk of generating inaccuracies", "Additional costs from paying someone to complete this task for your business which can take up time for both parties to ensure accuracy", "Limited generation, availability and visibility of reporting related to managing Staff & Payroll"],
				'Quoting': ["A volume of manual tasks associated with populating and tracking quotes that are timely to complete and increase risk of generating inaccuracies"],
				'Managing Suppliers & Stock': ["A volume of manual tasks associated with managing Suppliers & Stock that are timely to complete and increase risk of generating inaccuracies", "Additional costs involved with paying someone to complete this task for your business, which can also involve a lot of time for both parties to ensure accuracy", "Limited generation, availability and visibility of reporting related to managing Suppliers & Stock"],
				'Managing Projects & Jobs': ["A volume of manual tasks associated with managing Projects and Jobs that are timely to complete and increase risk of generating inaccuracies", "Additional costs involved with paying someone to complete this task for your business, which can also involve a lot of time for both parties to ensure accuracy", "Limited generation, availability and visibility of reporting related to managing Projects & Jobs"],		
			},
			futureState: {
				'Banking': ["Automating and reducing a number of manual tasks and risk of innacuracies associated with managing Banking tasks", "Being able to generate real-time and historical reports on a Banking related metrics in your business", "Being able to collaborate online with your accountant about Banking tasks without having to travel to see them"],
				'Business Expenses': ["Automating and reducing a number of manual tasks and risk of inaccuracies associated with managing Business Expenses", "Being able to generate real-time and historical reports on a number of Business Expenses related metrics in your business", "Being able to collaborate online with your accountant regarding Business Expenses without having to travel to see them"],
				'Invoicing': ["Automating and reducing a number of manual tasks associated with tracking collating, and generating invoices", "Being able to generate invoices from anywhere using your smartphone", "Clients will have more direct options to make payment on invoices"],
				'Managing Cash Flow': ["Automating and reducing a number of manual tasks and risk of innacuracies associated with managing Cashflow", "Being able to generate invoices from anywhere using your smartphone", "Being able to attach payment options on invoices", "Being able to generate real-time and historical reports on a Cashflow related metrics in your business", "Being able to collaborate online with your accountant about Cashflow without having to travel to see them"],
				'Managing Tax': ["Automating and reducing a number of manual tasks and risk of inaccuracies associated with managing Tax/BAS/GST", "Being able to collaborate online with your accountant about managing Tax/BAS/GST without having to travel to see them"],
				'Performance Reporting': ["Automating and reducing a number of manual tasks and risk of innacuracies associated with managing Reports", "Being able to generate real-time and historical reports on a number of metrics in your business", "Being able to collaborate online with your accountant regarding reporting without having to travel to see them"],
				'Managing Staff & Payroll': ["Automating and reducing a number of manual tasks and risk of innacuracies associated with managing Staff and Payroll", "Automating and reducing a number of manual tasks and risk of innacuracies associated with managing Super", "The ability to execute payroll when required in a timely manner", "Being able to generate real-time and historical reports on a number of Staff and Payroll related metrics in your business", "Being able to collaborate online with your accountant regarding Staff and Payroll without having to travel to see them"],
				'Quoting': ["Automating and reducing a number of manual tasks associated with generating personalised quotes", "The ability to track and turn quotes into invoices"],
				'Managing Suppliers & Stock': ["Automating and reducing a number of manual tasks and risk of innacuracies associated with managing Suppliers & Stock", "Being able to generate real-time and historical reports on a number of Supplier & Stock related metrics in your business", "Being able to collaborate online with your accountant regarding Suppliers & Stock"],
				'Managing Projects & Jobs': ["Automating and reducing a number of manual tasks associated with managing jobs/projects", "The ability to generate reporting visibility", "Budgeting for future jobs"],				
			},
			insightEssentials: {
				'Banking': ["With an automated banking reconciliation process, we have found MYOB Online service subscribers can approximately reduce the time they spend on data entry and reconciliation by half. ", "With an automated banking reconciliation process, we have found MYOB Online service subscribers approximately save over $3,000 pa/$280 per month on time spend doing manual bank reconciliation tasks.", "3 out of 4 MYOB Online users agree that MYOB Online service subscriptions make their bank reconciliations easier, more accurate, less manual and quicker to do (slide 28)"],
				'Business Expenses': ["With an automated banking reconciliation process, we have found MYOB Online service subscribers can approximately reduce the time they spend on data entry and reconciliation by 50%. ", "With an automated banking reconciliation process, we have found MYOB Online service subscribers approximately save over $3,000 pa/$280 per month on time spend doing manual bank reconciliation tasks.", " 3 out of 4 MYOB Online users agree that MYOB Online service subscriptions make their bank reconciliations easier, more accurate, less manual and quicker to do", "9 out of 10 MYOB Online service subscribers say that the service has ‘improved the simplicity’ of their accounting & book-keeping processes"],
				'Invoicing': ["When it comes to getting payment for invoices, approximately only 59% of invoices get paid on time", "Feedback from MYOB AccountRight Online service subscribers was that online invoicing and tracking helped them get paid 32% faster.", "Feedback from MYOB AccountRight Online service subscribers was that the ability to take credit card payment from invoices meant they were getting paid up to 3 times faster.", "2 out of 3 clients have advised that MYOB Online service subscriptions have improved their invoicing and payment accuracy along with saving time and effort", "MYOB Online service subscribers said they have saved a quarter of all the time they used to spend on customer sales related accounting tasks ", "Clients who have moved from a non-accounting package to MYOB Online Service subscriptions say they now save a day a month (~7h) doing customer sales related accounting tasks"],
				'Managing Cash Flow': ["Managing cashflow has been recognised as one of the most prominent pain points for business owners in AU. When it comes to getting payment for invoices, approximately only 59% of invoices get paid on time", "2 out of 3 clients have advised that MYOB Online service subscriptions have improved their invoicing and payment accuracy along with saving time and effort", "MYOB Online service subscribers said they have saved a quarter of all the time they used to spend on customer sales related accounting tasks", "Clients who have moved from a non-accounting package to MYOB Online Service subscriptions say they now save a day a month (~7h) doing customer sales related accounting tasks"],
				'Managing Tax': ["2 out of 3 clients who have MYOB Online service subscriptions have advised that being able to collaborate online with their accountant is one of the improvements of moving online"],
				'Performance Reporting': ["Small businesses who have access to good reporting can make better business decisions, improve profitability and grow their business"],
				'Managing Staff & Payroll': ["Businesses that are using accounting software for the first time, found that MYOB Online service subscription has cut their time spent managing payroll each month by two-thirds", "Businesses that changed from other accounting software to MYOB Online service subscriptions say they spend up half-a-day a month less on Payroll tasks", "80% of MYOB Online service subscribers say it has helped their business stay more compliant with Payroll laws"],
				'Quoting': ["Clients who have moved from a non-accounting package to MYOB Online Service subscriptions say they now save a day a month (~7h) doing customer sales related accounting tasks"],
				'Managing Suppliers & Stock': ["Having good supplier relationships can help you get longer terms for payment, which helps you better manage cashflow, or discounts for purchases.", "Having good supplier relationships can help you get longer terms for payment, which helps you better manage cashflow, or discounts for purchases.", "Inventory is one of your most valuable assets, so it's important to know how to walk that fine line between too little and too much stock, to ensure you're able to provide customers with what they need, but not be holding too much inventory."],
				'Managing Projects & Jobs': ["Dividing your income in to jobs or profit centres enables you to work out whether the work you're doing is profitable, and helps you decide which work to focus on for better profitability in the future."],				
			},
			insightAccountRight: {
				'Banking': ["With an automated banking reconciliation process, we have found MYOB Online service subscribers can approximately reduce the time they spend on data entry and reconciliation by half. ", "With an automated banking reconciliation process, we have found MYOB Online service subscribers approximately save over $3,000 pa/$280 per month on time spend doing manual bank reconciliation tasks.", "3 out of 4 MYOB Online users agree that MYOB Online service subscriptions make their bank reconciliations easier, more accurate, less manual and quicker to do (slide 28)"],
				'Business Expenses': ["With an automated banking reconciliation process, we have found MYOB Online service subscribers can approximately reduce the time they spend on data entry and reconciliation by 50%.", "With an automated banking reconciliation process, we have found MYOB Online service subscribers approximately save over $3,000 pa/$280 per month on time spend doing manual bank reconciliation tasks.", "3 out of 4 MYOB Online users agree that MYOB Online service subscriptions make their bank reconciliations easier, more accurate, less manual and quicker to do", "9 out of 10 MYOB Online service subscribers say that the service has ‘improved the simplicity’ of their accounting & book-keeping processes"],
				'Invoicing': ["When it comes to getting payment for invoices, approximately only 59% of invoices get paid on time", "Feedback from MYOB AccountRight Online service subscribers was that online invoicing and tracking helped them get paid 32% faster.", "Feedback from MYOB AccountRight Online service subscribers was that the ability to take credit card payment from invoices meant they were getting paid up to 3 times faster.", "2 out of 3 clients have advised that MYOB Online service subscriptions have improved their invoicing and payment accuracy along with saving time and effort", "MYOB Online service subscribers said they have saved a quarter of all the time they used to spend on customer sales related accounting tasks", "Clients who have moved from a non-accounting package to MYOB Online Service subscriptions say they now save a day a month (~7h) doing customer sales related accounting tasks"],
				'Managing Cash Flow': ["Managing cashflow has been recognised as one of the most prominent pain points for business owners in AU. When it comes to getting payment for invoices, approximately only 59% of invoices get paid on time", "2 out of 3 clients have advised that MYOB Online service subscriptions have improved their invoicing and payment accuracy along with saving time and effort", "MYOB Online service subscribers said they have saved a quarter of all the time they used to spend on customer sales related accounting tasks", "Clients who have moved from a non-accounting package to MYOB Online Service subscriptions say they now save a day a month (~7h) doing customer sales related accounting tasks"],
				'Managing Tax': ["2 out of 3 clients who have MYOB Online service subscriptions have advised that being able to collaborate online with their accountant is one of the improvements of moving online"],
				'Performance Reporting': ["Small businesses who have access to good reporting can make better business decisions, improve profitability and grow their business"],
				'Managing Staff & Payroll': ["Businesses that are using accounting software for the first time, found that MYOB Online service subscription has cut their time spent managing payroll each month by two-thirds", "Businesses that changed from other accounting software to MYOB Online service subscriptions say they spend up half-a-day a month less on Payroll tasks", "80% of MYOB Online service subscribers say it has helped their business stay more compliant with Payroll laws"],
				'Quoting': ["Clients who have moved from a non-accounting package to MYOB Online Service subscriptions say they now save a day a month (~7h) doing customer sales related accounting tasks"],
				'Managing Suppliers & Stock': ["Having good supplier relationships can help you get longer terms for payment, which helps you better manage cashflow, or discounts for purchases.", "Inventory is one of your most valuable assets, so it's important to know how to walk that fine line between too little and too much stock, to ensure you're able to provide customers with what they need, but not be holding too much inventory."],
				'Managing Projects & Jobs': ["Dividing your income in to jobs or profit centres enables you to work out whether the work you're doing is profitable, and helps you decide which work to focus on for better profitability in the future."],				
			},
			insightAccountEdge: {
				'Banking': ["No insights available - please advise client of the key product features that will benefit their business"],
				'Business Expenses': ["No insights available - please advise client of the key product features that will benefit their business"],
				'Invoicing': ["When it comes to getting payment for invoices, approximately only 59% of invoices get paid on time"],
				'Managing Cash Flow': ["Managing cashflow has been recognised as one of the most prominent pain points for business owners in AU. When it comes to getting payment for invoices, approximately only 59% of invoices get paid on time"],
				'Managing Tax': ["No insights available - please advise client of the key product features that will benefit their business"],
				'Performance Reporting': ["Small businesses who have access to good reporting can make better business decisions, improve profitability and grow their business"],
				'Managing Staff & Payroll': ["No insights available - please advise client of the key product features that will benefit their business"],
				'Quoting': ["No insights available - please advise client of the key product features that will benefit their business"],
				'Managing Suppliers & Stock': ["Having good supplier relationships can help you get longer terms for payment, which helps you better manage cashflow, or discounts for purchases.", "Inventory is one of your most valuable assets, so it's important to know how to walk that fine line between too little and too much stock, to ensure you're able to provide customers with what they need, but not be holding too much inventory."],
				'Managing Projects & Jobs': ["Dividing your income in to jobs or profit centres enables you to work out whether the work you're doing is profitable, and helps you decide which work to focus on for better profitability in the future."],				
			},
			featureAndBenefitAccountEssentials: {
				'Banking': ["(Bankfeeds) - Automate and streamline the matching of transactions to reduce data entry, save time reconciling and increase accuracy of cash management and reporting", "(Collaboration) - Interact with your accountant/bookkeeper more efficiently by allowing them to check your numbers anytime and help keep your business on track via direct access ", "(Reporting) - Utilise reporting to get visibility on and track business numbers easily & whenever you need to assist in managing reconciliation and making business decisions", "(Budgets) - Utilise budgeting to set finance related goals for your business and continuously monitor your performance against your budget to support decision making and action taking"],
				'Business Expenses': ["(Smart Bills) - Paperlessly store your supplier invoices and bills to support better management of money owing and save time fulfilling tax obligations", "(BankFeeds) - Automate and streamline the matching of transactions to reduce data entry,  save time reconciling and increase accuracy of cash management and reporting", "(Collaboration) - Interact with your accountant/bookkeeper more efficiently by allowing them to check your Business Expense related numbers anytime and help keep your business on track via direct access", "(Reporting) - Utilise reporting to get visibility on and track business numbers easily & whenever you need to assist in managing Business Expenses and making business decisions", "(Budgets) - Utilise budgeting to set finance related goals for your business and continuously monitor your performance against your budget to support decision making and action taking"],
				'Invoicing': ["(On The Go App) - Increase your invoicing delivery speed and support quicker payment turn around by being able to send customers invoices from your SmartPhone", "(PayDirect Online) - Sign up and give your customers an easier way to make an online payment through a Pay Now button on their invoice to help improve your cashflow", "(Online Email & Invoicing) - Enable better management of money-owed by emailing invoices directly from Essentials making it easy for your customers to access invoices online and for you to track what actions they have taken on their invoice", "(Quote2Invoice Tracking) - Enable yourself to easily follow-up potential customers by tracking quotes sent and save time when you need to converts quotes into invoices", "(Reporting) - Utilise reporting to get visibility on and track business numbers easily & whenever you need to assist in managing invoicing and making business decisions", "(Collaboration) - Interact with your accountant/bookkeeper more efficiently by allowing them to check your Invoice related numbers anytime and help keep your business on track via direct access"],
				'Managing Cash Flow': ["(On The Go App) - Increase your invoicing delivery speed and support quicker payment turn around by being able to send customers invoices from your SmartPhone", "(PayDirect Online) - Sign up and give your customers an easier way to make an online payment through a Pay Now button on their invoice to help improve your cashflow", "(Online Email & Invoicing) - Enable better management of money-owed by emailing invoices directly from Essentials making it easy for your customers to access invoices online and for you to track what actions they have taken on their invoice", "(Quote2Invoice Tracking) - Enable yourself to easily follow-up potential customers by tracking quotes sent and save time when you need to converts quotes into invoices", "(Collaboration) - Interact with your accountant/bookkeeper more efficiently by allowing them to check your cashflow related numbers anytime and help keep your business on track via direct access", "(Budgets) - Utilise budgeting to set finance related goals for your business and continuously monitor your performance against your budget to support decision making and action taking"],
				'Managing Tax': ["(Collaboration) - Interact with your accountant/bookkeeper more efficiently by allowing them to check your Tax related numbers anytime and help keep your business on track via direct access", "(Auto Updates) - Be on top of compliance and increase piece of mind through automated tax change updates", "(SmartBills) - Paperlessly store your supplier invoices and bills to support better management of money owing and save time fulfilling tax obligations", "(Reporting) - Utilise reporting to get visibility on, generate and track business numbers easily & whenever you need to assist in managing BAS and making business decisions"],
				'Performance Reporting': ["(Dashboard) - Get a real-time snapshot of your key business metrics everytime you open Essentials to help you identify areas of focus and money owed", "(Performance Reporting) - Generate reporting on Profit & Loss, Invoicing, Business Expenses and other key business metrics easily and anytime to help you track your performance and make business decisions", "(Payroll Reporting) - Generate reporting on Pay Runs and Payroll Summaries easily and anytime to help you track and manage your Payroll obligations", "(Budgets) - Utilise budgeting to set finance related goals for your business and continuously monitor your performance against your budget to support decision making and action taking", "(Collaboration) - Interact with your accountant/bookkeeper more efficiently by allowing them to check your key business numbers anytime and help keep your business on track via direct access"],
				'Managing Staff & Payroll': ["(SuperStream) - Save time, ensure accuracy and remain compliant by make Super payments for employees and sending Super contribution data to the ATO electronically", "(Payment Summary Wizard) - Stay compliant with the ATO by easily generating Payment Summaries for all your staff", "(YourPay) - Reduce manual Payroll processes by enabling your team members to log their hours and get their payslips by using the YourPay app", "(Payroll Reporting) - Generate reporting on Pay Runs and Payroll Summaries easily and anytime to help you track and manage your Payroll obligations", "(Automatic Tax Updates) - Be on top of compliance and increase piece of mind through automated tax change updates", "(Full Leave Tracking) -  Easily customise leave accruals and be across available sick and annual leave hours for your team members to better assist with workforce planning decisions", "(Collaboration) - Interact with your accountant/bookkeeper more efficiently by allowing them to check your key Payroll-related numbers anytime and help keep your business on track via direct access"],
				'Quoting': ["(Quote to Invoice tracking) - Enable yourself to easily follow-up potential customers by tracking quotes sent and save time when you need to converts quotes into invoices"],
				'Managing Suppliers & Stock': ["If Managing Stock & Suppliers is a critical task - please promote AR to the client", "( Items) - Reduce the time involved in generating invoicing and keeping accurate records of items and services you sell by setting up a list that updates accordingly to invoices you generate"],
				'Managing Projects & Jobs': ["If Managing Jobs or Projects is a critical task - please promote AR to the client"],				
			},
			featureAndBenefitAccountRight: {
				'Banking': ["(Bankfeeds) - Automate and streamline the matching of transactions to reduce data entry,  save time reconciling and increase accuracy of cash management and reporting", "(Collaboration) - Interact with your accountant/bookkeeper more efficiently by allowing them to check your numbers anytime and help keep your business on track via direct access ", "(Advanced Reporting) - Utilise reporting to get visibility on and track business numbers easily & whenever you need to assist in managing reconciliation and making business decisions", "(Budgets) - Utilise budgeting to set finance related goals for your business and continuously monitor your performance against your budget to support decision making and action taking"],
				'Business Expenses': ["(Smart Bills) - Paperlessly store your supplier invoices and bills to support better managing your money owing and saving time fulfilling tax obligations", "(BankFeeds) - Automate and streamline the matching of transactions to reduce data entry,  save time reconciling and increase accuracy of cash management and reporting", "(Collaboration) - Interact with your accountant/bookkeeper more efficiently by allowing them to check your Business Expense related numbers anytime and help keep your business on track via direct access", "(Advanced Reporting) - Utilise reporting to get visibility on and track business numbers easily & whenever you need to assist in managing Business Expenses and making business decisions", "(Budgets) - Utilise budgeting to set finance related goals for your business and continuously monitor your performance against your budget to support decision making and action taking"],
				'Invoicing': ["(On The Go App)  - Increase your invoicing delivery speed and support quicker payment turn around by being able to send customers invoices from your SmartPhone", "(PayDirect Online) - Sign up and give your customers an easier way to make an online payment through a Pay Now button on their invoice to help improve your cashflow", "(Inventory Module) - Save time managing and increase accuracy of stock levels views with automated stock level updates whenever you generate an inventory transaction", "(Online Email & Invoicing) - Enable better management of money-owed by emailing invoices directly from AccountRight making it easy for your customers to access invoices online and for you to track what actions they have taken on their invoice", "(Quote2Invoice Tracking) - Enable yourself to easily follow-up potential customers by tracking quotes sent and save time when you need to converts quotes into invoices", "(Advanced Reporting) - Utilise reporting to get visibility on and track business numbers easily & whenever you need to assist in managing invoicing and making business decisions", "(Collaboration) - Interact with your accountant/bookkeeper more efficiently by allowing them to check your Invoice related numbers anytime and help keep your business on track via direct access"],
				'Managing Cash Flow': ["(On The Go App) - Increase your invoicing delivery speed and support quicker payment turn around by being able to send customers invoices from your SmartPhone", "(PayDirect Online) - Sign up and give your customers an easier way to make an online payment through a Pay Now button on their invoice to help improve your cashflow", "(Online Email & Invoicing) - Enable better management of money-owed by emailing invoices directly from Essentials making it easy for your customers to access invoices online and for you to track what actions they have taken on their invoice", "(Advanced Reporting) - Generate reporting on Cashflow, Money-Owing and other key business metrics easily and anytime to help you track, manage and improve your cashflow", "(Quote2Invoice Tracking) - Enable yourself to easily follow-up potential customers by tracking quotes sent and save time when you need to converts quotes into invoices", "(Business Insights) - Get a real-time snapshot of your key business metrics to help you identify areas of focus regarding money owing to and from", "(Collaboration) - Interact with your accountant/bookkeeper more efficiently by allowing them to check your cashflow related numbers anytime and help keep your business on track via direct access", "(Budgets) - Utilise budgeting to set finance related goals for your business and continuously monitor your performance against your budget to support decision making and action taking"],
				'Managing Tax': ["(Online BAS) -  Save time handling BAS by generating and lodging BAS to the ATO directly from AR", "(SmartBills) - Store your bills and invoices securely to reduce time associated with fulfilling your tax obligations", "(Collaboration) - Interact with your accountant/bookkeeper more efficiently by allowing them to check your Tax related numbers anytime and help keep your business on track via direct access", "(Auto Updates) - Be on top of compliance and increase piece of mind through automated tax change updates", "(Advanced Reporting) - Utilise reporting to get visibility on, generate and track business numbers easily & whenever you need to assist in managing BAS and making business decisions related to Tax"],
				'Performance Reporting': ["(Advanced Reporting) - Generate detailed reports on Profit and Loss, Invoices, Business Expenses, Payroll and Cashflow and other key business metrics easily and anytime to help you track your performance and make business decisions", "(Advanced Payroll Reporting) - Generate reporting on Payroll, Leave, Wages, Liabilities, Superannuation, Payroll summaries easily and anytime to help you track and manage your Payroll obligations and streamline EOFY reconciliation", "(CRM) - Manage cashflow better by having a streamlined overview of clients with outstanding debt, how much, how overdue and who you owe payment to", "(Business Insights) - Get a real-time snapshot of your key business metrics to help you identify areas of focus regarding money owing to and from", "(Budgeting) - Utilise budgeting to set finance related goals for your business and continuously monitor your performance against your budget to support decision making and action taking", "(Collaboration) - Interact with your accountant/bookkeeper more efficiently by allowing them to check your key business numbers anytime and help keep your business on track via direct access"],
				'Managing Staff & Payroll': ["(PaySuper) - Save time and streamline managing super by electronicly lodging and paying super obligations directly from AR", "(Payment Summary Wizard) - Stay compliant with the ATO by easily generating Payment Summaries for all your staff", "(Automatic Tax Updates) - Be on top of compliance and increase piece of mind through automated tax change updates", "(Advanced Payroll Reporting) - Generate reporting on Payroll, Leave, Wages, Liabilities, Superannuation, Payroll summaries easily and anytime to help you track and manage your Payroll obligations and streamline EOFY reconciliation", "(State based payroll tax) - Save time on manual work for payroll by automating the calculation of your state based payroll tax obligations", "(Time Billing) - Save time and easily manage invoice generation for time-based services by using time-billing for both once-off and reoccuring customers", "(Timesheets) - Better manage the hours you need to pay your team members by using timesheets along with getting visibility on hours worked across your business", "(Full Leave Tracking) - Easily customise leave accruals and be across available sick and annual leave hours for your team members to better assist with workforce planning decisions", "(Collaboration) - Interact with your accountant/bookkeeper more efficiently by allowing them to check your key Payroll-related numbers anytime and help keep your business on track via direct access"],
				'Quoting': ["(Quote2Invoice Tracking) - Enable yourself to easily follow-up potential customers by tracking quotes sent and save time when you need to converts quotes into invoices", "(Advanced Reporting) - Utilise reporting to get visibility on and track business numbers easily & whenever you need to assist in managing quoting, orders and invoicing and support increasing new business and cashflow"],
				'Managing Suppliers & Stock': ["(Advanced Inventory Module) - Reduce the time involved in keeping accurate records of stock, movement & levels to assist with ongoing inventory management and stocktake activities", "(Sell Items) - Have assurance with source of truth to assist managing inventory by being able to set inventory alerts, automating inventory updates based on business activity and having real-time visibility on inventory levels", "(Price List) - Set up pricing parameters and save time generating invoices when dealing with orders for specialty customers, certain order volumes and discounts", "(Advanced Reporting) - Utilise reporting to get visibility on and track business numbers easily & whenever you need to assist in managing stock", "(Collaboration) - Interact with your accountant/bookkeeper more efficiently by allowing them to check your inventory and Pricing related numbers anytime and help keep your business on track via direct access"],
				'Managing Projects & Jobs': ["(Advanced Job Management) -  Save time and make better decsions by being able to track costing, stock and spend across multiple jobs and get real-time visibility and insight  into key job performance metrics", "(Advanced Reporting) - Utilise reporting to get visibility of and track business numbers easily & whenever you need to assist in managing Projects or Jobs", "(Collaboration) - Interact with your accountant/bookkeeper more efficiently by allowing them to check your Project and Job related numbers anytime and help keep your business on track via direct access"],				
			},
			featureAndBenefitAccountEdge: {
				'Banking': ["(Import Bank Statements) - Assist in reducing data entry and time spent on reconcilliation by manually loading in bank-statements ", "(Budgets) - Utilise budgeting to set finance related goals for your business and continuously monitor your performance against your budget to support decision making and action taking", "(Advanced Reporting) - Utilise reporting to get visibility on and track business numbers easily & whenever you need to assist in managing reconciliation and making business decisions"],
				'Business Expenses': ["(Budgets) - Utilise budgeting to set finance related goals for your business and continuously monitor your performance against your budget to support decision making and action taking", "(Import Bank Statements) - Assist in reducing data entry and time spent on reconcilliation by manually loading in bank-statements ", "(Advanced Reporting) - Utilise reporting to get visibility on and track business numbers easily & whenever you need to assist in managing Business Expenses and making business decisions"],
				'Invoicing': ["(AE App) - Increase your invoicing delivery speed and support quicker payment turn around by being able to send customers invoices from your SmartPhone", "(Quote2Invoice Tracking) - Enable yourself to easily follow-up potential customers by tracking quotes sent and save time when you need to convert quotes into invoices", "(Advanced Reporting) - Utilise reporting to get visibility on and track business numbers easily & whenever you need to assist in managing invoicing and making business decisions"],
				'Managing Cash Flow': ["(Cashflow Reporting) - Save time and generate Cashflow & Money-Owing reports to get better visibility regarding your key metrics to assist managing your cashflow", "(CRM) - Increase your ability to manage cashflow better by having a streamlined overview of clients with outstanding debt", "(AE App) - Increase your invoicing and quote delivery speed and support quicker payment turn-around by being able to send customers invoices from your SmartPhone"],
				'Managing Tax': ["(BAS/GST Reporting) - Be more efficient calculating and tracking GST and generating BAS reports to increase visibility and better manage your BAS and GST obligations", "(Advanced Reporting) - Utilise reporting to get visibility on, generate and track business numbers easily & whenever you need to assist in managing BAS and making business decisions related to Tax", "(Collaboration) - Interact with your accountant/bookkeeper more efficiently by allowing them to access your file due to enabled MAC/PC-compatibility"],
				'Performance Reporting': ["(Advanced Reporting) - Generate detailed reports on Profit and Loss, Invoices, Business Expenses, Payroll and Cashflow and other key business metrics easily and anytime to help you track your performance and make business decisions", "(Payroll Reporting) - Generate reporting on Payroll, Leave, Wages, Liabilities, Superannuation, Payroll summaries easily and anytime to help you track and manage your Payroll obligations and streamline EOFY reconciliation", "(Budgeting) - Utilise budgeting to set finance related goals for your business and continuously monitor your performance against your budget to support decision making and action taking"],
				'Managing Staff & Payroll': ["(SuperStream) - Save time, increase accuracy and remain compliant in managing Super by making Super payments for employees and sending Super contribution data to the ATO electronically", "(Advanced PayRoll Categories) - Set pay rates for at a group level Fully customisable payroll categories to reduce manual tasks regarding managing payroll", "(Payment Summary Wizard) - Stay compliant with the ATO by easily generating Payment Summaries for all your staff", "(Advanced Payroll Reporting) - Generate reporting on Payroll, Leave, Wages, Liabilities, Superannuation, Payroll summaries easily and anytime to help you track and manage your Payroll obligations and streamline EOFY reconciliation", "(Automatic Tax Updates) - Be on top of compliance and increase piece of mind through automated tax change updates", "(Timesheets) - Better manage the hours you need to pay your team members by using timesheets along with getting visibility on hours worked across your business", "(Full Leave Tracking) - Easily customise leave accruals and be across available sick and annual leave hours for your team members to better assist with workforce planning decisions"],
				'Quoting': ["(Quote2Invoice Tracking) - Enable yourself to easily follow-up potential customers by tracking quotes sent and save time when you need to converts quotes into invoices", "(Advanced Reporting) - Utilise reporting to get visibility on and track business numbers easily & whenever you need to assist in managing quoting, orders and invoicing and support increasing new business and cashflow"],
				'Managing Suppliers & Stock': ["(Advanced Inventory Module) - Reduce the time involved in keeping accurate records of stock, movement & levels to assist with ongoing inventory management and stocktake activities", "(Advanced Inventory Module) - Reduce the time involved in keeping accurate records of stock, movement & levels to assist with ongoing inventory management and stocktake activities", "(Price List) - Set up pricing parameters and save time generating invoices when dealing with orders for specialty customers, certain order volumes and discounts", "(Advanced Reporting) - Utilise reporting to get visibility on and track business numbers easily & whenever you need to assist in managing stock"],
				'Managing Projects & Jobs': ["(Advanced Job Management) - Save time and make better decsions by being able to track costing, stock and spend across multiple jobs and get real-time visibility and insight  into key job performance metrics", "(Advanced Reporting) - Utilise reporting to get visibility of and track business numbers easily & whenever you need to assist in managing Projects or Jobs"],		
			},




			"callOpening": {
				"trial": ["Do you mind if I ask some questions to find out a bit more about you, to see how we can help your business?","I can help you get maximum value from our software during your trial, I’ll need to ask you some questions though","I am the person that will be supporting you throughout your 30-day trial, do you mind if I ask you a few questions?","I am your personal software consultant to ensure you are set up for success, do you have time now for a few questions? "],
				"upsellWinback": ["I see an opportunity for MYOB to save you both time and money through our current solutions, do you mind if I ask you a few questions?", "If you don’t mind me asking some questions, I can see how MYOB can add value to your business through our modern solutions", "I am calling to help you make an updated and informed decision about what is best for your business, do you mind if I ask you a few questions?"],
				"inboundLeads": ["To see how we can help your business, do you mind if I ask some questions to find out a bit more about you?", "If you don’t mind me asking some questions, I can ensure we have a solution that fits your needs and sets you up for success from day one.", "I can be your personal software consultant to ensure you are set up for success, do you mind telling me a bit about your business?", "I can personally support you through your solution consideration, do you mind if I ask you a few questions?"],
				"mmem": []

			},


			"endOpening": {
				"trial": ["To summarise what we have discussed today, the key areas of running your business we can help with is….","With the information you have provided, we have identified the following business tasks as crucial for you and we can help with…", "After getting to know your business, we can help you improve the current way you handle…", "From what you have told me, you’ve identified a few key area of the business that you have an opportunity to improve, these are…."],
				"upsellWinback": ["To summarise what we have discussed today, the key areas of running your business we can help with is….","With the information you have provided, we have identified the following business tasks as crucial for you and we can help with…", "After getting to know your business, we can help you improve the current way you handle…", "From what you have told me, you’ve identified a few key area of the business that you have an opportunity to improve, these are…."],
				"inboundLeads": ["To summarise what we have discussed today, the key areas of running your business we can help with is….","With the information you have provided, we have identified the following business tasks as crucial for you and we can help with…", "After getting to know your business, we can help you improve the current way you handle…", "From what you have told me, you’ve identified a few key area of the business that you have an opportunity to improve, these are…."],
				"mmem": []

			},

			"endClosing": {
				"trial": ["By adopting (recommended product) you are embracing a 21st century accounting solution for your 21st century business.  Are you ready to take your business a step forward into the future?", "We’ve come to the conclusion that (recommended product) has the features that will help you align your business with 21st century online technology.  Are you ready to leverage this evolving technology to make running your business easier?", "As a technology company that fully embraces the inevitable evolution of software capability, MYOB is committed to supporting your evolving business needs with (recommended product). Can I get you on top of the accounting technology curve that will help drive your businesses success?", "We have identified (recommended product) is tailor made for your future business state.  At MYOB, we have a 25 year tradition of helping businesses succeed.  Do you want to integrate our businesses success with yours?"],
				"upsellWinback": ["By adopting (recommended product) you are embracing a 21st century accounting solution for your 21st century business.  Are you ready to take your business a step forward into the future?", "We’ve come to the conclusion that (recommended product) has the features that will help you align your business with 21st century online technology.  Are you ready to leverage this evolving technology to make running your business easier?", "As a technology company that fully embraces the inevitable evolution of software capability, MYOB is committed to supporting your evolving business needs with (recommended product). Can I get you on top of the accounting technology curve that will help drive your businesses success?", "We have identified (recommended product) is tailor made for your future business state.  At MYOB, we have a 25 year tradition of helping businesses succeed.  Do you want to integrate our businesses success with yours?"],
				"inboundLeads": ["By adopting (recommended product) you are embracing a 21st century accounting solution for your 21st century business.  Are you ready to take your business a step forward into the future?", "We’ve come to the conclusion that (recommended product) has the features that will help you align your business with 21st century online technology.  Are you ready to leverage this evolving technology to make running your business easier?", "As a technology company that fully embraces the inevitable evolution of software capability, MYOB is committed to supporting your evolving business needs with (recommended product). Can I get you on top of the accounting technology curve that will help drive your businesses success?", "We have identified (recommended product) is tailor made for your future business state.  At MYOB, we have a 25 year tradition of helping businesses succeed.  Do you want to integrate our businesses success with yours?"],
				"mmem": []

			},

			"pitchGuidanceEssentials": {
				'Banking': ["Automate your banking tasks, save you both time and money while also reducing the risk of human error."],
				'Business Expenses': ["Give you visibility of your business expenses by providing accurate data in real time, whilst also allowing you to collaborate with your Accountant."],
				'Invoicing': ["Help you turn around customer payments faster, using mobile invoicing and various payment options to improve cashflow."],
				'Managing Cash Flow': ["Help the business manage cashflow better, provide real-time business visibility and save you time and money through task automation."],
				'Managing Tax': ["Allow you to collaborate effortlessly with your Accountant but also help you file tax more accurately and efficiently, directly through to the IRD. "],
				'Performance Reporting': ["Give you access to good reporting, resulting in better business decisions, improved profitability and business growth."],
				'Managing Staff & Payroll': ["Help the business stay compliant with payroll legislation but also save you time and money through automated payroll tasks."],
				'Quoting': ["Help streamline your quote to invoice process, reducing manual tasks that exist in your current state."],
				'Managing Suppliers & Stock': ["If Managing Stock & Suppliers is a critical task - please promote AR to the client"],
				'Managing Projects & Jobs': ["If Managing Jobs or Projects is a critical task - please promote AR to the client"],
			},
			"pitchGuidanceAccountRight": {
				'Banking': ["Automate your banking tasks, save you both time and money while also reducing the risk of human error."],
				'Business Expenses': ["Give you visibility of your business expenses by providing accurate data in real time, whilst also allowing you to collaborate with your Accountant."],
				'Invoicing': ["Help you turn around customer payments faster, using mobile invoicing and various payment options to improve cashflow."],
				'Managing Cash Flow': ["Help the business manage cashflow better, provide real-time business visibility and save you time and money through task automation."],
				'Managing Tax': ["Allow allow you to collaborate effortlessly with your Accountant but also help you file tax more accurately and efficiently, directly through to the IRD. "],
				'Performance Reporting': ["Give you access to good reporting, resulting in better business decisions, improved profitability and business growth."],
				'Managing Staff & Payroll': ["Help the business stay compliant with payroll legislation but also save you time and money through automated payroll tasks."],
				'Quoting': ["Help streamline your quote to invoice process, reducing manual tasks that exist in your current state."],
				'Managing Suppliers & Stock': ["Allow you to have greater visibility over your supplier relationships and associated stock levels."],
				'Managing Projects & Jobs': ["Help you divide your income between jobs and provide you with visibility against budgets and profits."],
			},
			"pitchGuidanceAccountEdge": {
				'Banking': ["Simplify your banking tasks, save you both time and money while also reducing the risk of human error."],
				'Business Expenses': ["Give you visibility of your business expenses by providing accurate data in real time."],
				'Invoicing': ["Help you turn around customer payments faster, using various payment options to improve cashflow."],
				'Managing Cash Flow': ["Help the business manage cashflow better by providing real-time business visibility."],
				'Managing Tax': ["Help you file tax more accurately and efficiently, through to the ATO. "],
				'Performance Reporting': ["Give you access to good reporting, resulting in better business decisions, improved profitability and business growth."],
				'Managing Staff & Payroll': ["Help the business stay compliant with payroll legislation but also save you time and money through automated payroll tasks."],
				'Quoting': ["Help streamline your quote to invoice process, reducing manual tasks that exist in your current state"],
				'Managing Suppliers & Stock': ["Allow you to have greater visibility over your supplier relationships and associated stock levels."],
				'Managing Projects & Jobs': ["Help you divide your income between jobs and provide you with visibility against budgets and profits."],
			},

			specialistQuestions: {
				'1': ["How do you currently manage and track your business' cash flow?", "How do you currently manage and track your business' cash flow?", "How do you currently manage and track your business' cash flow?", "How do you currently manage and track your business' cash flow?", "How do you currently manage and track your business' cash flow?", "How do you currently manage and track your business' cash flow?"]
			},

			specialistInformation:  {
				'1': ["Manually comparing and tracking statements/invoices and receipts, Manually comparing and tracking statements/invoices and receipts, Manually comparing and tracking statements/invoices and receipts, Manually comparing and tracking statements/invoices and receipts, Manually comparing and tracking statements/invoices and receipts", "Manually comparing and tracking statements/invoices and receipts, Manually comparing and tracking statements/invoices and receipts, Manually comparing and tracking statements/invoices and receipts, Manually comparing and tracking statements/invoices and receipts, Manually comparing and tracking statements/invoices and receipts", "Manually comparing and tracking statements/invoices and receipts, Manually comparing and tracking statements/invoices and receipts, Manually comparing and tracking statements/invoices and receipts, Manually comparing and tracking statements/invoices and receipts, Manually comparing and tracking statements/invoices and receipts", "Manually comparing and tracking statements/invoices and receipts, Manually comparing and tracking statements/invoices and receipts, Manually comparing and tracking statements/invoices and receipts, Manually comparing and tracking statements/invoices and receipts, Manually comparing and tracking statements/invoices and receipts", "Manually comparing and tracking statements/invoices and receipts, Manually comparing and tracking statements/invoices and receipts, Manually comparing and tracking statements/invoices and receipts, Manually comparing and tracking statements/invoices and receipts, Manually comparing and tracking statements/invoices and receipts", "Manually comparing and tracking statements/invoices and receipts, Manually comparing and tracking statements/invoices and receipts, Manually comparing and tracking statements/invoices and receipts, Manually comparing and tracking statements/invoices and receipts, Manually comparing and tracking statements/invoices and receipts"]
			},


			specialistCurrentState: {
				'1' : ["placeholder", "placeholder", "placeholder" ]
			},

			specialistFutureState: {

				'1' : ["placeholder", "placeholder", "placeholder"]

			},

			specialistFeatureAccountRight: {
				'1' : ["placeholder", "placeholder", "placeholder", "placeholder", "placeholder", "placeholder" ]

			},

			

			specialistInsightAccountRight: {
				'1' : ["placeholder", "placeholder", "placeholder" ]

			},

			specialistFeatureAccountEdge: {
				'1' : ["placeholder", "placeholder", "placeholder", "placeholder", "placeholder", "placeholder" ]

			},

			specialistInsightAccountEdge: {
				'1' : ["placeholder", "placeholder", "placeholder" ]

			},

			specialistFeatureEssentials: {
				'1' : ["placeholder", "placeholder", "placeholder", "placeholder", "placeholder", "placeholder" ]

			},

			specialistInsightEssentials: {
				'1' : ["placeholder", "placeholder", "placeholder" ]

			},


			specialistSummary: {
				'1' : ["placeholder"]
			},


			specialistOpenPitch: {
				'1' : ["placeholder", "placeholder", "placeholder"]
			},

			specialistClosingPitch: {
				'1' : ["placeholder", "placeholder", "placeholder"]
			},


			specialistDiscovery: {
				'1' : ["placeholder"]
			},

			specialistConversation: {
				'1': ["placeholder","placeholder","placeholder","placeholder"]
			},

			clientConversation: {
				'1': ["Do you mind if I ask some questions to find out a bit more about you, to see how we can help your business?", "I can help you get maximum value from our software during your trial, I’ll need to ask you some questions though", "I am the person that will be supporting you throughout your 30-day trial, do you mind if I ask you a few questions?", "I am your personal software consultant to ensure you are set up for success, do you have time now for a few questions?"]
			},


			data: {

			},





			salesPath: {
				user: '',
				email: '',
				missionTeam: '',
				mission: '',
				industry: '',
				targetPoints: [],
				product: '',
				result: '',
				clientID: '',
				help: '',
				specialist: false,
			},

		}
	}

	hydrate() {
		console.log('hydrating')
		axios.get(process.env.PUBLIC_URL+'data/getData', {headers: {"authorization" : 'Bearer '+window.sessionStorage.accessToken}}).then((result)=>{
			console.log('result', result)
			// new version change

			if (result.data.endOpening) {
				console.log('yes')
				this.state.data = result.data
			} else {
				console.log('no')


				result.data['specialistConversation'] = this.state.specialistConversation
				result.data['specialistDiscovery'] = this.state.specialistDiscovery
				result.data['specialistClosingPitch'] = this.state.specialistClosingPitch
				result.data['specialistOpenPitch'] = this.state.specialistOpenPitch
				result.data['specialistInsightEssentials'] = this.state.specialistInsightEssentials
				result.data['specialistFeatureEssentials'] = this.state.specialistFeatureEssentials
				result.data['specialistInsightAccountEdge'] = this.state.specialistInsightAccountEdge
				result.data['specialistFeatureAccountEdge'] = this.state.specialistFeatureAccountEdge
				result.data['specialistInsightAccountRight'] = this.state.specialistInsightAccountRight
				result.data['specialistFeatureAccountRight'] = this.state.specialistFeatureAccountRight
				result.data['specialistFutureState'] = this.state.specialistFutureState
				result.data['specialistCurrentState'] = this.state.specialistCurrentState
				result.data['specialistInformation'] = this.state.specialistInformation
				result.data['specialistQuestions'] = this.state.specialistQuestions
				result.data['specialistClientDiscovery'] = this.state.specialistClientDiscovery
				result.data['specialistSoftwareDiscovery'] = this.state.specialistSoftwareDiscovery
				result.data['specialistQuestions'] = this.state.specialistQuestions
				result.data['specialistSummary'] = this.state.specialistSummary

				result.data['callOpening'] = this.state.callOpening
				result.data['endOpening'] = this.state.endOpening
				result.data['endClosing'] = this.state.endClosing




				this.state.data = result.data

			}

			

			// this.state.data = this.state
			// new version change finish
		}).catch((err)=>{
			console.log('error', err)
		})
	}

	update() {
		console.log('updating')
		console.log(this.state.data)
		axios.post(process.env.PUBLIC_URL+'data/updateData', {data: this.state.data}, {headers: {"authorization" : 'Bearer '+window.sessionStorage.accessToken}}).then((result)=>{
			console.log('result', result)
			// this.state.data = result.data
		}).catch((err)=>{
			console.log('error', err)
		})
	}

	addSalesMission() {
		console.log(this.state.salesPath)
		let salesPath = this.state.salesPath
		let discovery = this.state.discovery
		var newString = ''
		salesPath.targetPoints.map((e, ind)=>{
			if (ind < (salesPath.targetPoints.length - 1)) {
				newString += discovery[e]+', '
			} else {
				newString += discovery[e]
			}
		})
		salesPath['user'] = JSON.parse(window.sessionStorage.user).id
		salesPath['email'] = JSON.parse(window.sessionStorage.user).email
		salesPath['targetPoints'] = newString
		console.log(salesPath)
		axios.post(process.env.PUBLIC_URL+'mission/create', salesPath, {headers: {"authorization" : 'Bearer '+window.sessionStorage.accessToken}}).then((result)=>{
			console.log('result', result)
			// this.state.data = result.data
			this.state.salesPath = {
				user: '',
				email: '',
				missionTeam: '',
				mission: '',
				industry: '',
				targetPoints: [],
				product: '',
				result: '',
				clientID: '',
				help: '',
				specialist: false,
			}
		}).catch((err)=>{
			console.log('error', err)
		})
	}


}

const mainStore = new MainStore;


export default mainStore;