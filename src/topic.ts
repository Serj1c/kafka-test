import { kafka } from "./kafka"

export async function run() {
    try {
        const admin = kafka.admin()
        await admin.connect()
        console.log("Connected...")

        await admin.createTopics({
            "topics": [{
                "topic": "Users",
                "numPartitions": 2
            }]
        })
        console.log("Created")
        await admin.disconnect()
    } catch (error) {
        console.error(error)
    } finally{
        process.exit(0)
    }
}