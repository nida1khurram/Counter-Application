
let count = 0;

document.getElementById('increment-btn')?.addEventListener('click', () => {
	count++;
	updateCount();
});

document.getElementById('decrement-btn')?.addEventListener('click', () => {
	if(count > 0){
	count--;
	updateCount();
	}
});

document.getElementById('reset')?.addEventListener('click', () => {
	count = 0;
	updateCount();
});

function updateCount() {
	document.getElementById('count')!.innerText = count.toString();
}




