const Router = require('express');
const router = Router();
const userProfileController = require('../controller/userProfileController.js');
const userTenantController = require('../controller/tenantProfileController.js');


/** POST Methods */
router.post('/user_profile',userProfileController.createUserProfile);
router.post('/tenant_profile',userTenantController.createTenantProfile);

/** GET Methods */
router.get('/user_profile',userProfileController.getAllUserprofile);
router.get('/user_profile/:id',userProfileController.getUserprofileById);
router.get('/tenant_profile',userTenantController.getAllTenantProfile);
router.get('/tenant_profile/:id',userTenantController.getTenantProfileById);

/** Delete Methods */
router.delete('/user_profile/:id',userProfileController.deleteUserProfile);
router.delete('/tenant_profile/:id',userTenantController.deleteTenantProfile);

/** update Methods */
router.patch('/user_profile/:id', userProfileController.updateUserProfile);
router.patch('/tenant_profile/:id',userTenantController.updateTenantProfile);


module.exports= {router};