import { app } from "./app.js";
import { connectDatabase } from "./config/db.js";
import { env } from "./config/env.js";
import { seedAdminUser } from "./services/seed-admin.js";

async function bootstrap() {
  await connectDatabase();
  await seedAdminUser();
  app.listen(env.PORT, () => {
    console.log(`HYDROscope API listening on ${env.BACKEND_URL}`);
  });
}

bootstrap().catch((error) => {
  console.error(error);
  process.exit(1);
});
