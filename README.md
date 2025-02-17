# Streamify

A music streaming analytics dashboard

### My Thought Process

My thought process was to start with was was in front of me. I started with mocking data that would be used for the charts, graphs and table.

So, I started with looking at what tools I would use to implement each. Based on the description of the project, I chose [Recharts](http://recharts.org/) for the line, bar and pie charts. I chose [Tanstack React Tables](http://tanstack.com/table/) to implement the table.

I looked at each documentation, played around with the data to know what format the data would be needed in; then, I got to work, mocking the data.

After mocking the data, I moved on to implementing the cards, graphs, charts and tables--in that order.

I implemented them in barebones UI, nothing too serious. Then, I dealt with the UI later.

### Running the application

- Clone the application
- Run `npm install`
- Then, run `npm run dev` to start the local server

### Tradeoffs made

- I chose to use [Recharts](http://recharts.org/) rather than [ChartJS](https://www.chartjs.org/) because Recharts gives more functionality out of the box than ChartJS. It is also industry standard in the React world.
- I chose [Tanstack React Tables](http://tanstack.com/table/) rather than building my own table from scratch or using [React Tables](https://react-tables.com/) because it gave me a lot to work with out of the box and it is easily configurable.
