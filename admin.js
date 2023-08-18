const {kafka} = require("./client");

async function init() {
  const admin = kafka.admin();
  console.log("Admin Connecting...");
  admin.connect();
  console.log("Admin Connection Success...");
  console.log("Creating topic...");
  await admin.createTopics({
    topics: [
      {
        topic: "rider-updates",
        numPartitions: 2,
      },
    ],
  });
  console.log("Topic created.");
  console.log("Disconnecting admin...");
  await admin.disconnect();
}

init();