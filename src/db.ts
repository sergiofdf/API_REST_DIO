import { Pool } from "pg";

const connectionString = "postgres://ydifuini:x-IlLcXdIHW_z7TGtQkeR86RHdigL4cW@fanny.db.elephantsql.com/ydifuini";
const db = new Pool({ connectionString });

export default db;