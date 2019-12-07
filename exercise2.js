function fpb(angka1, angka2) {
    var temp=0
    var max=0
    if (angka1>angka2){
            for (let i = 1; i <= angka1 ; i++) {        
                temp=angka1/i
                if (angka2%temp===0) {
                    max=temp
                    return max
                }
            }
    }
    if (angka1<angka2){
        for (let i = 1; i <= angka2 ; i++) {        
            temp=angka2/i
            if (angka1%temp===0) {
                max=temp
                return max 
            }
        }
    }
    return max
}
  
  // TEST CASES
  console.log(fpb(12, 16)); // 4
  console.log(fpb(50, 40)); // 10
  console.log(fpb(22, 99)); // 11
  console.log(fpb(24, 36)); // 12
  console.log(fpb(17, 23)); // 1