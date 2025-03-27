import db from "../db_config";
import { CrudRepository } from "./crud-repository";
import { Airplane } from "@prisma/client";

class AirplaneRepository extends CrudRepository<Airplane> {
    constructor() {
        super(db.airplane)
    }
}

export default AirplaneRepository