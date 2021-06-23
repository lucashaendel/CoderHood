console.clear()
// 3 huevos 
// 1 barra de chocolate 
// 0.5 kilos de harina 
// 5 cucharadas de azucar
// hacer galletitas de ema

var huevos = 3;
var barraChoco = 1;
var harina = 0.5;
var azucar = 5;

if (huevos>=3)
  {
    if (barraChoco>=1)
    {
      if (harina>=0.5)
      {
        if (azucar>=5)
        {
          console.log('HACER LAS GALLETITAS DE EMA :$')
        }
        else
        {
          console.log('compra azucar RATA!')
        }
      }
      else
      {
        console.log('comprar harina')
      }
    }
    else
    {
      console.log('comprar mas Barras de choco')
    }
  }
  else
  {
    console.log('comprar mas huevos')
  }

