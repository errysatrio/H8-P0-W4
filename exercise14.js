function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    var hasil= []
    var obj = {}
    var count =0
    for (let i=0; i <arrPenumpang.length;i++) {
        obj={}
        obj.penumpang=arrPenumpang[i][0]
        obj.naikDari=arrPenumpang[i][1]
        obj.tujuan=arrPenumpang[i][2]
        for (let j = 0; j < rute.length; j++) {
            if (rute[j]===obj.naikDari) {
            count = 0
            // console.log(count)
            for (let k = j ; k < rute.length; k++) {
                if (obj.tujuan===rute[k]) {
                    break
                }
                count+=1
                console.log(count)
            }
        }
        }
        obj.bayar=count*2000
        hasil.push(obj)
        }
    return hasil
  }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]