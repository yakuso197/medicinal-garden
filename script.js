const input=document.querySelector('#plant-search');
if(input){input.addEventListener('input',()=>{const q=input.value.trim().toLowerCase();document.querySelectorAll('.card').forEach(c=>{c.style.display=c.dataset.search.toLowerCase().includes(q)?'block':'none';});});}
