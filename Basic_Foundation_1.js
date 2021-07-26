// #1
function a(){
    return 35;
}
console.log(a())

// #1 Prediction 
// 35
//  Acutal
// 35
// #2
function a(){
    return 4;
}
console.log(a()+a());

// #2 Prediction
// 8
// #2 Actual
// 8

// #3
function a(b){
    return b;
}
console.log(a(2)+a(4));

// #3 Prediction
// 6
// #3 Actual
// 6

// #4
function a(b){
    console.log(b);
    return b*3;
}
console.log(a(3));

// Prediction #4
// 3
// 9
// Actual #4
// 3
// 9

// #5
function a(b){
    return b*4;
    console.log(b);
}
console.log(a(10));
// #5 Prediction
// 40
// 10
// #5 Actual 
// 40

// #6
function a(b){
    if(b<10) {
        return 2;
    }
    else     {
        return 4;
    }
    console.log(b);
}
console.log(a(15));

// #6 Prediction
// 4
// #6 Actual
// 4

// #7 
function a(b,c){
    return b*c;
}
console.log(10,3);
console.log( a(3,10) );

// #7 Prediction
// 10 3
// 30
// #7 Actual
// 10 3
// 30

// #8 
function a(b){
    for(var i=0; i<10; i++){
        console.log(i);
    }
    return i;
}
console.log(3);
console.log(4);
// #8 Predict
// 3
// 4
// #8 Actual
// 3
// 4

// #9
function a(){
    for(var i=0; i<10; i++){
        i = i +2;
        console.log(i);
    }
}
a();
//  #9 Prediction
// 2
// 5
// 8
// #9 Actual
// 2
// 5
// 8
// 11

// #10 
function a(b,c){
    for(var i=b; i<c; i++) {
       console.log(i);
   }
   return b*c;
}
a(0,10);
console.log(a(0,10));
// #10 Prediction
// 0
// 0 10
// #10 Actual
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 0

// 11
function a(){
    for(var i=0; i<10; i++){
       for(var j=0; j<10; j++){
           console.log(j);
       }
       console.log(i);
    }
}

// #11 Prediction
// Function not called
// #11 Actual
// code=0

// #12
function a(){
    for(var i=0; i<10; i++){
        for(var j=0; j<10; j++){
            console.log(i,j);
        }
        console.log(j,i);
    }
}
// #12 Prediction
// Function not called
// #12 Actual
// code=0

// #13
var z = 10;
function a(){
    var z = 15;
    console.log(z);
}
console.log(z);

// #13 Prediction
// 10
// #13 Actual
// 10

// #14
var z = 10;
function a(){
    var z = 15;
    console.log(z);
}
a();
console.log(z);
// #14 Prediction
// 15
// 10
// #14 Actual
// 15
// 10

// #15
var z = 10;
function a(){
    var z = 15;
    console.log(z);
    return z;
}
z = a();
console.log(z);
// #15 Prediction
// 15
// 10
// #15 Actual
// 15
// 15

// echo "# basic_foundation_1" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/jcambray10/basic_foundation_1.git
// git push -u origin main