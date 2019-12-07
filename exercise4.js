function cariModus(arr) {
    var modus=[]
    var dummy=[]
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {        
            var temp=0
            temp+=arr[j]
            if (arr[j]>=arr[j+1]){
                arr[j]=arr[j+1]
                arr[j+1]=temp
            }
        }
    }
    for (let j = 0; j < arr.length; j++) {
        if(arr[j]!==arr[j+1])
        dummy.push( arr[j])
    }
    if (dummy.length===1) {
        return -1
    }
    for (let i = 0;i < arr.length; i++) {
        var jumlah=0
        for (let j = 0; j < arr.length; j++) {
            if (arr[j]===arr[i]) {
                jumlah++
            }
        }
        modus.push(jumlah)
    }
    var max=0
    for (let i = 0; i < modus.length; i++) {
        jumlah=0
        jumlah++
        if (modus[i]>modus[i+1]){
            max=0
            max+=arr[i]
        }
    }
    if (max===0) {
        return -1
    }
    return max
  }
  
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1    