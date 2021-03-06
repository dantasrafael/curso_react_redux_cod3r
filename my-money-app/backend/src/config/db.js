const mongoose = require('mongoose')
mongoose.Promise = global.Promise

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório."
mongoose.Error.messages.Number.min = "O valor informado '{VALUE}' é menor que o limite mínimo de '{MIN}'."
mongoose.Error.messages.Number.max = "O valor informado '{VALUE}' é maior que o limite máximo de '{MAX}'."
mongoose.Error.messages.String.enum = "O valor informado '{VALUE}' não é válido para o atributo '{PATH}'."

module.exports = mongoose.connect('mongodb://localhost/mymoney', { useNewUrlParser: true })