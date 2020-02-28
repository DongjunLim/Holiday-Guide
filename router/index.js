const express = require('express');
const app = express();
const router = express.Router();
const nugu = require('nugu-kit');

router.post('/holiday-count', async (req, res) => {
    nugu.app(req,res);
    const {action,context} = req.body;
    const {parameters} = action;
    const {session} = context;
    
    /*
        공휴일 계산 로직 호출
    */
   return nugu.response();
})

router.post('/find-long-holiday', async (req, res) => {
    nugu.app(req,res);
    const {action,context} = req.body;
    const {parameters} = action;
    const {session} = context;
    
    /*
        연휴 찾는 로직 호출
    */
   return nugu.response();
})


router.post('/month-holiday', async (req, res) => {
    nugu.app(req,res);
    const {action,context} = req.body;
    const {parameters} = action;
    const {session} = context;
    
    /*
        
    */
   return nugu.response();
})


router.post('/find-holiday-date', async (req, res) => {
    nugu.app(req,res);
    const {action,context} = req.body;
    const {parameters} = action;
    const {session} = context;
    
    /*
        해당 공휴일 날짜 찾는 로직 호출
    */
   return nugu.response();
})


