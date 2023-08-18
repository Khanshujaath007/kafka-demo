const { kafka } = require("./client");

async function init() {
  const consumer = kafka.consumer({ groupId: "my-group" });
  console.log("Consumer connecting..");
  await consumer.connect();
  await consumer.subscribe({ topics: ["my-app"], fromBeginning: true });
  await consumer.run({
    eachMessage: async ({ topic, partition, message, heartbeat, pause }) => {
      //processing data
      console.log({
        key: message.key.toString(),
        value: message.value.toString(),
        headers: message.headers,
      });
    },
  });
}

init();
