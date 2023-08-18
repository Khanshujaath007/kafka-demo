const { kafka } = require("./client");

async function init() {
  const producer = kafka.producer();
  console.log("Connecting Producer...");

  await producer.connect();
  console.log("Producer Connected Successfuly...");
  await producer.send({
    topic: "my-app",
    messages: [
      {
        partition: 0,
        key: "loaction-update",
        value: JSON.stringify({
          name: "Alex",
          location: "Bangalore",
        }),
      },
    ],
  });
  console.log("Producer disconnecting...");
  await producer.disconnect();
}
init();
