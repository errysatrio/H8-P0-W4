function ubahHuruf(kata) {
    var temp=[]
    // kata.split('')
    for (let i = 0; i < kata.length; i++) {
        temp.push(kata[i])
        // kata[i]=a
    }
    return temp
}
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu