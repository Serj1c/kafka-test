import { kafka } from "./kafka"

export async function produce(msg: string) {
    try {
        const producer = kafka.producer()
        await producer.connect()
        console.log("Connected...")

        const result = await producer.send({
            "topic": "Users",
            "messages": [
                {
                    "value": msg
                }
            ]
        })

        console.log(`Sent successfully ${JSON.stringify(result)}`)

        await producer.disconnect()

    } catch (error) {
        console.error(error)
    } finally{
        process.exit(0)
    }
}