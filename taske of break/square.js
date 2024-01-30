 square = 0;
for( i = 1; i<=100 ; i++){
    square = square + i;
    if((i*i) >= 100){
        break;
    }
    console.log(square);
}