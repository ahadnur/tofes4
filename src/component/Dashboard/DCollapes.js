import { Grid } from '@mui/material'
import { colData } from './DCollapsData';
import {CollapsData} from './CollapsData';

export const DCollapes = () => {
   
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
