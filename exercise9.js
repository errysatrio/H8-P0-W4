function checkAB(num) {
    var temp = []
    var cek = true
    var count=0
    for (let i = 0; i < num.length; i++) {
        if (num[i]==='a')  {
            for (let i = 0; i < num.length; i++) {
                if (num[i]==='b'){
                    temp.push(count)
                } else {
                    count++
                }
            }
        }
    }
    // for (let i = 0; i < num.length; i++) {
    //     if (num[i]==='b')  {
    //         for (let i = 0; i < num.length; i++) {
    //             if (num[i]==='a'){
    //                 temp.push(count)
    //             } else{
    //                 count++
    //                 if( count>4) {
    //                     cek=false
    //                 }
    //             }
    //         }
    //     }
    // }
    // if (count===0) {
    //     cek=false
    // } 
    // else 
    // else if()
    return cek

}
  
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false