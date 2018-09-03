let mil=1000000;
const salys = [
    {
       country: "Germany",
       population: 82*mil,
       area: 357386,
    },
    {
        country:"United Kingdom",
        population:66*mil,
        area:242495 ,
    },
    {
        country:"Australia",
        population:242*mil,
        area:7692024,
    },
    {
        country:"France",
        population:67*mil,
        area:640679 ,
    },
    {
        country:"Syria",
        population:17*mil,
        area:185180,
    }
 ];

 let gyvPlotas;
 let i=0;
 let text="";
    while(i<salys.length){
        plotasGyventojam(salys[i].area,salys[i].population);
    document.write(`<p> Coutry: "+ salys[i].country +" joje gyvena " +salys[i].population+"salies plotas "+salys[i].  + " zmones "+ "plotas tenkantis vienam gyventojuj "${gyvPlotas} </p>`) 
    i++       
    }
    function plotasGyventojam(plotas, gyventoju){
     gyvPlotas=plotas/gyventoju;
    }
//gyventoju skaicius dalijamas is salies ploto 
// document.write(salys[0].country)
//salys[0].population/area