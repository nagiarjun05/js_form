this.table='window table';
this.julis={
    table:'julistable',
    tableCleaning(){
        console.log(`cleaning ${this.table}`)
    }
};
let johnsroom={
    table:"johns table",
    tableCleaning(){
        console.log(`cleaning ${this.table}`)
    }
};
const cleanTable=function(){
    console.log(`cleaning ${this.table}`)
};
cleanTable();
johnsroom.tableCleaning();
this.julis.tableCleaning();