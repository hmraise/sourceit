var multiplicationTableHolder = document.getElementById('multiplication-table');
var matrixHolder = document.getElementById('matrix');
var pascalTriangleHolder = document.getElementById('pascal-triangle');

matrixHolder.innerHTML =  render(matrix(10));
multiplicationTableHolder.innerHTML = render(multiplicationTable(10));
pascalTriangleHolder.innerHTML = render(pascal(10));

function multiplicationTable(size) {

	 var table = new Array(size);		// В таблице 10 строк

		for(var i = 0; i < table.length; i++) {
			// В каждой строке 10 столбцов
			table[i] = new Array(size);	
		}
				

		for(var row = 0; row < table.length; row++) {
			for(var col = 0; col < table[row].length; col++) {
				table[row][col] = (row+1)*(col+1);
			}
		}
    return table;
}

function matrix (size) {
    var matrix = new Array(size);
		for(var i = 0; i < matrix.length; i++) {
			matrix[i] = new Array(size);
			
		}
		
		for(var row = 0; row < matrix.length; row++) {
			for(var col = 0; col < matrix[row].length; col++) {
				if (row === col) {
					matrix[row][col] = 1;
				} else if (row + col === size - 1) {      
                    matrix[row][col] = 2;
                } else {
                                                                    //сделал не сам
                    if((col > row) && (row + col < size - 1)) {           
                        matrix[row][col] = 3;
                    } else if((col > row) && (row + col > size - 1)) {
                        matrix[row][col] = 4;
                    } else if((col < row) && (row + col > size - 1)) {
                        matrix[row][col] = 5;
                    } else if((col < row) && (row + col < size - 1)) {
                        matrix[row][col] = 6;
                    }
                }
			}
		}
		
    // @todo
    return matrix;
}

function pascal (size) {
    var triangle = new Array(size);
		for(var i = 0; i < triangle.length; i++) {
			var innerArray = new Array(i+1);
			triangle[i] = innerArray;
			for(var j = 0; j < innerArray.length; j++) {
				innerArray[j] = 1;
			}
		}
		
	for(var row = 0; row < triangle.length; row++) {
		for(var col = 1; col < triangle[row].length - 1; col++) {
			triangle[row][col] = triangle[row - 1][col - 1] + triangle[row - 1][col] ;
			//table[row][col] = (row+1)*(col+1);
		}
	}
 
    return triangle;
}

function render (array) {
    var rowsQty = array.length;
    var result = [];
    for (var i = 0; i < rowsQty; i++) {
        var row = ['<tr><td>', array[i].join('</td><td>'), '</td></tr>'].join('');
        result.push(row);
    }
    return result.join('');
}