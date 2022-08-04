import {subDays,format} from 'date-fns'


console.log(format(subDays(new Date(),12),'dd-MM-yy'));
