(function(){
    function bubbleSort(data) {
        var arr = data.slice()
        for (var i = 0; i < arr.length - 1; i++) {
            for (var j = 0; j < arr.length - i - 1; j++) {
                if(arr[j] > arr[j + 1]) {
                    var tmp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = tmp;
                }
            }
        }
        return arr;
    }

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    function sortHandler(){
        var arr = [];
        var i;
        var arrText = document.createElement('p');
        var sortText = document.createElement('p');
        for(i = 0; i < 10; i++){
            arr[i] = getRandomInt(1, 100);
        }
        arrText.innerHTML = 'Array: ' + arr.join(' ');
        document.getElementById('sort').appendChild(arrText);
        sortText.innerHTML = 'Sorted array: ' + bubbleSort(arr).join(' ');
        document.getElementById('sort').appendChild(sortText);
    }

    var data = [1,2,[3,4,[6,7,8],9],10,11];
    var form = document.getElementById('form');
    var button = document.getElementsByTagName('button')[0];

    function recursiveList (data) {
        var list = document.createElement('ul');
                
        for(var i = 0; i < data.length; i++) {
            var li = document.createElement('li');
            list.appendChild(li);

            if(typeof(data[i]) != 'object') {
                li.innerHTML = data[i];
            } else {
                li.appendChild(recursiveList(data[i]));
            }
        }
        return document.body.appendChild(list);
        //@todo отобразить все элементы массива массивов в виде вложенных списков соблюдая вложенность
		//исходный массив [1,2,[3,4,[6,7,8],9],10,11]
    }

    function recursiveHeadings (data, weight) {
        var fragment = document.createDocumentFragment();
        for(var i = 0; i < data.length; i++) {
            if(typeof(data[i]) != 'object') {
                var x = document.createElement('h'+ weight);
                x.innerHTML = data[i];
                fragment.appendChild(x);
            } else {
                fragment.appendChild(recursiveHeadings (data[i], weight+1));
            }
        }

		//@todo отобразить все элементы массива массивов в заголовков разного порядка в зависимости от уровня вложенности
		//исходный массив [1,2,[3,4,[6,7,8],9],10,11]
        return fragment;
    }

    function simpleValidation(form) {
        var fields = document.getElementsByTagName('input');
        var checking = false;

        for (var i = 0; i< fields.length; i++) {
            if (fields[i].value == '') {
                fields[i].style.background = "red";
                checking = true;
            }
        }

            if (!checking) {
                alert('The form is submitted!');
            }

    }
        //@todo при сабмите формы проверять поля на пустотое значение. 
        //При ошибке подсвечивать красным соответствующее поле.
        //Если оба поля заполнены, вывести сообщение об удачной отправке формы

        
	//вызывать функции здесь!
    sortHandler();
    recursiveList(data);
    document.body.appendChild(recursiveHeadings (data, 1));
    button.onclick = simpleValidation;
})();