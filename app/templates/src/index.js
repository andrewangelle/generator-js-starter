import product from './modules/product';
import sum from './modules/sum';

//webpack's hot module reloading
if (module.hot) {
	module.hot.accept()
}

const totalHoursWorked = () => {
  const numberOfHoursWorkedPerDay = 5;
  const totalDaysWorkd = 5;
  
  product(numberOfHoursWorkedPerDay, totalDaysWorkd);
}

const root = document.querySelector('#root');
root.innerHTML = 
`
  You worked a total of ${totalHoursWorked} this week...
`;