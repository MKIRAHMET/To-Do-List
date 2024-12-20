const express = require('express');
const {create, read, removeTod} = require('../controller/index');
const { remove } = require('../model/todo');

const router = express.Router();

router.post('/todo/create', create);
router.get('/todos', read);
router.delete('/todo/:id',removeTodo);

module.exports =  router;