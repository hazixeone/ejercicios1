let A, B ,C, D;
A = [1,2,1];
B = [4, -17];
C = [-1, 0, 0, -5, 0, 3];
D = new Array(81)
D.fill(0,0,40); 
D[40]= 5;
D.fill(0,41,80);
D[80]=2;


/*console.log(p)
console.log(q)
console.log(r)
console.log(s)*/



function evaluarPol(arr, x){
    let pol = 0;

    for (let i=0; i < arr.length; i++){
        pol += arr[i] * Math.pow(x, i);
    }

    console.log(pol);
}

evaluarPol(A, -3);
evaluarPol(A, -2);
evaluarPol(A, -1);
evaluarPol(A, 0);
evaluarPol(A, 1);
evaluarPol(A, 2);
evaluarPol(A, 3);