import { produce } from "./src/producer"
import { run } from "./src/topic"

const msg = process.argv[2]

run()

produce(msg)