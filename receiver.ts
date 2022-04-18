import amqp from "amqplib/callback_api";


const receive = (message : string) =>{
    amqp.connect('amqp://localhost',(connError, conn) =>{
        if(connError){
            throw connError
        }

        conn.createChannel((chanError, chan) =>{
            if(chanError){
                throw chanError
            }

            const QUEUE = message
            chan.assertQueue(QUEUE)

            chan.consume(QUEUE,(message)=>{
                console.log(message?.content.toString())
            },{
                // 응답을 받는 경우 -> 메시지가 삭제된다
                noAck: true
            })
        })
    })
}

receive('rtdb')
