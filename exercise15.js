function highestScore (students) {
  var obj={}
  var hasil =[]
  var hasil1=[]
  var hasil2=[]
  var hasil3=[]
  // var max1=0
  // var max2=0
  // var max3=0
  var max=0
  // return x
  // for (var kelas in students) {
  if (students.length===0){
    return ''
  }
  for (let i = 0; i < students.length; i++) {
    if (students[i].class==='wolves') {
      obj.name=students[i].name
      obj.score=students[i].score
      obj.class=students[i].class
      hasil1.push(obj)
    } else if (students[i].class==='foxes') {
      obj.name=students[i].name
      obj.score=students[i].score
      obj.class=students[i].class
      hasil2.push(obj)
      } else if (students[i].class==='tigers') {
      obj.name=students[i].name
      obj.nilai=students[i].score
      obj.class=students[i].class
      hasil3.push(obj)
      }
    obj={}
  }
  if (hasil1.length===0){
    hasil.push('')
  } else {
  max=hasil1[0].score
  for (let i = 0; i < hasil1.length; i++) {
    if (max<hasil1[i].score) {
      max=hasil1[i].score
    }
  }
  for (let i = 0; i < hasil1.length; i++) {
    if (hasil1[i].score===max) {
      hasil.push(hasil1[i])
    }
  }
}
  if (hasil2.length===0){
    hasil.push('')
  } else {
    max=hasil2[0].score
  for (let i = 0; i < hasil2.length; i++) {
    if (max<hasil2[i].score) {
      max=hasil2[i].score
    }
  }
  for (let i = 0; i < hasil2.length; i++) {
    if (hasil2[i].score===max) {
      hasil.push(hasil2[i])
    }
  }
}
    if (hasil3.length===0){
    hasil.push('')
  } else {
  max=hasil3[0].score
  for (let i = 0; i < hasil3.length; i++) {
    if (max<hasil3[i].score) {
      max=hasil3[i].score
    }
  }
  for (let i = 0; i < hasil3.length; i++) {
    if (hasil3[i].score===max) {
      hasil.push(hasil3[i])
    }
  }
}

    return hasil
}
  
  // TEST CASE
  console.log(highestScore([
    {
      name: 'Dimitri',
      score: 90,
      class: 'foxes'
    },
    {
      name: 'Alexei',
      score: 85,
      class: 'wolves'
    },
    {
      name: 'Sergei',
      score: 74,
      class: 'foxes'
    },
    {
      name: 'Anastasia',
      score: 78,
      class: 'wolves'
    }
  ]));
  
  // {
  //   foxes: { name: 'Dimitri', score: 90 },
  //   wolves: { name: 'Alexei', score: 85 }
  // }
  
  
  console.log(highestScore([
    {
      name: 'Alexander',
      score: 100,
      class: 'foxes'
    },
    {
      name: 'Alisa',
      score: 76,
      class: 'wolves'
    },
    {
      name: 'Vladimir',
      score: 92,
      class: 'foxes'
    },
    {
      name: 'Albert',
      score: 71,
      class: 'wolves'
    },
    {
      name: 'Viktor',
      score: 80,
      class: 'tigers'
    }
  ]));
  
  // {
  //   foxes: { name: 'Alexander', score: 100 },
  //   wolves: { name: 'Alisa', score: 76 },
  //   tigers: { name: 'Viktor', score: 80 }
  // }
  
  
  console.log(highestScore([])); //{}