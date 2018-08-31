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
 let i=0;
 let text="";
    while(i<salys.length){
    document.write("<p> Coutry: "+ salys[i].country +"  plotas tenkantis vienam gyventojuj "+ salys[i].population/salys[i].area+ "</p>") 
    i++       
    }
    function plotasGyventojam(){
        plotasGyventojam===salys[i].population/salys[i].area
    }
//gyventoju skaicius dalijamas is salies ploto 
// document.write(salys[0].country)
//salys[0].population/area