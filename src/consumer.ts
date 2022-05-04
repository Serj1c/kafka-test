import { kafka } from "./kafka"

type Error = {

}

export async function consume() {
    try {
        const consumer = kafka.consumer({"groupId": "test"})
        await consumer.connect()
        console.log("Connected...")

        consumer.subscribe({
            "topic": "Users",
            "fromBeginning": false
        })

        await consumer.run({
            "eachMessage": async result => {
                console.log(`Consumed message ${result.message.value}`)
            }
        })

    } catch (error: Error | unknown) {
        console.error(error)
    } finally{
        process.exit(0)
    }
}