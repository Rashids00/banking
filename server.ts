import 'dotenv/config';
import { connectDB } from './config/db.ts';
import app from './app.ts';

(async () => {
  await connectDB();
  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => console.log(`API running on :${PORT}`));
})();
