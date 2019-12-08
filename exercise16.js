function graduates (students) {
    var obj ={}
        obj.foxes=[]
        obj.wolves=[]
        obj.tigers=[]
        siswa={}

    if (students.length===0) {
        return ''
    }
    for (let i = 0; i < students.length; i++) {
        if (students[i].class==='foxes') {
            if(students[i].score>75) {
                siswa={}
                siswa.name=students[i].name
                siswa.score=students[i].score
                obj.foxes.push(siswa)
                }
            } else if (students[i].class==='wolves') {
            if(students[i].score>75) {
                siswa={}
                siswa.name=students[i].name
                siswa.score=students[i].score
                obj.wolves.push(siswa)
                }
            } else {
            if(students[i].score>75) {
                siswa={}
                siswa.name=students[i].name
                siswa.score=students[i].score
                obj.tigers.push(siswa)
                }
            }
        
    }
    return obj
}
  
  console.log(graduates([
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
  //   foxes: [
  //     { name: 'Dimitri', score: 90 }
  //   ],
  //   wolves: [
  //     { name: 'Alexei' , score: 85 },
  //     { name: 'Anastasia', score: 78 }
  //   ]
  // }
  
  console.log(graduates([
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
  //   foxes: [
  //     { name: 'Alexander', score: 100 },
  //     { name: 'Vladimir', score: 92 }
  //   ],
  //   wolves: [
  //     { name: 'Alisa', score: 76 },
  //   ],
  //   tigers: [
  //     { name: 'Viktor', score: 80 }
  //   ]
  // }
  
  
  console.log(graduates([])); //{}
  