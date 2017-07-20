for (var i = 1; i <= 100; i++) {
    if (i == 1) {
        console.log("El número " + i + " es compuesto")
    } else {
        c = 0;
        for (j = 1; j <= i; j++) {
            if (i % j == 0) {
                c++;
            }
        }
        if (c == 2) {
            if(i % 2 == 0){
                console.log("El número " + i + " es primo y par");
            } else{
                console.log("El número " + i + " es primo");
            }
        } else {
            if(i % 2 == 0){
                console.log("El número " + i + " es compuesto y par");
            } else{
                console.log("El número " + i + " es compuesto");
            }
        }
    }
}
