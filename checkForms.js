function checkForm(){
	var myForm = document.myForm.elements;
	var isEmpty = false;
	for(var i = 0; i < myForm.length; i++){
		if(myForm[i].type === 'text'){
			if(myForm[i].value === ''){
				myForm[i].style.borderColor = 'red';
				isEmpty = true;
				}
			}
		}
		if(isEmpty) alert('Не все поля формы заполнены!');
	}
