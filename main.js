let nem = require("nem-sdk").default;
var transferTransaction = nem.model.objects.get("transferTransaction");


const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Working'))

app.use(function(req,res,next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Header', 'Content-Type');
    next();
})

app.get('/test', (req, res) => {
    
    let endpoint = nem.model.objects.create("endpoint")(nem.model.nodes.defaultTestnet, nem.model.nodes.defaultPort);
    nem.com.requests.chain.lastBlock(endpoint).then(function(res){
        console.log(res);
        
    }, function(err){
        console.log(err);
});
res.send('test')}
)

app.get('/transaction', (req, res) => {

    const address = req.query.address
    const quantity = req.query.quantity
    const message = req.query.message

    let endpoint = nem.model.objects.create("endpoint")(nem.model.nodes.defaultTestnet, nem.model.nodes.defaultPort);
    let common = nem.model.objects.create('common')('PASSWORD','PRIVATE KEY');
    let transferTransaction = nem.model.objects.create('transferTransaction')(`${address}`,  quantity, `${message}`);
    let preparedTransaction = nem.model.transactions.prepare('transferTransaction')(common, transferTransaction, nem.model.network.data.testnet.id);

    nem.com.requests.chain.time(endpoint).then(function (timeStamp) {
        const ts = Math.floor(timeStamp.receiveTimeStamp / 1000);
        preparedTransaction.timeStamp = ts;
        const due = 60;
        preparedTransaction.deadline = ts + due * 60;
       
        console.log(preparedTransaction);
       
        nem.model.transactions.send(common, preparedTransaction, endpoint).then(function(res){
            console.log(res);
        }, function(err){
            console.log(err);
        });
    
    }, function (err) {
        console.error(err);
    });
    
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))