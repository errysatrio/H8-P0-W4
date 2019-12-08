function urutkanAbjad(str) {
    var dummy = []
    for (let i = 0; i < str.length; i++) {
        dummy.push(str.split('')[i])
        switch (dummy[i]) {
            case 'a':dummy[i]=1; break;
            case 'b':dummy[i]=2; break;
            case 'c':dummy[i]=3; break;
            case 'd':dummy[i]=4; break;
            case 'e':dummy[i]=5; break;
            case 'f':dummy[i]=6; break;
            case 'g':dummy[i]=7; break;
            case 'h':dummy[i]=8; break;
            case 'i':dummy[i]=9; break;
            case 'j':dummy[i]=10; break;
            case 'k':dummy[i]=11; break;
            case 'l':dummy[i]=12; break;
            case 'm':dummy[i]=13; break;
            case 'n':dummy[i]=14; break;
            case 'o':dummy[i]=15; break;
            case 'p':dummy[i]=16; break;
            case 'q':dummy[i]=17; break;
            case 'r':dummy[i]=18; break;
            case 's':dummy[i]=19; break;
            case 't':dummy[i]=20; break;
            case 'u':dummy[i]=21; break;
            case 'v':dummy[i]=22; break;
            case 'w':dummy[i]=23; break;
            case 'x':dummy[i]=24; break;
            case 'y':dummy[i]=25; break;
            case 'z':dummy[i]=26; break;
            default: dummy[i]='no letter'
                break;
        }
    }
    for (let i = 0; i < dummy.length; i++) {
        for (let j = 0; j < dummy.length; j++) {
            if (dummy[j]>dummy[j+1]){
                var temp=0
                temp+=dummy[j]
                dummy[j]=dummy[j+1]
                dummy[j+1]=temp
            }
        }
    }
    for (let i = 0; i < dummy.length; i++) {
        switch (dummy[i]) {
            case 1:dummy[i]='a'; break;
            case 2:dummy[i]='b'; break;
            case 3:dummy[i]='c'; break;
            case 4:dummy[i]='d'; break;
            case 5:dummy[i]='e'; break;
            case 6:dummy[i]='f'; break;
            case 7:dummy[i]='g'; break;
            case 8:dummy[i]='h'; break;
            case 9:dummy[i]='i'; break;
            case 10:dummy[i]='j'; break;
            case 11:dummy[i]='k'; break;
            case 12:dummy[i]='l'; break;
            case 13:dummy[i]='m'; break;
            case 14:dummy[i]='n'; break;
            case 15:dummy[i]='o'; break;
            case 16:dummy[i]='p'; break;
            case 17:dummy[i]='q'; break;
            case 18:dummy[i]='r'; break;
            case 19:dummy[i]='s'; break;
            case 20:dummy[i]='t'; break;
            case 21:dummy[i]='u'; break;
            case 22:dummy[i]='v'; break;
            case 23:dummy[i]='w'; break;
            case 24:dummy[i]='x'; break;
            case 25:dummy[i]='y'; break;
            case 26:dummy[i]='z'; break;
            default: dummy[i]='no letter'
                break;
        }
    }
    return dummy.join('')
}
  
  // TEST CASES
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis'