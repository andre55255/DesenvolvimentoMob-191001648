import { Migrations, Repository } from "expo-sqlite-orm";
import { useMemo, useEffect, Fragment } from "react";
import { configEntityDataGame, statements } from "./migration";

const databaseName = "dbIO";

const migrations = useMemo(() => new Migrations(databaseName, statements), []);

export const dataGameRepository = useMemo(() => {
  return new Repository(databaseName, "data_game", configEntityDataGame);
}, []);

const runMigrations = async () => {
    await migrations.migrate();
} 

export default function InitializeDatabase() {
  useEffect(() => {
    runMigrations()
  }, []);

  return null;
}
