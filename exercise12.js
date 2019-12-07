function countProfit(shoppers) {
    let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                       ['Baju Zoro', 500000, 2],
                       ['Sweater Uniklooh', 175000, 1]
                     ]
                     var barang =[]
                     var laku = [0,0,0]
                     var obj={}
                     var total=0
                     for (let i = 0; i < listBarang.length; i++) {
                         obj={}
                          obj.produk = listBarang[i][0]
                          obj.pembeli=[]
                          obj.leftover = listBarang[i][2]
                          obj.profit = 0
                          barang.push(obj)
                     }
                    //  for (let i = 0; i < barang.length; i++) {
                     for (let j = 0; j < shoppers.length; j++) {
                            //  for (var key in shoppers[j]) {
                                 if (shoppers[j].product===barang[0].produk) {
                                     if(shoppers[j].amount<=listBarang[0][2]) {
                                     barang[0].pembeli.push(shoppers[j].name)
                                     listBarang[0][2] -= shoppers[j].amount
                                     laku[0]+=shoppers[j].amount
                                     barang[0].leftover = listBarang[0][2]
                                     barang[0].profit = listBarang[0][2]-barang[0].leftover 
                                     barang[0].profit= listBarang[0][1]*laku[0]
                                     }
                                } else if (shoppers[j].product===barang[1].produk) {
                                    if(shoppers[j].amount<=listBarang[1][2]){
                                    barang[1].pembeli.push(shoppers[j].name)
                                    laku[1]+=shoppers[j].amount
                                    barang[1].leftover = listBarang[1][2] - shoppers[j].amount
                                    barang[1].profit = listBarang[1][1]*laku[1]
                                    }
                                } else if (shoppers[j].product===barang[2].produk) {
                                    if(shoppers[j].amount<=listBarang[2][2]){
                                    barang[2].pembeli.push(shoppers[j].name)
                                    laku[2]+=shoppers[j].amount
                                    barang[2].leftover = listBarang[2][2] - shoppers[j].amount
                                    barang[2].profit = laku[2] * listBarang[2][1]
                                    }
                                }
                            // }
                        // }
                        }
                        return barang
                    }
                    
  // TEST CASES
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
  //[ { product: 'Sepatu Stacattu',
  //   shoppers: [ 'Windi', 'Vanessa' ],
  //   leftOver: 5,
  //   totalProfit: 7500000 },
  // { product: 'Baju Zoro',
  //   shoppers: [],
  //   leftOver: 2,
  //   totalProfit: 0 },
  // { product: 'Sweater Uniklooh',
  //   shoppers: [],
  //   leftOver: 1,
  //   totalProfit: 0 } ]
  
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
  // [ { product: 'Sepatu Stacattu',
  //     shoppers: [ 'Windi' ],
  //     leftOver: 2,
  //     totalProfit: 12000000 },
  //   { product: 'Baju Zoro',
  //     shoppers: [ 'Devi', 'Lisa' ],
  //     leftOver: 0,
  //     totalProfit: 1000000 },
  //   { product: 'Sweater Uniklooh',
  //     shoppers: [ 'Rani' ],
  //     leftOver: 0,
  //     totalProfit: 175000 } ]
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
  // [ { product: 'Sepatu Stacattu',
  //     shoppers: [],
  //     leftOver: 10,
  //     totalProfit: 0 },
  //   { product: 'Baju Zoro',
  //     shoppers: [],
  //     leftOver: 2,
  //     totalProfit: 0 },
  //   { product: 'Sweater Uniklooh',
  //     shoppers: [],
  //     leftOver: 1,
  //     totalProfit: 0 } ]
  console.log(countProfit([])); //[]