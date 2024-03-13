
import Admin  from '../models/admin';
import { CONFIG } from '../common/config';
 
const seedAdmin  = async function(){
    try {
        let checkIfAdminExist = await Admin.findOne({ where : { status : 1, email :  CONFIG.ADMIN_DETAILS.email } });
        if(!checkIfAdminExist) {
            await Admin.create({
                email : CONFIG.ADMIN_DETAILS.email,
                password : CONFIG.ADMIN_DETAILS.password
            });
        }
        console.log('Admin already exists');
    } catch (error) { 
        console.log('Error inside createAdmin', error);
    }
}

export const BOOT = { seedAdmin };