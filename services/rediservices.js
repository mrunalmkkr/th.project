const redis = require('redis');
const client = redis.createClient();

client.on('error', err => console.error('Redis error:', err));
client.connect();

exports.cacheSet = async (key, value, ttl = 3600) => {
  await client.setEx(key, ttl, JSON.stringify(value));
};

exports.cacheGet = async (key) => {
  const result = await client.get(key);
  return result ? JSON.parse(result) : null;
};
