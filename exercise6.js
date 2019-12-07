function digitPerkalianMinimum(angka) {
    var faktor=[]
    var min=0
    var roots = []
    for (let i = 2; i < angka; i++) {
        if (angka%i===0){
            faktor.push(i)
        }
    }
    for (let i = 0; i < faktor; i++) {
        // roots.push(faktor[i].length+'*'+faktor[faktor.length-i].length)
        roots.push(faktor[i])
        // if (temp.length===2){
            // min++
        // }
    }
    return roots
}
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2