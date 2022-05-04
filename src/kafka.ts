import { Kafka } from "kafkajs";

export const kafka = new Kafka({
    "clientId": "myapp",
    "brokers": ["localhost:9092"]
})