import { Grid } from '@mui/material'
import { colData } from './Data';
import {CollapsData} from './CollapsData';

export const AdminCollapes = () => {
   
    return (
        <Grid container>

            {
                colData.map(item=>(
                    <CollapsData colData={item}/>
                ))
            }
           
        </Grid>
    )
}
