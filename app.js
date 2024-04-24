

let inputEl = document.querySelector('input');

let btn = document.querySelectorAll('button');

for(let button of btn){
    button.addEventListener('click' , function(e){
       let btnText = e.target.innerText;

       if(btnText == 'C'){
        inputEl.value = "";
       }
       else if(btnText == '='){
            try{ // sahi kaam
                inputEl.value = eval(inputEl.value);
            }
            catch(e){ // error handling
                inputEl.value = 'invalid';
            }
       }
       else{
        inputEl.value += btnText;
       }
    })
}

