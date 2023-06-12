require('../utils/MongooseUtil');
const Models = require('./Model');

const CustomerDAO = {
  async selectByUsernameOrEmail(username, email) {
    const query = { $or: [{ username: username }, { email: email }] };
    const customer = await Models.Customer.findOne(query);
    return customer;
  },
  async insert(customer) {
    const mongoose = require('mongoose');
    customer._id = new mongoose.Types.ObjectId();
    const result = await Models.Customer.create(customer);
    return result;
  },
  async active(_id, token, active) {
    const query = {_id: _id, token: token};
    const update = {active: active};
    const result = await Models.Customer.findOneAndUpdate(query, update, {new: true});
    return result;
  }
};
module.exports = CustomerDAO;