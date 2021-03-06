const express=require('express')
const router=express.Router();
const Raag=require('../Models/Product.model')
const RaagController=require('../Controllers/Raag.Controller')


//route to get all raagas
router.get('/',RaagController.GetAllRaags) 

//route add new raag
router.post('/',RaagController.AddRaag)

//route to get single raag
router.get('/:name',RaagController.GetSingleRaag)

//route to get raag with particular thatt
router.get('/thatt/:name',RaagController.GetRaagwithThatt)

//route to get raag with particular vadi
router.get('/vadi/:name',RaagController.GetRaagwithVadi)

//route to get raag with particular samvadi
router.get('/samvadi/:name',RaagController.GetRaagwithSamVadi)

//route to get raag with particular time
router.get('/time/:name',RaagController.GetRaagwithTime)

//route to update single Raag
router.patch('/:name',RaagController.UpdateSingleRaag)

//route to delete single raag
router.delete('/:name',RaagController.DeleteSingleRaag)

module.exports=router;


