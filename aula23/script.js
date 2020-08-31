// try {
//   console.log(naoExisto);
//  } catch(err) {
//      console.log('naoExiste não existe');
//      console.log(err);
//  }


 function soma(x,y) {
     if (typeof x !== 'number' || typeof y !== 'number') {
         throw new Error('x e y precisam ser números.')
     }
     return x + y;
 }


 try {
 console.log(soma(1,'a'));
 } catch(err) {
    console.log(err);
 }
