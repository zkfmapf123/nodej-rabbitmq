import amqp from "amqplib/callback_api";

const arrs = [
  "select * from users",
  "update set user",
  "delete from users",
  "revoke users",
];

const sendMessage = (message: string, name='rtdb') => {
  // Create Connection
  amqp.connect("amqp://localhost", (connErr, conn) => {
    if (connErr) {
      throw connErr;
    }

    // Create Channel
    conn.createChannel((chanErr, channel) => {
      if (chanErr) {
        throw chanErr;
      }

      // Assert Queue
      const QUEUE = name;
      channel.assertQueue(QUEUE);

      
      // Send message to queue
      channel.sendToQueue(QUEUE, Buffer.from(message));
      console.log(`Message send ${QUEUE}`);
    });
  });
};

sendMessage(arrs[0]);

setTimeout(()=>{
    sendMessage(arrs[1]);
},100)

setTimeout(()=>{
    sendMessage(arrs[2]);
},1000)

setTimeout(()=>{
    sendMessage(arrs[3]);
},1200)

