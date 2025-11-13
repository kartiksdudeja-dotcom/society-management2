// node seedUsers.js
require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./models/User');

async function seed() {
  await mongoose.connect(process.env.MONGO_URI);
  await User.deleteMany({});
  await User.create({ name:'Admin', email:'admin@local', password:'admin123', flatNumber:'ADMIN-0', role:'admin' });
  const arr = [];
  for (let i=1;i<=54;i++){
    arr.push({ name:`User ${i}`, email:`user${i}@example.com`, password:'123456', flatNumber:`A-${100+i}`, role:'member' });
  }
  await User.insertMany(arr);
  console.log('✅ seeded');
  mongoose.disconnect();
}
seed();
