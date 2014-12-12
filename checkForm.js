function checkForm(){
			var myForm = document.myForm;
			var formEl = myForm.elements;
			var isEmpty = false;
			for(var i = 0; i < formEl.length; i++){
				if(formEl[i].type === 'text'){
					if(formEl[i].value === ''){
					formEl[i].style.borderColor = 'red';
					isEmpty = true;
					}else{
						formEl[i].style.borderColor = '';
					}
				}
			}
			if(isEmpty) alert('Не все поля формы заполнены!');
			else myForm.submit();
		}
