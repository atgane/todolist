function addPlan(){
    const li = document.createElement('li');
    const inputPlan = document.getElementById('input__plan').value;

    li.setAttribute('id', 'plan');
    li.setAttribute('class', 'plan');

    const liPlanContent = document.createElement('span');
    liPlanContent.setAttribute('id', 'planContent');
    liPlanContent.setAttribute('class', 'planContent');
    liPlanContent.innerHTML = inputPlan;
    li.appendChild(liPlanContent);

    const liCloseBtn = document.createElement('button');
    liCloseBtn.setAttribute('id', 'closebtn');
    liCloseBtn.setAttribute('class', 'closeBtn');
    liCloseBtn.setAttribute('onclick', 'closePlan(this.parentNode);');
    liCloseBtn.setAttribute('style', 'display: none');
    liCloseBtn.innerHTML = 'X';
    li.appendChild(liCloseBtn);
    
    li.addEventListener('mouseenter', function(){setCloseBtn(liCloseBtn, 'inline')});
    li.addEventListener('mouseleave', function(){setCloseBtn(liCloseBtn, 'none')});
    document.getElementById('plan__section').appendChild(li);
    
}

function closePlan(self){
    self.remove();
} 

function setCloseBtn(btn, state){
    btn.style.display = state;
    console.log(btn.style);
}