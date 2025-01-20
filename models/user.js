const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
   name: {
      type: String,
      required: true,
   },
   email: {
      required: true,
      type: String,
      lowercase: true,
      unique: true,
   },
   password: {
      type: String,
      required: true,
   },

})

userSchema.pre('save', async function (next) {
   try {
      const salt = await bcrypt.genSalt(10)
      const hashedPassword = await bcrypt.hash(this.password, salt)
      this.password = hashedPassword
      next()
   } catch (error) {
      next(error)
   }
})
// userSchema.pre('findOneAndUpdate', async function (next) {
//    this._update.password = "bb"
// });

userSchema.post('save', async function (next) {
   try {

   } catch (error) {
      next(error)
   }
})

userSchema.methods.isValidPassword = async function (password) {
   try {
      return await bcrypt.compare(password, this.password)
   } catch (error) {
      throw error
   }
}

const userModel = mongoose.model('user', userSchema)

module.exports = userModel