//to know the current collections present inside your databse

connection.db.collections(function(err,data){
    if(err) console.log(err)
    else{
        data.forEach(function(collection,index,arr){
            console.log(collection.namespace);
        })
    }
})


db.symbolDetails.find().sort(
    { 'CLOSE' : -1}
)