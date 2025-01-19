```javascript
// Correct usage of $inc operator in MongoDB update operation
db.collection('myCollection').updateOne({"_id": ObjectId("651234567890abcdef12345678")}, {"$inc": {"counter": 1}});
```