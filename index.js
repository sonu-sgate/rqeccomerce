const express=require('express')
const amqp=require('amqplib')

const app=express()
const port=6000;

app.use(express.json())
app.get('/',async(req,res)=>{
    res.status(200).json({msg:"Welcome go rabbitmq backend"})
})
async function connect(){
    const connection=await amqp.connect('amqp://localhost');
    const channnel=await connection.createChannel()


    const queue='booking_requests'
    await channnel.assertQueue(queue,{durable:true})
    return {connection,channnel,queue}
}

app.post('/api/bookings',async(req,res)=>{
    const bookingRequest=req.body
    const {channel,queue}=await connect()
channel.sendToQueue(queue,Buffer.from(JSON.stringify(bookingRequest)))
res.status(202).json({msg:'Booking request received'})

})
app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`)
})